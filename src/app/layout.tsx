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
      {/* <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/css/flag-icons.min.css"
      /> */}
      <body>{children}</body>
    </html>
  )
}
