import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CitationsModule } from './citations/citations.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';
import { RutrohComponent } from './rutroh/rutroh.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    RutrohComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'rutro', component: RutrohComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'rutroh', pathMatch: 'full' } // This would likely redirect to a 404 in the real world
    ]),
    CitationsModule,
    AgGridAngular,
    FormsModule,
    AgGridModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
