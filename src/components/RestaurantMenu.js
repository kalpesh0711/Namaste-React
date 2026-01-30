import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import mockMenu from "../utils/mockMenu";


const RestaurantMenu = () => {

    const [resInfo,setResInfo]=useState(null);

    useEffect (()=> {   
        fetchMenu();
    },[]);

   const fetchMenu = async () => {
  try {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5243431&lng=73.851463&restaurantId=21001&catalog_qa=undefined&submitAction=ENTER"
    );

    if (!data.ok) {
      throw new Error("API response not OK");
    }

    const text = await data.text(); // 👈 IMPORTANT
    if (!text) {
      throw new Error("Empty response from API");
    }

    const json = JSON.parse(text); // safer parsing
    console.log(json);

    setResInfo(json.data);

  } catch (error) {
  console.error("Menu fetch failed:", error);

  // 👇 FALLBACK (THIS MAKES CODE WORK)
  setResInfo(mockMenu.data);
}

};

    
    if (resInfo === null) return <Shimmer/> ;

    return(
        <div className="menu">
           <h1>
            {resInfo.cards[0].card.card.info.name}
           </h1>

            <h2>Menu</h2>
           <ul>
            {resInfo.cards[1].card.card.itemCards.map((item) => (
            <li key={item.card.info.id}>
            {item.card.info.name} - ₹{item.card.info.price / 100}
            </li>
            ))}
            </ul>


        </div>
    );
};

export default RestaurantMenu;