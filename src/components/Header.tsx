import React from 'react';
import Logo from '../images/tinder.png'
import { UserIcon } from '@heroicons/react/solid'
import { AnnotationIcon } from '@heroicons/react/solid'

function Header() {
    return (
        <div className="flex items-center justify-between z-100 border-b p-20">
            <UserIcon className="h-5 w-5 text-blue-500"/>
              <img
           className="object-contain h-5"
           src={Logo}
           alt="tinder logo"
           />
           <AnnotationIcon className="h-5 w-5 text-blue-500"/>
        </div>
        
    )
}

export default Header