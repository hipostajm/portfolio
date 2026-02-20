import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import "./header.scss"

export default function Header(){
  return(
    <header className="flex flex-row ">
      <Avatar className="size-30">
        <AvatarImage src="pfp.png" />
        <AvatarFallback>pfp</AvatarFallback>
      </Avatar>
      <div className="ml-[10px]">
        <h1 className="text-[1.4rem]">hipostajm</h1>
        <ul className="ml-[16px]">
        <li><a href="mailto:hipostajm@gmail.com">email</a></li>
        <li><a href="https://github.com/hipostajm">github</a></li>
        </ul>
      </div>
    </header>
  )
}
