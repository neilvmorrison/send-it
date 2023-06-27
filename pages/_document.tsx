import { createGetInitialProps } from "@mantine/next";
import { Html, Head, Main, NextScript } from "next/document";

let getInitialProps = createGetInitialProps();

export default function Document() {
  getInitialProps = getInitialProps;
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
