const NavBar = () => {
  return (
    <nav className="flex items-center justify-between h-16 py-6">
      <div className="text-xl font-bold">
        <span className="text-3xl lg:text-5xl bg-gradient-to-b from-[#DAC2FC] to-[#98C5FC] bg-clip-text text-transparent">
          TimeIt
        </span>
      </div>
      <div className="flex gap-10">
        <button className="px-5 py-3 bg-gradient-to-b rounded-full text-[#494759]  text-xl from-[#DAC2FC] to-[#98C5FC]">
          Get App
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
