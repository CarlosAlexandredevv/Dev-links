'use client';
import { MoonStar, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

export function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const isLight = theme === 'light';

  function handleToggleTheme() {
    setTheme(isLight ? 'dark' : 'light');
  }

  return (
    <button
      className="w-16 h-6 rounded-full relative border border-stroke bg-surface group transition-all duration-300"
      onClick={handleToggleTheme}
    >
      <div
        className={cn(
          'bg-white p-2 rounded-full text-black shadow-md absolute top-1/2 -translate-y-1/2 -right-1',
          'group-hover:border-8 group-hover:border-highlight transition-all duration-300 cursor-pointer',
          !isLight && ' -left-1 right-auto',
        )}
      >
        {isLight ? <Sun className="size-4" /> : <MoonStar className="size-4" />}
      </div>
    </button>
  );
}
