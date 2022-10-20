import React, { useEffect, useState } from 'react';

const LeftSideNav = () => {
    const [categories, setCategories] = useState();
    useEffect(()=>{
        fetch("https://localhost:5000/news-categories")
        .then(res => res.json())
        .then(data => setCategories(data));
    })
    return (
        <div>
            <h4>All Categories: {categories.length}</h4>
        </div>
    );
};

export default LeftSideNav;