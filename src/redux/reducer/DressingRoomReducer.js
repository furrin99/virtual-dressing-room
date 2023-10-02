import { TRY_ON } from "../type/type";

const initialState = {
  model: {
    hairstyle: {
      img: "",
      classname: "hairstyle",
    },
    necklaces: {
      img: "",
      classname: "necklaces",
    },
    tops: {
      img: "./images/allbody/bikini_branew.png",
      classname: "tops",
    },
    bottoms: {
      img: "./images/allbody/bikini_pantsnew.png",
      classname: "bottoms",
    },
    bags: {
      img: "",
      classname: "bags",
    },
    shoes: {
      img: "./images/shoes/shoes1.png",
      classname: "shoes",
    },
    background: {
      img: "./images/background/background1.jpg",
      classname: "background",
    },
  },
};

const DressingRoomReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRY_ON: {
      return {
        ...state,
        model: {
          ...state.model,
          [action.item.type]: {
            img: action.item.imgSrc_png,
            classname: `${action.item.type} selected`,
          },
        },
      };
    }
    default:
      return { ...state };
  }
};

export default DressingRoomReducer;
