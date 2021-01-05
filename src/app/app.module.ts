import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PasswordGeneratorComponent } from './apps/password-generator/password-generator.component';
import { ComponentIntractionComponent } from './apps/component-intraction/component-intraction.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordGeneratorComponent,
    ComponentIntractionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
