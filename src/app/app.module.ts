import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PasswordGeneratorComponent } from './apps/password-generator/password-generator.component';
import { CardComponent } from './apps/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    PasswordGeneratorComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
