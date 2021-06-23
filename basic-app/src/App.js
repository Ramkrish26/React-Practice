import './App.css';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import ConditionalRendering from './components/ConditionalRendering';
import NameList from './components/NameList';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Ram krish">
        <p>I am a automation tester.</p>
      </Greet>
      <Welcome name="Ram krish"/>
      <FunctionClick/>
      <ClassClick/>
      <EventBind/>
      <Greet name="Harry"/>
      <Greet name="Ron"/>
      <Welcome name="Ram krish"/>
      <Welcome name="Ron"/>
      <Welcome name="Harry"/> 
      <Message/>
      <Counter/>
      <ParentComponent/>
      <ConditionalRendering/>*/}
      <NameList/>
    </div>
  );
}

export default App;
