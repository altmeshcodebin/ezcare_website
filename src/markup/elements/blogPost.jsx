import React, { useState } from 'react';
import CommentList from './CommentList';

const BlogPost = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    // Create a new comment object with necessary data
    const comment = {
      author: 'John Doe', // Replace with the actual user or dynamic value
      content: newComment,
      timestamp: new Date().toLocaleString(),
    };

    // Add the new comment to the comments array
    setComments([...comments, comment]);

    // Clear the input field
    setNewComment('');
  };

  return (
    <div>
      <h1>Blog Post Title</h1>
      <CommentList comments={comments} />
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BlogPost;