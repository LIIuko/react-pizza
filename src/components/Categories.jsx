import React from 'react';

const Categories = ({items, activeCategory}) => {
    return (
        <ul className="categories">
            {items && items.map((name, index) => (
                <li
                    key={`${name}_${index}`}
                    onClick={() => console.log("work")}
                    className={activeCategory === index ? 'active' : ''}>
                    {name}</li>
                )
            )}
        </ul>
    );
};

export default Categories;