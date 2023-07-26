import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resList, setResList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5611331&lng=73.8025062&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const cards =
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setResList(cards);

    console.log(json);
    console.log(cards);
  };

  if (resList?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search">
        <button
          className="filter-btn"
          onClick={() => {
            setResList(
              resList?.filter((filteredRes) => filteredRes.info.avgRating > 4.3)
            );
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="restro-container">
        {resList?.map((res) => {
          return <RestaurantCard resData={res.info} key={res.info.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
