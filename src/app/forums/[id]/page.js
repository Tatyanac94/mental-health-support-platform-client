// "use client";

// import React, { useEffect, useState } from 'react';
// import PostList from '../../../components/postList';
// import CreatePost from '../../../components/postForm'; // Import the CreatePost component
// import { useParams } from 'next/navigation';
// import axios from '../../../utils/axios';

// const ForumDetailPage = () => {
//     const { id } = useParams();
//     const [forum, setForum] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchForumDetails = async () => {
//             try {
//                 const response = await axios.get(`/forums/${id}`);
//                 setForum(response.data);
//             } catch (err) {
//                 setError(err.message);
//             }
//         };

//         fetchForumDetails();
//     }, [id]);

//     if (error) return <div>Error fetching forum details: {error}</div>;
//     if (!forum) return <div>Loading forum details...</div>;

//     // Handler for newly created posts
//     const handlePostCreated = (newPost) => {
//         // You might want to update the post list or do something else here
//         console.log('New post created:', newPost);
//     };

//     return (
//         <div>
//             <h2 className="text-2xl mb-4">{forum.name}</h2>
//             <p>{forum.description}</p>
//             <h3 className="text-xl mt-4">Create a new post:</h3>
//             <CreatePost onPostCreated={handlePostCreated} /> 
//             <h3 className="text-xl mt-4">Posts:</h3>
//             <PostList forumId={id} />
//         </div>
//     );
// };

// export default ForumDetailPage;







"use client";

import React, { useEffect, useState } from 'react';
import PostList from '../../../components/postList';
import CreatePost from '../../../components/postForm'; 
import { useParams } from 'next/navigation';
import axios from '../../../utils/axios';

const ForumDetailPage = () => {
    const { id } = useParams();
    const [forum, setForum] = useState(null);
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchForumDetails = async () => {
            try {
                const response = await axios.get(`/forums/${id}`);
                console.log('Forum details response:', response.data); // Debug log
                setForum(response.data);
                setPosts(response.data.posts || []); // Ensure posts are assigned correctly
            } catch (err) {
                setError(err.message);
            }
        };
        

        fetchForumDetails();
    }, [id]);

    if (error) return <div>Error fetching forum details: {error}</div>;
    if (!forum) return <div>Loading forum details...</div>;

    const handlePostCreated = (newPost) => {
        setPosts((prevPosts) => [newPost, ...prevPosts]);
    };

    return (
        <div>
            <h2 className="text-2xl mb-4">{forum.name}</h2>
            <p>{forum.description}</p>
            <h3 className="text-xl mt-4">Create a new post:</h3>
            <CreatePost onPostCreated={handlePostCreated} forumId={id} /> {/* Pass forumId here */}
            <h3 className="text-xl mt-4">Posts:</h3>
            <PostList posts={posts} />
        </div>
    );
};

export default ForumDetailPage;
