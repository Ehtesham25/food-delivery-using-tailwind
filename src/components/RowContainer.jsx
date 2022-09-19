import React, { useEffect, useRef } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";

import waterMellon from "../assets/f10.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.png";
import f4 from "../assets/f4.png";
import f5 from "../assets/f5.png";
import f6 from "../assets/f6.png";
import f7 from "../assets/f7.png";
import notFound from "../assets/NotFound.svg";

const RowContainer = ({ flag, scroll }) => {
  let data = true;
  const ref = useRef();
  useEffect(() => {
    ref.current.scrollLeft += scroll;
  }, [scroll]);

  return (
    <div
      ref={ref}
      className={`w-full overflow-y-hidden flex items-center scroll-smooth justify-arround gap-4   ${
        flag
          ? "overflow-x-scroll scrollbar-none my-10 ml-0 px-3"
          : "overflow-x-hidden flex-wrap"
      }`}
    >
      {data && data ? (
        [waterMellon, f2, f3, f4, f5, f6, f7].map((item, index) => (
          <div
            key={index}
            className={` ${
              flag
                ? "w-300 min-w-[270px] md:min-w-[250px] h-56 my-8 md:w-200"
                : "w-300 min-w-[200px] md:min-w-[10px] h-56 my-8 md:w-170"
            }  bg-slate-200 rounded-lg backdrop-blur-lg drop-shadow-lg`}
          >
            <div className="flex items-center justify-between">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={item}
                className="w-48 h-44 drop-shadow-2xl object-contain -mt-10  "
              />
              <motion.div
                whileTap={{ scale: 0.7 }}
                className="w-8 h-8 cursor-pointer bg-red-600 rounded-full flex items-center justify-center mx-4"
              >
                <MdShoppingBasket className="text-white" />
              </motion.div>
            </div>
            <div className="flex items-end justify-end flex-col mx-4">
              <p className="font-semibold text-textColor">
                Chocolate & Vanilla
              </p>
              <p>29 Calories</p>
              <p className="font-semibold text-headingColor">
                <span className="text-red-600">$ </span>4.3
              </p>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full flex flex-col justify-center items-center">
          <img src={notFound} alt="Not Found" className="h-40 object-contain" />
          <p className="text-center font-semibold pt-4 text-textColor">
            Data Not Found!
          </p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;
