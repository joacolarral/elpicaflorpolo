import { NAVBAR_ITEMS } from "@/app/constants";

import ContactBrand from "./ContactBrand";
import ContactUser from "./ContactUser";

const Contact = () => {
  return (
    <div id={NAVBAR_ITEMS.CONTACT}>
      <ContactUser />
      <ContactBrand />
    </div>
  );
};

export default Contact;
