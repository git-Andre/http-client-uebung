import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auction } from '../auction';

interface Auktionen {
    auctions: Auction[];
}

@Injectable()
export class DataServiceService {

    constructor( private http: HttpClient ) {
    }

    getList(): any {
      return this.http.get( 'https://schaffrathnumis.de/api/auctions' );

    //         .subscribe( data => {
    //             data = JSON.stringify(data);
    //             console.log( 'data: ' + data );
    //         } );
    }

}
