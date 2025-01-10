'use client'
import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";

interface Comment {
  id: number;
  text: string;
  author: string;
  timestamp: string;
}

export default function CommentsBox() {
  const [comment, setComment] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const savedComments = localStorage.getItem('comments');
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleAuthorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
  };

  const handleCommentSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (comment.trim() && author.trim()) {
      const newComment: Comment = {
        id: Date.now(),
        text: comment,
        author: author,
        timestamp: new Date().toLocaleString(),
      };
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      localStorage.setItem('comments', JSON.stringify(updatedComments));
      setComment('');
      setAuthor('');
    }
  };

  const handleDeleteComment = (id: number) => {
    const updatedComments = comments.filter(comment => comment.id !== id);
    setComments(updatedComments);
    localStorage.setItem('comments', JSON.stringify(updatedComments));
  };

  return (
    <div className="mt-6 flex flex-col justify-center items-center gap-y-4 p-6 bg-gray-50 shadow-sm rounded-lg">
      <div>
        <h1 className="text-2xl mt-5 font-bold text-slate-800">Comments</h1>
      </div>

      <div className="w-full max-w-md">
        <form onSubmit={handleCommentSubmit} className="flex flex-col gap-y-4">
          <input
            type="text"
            placeholder="Your name"
            value={author}
            onChange={handleAuthorChange}
            className="mt-3 w-full px-3 py-2 border border-slate-800 border-solid rounded-md focus:outline-none focus:ring-2 focus:ring-slate-600"
          />
          <input
            type="text"
            placeholder="Comment your thoughts"
            value={comment}
            onChange={handleCommentChange}
            className="mt-3 w-full px-3 py-2 border border-slate-800 border-solid rounded-md focus:outline-none focus:ring-2 focus:ring-slate-600"
          />
          <button
            type="submit"
            className="mt-3 w-full text-white hover:bg-slate-800 font-semibold bg-slate-700 px-4 py-2 rounded-md"
          >
            Add
          </button>
        </form>
      </div>

      <div className="w-full max-w-md mt-6">
        <h2 className="text-xl text-slate-900">All comments:</h2>
        {comments.length === 0 ? (
          <p className="text-slate-600">No comments yet. Add your comment.</p>
        ) : (
          <ul className="mt-4 space-y-4">
            {comments.map((comment) => (
              <li key={comment.id} className="p-4 bg-white shadow-sm rounded-md">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold">{comment.author}</p>
                    <p className="text-sm text-gray-500">{comment.timestamp}</p>
                  </div>
                  <button
                    onClick={() => handleDeleteComment(comment.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </div>
                <p className="mt-2">{comment.text}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}