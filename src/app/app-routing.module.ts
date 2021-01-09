import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PasswordGeneratorComponent } from './apps/password-generator/password-generator.component';
import { CardParentComponent } from './apps/card-parent/card-parent.component';
import { TypingGameComponent } from './apps/typing-game/typing-game.component';

const routes: Routes = [
  { path: '', redirectTo: "/", pathMatch: "full" },
  { path: 'pw', component: PasswordGeneratorComponent },
  { path: 'ci', component: CardParentComponent },
  { path: 'tp-game', component: TypingGameComponent },
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
