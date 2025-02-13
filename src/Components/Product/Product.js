import product1 from "../../assets/images/products/product1.png"
import product2 from "../../assets/images/products/product2.png"
import product3 from "../../assets/images/products/product3.png"
import product4 from "../../assets/images/products/product4.png"
import next from "../../assets/images/Frame 48095395.png"
import {ArrowNarrowRightIcon} from "@heroicons/react/solid";
import "./Product.css";
import Card from "./Product-Card/Product-Card";
export default function Product() {
  return (
    <>
      <div className="h-[880px] pb-10 background-product flex flex-col justify-between items-center">
        <div className="mt-[75px]">
          <h1 className="font-GilroyBold text-[42px] mt-75px">
            Best Selling Product
          </h1>
        </div>
        <div className="flex mt-24 font-sans mb-[117px] h-[492px] w-full items-center px-[121px] gap-x-[60px]">
                <button className="flex justify-center items-center hover:mb-5 transition-all">
            <img className="rotate-180" src={next} alt="" />
                </button>
            <Card picture={product1} name={'Sakarias Armchair'} price={"$392"}/>
            <Card picture={product2} name={'Baltsar Chair'} price={"$299"}/>
            <Card picture={product3} name={"Nyantuy Chair"} price={"$519"}/>
            <Card picture={product4} name={'Anjay Chair'} price={"$921"}/>
                <button className="flex items-center justify-center hover:mb-5 transition-all">
            <img className="" src={next} alt="" />
                </button>
        </div>
        <div className="">
          <button className="text-orange-400">
          <span className="flex items-center gap-x-2">view all
            <ArrowNarrowRightIcon className="w-6 h-6"/>
          </span>
          </button>
          </div>
      </div>
    </>
  );
}
