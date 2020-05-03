import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Fontawesome Imports */
import {
  FontAwesomeModule,
  FaIconLibrary
} from '@fortawesome/angular-fontawesome';
import {
  faUser as fasUser,
  faBriefcase as fasBriefcase,
  faAddressCard as fasAddressCard,
  faMapMarkerAlt as fasMapMarkerAlt,
  faMobileAlt as fasMobileAlt,
  faEnvelope as fasEnvelope,
  faCalendar as fasCalendar,
  faUniversity as fasUniversity,
  faScroll as fasScroll,
  faStar as fasStar,
  faCircleNotch as fasCircleNotch,
  faCopyright as fasCopyright
} from '@fortawesome/free-solid-svg-icons';
import { faGithub as fabGithub } from '@fortawesome/free-brands-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

/* Angular Material Imports */
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, FooterComponent],
  imports: [
    /* Angular Import */
    BrowserModule,
    AppRoutingModule,
    /****/
    /* Anular Material Imports */
    MatButtonModule,
    MatChipsModule,
    /****/
    /* Fontawesome Imports */
    FontAwesomeModule
    /****/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(fa_icon_library: FaIconLibrary) {
    // Include solid fa icons
    fa_icon_library.addIcons(
      fasUser,
      fasBriefcase,
      fasAddressCard,
      fasMapMarkerAlt,
      fasMobileAlt,
      fasEnvelope,
      fasCalendar,
      fasUniversity,
      fasScroll,
      fasStar,
      fasCircleNotch,
      fasCopyright
    );
    // Include regular fa icons
    fa_icon_library.addIcons(farStar);
    // Include brand fa icons
    fa_icon_library.addIcons(fabGithub);
  }
}
