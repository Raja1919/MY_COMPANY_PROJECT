import React from 'react';
import './Blog.css'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with React',
      date: 'November 1, 2023',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      title: 'Styling in React Applications',
      date: 'November 5, 2023',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      title: 'State Management in React: A Comprehensive Guide',
      date: 'November 10, 2023',
      content:
        'In this blog post, we will explore different state management solutions in React, including useState, useContext, and Redux. Understanding how to manage state effectively is crucial for building scalable and maintainable React applications.',
    },
    {
      id: 4,
      title: 'Best Practices for React Component Composition',
      date: 'November 15, 2023',
      content:
        'Learn the best practices for composing React components in this comprehensive guide. We will cover topics such as prop drilling, context API, and component composition patterns to help you create modular and reusable code.',
    },
    {
      id: 5,
      title: 'Optimizing Performance in React Applications',
      date: 'November 20, 2023',
      content:
        'Performance is a key consideration when building React applications. In this blog post, we will discuss strategies for optimizing performance, including code splitting, lazy loading, and performance profiling tools.',
    },
  ];

  return (
    <div className="blog-page-container">
      <h1 className='text-center'>Blog</h1>
      {blogPosts.map((post) => (
        <div key={post.id} className="blog-post">
          <h2 className="blog-title">{post.title}</h2>
          <p className="blog-date">{post.date}</p>
          <p className="blog-content">{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
