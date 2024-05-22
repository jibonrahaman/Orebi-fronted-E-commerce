import React from 'react'
import Search from '../Search'
import Gap from '../Components/GapPart/Gap'
import Banner from '../Components/BannerPart/Banner'
import Waranty from '../Components/WarantyPart/Waranty'
import Sliding from '../Components/SlidesPage/Sliding'
import Date from '../Components/SignUpPage/Date,MonthPart/Date'
import Product2 from '../Components/ProductPart2/Product2'
import Clock from '../Components/ClockPart/ClockPart'
import Countries from '../Components/SignUpPage/CountryPart/Countries'
import Divsion from '../Components/SignUpPage/NewCustomerPart/Divsion'
import ProductShow from '../Components/ProductPart2/ProductShow'
function Home() {
  return (
 
    <>

  <Gap  />
  <Banner />
  <Waranty />
  <Sliding />
  <Clock />
  <ProductShow />

    </>
  )
}

export default Home