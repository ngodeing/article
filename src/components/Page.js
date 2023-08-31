import './../index.css';

function Page({ article, onBackClick  }) {
  return (
    <div className='m-5 sm:w-3/5 bg-slate-50 rounded-lg p-8 pt-0 shadow-2xl'>
      <button onClick={onBackClick} className='text-4xl bg-red-500 p-5 mb-5 rounded-b-xl shadow-l font-bold'>x</button>
        <h1 className='font-bold text-3xl text-center mb-10'>{article.title}</h1>
        <img src={article.img} alt="Ilustrasi Artikel" className='w-4/5 mx-auto rounded-lg' />
        <p className=' paragraphs p-5 mx-auto my-5'>{article.paragraph}</p>
    </div>
  )
}

export default Page;