import { Nav } from "../components/navbar/navbar";
import { Box } from "../components/styles/box";
import { Features1 } from "../components/features1";
import { Features2 } from "../components/features2";
import { Features3 } from "../components/features3";
import { Testimonials } from "../components/tesminonials";
import { Statistics } from "../components/statistics";
import { Footer } from "../components/footer";

export default function About(): JSX.Element {
  return (
    <>
      <Nav />
      <Box as="main">
        <Features1 />
        <Features2 />
        <Features3 />
        <Footer />
      </Box>
    </>
  );
}
