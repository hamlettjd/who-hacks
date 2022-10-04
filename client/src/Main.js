import { Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import History from './components/History';

const Main = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Search />} />

      <Route path="/search" element={<Search {...props} />} />

      <Route path="/history" element={<History {...props} />} />
    </Routes>
  );
};

export default Main;
