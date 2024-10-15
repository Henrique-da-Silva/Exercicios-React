import React, { useState } from 'react'

export default function App() {

  const [comments, setComments] = useState([])
  const [author, setauthor] = useState("")
  const [content, setcontent] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const newComment = {
      id: Math.floor(Math.random() * 1000000),
      author: author,
      content: content,
      createdAt: new Date()
    }

		setComments(state => [newComment, ...state])
    setAuthor("")
    setContent("")
  }

  return (
    <div id='App'>

      <h2>Seção de comentários</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="author">Email</label>
        <input 
          value={author} onChange={(e) => setauthor(e.target.value)}
          type="text" 
          id='author' 
          required
        />
        <label htmlFor="content">Comentário</label>
        <textarea 
          value={content} onChange={(e) => setcontent(e.target.value)}        
          id="content" 
          cols="30" rows="6" 
          required

          ></textarea>
        <button>Enviar Comentário</button>
      </form>

      <section id='coments'>
        
      {comments.length > 0
          ? (
            comments.map((comment) => (
              <div key={comment.id}>
                <h3>{comment.author}</h3>
                <span>Em {comment.createdAt.toLocaleString()}</span>
                <p>{comment.content}</p>
              </div>
            )))
          : (
            <p>Seja o primeiro a comentar!</p>
          )}

      </section>
    </div>
  )
}
