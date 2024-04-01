import React, { useState } from 'react'
import CatalogCategory from './CatalogCategory';
import TopSale from './TopSale.jsx';
import Catalog from './Catalog';


import '../css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'

function Home() {
    return (
        <section className="row">
            <TopSale />
            <CatalogCategory />
            <Catalog />
        </section>
    )
}

export default  Home