import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DeleteById, GetAll } from "../../../store/prods/api_actions";
import { Link } from "react-router-dom";
import "./styles.scss"
import toast from "react-hot-toast";
import { addToWishlist } from "../../../store/wishlist/wishlistSlice";


const FoodsMenu = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(GetAll());
  }, []);
  useEffect(() => {
    setFilteredData(() => {
      return data?.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
  }, [data, searchValue]);

  return (
    <div className="food-menu">
      <div class="container">
        <div className="section-header text-center mb-5">
          <h2>Food Menu</h2>
        </div>
        <div className="row mb-5">
          <div className="filter-menu">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value.trim())}
              />
            </div>
          </div>
        </div>
        <div className="row">
          {loading ? (
            <div class="spinner-border" role="status">
              <span class="sr-only"></span>
            </div>
          ) : data ? (
            filteredData.map((item) => (
              <div className="col-12 col-md-6 col-lg-4" key={item._id}>
                <div class="card">
                  <img src={item.image} class="card-img-top" alt="card-img" />
                  <div class="card-body">
                    <h5 class="card-title">
                      <Link to={`/detail/${item._id}`}>
                        {item.name}
                      </Link>
                    </h5>
                    <p class="card-text">{item.desc}</p>
                    <div className="actions">
                    <button className="btn btn-outline-dark" onClick={()=>{
                        dispatch(DeleteById(item._id))
                        toast.success('Item deleted')
                    }}>Delete</button> {" "}
                    <button className="btn btn-dark" onClick={()=>dispatch(addToWishlist(item))}>Add to wishlist</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : error ? (
            <div class="alert alert-danger" role="alert">
              Error occured
            </div>
          ) : (
            <div class="alert alert-light" role="alert">
              Unexpected Error
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodsMenu;
