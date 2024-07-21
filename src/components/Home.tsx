import { useState } from "react"
import infoIcon from "../assets/info.png"
import fileIcon from "../assets/file.png"
import folderIcon from "../assets/folder.png"
import tickIcon from "../assets/tick.png"
import lineIcon from "../assets/lineMenu.png"
import boxIcon from "../assets/boxmenu.png"

import { data, File, FileBlock } from "./Files"
import useStore from "../store"

export default function Home() {
  const [fileView, setFileView] = useState<"file" | "folder">("file")
  const viewMode = useStore(state => state.viewMode);
  const setViewMode = useStore(state => state.setViewMode);
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <span className="text-brand-text text-2xl">Welcome</span>
        <img src={infoIcon} className="w-4 h-4" />
      </div>
      <div className="flex justify-between">
        <div className="rounded-2xl px-2 text-sm flex text-brand-text">
          <button className={
            "w-24 border-gray-500 py-1 border rounded-l-2xl bordor-gray-500 flex items-center gap-3 px-5"
            + `${fileView === "file" ? " bg-brand-active" : ""}`}
            disabled={fileView === "file"}
            onClick={() => setFileView("file")}
          >
            {fileView !== "file" && <img src={fileIcon} className="h-3" />}
            {fileView === "file" && <img src={tickIcon} className="h-3" />}
            File
          </button>
          <button className={
            "w-28 py-1 border border-l-0 rounded-r-2xl border-gray-500 flex items-center gap-3 px-5"
            + `${fileView === "folder" ? " bg-brand-active" : ""}`}
            disabled={fileView === "folder"}
            onClick={() => setFileView("folder")}
          >
            {fileView !== "folder" && <img src={folderIcon} className="h-3" />}
            {fileView === "folder" && <img src={tickIcon} className="h-3" />}
            Folder
          </button>
        </div>
        <div className="rounded-2xl px-2 text-sm flex text-brand-text">
          <button className={
            "w-12 border-gray-500 py-1 border rounded-l-2xl bordor-gray-500 flex items-center gap-3 px-4"
            + `${viewMode === "list" ? " bg-brand-active" : ""}`}
            disabled={viewMode === "list"}
            onClick={() => setViewMode("list")}
          >
            <img src={lineIcon} className="h-3" />
          </button>
          <button className={
            "w-12 py-1 border border-l-0 rounded-r-2xl border-gray-500 flex items-center gap-3 px-4"
            + `${viewMode === "block" ? " bg-brand-active" : ""}`}
            disabled={viewMode === "block"}
            onClick={() => setViewMode("block")}
          >
            <img src={boxIcon} className="h-3" />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-brand-text">Name</span>
        {viewMode === "list" && <div className="overflow-y-scroll flex-grow max-h-[calc(100vh-250px)]">
          {data.filter(node => node.type === fileView).map(node =>
            <File node={node} />
          )}
        </div>}
        {viewMode === "block" && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-4 overflow-y-scroll flex-grow max-h-[calc(100vh-250px)]">
          {data.filter(node => node.type === fileView).map(node =>
            <FileBlock node={node} />
          )}
        </div>}
      </div>
    </div >
  )
}
