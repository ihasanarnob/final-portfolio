import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from "./Pages/About/About";
import Blog1 from "./Pages/Blogs/Blog1";
import Blog2 from "./Pages/Blogs/Blog2";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home/Home";
import Menubar from "./Pages/Menubar/Menubar";
import Project1 from "./Pages/Projects/Project1";
import Project2 from "./Pages/Projects/Project2";
import Project3 from "./Pages/Projects/Project3";
import Project4 from "./Pages/Projects/Project4";
import Projects from "./Pages/Projects/Projects";


function App() {
  return (
    <div className="">

      <Router>
        <Menubar></Menubar>
        <Switch>
          <Route exact path="/"><Home></Home> </Route>
          <Route path="/home"> <Home></Home> </Route>
          <Route path="/projects"> <Projects></Projects> </Route>
          <Route path="/contact"> <Contact></Contact> </Route>
          <Route path="/about"> <About></About> </Route>
          <Route path="/blogs"> <Blogs></Blogs> </Route>
          <Route path="/blog1"> <Blog1></Blog1> </Route>
          <Route path="/blog2"> <Blog2></Blog2> </Route>
          <Route path="/project1"> <Project1></Project1> </Route>
          <Route path="/project2"> <Project2></Project2> </Route>
          <Route path="/project3"> <Project3></Project3> </Route>
          <Route path="/project4"> <Project4></Project4> </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
