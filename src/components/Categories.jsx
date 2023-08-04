import React from 'react';

const Categories = ({items, onClickItem, activeCategory}) => {

    const onSelectCategory = (index) => {
        onClickItem(index);
    }

    return (
        <ul className="categories">
            {items && items.map((name, index) => (
                <li
                    key={`${name}_${index}`}
                    onClick={() => onSelectCategory(index)}
                    className={activeCategory === index ? 'active' : ''}>
                    {name}</li>
                )
            )}
        </ul>
    );
};

export default Categories;