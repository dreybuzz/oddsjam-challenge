import Main from "./components/Main/Main"
import SideBar from "./components/SideBar/SideBar"

export default function App() {
  return (
    <div className="font-ubuntu bg-slate-900 w-full h-full text-white flex flex-wrap">
      <SideBar />
      <Main />
    </div>
  )
}
