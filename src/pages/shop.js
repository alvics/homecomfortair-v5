import React, {Fragment} from 'react'
import SideBar from '../components/Sidebar.js'

export const Head = () => (
  <Fragment>
       <title>Shop Split System Air Conditioning | Home Comfort Air Gold Coast</title>,
       <meta name= "description" content="Search our split system air conditioning range and discover the options for cooling and heating your home or space."/>
      <meta name="keywords" content="Gold,Coast,Air,Conditioning,
                Split,systems,shop" />
</Fragment>
)

export default function shop() {
  return (
    <div className='container'>
    <h1>Hello from shop!!</h1>
    <SideBar />
    
    </div>
  )
}
