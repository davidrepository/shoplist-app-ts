import { memo } from "react";
import { Shop } from "../../types/Shop";

type ShopItemProps = {
  shop: Shop;
};

export const ShopItem = memo(({ shop }: ShopItemProps) => {
  const [street, city] = shop.address
    .split(", ")
    .map((part: string) => part.replace(/\d{2}-\d{3}/, "").trim());

  return (
    <li
      className={`relative flex flex-col md:flex-row gap-8 items-center p-8 border rounded-xl bg-white`}
    >
      <img
        src={shop.imageUrl}
        alt={shop.id}
        loading="lazy"
        className="w-32 h-32 object-cover rounded-xl"
      />
      <div className="flex flex-col items-center gap-8 md:gap-0">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <p>ID: {shop.id}</p>
          <p className="font-black">{street}</p>
          <p>{city}</p>
        </div>
        <span
          className={`relative md:absolute md:top-8 md:right-8 text-xs px-2 py-1 rounded ${
            shop.type === "FRANCHISE" ? "bg-blue-600" : "bg-green-600"
          } text-white w-fit`}
        >
          {shop.type}
        </span>
      </div>
    </li>
  );
});
