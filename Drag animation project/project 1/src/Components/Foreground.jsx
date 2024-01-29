import React, { useRef, useState } from 'react'
import Cards from './Cards'

function foreground() {
    const ref = useRef(null);
    const data = [
        {
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, reiciendis?" ,
         filesize: ".9mb", close:false , 
        tag:{isopen: true, tagtitle:"Download Now", tagcolor: "green"}
       },
       {
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, reiciendis?" ,
         filesize: ".9mb", close:false , 
        tag:{isopen: true, tagtitle:"Download Now", tagcolor: "blue"}
       },
       {
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, reiciendis?" ,
         filesize: ".9mb", close:true , 
        tag:{isopen: false, tagtitle:"Upload", tagcolor: "green"}
       },
    ];
    // const [first, setfirst] = useState(second)
    return (
        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-6 flex-wrap p-5'>
            {data.map((item,index)=>(
                <Cards data={item} reference={ref}/>
            ))}
        </div>
        
    )
}

export default foreground
