import React from "react";
import blogData from "../data/blog";
import Header from "../components/Header";
import About from "../components/About";
import ArticleList from "./ArticleList";

console.log(blogData);


function App() {
  const {image, about, name,} = blogData;
  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      <Header name={name}/>
      <About image={image} about={about}/>
      <ArticleList posts={blogData.posts} />
    </div>

  );
}

export default App;
