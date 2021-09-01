import React, { useEffect } from "react";
import "../styles/globals.css";
import Layout from "../comps/Layout";
import CssBaseline from "@material-ui/core/CssBaseline";
import PropTypes from "prop-types";

function MyApp(props) {
  const { Component, pageProps } = props;

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <>
      <Layout>
        <CssBaseline />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
