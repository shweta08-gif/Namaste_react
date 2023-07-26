import React from 'react';
import { IMG_URL } from '../utils/constants';

const RestaurantCard = (props) => {
    const { resData } = props
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          src={`${IMG_URL + resData.cloudinaryImageId}`}
        />
        <h3>{resData.name}</h3>
        <h4>{resData.avgRating}</h4>
        <h4>{resData.cuisines.join(", ")}</h4>
        <h4>{resData.locality}</h4>
      </div>
    );
  };

  export default RestaurantCard