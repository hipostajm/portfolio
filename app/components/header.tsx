import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Header(){
  return(
    <header className="flex flex-row ">
      <Avatar className="size-30">
        <AvatarImage src="pfp.png" />
        <AvatarFallback>pfp</AvatarFallback>
      </Avatar>
      {/* <img src="pfp.png" alt="pfp" className="rounded-full"/> */}
      <div>
        <h1>hipostajm</h1>
      </div>
    </header>
  )
}
