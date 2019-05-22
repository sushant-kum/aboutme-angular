import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Fontawesome Imports */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

// Add an icon to the library for convenient access in other components
library.add(fas, fab, far);

/* Angular Material Imports */
import {
  MatButtonModule,
  MatChipsModule
} from '@angular/material';

import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    /**Angular Import**/
    BrowserModule,
    AppRoutingModule,
    /****/
    /**Anular Material Imports**/
    MatButtonModule,
    MatChipsModule,
    /****/
    /**Fontawesome Imports**/
    FontAwesomeModule
    /****/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
