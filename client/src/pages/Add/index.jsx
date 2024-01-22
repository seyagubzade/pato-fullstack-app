import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { AddNew, DeleteById, GetAll } from "../../store/prods/api_actions";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { addToWishlist } from "../../store/wishlist/wishlistSlice";
import { Link } from "react-router-dom";

const AddSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  desc: Yup.string().required("Required"),
  image: Yup.string().required("Required"),
  price: Yup.number().required("Required").positive(),
});

const Add = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(GetAll());
  }, []);

  return (
    <div>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <div className="container">
        <h1>Add new</h1>
        <Formik
          initialValues={{
            name: "",
            desc: "",
            image: "",
            price: 0,
          }}
          validationSchema={AddSchema}
          onSubmit={async (values) => {
            dispatch(AddNew(values));
            toast.success("Added!");
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div class="form-group mb-4">
                <label htmlFor="name">Name</label>
                <Field
                  id="name"
                  name="name"
                  placeholder="Name"
                  className="form-control"
                />
                {errors.name && touched.name ? (
                  <div style={{ color: "red" }}>{errors.name}</div>
                ) : null}
              </div>
              <div class="form-group mb-4">
                <label htmlFor="desc">Description</label>
                <Field
                  id="desc"
                  name="desc"
                  placeholder="Description"
                  className="form-control"
                />
                {errors.desc && touched.desc ? (
                  <div style={{ color: "red" }}>{errors.desc}</div>
                ) : null}
              </div>
              <div class="form-group mb-4">
                <label htmlFor="price">Price</label>
                <Field
                  type="number"
                  id="price"
                  name="price"
                  placeholder="Price"
                  className="form-control"
                />
                {errors.price && touched.price ? (
                  <div style={{ color: "red" }}>{errors.price}</div>
                ) : null}
              </div>
              <div class="form-group mb-4">
                <label htmlFor="image">Image URL</label>
                <Field
                  id="image"
                  name="image"
                  placeholder="Image URL"
                  className="form-control"
                />
                <small id="emailHelp" class="form-text text-muted">
                  Paste URL here, example:
                  https://preview.colorlib.com/theme/pato/images/intro-02.jpg.webp
                </small>
                {errors.image && touched.image ? (
                  <div style={{ color: "red" }}>{errors.image}</div>
                ) : null}
              </div>
              <button type="submit" className="btn btn-dark">
                Add new product
              </button>
            </Form>
          )}
        </Formik>

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
              ) : data ? (
                data.map((item, index) => (
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
                          className="btn btn-outline-dark"
                          onClick={() => {
                            dispatch(DeleteById(item._id));
                            toast.success("Item deleted");
                          }}
                        >
                          Delete
                        </button>{" "}
                        <Link
                          className="btn btn-dark"
                          to={`/detail/${item._id}`}
                        >
                          Detail
                        </Link>
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
    </div>
  );
};

export default Add;
