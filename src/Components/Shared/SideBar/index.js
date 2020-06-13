import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


const SideBar = ()=>{

    const style = {
        width: "25%"
    }
    
    return (
        <React.Fragment>
        <div className="w3-sidebar w3-light-grey w3-bar-block" style={style}>
            <h3 className="w3-bar-item">Menu</h3>
            <Link to='/add-shipment' className="w3-bar-item w3-button">Add Shipment</Link>
        </div>
        </React.Fragment>
    )
}


export default SideBar;