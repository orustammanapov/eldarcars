"use client";

import "./globals.css";
import Top from "./components/Top";
import Logo from "./components/Logo";
import Burger from "./components/Burger";
import { Provider } from "./ContextProvider";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import './lib/i18n';

export default function RootLayout({ children }) {
  return (
    // className="w-screen h-screen overflow-hidden"
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        {/* <link rel="icon" type="image/svg+xml" href="/vite.svg" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Alle auto's</title>
      </head>

      {/* className="relative overflow-x-hidden" */}
      <body>

        <Provider>

          <header className="relative z-50 bg-gray-900">
            <div className="container mx-auto flex items-center justify-between py-4">
              <Logo width="w-40" src="/images/logo-cutted.png" />
              <ul className="flex space-x-10">
                <li className="hidden lg:block xl:block 2xl:block"><Contact /></li>
                <li><Burger /></li>
              </ul>
            </div>
          </header>

          <Menu />

          <main className="container mx-auto py-20 min-h-screen">
            {children}
          </main>

          <footer className="bg-gray-900">
            <div className="container mx-auto py-12 flex flex-col md:flex-row justify-between md:space-y-0 space-y-8">
              <Contact color="text-white" address={true} />
              <span className="text-sm text-gray-400">©2025 ELDARCARS</span>
            </div>
          </footer>

          <Top />

        </Provider>
      </body>
    </html>
  );
}
