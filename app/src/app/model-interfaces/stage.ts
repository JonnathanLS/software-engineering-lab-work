import { Skill } from './skill';

export interface Stage {
	id: string,
	name: string,
	description: string,
	skills: Skill[]
}