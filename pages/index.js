import dynamic from "next/dynamic";
import Head from "next/head";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import News from "../src/components/News";
import Newsletter from "../src/components/Newsletter";
import Partners from "../src/components/Partners";
import Process from "../src/components/Process";
import Service from "../src/components/Service";
import Skills from "../src/components/Skills";
import Testimonial from "../src/components/Testimonial";
import Layout from "../src/layout/Layout";

const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});

const Index = () => {
  return (
    <Layout>
      <Head>
        <title>The Paw Pals | Home</title>
        <script id="setmore_script" type="text/javascript" src="https://my.setmore.com/webapp/js/src/others/setmore_iframe.js" async />
      </Head>
      <Home />
      <About />
      <Service />
      {/*<Process />*/}
      <Portfolio />
      {/*<Testimonial />*/}
      <Partners />
      {/*<News />*/}
      <Contact />
    </Layout>
  );
};
export default Index;
