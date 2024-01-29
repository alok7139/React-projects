import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { VscChromeClose } from "react-icons/vsc";
import { motion } from "framer-motion"

const Cards = ({data , reference}) => {
  return (
    <div>
      <motion.div drag dragConstraints={reference} 
      whileDrag={{scale:1}} dragElastic={0.2}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
       className='relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-600/50 text-white py-10 px-5 overflow-hidden'>
        <FaRegFileAlt/>
        <p className='text-[17px] mt-5 font-semibold leading-tight'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0 '>
            <div className='flex items-center justify-between px-8 py-3 mb-1'>
                <h5>{data.filesize}</h5>
                <span className='w-5 h-7 rounded-full flex items-center justify-center'>
                    {data.close ? <VscChromeClose/> : <IoCloudDownloadOutline size="2em"/>}
                    
                </span>
            </div>
            {
                data.tag.isopen && (
                    <div className={`tag w-full py-4 ${data.tag.tagcolor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                    <h3 className='text-sm font-semibold'>{data.tag.tagtitle}</h3>
                </div>
                )
            }
           
        </div>
      </ motion.div>

    </div>
  );
}

export default Cards
