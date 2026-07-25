import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

import { books, blogs, courses } from "./Data";

function App() {

  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  return (

    <div className="container">

      {

        showCourses &&

        <CourseDetails courses={courses} />

      }

      {

        showBooks ?

        <BookDetails books={books} />

        :

        <h2>No Books Available</h2>

      }

      {

        showBlogs ?

        <BlogDetails blogs={blogs} />

        :

        <h2>No Blogs Available</h2>

      }

    </div>

  );

}

export default App;