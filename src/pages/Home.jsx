import React from 'react';
import Categories from "../components/Categories";
import SortPopup from "../components/SortPopup";
import PizzaBlock from "../components/PizzaBlock";

const Home = () => {
    return (
        <div>
            <div className="settings">
                <Categories
                    items={['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
                    activeCategory={0}/>
                <SortPopup
                    items={['по пулярности', 'по цене', 'по алфавиту']}
                    activeSortType={0}/>
            </div>
            <h2 className="home__title">Все пиццы</h2>
            <div className="pizzas__container">
                <PizzaBlock/>
            </div>
        </div>
    );
};

export default Home;