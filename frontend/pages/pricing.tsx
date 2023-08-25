import { Faq } from "../components/faq";
import { Nav } from "../components/navbar/navbar";
import { Plans } from "../components/plans";
import { Box } from "../components/styles/box";

export default function Pricing(): JSX.Element {
  return (
    <>
      <Nav />
      <Box as="main">
        <Plans />
        <Faq />
      </Box>
    </>
  );
}
