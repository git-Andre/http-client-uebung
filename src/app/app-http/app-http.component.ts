import { Component, OnInit } from '@angular/core';
import { Auction } from '../auction';
import { HttpClient } from '@angular/common/http';

interface Auktionen {
    results: Auction[];
}

@Component( {
    selector   : 'app-app-http',
    templateUrl: './app-http.component.html',
    styleUrls  : [ './app-http.component.css' ],
} )

export class AppHttpComponent implements OnInit {

    constructor( private http: HttpClient ) {
    }

    auktionen: Auktionen;
    auktion: Auction;

    ngOnInit(): void {
        this.http.get<Auktionen>( 'https://schaffrathnumis.de/api/auctions' )
            .subscribe( data => {
                 this.auktionen =  data;
            } );
    }
}
