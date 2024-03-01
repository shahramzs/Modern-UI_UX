'use client';
import Image from "next/image"
import Link from "next/link"
import { NAV_LINKS } from "@/constants"
import Button from "./Button"
import { useState } from "react"

const Navbar = () => {
    const [close, setClose] = useState(false)

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <Link href="/">
            < Image src="/hilink-logo.svg" alt="logo" width={74} height={29}/>
        </Link>
        <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((nav,i)=>(
                   <Link href={nav.href} key={nav.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:underline underline-offset-4 decoration-dashed decoration-sky-500 ">
                        {nav.label}
                   </Link> 
                ))}
        </ul>
        <div className="lg:flexCenter hidden">
           <Button 
              type="button"
              title="Login"
              icon="/user.svg"
              variant = "btn_dark_green"/>
        </div>
        <Image 
            src="menu.svg"
            alt="menu"
            width={32}
            height={32}
            className={`inline-block cursor-pointer lg:hidden ${close ? 'hidden' : 'flex'}`}
            onClick={()=>setClose(!close)}
            />
            {close && (
                <ul className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white'>
                    <li className='text-xl w-full my-2'> 
                        <Image  src={`${close ? 'close.svg' : 'menu.svg'}`} alt="icon" width={32} height={32} onClick={()=>setClose(false)}/>
                    </li>
                    {NAV_LINKS.map((nav, index) => (
                        <Link href={nav.href} key={nav.key} className="regular-16 text-white flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:underline underline-offset-4 decoration-dashed decoration-sky-500 mx-4  my-2 text-lg">
                        {nav.label}
                </Link> 
                    ))}
                </ul>
            )}
    </nav>
  )
}

export default Navbar
