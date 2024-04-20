import "../styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <head>
        <meta charSet="UTF-8" />
        <title>Up Talent</title>
        <meta name="author" content="Pedro Lucas Macedo de Moraes"/>
        <meta name="description" content="Site dA Up Talent"/>
        <meta name="keywords" content="sites, web, desenvolvimento"/>
        <link rel='shortcut icon' href='/up.ico' />
      </head>
      <body>{children}</body>
    </html>
  );
}
