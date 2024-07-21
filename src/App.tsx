import logo from "./assets/google-drive.png"
import helpIcon from "./assets/help.png"
import gearIcon from "./assets/gear.png"
import menuIcon from "./assets/menu.png"
import searchIcon from "./assets/search.png"
import preferenceIcon from "./assets/preferences.png"

import SideBar from "./components/SideBar"
import Home from "./components/Home"
import MyDrive from "./components/MyDrive"
import useStore from "./store"

function App() {
  const page = useStore(state => state.page)
  return (
    <div className="w-screen h-screen flex flex-col bg-brand-bg px-5 py-2">
      <NavBar />
      <div className="flex-grow pt-3 flex">
        <SideBar />
        <div className="bg-brand-bg-alt flex-grow rounded-2xl p-5">
          {page === "Home" && <Home />}
          {page === "My Drive" && <MyDrive />}
        </div>
      </div>
    </div>
  )
}

function NavBar() {
  return (
    <div className="flex">
      <div className="flex gap-2 items-center w-60">
        <img src={logo} alt="logo" width="33" />
        <span className="text-2xl text-brand-text">Drive</span>
      </div>
      <div className="flex flex-grow gap-6 items-center justify-between">
        <div className="flex items-center bg-brand-hover px-5 py-3 flex-grow rounded-3xl gap-5 max-w-[720px]">
          <img src={searchIcon} alt="about" className="h-4 w-4" />
          <input className="flex-grow outline-none text-brand-text bg-transparent" placeholder="Search in Drive" />
          <img src={preferenceIcon} alt="about" className="h-5 w-5" />
        </div>
        <div className="flex items-center gap-5">
          <img src={helpIcon} alt="about" className="h-5 w-5" />
          <img src={gearIcon} alt="about" className="h-5 w-5" />
          <img src={menuIcon} alt="about" className="h-5 w-5" />
          <div className="text-brand-text rounded-3xl bg-blue-800 px-2 py-1">
            M
          </div>
        </div>

      </div>
    </div>
  )
}


export default App
