import { Shop } from "../../types/Shop";
import { ShopItem } from "../ShopItem";

export const ShopList = ({ shops }: { shops: Shop[] }) => {
  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        {shops.map((shop: any) => (
          <ShopItem key={shop.id} shop={shop} />
        ))}
      </div>
    </div>
  );
};
