// components/Wrapper.tsx
import React, { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      {children}
    </div>
  );
};

export default Wrapper;
