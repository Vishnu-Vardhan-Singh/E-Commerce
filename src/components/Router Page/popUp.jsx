import { useContext, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { popContext } from "../../useContext/popContext";

export default function PopUp() {
  const { popDisplay, setPopDisplay, popDisplayContent, setPopDisplayContent } =
    useContext(popContext);
  return (
    <>
      <div
        className="bg-cyan-50/50 h-screen fixed top-0 right-0 left-0 bottom-0 z-10"
        style={{ display: popDisplay }}
        onScroll={(e) => {}}
      >
        <div className="bg-amber-200 absolute left-20 right-20 top-20 bottom-20 flex flex-col">
          <div className="h-10 bg-indigo-500 flex justify-end shrink-0">
            <IoMdCloseCircle
              className="h-10 w-10 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setPopDisplay(() => "none");
              }}
            />
          </div>

          <div className="flex-1 min-h-0">
            <div className="h-full w-full flex max-sm:flex-col">
              
                <img
                  src={popDisplayContent.image}
                  className="w-[40%] h-full object-contain block p-3 max-sm:mx-auto max-sm:h-[25vh] max-sm:w-[25vh] "
                />
              
              <div className="w-[60%] bg-red-400 content-center pl-4 *:my-4 *:text-[2vh] max-sm:w-full max-sm:min-h-[60%] max-sm:overflow-auto  ">
                <p>Title: {popDisplayContent.title}</p>
                <p>Description:{popDisplayContent.description}</p>
                <p>Category:{popDisplayContent.category}</p>
                <p>Rating:{popDisplayContent.rating?.rate}</p>
                <p>Price:{popDisplayContent.price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
