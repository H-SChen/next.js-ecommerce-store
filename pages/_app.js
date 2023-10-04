import '../styles/globals.css';
import Layout from '../components/layout/Layout';

// here we wrap the styling the every new comp. with the comp. '../components/layout/Layout'!!!

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
