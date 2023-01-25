import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './Heroes/heroes.module';
import { ContadorsModule } from './contadors/contador.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
