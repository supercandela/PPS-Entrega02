import { Injectable } from "@angular/core";

import { Booking } from "./booking.model";

@Injectable({
    providedIn: 'root'
  })

export class BookingService {
    private _bookings: Booking[] = [
        new Booking('xyz', 'p1', 'candela','Buenos Aires', 2),
        new Booking('yyy', 'p2', 'test','Haras del sur', 8)
    ];

    get bookings () {
        return [...this._bookings] as Booking[];
    }
}