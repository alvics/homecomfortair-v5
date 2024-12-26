//*********************** */
// NOT BEING USED PAGE!!!!!
//*********************** */
import React, {Fragment} from 'react'
import SideBar from '../components/Sidebar.js'
import Seo from "../components/SEO-2"
import Schema from "../components/Schema-2"

export const Head = () => (
  <Fragment>
       <title>Shop Split System Air Conditioning | Home Comfort Air</title>,
       <meta name= "description" content="Search our split system air conditioning range and discover the options for cooling and heating your home or space."/>
      <Seo />
       <Schema />
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
