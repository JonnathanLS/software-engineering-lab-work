import { Skill } from './skill';

export interface Stage {
	_id: string,
	name: string,
	description: string,
	skills: Skill[]
}