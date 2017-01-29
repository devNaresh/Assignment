import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const coords = {
  lat: 37.774929,
  lng: -122.419416
};

export const GoogleMapsTest = React.createClass({

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  },

  onDragEnd(e) {
    console.log('onDragEnd', e);
  },

  onCloseClick() {
    console.log('onCloseClick');
  },

  onClick(e) {
    console.log('onClick', e);
  },

  get_marker() {
      return this.props.cities.map((city, index) => <Marker
          key={index}
          lat={city.lat}
          lng={city.log}
          draggable={true}
          onDragEnd={this.onDragEnd} />)
    
  },

  render() {
    return (
      <Gmaps
        width={'1000px'}
        height={'600px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={10}
        loadingMessage={'Be happy'}
        params={{v: '3.exp', key: 'AIzaSyAyrubvFmki6poRRnXaNtELWFQR-z8ZyGA'}}
        onMapCreated={this.onMapCreated}>
        {this.get_marker()}
      </Gmaps>
    );
  }

});