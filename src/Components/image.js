import { Component } from "react";

export default class Image extends Component {
    constructor() {
        super();

        this.state = {};
    }
    render(){
        return (
            <div style={{ 
                backgroundImage: 'url(https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg?w=2000)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100vw',
                height: '100vh',
              }}>
            </div>
        );
    }

}