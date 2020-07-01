const HOST = "https://software-engineering-lab-api.herokuapp.com";
export const JOBS_PATH = "/job-opportunities/";
export const SKILLS_PATH = "/skills/";
export const STAGES_PATH = "/stages/";
export const CANDIDATES_PATH = "/candidates/";
export const USERS_PATH = '/users/';
export const DEPARTMENTS = '/departments';

export const API = {
    authenticate: HOST,
    departments: `${HOST}${DEPARTMENTS}`,
    users: `${HOST}${USERS_PATH}`,
    job_opportunities: `${HOST}${JOBS_PATH}`,
    skills: `${HOST}${SKILLS_PATH}`,
    stages: `${HOST}${STAGES_PATH}`,
    candidates: `${HOST}${CANDIDATES_PATH}`,
}