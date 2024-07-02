import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Citation } from '../models/citation';
import { CitationModel } from '../classes/citation-model';
import { CitationsService } from '../services/citations-service';
import { ColDef } from 'ag-grid-community';
import ErrorMessageUtility from '../../shared/error-message-utility';

@Component({
  templateUrl: './citations-list.component.html',
  styleUrls: ['./citations-list.component.scss']
})
export class CitationsListComponent {
  pageTitle ='Item List - Citations';
  showSplitView = false;
  errorMessage = '';
  sub!: Subscription;
  infoMessage = '';
  citations: CitationModel[] = [];
  columnDefs: ColDef[] = [];

  constructor(private citationService: CitationsService) {}

  ngOnInit(): void {
    // this.sub = this.citationService.getCitations().subscribe({
    //     next: res => {
    //       if (res.results) {
    //         this.citations = this.citationService.getCitationModels(res.results)
    //       } else {
    //         this.infoMessage = 'No records returned';
    //       }
    //     },
    //     error: err => this.errorMessage = 'Unable to retrieve citations. Please see log for details.'
    // });

    // ToDo: take this plug out and call the API instead
    this.citations = this.citationService.getCitationModelsPlugged();
  }

  ngOnDestroy(): void {
      this.sub?.unsubscribe();
  }

  toggleSplitView(): void {
      this.showSplitView = !this.showSplitView;
  }

  // loadAGGridData(citations: Citation[]): void {
  //   // Need to discuss how we want to display no records here...

  //   try {
  //     if (citations?.length > 0) {
  //       this.columnDefs = [
  //         { field: 'id', flex: 1, filter: true },
  //         { field: 'stiTypeFormatted', flex: 1, filter: true },
  //         { field: 'title', flex: 2, filter: true },
  //         { field: 'distributionDate', flex: 1, filter: true },
  //         { field: 'status', flex: 1, filter: true }
  //       ];

  //       this.citations = this.citationService.getCitationModels(citations);
  //     } else {
  //       this.infoMessage = 'No records returned';
  //     }
  //   } catch (err) {
  //     ErrorMessageUtility.handleErrorEvent(err as ErrorEvent);
  //     this.errorMessage = 'Unable to initialize citations. See log for details.'
  //   }
  // }
}
