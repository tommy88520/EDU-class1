import { useState, useEffect } from 'react'
import BlogList from './BlogList'

const Home = () => {
  const [blogs, setBlogs] = useState(null)

  const [name, setName] = useState('mario')
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => {
      return blog.id !== id
    })
    setBlogs(newBlogs)
  }

  useEffect(async () => {
    fetch('http://localhost:8000/blogs')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
      })
  }, [name])

  console.log('blogs:', blogs)

  return (
    <>
      <BlogList
        blogs={blogs}
        setBlogs={setBlogs}
        title="HowHow"
        handleDelete={handleDelete}
      />
      <button
        onClick={() => {
          return setName('jake')
        }}
      >
        change name
      </button>
      <p>{name}</p>
      {/* <BlogList
        blogs={blogs.filter((blog) => {
          return blog.author === 'mario'
        })}
        setBlogs={setBlogs}
        title="HowHow"
        handleDelete={handleDelete()}
      /> */}
    </>
  )

  // return (
  //   <div className="home">
  //     {blogs.map((blog) => (
  //       <div className="blog-preview" key={blog.id}>
  //         <h2>{blog.title}</h2>
  //         <p>{blog.author}</p>
  //       </div>
  //     ))}
  //   </div>
  // )
}

export default Home
