import { Injectable } from '@angular/core';

import { Place } from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  // private _newPlace: Place | undefined;
  private _places: Place[] = [
    new Place(
      'p1',
      'Buenos Aires',
      'Caserón porteño.',
      'https://turismo.buenosaires.gob.ar/sites/turismo/files/casa_minima_1200_2.jpg',
      24.99,
      new Date('2024-05-31T00:00:00'),
      new Date('2024-12-31T23:59:59')
    ),
    new Place(
      'p2',
      'Haras del Sur',
      'Casa en country en las afueras de Buenos Aires.',
      'https://www.pololine.com/wp-content/uploads/2018/11/foto1-900x550.jpg',
      149.99,
      new Date('2024-05-31T00:00:00'),
      new Date('2024-12-31T23:59:59')
    ),
    new Place(
      'p3',
      'Recoleta',
      'Casa patricia en el barrio más exclusivo de la ciudad.',
      'https://www.parati.com.ar/wp-content/uploads/2022/08/CASAS-ANTIGUAS-EN-BUENOS-AIRES.jpeg',
      189.99,
      new Date('2024-05-31T00:00:00'),
      new Date('2024-12-31T23:59:59')
    )
  ];

  get places() {
    return [...this._places];
  }

  constructor() {}

  getPlace (id: string | null) {
    // this._newPlace = this._places.find(p => { return p.id === id} );
    // return this._newPlace;

    return this._places.find(p => { return p.id === id} );
  }
}
