import {useEffect, useState} from 'react'

function ProgressBar() {
    const [scrollTop,setScrollTop]=useState<any>();
    useEffect(()=>{
        window.addEventListener("scroll",onScroll)
        return ()=>window.removeEventListener("scroll",onScroll);
    },[])

    const onScroll=()=>{
        const winScroll=document.documentElement.scrollTop;
        const height=document.documentElement.scrollHeight-
                    document.documentElement.clientHeight;
        const scrolled=(winScroll/height)*100;
        setScrollTop(scrolled)
    }
  return (
    // Changed ml-[-5px] to left-[90px] to align with the desktop sidebar's width
    // It's within a 'hidden md:block' parent, so it will only show on desktop.
    <div className='w-1.5 bg-gray-200 fixed left-[90px] mt-[90px] h-full mb-4'> {/* */}
        <div className='bg-purple-300 transition-all ease-out duration-1000' style={{height:`${scrollTop}%`}}>
        </div>
    </div>
  )
}

export default ProgressBar