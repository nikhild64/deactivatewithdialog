import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { ConfirmguardGuard } from './confirmguard.guard';

const routes: Routes = [
  {
    path: 'comp1',
    canDeactivate: [ConfirmguardGuard],
    component: Comp1Component,
  },
  { path: 'comp2', component: Comp2Component },

  { path: '', redirectTo: 'comp1', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
