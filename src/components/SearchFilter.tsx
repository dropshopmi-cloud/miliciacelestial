import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, X, Star } from 'lucide-react';

interface SearchFilterProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  onFilterFavorites?: () => void;
  showFavoritesFilter?: boolean;
  favoritesActive?: boolean;
  categories?: string[];
  selectedCategory?: string;
  onCategoryChange?: (category: string | null) => void;
}

export const SearchFilter = ({
  placeholder = "Buscar...",
  onSearch,
  onFilterFavorites,
  showFavoritesFilter = false,
  favoritesActive = false,
  categories = [],
  selectedCategory,
  onCategoryChange,
}: SearchFilterProps) => {
  const [query, setQuery] = useState('');

  const handleSearch = (value: string) => {
    setQuery(value);
    onSearch(value);
  };

  const clearSearch = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder={placeholder}
            className="pl-10 pr-10 bg-card border-border"
          />
          {query && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
        {showFavoritesFilter && onFilterFavorites && (
          <Button
            variant={favoritesActive ? "default" : "outline"}
            size="icon"
            onClick={onFilterFavorites}
            className={favoritesActive ? "bg-gold text-gold-dark" : ""}
          >
            <Star className={`w-4 h-4 ${favoritesActive ? "fill-current" : ""}`} />
          </Button>
        )}
      </div>

      {categories.length > 0 && (
        <div className="flex flex-wrap gap-2">
          <Button
            variant={!selectedCategory ? "default" : "outline"}
            size="sm"
            onClick={() => onCategoryChange?.(null)}
            className={!selectedCategory ? "bg-gold/20 text-gold border-gold/30" : ""}
          >
            Todos
          </Button>
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "default" : "outline"}
              size="sm"
              onClick={() => onCategoryChange?.(cat)}
              className={selectedCategory === cat ? "bg-gold/20 text-gold border-gold/30" : ""}
            >
              {cat}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};
