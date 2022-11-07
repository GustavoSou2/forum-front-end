import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import {NbEvaIconsModule} from "@nebular/eva-icons";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbIconModule,
  NbToastrModule,
  NbCardModule, NbToastrService,
} from '@nebular/theme';
import { MenuComponent } from './shared/components/menu/menu.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./http/modules/user/service/user.service";
import {LoginComponent} from "./pages/login/login.component";
import { CreateAccountComponent } from './pages/create-account/create-account.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    CreateAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbEvaIconsModule,
    NbIconModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbCardModule,
    FormsModule,
    HttpClientModule,
    NbToastrModule.forRoot(),

  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
