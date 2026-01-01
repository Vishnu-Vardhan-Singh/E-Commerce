import { useSelector } from "react-redux";

export default function Wishlist() {
  const selector = useSelector((state) => state.ecom.wishList);

  return (
    <div className="border-2">
      <p className="font-bold text-center text-4xl ">
        Wishlist {console.log()}
      </p>
      {Object.values(selector).map((val) => {
        return <div key={val.id} className="h-50 border-2 "></div>;
      })}
    </div>
  );
}
