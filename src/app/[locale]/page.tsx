import BreedingTamingTraining from "../containers/Breeding_Taming_Training";
import Contact from "../containers/Contact";
import Footer from "../containers/Footer";
import HomeUI from "../containers/Home";
import Navbar from "../containers/Navbar";
import Patagonia from "../containers/Patagonia";
import Picaflor from "../containers/Picaflor";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeUI />
      <Picaflor />
      <Patagonia />
      <BreedingTamingTraining />
      <Contact />
      <Footer />
    </div>
  );
}
