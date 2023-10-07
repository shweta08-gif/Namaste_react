import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import MenuCard from "./MenuCard";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restroInfo = useRestaurantMenu(resId) 

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

  const MenuTypes =
    restroInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (item) => {
        return (
          item?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  return (
    <div>
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h2>{areaName}</h2>
      <h2>{costForTwoMessage}</h2>
      <div className="Restaurant-menu-menu-list">
        <ul>
          <li>
            {MenuTypes?.map((data) => {
              return (
                <>
                  <h3>{data.card?.card?.title}</h3>
                  {data?.card?.card.itemCards?.map((item) => {
                    return (
                      <MenuCard
                        name={item?.card?.info?.name}
                        price={item?.card?.info?.price / 100}
                        description={item?.card?.info?.description}
                      />
                    );
                  })}
                </>
              );
            })}
          </li>
          {NestedmenuTypes?.map((item) => {
            const title = item?.card?.card?.title;
            return (
              <li key={item?.card?.card?.type}>
                <h3>{title}</h3>
                {item?.card?.card?.categories?.map((data) => {
                  return (
                    <>
                      <h4>{data?.title}</h4>
                      {data.itemCards?.map((item) => {
                        return (
                          <MenuCard
                            name={item?.card?.info?.name}
                            price={item?.card?.info?.price / 100}
                            description={item?.card?.info?.description}
                          />
                        );
                      })}
                    </>
                  );
                })}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
