import './../index.css';

function Page({ article }) {
  return (
    <div className='m-5'>
        <h1 className='font-bold text-3xl text-center mb-3'>{article.title}</h1>
        <p className=' bg-slate-50 p-5 w-3/5 mx-auto my-5 rounded-lg'>{article.paragraph}</p>
    </div>
  )
}

export default Page;