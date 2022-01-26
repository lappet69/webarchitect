import "./App.scss";
import "swiper/scss";
import React from "react";

import "react-medium-image-zoom/dist/styles.css";
import Routes from "./Routes";
import Layout from "./components/Layout";

function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Routes>
          <React.Component {...pageProps} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
