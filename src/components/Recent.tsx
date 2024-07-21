import lineIcon from "../assets/lineMenu.png"
import boxIcon from "../assets/boxmenu.png"
import infoIcon from "../assets/info.png"
import { data, File, FileBlock } from "./Files"
import useStore from "../store";

export default function Recent() {
  const viewMode = useStore(state => state.viewMode);
  const setViewMode = useStore(state => state.setViewMode);
  const files = data.filter(file => file.type === "file")
  const week = files.slice(0, 1);
  const month = files.slice(1, 8);
  const year = files.slice(8);
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <span className="text-brand-text text-2xl">Recent</span>
        <div className="flex justify-between items-center">
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
          <img src={infoIcon} className="w-5 h-5" />
        </div>
      </div>
      <div className="flex text-brand-text gap-2">
        <select className="bg-brand-bg-alt border border-gray-500 px-3 py-1 rounded-lg ">
          <option>Type</option>
        </select>
        <select className="bg-brand-bg-alt border border-gray-500 px-3 py-1 rounded-lg">
          <option>People</option>
        </select>
        <select className="bg-brand-bg-alt border border-gray-500 px-3 py-1 rounded-lg">
          <option>Modified</option>
        </select>
      </div>
      <div className="flex flex-col gap-2 max-h-[calc(100vh-250px)] overflow-scroll text-brand-text">
        <span className="border-b border-gray-500 p-1">Name</span>
        <span>Earlier this week</span>
        {viewMode === "list" && <div>
          {week.map(node =>
            <File node={node} />
          )}
        </div>}
        {viewMode == "block" && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-4">
          {week.map(node =>
            <FileBlock node={node} />
          )}
        </div>
        }
        <span>Earlier this month</span>
        {viewMode === "list" && <div>
          {month.map(node =>
            <File node={node} />
          )}
        </div>}
        {viewMode == "block" && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-4">
          {month.map(node =>
            <FileBlock node={node} />
          )}
        </div>
        }
        <span>Earlier this year</span>
        {viewMode === "list" && <div>
          {year.map(node =>
            <File node={node} />
          )}
        </div>}
        {viewMode == "block" && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-4">
          {year.map(node =>
            <FileBlock node={node} />
          )}
        </div>
        }
      </div>
    </div >
  )
}
