import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeSliderSearchComponent } from './home/home-slider-search/home-slider-search.component';
import { HomeTopEstateComponent } from './home/home-top-estate/home-top-estate.component';
import { HomeTopEstateProjectComponent } from './home/home-top-estate-project/home-top-estate-project.component';
import { HomeServiceIntroductionComponent } from './home/home-service-introduction/home-service-introduction.component';
import { HomeAgentEstateComponent } from './home/home-agent-estate/home-agent-estate.component';
import { HomeCustomerFeedbackComponent } from './home/home-customer-feedback/home-customer-feedback.component';
import { HomePartnersComponent } from './home/home-partners/home-partners.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HomeSliderSearchComponent,
    HomeTopEstateComponent,
    HomeTopEstateProjectComponent,
    HomeServiceIntroductionComponent,
    HomeAgentEstateComponent,
    HomeCustomerFeedbackComponent,
    HomePartnersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
