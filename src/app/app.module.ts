import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { ResultListComponent } from './result-list/result-list.component';
import { HttpService } from './services/http-service';
import { ResultListService } from './services/result-list-service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    LoginModalComponent,
    ResultListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [HttpService, ResultListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
