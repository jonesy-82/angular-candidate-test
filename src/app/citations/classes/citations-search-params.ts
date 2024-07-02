import { Distribution } from '../models/distribution';

export class CitationsSearchParams {
    index!: string;
    stiType!: string;
    disseminated!: string;
    distribution: string;
    created!: { gt: string; gte: string; lt: string; lte: string; format: string; };
    published!: { gt: string; gte: string; lt: string; lte: string; format: string; };
    modified!: { gt: string; gte: string; lt: string; lte: string; format: string; };
    author!: string[];
    center!: string[];
    organization!: string[];
    subjectCategory!: string[];
    reportNumber!: string[];
    fundingNumber!: string[];
    keyword!: string[];
    accessionNumber!: string[];
    page!: { size: number; from: number; };
    sort!: { field: string; order: string; };
    highlight!: boolean;
    q!: string;
    title!: string;
    abstract!: string;
    stiTypeDetails!: string;

    constructor(distribution: string) {
        this.distribution = distribution;
    }
}