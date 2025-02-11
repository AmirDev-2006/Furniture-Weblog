import { useState } from 'react';
import './NavBar.css'
import { ChevronDownIcon , ShoppingBagIcon } from "@heroicons/react/solid";
export default function NavBar(){
    const [display , setDisplay] = useState('hidden')
    const [rotate , setrotate] = useState('')
const subNav = () =>{
    if(!display){
        setDisplay('hidden')
        setrotate('')
    }
    else{
        setDisplay('')
        setrotate('-rotate-180')
    }
}
    
    return(
        <>
        <div className="w-11/12 text-white h-16 mt-4 flex justify-between items-center ">
          <h1 className="font-GilroyBold text-[28px]">Panto</h1>
          <div>
            <ul className="flex gap-x-16">
              <li>
                <button onClick={subNav} className="flex gap-x-1 relative items-center">
                    <span>Furniture</span>
                    <ChevronDownIcon className={`w-4 transition-all ${rotate} h-4`}/>
                </button>
                <div className={`absolute w-56 h-24 bg-blue-200 mt-4 rounded-lg ${display}`}></div>
              </li>
              <li>
                <button className="">Shop</button>
              </li>
              <li>
                <button>About us</button>
              </li>
              <li>
                <button>Contact</button>
              </li>
            </ul>
          </div>
          <div>
            <button className='hover:mb-3k transition-all'>
            <ShoppingBagIcon className="w-8 h-8"/>
            </button>
          </div>
        </div>
        </>
    )
}