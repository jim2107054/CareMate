import React from 'react'
import Header from './Header'

const MainLayout = ({children}) => {
  return (
    <div>
        <Header/>
        {children}
        {/* What ever we write in MainLayout tag will be passed as children prop to this component. */}
    </div>
  )
}

export default MainLayout