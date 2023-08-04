import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [restroInfo, setRestroInfo] = useState(null);
  const {resId} = useParams()

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
        MENU_URL + resId
    );
    const json = await data.json();
    console.log(json);

    const restroDetails = json?.data;
    setRestroInfo(restroDetails);
  };

  if (restroInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, areaName } =
    restroInfo?.cards?.[0]?.card?.card?.info;
  const NestedmenuTypes =
    restroInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (item) => {
        return (
          item?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
        );
      }
    );
  console.log("menuTypes", NestedmenuTypes);

  const MenuTypes =
    restroInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (item) => {
        return (
          item?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  console.log("menuTypes", MenuTypes);


  return (
    <div>
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h2>{areaName}</h2>
      <h2>{costForTwoMessage}</h2>
      <div className="Restaurant-menu-menu-list">
        <ul>
          <li>
            <h3> {MenuTypes[0].card?.card?.title}</h3>
            <ul>
                {MenuTypes?.[0]?.card?.card.itemCards?.map((item) => {
                  return <li>{item?.card?.info?.name}</li>  
                })}
            </ul>
          </li>
          {NestedmenuTypes?.map((item) => {
            const title = item?.card?.card.title;
            return <li key={item?.card?.card?.type}>{title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
