import './../index.css';

function Page({ article, onBackClick  }) {
  return (
    <div className='m-2 bg-slate-50 w-6/7 rounded-lg p-5 pt-0 shadow-2xl lg:w-3/5 sm:m-5 sm:p-8 sm:pt-0'>
      <button onClick={onBackClick} className='text-2xl bg-red-500 p-3 mb-5 rounded-b-xl shadow-l font-bold sm:text-4xl sm:p-5'>x</button>
        <h1 className='font-bold text-3xl text-center mb-10'>{article.title}</h1>
        <img src={article.img} alt="Ilustrasi Artikel" className='w-6/7 mx-auto rounded-lg sm:w-4/5' />
        <p className=' paragraphs p-3 mx-auto my-5 sm:p-5'>{article.paragraph}<br></br><br></br><b>Terakhir Diperbarui : {article.updatedAt.substring(0, 10)}</b></p>
    </div>
  )
}

export default Page;