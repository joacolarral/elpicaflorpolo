import { useTranslations } from "next-intl";
import Navbar from "../containers/Navbar";

export default function Home() {
  const t = useTranslations("bannerSection");
  return (
    <div>
      <Navbar />
    </div>
  );
}
