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
  NbCardModule,
  NbDialogModule
} from '@nebular/theme';
import { MenuComponent } from './shared/components/menu/menu.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./http/modules/user/service/user.service";
import {LoginComponent} from "./pages/login/login.component";
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { DialogServiceComponent } from './shared/helpers/dialog-service/dialog-service.component';
import {CommonModule} from "@angular/common";
import {AngularEditorModule} from "@kolkov/angular-editor";
import {Safe} from "./shared/helpers/safe/safe.pipe";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    CreateAccountComponent,
    CreatePostComponent,
    DialogServiceComponent,
    Safe,
  ],
  imports: [
    CommonModule,
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
    NbDialogModule.forRoot(),
    ReactiveFormsModule,
    AngularEditorModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
