import { ReactNode } from 'react';
import '../styles/globals.scss';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default RootLayout