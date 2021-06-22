import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Ram krish">
        <p>I am a automation tester</p>
      </Greet>
      <Greet name="Harry"/>
      <Greet name="Ron"/>
      <Welcome name="Ram krish"/>
      <Welcome name="Ron"/>
      <Welcome name="Harry"/> 
      <Message/>*/}
      <Counter/>
    </div>
  );
}

export default App;
