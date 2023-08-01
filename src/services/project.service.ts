import { config } from '../config/config'
import { axiosPublic } from '../api/connector'

const apiUrl = config.api.url

const getProject = (projectId: string) => {
    return axiosPublic.get(`${apiUrl}/v1/projects/${projectId}`, {})
}

const getProjectWeather = (projectId: string) => {
    return axiosPublic.get(`${apiUrl}/v1/projects/${projectId}/weather`, {})
}

export const projectService = {
    getProject,
    getProjectWeather,
}
