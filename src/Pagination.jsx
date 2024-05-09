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

// Example items, to simulate fetching from another resources.
const items = [
    // ..................................... 
{ src: Product1, alt: "Product 1", price: "44", title: "Product 1" },
{ src: Product2, alt: "Product 2", price: "44", title: "Product 2" },
{ src: Product3, alt: "Product 3", price: "44", title: "Product 3" },
{ src: Product4, alt: "Product 4", price: "44", title: "Product 4" },
{ src: Product5, alt: "Product 5", price: "44", title: "Product 5" },
{ src: Product6, alt: "Product 6", price: "44", title: "Product 6" },
{ src: Product7, alt: "Product 7", price: "44", title: "Product 7" },
{ src: Product8, alt: "Product 8", price: "44", title: "Product 8" },
{ src: Product9, alt: "Product 9", price: "44", title: "Product 9" },
{ src: Product10, alt: "Product 10", price: "44", title: "Product 10" },
{ src: Product11, alt: "Product 11", price: "44", title: "Product 11" },
{ src: Product12, alt: "Product 12", price: "44", title: "Product 12" },
         // ..................................... 
{ src: Product12, alt: "Product 12", price: "44", title: "Product 12" },
{ src: Product11, alt: "Product 11", price: "44", title: "Product 11" },
{ src: Product10, alt: "Product 10", price: "44", title: "Product 10" },
{ src: Product9, alt: "Product 9", price: "44", title: "Product 9" },
{ src: Product8, alt: "Product 8", price: "44", title: "Product 8" },
{ src: Product7, alt: "Product 7", price: "44", title: "Product 7" },
{ src: Product6, alt: "Product 6", price: "44", title: "Product 6" },
{ src: Product5, alt: "Product 5", price: "44", title: "Product 5" },
{ src: Product4, alt: "Product 4", price: "44", title: "Product 4" },
{ src: Product3, alt: "Product 3", price: "44", title: "Product 3" },
{ src: Product2, alt: "Product 2", price: "44", title: "Product 2" },
{ src: Product1, alt: "Product 1", price: "44", title: "Product 1" },
           // ..................................... 
              // ..................................... 
{ src: Product1, alt: "Product 1", price: "44", title: "Product 1" },
{ src: Product2, alt: "Product 2", price: "44", title: "Product 2" },
{ src: Product3, alt: "Product 3", price: "44", title: "Product 3" },
{ src: Product4, alt: "Product 4", price: "44", title: "Product 4" },
{ src: Product5, alt: "Product 5", price: "44", title: "Product 5" },
{ src: Product6, alt: "Product 6", price: "44", title: "Product 6" },
{ src: Product7, alt: "Product 7", price: "44", title: "Product 7" },
{ src: Product8, alt: "Product 8", price: "44", title: "Product 8" },
{ src: Product9, alt: "Product 9", price: "44", title: "Product 9" },
{ src: Product10, alt: "Product 10", price: "44", title: "Product 10" },
{ src: Product11, alt: "Product 11", price: "44", title: "Product 11" },
{ src: Product12, alt: "Product 12", price: "44", title: "Product 12" },
         // ..................................... 
{ src: Product12, alt: "Product 12", price: "44", title: "Product 12" },
{ src: Product11, alt: "Product 11", price: "44", title: "Product 11" },
{ src: Product10, alt: "Product 10", price: "44", title: "Product 10" },
{ src: Product9, alt: "Product 9", price: "44", title: "Product 9" },
{ src: Product8, alt: "Product 8", price: "44", title: "Product 8" },
{ src: Product7, alt: "Product 7", price: "44", title: "Product 7" },
{ src: Product6, alt: "Product 6", price: "44", title: "Product 6" },
{ src: Product5, alt: "Product 5", price: "44", title: "Product 5" },
{ src: Product4, alt: "Product 4", price: "44", title: "Product 4" },
{ src: Product3, alt: "Product 3", price: "44", title: "Product 3" },
{ src: Product2, alt: "Product 2", price: "44", title: "Product 2" },
{ src: Product1, alt: "Product 1", price: "44", title: "Product 1" },
           // .....................................    // ..................................... 
{ src: Product1, alt: "Product 1", price: "44", title: "Product 1" },
{ src: Product2, alt: "Product 2", price: "44", title: "Product 2" },
{ src: Product3, alt: "Product 3", price: "44", title: "Product 3" },
{ src: Product4, alt: "Product 4", price: "44", title: "Product 4" },
{ src: Product5, alt: "Product 5", price: "44", title: "Product 5" },
{ src: Product6, alt: "Product 6", price: "44", title: "Product 6" },
{ src: Product7, alt: "Product 7", price: "44", title: "Product 7" },
{ src: Product8, alt: "Product 8", price: "44", title: "Product 8" },
{ src: Product9, alt: "Product 9", price: "44", title: "Product 9" },
{ src: Product10, alt: "Product 10", price: "44", title: "Product 10" },
{ src: Product11, alt: "Product 11", price: "44", title: "Product 11" },
{ src: Product12, alt: "Product 12", price: "44", title: "Product 12" },
         // ..................................... 
{ src: Product12, alt: "Product 12", price: "44", title: "Product 12" },
{ src: Product11, alt: "Product 11", price: "44", title: "Product 11" },
{ src: Product10, alt: "Product 10", price: "44", title: "Product 10" },
{ src: Product9, alt: "Product 9", price: "44", title: "Product 9" },
{ src: Product8, alt: "Product 8", price: "44", title: "Product 8" },
{ src: Product7, alt: "Product 7", price: "44", title: "Product 7" },
{ src: Product6, alt: "Product 6", price: "44", title: "Product 6" },
{ src: Product5, alt: "Product 5", price: "44", title: "Product 5" },
{ src: Product4, alt: "Product 4", price: "44", title: "Product 4" },
{ src: Product3, alt: "Product 3", price: "44", title: "Product 3" },
{ src: Product2, alt: "Product 2", price: "44", title: "Product 2" },
{ src: Product1, alt: "Product 1", price: "44", title: "Product 1" },
           // .....................................    // ..................................... 
{ src: Product1, alt: "Product 1", price: "44", title: "Product 1" },
{ src: Product2, alt: "Product 2", price: "44", title: "Product 2" },
{ src: Product3, alt: "Product 3", price: "44", title: "Product 3" },
{ src: Product4, alt: "Product 4", price: "44", title: "Product 4" },
{ src: Product5, alt: "Product 5", price: "44", title: "Product 5" },
{ src: Product6, alt: "Product 6", price: "44", title: "Product 6" },
{ src: Product7, alt: "Product 7", price: "44", title: "Product 7" },
{ src: Product8, alt: "Product 8", price: "44", title: "Product 8" },
{ src: Product9, alt: "Product 9", price: "44", title: "Product 9" },
{ src: Product10, alt: "Product 10", price: "44", title: "Product 10" },
{ src: Product11, alt: "Product 11", price: "44", title: "Product 11" },
{ src: Product12, alt: "Product 12", price: "44", title: "Product 12" },
         // ..................................... 
{ src: Product12, alt: "Product 12", price: "44", title: "Product 12" },
{ src: Product11, alt: "Product 11", price: "44", title: "Product 11" },
{ src: Product10, alt: "Product 10", price: "44", title: "Product 10" },
{ src: Product9, alt: "Product 9", price: "44", title: "Product 9" },
{ src: Product8, alt: "Product 8", price: "44", title: "Product 8" },
{ src: Product7, alt: "Product 7", price: "44", title: "Product 7" },
{ src: Product6, alt: "Product 6", price: "44", title: "Product 6" },
{ src: Product5, alt: "Product 5", price: "44", title: "Product 5" },
{ src: Product4, alt: "Product 4", price: "44", title: "Product 4" },
{ src: Product3, alt: "Product 3", price: "44", title: "Product 3" },
{ src: Product2, alt: "Product 2", price: "44", title: "Product 2" },
{ src: Product1, alt: "Product 1", price: "44", title: "Product 1" },
           // .....................................    // ..................................... 
{ src: Product1, alt: "Product 1", price: "44", title: "Product 1" },
{ src: Product2, alt: "Product 2", price: "44", title: "Product 2" },
{ src: Product3, alt: "Product 3", price: "44", title: "Product 3" },
{ src: Product4, alt: "Product 4", price: "44", title: "Product 4" },
{ src: Product5, alt: "Product 5", price: "44", title: "Product 5" },
{ src: Product6, alt: "Product 6", price: "44", title: "Product 6" },
{ src: Product7, alt: "Product 7", price: "44", title: "Product 7" },
{ src: Product8, alt: "Product 8", price: "44", title: "Product 8" },
{ src: Product9, alt: "Product 9", price: "44", title: "Product 9" },
{ src: Product10, alt: "Product 10", price: "44", title: "Product 10" },
{ src: Product11, alt: "Product 11", price: "44", title: "Product 11" },
{ src: Product12, alt: "Product 12", price: "44", title: "Product 12" },
         // ..................................... 
{ src: Product12, alt: "Product 12", price: "44", title: "Product 12" },
{ src: Product11, alt: "Product 11", price: "44", title: "Product 11" },
{ src: Product10, alt: "Product 10", price: "44", title: "Product 10" },
{ src: Product9, alt: "Product 9", price: "44", title: "Product 9" },
{ src: Product8, alt: "Product 8", price: "44", title: "Product 8" },
{ src: Product7, alt: "Product 7", price: "44", title: "Product 7" },
{ src: Product6, alt: "Product 6", price: "44", title: "Product 6" },
{ src: Product5, alt: "Product 5", price: "44", title: "Product 5" },
{ src: Product4, alt: "Product 4", price: "44", title: "Product 4" },
{ src: Product3, alt: "Product 3", price: "44", title: "Product 3" },
{ src: Product2, alt: "Product 2", price: "44", title: "Product 2" },
{ src: Product1, alt: "Product 1", price: "44", title: "Product 1" },
           // .....................................    // ..................................... 
{ src: Product1, alt: "Product 1", price: "44", title: "Product 1" },
{ src: Product2, alt: "Product 2", price: "44", title: "Product 2" },
{ src: Product3, alt: "Product 3", price: "44", title: "Product 3" },
{ src: Product4, alt: "Product 4", price: "44", title: "Product 4" },
{ src: Product5, alt: "Product 5", price: "44", title: "Product 5" },
{ src: Product6, alt: "Product 6", price: "44", title: "Product 6" },
{ src: Product7, alt: "Product 7", price: "44", title: "Product 7" },
{ src: Product8, alt: "Product 8", price: "44", title: "Product 8" },
{ src: Product9, alt: "Product 9", price: "44", title: "Product 9" },
{ src: Product10, alt: "Product 10", price: "44", title: "Product 10" },
{ src: Product11, alt: "Product 11", price: "44", title: "Product 11" },
{ src: Product12, alt: "Product 12", price: "44", title: "Product 12" },
         // ..................................... 
{ src: Product12, alt: "Product 12", price: "44", title: "Product 12" },
{ src: Product11, alt: "Product 11", price: "44", title: "Product 11" },
{ src: Product10, alt: "Product 10", price: "44", title: "Product 10" },
{ src: Product9, alt: "Product 9", price: "44", title: "Product 9" },
{ src: Product8, alt: "Product 8", price: "44", title: "Product 8" },
{ src: Product7, alt: "Product 7", price: "44", title: "Product 7" },
{ src: Product6, alt: "Product 6", price: "44", title: "Product 6" },
{ src: Product5, alt: "Product 5", price: "44", title: "Product 5" },
{ src: Product4, alt: "Product 4", price: "44", title: "Product 4" },
{ src: Product3, alt: "Product 3", price: "44", title: "Product 3" },
{ src: Product2, alt: "Product 2", price: "44", title: "Product 2" },
{ src: Product1, alt: "Product 1", price: "44", title: "Product 1" },
           // .....................................    // ..................................... 
{ src: Product1, alt: "Product 1", price: "44", title: "Product 1" },
{ src: Product2, alt: "Product 2", price: "44", title: "Product 2" },
{ src: Product3, alt: "Product 3", price: "44", title: "Product 3" },
{ src: Product4, alt: "Product 4", price: "44", title: "Product 4" },
{ src: Product5, alt: "Product 5", price: "44", title: "Product 5" },
{ src: Product6, alt: "Product 6", price: "44", title: "Product 6" },
{ src: Product7, alt: "Product 7", price: "44", title: "Product 7" },
{ src: Product8, alt: "Product 8", price: "44", title: "Product 8" },
{ src: Product9, alt: "Product 9", price: "44", title: "Product 9" },
{ src: Product10, alt: "Product 10", price: "44", title: "Product 10" },
{ src: Product11, alt: "Product 11", price: "44", title: "Product 11" },
{ src: Product12, alt: "Product 12", price: "44", title: "Product 12" },
         // ..................................... 
{ src: Product12, alt: "Product 12", price: "44", title: "Product 12" },
{ src: Product11, alt: "Product 11", price: "44", title: "Product 11" },
{ src: Product10, alt: "Product 10", price: "44", title: "Product 10" },
{ src: Product9, alt: "Product 9", price: "44", title: "Product 9" },
{ src: Product8, alt: "Product 8", price: "44", title: "Product 8" },
{ src: Product7, alt: "Product 7", price: "44", title: "Product 7" },
{ src: Product6, alt: "Product 6", price: "44", title: "Product 6" },
{ src: Product5, alt: "Product 5", price: "44", title: "Product 5" },
{ src: Product4, alt: "Product 4", price: "44", title: "Product 4" },
{ src: Product3, alt: "Product 3", price: "44", title: "Product 3" },
{ src: Product2, alt: "Product 2", price: "44", title: "Product 2" },
{ src: Product1, alt: "Product 1", price: "44", title: "Product 1" },
           // ..................................... 
];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item,index) => (        
            <div key={index} className=' flex flex-wrap '>
<Slides className=' w-[300px] my-2'  src={item.src} alt={item.alt} price={item.price} title={item.title}/>
          </div>
        ))}
    </>
  );
}

function Pagination({ itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

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
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
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
        activeClassName="  bg-[#262626] text-white "
        pageLinkClassName = " px-3 py-1 border border-[#f0f0f0]"
      />
      <h5>Products from {itemOffset+1} to {endOffset >  items.length ? items.length : endOffset} of {items.length}</h5>
    </>
  );
}
export default Pagination;