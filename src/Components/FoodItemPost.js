import { Component } from "react";
import axios from "axios";

export default class FoodItemPost extends Component{

    constructor(){
        super();

        this.state={
            fooditem:{
                foodItemName:''
            },
            errors:{},
            msg: ''
        }
    }

    componentDidMount(){}

    render(){
        return(
            <div>
                <h1>Fooditem Post</h1>
                <span>{this.state.msg}</span> <br/>
                <label>Enter Food item Name: </label>
                <input type="text"
                        name="foodItemName"
                        value={this.state.fooditem.foodItemName}
                        onChange={this.changeHandler}/>
                        <span style={{color : 'red'}}>{this.state.errors['foodItemName']}</span>
                <br /><br />

                <button type="button" className="btn btn-primary" onClick={(this.onAddFoodItem)}>Add Fooditem</button>

                {/* <button onClick={(this.onSignUp)}>Sign Up</button>    */}

            </div>
        );
        
    }
    changeHandler=(event)=>{
        this.setState({
            fooditem:{
                ...this.state.fooditem,
                [event.target.name] : event.target.value
            }
        });

    }

    onAddFoodItem = ()=>{
        //VAlidate User inputs
        if(this.handleValidation()){
            console.log(this.state.fooditem)
            //Call the api
            this.postFoodItem(this.state.fooditem);
        }
        else{
            //Display error message
            console.log('Validation not passed..')
        }   
        
    }

    handleValidation(){
        let foodItemName = this.state.fooditem.foodItemName;
        let tempErrors={}
        let formValid=true;

        if(!foodItemName){    //If name is not given
            formValid = false;
            tempErrors['foodItemName']='Name cannot be empty';
        }

        this.setState({
            errors:tempErrors
        });

        return formValid;
    }

    async postFoodItem(fooditem){
        try{
            const response = axios.post("http://localhost:8585/api/fooditem/add",fooditem);
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