import homeIcon from "../assets/homepage.png"
import driveIcon from "../assets/hard-drive.png"
import computerIcon from "../assets/computer.png"
import sharedIcon from "../assets/group.png"
import recentIcon from "../assets/history.png"
import starIcon from "../assets/star.png"
import spamIcon from "../assets/spam.png"
import binIcon from "../assets/bin.png"
import storageIcon from "../assets/cloud.png"
import useStore from "../store";

export default function SideBar() {
  const pages = [
    [
      { name: "Home", icon: homeIcon },
      { name: "My Drive", icon: driveIcon },
      { name: "Computers", icon: computerIcon }
    ],
    [
      { name: "Shared With Me", icon: sharedIcon },
      { name: "Recent", icon: recentIcon },
      { name: "Starred", icon: starIcon }
    ],
    [
      { name: "Spam", icon: spamIcon },
      { name: "Bin", icon: binIcon },
      { name: "Storage", icon: storageIcon }
    ]
  ];

  return (
    <div className="pt-3 w-56 pr-4">
      <button className="pr-4 pl-5 py-2 bg-brand-secondary text-brand-text flex gap-3 items-center rounded-2xl font-semibold">
        <span className="text-3xl font-normal">+</span>
        <span className="text-sm">New</span>
      </button>
      <div className="pt-5 flex flex-col gap-5">
        {pages.map(div => <Division division={div} />)}
      </div>
      <div className="px-4 py-2 flex flex-col gap-1.5">
        <div className="w-full rounded-full h-1 bg-gray-700">
          <div className="h-1 rounded-full dark:bg-brand-primary w-3/5"></div>
        </div>
        <div className="text-xs text-brand-text-alt">7.33 GB of 15 GB used </div>
        <button className="text-sm text-brand-primary border-brand-text-alt border w-4/5 py-2 rounded-full">Get more storage</button>
      </div>
    </div>
  )
}

function Division(props: { division: Array<{ name: string, icon: string }> }) {
  return (
    <div className="flex flex-col gap-0.5">
      {props.division.map(item => <Item item={item} />)}
    </div>
  )
}

function Item(props: { item: { name: string, icon: string } }) {
  const currentPage = useStore(state => state.page);
  const goToPage = useStore(state => state.goToPage);
  const handleClick = () => {
    goToPage(props.item.name)
  }
  return (
    <button
      className={`${currentPage === props.item.name ? "bg-brand-active " : ""}`
        + "rounded-3xl px-5 py-1 text-[14px] text-brand-text flex items-center gap-4 hover:bg-brand-hover"}
      onClick={handleClick} >
      <img src={props.item.icon} className="w-4 h-4" />
      <span>{props.item.name}</span>
    </button>
  )
}
