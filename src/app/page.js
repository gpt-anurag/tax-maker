import Contact from "./components/Contact";
import Header from "./components/Header";
import Services from "./components/Services";
import AboutSection from "./components/AboutSection";
import Reviews from "./components/Reviews";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Services />
      <AboutSection title={`Why our consulting?`} />
      <Reviews />
    </div>
  );
}
