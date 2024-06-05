import "./App.css";
import Header from "./components/Header/Header";
import { Outlet } from 'react-router-dom';
import { MainBody } from './style/GlobalStyle';

function App() {
  return (
    <>
      <Header />
      <MainBody>
        <Outlet />
      </MainBody >
    </>
  );
}

export default App;
