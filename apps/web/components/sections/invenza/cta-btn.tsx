import { cn } from '../../../lib/utils';
import { Button } from '../../ui/button';

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'sm' | 'lg';
  variant?: 'default' | 'outline' | 'secondary';
  href?: string;
  onClick?: () => void;
}

export default function CtaBtn({
  children,
  className,
  size = 'default',
  variant = 'default',
  href,
  onClick
}: CTAButtonProps) {
  const ButtonElement = (
    <Button
      className={cn(
        'relative overflow-hidden transition-all duration-300 font-medium',
        variant === 'default' &&
          'bg-primary-600 hover:bg-primary-700 text-white',
        className
      )}
      size={size}
      variant={variant}
      onClick={onClick}
    >
      <span className='relative z-10'>{children}</span>
      <span className='absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-700 opacity-0 transition-opacity duration-300 hover:opacity-100' />
    </Button>
  );

  if (href) {
    return (
      <a href={href} className='inline-block'>
        {ButtonElement}
      </a>
    );
  }

  return ButtonElement;
}
