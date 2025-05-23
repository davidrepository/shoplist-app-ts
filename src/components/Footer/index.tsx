export const Footer = () => {
  return (
    <footer className="flex p-4 border-t bottom-0 left-0 right-0 bg-white items-center flex-col md:flex-row md:justify-between gap-4 md:gap-0 text-xs uppercase">
      <p className="text-gray-700">Made by Dawid Płuciennik</p>
      <div className="flex gap-2">
        <p className="font-black">Stack:</p>
        <ul className="flex gap-2 text-gray-700">
          <li>React</li>
          <li>Typescript</li>
          <li>TailwindCSS</li>
        </ul>
      </div>
    </footer>
  );
};
