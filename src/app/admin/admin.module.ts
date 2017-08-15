import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ImageRotatorComponent } from './image-rotator/image-rotator.component';
import { ListingManagerComponent } from './listing-manager/listing-manager.component';

import { AdminRoutingModule } from './admin-routing/admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    ImageRotatorComponent,
    ListingManagerComponent
  ]
})
export class AdminModule {}