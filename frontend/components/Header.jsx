import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setValue } from '../store/slice.js'

function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const countCart = useSelector(state => state.cartCounter.value)

    const clickHandler = (event) => {
        const searchForm = document.querySelector('[data-id="search-form"]');

        if (searchForm.classList.contains('invisible')) {      //Переделать что бы работало через локальное состояние
            searchForm.classList.remove('invisible');
            searchForm.classList.add('header-controls-search-form', 'form-inline');
        } 
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const value = event.target.headerSearch.value;
            dispatch(setValue(value));
            navigate('/catalog');
    }

    const cartHandler = (event) => {
        event.preventDefault();
        navigate('/cart');
    }

    return (
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
                                    <NavLink className="nav-link" to="/catalog">Каталог</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/aboute">О магазине</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contacts">Контакты</NavLink>
                                </li>
                            </ul>
                            <div>
                                <div className="header-controls-pics">
                                    <div data-id="search-expander" className="header-controls-pic header-controls-search" onClick={clickHandler} />
                                    {/* Do programmatic navigation on click to /cart.html  */}
                                    <div className="header-controls-pic header-controls-cart" onClick={cartHandler}>
                                        <div className="header-controls-cart-full">{countCart}</div>
                                        <div className="header-controls-cart-menu"></div>
                                    </div>
                                </div>
                                <form data-id="search-form" className="header-controls-search-form form-inline invisible"  onSubmit={submitHandler} >
                                    <input className="form-control" placeholder="Поиск" id='headerSearch' />
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header