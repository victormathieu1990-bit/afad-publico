import './globals.css';

export const metadata = {
  title: 'AFAD',
  description: 'Asociación de Amigos de los Animales',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
