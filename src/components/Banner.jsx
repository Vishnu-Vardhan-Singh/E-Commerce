import { useEffect, useLayoutEffect, useRef } from "react";
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";
import banner4 from "../assets/banner4.png";

export default function Banner() {
  const domref = useRef(null);

  useLayoutEffect(() => {
    const carousel = domref.current;
    console.log(carousel.offsetWidth);
    if (!carousel) return;

    let slideWidth = carousel.offsetWidth;
    carousel.scrollLeft = slideWidth;
    console.log(carousel.scrollLeft);

    function load() {
      slideWidth = carousel.offsetWidth;
      carousel.scrollLeft = slideWidth;
    }
    function scroll() {
      slideWidth = carousel.children[0].offsetWidth;
      console.log(carousel.scrollLeft);
      console.log(slideWidth);
      if (carousel.scrollLeft < slideWidth / 2) {
        carousel.scrollLeft = slideWidth * 4;
      }
      if (carousel.scrollLeft > slideWidth * 4 + slideWidth / 2) {
        carousel.scrollLeft = slideWidth;
      }
    }
    window.addEventListener("load", load);

    carousel.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("load", load);
      carousel.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <div className="min-w-full my-1">
  <div
    ref={domref}
    className="
      flex
      overflow-x-scroll
      snap-x snap-mandatory
      hide-scrollbar
      bg-amber-300
      min-w-full
    "
  >
    <div className="min-w-full flex justify-center snap-center">
      <img src={banner4} className="block max-w-full" />
    </div>

    <div className="min-w-full flex justify-center snap-center">
      <img src={banner1} className="block max-w-full" />
    </div>

    <div className="min-w-full flex justify-center snap-center">
      <img src={banner2} className="block max-w-full" />
    </div>

    <div className="min-w-full flex justify-center snap-center">
      <img src={banner3} className="block max-w-full" />
    </div>
  </div>
</div>

  );
}
