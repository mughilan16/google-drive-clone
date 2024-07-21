import { data, File } from "./Files"
import infoIcon from "../assets/info.png"

export default function Storage() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <span className="text-brand-text text-2xl">My Drive</span>
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
      <div className="overflow-y-scroll flex-grow flex flex-col gap-2 max-h-[calc(100vh-250px)]">
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
