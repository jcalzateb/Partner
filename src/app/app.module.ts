import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterPartnerComponent } from './pages/register-partner/register-partner.component';
import { ListInstitutionsComponent } from './pages/list-institutions/list-institutions.component';
import { NavComponent } from './shared/nav/nav.component';
import { LocalStorageService} from './services/local-storage.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    RegisterPartnerComponent,
    ListInstitutionsComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
