import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body=() => {
    const [listOfRestaurants,setListOfRestaurants]=useState([]);

    //To track the value what user type :need to bin with local var of react
    const [searchText,setSearchText]= useState(""); 

    const [filteredRestaurant,setFilteredRestaurant]=useState([]);

    useEffect(() => {
        fetchData();
    }, []);

  const fetchData = async () => {
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5243431&lng=73.851463&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );   

  const json = await data.json();
  console.log(json);

  const restaurantCard = json?.data?.cards?.find(
    (card) =>
      card?.card?.card?.gridElements?.infoWithStyle?.restaurants
  );

  setListOfRestaurants(
    restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
  );

  setFilteredRestaurant(
    restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
  );
};



   if (listOfRestaurants.length===0) {
    return <Shimmer/>;
   } ;


    return(                                                        
    <div className="body">

        <div className="filter"> 

          <div className="search">
            {/* when we type searchText value onchange the statevar(initial empty) should also change therefore  */}
          <input type="text" className="search-box" value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);

            } }
          />
           <button
            onClick={() => {
            //filter the restaurant card and update the UI
            //searchText
             console.log(searchText);
            const filteredRestaurant=listOfRestaurants.filter( (res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredRestaurant); 
           }}
          >
            Search
          </button>

          </div>
       

        <button 
            className="filter-btn"
            onClick={() => {
             const filteredList=listOfRestaurants.filter(
                (x)=>x.info.avgRating > 4.5
           );
           setListOfRestaurants(filteredList);
          }}
          >
         Top Rated Restaurants
        </button> 

        </div>  

        <div className="res-container">
             {filteredRestaurant.map((restaurant) => (
                <RestaurantCard key={restaurant.info.id} resData={restaurant}/> 
                ))}
        </div>          

    </div>
    );      
};    

export default Body;