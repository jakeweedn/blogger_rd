import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Project } from "@/models/Project.js"
import { AppState } from "@/AppState.js"


class ProjectsService {

    async getProjects() {
        //get projects
        const response = await api.get('api/projects')
        logger.log('🍟', response.data)

        //save to AppState
        const projects = response.data.map(projectData => new Project(projectData))
        AppState.projects = projects








    }


}

export const projectsService = new ProjectsService()