import { Component } from "react";
import axios from "axios";

export default class CategoryPost extends Component{

    constructor(){
        super();

        this.state={
            category:{
                categoryName:'',
            },
            errors:{},
            msg: ''
        }
    }

    componentDidMount(){}

    render(){
        return(
            <div>
                <h1>Category</h1>
                <span>{this.state.msg}</span> <br/>
                <label>Enter Category Name: </label>
                <input type="text"
                        name="categoryName"
                        value={this.state.category.categoryName}
                        onChange={this.changeHandler}/>
                        <span style={{color : 'red'}}>{this.state.errors['categoryName']}</span>
                <br /><br />

                <button type="button" className="btn btn-primary" onClick={(this.onAddCategory)}>Add Category</button>

            </div>
        );
        
    }
    changeHandler=(event)=>{
        this.setState({
            category:{
                ...this.state.category,
                [event.target.name] : event.target.value
            }
        });

    }

    onAddCategory = ()=>{
        //Validate User inputs
        if(this.handleValidation()){
            console.log(this.state.category)
            //Call the api
            this.postCategory(this.state.category);
        }
        else{
            //Display error message
            console.log('Validation not passed..')
        }   
        
    }

    handleValidation(){
        let categoryName = this.state.category.categoryName;
        let tempErrors={}
        let formValid=true;

        if(!categoryName){    //If name is not given
            formValid = false;
            tempErrors['categoryName']='Name cannot be empty';
        }

        this.setState({
            errors:tempErrors
        });

        return formValid;
    }

    async postCategory(category){
        try{
            const response = axios.post("http://localhost:8585/api/category/add",category);
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