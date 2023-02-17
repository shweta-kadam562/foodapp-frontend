import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";
import { addCategory } from "../store/action/category";

export class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
        category:{
            categoryName: ''
        },
        errors: {},
        msg: ''
    };
  }

  render() {
    return (
      <div>
        <div class="card">
          <h5 class="card-header">Add Category</h5>
          <div class="card-body">
            <h5 class="card-title">Enter Category Info: </h5>
            <p class="card-text">
            <span>{this.state.msg}</span> <br />
               <label>Category Name: </label>
               <input type="text" 
                        name="name"
                        value={this.state.category.categoryName}
                        onChange={this.changeHandler} />
                        <span style={{ color : 'red'}}>{this.state.errors['name']}</span>
                <br /><br />
                <button onClick={this.onAdd}>Add category</button>
            </p>

          </div>
        </div>
      </div>
    );
  }

  changeHandler= (event) =>{
    this.setState({
        category: {
            ...this.state.category, 
            [event.target.name] : event.target.value
        }
    });
}

onAdd = ()=>{
    /* Validate User inputs */
    if(this.handleValidation()){
        console.log(this.state.category);
        /* Call the API */
       this.postCategory(this.state.category);
    }
    else{
        /* Display error messages */
        console.log('validation not passed..');     
    }
}

handleValidation(){
    let categoryName = this.state.category.categoryName;

    let tempErrors={}
    let formValid = true; 
    if(!categoryName){ //If name is not given
        formValid = false;
        tempErrors['categoryName']='Category Name cannot be empty';
    }

    this.setState({
        errors: tempErrors
    });

    return formValid; 
}

async postCategory(category){
    try {
        const response = axios.post("http://localhost:8585/api/category/add", category);
        const data = (await response).data;
        console.log('API success');
        console.log(data);
        this.setState({
            msg: data.msg
        })

        //react out to action and update the store
        this.props.addCategory(data);
      } catch (error) {
         console.log(error)
        //console.error(error.response.data.msg);
        this.setState({
            msg: 'Operation Failed'
        })
      }
}
}
function mapStateToProps(state){
    return {
        categoryList : state.category 
    }    
}

export default connect(mapStateToProps, {addCategory})(Category);