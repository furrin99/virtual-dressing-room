import React from "react";
import Product from "./Product";
import Model from "./Model";
import "./DressingRoom.css";
import productList from "../Data/Data.json";

export default function Store(props) {
  return (
    <div className="container-fluid">
      <div className="col-sm-12">
        <div className="heading card">
          <div className="card-body">
            <h4 className="card-title text-center">Virtual Dressing Room</h4>
          </div>
        </div>
        <hr />
      </div>
      <div className="row">
        <div className="col-md-8">
          <Product productList={productList} />
        </div>
        <div className="col-md-4">
          <Model />
        </div>
      </div>
    </div>
  );
}
