import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ItemId() {
    const { id } = useParams();
    const url = `http://localhost:8080/api/items/${id}`;
    const [item, setItem] = useState({});
    const [count, setCount] = useState(1);
    React.useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((json) => setItem(json))
            .catch((error) => console.error('Error fetching item:', error));
    }, []);

    return (
        <section className="catalog-item">
            <h2 className="text-center">{item.title}</h2>
            <div className="row">
                <div className="col-5">
                    {item.images && item.images.length > 0 && (
                        <img src={item.images[0]} className="img-fluid" alt="" />
                    )}
                </div>
                <div className="col-7">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Артикул</td>
                                <td>{item.sku}</td>
                            </tr>
                            <tr>
                                <td>Производитель</td>
                                <td>{item.manufacturer}</td>
                            </tr>
                            <tr>
                                <td>Цвет</td>
                                <td>{item.color}</td>
                            </tr>
                            <tr>
                                <td>Материалы</td>
                                <td>{item.material}</td>
                            </tr>
                            <tr>
                                <td>Сезон</td>
                                <td>{item.season}</td>
                            </tr>
                            <tr>
                                <td>Повод</td>
                                <td>{item.reason}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="text-center">
                        <p>Количество: <span className="btn-group btn-group-sm pl-2">
                            <button className="btn btn-secondary" id="subtract" onClick={() => {
                                if (count > 0) setCount(prev => prev - 1)
                            }
                            }>-</button>
                            <span className="btn btn-outline-primary" id="count">{count}</span>
                            <button className="btn btn-secondary" id="add" onClick={() => setCount(prev => prev + 1)}>+</button>
                        </span>
                        </p>
                    </div>
                    <button className="btn btn-danger btn-block btn-lg">В корзину</button>
                </div>
            </div>
        </section>
    )
}

export default ItemId