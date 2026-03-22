import { ImgHTMLAttributes } from 'react';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  width?: number;
  height?: number;
}

export default function Image({ src, alt, fill, priority, className, width, height, ...props }: ImageProps) {
  const style: React.CSSProperties = fill 
    ? { position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' as const }
    : {};

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      {...props}
    />
  );
}
