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

    async getProjectsByProfileId(profileId) {

        AppState.profileBlogs = [] //null for arrays
        const response = await api.get(`api/blogs?creatorId=${profileId}`)
        logger.log(`🎯`, response.data)

        const blogs = response.data.map(blogData => new Blog(blogData))
        AppState.profileBlogs = blogs



    }

    async createBlog(blogData) {
        const response = await api.post('api/blogs', blogData)
        logger.log('CREATED BLOG', response.data)

        const blog = new Blog(response.data)
        AppState.blogs.unshift(blog)




    }

    async deleteBlog(blogId) {

        const response = await api.delete(`api/blogs/${blogId}`)
        logger.log('DELETED BLOG', response.data)

        const index = AppState.blogs.findIndex(blog => blog.id == blogId)
        AppState.blogs.splice(index, 1)


    }











}




export const blogsService = new BlogsService()