import { AppState } from "@/AppState.js"
import { Account } from "@/models/Account.js"
import { api } from "@/services/AxiosService.js"
import { logger } from "@/utils/Logger.js"


class ProfilesService {
    async getProfile(profileId) {
        AppState.activeProfile = null
        const response = await api.get(`api/profiles/${profileId}`)
        logger.log('🐈', response.data)

        const profile = new Account(response.data)
        AppState.activeProfile = profile


    }




}

export const profilesService = new ProfilesService()