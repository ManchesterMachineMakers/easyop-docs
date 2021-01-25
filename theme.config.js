export default {
  repository: 'https://github.com/ManchesterMachineMakers/easyop-docs',
  titleSuffix: ' – EasyOp',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">EasyOp</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        FTC Coding Made Easy
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="EasyOp: FTC Coding Made Easy" />
      <meta name="og:description" content="EasyOp: FTC Coding Made Easy" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://easyop-docs.vercel.app/demo.png" />
      <meta name="twitter:site:domain" content="easyop-docs.vercel.app" />
      <meta name="twitter:url" content="https://easyop-docs.vercel.app" />
      <meta name="og:title" content="EasyOp: FTC Coding Made Easy" />
      <meta name="og:image" content="https://easyop-docs.vercel.app/demo.png" />
      <meta name="apple-mobile-web-app-title" content="Nextra" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
      <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditOnGitHubLink: false,
  footerText: <>Copyleft {new Date().getFullYear()} ManchesterMachineMakers. Made with <a href="https://github.com/shuding/nextra">Nextra</a>.</>
}
