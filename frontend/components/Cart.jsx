import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { minusCartCounter } from '../store/sliceCartCounter';
import { minusCart } from '../store/sliceCart';

function Cart() {
    const dispatchCountCart = useDispatch();
    const dispatchCart = useDispatch();
    const data = JSON.parse(JSON.stringify(useSelector(state => state.dataCart.data)));
    const [items, setItems] = useState(data);

    const [totalPrice, setTotalPrice] = useState(0); // Состояние для общей стоимости

    const handleDelete = (id) => {
        const updatedItems = items.filter(item => item.id !== id);
        setItems(updatedItems);
        dispatchCountCart(minusCartCounter()); // Уменьшаем глобальный счетчик возле иконки корзины
    };

    useEffect(() => {
        // Вычисляем общую стоимость при изменении items
        const total = items.reduce((acc, el) => acc + (el.price * el.count), 0);
        setTotalPrice(total);
        dispatchCart(minusCart(items)); // Обновляем глобальное хранилище с корзиной
    }, [items]);


    return (
        <>
            <section className="cart">
                <h2 className="text-center">Корзина</h2>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Название</th>
                            <th scope="col">Размер</th>
                            <th scope="col">Кол-во</th>
                            <th scope="col">Стоимость</th>
                            <th scope="col">Итого</th>
                            <th scope="col">Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((el, index) => {
                            return (
                                <tr key={el.id}>
                                    <td scope="row">{index + 1}</td>
                                    <td>{el.title}</td>
                                    <td>{el.size}</td>
                                    <td>{el.count}</td>
                                    <td>{el.price} руб.</td>
                                    <td>{el.price * el.count} руб.</td>
                                    <td><button className="btn btn-outline-danger btn-sm" onClick={() => handleDelete(el.id)}>Удалить</button></td>
                                </tr>
                            )

                        })}
                        <tr>
                            <td colSpan="5" className="text-right">Общая стоимость</td>
                            <td>{totalPrice}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="order">
                <h2 className="text-center">Оформить заказ</h2>
                <div className="card" style={{ maxWidth: '30rem', margin: '0 auto' }}>
                    <form className="card-body">
                        <div className="form-group">
                            <label htmlFor="phone">Телефон</label>
                            <input className="form-control" id="phone" placeholder="Ваш телефон" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Адрес доставки</label>
                            <input className="form-control" id="address" placeholder="Адрес доставки" />
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="agreement" />
                            <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
                        </div>
                        <button type="submit" className="btn btn-outline-secondary">Оформить</button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Cart;