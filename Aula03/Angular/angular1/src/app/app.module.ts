import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FotoComponente } from './foto/foo.component';
import { HeaderComponente } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FotoComponente,
    HeaderComponente
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
