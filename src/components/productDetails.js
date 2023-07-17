import React, { useState, useEffect } from "react";
import { MdCellTower } from "react-icons/md";
import { AiOutlineWifi } from "react-icons/ai";
import { FaBatteryQuarter } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { TiArrowSortedDown } from "react-icons/ti";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

import { FiClock } from "react-icons/fi";

import "./productDetails.css";

const ProductDetails = () => {
  const [selectedVeg] = useState(null);
  const [vegList, setVeglist] = useState([]);
  const [spicesList, setSpicesList] = useState([]);
  const [appliancesList, setAppliancesList] = useState([]);
  const [dishData, setDishData] = useState([]);
  const [isVeg, setIsVeg] = useState(false);
  const [isSpices, setIsSpices] = useState(false);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1"
      );
      const data = await response.json();
    
      setDishData(data);
      setVeglist(data.ingredients.vegetables);
      setSpicesList(data.ingredients.spices);
      debugger
      setAppliancesList(data.ingredients.appliances);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const count = vegList.length;
  const count1 = spicesList.length;
  const formattedCount = count.toString().padStart(2, "0");
  const formattedCount1 = count1.toString().padStart(2, "0");

  useEffect(() => {
    fetchData();
  }, []);

  
 
  

  const getTime = () => {
    const date = new Date();
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const toggleSpices = () => {
    setIsVeg(!isVeg);
    setIsSpices(!isSpices);
  };
  const toggleVeg = () => {
    debugger
    setIsVeg(!isVeg);
    setIsSpices(!isSpices);
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
              <span className="p-1 pr-2">
               
             



              <Link
                                  to="/"
                                  style={{
                                   
                                    color: "black",
                                    textDecoration: "none",
                                  }}
                                >
                                
                                  <MdKeyboardArrowLeft />
                                </Link>
                                </span>
            </div>
            <div className="row p-2">
              <div className="col">
                <h2 style={{ fontWeight: "bold" }}>
                  {dishData.name}
                  <span className="rating small-text-rate ml-1">
                    4.2 <AiFillStar />
                  </span>
                </h2>
                <p className="text-muted ml-4" style={{ fontSize: "8px" }}>
                  Mughalai Masala is a style of cookery developed in the indian
                  Subcontiment by the imperial kitchens of the Mughal Empire
                </p>
                <div className="mt-2">
                  <FiClock />{" "}
                  <span style={{ fontSize: "10px" }}>
                    {dishData.timeToPrepare}
                  </span>
                </div>
              </div>
            </div>
            <hr className="mt-2" />
            <div className="p-1">
              <span style={{ fontWeight: "bold",fontSize:'20px' }}>Ingredients</span>
              <br />
              <span style={{ fontSize: "8px" }} className="text-muted">
                For 2 people
              </span>
            </div>
            <hr />

            <div className="p-1">
              <div className="row">
                <div className="col">
                  <div className="dropdown">
                    <div className="dropdown-btn" onClick={toggleVeg}>
                      <span style={{ fontSize: "14px", cursor: "pointer" }}>
                        Vegitables<span>({formattedCount})</span>{" "}
                        <TiArrowSortedDown />
                      </span>
                    </div>

                    {isVeg && (
                      <div className="dropdown-content">
                        {vegList.map((item, index) => (
                          <div
                            key={index}
                            className={`dropdown-item ${
                              selectedVeg === item.name ? "active" : ""
                            }`}
                          >
                            <div className="left-content">{item.name}</div>
                            <div className="right-content">{item.quantity}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-1 mt-3">
              <div className="row">
                <div className="col">
                  <div className="dropdown">
                    <div className="dropdown-btn" onClick={toggleSpices}>
                      <span style={{ fontSize: "14px", cursor: "pointer" }}>
                        Spices<span>({formattedCount1})</span>{" "}
                        <TiArrowSortedDown />
                      </span>
                    </div>

                    {isSpices && (
                      <div className="dropdown-content">
                        {spicesList.map((item, index) => (
                          <div
                            key={index}
                            className={`dropdown-item ${
                              selectedVeg === item.name ? "active" : ""
                            }`}
                          >
                            <div className="left-content">{item.name}</div>
                            <div className="right-content">{item.quantity}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3">
            <span style={{ fontWeight: "bold",fontSize:'20px' }}>Appliances</span>
           
            <div style={{ display: 'flex', flexDirection: 'row' }}>
            {appliancesList.map((item, index) => (
  <div className="py-3 me-4" key={index} style={{ marginRight: '10px' }}>
  <div className="appliances d-flex justify-content-center align-items-center">
      <span>
        
        <img style={{height: '40px', width: '40px'}} src="data:image/jpeg;base64,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"/>
        <br />
        <span style={{fontSize:'7px'}}>{item.name}</span>
      </span>
    </div>
  </div>
))}




</div>

</div>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
