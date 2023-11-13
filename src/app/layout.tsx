import './input.css'
import 'react-slideshow-image/dist/styles.css'

export const metadata = {
  title: 'Ranga Technologies Pvt Ltd ',
  description: 'Welcome to Ranga Technologies, your go-to source Web, Mobile, Blockchain Development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="shortcut icon" type="image/png" href="/logo.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
