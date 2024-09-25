import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Counter from '../routedpages/reduxcounter/Counter';
import ButtonPage from '../routedpages/button/ButtonPage';
import Home from '../routedpages/home/Home';
import UseStateCounter from '../routedpages/useStateCounter/useStateCounter';
import InputPage from '../routedpages/input/InputPage'
import Buttonwfetch from '../routedpages/fetchexample/Buttonwfetch'
import ProductsComponent from '../routedpages/customHook/ProductsComponent'

const MainRoutes = () => {

    return (
        <>
            <Routes>
                <Route exact path="/" element ={<Home />}></Route>
                <Route exact path="home" element ={<Home />}></Route>
                <Route exact path="button" element ={<ButtonPage />}></Route>
                <Route exact path="inputupper" element ={<InputPage />}></Route>
                <Route exact path="customhook" element ={<ProductsComponent />}></Route>
                <Route exact path="counterstate" element ={<UseStateCounter />}></Route>
                <Route exact path="counterredux" element ={<Counter />}></Route>
                <Route exact path="fetchexample" element ={<Buttonwfetch />}></Route>
            </Routes>
        </>
    );
};

export default MainRoutes;

