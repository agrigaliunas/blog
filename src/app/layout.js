import Header from './components/Header/Header'
import { Analytics } from '@vercel/analytics/react';
import './globals.css'

export const metadata = {
  title: 'Agustin Grigaliunas',
  description: 'Bienvenido al blog de Agustin Grigaliunas. Sigueme en mis redes sociales :).',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
