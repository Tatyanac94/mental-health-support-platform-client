import React, { useEffect, useState } from 'react';

const PostDetail = ({ postId }) => {
    const [forum, setForum] = useState({});
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchForumDetailsAndPosts = async (forumId) => {
        try {
            const response = await fetch(`/posts/${forumId}/details`);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to fetch forum details');
            }

            setForum(data.forum);
            setPosts(data.posts);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (postId) {
            fetchForumDetailsAndPosts(postId);
        }
    }, [postId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2 className="text-2xl mb-4">{forum.name}</h2>
            <p>{forum.description}</p>

            <h3 className="text-xl mt-4">Posts:</h3>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h4>{post.title}</h4>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostDetail;














