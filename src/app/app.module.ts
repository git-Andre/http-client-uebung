import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppHttpComponent } from './app-http/app-http.component';
import {DataServiceService} from './services/data-service.service';

@NgModule( {
    declarations: [
        AppComponent,
        AppHttpComponent,
    ],
    imports     : [
        BrowserModule,
        HttpClientModule,
    ],
    providers   : [DataServiceService],
    bootstrap   : [ AppComponent ],
} )
export class AppModule {
}
