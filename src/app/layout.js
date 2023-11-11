import Header from './components/Header/Header'
import './globals.css'

export const metadata = {
  title: 'Agustin Grigaliunas',
  description: 'Bienvenido a mi blog.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
