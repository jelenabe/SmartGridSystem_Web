import { Directive, Input, OnChanges, SimpleChange } from '@angular/core';
import { MapService } from './map.service';


@Directive({
    selector: '[googleMapMarker]'
})
export class GoogleMapMarkerDirective implements OnChanges {

    /**
     * Marker position. Required.
     */
    @Input() position: google.maps.LatLng;
    /**
     * The marker's title will appear as a tooltip.
     */
    @Input() title: string;
    /**
     * An InfoWindow's content is diplayed in a popup window above the map, at a given location.
     */
    @Input() content: string;

    constructor(public map: MapService) { }

    /**
     * This method is invoked when the marker properties change.
     */
    ngOnChanges(changes: { [propertyName: string]: SimpleChange }): void {
        // Creates the marker and the info window.
        if (changes['position']) { this.map.addMarker(this.position, this.title, this.content); }
    }

}
