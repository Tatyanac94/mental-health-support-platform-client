import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';

const Comments = ({ postId, existingComments }) => {
    const [comments, setComments] = useState(existingComments || []);
    const [newComment, setNewComment] = useState('');
    const [username, setUsername] = useState(''); 
    const [error, setError] = useState(''); 

    const formatDate = (utcDateString) => {
        const date = new Date(utcDateString);
        return date.toLocaleString(); 
    };

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get(`/comments/posts/${postId}/comments`);
                setComments(response.data);
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        };

        fetchComments();
    }, [postId]);

    const handleAddComment = async (e) => {
        e.preventDefault();

        if (!newComment) {
            setError('Comment cannot be empty');
            return;
        }

        try {
            const response = await axios.post(`/comments/posts/${postId}/comments`, {
                content: newComment,
                username: username || undefined,
            });

            const newCommentData = {
                ...response.data,
                timestamp: new Date().toISOString(),
            };

            setComments((prevComments) => [...prevComments, newCommentData]);
            setNewComment('');
            setUsername('');
            setError('');
        } catch (error) {
            console.error('Error creating comment:', error.response ? error.response.data : error.message);
            setError('Failed to add comment. Please try again.');
        }
    };

    useEffect(() => {
        setComments(existingComments || []);
    }, [existingComments]);

    return (
        <div className="text-black">
            <h3>Comments</h3>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleAddComment}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Your name (optional)"
                    className="border border-blue-500 rounded p-2 mb-2 w-full"
                />
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment..."
                    className="border border-blue-500 rounded p-2 mb-2 w-full"
                />
                <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2">Submit</button>
            </form>
            <ul className="mt-4">
                {comments.map((comment) => (
                    <li key={comment.id || comment.timestamp}>
                        <p>{comment.username || 'Anonymous'}: {comment.content} <small>{formatDate(comment.timestamp)}</small></p>
                        <hr className="border-t border-blue-500 my-2" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Comments;
