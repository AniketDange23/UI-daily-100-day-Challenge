import React from "react";
import Logo from "../images/logo.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <span className="logo">
                <img src={Logo} alt=" Logo" className="logo" />
            </span>
            <div className="nav-title">
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/OurServices"}>OurServices</Link>
                    </li>
                    <li>
                        <Link to={"/consultation"}>consultation</Link>
                    </li>
                    <li>
                        <Link to={"/aboutUs"}>aboutUs</Link>
                    </li>
                    <li>
                        <Link to={"/contactUS"}>contactUS</Link>
                    </li>

                    <div className="btns">
                        <Link to={"/SignIn"}>
                            {" "}
                            <button className="signIn">Sign In</button>
                        </Link>
                        <Link to={"/signUp"}>
                            {" "}
                            <button className="signUp">Sign Up</button>
                        </Link>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Header;
