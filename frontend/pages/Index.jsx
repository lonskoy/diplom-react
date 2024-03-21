import { Routes, Route, NavLink, Link, useLocation } from 'react-router-dom'
import Home from '../components/Home.jsx'
import Catalog from '../components/Catalog.jsx'
import Aboute from '../components/Aboute.jsx'
import Contacts from '../components/Contacts.jsx'
import ItemId from '../components/ItemId.jsx'

import '../css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'


export default function Index() {
  const location = useLocation();
  const isCatalogFormVisible = location.pathname === '/api/catalog';
  return (
    <>
      <header className="container">
        <div className="row">
          <div className="col">
            <nav className="navbar navbar-expand-sm navbar-light bg-light">      
              <Link className="navbar-brand" to="/">
                <img src='../img/header-logo.png' alt="Bosa Noga" />
              </Link>
              <div className="collapse navbar-collapse" id="navbarMain">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <NavLink className="nav-link" to="/">Главная</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/api/catalog">Каталог</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/api/aboute">О магазине</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/api/contacts">Контакты</NavLink>
                  </li>
                </ul>
                <div>
                  <div className="header-controls-pics">
                    <div data-id="search-expander" className="header-controls-pic header-controls-search"></div>
                    {/* Do programmatic navigation on click to /cart.html  */}
                    <div className="header-controls-pic header-controls-cart">
                      <div className="header-controls-cart-full">1</div>
                      <div className="header-controls-cart-menu"></div>
                    </div>
                  </div>
                  <form data-id="search-form" className="header-controls-search-form form-inline invisible" action='#' method='POST' >
                    <input className="form-control" placeholder="Поиск" />
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <main className="container">

      <div className="row">
        <div className="col">
          <div className="banner">
            <img src="../img/banner.jpg" className="img-fluid" alt="К весне готовы!"/>
            <h2 className="banner-header">К весне готовы!</h2>
          </div>
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api/catalog" element={<Catalog showForm={isCatalogFormVisible}  />} />
          <Route path="/api/aboute" element={<Aboute />} />
          <Route path="/api/contacts" element={<Contacts />} />
          <Route path="/api/items/:id" element={<ItemId />} />
        </Routes>

        </div>
        </div>
      </main>

      <footer className="container bg-light footer">
        <div className="row">
          <div className="col">
            <section>
              <h5>Информация</h5>
              <ul className="nav flex-column">
                <li className="nav-item"><NavLink className="nav-link" to="/">О магазине</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/api/catalog">Каталог</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/api/contacts">Контакты</NavLink></li>
              </ul>
            </section>
          </div>
          <div className="col">
            <section>
              <h5>Принимаем к оплате:</h5>
              <div className="footer-pay">
                <div className="footer-pay-systems footer-pay-systems-paypal"></div>
                <div className="footer-pay-systems footer-pay-systems-master-card"></div>
                <div className="footer-pay-systems footer-pay-systems-visa"></div>
                <div className="footer-pay-systems footer-pay-systems-yandex"></div>
                <div className="footer-pay-systems footer-pay-systems-webmoney"></div>
                <div className="footer-pay-systems footer-pay-systems-qiwi"></div>
              </div>
            </section>
            <section>
              <div className="footer-copyright">2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и аксессуаров.
                Все права защищены.<br />Доставка по всей России!
              </div>
            </section>
          </div>
          <div className="col text-right">
            <section className="footer-contacts">
              <h5>Контакты:</h5>
              <a className="footer-contacts-phone" href="tel:+7-495-790-35-03">+7 495 79 03 5 03</a>
              <span className="footer-contacts-working-hours">Ежедневно: с 09-00 до 21-00</span>
              <a className="footer-contacts-email" href="mailto:office@bosanoga.ru">office@bosanoga.ru</a>
              <div className="footer-social-links">
                <div className="footer-social-link footer-social-link-twitter"></div>
                <div className="footer-social-link footer-social-link-vk"></div>
              </div>
            </section>
          </div>
        </div>
      </footer>
    </>
  )
}