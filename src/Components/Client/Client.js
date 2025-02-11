import "./Client.css";
import change from "../../assets/images/Frame 48095395.png";
import profile1 from "../../assets/images/First Profile.png";
import profile2 from "../../assets/images/Second Profile.png";
import profile3 from "../../assets/images/third Profile.png";
export default function Client() {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center">
        <div className="w-[413px] h-[94px] mt-10 flex flex-col justify-between">
          <p className="text-lg text-center font-GilroyRegular text-orange-400">
            Testimonials
          </p>
          <h2 className="text-[42px] text-center font-GilroyBold">
            Our Client Reviews
          </h2>
        </div>
        <div className="flex w-full h-[506px] items-center mt-[80px] justify-center gap-x-5  ">
            <img className="rotate-180 hover:mb-5 transition-all" src={change} alt="" />
          <img className="hover:mb-8 transition-all" src={profile1} alt="" />

          <img className="hover:mb-8 transition-all" src={profile2} alt="" />

          <img className="hover:mb-8 transition-all" src={profile3} alt="" />
          <img className="hover:mb-5 transition-all" src={change} alt="" />
        </div>
      </div>
    </>
  );
}
