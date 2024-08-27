const Navigation = () => {
  return (
    <nav className="flex justify-between items-center  mx-auto max-w-8xl h-72px ">
      <div>
        <img src="public\brand_logo.png" alt="" />
      </div>

      <ul className="flex gap-4">
        <li href="#" className="font-poppins font-medium cursor-pointer">
          MENU
        </li>
        <li className="font-poppins font-medium cursor-pointer" href="#">
          LOCATION
        </li>
        <li className="font-poppins font-medium cursor-pointer" href="#">
          ABOUT
        </li>
        <li className="font-poppins font-medium cursor-pointer" href="#">
          CONTACT
        </li>
      </ul>

      <button className="font-inter  bg-red-600 text-white h-8 w-20">
        Login
      </button>
    </nav>
  );
};
export default Navigation;
