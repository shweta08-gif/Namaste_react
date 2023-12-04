import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom"; 
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredRestList, setFilteredRestList] = useState([]);
  const [searchText, setSearchText] = useState("");

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
    setFilteredRestList(cards);
    console.log(json);
  };

  const onlineStatus = useOnlineStatus();

  if(!onlineStatus) return <h1>Please check your internet connection</h1>

  if (resList?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //filter restaurant as per search text
              const filteredRestaurant = resList.filter((res) => {
                console.log(
                  searchText,
                  res.info.name,
                  res.info.name.includes(searchText)
                );
                const resName = res.info.name.toUpperCase();
                const text = searchText.toUpperCase();
                return resName.includes(text);
              });
              setFilteredRestList(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            setFilteredRestList(
              resList?.filter((filteredRes) => filteredRes.info.avgRating > 4.3)
            );
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="restro-container">
        {filteredRestList?.map((res) => {
          return <Link to={`restaurants/${res.info.id}`} key={res.info.id}><RestaurantCard resData={res.info}  /></Link>;
        })}
      </div>
    </div>
  );
};

export default Body;
