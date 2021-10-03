const BlogList = (props) => {
  const { blogs, setBlogs, title, handleDelete } = props
  //   console.log(props)

  return (
    <>
      {blogs.map((v, i) => {
        return (
          <div className="blog-list" key={v.id}>
            <div className="blog-preview">
              <h2>{v.title}</h2>
              <p>{title}</p>
              <p>{v.author}</p>
              <button
                onClick={() => {
                  handleDelete(v.id)
                }}
              >
                Delete blog
              </button>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default BlogList
