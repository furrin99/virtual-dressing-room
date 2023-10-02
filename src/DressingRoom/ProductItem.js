import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { tryOnAction } from "../redux/action/action";

export default function ProductItem(props) {
  const dispatch = useDispatch();
  const typeItems = props.typeItems;

  const renderProductItems = () => {
    return typeItems.map((item, index) => {
      return (
        <Fragment key={index}>
          <div className="col-md-3" key={item.id}>
            <div className="product card text-center mb-4 ">
              <img src={item.imgSrc_jpg} alt={item.name} />
              <div className="card-body">
                <h4 className="card-title">{item.name}</h4>
                <p className="card-text">
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      dispatch(tryOnAction(item));
                    }}
                  >
                    Try it on
                  </button>
                </p>
              </div>
            </div>
          </div>
        </Fragment>
      );
    });
  };

  return <Fragment>{renderProductItems()}</Fragment>;
}
