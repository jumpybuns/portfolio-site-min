import React, { useState, useEffect, useReducer, createContext } from "react";
import "../styles/globals.css";
import Layout from "../comps/Layout";
import Loading from "./loading.js";
import { GlobalStyles } from "../theme/GlobalStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import PropTypes from "prop-types";
import ThemeProvider from "../theme/ThemeProvider";

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
        <ThemeProvider>
          <Layout>
            <GlobalStyles />
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
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
