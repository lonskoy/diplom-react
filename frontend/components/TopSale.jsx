import React, { useState } from 'react'


import '../css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'

function TopSale() {
    const url = 'http://localhost:8080/api/top-sales';
    const [items, setItems] = useState([]);
  
    React.useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((json) => setItems(json))
    }, []);
    
    return (
        <section className='top-sales'>
        <h2 className="text-center" style={{ margin: '30px 0' }}>Хиты продаж! </h2>
            <div className='row'>
                {items.map(el => {
                    return (
                        <div className='col-4' key={el.id}>
                            <div className="card catalog-item-card" key={el.id}>
                                <img src={el.images[0]} className="card-img-top img-fluid" alt={el.title} />
                                <div className="card-body" >
                                    <p className="card-text">{el.title}</p>
                                    <p className="card-text">{`${el.price} руб.`}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            </section>
    )
}

export default TopSale