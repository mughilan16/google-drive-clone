import textFileIcon from "../assets/textfile.png"
import folderIcon from "../assets/folder.png"
import dotsIcon from "../assets/dots.png"

export type Node = {
  name: string,
  type: "file" | "folder",
  fileType: string,
}

export const data: Array<Node> = [
  { name: "file1.txt", type: "file", fileType: "text" },
  { name: "file2.txt", type: "file", fileType: "text" },
  { name: "file3.txt", type: "file", fileType: "text" },
  { name: "file4.txt", type: "file", fileType: "text" },
  { name: "file5.txt", type: "file", fileType: "text" },
  { name: "file6.txt", type: "file", fileType: "text" },
  { name: "file7.txt", type: "file", fileType: "text" },
  { name: "file8.txt", type: "file", fileType: "text" },
  { name: "file9.txt", type: "file", fileType: "text" },
  { name: "file10.txt", type: "file", fileType: "text" },
  { name: "file11.txt", type: "file", fileType: "text" },
  { name: "folder1.txt", type: "folder", fileType: "folder" },
  { name: "folder2.txt", type: "folder", fileType: "folder" },
  { name: "folder3.txt", type: "folder", fileType: "folder" },
  { name: "folder4.txt", type: "folder", fileType: "folder" },
  { name: "folder5.txt", type: "folder", fileType: "folder" },
  { name: "folder6.txt", type: "folder", fileType: "folder" },
  { name: "folder7.txt", type: "folder", fileType: "folder" },
  { name: "folder8.txt", type: "folder", fileType: "folder" },
  { name: "folder9.txt", type: "folder", fileType: "folder" },
  { name: "folder10.txt", type: "folder", fileType: "folder" },
  { name: "folder11.txt", type: "folder", fileType: "folder" },
]


export function File(props: { node: Node }) {
  return (
    <div className="border-t border-gray-500 text-brand-text hover:bg-brand-hover p-2 py-3 text-sm flex items-center justify-between">
      <div className="flex items-center gap-4">
        {props.node.type === "folder" && <img src={folderIcon} className="w-4 h-4" />}
        {props.node.fileType === "text" && <img src={textFileIcon} className="w-4 h-4" />}
        {props.node.name}
      </div>
      <img src={dotsIcon} className="w-4 h-4" />
    </div>
  )
}

export function FileBlock(props: { node: Node }) {
  return (
    <div className="w-72 bg-brand-bg p-3 rounded-xl flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-brand-text">
          {props.node.type === "folder" && <img src={folderIcon} className="w-4 h-4" />}
          {props.node.fileType === "text" && <img src={textFileIcon} className="w-4 h-4" />}
          {props.node.name}
        </div>
        <img src={dotsIcon} className="w-4 h-4" />
      </div>
      <div className="h-36 bg-brand-bg-alt rounded-xl flex items-center align-middle justify-center">
        {props.node.type === "folder" && <img src={folderIcon} className="w-16 h-16" />}
        {props.node.fileType === "text" && <img src={textFileIcon} className="w-16 h-16" />}
      </div>
      <div className="flex items-center gap-3 px-1">
        <div className="text-brand-text rounded-3xl text-sm bg-blue-800 px-1 py-0 w-6 h-6 text-center">
          M
        </div>
        <div className="text-xs text-brand-text-alt">
          You opened • 28 June 2024
        </div>
      </div>
    </div>
  )
}
