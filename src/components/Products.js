import React from "react";
import { AiOutlineWifi } from "react-icons/ai";
import { FaBatteryQuarter } from "react-icons/fa";
import { MdCellTower } from "react-icons/md";
import {MdKeyboardArrowLeft} from 'react-icons/md';
import { TiArrowSortedDown } from "react-icons/ti";
import { AiFillStar } from "react-icons/ai";
import {LiaObjectGroupSolid} from "react-icons/lia";
import {CgSmartHomeRefrigerator} from 'react-icons/cg';
import {MdOutlineArrowForwardIos} from 'react-icons/md';
import Button from 'react-bootstrap/Button';
const Products = () => {
  const getTime = () => {
    const date = new Date();
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <span>{getTime()}</span>
              </div>
              <div className="col text-end">
              <span className="p-1">
                  <MdCellTower />
                </span>
                <span className="p-1">
                  <AiOutlineWifi />
                </span>
                <span className="p-1">
                  <FaBatteryQuarter />
                </span>
                
              </div>
            </div>
            <div className="row p-2">
            <span className="p-1 pr-2"><MdKeyboardArrowLeft/> <span className="p-1">Select Dishes</span></span> 
            
              
            </div>
            <div className="nav m-0 p-0">
            </div>


<div className="p-3">
<span className="ani py-1 px-3  cust me-2">Italian</span>
<span className="ani py-1 px-3  text-muted me-2">Indian</span>
<span className="ani py-1 px-3  text-muted me-2">Indian</span>
<span className="ani py-1 px-3  text-muted">Indian</span>


<h6 className="pt-3 pb-2">Popular Dishes</h6>
<div className="circle1 me-1">
  <img src="https://i.ytimg.com/vi/d0hlJ4pvyj4/maxresdefault.jpg" alt="Circle" className="circle-image" />
  <span className="circle-text">Biryani</span>
</div>
<div className="circle me-1">
  <img src="https://i.ytimg.com/vi/d0hlJ4pvyj4/maxresdefault.jpg" alt="Circle" className="circle-image" />
  <span className="circle-text">Biryani</span>
</div>
<div className="circle me-1">
  <img src="https://i.ytimg.com/vi/d0hlJ4pvyj4/maxresdefault.jpg" alt="Circle" className="circle-image" />
  <span className="circle-text">Biryani</span>
</div>
{/* <div className="circle">
  <img src="https://i.ytimg.com/vi/d0hlJ4pvyj4/maxresdefault.jpg" alt="Circle" className="circle-image" />
  <span className="circle-text">Biryani</span>
</div> */}
<hr/>

<div>
<div className="row">
              <div className="col">
              <span style={{fontSize:'14px'}}>Recommended <TiArrowSortedDown/></span>

              </div>
              <div className="col text-end">
              <Button className="bg-dark px-3 py-0 small-text">Menu</Button>
                
              </div>

</div>
<div className="row">


  <div className="col">
    <span className=" small-text me-2">Masala Muglai</span> 
    <span className="group me-2"><LiaObjectGroupSolid/></span>
    <span className="rating small-text-rate ">4.2<AiFillStar /></span> 


    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <span className="text-muted"><CgSmartHomeRefrigerator /></span>
        <span className="refri text-muted  me-1">Refrigerator</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <span className="text-muted"><CgSmartHomeRefrigerator /></span>
        <span className="refri text-muted ">Refrigerator</span>
      </div>
      <span className="vertical-line"></span>

      <div style={{ display: 'flex', flexDirection: 'column' }} className="px-2 py-1">
      <span className="ingredients">Ingredients</span>
      <a href="#" style={{ fontSize: '7px' ,color:'#FF8800'}}>View list <MdOutlineArrowForwardIos/></a>
      </div>
  

  
  

    </div>
 
  </div>

  <div className="col text-start mt-2">
  <div className="cart">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8jYqEe4D78PaGHhnastN3L-GYKrIEc_QNTg&usqp=CAU"
      alt="Cart"
      style={{ width: '100%', height: '100%' }}
    />
    <button className="add-to-cart-btn">Add </button>
  </div>
</div>


</div>
</div>

<hr/>



</div>
           
           
            
























          </div>
          
            
          
         
        </div>
      </div>
    </>
  );
};

export default Products;
