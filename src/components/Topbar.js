"use client";
import React, { useEffect,useState } from "react";
import { useAppSelector } from "@/lib/hooks"; 
import ProgressBar from "@ramonak/react-progress-bar";
import Image from "next/image";
const Topbar = () => {
const [count, setCount] = useState(0)
  const name = useAppSelector((state) => state.goalSlice)


  useEffect(() => {
    let totalCount = 0;
    for (let e = 0; e < name.length; e++) {
      if (name[e] === true) {
        totalCount++;
      }
    }
    setCount(totalCount);
    
  }, [name]);
  

  return (
    <div className="flex justify-center items-center">
      <div className="topContainer">
        <Image src="/icon.png" alt="icon" width={100} height={500}/>
        <div className="flex flex-col justify-center">
          <p className="topHead">Your daily goal almost done</p>
          <p className="topText">{count} of 5 completed</p>
          <ProgressBar
            completed={(count/5)*100}
            height="5px"
            width="95%"
            baseBgColor="#E1EAF2"
            bgColor="#FFFFFF"
            // customLabel={(count/5)*100}
            // labelAlignment="outside"
            labelSize="10px"
            customLabelStyles={{ marginTop: "12px" }}
          />
          <p className="progressText">{(count/5)*100}%</p>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
