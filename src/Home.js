import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "Blog1", body: "abc", author: "Author1", id: 1 },
    { title: "Blog2", body: "def", author: "Author1", id: 2 },
    { title: "Blog3", body: "ghi", author: "Author3", id: 3 },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
