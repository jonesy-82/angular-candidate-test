import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CitationsListComponent } from './components/citations-list.component';
import { AgGridAngular } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { CitationDetailsComponent } from './components/citation-details.component';
import { CitationDetailGuard } from './citation-detail-guard';

@NgModule({
  declarations: [
    CitationsListComponent,
    CitationDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'citations', component: CitationsListComponent },
      { 
        path: 'citations/:id', 
        canActivate: [CitationDetailGuard],
        component: CitationDetailsComponent 
      }
    ])
  ]
})
export class CitationsModule { }
