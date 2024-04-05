# Maskify

Maskify is an anonymous expression platform with social connectivity, designed to allow users to freely share their thoughts, opinions, and secrets without revealing their identity. The platform facilitates interactions between anonymous users, including the ability to chat with each other while maintaining complete anonymity.

## Technologies Used
- React: A JavaScript library for building user interfaces.
- Express: A minimal and flexible Node.js web application framework.
- MongoDB: A document-oriented NoSQL database used for storing user data and content.
- Socket.io: A library that enables real-time, bidirectional and event-based communication between web clients and servers.
- Bcrypt: A library for hashing passwords to ensure secure user authentication.
- Axios: A promise-based HTTP client for making HTTP requests from the browser and Node.js.

## Features
- **Anonymous Posting**: Users can post their thoughts, opinions, and secrets anonymously without revealing their identity.
- **Social Connectivity**: Users can interact with each other anonymously, including the ability to like, comment, and chat.
- **Real-time Chat**: Anonymous users can engage in real-time chat conversations with each other within the platform.
- **User Authentication**: Authentication mechanisms are implemented to ensure the security and privacy of user accounts.

## Installation
To run Maskify locally, follow these steps:

1. Clone the repository: `git clone <repository_url>`
2. Navigate to the project directory: `cd Maskify`
3. Install dependencies for both the client and server:
   - Client: `cd client && npm install`
   - Server: `cd server && npm install`
4. Configure MongoDB:
   - Create a MongoDB Atlas account or set up a local MongoDB instance.
   - Update the MongoDB connection string in the server configuration.
5. Start the client and server:
   - Client: `cd client && npm start`
   - Server: `cd server && npm start`

## Contributing
Contributions to Maskify are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/new-feature`
3. Make your changes and commit them: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
Special thanks to the creators of React, Express, MongoDB, Socket.io, Bcrypt, and Axios for providing the tools necessary to build this platform.

## Contact
For any inquiries or support, please contact [kmrayush7502@gmail.com].
