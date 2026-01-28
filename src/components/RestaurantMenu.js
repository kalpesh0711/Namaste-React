import { useEffect } from "react";

const RestaurantMenu = () => {

    useEffect (()=> {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch (
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5243431&lng=73.851463&restaurantId=21001&catalog_qa=undefined&submitAction=ENTER"
        );
        // convert api into json
        const json = await data.json();
        
        console.log(json);

    };
    


    return(
        <div className="menu">
            <h1>Name of Restaurant</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burger</li>
                <li>Pizza</li>
            </ul>

        </div>
    );
};

export default RestaurantMenu;