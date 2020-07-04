const HOST = "https://software-engineering-lab-api.herokuapp.com";
const PATH = {
    JOBS: "/job-opportunities/",
    SKILLS: "/skills/",
    STAGES: "/stages/",
    CANDIDATES: "/candidates/",
    USERS: '/users/',
    DEPARTMENTS: '/departments/',
    EVALUATIONS: '/evaluations/'
}
export const STAGES_PATH = PATH.STAGES;
export const JOBS_PATH = PATH.JOBS;

export const API = {
    authenticate: HOST,
    departments: `${HOST}${PATH.DEPARTMENTS}`,
    users: `${HOST}${PATH.USERS}`,
    job_opportunities: `${HOST}${PATH.JOBS}`,
    skills: `${HOST}${PATH.SKILLS}`,
    stages: `${HOST}${PATH.STAGES}`,
    candidates: `${HOST}${PATH.CANDIDATES}`,
    evaluations: `${HOST}${PATH.EVALUATIONS}`,
}