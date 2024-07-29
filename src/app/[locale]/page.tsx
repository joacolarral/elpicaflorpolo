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
    </div>
  );
}
