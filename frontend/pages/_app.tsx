import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { createContext, Dispatch, SetStateAction, useState } from "react";
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
    isVerified: boolean;
  };
  setters: {
    setIsVerified: Dispatch<SetStateAction<boolean>>;
    setIsAuth: Dispatch<SetStateAction<boolean>>;
  };
};

export const Context = createContext({} as ContextValue);

function MyApp({ Component, pageProps }: AppProps) {
  const [isAuth, setIsAuth] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const getters = {
    isAuth,
    isVerified,
  };

  const setters = {
    setIsAuth,
    setIsVerified,
  };

  return (
    <Context.Provider value={{ getters, setters }}>
      <NextThemesProvider
        defaultTheme="system"
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
