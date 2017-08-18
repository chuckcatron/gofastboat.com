import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http, HttpModule, ConnectionBackend, BaseRequestOptions,
         Response, ResponseOptions, ResponseType } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadModule } from '@progress/kendo-angular-upload';
import { MockBackend } from '@angular/http/testing';
import { AppComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ImageRotatorComponent } from './image-rotator/image-rotator.component';
import { ListingManagerComponent } from './listing-manager/listing-manager.component';
import { AdminUploadComponent } from './admin-upload/admin-upload.component';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    UploadModule
  ],
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    ImageRotatorComponent,
    ListingManagerComponent,
    AdminUploadComponent
  ],
 providers: [BaseRequestOptions, MockBackend, {
        provide: Http,
        deps: [MockBackend, BaseRequestOptions],
        useFactory: (backend, options) => {
            return new Http(backend, options);
        }
  }]
})
export class AdminModule {}
