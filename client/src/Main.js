import { Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import History from './components/History';

const Main = (props) => {
  return (
    <Routes>

      <Route path="/" element={<Search />} />

      <Route path="/search" element={<Search />} />

      <Route path="/history" element={<History />} />

    </Routes>
  );
};

export default Main;
