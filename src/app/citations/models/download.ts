import { DownloadLinks } from './download-links';

export interface Download {
    type: string;
    draft: boolean;
    links: DownloadLinks;
    mimetype: string;
    name: string;
    notes: string;
}