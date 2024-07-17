import React, { useEffect, useState } from 'react'
import Article from '../../Components/Article/Article'
import { Container } from 'react-bootstrap'
import useArticles from '../../Hooks/useArticles'

const Home = () => {

    const [article, setArticle] = useState([]);
    const { getArticles } = useArticles();

    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        const res = await getArticles(1);

        if (res.data.status === 'OK') {
            setArticle(res.data.results);
        }
    }

    return (
        <div style={{ marginTop: '20px' }}>
            <Container>
                {
                    article.length ? article.map((data) => (
                        <Article
                            title={data.title}
                            subTitle={data.source}
                            description={data.abstract}
                            author={data.byline}
                            img={data.media[0]}
                            url={data.url}
                        />
                    )) : <></>
                }
            </Container>
        </div>
    )
}

export default Home
