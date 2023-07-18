import { Injector ,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './header/hero/hero.component';
import { HeaderComponent } from './header/header.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector){

  }

ngDoBootstrap(){
  const customElementHeader = createCustomElement(HeaderComponent,{injector: this.injector });
  customElements.define('header-component', customElementHeader)
}
 }
