import React from "react";
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

  const cuisines = ["Indian", "Indian", "Indian","Indian", "Indian", "Indian","Indian", "Indian", "Indian","Indian","Indian", "Indian", "Indian","Indian","Indian", "Indian", "Indian","Indian","Indian", "Indian", "Indian"];

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
        {cuisines.map((cuisine, index) => (
          <span key={index} className="ani py-1 px-3 text-muted me-2">
            {cuisine}
          </span>
        ))}
      </div>
    </div>


              {/* <h6 className="pt-3 pb-2">Popular Dishes</h6> */}
              <div className="pt-3 pb-2">
                <span style={{ fontSize: "13px" }}>Popular Dishes</span>
              </div>
              <div className="biryani1 me-3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNO97FbHTCFtvxLuqzsHpJaUQyTFJjKNWyDw&usqp=CAU"
                  alt="biryani"
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                />
                <span className="circle-text">Biryani</span>
              </div>
              <div className="biryani me-3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNO97FbHTCFtvxLuqzsHpJaUQyTFJjKNWyDw&usqp=CAU"
                  alt="biryani"
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                />
                <span className="circle-text">Biryani</span>
              </div>
              <div className="biryani me-3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNO97FbHTCFtvxLuqzsHpJaUQyTFJjKNWyDw&usqp=CAU"
                  alt="biryani"
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                />
                <span className="circle-text">Biryani</span>
              </div>
              <div className="biryani">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNO97FbHTCFtvxLuqzsHpJaUQyTFJjKNWyDw&usqp=CAU"
                  alt="biryani"
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                />
                <span className="circle-text">Biryani</span>
              </div>

              <hr />

              <div>
                <div className="row">
                  <div className="col">
                    <span style={{ fontSize: "14px" }}>
                      Recommended <TiArrowSortedDown />
                    </span>
                  </div>
                  <div className="col text-end">
                    <Button className="bg-dark px-3 py-0 small-text">
                      Menu
                    </Button>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <span className=" small-text me-2">Masala Muglai</span>
                    <span className="group me-2">
                      <LiaObjectGroupSolid />
                    </span>
                    <span className="rating small-text-rate ">
                      4.2
                      <AiFillStar />
                    </span>

                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <span className="text-muted">
                          <CgSmartHomeRefrigerator />
                        </span>
                        <span className="refri text-muted  me-1">
                          Refrigerator
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <span className="text-muted">
                          <CgSmartHomeRefrigerator />
                        </span>
                        <span className="refri text-muted ">Refrigerator</span>
                      </div>
                      <span className="vertical-line"></span>

                      <div
                        style={{ display: "flex", flexDirection: "column" }}
                        className="px-2 py-1"
                      >
                        <span className="ingredients">Ingredients</span>
                        <a
                          href="#"
                          style={{
                            fontSize: "7px",
                            color: "#FF8800",
                            textDecoration: "none",
                          }}
                        >
                          View list <MdOutlineArrowForwardIos />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col text-start mt-2">
                    <div className="cart">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8jYqEe4D78PaGHhnastN3L-GYKrIEc_QNTg&usqp=CAU"
                        alt="Cart"
                        style={{ width: "100%", height: "100%" }}
                      />
                      <button className="add-to-cart-btn">Add </button>
                    </div>
                  </div>
                </div>
              </div>

              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
