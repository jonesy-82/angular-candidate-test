import { Citation } from './citation';
import { SearchStats } from './search-stats';

export interface CitationsSearchResponse {
    results: Citation[];
    aggregations: {};
    stats: SearchStats;
}