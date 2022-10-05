function Search() {
    return (
        <div className="ml-32 mt-10 flex">
            <div className="bg-white p-3 flex rounded-md w-14">
                <img className="h-7 w-7" src="/imgs/menu.png" />
            </div>

            <div className="flex ml-12 rounded-md bg-white p-1 w-1/2">
                <input className="px-3 text-xl  outline-0 w-4/5" type="text" placeholder="Fuck all products here..." />
                <button className="flex p-3 px-6 ml-auto bg-blue-500 rounded-lg text-white">Search</button >
            </div>
        </div>
    )
}

export default Search