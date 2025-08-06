// root.js

function Header() {
  return (
    <header>
      <h1>My Blog</h1>
      <p> A blog about everything</p>
    </header>
  );
}


function PublicBlogPost({ title, author, date, content }) {
  return (
    <article className="blog-post">
      <h2>{title}</h2>
      <p className="meta"><strong>Author:</strong> {author}</p>
      <p className="meta"><strong>Date:</strong> {date}</p>
      <p>{content}</p>
    </article>
  );
}


function PrivateBlogPost({ title, author, date }) {
  return (
    <div className="private-posts">
      <h2>{title}</h2>
      <p className="meta"><strong>By:</strong> {author}</p>
      <p className="meta"><em>{date}</em></p>
      <p><em>This blog post is private.</em></p>
    </div>
  );
}


function BlogList({ blogPosts }) {
  return (
    <div className="blog-list">
      {blogPosts.map((post, index) =>
        post.isPrivate ? (
          <PrivateBlogPost
            key={index}
            title={post.title}
            author={post.author}
            date={post.date}
          />
        ) : (
          <PublicBlogPost
            key={index}
            title={post.title}
            author={post.author}
            date={post.date}
            content={post.content}
          />
        )
      )}
    </div>
  );
}


function Footer() {
  return (
    <footer>
      <p>&copy; 2025 My Blog. All rights reserved.</p>
    </footer>
  );
}

function App() {
  const blogPosts = [
    {
      title: 'My First Blog Post',
      author: 'John Doe',
      date: 'June 1, 2023',
      content: 'Welcome to my first blog post! Today, I want to share my journey into the world of blogging. It has been an exciting experience so far, and I can’t wait to see where this path leads me.',
      isPrivate: true
    },
    {
      title: 'My Second Blog Post',
      author: 'Jane Smith',
      date: 'June 5, 2023',
      content: 'In this post, I’m discussing the importance of work-life balance. It’s essential to find time for both professional and personal activities to maintain overall well-being.',
      isPrivate: false
    },
    {
      title: 'A Day in the Life',
      author: 'Alice Johnson',
      date: 'June 10, 2023',
      content: 'Ever wondered what a day in my life looks like? Join me as I walk you through my daily routine, from morning coffee to evening relaxation.',
      isPrivate: false
    },
    {
      title: 'Tips for Healthy Eating',
      author: 'Bob Lee',
      date: 'June 15, 2023',
      content: 'Eating healthy doesn’t have to be complicated. Here are some simple and practical tips to help you make better food choices every day.',
      isPrivate: true
    },
    {
      title: 'Traveling on a Budget',
      author: 'Susan White',
      date: 'June 20, 2023',
      content: 'Dreaming of traveling the world but worried about the cost? This post covers my top tips for seeing new places without breaking the bank.',
      isPrivate: false
    }
  ];
   return (
    <div className="app">
      <Header />
      <BlogList blogPosts={blogPosts} />
      <Footer />
    </div>
  );

};

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />); 
