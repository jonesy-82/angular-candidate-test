import { AuthorMeta } from './author-meta';
import { OrganizationMeta } from './organization-meta';

export interface AuthorAffiliationMeta {
    author: AuthorMeta;
    organization: OrganizationMeta;
}