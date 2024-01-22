import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../../store/wishlist/wishlistSlice";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const dispatch = useDispatch();
  const { wishlist, loading, error } = useSelector((state) => state.wishlist);

  return (
    <div className="container">
      <Helmet>
        <title>Wishlist</title>
      </Helmet>
      <div className="table-container mt-5">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <div class="spinner-border" role="status">
                <span class="sr-only"></span>
              </div>
            ) : wishlist ? (
              wishlist.map((item, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <img
                      src={item.image}
                      style={{ height: "60px", width: "60px" }}
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <button
                      className="btn btn-dark"
                      onClick={() => {
                        dispatch(removeFromWishlist(item._id));
                        // toast.success("Item deleted");
                      }}
                    >
                      Remove Item
                    </button>{" "}
                  </td>
                </tr>
              ))
            ) : (
              <div class="alert alert-light" role="alert">
                Not found
              </div>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wishlist;
