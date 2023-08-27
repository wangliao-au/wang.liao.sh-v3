import { Help } from "../components/contact/help";
import { Footer } from "../components/footer";
import { Nav } from "../components/navbar/navbar";
import { Box } from "../components/styles/box";

export default function Contact(): JSX.Element {
  return (
    <>
      <Nav />
      <Box as="main">
        <Help />
        <Footer />
      </Box>
    </>
  );
}
