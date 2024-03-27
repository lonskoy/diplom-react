import React from 'react';
import { useSelector } from 'react-redux';
import { useState, useEffect} from 'react'

function Cart() {
    const item = useSelector(state => state.dataCart.value);
    console.log(`В корзине: ${item}`);

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
                        <tr>
                            {/* <td scope="row">1</td>
                            <td>{item.title}</td>
                            <td>{item.size}</td>
                            <td>{item.count}</td>
                            <td>{item.price} руб.</td>
                            <td>{item.price * item.count} руб.</td>
                            <td><button className="btn btn-outline-danger btn-sm">Удалить</button></td> */}
                        </tr>
                        <tr>
                            <td colSpan="5" className="text-right">Общая стоимость</td>
                            <td>34 000 руб.</td>
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