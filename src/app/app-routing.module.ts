import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PasswordGeneratorComponent } from './apps/password-generator/password-generator.component';
import { CardParentComponent } from './apps/card-parent/card-parent.component';
import { TypingGameComponent } from './apps/typing-game/typing-game.component';
import { PaymentPipeComponent } from './apps/payment-pipe/payment-pipe.component';


const routes: Routes = [
  { path: '', redirectTo: "/", pathMatch: "full" },
  { path: 'pw', component: PasswordGeneratorComponent },
  { path: 'ci', component: CardParentComponent },
  { path: 'tp-game', component: TypingGameComponent },
  { path: 'pipe', component: PaymentPipeComponent },
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
