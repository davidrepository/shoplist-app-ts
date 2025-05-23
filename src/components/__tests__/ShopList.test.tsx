import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ShopList } from "../ShopList";
import { Shop } from "../../types/Shop";

function TestWrapper({ shops }: { shops: Shop[] }) {
  const [search, setSearch] = useState("");

  const filteredShops = shops.filter(
    (shop) =>
      shop.address.toLowerCase().includes(search.toLowerCase()) ||
      (shop.address.split(", ")[1]?.toLowerCase() || "").includes(
        search.toLowerCase()
      )
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by Address or City"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        data-testid="search-input"
      />
      <ShopList shops={filteredShops} layout="grid" />
    </div>
  );
}

describe("ShopList component with filtering", () => {
  test("filters shops by search query", () => {
    const shops: Shop[] = [
      {
        id: "1",
        address: "456 Oak St 54321, Greenfield",
        imageUrl: "",
        type: "FRANCHISE",
      },
      {
        id: "2",
        address: "789 Pine Ave 98765, Maplewood",
        imageUrl: "",
        type: "FRANCHISE",
      },
    ];

    render(<TestWrapper shops={shops} />);

    const input = screen.getByPlaceholderText(/Search by Address or City/i);

    expect(screen.getByText(/Greenfield/i)).toBeInTheDocument();
    expect(screen.getByText(/Maplewood/i)).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "Maplewood" } });

    expect(screen.getByText(/Maplewood/i)).toBeInTheDocument();
    expect(screen.queryByText(/Greenfield/i)).not.toBeInTheDocument();
  });
});
