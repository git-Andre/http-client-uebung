import { Component, OnInit } from '@angular/core';
import { Auction } from '../auction';
import {DataServiceService} from '../services/data-service.service'
// import { HttpClient } from '@angular/common/http';

interface Auktionen {
    auctions: Auction[];
}

@Component( {
    selector   : 'app-app-http',
    templateUrl: './app-http.component.html',
    styleUrls  : [ './app-http.component.css' ],
} )

export class AppHttpComponent implements OnInit {

    constructor( private dataBase: DataServiceService ) {
    }

    auktionen: Auktionen;
    auktion: Auction;


    getAuktionen() {
        this.dataBase.getList()
            .subscribe(data => {
                this.auktionen = data;
            });

        // console.log( 'auktionen: ' + this.auktionen );
        //
        // Object.keys(this.auktionen).forEach(key => {
        //     console.log( 'key: ' + (key) ); //value
        //     console.log( 'value: ' + this.auktionen[key] ); //value
        // })
        // let arr = [];
        // for(let key in this.auktionen) {
        //     if (this.auktionen.hasOwnProperty(key)) {
        //         arr.push(this.auktionen[key]);
        //     }
        // }
        // console.log( 'arr: ' + arr );
    }

    ngOnInit(): void {
        this.getAuktionen();
    }
}
