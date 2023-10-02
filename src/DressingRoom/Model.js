import React from "react";
import { useSelector } from "react-redux";

export default function Model(props) {
  const model = useSelector((state) => state.DressingRoomReducer.model);

  return (
    <div className="contain">
      <div className="body" />
      <div className="model" />
      {Object.entries(model).map(([key, value]) => (
        <div
          key={key}
          className={value.classname}
          style={{
            backgroundImage: `url('${value.img}')`,
          }}
        />
      ))}
    </div>
  );
}
