import { AuthorAffiliationMeta } from './author-affiliation-meta';
import { AuthorMeta } from './author-meta';
import { Center } from './center';
import { Meeting } from './meeting';
import { Publication } from './publication';

export interface AuthorAffiliation {
    userType: string;
    sequence: number;
    primary: boolean;
    userId: string;
    organizationId: string;
    meta: AuthorAffiliationMeta;
    center: Center;
    publications: Publication;
    meetings: Meeting;
}