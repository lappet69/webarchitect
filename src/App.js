import "./App.scss";
import "swiper/scss";
import React from "react";

import "react-medium-image-zoom/dist/styles.css";
import Navbar from "./components/navbar/Navbar";
// import Footer from "./components/footer/Footer";

import Header from "./components/navbar/Header";
import NavHeader from "./components/navbar/NavHeader";
import Routes from "./Routes";
import Layout from "./components/Layout";
import Footer from "./components/footer/Footer";
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
