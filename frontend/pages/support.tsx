import { Faq } from "../components/support/faq";
import { Help } from "../components/support/help";
import { RequireSignIn } from "../components/support/require-sign-in";
import { Footer } from "../components/footer";
import { Nav } from "../components/navbar/navbar";
import { Box } from "../components/styles/box";
import { useContext } from "react";
import { Context } from "./_app";

export default function Support(): JSX.Element {
  const { getters, setters } = useContext(Context);
  return (
    <>
      <Nav />
      <Box as="main">
        {getters.isVerified ? <Help /> : <RequireSignIn />}
        <Faq />
        <Footer />
      </Box>
    </>
  );
}
