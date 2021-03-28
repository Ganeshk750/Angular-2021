import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { PasswordGeneratorComponent } from './apps/password-generator/password-generator.component';
import { CardComponent } from './apps/card/card.component';
import { CardParentComponent } from './apps/card-parent/card-parent.component';
import { TypingGameComponent } from './apps/typing-game/typing-game.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { MainComponent } from './common/main/main.component';
import { SideNavComponent } from './common/side-nav/side-nav.component';
import { PaymentPipeComponent } from './apps/payment-pipe/payment-pipe.component';
import { ConvertPipe } from './apps/payment-pipe/convert.pipe';
import { PageNotFoundComponent } from './apps/page-not-found/page-not-found.component';
import { BasicComComponent } from './apps/basic-com/basic-com.component';
import { FormsModule } from '@angular/forms';
import { SampleRedditComponent } from './apps/reddit/sample-reddit/sample-reddit.component';
import { ArticleComponent } from './apps/reddit/article/article.component';
import { CaptchaComponent } from './apps/captcha/captcha.component';
//import { ChartModule } from './chart/chart.module';

@NgModule({
  declarations: [
    AppComponent,
    PasswordGeneratorComponent,
    CardComponent,
    CardParentComponent,
    TypingGameComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SideNavComponent,
    PaymentPipeComponent,
    ConvertPipe,
    PageNotFoundComponent,
    BasicComComponent,
    SampleRedditComponent,
    ArticleComponent,
    CaptchaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    // ChartModule
    NgxCaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
