const HOST = "https://software-engineering-lab-api.herokuapp.com";
const JOBS_PATH = "/job-opportunities/"
export const SKILLS_PATH = "/skills/"
export const STAGES_PATH = "/stages/"

export const API = {
    authenticate: HOST,
    job_opportunities: `${HOST}${JOBS_PATH}`,
    skills: `${HOST}${SKILLS_PATH}`,
    stages: `${HOST}${STAGES_PATH}`
}