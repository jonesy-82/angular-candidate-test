import { Component } from '@angular/core';
import { CitationModel } from '../classes/citation-model';
import { ActivatedRoute, Router } from '@angular/router';
import { CitationsService } from '../services/citations-service';

@Component({
  selector: 'app-citation-details',
  templateUrl: './citation-details.component.html',
  styleUrls: ['./citation-details.component.scss']
})
export class CitationDetailsComponent {
  pageTitle = 'Item Details';
  errorMessage = '';
  citation: CitationModel | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private citationsService: CitationsService) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadCitation(id);
  }

  loadCitation(id: number): void {
    // this.citationsService.getCitation(id).subscribe({
    //   next: c => this.citation = this.citationsService.convertToCitationModel(c!),
    //   error: err => this.errorMessage = err
    // });

    // ToDo: take this plug out and call the API instead
    this.citation = this.citationsService.getCitationModelPlugged(id);
  }

  onBack(): void {
    this.router.navigate(['/citations']);
  }
}
