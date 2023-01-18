import { Routes, Route } from 'react-router-dom';
import Page from './Page';
import SinglePage from './SinglePage';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/page/:id" element={<SinglePage />} />
      </Routes>
    </>
  );
}
