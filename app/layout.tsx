export const metadata = {
  title: 'SuperTap',
  description: 'NFC Digital Business Cards',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
