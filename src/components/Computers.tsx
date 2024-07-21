import infoIcon from "../assets/info.png"
import emptyImage from "../assets/empty_state_computers_v4.svg"

export default function Computers() {
  return (
    <div className="flex flex-col gap-5 h-full">
      <div className="flex justify-between items-center">
        <span className="text-brand-text text-2xl">Computers</span>
        <div className="flex justify-between items-center gap-2">
          <img src={infoIcon} className="w-4 h-4" />
        </div>
      </div>
      <div className="flex-grow flex flex-col items-center pt-28 text-brand-text">
        <img src={emptyImage} className="w-[200px] h-[200px]" />
        <div className="flex flex-col gap-5 text-center">
          <span className="text-2xl">No folders syncing with Drive</span>
          <div className="text-brand-text-alt">
            <p>Folders on your computer that you sync with Drive using Drive for desktop</p>
            <p>will show up here. <button className="text-brand-primary">Learn More</button></p>
          </div>
        </div>
      </div>
    </div >
  )
}
