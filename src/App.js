import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://blog.matcharesident.com/wp-content/uploads/2019/07/iStock-944453634-750x450.jpg"></img>
      </header>
      <nav className="nav">
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className="content">
        <div>
          <img src="https://lh3.googleusercontent.com/proxy/wBSbX6PluWaLUubAqHY7PGu5LIhRhkiGeLumggi6H12YEWB4AkcgLgyDhIwAK4CVBGQSQryrw4VBd4yZxBhyos4BHMQQkDitZ0syNZERIZD6gMed9tyAiwKFKoy2_Q8psR6owwHv"></img>
        </div>
        <div>ava + description</div>
        <div>
          My posts
          <div>New post</div>
          <div>
            <div>post1</div>
            <div>post2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
