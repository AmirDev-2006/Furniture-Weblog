import './Material.css'
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import explain2 from '../../assets/images/second explain.png'
export default function Material(){
    return(
        <>
        <div className='flex w-full h-screen items-center justify-between'>
            <div className='pl-20 w-[556px]'>
                <p className='font-GilroyRegular text-lg text-orange-400'>MATERIALS</p>
                <h2 className='font-GilroyBold text-[42px]'>Very serious <br /> materials for making <br /> furniture</h2>
                <p className='text-lg text-[#1E1E1E]'>Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</p>
                <div className='flex items-center gap-x-2 mt-4 text-orange-400'>
                    <p>More Info</p>
                    <span>
                        <ArrowNarrowRightIcon className='w-6 h-6'/>
                    </span>
                </div>
            </div>
            <div>
                <img className='w-[894px] h-[614px]' src={explain2} alt="" />
            </div>
        </div>
        </>
    )
}