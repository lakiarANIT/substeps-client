import './App.css';
import Editor from './component/editor';

function App() {
  return (
    <div className="App">
      <div className="flex mt-8">
      <div className="w-1/4 p-4">Content on the left</div>
     <Editor/>
     <div className="w-1/4 p-4">Content on the right</div>
    </div>
    </div>
  );
}

export default App;
