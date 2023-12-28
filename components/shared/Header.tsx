import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='w-full border-b'>
        <div className='wrapper'>
            <Link href="/" className='w-36'>
               <Image 
                src="/assets/images/logo.png" 
                width={128} 
                height={38} 
                alt="GaloMinds logo" 
              />  
            </Link>
        </div>
    </header>
  )
}

export default Header