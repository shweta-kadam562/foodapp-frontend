import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component{

    constructor(){
        super();

        this.state={
            user:{
                email:'',
                password:''
            },
            errors:{},
            msg: ''
        }
    }

    componentDidMount(){}

    render(){
        return(
            <div>
                <h1>Login</h1>
                <span>{this.state.msg}</span> <br/>

                <label>Enter Email: </label>
                <input type="text"
                        name="email"
                        value={this.state.user.email}
                        onChange={this.changeHandler}/>
                        <span style={{color : 'red'}}>{this.state.errors['email']}</span>
                <br /><br />  

                <label>Enter Password: </label>
                <input type="password"
                        name="password"
                        value={this.state.user.password}
                        onChange={(this.changeHandler)}/>
                        <span style={{color : 'red'}}>{this.state.errors['password']}</span>
                <br /><br />
                <button type="button" className="btn btn-primary" onClick={(this.onLogin)}>Login</button>

                {/* <button onClick={(this.onLogin)}>Login</button>    */}

            </div>
        );
        
    }
    changeHandler=(event)=>{
        this.setState({
            user:{
                ...this.state.user,
                [event.target.name] : event.target.value
            }
        });

    }

    onLogin = ()=>{
        //VAlidate User inputs
        if(this.handleValidation()){
            console.log(this.state.user)
            //Call the api
            this.postLogin(this.state.user);
        }
        else{
            //Display error message
            console.log('Validation not passed..')
        }   
        
    }

    handleValidation(){
        let email = this.state.user.email;
        let password = this.state.user.password;
        let tempErrors={}
        let formValid=true;

        if(!email){    //If email is not given
            formValid = false;
            tempErrors['email']='Email cannot be empty';
        }

        if(!password){    //If password is not given
            formValid = false;
            tempErrors['password']='Password cannot be empty';
        }

        this.setState({
            errors:tempErrors
        });

        return formValid;
    }

    async postLogin(user){
        try{
            const response = axios.post("http://localhost:8585/api/login",user);
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