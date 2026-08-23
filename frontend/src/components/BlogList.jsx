import Blog from './Blog'


const BlogList = ({ blogs, user }) => {
  const sortedBlogs = [...blogs].sort((a, b) => b.likes - a.likes)

  return (
    <div style={{ marginLeft: '5px' }}>
      <h2>blogs</h2>
      {
        sortedBlogs.map(sortedBlog =>
          <Blog
            key={sortedBlog.id}
            blog={sortedBlog}
            user={user}
          />
        )
      }
    </div>
  )
}

export default BlogList