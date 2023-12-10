import '@/styles/globals.css'

// pages/_app.js
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class"> {/* You can choose 'class' or 'data-theme' */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;