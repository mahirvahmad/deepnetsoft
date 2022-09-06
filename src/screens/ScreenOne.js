import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ScreenOne = () => {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);

  //fetch categoreis to list the categories
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  //fetch products to display the products and price in the table
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  // Formula to find out total products in different catagories
  let totalCategory = data
    .map((item) => {
      return item;
    })
    .reduce(function (acc, obj) {
      return acc + obj.length;
    }, 0);

  return (
    <div className="screen-one-main">
      <h3>Categories ({totalCategory})</h3>

      <ul>
        {data.map((item, index) => {
          return <li key={item.id}>{`${item} (${item.length})`}</li>;
        })}
      </ul>

      <table className="table table-bordered table table-sm">
        <thead>
          <tr className="table-active">
            <th scope="col">
              <input type="checkbox" />
            </th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        {/* list the product title and price in a table */}
        {products.map((product) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">
                    <input type="checkbox" />
                  </th>
                  <td>{product.title}</td>
                  <td>${product.price}</td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </div>
  );
};

export default ScreenOne;
