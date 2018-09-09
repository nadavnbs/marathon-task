import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AllMarathonsComponent } from './all-marathons/all-marathons.component';
import { MarathonCardComponent } from './marathon-card/marathon-card.component'

const routes: Routes = [
    {path:'',component:AllMarathonsComponent},
    {path:':id',component:MarathonCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
