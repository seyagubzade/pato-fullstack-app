import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { DeleteById, GetAll, GetById } from "../../store/prods/api_actions";
import toast from "react-hot-toast";
import { addToWishlist } from "../../store/wishlist/wishlistSlice";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentData, loading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(GetById(id));
  }, [id]);

  return (
    <div>
      <Helmet>
        <title>Detail</title>
      </Helmet>
      <div className="container">
        {loading ? (
          <div class="spinner-border" role="status">
            <span class="sr-only"></span>
          </div>
        ) : currentData ? (
          <div className="row mt-5">
            <div className="col-12 col-md-6 col-lg-6">
              <img src={currentData.image} style={{width:"100%"}}/>
            </div>
            <div className="col-12 col-md-6 col-lg-6 p-5">
              <h3>{currentData.name}</h3>
              <p>{currentData.desc}</p>
              <p>Price: {currentData.price}</p>
              <div className="actions">
                <button
                  className="btn btn-outline-dark"
                  onClick={() => {
                    dispatch(DeleteById(currentData._id));
                    toast.success("Item deleted");
                  }}
                >
                  Delete
                </button>{" "}
                <button className="btn btn-dark" onClick={()=>{
                  dispatch(addToWishlist(currentData));
                  toast.success("added to wishlist")
                }}>Add to wishlist</button>
              </div>
            </div>
          </div>
        ) : (
          <div class="alert alert-danger" role="alert">
            Error occured
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
