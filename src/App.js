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
  
  const handleBackClick = () => {
    setSelectedArticle(null);
    setShowPage(false);
  };

  return (
    <div className="App bg-slate-200 p-5">
      {!showPage && (
        <div className="">
          <h1 className='font-bold text-3xl text-center mb-3'>Artikel menarik untuk anda baca</h1>
          <div className="flex justify-center flex-wrap">
          <Article onClick={handleArticleClick} />
          </div>
        </div>
      )}
      {showPage && (
        <div className="flex justify-center ">
        <Page article={selectedArticle} onBackClick={handleBackClick} />
        </div>
      )}
    </div>
  );
}

export default App;
