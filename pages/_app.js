import React, { useState, useEffect } from "react";
import "../styles/globals.css";
import Layout from "../comps/Layout";
import Loading from "./loading.js";
import CssBaseline from "@material-ui/core/CssBaseline";
import PropTypes from "prop-types";

function MyApp(props) {
  const { Component, pageProps } = props;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {loading === false ? (
        <Layout>
          <CssBaseline />
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Loading />
      )}
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
