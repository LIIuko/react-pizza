import React, {useEffect, useState} from 'react';
import classNames from "classnames";

const Categories = ({items, onClickItem, activeCategory}) => {

    const onSelectCategory = (index) => {
        onClickItem(index);
    }

    const [openCategories, setOpenCategories] = useState(false)
    const categoriesRef = React.useRef();
    const [smallScreen, setSmallScreen] = useState(false);

    const resize = () => {
        setSmallScreen(document.documentElement.clientWidth < 1190);
    }

    useEffect(() => {
        window.addEventListener("resize", resize)
    }, [])

    const toggleCategories = () => {
        setOpenCategories(!openCategories)
    }

    const handleOutsideClickCat = (event) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(categoriesRef.current)) {
            setOpenCategories(false);
        }
    };

    useEffect(() => {
        document.body.addEventListener("click", handleOutsideClickCat);
    }, [])


    const classNameList = classNames('categories', {
        small: smallScreen,
        active: openCategories
    })

    return (
        <div className={"categories__container"}>
            <div
                className={classNames('small-screen-categories', {
                     active: smallScreen
                 })}
                >
                Категории:
            </div>
            {smallScreen &&
                <span
                    ref={categoriesRef}
                    className={"categories__value"}
                    onClick={toggleCategories}>
                {items[activeCategory]}
            </span>
            }
            <ul
                className={classNameList}>
                {items && items.map((name, index) => (
                    <li
                        key={`${name}_${index}`}
                        onClick={() => onSelectCategory(index)}
                        className={activeCategory === index ? 'active' : ''}>
                        {name}</li>
                    )
                )}
            </ul>
        </div>
    );
};

export default Categories;