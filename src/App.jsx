import "./assets/scss/App.scss";
import Header from "./components/Header";
import Choices from "./components/Choices";
import Rules from "./components/Rules";
import Picking from "./components/Picking";
import Result from "./components/Result";

function App() {
  return (
    <main className="app">
      <Header />
      <Choices />
      <Rules />
      <Picking />
      <Result />
    </main>
  );
}

export default App;
