import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import icon from "../assets/Animation - 1720781683564 (1).gif";
import { GiHamburgerMenu } from "react-icons/gi";
import { Badge, Drawer } from "@material-tailwind/react";
import { useState } from "react";
import { useAppSelector } from "../redux/hooks";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const cartCount = useAppSelector((state) => state.cart.count);

  return (
    <div className="flex justify-between items-center h-20 bg-lime-100  px-10 md:px-10 lg:px-20 shadow-xl sticky top-0 z-20">
      <img src={logo} className="lg:w-32 md:w-28 w-24" />

      <div className="hidden md:hidden lg:flex gap-7 justify-center items-center text-lg font-bold">
        <NavLink className="text-base" to={"/"}>Home</NavLink>
        <NavLink className="text-base" to={"/products"}>All Products</NavLink>
        <NavLink className="text-base" to={"/management"}>Manage Products</NavLink>
        <NavLink  to={"/cart"}>
          <Badge content={cartCount}>
            <img className="w-12" src={icon} alt="" />
          </Badge>
        </NavLink>
      </div>

      <div className="flex md:flex lg:hidden">
        <GiHamburgerMenu
          size={"20"}
          className="cursor-pointer"
          onClick={openDrawer}
        />
      </div>

      <Drawer
        open={open}
        onClose={closeDrawer}
        className="p-4 w-[180px]"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <div className="mb-6 flex flex-col items-center justify-between">
          <img src={logo} className="w-[120px] mb-7" />

          <div className="flex flex-col gap-4 text-center text-base">
            <NavLink onClick={closeDrawer} to={"/"}>
              Home
            </NavLink>

            <NavLink onClick={closeDrawer} to={"/products"}>
              Products
            </NavLink>

            <NavLink onClick={closeDrawer} to={"/management"}>
            Manage Products
            </NavLink>

            <NavLink onClick={closeDrawer} to={"/cart"}>
              <Badge content={cartCount}>
              <img className="w-12" src={icon} alt="" />
              </Badge>
            </NavLink>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
