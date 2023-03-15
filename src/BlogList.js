const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview">
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;

// Endpoints used in this project
// 1. /blogs        GET       Fetch all the blogs
// 2. /blogs/{id}   GET       Fetch a single blog
// 3. /blogs        POST      Add a new blog
// 4. /blogs{id}    DELETE    Delete a blog
