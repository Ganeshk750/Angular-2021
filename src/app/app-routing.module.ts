import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PasswordGeneratorComponent } from './apps/password-generator/password-generator.component';
import { CardParentComponent } from './apps/card-parent/card-parent.component';
import { TypingGameComponent } from './apps/typing-game/typing-game.component';
import { PaymentPipeComponent } from './apps/payment-pipe/payment-pipe.component';
import { PageNotFoundComponent } from './apps/page-not-found/page-not-found.component';
import { BasicComComponent } from './apps/basic-com/basic-com.component';
import { SampleRedditComponent } from './apps/reddit/sample-reddit/sample-reddit.component';



const newLocal = './chart/chart.module';
const routes: Routes = [
  { path: '', redirectTo: "/", pathMatch: "full" },
  { path: 'pw', component: PasswordGeneratorComponent },
  { path: 'ci', component: CardParentComponent },
  { path: 'tp-game', component: TypingGameComponent },
  { path: 'pipe', component: PaymentPipeComponent },
  { path: 'basic', component: BasicComComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: 'reddit', component: SampleRedditComponent },
  { path: 'chart', loadChildren: () => import('./chart/chart.module').then(a => a.ChartModule) },
  
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []

})
export class AppRoutingModule { }
