import { useState, useEffect } from "react";
import { MENU_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
const [restroInfo, setRestroInfo] = useState(null);

useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    const restroDetails = json?.data;
    setRestroInfo(restroDetails);
  };
    return restroInfo;
}

export default useRestaurantMenu;