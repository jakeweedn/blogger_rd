
//Commented out what was here initially and put the settings in from the lab. 
export const dev = window.location.origin.includes("localhost");
export const baseURL = dev ? "https://sandbox.codeworksacademy.com" : "";
export const useSockets = false;
export const domain = "codeworksclassroom.auth0.com";
export const clientId = "pOXw2OGv1LsYi7LEBmDF04RLkXQvldml";
export const audience = "https://codeworksclassroom.com";






// export const dev = window.location.origin.includes('localhost')
// export const baseURL = dev ? 'http://localhost:3000' : ''
// export const useSockets = false
// export const domain = ''
// export const clientId = ''
// export const audience = ''
