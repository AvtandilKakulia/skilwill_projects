import mainImg from './assets/main.jpg';
import bearImg from './assets/bear.jpg';
import coffeeImg from './assets/coffee.jpg';
import fogImg from './assets/fog.jpg';
import natureImg from './assets/nature.jpg';
import polarImg from './assets/polar.jpg';
import rockImg from './assets/rock.jpg';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <aside>
        <nav>
          <img src={mainImg} alt="" />
          <h4>portfolio</h4>
          <p>Template by W3.CSS</p>
          <div className="nav-links">
            <a href="#" data-selected="true">
              <i className="fa-duotone fa-regular fa-table-cells-large"></i>
              portfolio
            </a>
            <a href="#">
              <i className="fa-duotone fa-regular fa-user"></i>
              about
            </a>
            <a href="#">
              <i className="fa-duotone fa-regular fa-envelope"></i>
              contact
            </a>
          </div>
          <div className="social-networks">
            <i className="fa-brands fa-square-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-square-snapchat"></i>
            <i className="fa-brands fa-pinterest-p"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin-in"></i>
          </div>
        </nav>
      </aside>
      <main>
        <header>
          <div className="top-line">
            <div className="top-line_menu">
              <i className="fa-sharp fa-solid fa-bars"></i>
            </div>
            <div className="top-line_img">
              <img src={mainImg} alt="" />
            </div>
          </div>
          <div className="main-title">
            <h1>My Portfolio</h1>
          </div>
          <div className="header-buttons">
            <span>filter:</span>
            <button data-selected="true">
              <span>all</span>
            </button>
            <button>
              <i className="fa-sharp fa-regular fa-gem"></i>
              <span>design</span>
            </button>
            <button>
              <i className="fa-sharp fa-regular fa-image"></i>
              <span>photos</span>
            </button>
            <button>
              <i className="fa-sharp fa-solid fa-map-pin"></i>
              <span>art</span>
            </button>
            <div className="devider-line"></div>
          </div>
        </header>
        <section className="cards">
          <div className="card">
            <img src={bearImg} alt="" />
            <div className="card-textContent">
              <p className="card-title">lorem ipsum</p>
              <p className="card-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum officiis, maiores amet debitis vero magni mollitia illo!</p>
            </div>
          </div>
          <div className="card">
            <img src={coffeeImg} alt="" />
            <div className="card-textContent">
              <p className="card-title">lorem ipsum</p>
              <p className="card-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum officiis, maiores amet debitis vero magni mollitia illo!</p>
            </div>
          </div>
          <div className="card">
            <img src={fogImg} alt="" />
            <div className="card-textContent">
              <p className="card-title">lorem ipsum</p>
              <p className="card-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum officiis, maiores amet debitis vero magni mollitia illo!</p>
            </div>
          </div>
          <div className="card">
            <img src={natureImg} alt="" />
            <div className="card-textContent">
              <p className="card-title">lorem ipsum</p>
              <p className="card-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum officiis, maiores amet debitis vero magni mollitia illo!</p>
            </div>
          </div>
          <div className="card">
            <img src={polarImg} alt="" />
            <div className="card-textContent">
              <p className="card-title">lorem ipsum</p>
              <p className="card-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum officiis, maiores amet debitis vero magni mollitia illo!</p>
            </div>
          </div>
          <div className="card">
            <img src={rockImg} alt="" />
            <div className="card-textContent">
              <p className="card-title">lorem ipsum</p>
              <p className="card-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum officiis, maiores amet debitis vero magni mollitia illo!</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
