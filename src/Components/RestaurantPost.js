import { Component } from "react";
import axios from "axios";


export default class RestaurantPost extends Component{

    constructor(){
        super();

        this.state={
            restaurant:{
                restaurantName:'',
            },
            errors:{},
            msg: ''
        }
    }

    componentDidMount(){}

    render(){
        return(
            <div>
                <h1>Restaurant</h1>
                <span>{this.state.msg}</span> <br/>
                <label>Enter Restaurant Name: </label>
                <input type="text"
                        name="restaurantName"
                        value={this.state.restaurant.restaurantName}
                        onChange={this.changeHandler}/>
                        <span style={{color : 'red'}}>{this.state.errors['restaurantName']}</span>
                <br /><br />

                <button type="button" className="btn btn-primary" onClick={(this.onAddRestaurant)}>Add Restaurant</button>

            </div>
        );
        
    }
    changeHandler=(event)=>{
        this.setState({
            restaurant:{
                ...this.state.restaurant,
                [event.target.name] : event.target.value
            }
        });

    }

    onAddRestaurant = ()=>{
        //Validate User inputs
        if(this.handleValidation()){
            console.log(this.state.restaurant)
            //Call the api
            this.postRestaurant(this.state.restaurant);
        }
        else{
            //Display error message
            console.log('Validation not passed..')
        }   
        
    }

    handleValidation(){
        let restaurantName = this.state.restaurant.restaurantName;
        let tempErrors={}
        let formValid=true;

        if(!restaurantName){    //If name is not given
            formValid = false;
            tempErrors['restaurantName']='Name cannot be empty';
        }

        this.setState({
            errors:tempErrors
        });

        return formValid;
    }

    async postRestaurant(restaurant){
        try{
            const response = axios.post("http://localhost:8585/api/restaurant/add",restaurant);
            const data = (await response).data;
            console.log('API success');
            console.groupCollapsed(data);
        }
        catch(error){
            console.error(error.response.data.msg);
            this.setState({
                msg: error.response.data.msg
            })
        }

    }
}