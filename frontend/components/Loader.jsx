import '../css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'

function Loader() {
    return(
        <section class="top-sales">
            <h2 class="text-center">Хиты продаж!</h2>
            <div class="preloader">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </section>
    )
}

export default Loader