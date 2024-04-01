import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setCategory } from '../store/sliceCategory';

import '../css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'


function CatalogCategory() {
  const url = 'http://localhost:8080/api/categories';
  const [items, setItems] = useState([]);
  const dispatch = useDispatch()

  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setItems(json))
  }, []);

  const clickHandle = (id) => {
    dispatch(setCategory(id))
  }

  return (
    <ul className="catalog-categories nav justify-content-center">
      <li className="nav-item" >
            <NavLink className={'nav-link'} to={`/items}`}>Все</NavLink>
          </li>
      {items.map(el => {
        const categoryId = el.id;
        return (
          <li className="nav-item" key={el.id} onClick={() =>clickHandle(el.id)}><span style={{cursor: 'pointer'}} className={el.isActive ? 'nav-link active' : 'nav-link'}>{el.title}</span></li>
        )
      })}

    </ul>
  )
}


export default CatalogCategory
