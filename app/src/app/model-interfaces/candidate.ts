import { JobOpportunity } from './job-opportunity';

export interface Candidate {
    _id: string
    name: string,
	cpf: string,
	address: string,
	links: string[],
	jobOpportunities: JobOpportunity[]
}