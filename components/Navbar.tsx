import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5'>
       <Link href='/'>
       <Image src='' alt='logo' width={74} height={29}></Image>
       </Link>
       <ul className='hidden lg:flex h-full gap-12'>
        {NAV_LINKS.map((link)=>(
            <Link href={link.href} key={link.key} className=''>
                {link.label}
            </Link>
        ))}
       </ul>
    </nav>
  )
}

export default Navbar
