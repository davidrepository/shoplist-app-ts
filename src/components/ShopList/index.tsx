import { Shop } from "../../types/Shop";
import { ShopItem } from "../ShopItem";

type ShopListProps = {
  shops: Shop[];
  layout: "grid" | "list";
};

export const ShopList = ({ shops, layout }: ShopListProps) => {
  return (
    <div className="space-y-6">
      <ul
        className={
          layout === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6"
            : "flex flex-col gap-6"
        }
      >
        {shops.map((shop: any) => (
          <ShopItem key={shop.id} shop={shop} />
        ))}
      </ul>
    </div>
  );
};
