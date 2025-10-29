import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"

import { AppState } from "@/AppState.js"
import { Blog } from "@/models/Blog.js"


class BlogsService {

    async getBlogs() {
        //get projects
        const response = await api.get('api/blogs')
        logger.log('🍟', response.data)

        //save to AppState
        const blogs = response.data.map(blogData => new Blog(blogData))
        AppState.blogs = blogs


    }

    setActiveBlog(selectedBlog) {
        AppState.activeBlog = selectedBlog;
        logger.log('Blog is now active')

    }










}




export const blogsService = new BlogsService()