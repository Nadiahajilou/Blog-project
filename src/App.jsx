import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import Layout from "./components/layout/Layout";
import BlogPage from "./components/blogs/BlogPage";
import AuthorPage from "./components/authors/AuthorPage";

function App() {
  return (
    <>
      <Layout>

        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/blogs/:slug" element={<BlogPage/>} />
          <Route path="/authors/:slug" element={<AuthorPage/>} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
