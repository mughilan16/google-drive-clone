import infoIcon from "../assets/info.png"
import emptyImage from "../assets/empty_state_spam.svg"

export default function Spam() {
  return (
    <div className="flex flex-col gap-5 h-full">
      <div className="flex justify-between items-center">
        <span className="text-brand-text text-2xl">Spam</span>
        <div className="flex justify-between items-center gap-2">
          <img src={infoIcon} className="w-4 h-4" />
        </div>
      </div>
      <div className="text-brand-text text-sm bg-brand-warning p-3 rounded-lg">
        Files in spam won't appear anywhere else in Drive. Files are permanently removed after 30 days.
      </div>
      <div className="flex-grow flex flex-col items-center pt-28 text-brand-text">
        <img src={emptyImage} className="w-[200px] h-[200px]" />
        <div className="flex flex-col gap-5 text-center">
          <span className="text-2xl">Your spam is empty</span>
          <div className="text-brand-text-alt">
            <p>Files in spam won't appear anywhere else in Drive. Files are permanently</p>
            <p>removed after 30 days.</p>
          </div>
        </div>
      </div>
    </div >
  )
}
