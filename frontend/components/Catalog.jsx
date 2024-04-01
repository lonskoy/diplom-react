    import React, { useState } from 'react'
    import { Link } from 'react-router-dom';
    import { useSelector, useDispatch } from 'react-redux'
    import { setValue } from '../store/slice.js';


    import '../css/style.css'
    import 'bootstrap/dist/css/bootstrap.min.css';
    import '@fortawesome/fontawesome-free/css/all.min.css'

    function Catalog({ showForm }) {
        const url = `http://localhost:8080/api/items`;
        const [items, setItems] = useState([]);
        const [offset, setOffset] = useState(6);
        const [btnAdd, setBtnAdd] = useState(false);
        const search = useSelector(state => state.searchValue.value);
        const dispatch = useDispatch();
        const categoryActive = useSelector(state => state.category.value);


        React.useEffect(() => {
            let link = url 
            if(categoryActive) {
                link = `${link}?categoryId=${categoryActive}`
            }
            console.log(link)
            fetch(link)
                .then((res) => res.json())
                .then((json) => setItems(json))
        }, [categoryActive]);

        const clickHandlerOffset = (event) => {
            const query = new URLSearchParams(); //Изучить
            query.append('offset', offset)
            if(categoryActive) {
                query.append('categoryId', categoryActive)
            }
            if (search.trim().length > 0) {
                query.append('q', search)
            }

                fetch(`http://localhost:8080/api/items?${query}`)
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

        const submitHandler = (event) => {
            event.preventDefault();
            fetch(`http://localhost:8080/api/items?q=${search}&offset=${offset}`)
                .then((res) => res.json())
                .then((products) => {
                    setItems(products)
                })
        }

        const handleSearchChange = (event) => {
            const query = event.target.value.trim().toLowerCase(); // Получаем значение из события и нормализуем его
            dispatch(setValue(query));
        };

        return (
            <section className="catalog">
                <h2 className="text-center" style={{ margin: '30px 0' }}>Каталог</h2>

                {showForm && (
                    <form className="catalog-search-form form-inline" data-id="search-form" onSubmit={submitHandler}>
                        <input
                            className="form-control"
                            placeholder="Поиск"
                            value={search}
                            onChange={handleSearchChange}
                        />
                    </form>
                )}

                <div className='row'>
                    {items.map((el) => {
                        return (
                            <div className='col-4' key={el.id}>
                                <div className="card catalog-item-card" key={el.id}>
                                    <div style={{ width: '100%', height: '500px', overflow: 'hidden' }}>
                                        <img src={el.images[0]} className="card-img-top img-fluid" alt={el.title} />
                                    </div>
                                    <div className="card-body" >
                                        <p className="card-text">{el.title}</p>
                                        <p className="card-text">{`${el.price} руб.`}</p>
                                        <Link to={`/items/${el.id}`} className="btn btn-outline-primary">Заказать</Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center">
                    <button className="btn btn-outline-primary" onClick={clickHandlerOffset} disabled={btnAdd}>Загрузить ещё</button>
                </div>

            </section>
        )
    }

    export default Catalog