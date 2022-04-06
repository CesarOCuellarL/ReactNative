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
        "amplify-proyecto181340-dev-124031-deployment",
      region: "us-east-1"
    },
    Analytics: {
      disabled: true,      
    }
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
