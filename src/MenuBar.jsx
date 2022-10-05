function MenuBar() {
    const items = [
        'All',
        'Equipment',
        'And',
        'Other',
        'Shit',
        'That',
        'You',
        'Want'
    ];
    const itemList = items.map((it) =>
        <li className="flex p-3 px-6 ml-7 cursor-pointer font-semibold bg-white text-black rounded-lg 
        hover:-translate-y-1 hover:bg-blue-200  focus:bg-blue-500 focus:text-white" tabIndex="-1" key={it}>{it}</li>
    );
    return (
        <ul className="flex ml-32 mt-10 w-11">{itemList}</ul>

    )
}

export default MenuBar