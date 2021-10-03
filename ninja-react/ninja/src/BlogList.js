import { Link } from 'react-router-dom'
const BlogList = (props) => {
  const { blogs, setBlogs, title, handleDelete } = props
  //   console.log(props)

  return (
    <>
      {blogs.map((v, i) => {
        return (
          <div className="blog-list" key={v.id}>
            <div className="blog-preview">
              <Link to={`/blogs/${v.id}`}>
                <h2>{v.title}</h2>
                <p>{title}</p>
                <p>{v.author}</p>
              </Link>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default BlogList
