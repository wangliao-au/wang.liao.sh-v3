import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";

import Router from "./Router";
import { ThemeProvider } from "next-themes";

function App() {
  // 2. Wrap NextUIProvider at the root of your app
  return (
      <NextUIProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          value={{ light: "light-theme", dark: "dark-theme" }}
        >
          <Router />
        </ThemeProvider>
      </NextUIProvider>
  );
}

export default App;
