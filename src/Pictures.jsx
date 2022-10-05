import { useState } from "react";
import Card from "./Card";
import Plashka from "./Plashka";

function Pictures() {
    const [merch, setMerch] = useState(0);
    const [pict, setPict] = useState("/imgs/kettle.jpg");
    const [isFirst, setFirst] = useState(true);
    const [goods, setGoods] = useState([{}]);
    const [total, setTotal] = useState(0);

    const [prices, setPrices] = useState(Array.from({ length: 12 }, () => randomPrice(100, 1000)));
    function randomPrice(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(min + Math.random() * (max - min));
    }


    function addMerch(i) {
        if (merch === 0) {
            setFirst(false);
            goods.splice(0, 1);
        }
        setMerch(merch + 1);
        const already = goods.findIndex(it => it.price / it.num === i);
        if (already != -1) {
            goods[already].num = goods[already].num + 1;
            goods[already].price = goods[already].price / (goods[already].num - 1) * goods[already].num;
        } else {
            setGoods(goods.concat({
                price: i,
                img: pict,
                name: "Some Fucking kettle",
                num: 1
            }));
        }
        setTotal(total + i);
    }

    function subMerch(i) {
        if (merch === 0) {
            return;
        } else {
            const already = goods.findIndex(it => it.price / it.num === i);
            if (already != -1) {
                if (goods[already].num != 1) {
                    goods[already].price = goods[already].price - (goods[already].price / goods[already].num);
                    goods[already].num = goods[already].num - 1;
                    setTotal(total - i);
                } else {
                    goods.splice(already, 1);
                    if (goods.length === 0) {
                        setFirst(true);
                    }
                    setTotal(total - i);
                }
                setMerch(merch - 1);

            }
        }
    }

    const god = goods.map(it => (
        <div className="w-32 m-3 flex" key={it.price}>
            <img className="rounded-md" src={it.img} />
            <p className="ml-3 font-semibold">{it.name}</p>
            <div className="mt-20 flex">

                <p className="-ml-14 text-gray-400 flex">
                    <button className="mr-2" onClick={() => subMerch(it.price / it.num)}>-</button>
                    {it.num}x
                    <button className="ml-2" onClick={() => addMerch(it.price / it.num)}>+</button>
                </p>
                <p className=" text-blue-500  ml-3">${it.price}</p>
            </div>

        </div>
    ));

    function renderCard(i) {
        return (
            <Card add={() => addMerch(i)} sub={() => subMerch(i)} price={i} pict={pict} ></Card>
        );
    }

    return (
        <div>
            <Plashka value={merch} goods={god} isFirst={isFirst} total={total}></Plashka>

            <div className="ml-32 mt-20 p-3 w-2/3 sm:columns-2  md:columns-3">
                {renderCard(prices[0])}
                {renderCard(prices[1])}
                {renderCard(prices[2])}
                {renderCard(prices[3])}
                {renderCard(prices[4])}
                {renderCard(prices[5])}
                {renderCard(prices[6])}
                {renderCard(prices[7])}
                {renderCard(prices[8])}
                {renderCard(prices[9])}
                {renderCard(prices[10])}
                {renderCard(prices[11])}
            </div>
        </div>

    );

}

export default Pictures