import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
  /* Global styles from the provided CSS */
  @font-face {
    font-family: "Geneva 9.2";
    src: local("Geneva 9.2"), url(/fonts/geneva-9-2.woff2) format("woff2");
    font-weight: 400 !important;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: pixChicago;
    src: url(/fonts/pixChicago.woff2) format("woff2");
    font-weight: 400 !important;
    font-style: normal;
    font-display: swap;
  }
  :root {
    --font-body: "Geneva 9.2", sans-serif;
    --font-title: "pixChicago", sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  body, html {
    background: #fff;
    color: #000;
    position: relative;
  }
  body, html {
    margin: 0;
    padding: 0;
    overflow: hidden;
    scroll-behavior: none;
    -ms-scroll-chaining: none;
    overscroll-behavior: none;
  }
  body {
    min-height: 100vh;
    font-family: var(--font-body);
    background: repeating-conic-gradient(#cf92a0 0 25%, #f7aebe 0 50%) 50% / 3px 3px;
  }
  html>body {
    transition: all 2s;
  }
  a {
    cursor: pointer;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-title);
    margin: 0 0 1em;
  }
  h2 {
    line-height: 1.75rem;
  }
  h3 {
    margin-bottom: .2em;
  }
  h3, p {
    font-size: 1.25em;
  }
  p {
    margin: 0 0 1em;
    line-height: 1.5rem;
  }
  p b {
    font-family: monospace;
    -webkit-text-decoration: dashed;
    text-decoration: dashed;
  }
  p a {
    text-decoration: none;
    color: #007aff;
  }
`;

const Layout = ({ children }) => ( <
    >
    <
    Head >
    <
    meta name = "description"
    content = "HIFI Labs is a creative incubator and artist mentorship collective building an artist-owned, community-powered future for musicians. Fueled by web3 technology and industry-changing innovation, HIFI Labs&#x27; mission is to achieve a more equitable and sustainable music economy." /
    >
    <
    meta name = "twitter:card"
    content = "summary_large_image" / >
    <
    meta name = "twitter:site"
    content = "@hifilabs" / >
    <
    meta name = "twitter:creator"
    content = "@hifilabs" / >
    <
    meta property = "og:description"
    content = "HIFI Labs is a creative incubator and artist mentorship collective building an artist-owned, community-powered future for musicians. Fueled by web3 technology and industry-changing innovation, HIFI Labs&#x27; mission is to achieve a more equitable and sustainable music economy." /
    >
    <
    meta property = "og:url"
    content = "https://hifilabs.co" / >
    <
    meta property = "og:type"
    content = "website" / >
    <
    meta property = "og:image"
    content = "https://hifilabs.co/images/HIFILABS/social-og.png" / >
    <
    meta property = "og:image:alt"
    content = "HIFI Labs" / >
    <
    meta property = "og:image:width"
    content = "1200" / >
    <
    meta property = "og:image:height"
    content = "600" / >
    <
    meta property = "og:site_name"
    content = "HIFI Labs" / >
    <
    meta name = "keywords"
    content = "HIFI Labs,artist development,artist mentorship,technology,music" / >
    <
    link rel = "apple-touch-icon"
    sizes = "180x180"
    href = "/apple-touch-icon.png" / >
    <
    link rel = "icon"
    type = "image/png"
    sizes = "32x32"
    href = "/favicon-32x32.png" / >
    <
    link rel = "icon"
    type = "image/png"
    sizes = "16x16"
    href = "/favicon-16x16.png" / >
    <
    link rel = "mask-icon"
    href = "/safari-pinned-tab.svg"
    color = "#ffffff" / >
    <
    meta name = "msapplication-TileColor"
    content = "#ffffff" / >
    <
    meta name = "theme-color"
    content = "#ffffff" / >
    <
    meta charSet = "utf-8" / >
    <
    meta http - equiv = "x-ua-compatible"
    content = "ie=edge" / >
    <
    meta name = "viewport"
    content = "width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no" / >
    <
    meta content = "true"
    name = "HandheldFriendly" / >
    <
    meta content = "yes"
    name = "apple-mobile-web-app-capable" / >
    <
    meta content = "white"
    name = "apple-mobile-web-app-status-bar-style" / >
    <
    title > HIFI Labs | HIFI Labs < /title> <
    meta name = "robots"
    content = "index,follow" / >
    <
    meta property = "og:title"
    content = "HIFI Labs | HIFI Labs" / >
    <
    /Head> <
    GlobalStyle / >
    <
    div id = "__next" > { children } < /div> < / >
);

export default Layout;