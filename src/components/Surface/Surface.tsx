import { PropsWithChildren } from 'react';
import { useColor } from '../Color';
import './Surface.scss';

export interface GlassProps extends PropsWithChildren {
  background?: string;
  transparency?: string;
  blur?: string;
  shadow?: string;
}

export function Surface({
  background = "#ffffff", // hex or rbg values
  transparency = "20", // numbers 1 through 100, none, xlight, light, medium, full,
  blur = "25", // numbers 1 through 50, none, none, xlight, light, medium, full  
  shadow = "10", // numbers 1 through 100, none, xlight, light, medium, full.
  children
}: GlassProps) {

  let { rgb } = useColor(background);

  return (
    <div className={`glass trans_${transparency} blur_${blur} shade_${shadow} bg_${rgb.r+','+rgb.g+','+rgb.b}`}
      style={{
        boxShadow: `0 4px 30px rgba(0, 0, 0, ${(parseInt(shadow) / 100)})`,
        backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b}, ${(parseInt(transparency) / 100)})`,
      }}
    >
      {children}
    </div>
  )
}
