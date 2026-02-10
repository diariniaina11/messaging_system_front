import Message from './components/contents/messages/Message';
import SideBar from './components/sidebar/sideBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SideBar></SideBar>
        <Message></Message>
      </header>
    </div>
  );
}

export default App;
