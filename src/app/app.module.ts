import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonTitleModule } from '../subCommon/common-title/common-title.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonTitleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
