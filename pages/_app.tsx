import { AppProps } from "next/app";
import Amplify from "@aws-amplify/core";
import { AwsConfig } from "@/config/auth";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import Layout from "@/components/Layout";
import { ModalProvider, SpotlightProvider } from "@/components";
import AuthContextProvider from "@/contexts/AuthContext";
import ProfileProvier from "@/contexts/ProfileContext";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  Amplify.configure({
    Auth: {
      ...AwsConfig,
      oauth: {
        domain: "https://authtestapp.auth.us-east-2.amazoncognito.com",
        scope: [
          "email",
          "phone_number",
          "profile",
          "openid",
          "aws.cognito.signin.user.admin",
        ],
        redirectSignIn: `localhost`,
        redirectSignOut: `localhost`,
        responseType: "code",
      },
    },
  });

  return (
    <>
      <Head>
        <title>SendIt</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "light",
        }}
      >
        <AuthContextProvider>
          <ProfileProvier>
            <SpotlightProvider>
              <ModalProvider>
                <Layout>
                  <Component {...pageProps} />
                  <Notifications />
                </Layout>
              </ModalProvider>
            </SpotlightProvider>
          </ProfileProvier>
        </AuthContextProvider>
      </MantineProvider>
    </>
  );
}
