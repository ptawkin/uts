import Navigation from "../Navigation/Navigation";
import MessagesList from "../MessagesList/MessagesList";
import Message from "../Message/Message";

import './App.scss';

function App() {
  return (
    <div className="App">
      <Navigation />
      <MessagesList/>
      <Message />
    </div>
  );
}

export default App;
