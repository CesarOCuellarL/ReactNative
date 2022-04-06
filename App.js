import React, { useState } from "react";
import Amplify from "aws-amplify";
import awsconfig from "./src/aws-exports";
import { withAuthenticator } from "aws-amplify-react-native";

import MainNavigator from "./src/components/Navigator";

import { GlobalProvider } from "./src/context/global/global.context";

Amplify.configure({
  ...awsconfig,
  Storage: {
    AWSS3: {
      bucket:
        "https://amplify-closeline-dev-221103-deployment.s3.amazonaws.com/"
    },
  },
});

function App() {
  return (
    <GlobalProvider>
      <MainNavigator />
    </GlobalProvider>
  );
}
export default withAuthenticator(App);
