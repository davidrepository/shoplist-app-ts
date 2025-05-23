import React, { useMemo, useState } from "react";
import { ShopList } from "./components/ShopList";
import { sampleShops } from "./data/sampleShops";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  const [search, setSearch] = useState("");
  const [layout, setLayout] = useState<"grid" | "list">("grid");

  const filteredShops = useMemo(() => {
    const query = search.toLowerCase();
    return sampleShops.filter((shop) =>
      shop.address.toLowerCase().includes(query)
    );
  }, [search]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        search={search}
        onSearchChange={setSearch}
        layout={layout}
        setLayout={setLayout}
      />
      <main className="p-4 bg-gray-100 flex-grow overflow-auto">
        <ShopList shops={filteredShops} layout={layout} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
