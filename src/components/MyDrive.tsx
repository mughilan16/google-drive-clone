import lineIcon from "../assets/lineMenu.png"
import boxIcon from "../assets/boxmenu.png"
import { data, File, FileBlock } from "./Files"
import useStore from "../store";

export default function MyDrive() {
  const viewMode = useStore(state => state.viewMode);
  const setViewMode = useStore(state => state.setViewMode);
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <span className="text-brand-text text-2xl">My Drive</span>
        <div className="flex justify-between">
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
        </div>
      </div>
      <div className="flex text-brand-text gap-2">
        <select className="bg-transparent border border-gray-500 px-3 py-1 rounded-lg">
          <option>Type</option>
        </select>
        <select className="bg-transparent border border-gray-500 px-3 py-1 rounded-lg">
          <option>People</option>
        </select>
        <select className="bg-transparent border border-gray-500 px-3 py-1 rounded-lg">
          <option>Modified</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        {viewMode === "list" && <div className="overflow-y-scroll flex-grow  max-h-[calc(100vh-250px)]">
          {data.map(node =>
            <File node={node} />
          )}
        </div>}
        {viewMode == "block" &&
          <div className=" overflow-y-scroll flex-grow  max-h-[calc(100vh-250px)] flex flex-col gap-4">
            <span className="text-brand-text">Folder</span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-4">
              {data.filter(node => node.type === "folder").map(node =>
                <FileBlock node={node} />
              )}
            </div>
            <span className="text-brand-text">File</span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-4">
              {data.filter(node => node.type === "file").map(node =>
                <FileBlock node={node} />
              )}
            </div>
          </div>
        }
      </div>
    </div >
  )
}
