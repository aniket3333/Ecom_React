import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineWifi } from "react-icons/ai";
import { FaBatteryQuarter } from "react-icons/fa";
import { MdCellTower } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { TiArrowSortedDown } from "react-icons/ti";
import { AiFillStar } from "react-icons/ai";
import { LiaObjectGroupSolid } from "react-icons/lia";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FcCalendar } from "react-icons/fc";
import { BiStopwatch } from "react-icons/bi";
import Button from "react-bootstrap/Button";
const Products = () => {
  const [biryaniData, setBiryaniData] = useState([]);
  const [dish, setdish] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countryList] = useState(['idli', 'dosa', 'wadapaw', 'pakoda']);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/"
      );
      const data = await response.json();
      const popularDish = data.popularDishes;
      const dis = data.dishes;
      debugger;
      setBiryaniData(popularDish);
      setdish(dis);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const cuisines = [
    "Indian",
    "Indian",
    "Indian",
    "Indian",
    "Indian",
    "Indian",
    "Indian",
    "Indian",
    "Indian",
    "Indian",
    "Indian",
    "Indian",
    "Indian",
    "Indian",
    "Indian",
    "Indian",
    "Indian",
    "Indian",
    "Indian",
    "Indian",
    "Indian",
  ];

  const getTime = () => {
    const date = new Date();
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const getAddedTime = () => {
    const date = new Date();
    date.setHours(date.getHours() + 2);
    const options = { hour: "2-digit", minute: "2-digit" };
    return date.toLocaleTimeString([], options);
  };

  const formatDate = () => {
    const date = new Date();

    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);

    const [month, day, year] = formattedDate.split(" ");

    return `${day} ${month} ${year}`;
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
                <MdKeyboardArrowLeft />{" "}
                <span className="p-1">Select Dishes</span>
              </span>
            </div>

            <div className="col text-start mt-2">
              <div className="cart mb-3">
                <div
                  className="show-time"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span
                    className="pt-2"
                    style={{
                      fontSize: "6px",
                      fontWeight: "bold",
                      fontStyle: "Open Sans",
                    }}
                  >
                    <FcCalendar /> {formatDate()}
                  </span>
                  <span className="vertical-line"></span>
                  <span
                    className="pt-2"
                    style={{
                      fontSize: "6px",
                      fontWeight: "bold",
                      fontStyle: "Open Sans",
                    }}
                  >
                    <BiStopwatch /> {getTime()} - {getAddedTime()}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-3 ">
              <div className="cuisines-container">
                <div className="cuisines-scroll">
                  <span className="ani py-1 px-3  cust me-2">Italian</span>
                  {cuisines.map((cuisine, index) => (
                    <span key={index} className="ani py-1 px-3 text-muted me-2">
                      {cuisine}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 pb-2">
                <span style={{ fontSize: "13px" }}>Popular Dishes</span>
              </div>

              <div className="cuisines-container">
                <div className="biryani_noborder  me-3">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNO97FbHTCFtvxLuqzsHpJaUQyTFJjKNWyDw&usqp=CAU"
                    alt="biryani"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                    }}
                  />
                  <span className="circle-text">Biryani</span>
                </div>
                {biryaniData.map((item) => (
                  <div className="biryani me-3" key={item.id}>
                    <img
                      src={item.image}
                      alt="biryani"
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                      }}
                    />
                    <span className="circle-text">{item.name}</span>
                  </div>
                ))}
              </div>

              <hr />

              <div>
                <div className="row">
                  <div className="col ">
                  <div className="dropdown">
      <div className="dropdown-btn" onClick={toggleDropdown}>
        <span style={{ fontSize: '14px' }}>
          Recommended <TiArrowSortedDown />
        </span>
      </div>

      {isDropdownOpen && (
        <div className="dropdown-content">
          {countryList.map((country) => (
            <div
              key={country}
              className={`dropdown-item ${selectedCountry === country ? 'active' : ''}`}
              onClick={() => handleCountrySelect(country)}
            >
              {country}
            </div>
          ))}
        </div>
      )}
    </div>
                  </div>
                  <div className="col text-end pr-2">
                    <Button className="bg-dark px-3 py-0 small-text">
                      Menu
                    </Button>
                  </div>
                </div>

                <div className="row mt-3">
                  {dish.map((item) => (
                    <div key={item.id} className="row">
                      <div className="col-8">
                        <div className="row">
                          <div className="col">
                            <span className="small-text me-1">{item.name}</span>
                            <span className="group me-1">
                              <LiaObjectGroupSolid />
                            </span>
                            <span className="rating small-text-rate">
                              {item.rating}
                              <AiFillStar />
                            </span>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col">
                            <div className="d-flex flex-row">
                              <div className="d-flex flex-column align-items-center">
                                <span className="text-muted">
                                  <CgSmartHomeRefrigerator />
                                </span>
                                <span className="refri text-muted me-1">
                                  {item.equipments[0]}
                                </span>
                              </div>
                              <div className="d-flex flex-column align-items-center">
                                <span className="text-muted">
                                  <CgSmartHomeRefrigerator />
                                </span>
                                <span className="refri text-muted">
                                  Refrigerator
                                </span>
                              </div>
                              <span className="vertical-line"></span>
                              <div className="px-2 py-1 d-flex flex-column">
                                <span className="ingredients">Ingredients</span>
                                <Link
                                  to="/another-component"
                                  style={{
                                    fontSize: "7px",
                                    color: "#FF8800",
                                    textDecoration: "none",
                                  }}
                                >
                                  View list
                                  <MdOutlineArrowForwardIos />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-4 text-end">
                        <div className="cart">
                          <img
                            src={item.image}
                            alt="Cart"
                            style={{ width: "100%", height: "100%" }}
                          />
                          <button className="add-to-cart-btn">Add</button>
                        </div>
                      </div>

                      <hr className="mt-4" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
