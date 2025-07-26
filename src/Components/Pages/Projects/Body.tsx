import type { ReactNode } from 'react';
import { colors } from '../../../colors/colors';

type BodyHelloProps = {
  children?: ReactNode;
};

export default function BodyProjects({ children }: BodyHelloProps) {
  return (
    <div
      style={{
        width: '95%',
        height: '80%',
        backgroundColor: '#000000',
        borderColor: colors.second,
        borderLeftWidth: '1px',
        borderRightWidth: '1px'
      }}
    >
      {children}
    </div>
  );
}
