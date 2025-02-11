import "./Home.css";
import NavBar from "../NavBar/NavBar";
import {SearchIcon} from "@heroicons/react/solid";
export default function Home() {
  return (
    <>
      {/* Home Page */}
      <div className="border-black [&>*]:text-[18px] h-[1084px]  background-img flex flex-col items-center ">
        {/* Navigation Bar */}
        <NavBar/>
        <div className="w-[861px] h-[208px] transition-all mt-20 text-center text-white">
          <span className="font-GilroyBold text-[80px] tracking-tighter">Make your interior more
          minimalistic & modern</span>
        </div>
        <div className="w-[600px] h-24 mt-[34px] text-center">
          <span className=" text-white/80 font-GilroyRegular text-2xl">Turn your room with panto into a lot more minimalist and modern with ease and speed</span>
        </div>
        <div className="inline-block relative">
          <button className="absolute z-20 top-0 right-0 mt-2.5 mr-3 background-brown">
            <SearchIcon className="w-4 h-4 text-white"/>
          </button>
        <input placeholder="Search furniture" type="text" className=" font-GilroyRegular text-5 line backdrop-blur-sm bg-white/15 border-[1px] border-white/60 w-[344px] h-[56px] rounded-[42px] justify-between py-2 pr-2 pl-5" />
        </div>
      </div>
    </>
  );
}
