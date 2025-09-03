# Chat App - Real-time Messaging Application
  A sleek, responsive web-based chat application built with Node.js, Express, and Socket.IO that enables real-time messaging with room support.

  ## Features

- **Real-time Messaging**: Instant message delivery using WebSocket connections
- **Room Support**: Join specific chat rooms for private conversations
- **User Identification**: Randomly generated usernames for participant identification
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, gradient-based interface with smooth animations
- **System Notifications**: Get notified when users join rooms

## Demo

    To test the application:
        1. Open the application in multiple browser tabs
        2. Join the same room ID in each tab
        3. Start chatting in real-time!
        
  **Link to Chat_App**: https://chat-app-wx27.onrender.com

## Installation & Setup

  ### Prerequisites
  - Node.js (v12 or higher)
  - npm (Node Package Manager)
  
  ### Steps
  
  1. **Clone the repository**
      git clone <your-repository-url>
      cd chat-app
     
  2. **Install dependencies**
      npm install express socket.io
    
  3. **Start the server**
       node server.js

## Project Structure
      chat-app/
      ├── server.js          # Express server with Socket.IO configuration
      ├── index.html         # Frontend HTML with embedded CSS and JavaScript
      └── package.json       # Project dependencies
  
## Usage
  ### Joining a Room:
    Enter a room ID in the input field
    Click "Join Room" or press Enter
  
  ### Sending Messages:
    Type your message in the input field at the bottom
    Click "Send" or press Enter to deliver your message
  
  ### Testing:
    Open multiple browser windows/tabs
    Join the same room in each instance
    Messages will appear in real-time across all connected clients

## Code Overview
  ### Server-Side (Node.js/Express)
    Sets up an HTTP server with Express
    Configures Socket.IO for real-time communication
    Handles room joining and message broadcasting
  
  ### Client-Side
    Single HTML file with embedded CSS and JavaScript
    Connects to the server using Socket.IO client library
    Manages user interface and message rendering

## API Reference
  ### Socket Events
    Client to Server
      join-room: Join a specific chat room
      message: Send a message to the current room
    
    Server to Client
      new-message: Receive new messages from other users
      user-joined: Notification when a user joins the room

## Contributing
      Fork the project
      Create your feature branch (git checkout -b feature/AmazingFeature)
      Commit your changes (git commit -m 'Add some AmazingFeature')
      Push to the branch (git push origin feature/AmazingFeature)
      Open a Pull Request


## Acknowledgments
  Built with Express.js
  Real-time functionality powered by Socket.IO
  UI inspired by modern messaging applications


  
