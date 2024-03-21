import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemId from './ItemId';

import '../css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'

function Catalog({ showForm }) {
    const url = 'http://localhost:8080/api/items';
    const [items, setItems] = useState([]);
    const [offset, setOffset] = useState(6);
    const [btnAdd, setBtnAdd] = useState(false);

    const clickHandler = (event) => {
        fetch(`http://localhost:8080/api/items?offset=${offset}`)
            .then((res) => res.json())
            .then((products) => {
                if (products.length < 6) {
                    setBtnAdd(true)
                    console.log('Кнопка в блоке')
                }
                setOffset((prev) => prev + 6);
                setItems((prev) => [...prev, ...products]);
            }).catch((err) => console.log(err))
    }

    React.useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((json) => setItems(json))
    }, []);

    return (
        <section className="catalog">
            <h2 className="text-center">Каталог</h2>

            {showForm && (
                 <form className="catalog-search-form form-inline">
                 <input className="form-control" placeholder="Поиск" />
             </form>
 
            )}
           
            <div className='row'>
                {items.map((el) => {
                    return (
                        <div className='col-4' key={el.id}>
                            <div className="card catalog-item-card" key={el.id}>
                                <img src={el.images[0]} className="card-img-top img-fluid" alt={el.title} />
                                <div className="card-body" >
                                    <p className="card-text">{el.title}</p>
                                    <p className="card-text">{`${el.price} руб.`}</p>
                                    <Link to={`/api/items/${el.id}`} className="btn btn-outline-primary">Заказать</Link> 
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="text-center">
                <button className="btn btn-outline-primary" onClick={clickHandler} disabled={btnAdd}>Загрузить ещё</button>
            </div>

        </section>
    )
}

export default Catalog