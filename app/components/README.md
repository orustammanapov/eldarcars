Component Notes
===============

Menus
-----
Desktop Menu
```tsx
import Link from "next/link";
import React, { useContext } from "react";
import { Context } from '../ContextProvider';
import Social from "../components/Social";

export default function DesktopMenu() {

  const { open, toggle } = useContext(Context);

  return (open && 
    <nav className={`hidden lg:block bg-gray-900 lg:block xl:block 2xl:block`}>
      <div className="container mx-auto h-screen relative">
        <ul className="absolute top-1/3 transform -translate-y-1/3 text-xl">
          <li><Link href="/" onClick={toggle}>Alle auto's</Link></li>
          <li><Link href="/wat-betreft" onClick={toggle}>Wat betreft</Link></li>
        </ul>
        <div className="absolute bottom-24">
          <Social />
        </div>
      </div>
    </nav>);
};
```

Mobile Menu
```tsx
import Link from "next/link";
import Contact from "../components/Contact";
import Logo from "../components/Logo";
import Social from "../components/Social";
import { Context } from "../ContextProvider";
import { useContext } from "react";
import Burger from "../components/Burger";

export default function MobileMenu() {

  const { open, toggle } = useContext(Context);
  
  return (open && 
    <div className="block lg:hidden">
      <section className="absolute top-0 right-0 z-10 flex-col h-screen xs:w-1/2 p-3 w-full bg-gray-900 text-center">

        <ul className="flex justify-between p-4 pt-4">
          <li><Logo width="w-32" src="/images/logo-cutted.png" /></li>
          <li><Burger /></li>
        </ul>      
        
        <div className="relative h-screen">

          <div className="absolute top-1/3 left-1/2 transform -translate-y-1/3 -translate-x-1/2">
            <ul className="p-3 mb-8 text-xl">
              <li><Link href="/" onClick={toggle}>Alle auto's</Link></li>
              <li><Link href="/wat-betreft" onClick={toggle}>Wat betreft</Link></li>
            </ul>

            <Contact />
          </div>

          <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2">
            <Social />
          </div>
        </div>
      </section>
    </div>
  );
}
```

Social Icons
```tsx
import { faFacebook, faInstagram, faTwitter, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Social() {
  return (
    <ul className="flex space-x-4">
      <li>
        <a target="_blank" rel="noopener noreferrer" href="#" aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebook} aria-hidden />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noopener noreferrer" href="#" aria-label="Twitter">
          <FontAwesomeIcon icon={faTwitter} aria-hidden />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noopener noreferrer" href="#" aria-label="Youtube">
          <FontAwesomeIcon icon={faYoutube} aria-hidden />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noopener noreferrer" href="#" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} aria-hidden />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noopener noreferrer" href="https://wa.me/#?text=Hi" aria-label="Whatsapp">
          <FontAwesomeIcon icon={faWhatsapp} aria-hidden />
        </a>
      </li>
    </ul>
  );
}
```

Contact
```tsx
import { faMobile, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Contact({ color="text-gray-400", address=false }) {
  return (
    <ul className={`flex flex-col lg:flex-row sm:space-y-0 lg:space-x-4 space-x-0 ${color}`}>
      <li><Link href="tel:+320492/403404">+32 (0) 492/403 404</Link></li>
      <li><Link href="mailto:eldarcars@gmail.com">eldarcars@gmail.com</Link></li>
      {address && <li>8850 ARDOOIE, OOSTLAAN 23</li>}
    </ul>
  );
}
```