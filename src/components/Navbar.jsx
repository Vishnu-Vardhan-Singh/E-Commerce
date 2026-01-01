import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useTheme } from "../Custom Hook/LocalStorage";
import { NavLink, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { GoHeartFill } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDropright } from "react-icons/io";
import { IoMenuSharp } from "react-icons/io5";
import { createPortal } from "react-dom";



export default function Navbar() {
  
  const navigate = useNavigate();
  const { store, changeMode } = useTheme();

  const ref1 = useRef(null);

  const [val, setVal] = useState();

  const [bottom, setBottom] = useState();
  const [left, setLeft] = useState();

  useLayoutEffect(() => {
    setBottom(() => ref1.current.getBoundingClientRect().bottom);
    setLeft(() => ref1.current.getBoundingClientRect().left);
  }, [val]);

  return (
    <nav
      className=" flex overflow-clip border-2 p-2 gap-2 items-center justify-between  sticky top-0 left-0 right-0 h-14 mb-2"
      style={{
        color: store !== "Dark" ? "White" : "black",
        backgroundColor: store !== "Dark" ? "black" : "White",
      }}
    >
      <img
        src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
        alt="flipkart logo"
        className="hover:cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      />

      <div className="border-2 w-[50%] flex bg-blue-300 rounded-2xl h-8">
        <input
          type="text"
          onChange={null}
          className="w-full focus:outline-0 flex-1 px-2 text-sm"
        />
        <button className="bg-orange-500 w-9 rounded-r-2xl border-l-2" onClick={null}>
          <FaSearch className="mx-auto" />
        </button>
      </div>
      <div
        name="name"
        className="border-2 flex flex-wrap items-center gap-1 hover:cursor-pointer px-2 pr-0.5"
        onMouseEnter={() => {
          setVal("block");
        }}
        onMouseLeave={() => {
          setVal("none");
        }}
        ref={ref1}
      >
        <CgProfile />
        <span>Vishnu Vardhan Singh </span>
        <IoIosArrowDropright
          className={`transition-transform duration-200 ${
            val === "block" ? "rotate-90" : ""
          }`}
        />
      </div>
    {createPortal(
    <div
        className={`hidden absolute border-2 w-50.75 bg-amber-50 *:hover:bg-blue-500 *:cursor-pointer ''`}
        style={{
          top: `${bottom}px`,
          left: `${left}px`,
          display: val || "none",
          
        }}
        onMouseEnter={() => {
          setVal("block");
        }}
        onMouseLeave={() => {
          setVal("none");
        }}
      >
        <p>Profile</p>
        <p>Super Coin Zone</p>
        <p>Flipkart Plus Zone</p>
        <p>Orders</p>
        <p>Wishlist</p>
        <p>Coupons</p>
        <p>Gift Cards</p>
        <p>Notifications</p>
        <p>Log Out</p>
      </div>,
  document.body
)}
      <div id="cart" title="cart" className="hover:cursor-pointer">
        <NavLink to="/cart" className={"relative"}>
          <FaCartShopping className="text-2xl" />
          <span
            className={
              "bg-red-500 text-[8px] w-3 h-3 rounded-full text-white absolute -left-1 top-0 flex justify-center items-center]"
            }
          >
            0
          </span>
        </NavLink>
      </div>
      <div id="Wishlist" title="Wishlist" className="hover:cursor-pointer">
        <NavLink to="/wishlist" className={"relative"}>
          <GoHeartFill className="text-2xl" />
          <span
            className={
              "bg-red-500 text-[8px] w-3 h-3 rounded-full text-white absolute -left-1 top-0  flex justify-center items-center"
            }
          >
            0
          </span>
        </NavLink>
      </div>
      <NavLink
        id="seller"
        title="Seller-Account"
        className="hover:cursor-pointer "
      >
        <IoMenuSharp className="text-2xl" />
      </NavLink>
      <button
        onClick={() => {
          changeMode();
        }}
        className="hover:cursor-pointer"
      >
        {store} Mode
      </button>
    </nav>
  );
}
