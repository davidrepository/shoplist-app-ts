import { ToggleButton } from "../ToggleButton";

type LayoutType = "grid" | "list";

type HeaderProps = {
  search: string;
  onSearchChange: (value: string) => void;
  layout: LayoutType;
  setLayout: (layout: LayoutType) => void;
};

export const Header = ({
  search,
  onSearchChange,
  layout,
  setLayout,
}: HeaderProps) => {
  return (
    <header className="flex justify-center p-4 border-b shadow-xlg flex-col gap-8">
      <h1 className="text-3xl font-black text-center">ShopList App</h1>
      <div className="flex justify-between">
        <div>
          <input
            type="text"
            placeholder="Search by Address or City"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-80 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-40 focus:border-black h-10"
          />
        </div>
        <div>
          <div className="flex gap-2">
            <ToggleButton
              active={layout === "list"}
              onClick={() => setLayout("list")}
              label="List layout"
            >
              List
            </ToggleButton>

            <ToggleButton
              active={layout === "grid"}
              onClick={() => setLayout("grid")}
              label="Grid layout"
            >
              Grid
            </ToggleButton>
          </div>
        </div>
      </div>
    </header>
  );
};
