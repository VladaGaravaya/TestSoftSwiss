import Header from "./components/Header/Header";
import Container from "./components/Container/Container";

import { ReactComponent as RocketIcon } from "./images/rocket.svg";

import "./App.scss";
import Banner from "./components/Banner/Banner";
import Offers from "./components/Offers/Offers";

function App() {
  return (
    <div id="app">
      <nav>
        <Container>
          <Header />
        </Container>
      </nav>
      <main>
        <Container>
          <Banner />
        </Container>
      </main>
      <section>
        <Container>
          <Offers />
        </Container>
      </section>
      <footer>
        <RocketIcon />
        <p>Exciting space adventure!</p>
      </footer>
    </div>
  );
}

export default App;
