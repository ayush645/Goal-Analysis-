import Goals from "@/components/Goals";
import Graph from "@/components/Graph";
import Topbar from "@/components/Topbar";
import heart from '../../public/heart.gif'
import Image from "next/image";

export default function Home() {
  return (
 <div className="container" >
<Topbar/>
<div className="flex justify-between items-center w-[312px] h-[28px] m-4 ">
  <p className="goals">Today’s Goal</p>
 <Image src={heart} width={36} height={28} alt="heart"/>
</div>
<Goals/>
<Graph/>
 </div>
  );
}
