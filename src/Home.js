import { useState } from "react";
const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "Blog1", body: "abc", author: "Author1", id: 1 },
    { title: "Blog2", body: "def", author: "Author2", id: 2 },
    { title: "Blog3", body: "ghi", author: "Author3", id: 3 },
  ]);

  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
