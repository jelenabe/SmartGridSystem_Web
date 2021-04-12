import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, NgZone, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { GeocodingService } from './map-service/geocoding.service';
import { GeolocationService } from './map-service/geolocation.service';
import { MapService } from './map-service/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  center: google.maps.LatLng;

  // MapOptions object specification.

  // The initial map zoom level. Required.
  zoom: number;

  disableDefaultUI: boolean;
  disableDoubleClickZoom: boolean;
  mapTypeId: google.maps.MapTypeId;
  maxZoom: number;
  minZoom: number;
  styles: google.maps.MapTypeStyle[];

  // Marker position. Required.
  position: google.maps.LatLng;
  markerLng: any;
  markerLat: any;

  // Marker title.
  title: string;

  // Info window.
  content: string;

  // Address to be searched.
  address: string;

  // Warning flag & message.
  warning: boolean;
  message: string;

  constructor(
    private ngZone: NgZone,
    private elementRef: ElementRef,
    private map: MapService,
    private geolocation: GeolocationService,
    private geocoding: GeocodingService
  ) {
    this.center = new google.maps.LatLng(45.2396, 19.8227);
    this.zoom = 3;
    this.markerLat = "45.2396";
    this.markerLng="19.8227";
    // Other options.
    this.disableDefaultUI = true;
    this.disableDoubleClickZoom = false;
    this.mapTypeId = google.maps.MapTypeId.ROADMAP;
    this.maxZoom = 18;
    this.minZoom = 2;
    // Styled Maps: https://developers.google.com/maps/documentation/javascript/styling
    this.styles = [
      {
        featureType: 'landscape',
        stylers: [
          { color: '#ffffff' }
        ]
      }
    ];

    // Initially the marker isn't set.

    this.address = "";

    this.warning = false;
    this.message = "";
  }

  ngOnInit() {
  }

  getCurrentPosition(): void {
    this.warning = false;
    this.message = "";

    if (navigator.geolocation) {
      this.geolocation.getCurrentPosition().subscribe(
        (position: any) => {
          if (this.center.lat() != position.coords.latitude &&
            this.center.lng() != position.coords.longitude) {
            // New center object: triggers OnChanges.
            this.center = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            this.zoom = 11;

            // Translates the location into address.
            this.geocoding.geocode(this.center).forEach(
              (results: google.maps.GeocoderResult[]) => {
                this.setMarker(this.center, "your locality", results[0].formatted_address);
              })
              .then(() => console.log('Geocoding service: completed.'))
              .catch((error: google.maps.GeocoderStatus) => {
                if (error === google.maps.GeocoderStatus.ZERO_RESULTS) {
                  this.message = "zero results";
                  this.warning = true;
                }
              });
          }
        },
        (error: any) => {
          if (error.code > 0) {
            switch (error.code) {
              case error.PERMISSION_DENIED:
                this.message = 'permission denied';
                break;
              case error.POSITION_UNAVAILABLE:
                this.message = 'position unavailable';
                break;
              case error.TIMEOUT:
                this.message = 'position timeout';
                break;
            }
            this.warning = true;
          }
        },
        () => console.log('Geolocation service: completed.'));

    } else {
      this.message = "browser doesn't support geolocation";
      this.warning = true;
    }
  }

  search(address: string): void {
    if (address != "") {
      this.warning = false;
      this.message = "";
      // Converts the address into geographic coordinates.
      // Here 'forEach' resolves the promise faster than 'subscribe'.
      this.geocoding.codeAddress(address).forEach(
        (results: google.maps.GeocoderResult[]) => {
          if (!this.center.equals(results[0].geometry.location)) {
            // New center object: triggers OnChanges.
            this.center = new google.maps.LatLng(
              results[0].geometry.location.lat(),
              results[0].geometry.location.lng()
            );
            this.zoom = 11;

            this.setMarker(this.center, "search result", results[0].formatted_address);
          }
        })
        .then(() => {
          this.address = "";
          console.log('Geocoding service: completed.');
        })
        .catch((error: google.maps.GeocoderStatus) => {
          if (error === google.maps.GeocoderStatus.ZERO_RESULTS) {
            this.message = "zero results";
            this.warning = true;
          }
        });
    }
  }

  // Sets the marker & the info window.
  setMarker(latLng: google.maps.LatLng, title: string, content: string): void {
    this.map.deleteMarkers();
    // Sets the marker.
    this.position = latLng;
    this.markerLng = latLng.lng();
    this.markerLat = latLng.lat();
    this.title = title;
    // Sets the info window.
    this.content = content;
  }

}


