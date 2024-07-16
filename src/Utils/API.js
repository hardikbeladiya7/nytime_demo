const baseURL = process.env.REACT_APP_API_BASE_URL;
const middlePoint = "svc/mostpopular/v2/viewed";
const apiKey = process.env.REACT_APP_API_SECRET_KEY;

export const ARTICLE_API = {
    GET: `${baseURL}/${middlePoint}/PAGE?api-key=${apiKey}`
};