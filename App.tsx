import React from "react";

import { NativeBaseProvider } from "native-base";

import { SignIn } from "./src/screens/SignIn";

export function App() {
  return (
    <NativeBaseProvider>
      <SignIn />
    </NativeBaseProvider>
  );
}
