import React, { Component } from 'react';
import axios from 'axios';
import "./style.css";
import Sidebar from "../Shared/SideBar";

class Shipments extends Component {

    constructor(props){
        super(props)
        this.state = {
            item: "",
            description: "",
            destination: "",
            source: "",
            arrival: "",
            status: "",
            current_location: "",
            tracking_number: "",
            id: "",
            success: ""
        }
    }

  style = {
    marginLeft: "25%"
  }

async updateShipment(e){
    e.preventDefault();

    const token = localStorage.getItem("token");

    await axios.put(`http://127.0.0.1:5000/shipment/${this.props.computedMatch.params.id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`

        },
        item: this.state.item,
        description: this.state.description,
        destination: this.state.destination,
        source: this.state.source,
        arrival: this.state.arrival,
        current_location: this.state.current_location,
        status: this.state.status,
        tracking_number: this.state.tracking_number

      }).then((response)=>{
        this.setState({success:"Shipment was updated successfully!"});

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
    this.setState({tracking_number: e.target.value});
  };

  handleCurrentLocation = e => {
    this.setState({ current_location: e.target.value});
  };
  handleStatus = e => {
    this.setState({status: e.target.value});
  };

  retrieve = async ()=>{
    const id = this.props.computedMatch.params.id
    await axios.get(`http://127.0.0.1:5000/shipment/${id}`).then((response)=>{
        this.setState({...response.data});
    })

  }

  componentDidMount(){
    this.retrieve();
  }

  render(){
    return (
      <React.Fragment>
          <Sidebar/>
        <div style={ this.style }>
          <div className="w3-container w3-teal">
            <h1>Shipments Management</h1>
          </div>
          <div className="w3-container">
          <h2>Update Shipment</h2>
  
        <div className="w3-card-1">
            <form>
                <p>
                <label>Item</label></p>
                <input className="w3-input" value={this.state.item} onChange={this.handleItem.bind(this)}  type="text"/>
                <p>   
                <label>Description</label>  
                <input className="w3-input" value={this.state.description} onChange={this.handleDescription.bind(this)} type="text" />
                </p>
                <p>     
                <label>Source</label>
                <input className="w3-input" value={this.state.source} onChange={this.handleSource.bind(this)} type="text" />
                </p>
                <p>   
                <label>Destination</label>  
                <input className="w3-input" value={this.state.destination} onChange={this.handleDestination.bind(this)} type="text" />
                </p>
                <p>  
                <label>Arrival</label>   
                <input className="w3-input" value={this.state.arrival} onChange={this.handleArrival.bind(this)} type="text" />
                </p>
                <p>  
                <label>Current Location</label>   
                <input className="w3-input" value={this.state.current_location} onChange={this.handleCurrentLocation.bind(this)} type="text" />
                </p>
                <p>  
                <label>Tracking Number</label>   
                <input className="w3-input" value={this.state.tracking_number } onChange = {this.handleTrackingNumber.bind(this)} type="text" />
                </p>
                <p>  
                <label>Status</label>   
                <input className="w3-input" value={this.state.status} onChange={this.handleStatus.bind(this)} type="text" />
                </p>
                <button type="submit" onClick={this.updateShipment.bind(this)} className="w3-button w3-teal">Submit</button>
            </form>
            </div>
        </div>
    </div>
      </React.Fragment>
    )
  }

}


export default Shipments;