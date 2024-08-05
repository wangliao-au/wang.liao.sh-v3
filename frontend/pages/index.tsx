import type { NextPage } from "next";
import { Nav } from "../components/navbar/navbar";
import { Layout } from "../components/navbar/layout";
import { Hero } from "../components/hero";
import { Trusted } from "../components/trusted";
import { Box } from "../components/styles/box";
import { Testimonials } from "../components/tesminonials";
import { Trial } from "../components/trial";
import { Footer } from "../components/footer";
import { Button } from "@nextui-org/react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Home: NextPage = () => {
  return (
    <Layout>
      <Nav />
      <Box as="main">
        <Hero />
        <Testimonials />
        <Trusted />
        {/* <Testimonials /> */}
        {/* <Statistics /> */}
        {/* <Plans /> */}
        {/* <Features2 /> */}
        {/* <Features3 /> */}
        {/* <Faq /> */}
        <Trial />
        <Footer />
        <Button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          css={{ position: "fixed", bottom: "5%", right: "5%" }}
          auto
          shadow
          flat
          color="gradient"
          icon={<ArrowUpwardIcon />}
        />
      </Box>
    </Layout>
  );
};

export default Home;
