import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './Components/HomePage.js';
import BagroundAnimation from './Components/BagroundAnimation.js';
function App() {
  return (
    <div className="area min-h-screen w-full absolute z-0" id='area'>
			<BagroundAnimation/>
			<ToastContainer />
              <HomePage/>
		</div>
  );
}

export default App;
