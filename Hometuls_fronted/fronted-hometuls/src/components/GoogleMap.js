import React, {Component} from 'react';
import { Map , Marker , GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
    
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      mapCenter: {
          lat: this.props.lat,
          lng: this.props.lng
      }
    };
    
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
   
    render() {
        console.log('aca llegan los props',this.props);
      return (
        <Map google={this.props.google}
            initialCenter={{
                lat: this.state.mapCenter.lat,
                lng: this.state.mapCenter.lng
            }
            }
            center = {{
                lat: this.state.mapCenter.lat,
                lng: this.state.mapCenter.lng
            }}
        >
          <Marker 
            position = {{
                lat: this.state.mapCenter.lat,
                lng: this.state.mapCenter.lng
            }}
          />   
        </Map>
      )
    }
  }

  export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_API_KEY_GOOGLE_MAPS)
  })(MapContainer)