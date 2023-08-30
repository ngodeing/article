import './index.css';
import Article from './Article';

function App() {
  return (
    <div className="App bg-slate-200 p-5 ">
      <h1 className='font-bold text-3xl text-center mb-3'>Artikel Terbaru Hari Ini</h1>
      <div className="flex justify-center align-middle flex-wrap">
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      </div>
    </div>
  );
}

export default App;
