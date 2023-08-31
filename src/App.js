import React, { useState } from "react";
import './index.css';
import Article from './components/Article';
import Page from './components/Page';


function App() {
  const [showPage, setShowPage] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    setShowPage(true);
  };
  return (
    <div className="App bg-slate-200 p-5 ">
      <h1 className='font-bold text-3xl text-center mb-3'>Artikel Terbaru Hari Ini</h1>
      <div className="flex justify-center align-middle flex-wrap">
      {showPage ? <Page article={selectedArticle}/> : <Article onClick={handleArticleClick} />}
      </div>
    </div>
  );
}

export default App;
