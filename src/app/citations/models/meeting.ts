import { MeetingOrganization } from './meeting-organization';

export interface Meeting {
    name: string;
    location: string;
    country: string;
    nctsn: string;
    url: string;
    startDate: string;
    endDate: string;
    sponsors: MeetingOrganization;
}