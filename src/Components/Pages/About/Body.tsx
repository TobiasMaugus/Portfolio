import type { ReactNode } from 'react';
import { colors } from '../../../colors/colors';

type BodyHelloProps = {
  children?: ReactNode;
};

export default function BodyAbout({ children }: BodyHelloProps) {
  return (
    <div
      style={{
        width: '95%',
        height: '80%',
        backgroundColor: '#ffffff',
        borderColor: colors.second,
        borderLeftWidth: '1px',
        borderRightWidth: '1px'
      }}
    >
      {children}
    </div>
  );
}
