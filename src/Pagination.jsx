import Product1 from './assets/Product1.png'
import Product2 from './assets/Product2.png'
import Product3 from './assets/Product3.png'
import Product4 from './assets/Product4.png'
import Product5 from './assets/Product5.png'
import Product6 from './assets/Product6.png'
import Product7 from './assets/Product7.png'
import Product8 from './assets/Product8.png'
import Product9 from './assets/Product9.png'
import Product10 from './assets/Product10.png'
import Product11 from './assets/Product11.png'
import Product12 from './assets/Product12.png'


import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Slides from './Components/SlidesPage/Slides'
import axios from 'axios'



function Pagination({ itemsPerPage,isListHidden , showList }) {

  const [productData, setProductData] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("http://localhost:7000/api/v1/allget/getproduct")
        setProductData(response.data);
        
      } catch (error) {
        console.log("Error Fethcing Product Data", error);
      }
    }
    fetchProduct()
  }, [])
  
  // Example items, to simulate fetching from another resources.
const items =productData

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item,index) => (        
          <div key={index} >
  <Slides className=' w-[300px] my-2' src={Product1}  alt={Product1}  price= "44" title= "Product 1"/>
          </div>
        ))}
    </>
  );
}
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [eventselected, seteventselected] = useState();

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    seteventselected(event.selected)
    setItemOffset(newOffset);
  };

  return (
    <>      
     <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< "
        renderOnZeroPageCount={null}
        containerClassName = 'mt-8 flex gap-x-3 '
        activeClassName="  bg-[#262626] text-white h-6"
        pageLinkClassName = " px-3 py-1 border border-[#f0f0f0] "
      />
      <h5 className='mt-8 pl-14'>Products from {itemOffset == 0? itemOffset+1 :eventselected +1} to {endOffset >  items.length ? items.length : endOffset } of {items.length}</h5>
    
      
    </>
  );
}
export default Pagination;