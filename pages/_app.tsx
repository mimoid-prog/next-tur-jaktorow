import { useEffect } from "react";
import type { AppProps } from "next/app";
import "../styles/globals.scss";
import Router from "next/router";
import NProgress from "nprogress";
import "styles/select.scss";
import "nprogress/nprogress.css";
import { useRouter } from "next/router";
import * as gtag from "gtag";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;
