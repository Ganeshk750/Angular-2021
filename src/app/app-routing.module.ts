import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PasswordGeneratorComponent } from './apps/password-generator/password-generator.component';
import { CardParentComponent } from './apps/card-parent/card-parent.component';

const routes: Routes = [
  { path: '', redirectTo: "/", pathMatch: "full" },
  { path: 'pw', component: PasswordGeneratorComponent },
  { path: 'ci', component: CardParentComponent },
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
