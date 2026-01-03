import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';

type ProgressItem = {
  item_type: string;
  item_id: string;
  is_read: boolean;
  is_favorite: boolean;
};

export const useUserProgress = () => {
  const { user } = useAuth();
  const [progress, setProgress] = useState<Record<string, ProgressItem>>({});
  const [loading, setLoading] = useState(true);

  const getKey = (type: string, id: string) => `${type}:${id}`;

  const fetchProgress = useCallback(async () => {
    if (!user) {
      setProgress({});
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', user.id);

      if (error) throw error;

      const progressMap: Record<string, ProgressItem> = {};
      data?.forEach((item) => {
        progressMap[getKey(item.item_type, item.item_id)] = {
          item_type: item.item_type,
          item_id: item.item_id,
          is_read: item.is_read || false,
          is_favorite: item.is_favorite || false,
        };
      });
      setProgress(progressMap);
    } catch (error) {
      console.error('Error fetching progress:', error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchProgress();
  }, [fetchProgress]);

  const toggleRead = async (itemType: string, itemId: string) => {
    if (!user) return;

    const key = getKey(itemType, itemId);
    const current = progress[key];
    const newIsRead = !current?.is_read;

    // Optimistic update
    setProgress((prev) => ({
      ...prev,
      [key]: {
        item_type: itemType,
        item_id: itemId,
        is_read: newIsRead,
        is_favorite: current?.is_favorite || false,
      },
    }));

    try {
      const { error } = await supabase
        .from('user_progress')
        .upsert(
          {
            user_id: user.id,
            item_type: itemType,
            item_id: itemId,
            is_read: newIsRead,
            read_at: newIsRead ? new Date().toISOString() : null,
            is_favorite: current?.is_favorite || false,
          },
          { onConflict: 'user_id,item_type,item_id' }
        );

      if (error) throw error;
    } catch (error) {
      console.error('Error toggling read:', error);
      // Revert on error
      setProgress((prev) => ({
        ...prev,
        [key]: current || { item_type: itemType, item_id: itemId, is_read: false, is_favorite: false },
      }));
    }
  };

  const toggleFavorite = async (itemType: string, itemId: string) => {
    if (!user) return;

    const key = getKey(itemType, itemId);
    const current = progress[key];
    const newIsFavorite = !current?.is_favorite;

    // Optimistic update
    setProgress((prev) => ({
      ...prev,
      [key]: {
        item_type: itemType,
        item_id: itemId,
        is_read: current?.is_read || false,
        is_favorite: newIsFavorite,
      },
    }));

    try {
      const { error } = await supabase
        .from('user_progress')
        .upsert(
          {
            user_id: user.id,
            item_type: itemType,
            item_id: itemId,
            is_favorite: newIsFavorite,
            favorited_at: newIsFavorite ? new Date().toISOString() : null,
            is_read: current?.is_read || false,
          },
          { onConflict: 'user_id,item_type,item_id' }
        );

      if (error) throw error;
    } catch (error) {
      console.error('Error toggling favorite:', error);
      // Revert on error
      setProgress((prev) => ({
        ...prev,
        [key]: current || { item_type: itemType, item_id: itemId, is_read: false, is_favorite: false },
      }));
    }
  };

  const isRead = (itemType: string, itemId: string) => {
    return progress[getKey(itemType, itemId)]?.is_read || false;
  };

  const isFavorite = (itemType: string, itemId: string) => {
    return progress[getKey(itemType, itemId)]?.is_favorite || false;
  };

  const getFavorites = (itemType: string) => {
    return Object.values(progress)
      .filter((p) => p.item_type === itemType && p.is_favorite)
      .map((p) => p.item_id);
  };

  return {
    loading,
    progress,
    toggleRead,
    toggleFavorite,
    isRead,
    isFavorite,
    getFavorites,
    refetch: fetchProgress,
  };
};
