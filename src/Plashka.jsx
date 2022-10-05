import { useState } from "react";

function Plashka(props) {
    const [isHidden, setIsHidden] = useState(true);
    const [style, setStyle] = useState("hidden");
    const [menState, setMenState] = useState("flex p-2 bg-white rounded-md h-fit mt-12 ml-80");

    function showBill() {
        if (isHidden) {
            setStyle("w-80 h-full bg-white -z-10");
            setMenState("flex p-2 bg-white rounded-md h-fit mt-12 mr-10");
            setIsHidden(false);
        } else {
            setStyle("hidden");
            setMenState("flex p-2 bg-white rounded-md h-fit mt-12 ml-80");
            setIsHidden(true);
        }

    }

    return (
        <div className="flex h-full z-50 fixed left-3/4 bottom-1">

            <div className={menState} onClick={() => showBill()}>
                <img className="h-7 w-7" src="/imgs/filter.png" />
                <sub className="text-blue-600">{props.value}</sub>
            </div>
            <div className={style}>
                <h1 className="m-10 text-lg font-bold">Order details: </h1>
                <hr />
                <div className={props.isFirst ? "hidden" : "max-h-96 overflow-scroll"}>
                    {props.goods}
                </div>
                <hr className="mt-8" />
                <div className="m-5 flex">
                    <p className=" text-gray-400">Total:</p>
                    <p className="ml-auto text-blue-600 text-lg font-semibold">${props.total}</p>

                </div>
                <button className="bg-blue-500 p-1 rounded-md w-60 text-white ml-8">Pay Now</button>
            </div>
        </div>

    );
}

export default Plashka;