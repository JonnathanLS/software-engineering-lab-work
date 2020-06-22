import { Stage } from './stage';

export interface JobOpportunity {
    id: string,
    name: string,
    stages: Stage[]
    description: string,
    department: string,
}