import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Books from './components/Books';
import Categories from './components/Categories';

const App = () => (
  <div className="App">
    <Header />
    <Routes>
      <Route exact path="/" element={<Books />} />
      <Route exact path="/categories" element={<Categories />} />
    </Routes>
  </div>
);

export default App;
