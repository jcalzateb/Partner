import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterPartnerComponent } from './pages/register-partner/register-partner.component';
import { ListInstitutionsComponent } from './pages/list-institutions/list-institutions.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterPartnerComponent,
    ListInstitutionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
