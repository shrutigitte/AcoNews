import React, { useEffect, useState } from 'react';

const News = ({ category }) => {
    const [articles, setArticles] = useState([]);
    const apikey = 'e7521d37d0b7e645b6432c840f3348d8'; 
    const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&max=10&apikey=${apikey}`;

    useEffect(() => {
        const fetchNews = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setArticles(data.articles);
        };

        fetchNews();
    }, [url, category]); 

    return (
        <div id='news' className="container bg-white my-2 py-5 lg:mx-auto sm:ml-10 p-4">
            <h1 id='pageheading' className="lg:text-5xl text-3xl font-bold mb-4">{category.toUpperCase()} NEWS</h1>
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Articles  */}
                {articles.map((article) => (
                    <div key={article.title} className="border hover:scale-105 bg-white rounded-lg overflow-hidden shadow-lg">
                        <img src={article.image} alt={article.title} className="w-full h-48 " />
                        <div className="p-4">
                            <h2 className="font-semibold text-lg">{article.title}</h2>
                            <p className="text-gray-600">{article.description}</p>
                            <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read more</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default News;