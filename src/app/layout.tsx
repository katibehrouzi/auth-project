import { ReactNode } from 'react';
import '../styles/globals.scss';
import { AuthProvider } from '@/context/AuthContext';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}

export default RootLayout