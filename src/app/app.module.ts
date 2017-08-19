import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes-component/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { ImageService } from './services/image.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-router/app-router.module';
import { AdminModule } from './admin/admin.module';
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AdminModule
  ],
  providers: [HeroService, ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
