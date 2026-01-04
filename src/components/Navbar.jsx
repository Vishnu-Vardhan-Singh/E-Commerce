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
import { useSelector } from "react-redux";
import logo from '../assets/E-Shop-logo-3.png'

export default function Navbar() {
  const selectorCart = useSelector((state) => state.cart);
  const selectorWishlist = useSelector((state) => state.ecom);
  // console.log(selector)
  const navigate = useNavigate();
  const { store, changeMode } = useTheme();

  const ref1 = useRef(null);

  const [val, setVal] = useState();

  const [bottom, setBottom] = useState();
  const [left, setLeft] = useState();

  useLayoutEffect(() => {
    setBottom(() => ref1.current.getBoundingClientRect().bottom);
    setLeft(() => ref1.current.getBoundingClientRect().left);
    if(val === 'block'){
      document.body.classList.add('overflow-hidden')}
    else{
      document.body.classList.remove('overflow-hidden')
    }
    return ()=>{
      document.body.classList.remove('overflow-hidden')
    }

  }, [val]);


  return (
    <nav
      className="  flex overflow-clip border-2 p-2 gap-2 items-center justify-between  sticky top-0 left-0 right-0 h-14 mb-2"
      style={{
        color: store !== "Dark" ? "White" : "black",
        backgroundColor: store !== "Dark" ? "black" : "White",
      }}
    >
      <div className='w-30 flex items-center'>
        <img
        src={logo}
        alt="flipkart logo"
        className="hover:cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      /></div>

      <div className="border-2 w-[50%] flex bg-blue-300 rounded-2xl h-8">
        <input
          type="text"
          onChange={(e)=>{console.log(e.target.value)}}
          className="w-full focus:outline-0 flex-1 px-2 text-sm"
        />
        <button
          className="bg-orange-500 w-9 rounded-r-2xl border-l-2"
          onClick={null}
        >
          <FaSearch className="mx-auto" />
        </button>
      </div>
      <div
        name="name"
        className="relative border-2 flex overflow-hidden items-center gap-1 hover:cursor-pointer px-1 h-7 min-w-26  "
        onMouseEnter={() => {
          setVal("block");
        }}
        onMouseLeave={() => {
          setVal("none");
        }}
        ref={ref1}
      >
        <div className='h-5 w-5'><CgProfile className='h-5 w-5' /></div>
        <div className='text-left overflow-hidden text-nowrap min-w-12'>Vishnu Vardhan Singh </div>
        <div className='h-5 w-5'><IoIosArrowDropright
          className={`block h-5 w-5 transition-transform duration-200 ${
            val === "block" ? "rotate-90" : ""
          }`}
        /></div>
        {createPortal(
        <div
          className={`fixed border-2 w-35 bg-amber-50 *:hover:bg-blue-500 *:cursor-pointer`}
          style={{
            top: `${bottom}px`,
            left: `${left}px`,
            // left: `0px`,
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
      </div>
      
      <div id="cart" title="cart" className="hover:cursor-pointer">
        <NavLink to="/cart" className={"relative"}>
          <FaCartShopping className="text-2xl" />
          <span
            className={
              "bg-red-500 text-[8px] w-3 h-3 rounded-full text-white absolute -left-1 top-0 flex justify-center items-center]"
            }
          >
            {Object.keys(selectorCart).length}
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
            {Object.keys(selectorWishlist.wishList).length}
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
