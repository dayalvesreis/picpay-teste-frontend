import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { ModalComponent } from './components/modal/modal.component';

import { DataService } from './share/services/data/data.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
