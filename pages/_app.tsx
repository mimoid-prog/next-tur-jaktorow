import type { AppProps } from "next/app";
import "../styles/globals.scss";
import Router from "next/router";
import NProgress from "nprogress";
import "styles/select.scss";
import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
