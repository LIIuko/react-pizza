import React, {useCallback, useEffect} from 'react';
import Categories from "../components/Categories";
import SortPopup from "../components/SortPopup";
import PizzaBlock from "../components/PizzaBlock";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";
import LoadingBlock from "../components/LoadingBlock";


const CategoriesNames = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const SortNames = [{type: 'rating', name: 'по пулярности'},
    {type: 'price', name: 'по цене'},
    {type: 'name', name: 'по алфавиту'}];

const Home = () => {
    const dispatch = useDispatch();
    const {items, isLoaded} = useSelector(({pizzas}) => pizzas);
    const {category, sortBy} = useSelector(({filters}) => filters);

    useEffect(() => {
        dispatch(fetchPizzas(category, sortBy))
    }, [category, sortBy])

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
                {isLoaded ?
                    items.map((item) => (
                        <PizzaBlock key={item.id} {...item}/>
                    ))
                    :
                    Array(12).fill(0).map((_, index) => (
                        <LoadingBlock key={index}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Home;