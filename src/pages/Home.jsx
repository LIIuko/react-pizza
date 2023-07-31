import React, {useCallback} from 'react';
import Categories from "../components/Categories";
import SortPopup from "../components/SortPopup";
import PizzaBlock from "../components/PizzaBlock";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../redux/actions/filters";


const CategoriesNames = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const SortNames = [{type: 'popular', name: 'по пулярности'},
    {type: 'price', name: 'по цене'},
    {type: 'alphabet', name: 'по алфавиту'}];

const Home = () => {
    const dispatch = useDispatch();
    const items = useSelector(({pizzas}) => pizzas.items);

    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index))
    }, []);

    const onSelectSort = useCallback((type) => {
        dispatch(setSortBy(type))
    }, []);

    return (
        <div>
            <div className="settings">
                <Categories
                    items={CategoriesNames}
                    onClickItem={onSelectCategory}/>
                <SortPopup
                    items={SortNames}
                    onClickItem={onSelectSort}/>
            </div>
            <h2 className="home__title">Все пиццы</h2>
            <div className="pizzas__container">
                {items && items.map((item) => (
                    <PizzaBlock key={item.id} {...item}/>
                ))}
            </div>
        </div>
    );
};

export default Home;