import lineIcon from "../assets/lineMenu.png"
import boxIcon from "../assets/boxmenu.png"
import useStore from "../store";
import infoIcon from "../assets/info.png"
import emptyImage from "../assets/empty_state_bin.svg"

export default function Bin() {
  const viewMode = useStore(state => state.viewMode);
  const setViewMode = useStore(state => state.setViewMode);
  return (
    <div className="flex flex-col gap-5 h-full">
      <div className="flex justify-between items-center">
        <span className="text-brand-text text-2xl">Bin</span>
        <div className="flex justify-between items-center gap-2">
          <div className="rounded-2xl px-2 text-sm flex text-brand-text">
            <button className={
              "w-12 border-gray-500 py-2 border rounded-l-2xl bordor-gray-500 flex items-center gap-3 px-4"
              + `${viewMode === "list" ? " bg-brand-active" : ""}`}
              disabled={viewMode === "list"}
              onClick={() => setViewMode("list")}
            >
              <img src={lineIcon} className="h-3" />
            </button>
            <button className={
              "w-12 py-2 border border-l-0 rounded-r-2xl border-gray-500 flex items-center gap-3 px-4"
              + `${viewMode === "block" ? " bg-brand-active" : ""}`}
              disabled={viewMode === "block"}
              onClick={() => setViewMode("block")}
            >
              <img src={boxIcon} className="h-3" />
            </button>
          </div>
          <img src={infoIcon} className="w-4 h-4" />
        </div>
      </div>
      <div className="flex text-brand-text gap-2">
        <select className="bg-brand-bg-alt border border-gray-500 px-3 py-1 rounded-lg ">
          <option>Type</option>
        </select>
        <select className="bg-brand-bg-alt border border-gray-500 px-3 py-1 rounded-lg">
          <option>Modified</option>
        </select>
      </div>
      <div className="flex-grow flex flex-col items-center pt-28 text-brand-text">
        <img src={emptyImage} className="w-[200px] h-[200px]" />
        <div className="flex flex-col gap-5 text-center">
          <span className="text-2xl">Nothing in the bin</span>
          <div className="text-brand-text-alt">
            <p>Move items that you don't need to the bin. Items in the bin will be deleted</p>
            <p>forever after 30 days.</p>
          </div>
          <button className="text-brand-primary">Learn more</button>
        </div>
      </div>
    </div >
  )
}
