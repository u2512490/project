import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ChatPage from './Pages/ChatPage';

function App() {
  return (
    <div className="App">
      <Route path = "/" component={HomePage} exact />      
      <Route path = "/chats" component={ChatPage}/>      
    </div>
  );
}

export default App;



/* -> "/"  it is for home page 
      -> the exact keyword means it should have compulsorily the same path*/