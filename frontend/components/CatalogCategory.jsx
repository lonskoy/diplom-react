import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'

import '../css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'


function CatalogCategory() {
  const url = 'http://localhost:8080/api/categories';
  const [items, setItems] = useState([]);

  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setItems(json))
  }, []);

  return (
    <ul className="catalog-categories nav justify-content-center">
      {items.map(el => {
        const categoryId = el.id;
        return (
          <li className="nav-item" key={el.id}>
            <NavLink className={el.isActive ? 'nav-link active' : 'nav-link'} to={`items?${categoryId}`}>{el.title}</NavLink>
          </li>
        )
      })}

    </ul>
  )
}

export default CatalogCategory
