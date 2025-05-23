import React from "react";
import { ShopList } from "./components/ShopList";
import { sampleShops } from "./data/sampleShops";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex justify-center p-12 border-b shadow-xlg">
        <h1 className="text-3xl font-black">ShopList App</h1>
      </header>
      <main className="p-4 bg-gray-100 flex-grow overflow-auto">
        <ShopList shops={sampleShops} />
      </main>
      <footer className="flex p-4 border-t bottom-0 left-0 right-0 bg-white items-center flex-col md:flex-row md:justify-between gap-4 md:gap-0 text-xs uppercase">
        <p className="text-gray-700">Made by Dawid Płuciennik</p>
        <div className="flex gap-2">
          <p className="font-black">Stack:</p>
          <ul className="flex gap-2 text-gray-700">
            <li>React</li>
            <li>Typescript</li>
            <li>TailwindCSS</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
