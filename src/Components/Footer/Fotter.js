import './Footer.css'
import instagram from '../../assets/images/instagram.png'
import FaceBook from '../../assets/images/FaceBook.png'
import Twitter from '../../assets/images/twitter.png'
export default function Footer(){
    return(
        <>
        <div className="w-full h-[462px] bg-[#F7F7F7] flex flex-col justify-evenly items-center">
            <div className="w-[1064px] h-[146px] flex justify-between items-center">
                <div className="w-[293px] h-[146px] flex flex-col justify-between">
                    <h1 className="font-GilroyBold text-[28px]">Panto</h1>
                    <p className="font-GilroyMedium text-sm">The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                </div>
                <div className="flex justify-between gap-x-[110px]">
                    <div className="w-[133px] h-[146px]">
                        <ul className="flex flex-col gap-y-5">
                            <li className="text-orange-400"><a href="">Services</a></li>
                            <li><a href="#">Email Marketing</a></li>
                            <li><a href="#">Campaigns</a></li>
                            <li><a href="#">Branding</a></li>
                        </ul>
                    </div>
                    <div className="w-[133px] h-[146px]">
                        <ul className="flex flex-col gap-y-5">
                            <li className="text-orange-400"><a href="">Furniture</a></li>
                            <li><a href="#">Beds</a></li>
                            <li><a href="#">Beds</a></li>
                            <li><a href="#">All</a></li>
                        </ul>
                    </div>
                    <div className="w-[133px] h-[146px]">
                        <ul className="flex flex-col gap-y-5">
                            <li className="text-orange-400"><a href="">Follow Us</a></li>
                            <li>
                                <a className='flex gap-x-4' href="#">
                                <img src={FaceBook} alt="" />
                                    <span>FaceBook</span>
                                </a>
                            </li>
                            <li className=''>
                                <a className='flex gap-x-4' href="#">
                                <img src={Twitter} alt="" />
                                    <span>
                                    Twitter
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a className='flex gap-x-4' href="#">
                                <img src={instagram} alt="" />
                                    <span>Instagram</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='w-[1064px] h-6  flex justify-between items-center '>
                <div className='w-8/12  h-6'>
                <span className='text-black/40 font-sans tracking-tighter'>Copyright © 2021</span>
                </div>
                <div className='flex w-4/12 justify-end gap-x-10 h-6'>
                <a href=""><span className='text-[15px] font-GilroyMedium'>Privacy Policy</span></a>
                <a href=""><span className='text-[15px] font-GilroyMedium'>Terms & Conditions</span></a>
                </div>
            </div>
        </div>
        </>
    )
}