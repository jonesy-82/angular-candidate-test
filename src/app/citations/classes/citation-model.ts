export class CitationModel {
    id: number;
    stiTypeFormatted: string;
    title: string;
    distributionDate: string;
    status: string;

    constructor(id: number, stiType: string, stiDetails: string, title: string, distributionDate: string, status: string) {
        this.id = id;
        this.stiTypeFormatted =  `${stiType} - ${stiDetails}`;
        this.title = title;
        this.distributionDate = distributionDate;
        this.status = status;
    }
}