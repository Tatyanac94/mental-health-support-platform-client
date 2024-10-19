# Mental Health Support Platform

## Author: Tatyana Cuttino

## Description

The Mental Health Support Platform is a user-friendly application designed to provide a safe space for individuals to express their thoughts, share experiences, and seek support. Our mission is to foster a genuine sense of community where users can connect through posts, comments, and interactions that reflect the importance of mental well-being. Unlike traditional platforms, all contributions are permanent, promoting authenticity and encouraging users to engage thoughtfully.

At the heart of our platform is the belief that every voice matters. Users can participate anonymously, allowing for candid discussions about mental health without the pressure of identification.

## How to Run

Clone the repository: <https://github.com/Tatyanac94/mental-health-support-platform-client.git>

Navigate to the project directory:

```bash
cd [project-directory]
```

## Installation Command

Install dependencies using the following command:

```bash
npm install
```

## Set Up Environmental Variables

Create a `.env.local` file in the root directory of the project:

```plaintext
NEXT_PUBLIC_API_URL=https://mental-health-support-platform-server.vercel.app/api
```

## Run the Server

For production:

```bash
npm start
```

For development with auto-reloading:

```bash
npm run dev
```

Open your browser and navigate to <http://localhost:3000> to see the app in action.

## Key Features

- **Support Quiz**: A guided quiz to help users identify their support category, making it easier for them to find relevant forums and discussions.
- **Mental Health Resources**: A dedicated resource page featuring hyperlinks to trusted mental health organizations, providing users with easy access to additional support and information.
- **Forums for Discussion**: A structured forum page where users can add posts and comments, creating a collaborative environment for sharing experiences and advice.
- **Permanent Interactions**: Users cannot edit or delete posts, comments, or likes, promoting authenticity and ensuring that all interactions are final.
- **User-Friendly Interface**: Enjoy an intuitive design for seamless navigation and interaction.
- **Anonymous Participation**: Choose to remain anonymous if users prefer not to disclose their identity.
- **Real-Time Updates**: Experience dynamic engagement with posts, comments, and likes updated in real-time, enhancing user interaction.

## Technologies and Resources Used

- [Mental Health Platform Server](https://mental-health-support-platform-server.vercel.app/): The backend service hosted at deployed-snacks-project.vercel.app, serving as a database of snacks listed in JSON format. ([GitHub Repository](https://github.com/Tatyanac94/mental-health-support-platform-server.git)).

- React: A JavaScript library for building user interfaces.

- Tailwind CSS: A utility-first CSS framework for styling.

- Axios: HTTP client for making requests to the backend API.

- Vercel: Deployment platform for serverless functions and static sites.

- JavaScript: Programming language used for client-side logic.

- Local Storage: Used for storing user preferences such as theme settings.
