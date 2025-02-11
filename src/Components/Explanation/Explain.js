import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import explain1 from "../../assets/images/first-explain.png";
import explain2 from "../../assets/images/second explain.png";
import "./Explain.css";
export default function Experiences() {
  return (
    <>
      <div className=" w-full h-screen flex justify-between items-center">
          <div>
            {/* img */}
            <img className="box-shadow rounded-r-3xl" src={explain1} alt="" />
          </div>
          {/* text */}
          <div className="w-[556px]">
            <p className="text-orange-400">EXPERIENCES</p>
            <h2 className="font-GilroyBold text-[42px]">
              we provide you the best experience
            </h2>
            <p className="text-lg">
              You dont have to worry about the result because all of these
              interiors are made by people who are professionals in their fields
              with an elegant and lucurious style and with premium quality
              materials
            </p>
            <div className="">
              <button className="mt-6">
                <span className="flex items-center text-orange-400">
                  More info
                  <ArrowNarrowRightIcon className="w-6 h-6" />
                </span>
              </button>
            </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
