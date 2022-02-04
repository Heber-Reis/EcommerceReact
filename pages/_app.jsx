import Head from "next/head";
import "../style.css";

function App ({ Component, pageProps }) {
  return(
    <>
      <Head>
        <title>Sneakers</title>
        <Component {...pageProps}/>
      </Head>
    </>
  )
}

export default App;