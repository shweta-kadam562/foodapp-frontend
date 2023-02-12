import { Component } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import SignUp from "./Components/SignUp";
import { Outlet, Route, Routes } from "react-router-dom";
//import PageNotFound from "./components/PageNotFound";
import NavBar from "./Components/Navbar";
import CategoryPost from "./Components/CategoryPost";
import RestaurantPost from "./Components/RestaurantPost";
import FoodItemtPost from "./Components/FoodItemPost";
import FoodItemPost from "./Components/FoodItemPost";

export default class App extends Component{

  /* Which function does react call : render() */
  render(){  /* render must return something(JSX) */
    return(
        <div>
            
          
          <NavBar />
           <SignUp/>
           <CategoryPost />
           <RestaurantPost/>
           <FoodItemtPost />

          
           <Routes>
            {/* <Route path="/" element ={<Arry />} /> */}
            <Route path="/RestaurantPost" element ={RestaurantPost} />
            <Route path="/CategoryPost" element ={CategoryPost } /> 
            <Route path="/FoodItemPost" element ={FoodItemPost} />
            <Route path="/SignUp" element ={SignUp} />
            {/* <Route path="*" element ={<PageNotFound />} /> */}
            {/* <Route path="/CatgoryPost" element ={<CategoryPost />} /> */}
            </Routes> 
           
        </div>
    );
  }
}