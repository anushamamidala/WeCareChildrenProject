import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { PostCardsComponent } from './post-cards/post-cards.component';



@NgModule({
  declarations: [DashboardComponentComponent, PostCardsComponent],
  imports: [
    CommonModule
  ],
  exports: [DashboardComponentComponent]
})
export class DashboardModule { }
