import React from 'react';
import Button from "./Button";
import classNames from 'classnames';

const PizzaBlock = ({id, imageUrl, name, types, sizes, price, onClickAddPizza}) => {

    const availableTypes = ['тонкое', 'традиционное'];
    const availableSizes = [26, 30, 40];

    const [activeType, setActiveType] = React.useState(types[0]);
    const [activeSize, setActiveSize] = React.useState(availableSizes.indexOf(sizes[0]));

    const addPizza = () => {
        const obj = {
            id,
            name,
            imageUrl,
            price,
            type: availableTypes[activeType],
            size: availableSizes[activeSize]
        }
        onClickAddPizza(obj);
    }

    return (
        <div className="pizza__block">
            <div>
                <img className="pizza__img" src={imageUrl} alt=""/>
            </div>
            <h3 className="pizza__title">{name}</h3>
            <div className="settings__pizza">
                <ul className="pizza__dough">
                    {availableTypes.map((type, index) => (
                        <li
                            onClick={() => setActiveType(index)}
                            key={type}
                            className={classNames({
                                active: activeType === index,
                                disabled: !types.includes(index),
                            })}>
                            {type}
                        </li>
                    ))}
                </ul>
                <ul className="pizza__size">
                    {availableSizes.map((size, index) => (
                        <li
                            onClick={() => setActiveSize(index)}
                            key={size}
                            className={classNames({
                                active: activeSize === index,
                                disabled: !sizes.includes(size),
                            })}>
                            {size} см.
                        </li>
                    ))}
                </ul>
            </div>
            <div className="pizzas__price">
                <span className="price">от {price} ₽</span>
                <Button className="button-add" onClick={addPizza}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="#EB5A1E"/>
                    </svg>
                    <span className="button-add__content">Добавить</span>
                    <i className="pizza__cart-counter">2</i>
                </Button>
            </div>
        </div>
    );
};

export default PizzaBlock;