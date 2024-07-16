import axios from 'axios'
import { ARTICLE_API } from '../Utils/API'

const useArticles = () => {
    const getArticles = async (number) => {
        const count = `${number}.json`
        try {
            return await axios.get(ARTICLE_API.GET.replace('PAGE', count));
        } catch (err) {
            console.log("🚀 ~ getArticles ~ err:", err)
        }
    }

    return { getArticles }
}

export default useArticles
