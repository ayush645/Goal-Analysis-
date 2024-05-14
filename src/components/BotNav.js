"use client"
import React from "react";
import Link from "next/link";
import { FaFire, FaDumbbell } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { SlGraph } from "react-icons/sl";
import { usePathname } from "next/navigation";
const BotNav = () => {

  const pathname=usePathname()
  

  return (
    <div className="fixed bottom-0 left-0 bg-botnav w-full h-[70px] flex items-center justify-evenly p-2">
      <div className={pathname==='/'?"bottomContActive":"bottomCont"}>
        <Link href={"/"}>
          <FaFire className="h-[40px] w-[40px]" />
          <p className="bottomLabel">Page 1</p>
        </Link>
      </div>

      <div className={pathname==='/page2'?"bottomContActive":"bottomCont"}>
        <Link href={"/page2"}>
          <FaDumbbell className="h-[40px] w-[40px]" />
          <p className="bottomLabel">Page 2</p>
        </Link>
      </div>

      <div className={pathname==='/page3'?"bottomContActive":"bottomCont"}>
        <Link href={"/page3"}>
          <ImSpoonKnife className="h-[40px] w-[40px]" />
          <p className="bottomLabel">Page 3</p>
        </Link>
      </div>

      <div className={pathname==='/page4'?"bottomContActive":"bottomCont"}>
        <Link href={"/page4"}>
          <SlGraph className="h-[40px] w-[40px]" />
          <p className="bottomLabel">Page 4</p>
        </Link>
      </div>
    </div>
  );
};

export default BotNav;
