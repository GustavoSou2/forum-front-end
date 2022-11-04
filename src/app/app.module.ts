import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import {NbEvaIconsModule} from "@nebular/eva-icons";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NbThemeModule, NbLayoutModule, NbIconModule, NbToastrModule, NbCardModule} from '@nebular/theme';
import { MenuComponent } from './shared/components/menu/menu.component';
import { LogginComponent } from './shared/components/loggin/loggin.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    LogginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbEvaIconsModule,
    NbIconModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbToastrModule,
    NbCardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
