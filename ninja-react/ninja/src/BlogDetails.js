import { useParams } from 'react-router'
import useFetch from './useFetch'

const BlogDetails = () => {
  const { id } = useParams()
  const {
    data: blog,
    error,
    isPending,
  } = useFetch('http://localhost/8000/blogs' + id)
  return (
    <>
      <div className="blog-details">
        <h2>Blog details - {id}</h2>
      </div>
    </>
  )
}

export default BlogDetails
