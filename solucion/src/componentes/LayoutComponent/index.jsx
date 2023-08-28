import React from 'react'
import './style.css'

const Layout = ({children}) => {
    
    return (
        <div className='container-layout'>
            {children}
        </div>
    )
}

export default Layout