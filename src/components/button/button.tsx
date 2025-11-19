import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  href: string;
}

export function Button({ children, href }: ButtonProps) {
  return (
    <button
      className={cn(
        'py-4 border border-stroke rounded-[8px] text-md bg-surface text-black transition-all duration-300 cursor-pointer  w-full',
        'hover:border-black',
        'dark:hover:border-white dark:text-white',
      )}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </button>
  );
}
