import CurrencyExchangePage from "../components/CurrencyExchangePage";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import Bank from "../components/skroll/Bank";
import Stats from "../components/Stats";
import Testimonials from "./Testimonials";


export default function Home() {
  return (
    <>
      <Hero  />
      <Stats />                               
 <Bank/>
      <ServiceCard/>
 <Testimonials/>
                       
    </>
  );
}
