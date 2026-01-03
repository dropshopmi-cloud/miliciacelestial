import { Check, Star, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProgressButtonsProps {
  isRead: boolean;
  isFavorite: boolean;
  onToggleRead: () => void;
  onToggleFavorite: () => void;
  size?: 'sm' | 'default';
}

export const ProgressButtons = ({
  isRead,
  isFavorite,
  onToggleRead,
  onToggleFavorite,
  size = 'default',
}: ProgressButtonsProps) => {
  const iconSize = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';
  const buttonSize = size === 'sm' ? 'h-8 w-8' : 'h-10 w-10';

  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={(e) => {
          e.stopPropagation();
          onToggleRead();
        }}
        className={`${buttonSize} transition-all ${
          isRead
            ? 'bg-green-500/20 border-green-500/50 text-green-500 hover:bg-green-500/30'
            : 'hover:border-green-500/30 hover:text-green-500'
        }`}
        title={isRead ? 'Marcar como não lido' : 'Marcar como lido'}
      >
        {isRead ? (
          <Check className={iconSize} />
        ) : (
          <BookOpen className={iconSize} />
        )}
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite();
        }}
        className={`${buttonSize} transition-all ${
          isFavorite
            ? 'bg-gold/20 border-gold/50 text-gold hover:bg-gold/30'
            : 'hover:border-gold/30 hover:text-gold'
        }`}
        title={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
      >
        <Star className={`${iconSize} ${isFavorite ? 'fill-current' : ''}`} />
      </Button>
    </div>
  );
};
