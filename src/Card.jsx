import { useState } from "react";

function Card(props) {


    const [style, setStyle] = useState("hidden");
    const [minusStyle, setMinusStyle] = useState("hidden");
    const [hidden, setHidden] = useState(true);
    const [price, setPrice] = useState(props.price);



    const handleClick = () => {
        if (hidden) {
            setStyle("bg-blue-500 p-1 rounded-md w-14 text-white ml-3");
            setMinusStyle("ml-14");
            setHidden(false);
        } else {
            setStyle("hidden");
            setMinusStyle("hidden");
            setHidden(true);
        }

    };

    return (
        <div className="w-52 bg-white p-2  rounded-md mb-10 cursor-pointer h-72" >
            <img className="rounded-md" src={props.pict} alt="" onClick={handleClick} />
            <p className="font-semibold mt-2">Some fucking kettle</p>
            <b className="text-blue-600">${price}</b>
            <div className="flex -mt-3 ml-16">
                <button className={minusStyle} onClick={props.sub}>-</button>
                <button className={style} onClick={props.add}>Add</button>
            </div>
        </div>
    );
}

export default Card;