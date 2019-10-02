import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Fontawesome Imports */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUser,
  faBriefcase,
  faAddressCard,
  faMapMarkerAlt,
  faMobileAlt,
  faEnvelope,
  faCalendar,
  faUniversity,
  faScroll,
  faStar,
  faCircleNotch,
  faCopyright
} from '@fortawesome/free-solid-svg-icons';
import { faGithub as fabGithub } from '@fortawesome/free-brands-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

// Add an icon to the library for convenient access in other components
library.add(
  faUser,
  faBriefcase,
  faAddressCard,
  faMapMarkerAlt,
  faMobileAlt,
  faEnvelope,
  faCalendar,
  faUniversity,
  faScroll,
  faStar,
  faCircleNotch,
  faCopyright,
  fabGithub,
  farStar
);

/* Angular Material Imports */
import { MatButtonModule, MatChipsModule } from '@angular/material';

import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, FooterComponent],
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
export class AppModule {}
