import * as React from "react";
import {NextUIProvider} from "@nextui-org/react";
import Router from './Router';

function App() {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <NextUIProvider>
    <Router />
    </NextUIProvider>
  );
}

export default App;
