import { Component } from "react";
import { Link, Outlet } from "react-router-dom";

export default class Navbar extends Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        return (
            <div>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="/">
                                Food Order App
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">

                                    <li className="nav-item">
                                        <Link className="nav-link" to="/RestaurantPost">
                                            Restaurant
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/CategoryPost">
                                        Category
                                    </Link>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/FoodItemPost">
                                            Food Item
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/sign-up">
                                            SignUp
                                        </Link>
                                    </li>
                                    {/* <li className="nav-item">
                                        <Link className="nav-link" to="/CategoryPost">
                                            CategoryPost
                                        </Link>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="containerFluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <Outlet />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
