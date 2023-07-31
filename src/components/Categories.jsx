import React, {useState} from 'react';

const Categories = ({items, onClickItem}) => {

    const [activeCategory, setActiveCategory] = useState(0);

    const onSelectCategory = (index) => {
        setActiveCategory(index);
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