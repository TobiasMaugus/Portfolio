import type { ReactNode } from 'react';
import { colors } from '../colors/colors.ts';

type BgProps = {
  children?: ReactNode;
};

export default function Bg({ children }: BgProps) {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: colors.bg,
        display: 'flex',
        justifyContent: 'center',   
        alignItems: 'center',  
        flexDirection: 'column',     
        padding: '3.5%',               
        boxSizing: 'border-box',    
      }}
    >
      {children}
    </div>
  );
}
