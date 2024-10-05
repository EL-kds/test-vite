

const book = (props) => {
    const {id, title, author,number,getBook,img} = props
  return (
    <article className='book'>
        <img src={img} alt={title}/>
        <h2>{title}</h2>
        <button onClick={()=>getBook(id)}>click me</button>
        <h4>{author}</h4>
        <span className='number'>#{number+1}</span>
    </article>
  )
}

export default book