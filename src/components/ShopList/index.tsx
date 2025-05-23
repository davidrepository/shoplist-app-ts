import { FC } from "react";
import { Shop } from "../../types/Shop";
import { ShopItem } from "../ShopItem";

type Props = {
  shops: Shop[];
};

export const ShopList: FC<Props> = ({ shops }) => {
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
