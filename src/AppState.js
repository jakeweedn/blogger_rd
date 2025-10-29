import { reactive } from 'vue'
import { Blog } from './models/Blog.js'
import { Account } from './models/Account.js'


// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

  /** @type {Blog[]} */
  blogs: [],

  /** @type {Blog} */
  activeBlog: null,

  /** @type {Blog[]} */
  profileBlogs: [],

  /** @type {Account} */
  activeProfile: null,
})

