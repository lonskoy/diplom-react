import { Routes, Route, NavLink, Link, useLocation } from 'react-router-dom'
import Home from '../components/Home.jsx'
import Catalog from '../components/Catalog.jsx'
import Aboute from '../components/Aboute.jsx'
import Contacts from '../components/Contacts.jsx'
import ItemId from '../components/ItemId.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Cart from '../components/Cart.jsx'
import UndefinedPage404 from '../components/UndefinedPage404.jsx'

import '../css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'


export default function Index() {
  const location = useLocation();
  const isCatalogFormVisible = location.pathname === '/catalog';

  return (
    <>
      <Header />
        <main className="container">
          <div className="row">
            <div className="col">
              <div className="banner">
              <img src="../img/banner.jpg" className="img-fluid" alt="К весне готовы!" style={{width: '100%'}}/>
               <h2 className="banner-header">К весне готовы!</h2>
              </div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog showForm={isCatalogFormVisible} />} />
                <Route path="/aboute" element={<Aboute />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/items/:id" element={<ItemId />} />
                <Route path="/items/:categoryId" element={<Catalog showForm={isCatalogFormVisible} />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<UndefinedPage404 />} />
              </Routes>

            </div>
          </div>
      </main>
      <Footer />

    </>
  )
}