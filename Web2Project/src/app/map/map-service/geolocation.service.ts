import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

/**
 * GeolocationService class.
 * https://developers.google.com/maps/documentation/javascript/
 * https://dev.w3.org/geo/api/spec-source.html
 */
@Injectable() export class GeolocationService {

    /**
     * Tries HTML5 geolocation.
     *
     * Wraps the Geolocation API into an observable.
     *
     * @return An observable of Position
     */
    getCurrentPosition(): Observable<any> {
        // tslint:disable-next-line: deprecation
        return Observable.create((observer: Observer<any>) => {
            // Invokes getCurrentPosition method of Geolocation API.
            navigator.geolocation.getCurrentPosition(
                (position: any) => {
                    observer.next(position);
                    observer.complete();
                },
                (error: any) => {
                    console.log('Geolocation service: ' + error.message);
                    observer.error(error);
                }
            );
        });
    }

}
