import { Component, OnInit } from '@angular/core';
import { Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AppComponent {
  constructor(private backend: MockBackend) {
    /*
      Mocked backend service.
      For further details check:
      https://angular.io/docs/ts/latest/api/http/testing/index/MockBackend-class.html
    */
    this.backend.connections.subscribe((c: any) => {
      const response = new Response(<ResponseOptions>{ status: 200 });

      if (c.request.url === 'saveUrl') {
        c.mockDownload(response);

        setTimeout(() => {
          c.mockRespond(response);
        }, 1500);
      } else if (c.request.url === 'removeUrl') {
        c.mockRespond(response);
      }
    });
  }
}
