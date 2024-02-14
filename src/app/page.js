import Contact from "./components/Contact";
import Header from "./components/Header";
import Services from "./components/Services";
import AboutSection from "./components/AboutSection";
import Reviews from "./components/Reviews";
import ServicesCardsSection from "./components/ServicesCardsSection";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Services />
      <AboutSection title={`About Us`} />
      {/* <Reviews /> */}
      <ServicesCardsSection />
    </div>
  );
}
