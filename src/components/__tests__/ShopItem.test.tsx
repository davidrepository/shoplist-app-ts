import { render, screen } from "@testing-library/react";
import { ShopItem } from "../ShopItem";
import { Shop } from "../../types/Shop";

const mockShop: Shop = {
  id: "42",
  address: "123 Main St 12345, Springfield",
  imageUrl: "",
  type: "FRANCHISE",
};

describe("ShopItem component", () => {
  test("renders shop info", () => {
    render(<ShopItem shop={mockShop} />);
    expect(screen.getByText(/123 Main St/i)).toBeInTheDocument();
    expect(screen.getByText(/Springfield/i)).toBeInTheDocument();
  });

  test("renders shop type badge", () => {
    render(<ShopItem shop={mockShop} />);
    expect(screen.getByText(/FRANCHISE/i)).toBeInTheDocument();
  });

  test("renders image alt attribute correctly", () => {
    render(<ShopItem shop={mockShop} />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("alt", mockShop.id);
  });
});
