// // src/app/posts/page.js
// import React from 'react';
// import PostList from '../../components/postList';
// import CreatePost from '../../components/postForm';

// const PostsPage = () => {
//     return (
//         <div>
//             <h2 className="text-2xl mb-4">Posts</h2>
//             <CreatePost />
//             <PostList />
//         </div>
//     );
// };

// export default PostsPage;










// import React, { useState } from 'react';
// import PostList from '../../components/postList';
// import CreatePost from '../../components/postForm';

// const PostsPage = () => {
//     const [posts, setPosts] = useState([]);

//     const handlePostCreated = (newPost) => {
//         setPosts((prevPosts) => [newPost, ...prevPosts]); // Add the new post at the top
//     };

//     return (
//         <div>
//             <h2 className="text-2xl mb-4">Posts</h2>
//             <CreatePost onPostCreated={handlePostCreated} />
//             <PostList posts={posts} />
//         </div>
//     );
// };

// export default PostsPage;








"use client"

import React, { useState } from 'react';
import PostList from '../../components/postList';
import CreatePost from '../../components/postForm';

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    const handlePostCreated = (newPost) => {
        setPosts((prevPosts) => [newPost, ...prevPosts]); // Add the new post at the top
    };

    return (
        <div>
            <h2 className="text-2xl mb-4">Posts</h2>
            <CreatePost onPostCreated={handlePostCreated} />
            <PostList posts={posts} />
        </div>
    );
};

export default PostsPage;
