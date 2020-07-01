import { Stage } from './stage';

export interface JobOpportunity {
    _id: string,
    name: string,
    stages: Stage[]
    description: string,
    department: string,
}