import { clients } from "@/data/clients";
import FAQCard from "./cards/FAQCard";
import Explore from "./Explore";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import PropertyListing from "./PropertyListing";
import Sales from "./Sales";
import Testimonital from "./Testimonial";

interface Client {
  name: string;
  logo: string;
}

const LandingPage = ({ clientData }: { clientData: string }) => {
  let client = (clients as Record<string, Client>)[clientData];
  if (!client) {
    client = {
      name: clientData.replaceAll("%2B", " "),
      logo: "/hero/hero.png",
    };
  }
  return (
    <div>
      <Navbar clientData={client} />
      <Hero />
      <Explore />
      <Sales />
      <Testimonital clientData={client} />
      <FAQCard />
      <Footer clientData={client} />
    </div>
  );
};
export default LandingPage;
