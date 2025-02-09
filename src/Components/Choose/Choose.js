import {ArrowNarrowRightIcon} from "@heroicons/react/solid";
import './Choose.css'
export default function Choose(){
    return(
        <>
        <div className=" h-[420px] my-30 mx-20 flex items-center justify-between">
            <div  className="p-10 flex flex-col">
                <span className="font-GilroyBold text-[42px]">Why<span/><br />
                <span className="font-GilroyBold text-[42px]"/>Choosing Us</span>
            </div>
            <div className="flex items-center gap-x-10 ">
                <div className=" p-6 w-[284px] h-[250px] flex flex-col justify-between">
                    <h4 className="font-GilroyBold text-2xl">Many Choices</h4>
                    <p>We provide many unique work space choices so that you can choose the workspace to your liking.</p>
                    <button className="flex orange items-center gap-x-1">
                        <span>More Info</span>
                        <ArrowNarrowRightIcon className="w-6 h-6"/>
                    </button>
                </div>
                <div className=" p-6 w-[284px] h-[250px] flex flex-col justify-between">
                <h4 className="font-GilroyBold text-2xl">Affordable Price</h4>
                    <p>You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.</p>
                    <button className="flex orange  items-center gap-x-1">
                        <span>More Info</span>
                        <ArrowNarrowRightIcon className="w-6 h-6"/>
                    </button>
                </div>
                <div className=" p-6 w-[284px] h-[250px] flex flex-col justify-between">
                <h4  className="font-GilroyBold text-2xl">Luxury facilities</h4>
                    <p>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                    <button className="flex items-center gap-x-1 orange">
                        <span className="">More Info</span>
                        <ArrowNarrowRightIcon className="w-6 h-6"/>
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}