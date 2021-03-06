import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router';

import { AppComponent } from '../admin/admin.component';
import { ImageRotatorComponent } from '../image-rotator/image-rotator.component';
import { ListingManagerComponent } from '../listing-manager/listing-manager.component';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AppComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'image-rotator', component: ImageRotatorComponent },
          { path: 'listing-manager', component: ListingManagerComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { 
  
} 