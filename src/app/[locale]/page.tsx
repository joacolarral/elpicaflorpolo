"use client";

import { useEffect, useState } from "react";

import PicaflorLoading from "../components/Loading";
import BreedingTamingTraining from "../containers/Breeding_Taming_Training";
import Contact from "../containers/Contact";
import Footer from "../containers/Footer";
import HomeUI from "../containers/Home";
import Navbar from "../containers/Navbar";
import Patagonia from "../containers/Patagonia";
import Picaflor from "../containers/Picaflor";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsMounted(true);
  //   }, 2000);
  // }, []);

  if (!isMounted) {
    return <PicaflorLoading />;
  }

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
