import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../shared/NewsSummuryCard/NewsSummaryCard';

const Category = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            <h1>this is catagory has news: {categoryNews?.length}</h1>
            {
                categoryNews?.map(news => <NewsSummaryCard
                key={news?._id}
                news={news}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Category;