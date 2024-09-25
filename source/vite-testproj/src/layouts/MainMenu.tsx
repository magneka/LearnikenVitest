import { BrowserRouter, Outlet, Link} from 'react-router-dom'

const MainMenu = () => {

    return (
        <>
            <Link to="home">Home</Link><br/>  
            <Link to="button">Button</Link><br/>   
            <Link to="inputupper">Input</Link><br/>   
            <Link to="customhook">Custom hook</Link><br/>   
            <Link to="fetchexample">Fetch example</Link><br/>    
            <Link to="counterstate">Counter (useState)</Link><br/>              
            <Link to="counterredux">Counter (redux)</Link><br/>                
        </>
    );
};

export default MainMenu;