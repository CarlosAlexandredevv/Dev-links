import { cn } from '@/lib/utils';

interface ButtonLinkProps {
  label: string;
  url: string;
}

export function ButtonLink({ label, url }: ButtonLinkProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <button
        className={cn(
          'py-4 border border-stroke rounded-[8px] text-md bg-surface text-black transition-all duration-300 cursor-pointer  w-full',
          'hover:border-black',
          'dark:hover:border-white dark:text-white',
        )}
      >
        {label}
      </button>
    </a>
  );
}
