import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import "./style.css";
import Sidebar from "../Shared/SideBar";
// import stream from 'getstream';


class Shipments extends Component {

  state = {
    shipments: [],
    loading: false
  }

  style = {
    marginLeft: "25%"
  }

  async getAllShipments(){
    await axios.get("http://127.0.0.1:5000/shipment", {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response)=>{
        this.setState({shipments: response.data});
        this.setState({loading: true});
      })
  }


  componentDidMount(){
    this.getAllShipments();

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
          <h2>Shipments</h2>
          <table>
            <thead>
            <tr>
                <th>Item</th>
                <th>Source</th>
                <th>Destination</th>
                <th>Arrival</th>
                <th>Modify</th>

              </tr>
            </thead>
            <tbody>

             {this.state.loading && this.state.shipments.map((doc)=>{ 
               
                return (
                <tr> 
                  <td id={doc.id}> {doc.item} </td>
                  <td id={doc.id}> {doc.source} </td>  
                  <td id={doc.id}> {doc.destination} </td> 
                  <td id={doc.id}> {doc.arrival} </td> 
                  <td id={doc.id}> <Link to={`update-shipment/${doc.id}`} > Update</Link></td> 
                  </tr>
                )
              }
             )}
        

            </tbody>

              <tfooter>
              
              </tfooter>
            </table>
          </div>
        </div>
      </React.Fragment>
    )
  }

}



export default Shipments;