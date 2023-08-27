import { Faq } from "../components/support/faq";
import { Help } from "../components/support/help";
import { Footer } from "../components/footer";
import { Nav } from "../components/navbar/navbar";
import { Plans } from "../components/plans";
import { Box } from "../components/styles/box";

export default function Support(): JSX.Element {
  return (
    <>
      <Nav />
      <Box as="main">
        <Help />
        <Faq/>
        <Footer />
      </Box>
    </>
  );
}
