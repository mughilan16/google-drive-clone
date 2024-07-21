import { data, File } from "./Files"
import infoIcon from "../assets/info.png"

export default function Storage() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <span className="text-brand-text text-2xl">Storage</span>
        <div className="flex gap-5 items-center">
          <button className="text-brand-primary text-sm">Backups</button>
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
      <div className="flex flex-col gap-2">
        <div className="flex items-end gap-1">
          <div className="text-3xl text-brand-text font-medium">7.33 GB </div>
          <div className="text-sm mb-1 font-medium text-brand-text-alt">of 15 GB used </div>
        </div>
        <div className="w-full rounded-full h-2 bg-gray-700">
          <div className="fixed h-2 ml-10 rounded-full dark:bg-red-500 z-0 w-72 border-r-2 border-r-black"></div>
          <div className="fixed h-2 ml-4 rounded-full dark:bg-yellow-500 z-1 w-64 border-r-2 border-r-black"></div>
          <div className="fixed h-2 rounded-full dark:bg-blue-500 z-2 w-64 border-r-2 border-r-black"></div>
        </div>
        <div className="text-brand-text-alt text-xs flex gap-5">
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 p-1 rounded-full bg-blue-500"></div>
            Google Drive
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 p-1 rounded-full bg-yellow-500"></div>
            Google Photos
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 p-1 rounded-full bg-red-500"></div>
            Gmail
          </div>
        </div>
      </div>
      <div>
        <button className="border border-brand-text-alt rounded-full p-2 px-4 text-sm text-brand-primary font-medium">Get more storage</button>
        <button className="p-2 px-4 text-sm text-brand-primary font-medium">Clean up space</button>
      </div>
      <div className="overflow-y-scroll flex-grow flex flex-col gap-2 max-h-[calc(100vh-370px)]">
        <span className="text-brand-text">Files using Drive storage</span>
        <div className="flex flex-col gap-2">
          {data.map(node =>
            <File node={node} />
          )}
        </div>
      </div>
    </div >
  )
}
