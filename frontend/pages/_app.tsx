import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { createContext, useState } from "react";
// import CustomCursor from "../components/cursor/CustomCursor";

const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {},
  },
});

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {},
  },
});

type ContextValue = {
  getters: {
    isAuth: boolean;
    // Add more getters if needed
  };
  setters: {
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
    // Add more setters if needed
  };
};

export const Context = createContext({} as ContextValue);

function MyApp({ Component, pageProps }: AppProps) {
  const [isAuth, setIsAuth] = useState(false);

  const getters = {
    isAuth,
  };

  const setters = {
    setIsAuth,
  };

  return (
    <Context.Provider value={{ getters, setters }}>
      <NextThemesProvider
        defaultTheme="dark"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider>
          {/* <CustomCursor /> */}
          <Component {...pageProps} />
        </NextUIProvider>
      </NextThemesProvider>
    </Context.Provider>
  );
}

export default MyApp;
