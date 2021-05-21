import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExtraCategoriesPage } from './extra-categories.page';

const routes: Routes = [
  {
    path: '',
    component: ExtraCategoriesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExtraCategoriesPage]
})
export class ExtraCategoriesPageModule {}
