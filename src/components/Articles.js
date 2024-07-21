import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await axios.get('http://localhost:5000/articles');
      setArticles(response.data);
    };

    fetchArticles();
  }, []);

  return (
    <div>
      {articles.map(article => (
        <div key={article._id}>
          <h2>{article.title}</h2>
          <p>{article.body}</p>
          <p>
            <a href={article.link}>Read more</a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Articles;
