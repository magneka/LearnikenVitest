import { BrowserRouter } from 'react-router-dom';
//import { RootContainer } from './styling/RootContainer'
import MasterPage from './layouts/MasterPage'

// This is the extra redux functionality
import store from "./redux/store";
import { Provider } from "react-redux";
//

function App() {

  return (
    <>
     <Provider store={store}>        
          <MasterPage />
     </Provider>
    </>
  )
}

export default App