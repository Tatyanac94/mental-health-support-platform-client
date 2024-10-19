// import React, { useState } from 'react';
// import axios from '../utils/axios';

// const CreatePost = ({ onPostCreated }) => {
//     const [content, setContent] = useState('');
//     const [username, setUsername] = useState(''); // Optional username
//     const [error, setError] = useState(null);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError(null); 

//         try {
//             const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/posts`, { content, forumId, username });
//             onPostCreated(response.data); // Pass the new post object to the handler
//             setContent('');
//             setUsername('');
//         } catch (error) {
//             console.error('Error creating post:', error.response ? error.response.data : error.message);
//             setError('Error creating post: ' + (error.response ? error.response.data.error : error.message));
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit} className="mb-4">
//             <input
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 placeholder="Enter your name (optional)"
//                 className="w-full mb-2 p-2 border rounded"
//             />
//             <textarea
//                 value={content}
//                 onChange={(e) => setContent(e.target.value)}
//                 placeholder="What's on your mind?"
//                 className="w-full p-2 border rounded text-black"
//                 required
//             />
//             <button type="submit" className="mt-2 bg-blue-500 text-white p-2 rounded">
//                 Create Post
//             </button>
//             {error && <div className="text-red-500 mt-2">{error}</div>}
//         </form>
//     );
// };

// export default CreatePost;









import React, { useState } from 'react';
import axios from '../utils/axios';

const CreatePost = ({ onPostCreated, forumId }) => {
    const [content, setContent] = useState('');
    const [username, setUsername] = useState(''); // Optional username
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); 

        if (!content.trim() || !forumId) {
            setError('Content and forumId cannot be empty');
            return;
        }

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/posts`, { content, forumId, username });
            onPostCreated(response.data); // Pass the new post object to the handler
            setContent('');
            setUsername('');
        } catch (error) {
            console.error('Error creating post:', error.response ? error.response.data : error.message);
            setError('Error creating post: ' + (error.response ? error.response.data.error : error.message));
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your name (optional)"
                className="w-full mb-2 p-2 border rounded"
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="What's on your mind?"
                className="w-full p-2 border rounded text-black"
                required
            />
            <button type="submit" className="mt-2 bg-blue-500 text-white p-2 rounded">
                Create Post
            </button>
            {error && <div className="text-red-500 mt-2">{error}</div>}
        </form>
    );
};

export default CreatePost;
