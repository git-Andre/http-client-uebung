import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Auction } from '../auction';

interface Auktionen {
    auctions: Auction[];
}

@Injectable()
export class DataServiceService {

    constructor( private http: HttpClient ) {
    }

    getList(): Observable<Auktionen> {
        return this.http.get<Auktionen>( 'https://schaffrathnumis.de/api/auctions/' );

    }

}
