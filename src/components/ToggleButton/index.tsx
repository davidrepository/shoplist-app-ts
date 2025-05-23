type ToggleButtonProps = {
  active: boolean;
  onClick: () => void;
  label: string;
  children: React.ReactNode;
};

export const ToggleButton = ({
  active,
  onClick,
  label,
  children,
}: ToggleButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    aria-pressed={active}
    aria-label={label}
    className={`px-3 py-1 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 h-10 ${
      active ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
    }`}
  >
    {children}
  </button>
);
