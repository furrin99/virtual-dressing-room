import React from "react";
import ProductItem from "./ProductItem";

export default function Product(props) {
  const productList = props.productList;

  const renderLi = () => {
    return productList.navPills.map((product, index) => {
      return (
        <li key={index} className="nav-item" role="presentation">
          <button
            className={product.type === "tops" ? "nav-link active" : "nav-link"}
            id={`pills-${product.type}-tab`}
            data-bs-toggle="pill"
            data-bs-target={`#pills-${product.type}`}
            role="tab"
            type="button"
          >
            {product.showName}
          </button>
        </li>
      );
    });
  };
  const renderTabPane = () => {
    return productList.navPills.map((product, index) => {
      const type = product.type;
      const typeItems = productList.tabPanes.filter(
        (item) => item.type === type
      );
      return (
        <div
          key={index}
          className={`tab-pane fade ${
            product.type === "tops" ? "show active" : ""
          }`}
          id={`pills-${product.type}`}
          role="tabpanel"
          tabIndex={0}
        >
          <div className="row container">
            <ProductItem typeItems={typeItems} />
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      <div>
        <ul className="nav nav-pills mb-4" id="pills-tab" role="tablist">
          {renderLi()}
        </ul>
        <div className="tab-content" id="pills-tabContent">
          {renderTabPane()}
        </div>
      </div>
    </div>
  );
}
