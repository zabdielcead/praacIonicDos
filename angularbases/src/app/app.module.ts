import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { PagesModule } from './pages/pages.module';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    // AboutComponent,
    // ContactComponent,
    // HomeComponent,
    MenuComponent
  ],
  imports: [  // casi todos los modules va en imports
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
