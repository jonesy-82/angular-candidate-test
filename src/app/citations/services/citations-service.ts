import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { Citation } from '../models/citation';
import ErrorMessageUtility from 'src/app/shared/error-message-utility';
import { CitationModel } from '../classes/citation-model';
import { CitationsSearchParams } from '../classes/citations-search-params';
import { Distribution } from '../models/distribution';
import { CitationsSearchResponse } from '../models/citations-search-response';

@Injectable({
    providedIn: 'root'
})
export class CitationsService {
    private citationsSearchUrl = 'https://ntrs.nasa.gov/api/citations/search';

    constructor(private http: HttpClient) {}

    getCitations(): Observable<CitationsSearchResponse> {
      const header = { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type'
      };
      const parms = { headers: new HttpHeaders(header) };
      let request = new CitationsSearchParams(Distribution.PUBLIC.toString());

      return this.http.post<CitationsSearchResponse>(this.citationsSearchUrl, request, parms).pipe(
          tap(data => console.log('All', JSON.stringify(data))),
          catchError(this.handleError)
      );
    }

    // Depending upon the potential size of our search response and the time it takes to retrieve records,
    // we may consider caching the response and pulling from cache here...
    getCitation(id: number): Observable<Citation | undefined> {
        return this.getCitations().pipe(
            map((res: CitationsSearchResponse) => res.results.find(c => c.id === id))
        );
    }

    convertToCitationModel(citation: Citation): CitationModel {
        return new CitationModel(
            citation.id,
            citation.stiType, 
            citation.stiTypeDetails,
            citation.title,
            citation.distributionDate,
            citation.status)
    }

    getCitationModels(citationsResponse: Citation[]): CitationModel[] {
        var citations: CitationModel[] = [];
        citationsResponse.forEach(citation => {
          citations.push(this.convertToCitationModel(citation))
        });
        return citations;
    }

    
    getCitationModelPlugged(id: number): CitationModel {
      return this.getCitationModelsPlugged().find(c => c.id === id)!;
  }

  getCitationModelsPlugged(): CitationModel[] {
      // Plug example record for now until we have an active API integration
      var pluggedResponse = this.getExampleCitation();
      return this.getCitationModels(pluggedResponse.results);
  }
  
  getExampleCitation(): any {
      return {
        "results": [
          {
            "status": "DRAFT",
            "stiType": "STI_TYPE_NONE",
            "technicalReviewType": "NOT_SET",
            "onlyAbstract": true,
            "isLessonsLearned": true,
            "disseminated": "NONE",
            "distribution": "PUBLIC",
            "id": 0,
            "index": "string",
            "stiTypeDetails": "string",
            "title": "string",
            "abstract": "string",
            "authorAffiliations": [
              {
                "userType": "OTHER",
                "sequence": 0,
                "primary": true,
                "userId": "string",
                "organizationId": "string",
                "meta": {
                  "author": {
                    "name": "string",
                    "email": "string",
                    "uupic": "string",
                    "orcidId": "string"
                  },
                  "organization": {
                    "name": "string",
                    "location": "string"
                  }
                }
              }
            ],
            "center": {
              "id": "string",
              "name": "string",
              "code": "string",
              "created": "string",
              "modified": "string"
            },
            "publications": [
              {
                "publisher": "string",
                "publicationName": "string",
                "volume": "string",
                "issue": "string",
                "publicationDate": "string",
                "issuePublicationDate": "string",
                "doi": "string",
                "url": "string",
                "issn": "string",
                "eissn": "string",
                "isbn": "string",
                "eisbn": "string"
              }
            ],
            "meetings": [
              {
                "name": "string",
                "location": "string",
                "country": "string",
                "nctsn": "string",
                "url": "string",
                "startDate": "string",
                "endDate": "string",
                "sponsors": [
                  {
                    "organizationId": "string",
                    "meta": {
                      "organization": {
                        "name": "string",
                        "location": "string"
                      }
                    }
                  }
                ]
              }
            ],
            "distributionDate": "string",
            "copyright": {
              "determinationType": "NO_PERMISSION",
              "licenseType": "NO",
              "thirdPartyContentCondition": "NOT_SET",
              "containsIndication": true,
              "belongsToPublisher": true,
              "publisherPermissionOrRightsToDistribute": true,
              "belongsToContractor": true,
              "disclosedInvention": true,
              "disclosedToPublic": true,
              "ntrNumber": "string",
              "thirdPartyPermissionsProduced": true,
              "containsThirdPartyMaterial": true,
              "thirdPartyLocationComments": "string",
              "patent": "string",
              "patentApplication": "string",
              "approverComments": "string",
              "thirdPartyContentConditionOther": "string"
            },
            "exportControl": {
              "itar": "UNSET",
              "ear": "UNSET",
              "category": [
                {
                  "category": 0,
                  "categoryNotes": "string"
                }
              ],
              "eccnNumber": "string"
            },
            "sensitiveInformation": "UNSET",
            "cui": {
              "isCui": true,
              "categories": [
                {
                  "category": "ADPO"
                }
              ],
              "disseminationControls": [
                {
                  "disseminationControl": "NO_FOREIGN_DISSEMINATION"
                }
              ]
            },
            "fundingNumbers": [
              {
                "type": "CONTRACT_GRANT",
                "number": "string"
              }
            ],
            "otherReportNumbers": [
              "string"
            ],
            "sourceIdentifiers": [
              {
                "number": "string",
                "type": "string",
                "descriptor": "string"
              }
            ],
            "subjectCategories": [
              "string"
            ],
            "keywords": [
              "string"
            ],
            "created": "string",
            "modified": "string",
            "submittedDate": "string",
            "curatedDate": "string",
            "redistributedDate": "string",
            "downloadsAvailable": true,
            "downloads": [
              {
                "type": "OTHER",
                "draft": true,
                "links": {
                  "original": "string",
                  "pdf": "string",
                  "fulltext": "string"
                },
                "mimetype": "string",
                "name": "string",
                "notes": "string"
              }
            ],
            "related": [
              {
                "type": "ANALYTIC_PRIMARY",
                "stiType": "STI_TYPE_NONE",
                "disseminated": "NONE",
                "distribution": "PUBLIC",
                "status": "DRAFT",
                "id": 0,
                "accessionNumber": "string",
                "title": "string"
              }
            ],
            "legacyMeta": {
              "accessionNumber": "string"
            },
            "_meta": {
              "score": 0,
              "highlight": {}
            }
          }
        ],
        "aggregations": {},
        "stats": {
          "maxScore": 0,
          "took": 0,
          "total": 0,
          "estimate": true
        }
      };
    }

    private handleError(err: HttpErrorResponse) {
        return throwError(()=> ErrorMessageUtility.handleHttpError(err));
    }
}