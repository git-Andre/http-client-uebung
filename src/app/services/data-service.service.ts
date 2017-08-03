import { Injectable } from '@angular/core';
import { Auction } from '../auction';
import { HttpClient } from '@angular/common/http';

interface Auktionen {
    auctions: Auction[];
}

@Injectable()
export class DataServiceService {

    constructor( private http: HttpClient ) {
    }
    getList(): any {
      return this.http.get( 'https://schaffrathnumis.de/api/auctions' );
    }

}
