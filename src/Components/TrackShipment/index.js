import React from 'react'
import './style.css'
import stream from 'getstream';


class TrackShipments extends React.Component {

    constructor(props){
        super(props)
        this.userToken =   localStorage.getItem("token")
        this.client = stream.connect(process.env.REACT_APP_API_KEY, this.userToken, "66027"); 
        this.userId = localStorage.getItem('user_id')
        this.userFeed = this.client.feed('user', this.userId );

        this.state = {
            feeds: [],
            status: false,
            trackingNumber: ""
        }
    }

    async componentDidMount(){
        this.userFeed.subscribe(this.callback).then(this.successCallback, this.failCallback);
    }

    handleTrackingNumber = async e => {

        this.setState({trackingNumber: e.target.value, feeds: []});

        try {

            const { results } = await this.userFeed.get({ limit: 100 });

            results.forEach(feed => {
            if (feed.tracking_number===this.state.trackingNumber){
                this.setState(prevState => ({
                    feeds: [...prevState.feeds, feed],
                    status: true
                }));
            }
            });
            
        } catch (error) {
            console.log(error);
        };

      };

    singleFeed(data){
        // This should add a new feed to the feed stack
            this.setState( prevState =>({feeds: [ ...prevState.feeds, data.new[0]]}) );
    }
  
   callback = data => {
     this.singleFeed(data)
   };

   successCallback = async () => {
     console.log('now listening to changes in realtime');
   };

  failCallback = data => {
    alert('something went wrong, check the console logs');
    console.log(data);
  };

  render(){
  return (
    <React.Fragment>
      <div>
        <div className="main-container">
            <section id="timeline" className="timeline-outer">
                <div className="container" id="content">
                <div className="row">
                    <div className="col s12 m12 l12">
                    <h1 className="blue-text lighten-1 header"> Track shipment</h1>

                    <p>  
                    <label>Tracking Number</label>   
                    <input className="w3-input" onChange={this.handleTrackingNumber.bind(this)} type="text" />
                    </p>
                    <ul className="timeline">
                        { this.state.status ?  this.state.feeds.map((feed)=>{
                           return (<li id={feed.id} className="event" data-date="2015/Present">
                                <h3>Item Location: {feed.current_location}</h3>
                                <p> Item: {feed.item} </p>
                                <p>Description: {feed.description}</p>
                                <p>Moving from: {feed.source} to {feed.destination}</p>

                            </li>)
                        }): "Nothing to show"}
                       
                    </ul>
                    </div>
                </div>
                </div>
            </section>
            <br/>
            </div>
      </div>
    </React.Fragment>
  )
}

}


export default TrackShipments;