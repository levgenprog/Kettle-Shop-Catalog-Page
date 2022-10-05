import Search from "./search"
import MenuBar from "./MenuBar"
import Pictures from "./Pictures"

function App() {
  return (
    <div>
      {/* <div>
        <h1 className="text-3xl font-bold underline bg-slate-500 text-green-400">Test</h1>
      </div>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          <img className="h-12 w-12" src="/imgs/menu.png" alt="ChitChat Logo" />
        </div>
        <div>
          <div className="text-xl font-medium text-red-200">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div> */}
      <Search></Search>
      <MenuBar></MenuBar>
      <Pictures></Pictures>
    </div>
  )
}

export default App
