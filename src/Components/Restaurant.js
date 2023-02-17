import { Component } from "react";
import { connect } from "react-redux";
import { listRestaurant } from "./store/action/restaurant";
import Category from "./restaurant-components/category";
export class Restaurant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCategroyAdd : false
        };
    }
    componentDidMount(){
        this.props.listRestaurant();
    }
    render() {
        return (
            <div className="container-fliud">
                <div className="row">
                    <div className="col-sm-3">
                        <ul className="list-group">
                            {/* <li className="list-group-item">Show all Restaurants</li>
                            <li className="list-group-item">Add Category</li> */}
                             <li className=" list-group-item"> <button   className="list-group-item restaurant-sidebar" onClick={()=>{
                this.setState({showCategoryAdd : false})
              }} > Show all Restaurants </button> </li>
              <li className="list-group-item">
                <button  className=" list-group-item restaurant-sidebar" onClick={()=>(this.setState({showCategoryAdd: true}))}>
                   Add Category</button></li>
                            <li className="list-group-item">Add Restaurant</li>
                        </ul>
                    </div>
                    <div className="col-lg-9">
                        {/* <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Category</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.restaurantList.list.map((r, index) => (

                                        <tr key={r.id}>
                                            <th scope="row" key={r.id}> {index + 1}</th>
                                            <td>{r.id}</td>
                                            <td>{r.restaurantName}</td>
                                            <td>{r.category.categoryName}</td>

                                        </tr>

                                    ))}
                            </tbody>
                        </table> */}
                        {this.state.showCategroyAdd?<Category/>:this.showRestaurantList()}
                    </div>
                </div>
            </div>
        );
    }


    showRestaurantList(){
        return(
          <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ID</th>
              <th scope="col">Restaurant Name</th>
              <th scope="col">Category Name</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.restaurantList.list.map((r, index) => (
    
                <tr key={r.id}>
                  <th scope="row" key={r.id}> {index + 1}</th>
                  <td>{r.id}</td>
                  <td>{r.restaurantName}</td>
                  <td>{r.categoryName}</td>
                </tr>
    
            ))}   
          </tbody>
        </table>
        )
      }; 
};
function mapStateToProps(state) {
    return {
      restaurantList: state.restaurant
    }; 
  }
  
  export default connect(mapStateToProps, {listRestaurant})(Restaurant);