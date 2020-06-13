import React, { Component } from 'react'
// import { StreamApp } from 'react-activity-feed';
import axios from 'axios';
import "./style.css";
import Sidebar from "../Shared/SideBar";
// import stream from 'getstream';


class AddShipments extends Component {

    constructor(props){
        super(props)
        this.state = {
            item: "",
            description: "",
            destination: "",
            source: "",
            arrival: "",
            status: "",
            currentLocation: "",
            trackingNumber: "",
            success: ""
        }
    }


  style = {
    marginLeft: "25%"
  }

 async addShipment(e){
    e.preventDefault()
    const token = localStorage.getItem("token");

    await axios.post("http://127.0.0.1:5000/shipment/", {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`

        },
        item: this.state.item,
        description: this.state.description,
        destination: this.state.destination,
        source: this.state.source,
        arrival: this.state.arrival,
        current_location: this.state.currentLocation,
        status: this.state.status,
        tracking_number: this.state.trackingNumber

      }).then((response)=>{
          this.setState({success:"Shipment was added successfully!"})

     }).catch((err)=>{
        console.error("error", err);
      })
  }

  handleItem = e => {
    this.setState({item: e.target.value});
  };

  handleDescription = e => {
    this.setState({description: e.target.value});
  };

  handleSource = e => {
    this.setState({source: e.target.value});
  };
  
  handleDestination = e => {
    this.setState({destination: e.target.value});
  };

  handleArrival = e => {
    this.setState({arrival: e.target.value});
  };

  handleTrackingNumber = e => {
    this.setState({trackingNumber: e.target.value});
  };

  handleCurrentLocation = e => {
    this.setState({currentLocation: e.target.value});
  };
  handleStatus = e => {
    this.setState({status: e.target.value});
  };

  render(){
    return (
      <React.Fragment>
          <Sidebar/>
        <div style={ this.style }>
          <div className="w3-container w3-teal">
            <h1>Shipments Management</h1>
          </div>
          <div className="w3-container">
          <h2>Add Shipment</h2>
  
        <div className="w3-card-1">
            <p>{this.state.success}</p>
            <form>
                <p>
                <label>Item</label></p>
                <input className="w3-input" onChange={this.handleItem.bind(this)}  type="text"/>
                <p>   
                <label>Description</label>  
                <input className="w3-input" onChange={this.handleDescription.bind(this)} type="text" />
                </p>
                <p>     
                <label>Source</label>
                <input className="w3-input" onChange={this.handleSource.bind(this)} type="text" />
                </p>
                <p>   
                <label>Destination</label>  
                <input className="w3-input" onChange={this.handleDestination.bind(this)} type="text" />
                </p>
                <p>  
                <label>Arrival</label>   
                <input className="w3-input" onChange={this.handleArrival.bind(this)} type="text" />
                </p>
                <p>  
                <label>Current Location</label>   
                <input className="w3-input" onChange={this.handleCurrentLocation.bind(this)} type="text" />
                </p>
                <p>  
                <label>Tracking Number</label>   
                <input className="w3-input" onChange={this.handleTrackingNumber.bind(this)} type="text" />
                </p>
                <p>  
                <label>Status</label>   
                <input className="w3-input" onChange={this.handleStatus.bind(this)} type="text" />
                </p>
                <button type="submit" onClick={this.addShipment.bind(this)} className="w3-button w3-teal">Submit</button>
            </form>
        </div>
    </div>
</div>
      </React.Fragment>
    )
  }

}



export default AddShipments;