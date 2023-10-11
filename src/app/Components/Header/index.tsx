import MenuItem from "./MenuItem";

const MainHeader = () => {
  return (
    <>
      <nav className="grid grid-cols-3 border-y border-y-border-color h-[3.51195rem] laptop:grid smallest:hidden">
        <div className="col-span-2 flex">
          <div className="text-center pl-[1.38rem] pr-[9.25rem] border-r border-r-border-color flex items-center">
            hamza-ahmad
          </div>
          <MenuItem name="_hello" route="/" />
          <MenuItem name="_about-me" route="/about" />
          <MenuItem name="_projects" route="/projects" />
        </div>
        <div className="col-span-1 flex justify-end">
          <MenuItem name="_contact_me" route="/contact_me" leftBorder />
        </div>
      </nav>

    </>
  );
};

export default MainHeader;
