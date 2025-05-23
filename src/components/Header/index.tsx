export const Header = ({
  search,
  onSearchChange,
}: {
  search: string;
  onSearchChange: (value: string) => void;
}) => {
  return (
    <header className="flex justify-center p-4 border-b shadow-xlg flex-col gap-8">
      <h1 className="text-3xl font-black text-center">ShopList App</h1>
      <div className="grid grid-cols-2">
        <div>
          <input
            type="text"
            placeholder="Search by Address or City"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-40 focus:border-black 2xl:w-1/2"
          />
        </div>
      </div>
    </header>
  );
};
