import './Product-Card.css'
import add from "../../../assets/images/Frame 174.png"
import stars from '../../../assets/images/star/Group 172.png'
export default function Card(props){
    return(
        <>
        <div className=" w-[268px] h-[492px] flex flex-col items-center justify-between">
            <div className=''>
                <img className='' src={props.picture} alt="" />
            </div>
            <div className='p-2 bg-white w-full h-{202px} rounded-t-lg flex flex-col justify-between'>
                <div className='flex flex-col p-2 gap-y-2'>
                <p>Chair</p>
                <h3>{props.name}</h3>
                <div>
                <img src={stars} alt="" />
                </div>
                </div>
                <div className='flex justify-between items-center p-2'>
                    <p className='font-GilroyBold'>{props.price}</p>
                    <button>
                    <img src={add} alt="" />
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}