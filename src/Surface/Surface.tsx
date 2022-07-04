import { PropsWithChildren } from 'react';
import './Surface.css';

export interface GlassProps extends PropsWithChildren {
  background?: string;
  transparency?: string;
  blur?: string;
  shadow?: string;
}

export function Surface({
  background,
  transparency,
  blur,
  shadow,
  children
}: GlassProps) {
  return (
    <div className="glass"
      style={{
        background: 'rgba()'
      }}
      data-trans={transparency || "medium"}
      data-blur={blur || "light"}
    >
      {children}
    </div>
  )
}