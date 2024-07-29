![Challenge Banner](h1.jpg)

# AI Language Utilities App

Welcome to the AI Language Utilities App, a powerful tool designed to break language barriers using advanced AI technologies. This app provides real-time text translation and summarization features, making it a versatile solution for communication and information processing.

## Features

- **Real-time Translation**: Translate text between multiple languages using Google's Generative AI.
- **Text Summarization**: Generate concise summaries of long texts.
- **Speech-to-Text**: Convert spoken words into text using the `webkitSpeechRecognition` API.
- **User-Friendly Interface**: Built with React and Tailwind CSS for a responsive and intuitive user experience.
- **Deployment**: Frontend hosted on Vercel and backend on Google Cloud, ensuring smooth and scalable deployment.

## Technologies Used

- **Frontend**: React, Tailwind CSS, Vite
- **Backend**: Node.js, Express.js
- **AI Services**: Google Generative AI for translation and summarization

## Installation and Setup

### Prerequisites

- Node.js and npm installed on your machine.
- A Google Cloud account with access to Google Generative AI services.
- Vercel and Render accounts for deployment.

### Backend Setup

1. **Clone the Repository**

```bash
   git clone https://github.com/yourusername/ai-language-utilities.git
   cd ai-language-utilities/backend
```

2. **Install Dependencies**
```bash
    npm install
```

3. **Set Up Environment Variables**
 - Create a .env file in the backend directory and add the following (see .env.example):
 - Replace your_google_api_key with your actual Google API key.

4. **Start Server**
```bash
    npm start
```

### Frontend Setup

1. **Navigate to Frontend Directory**
```bash
    cd ../frontend
```

2. **Install Dependencies**
```bash
    npm install
```

3. **Start Development Server**
```bash
    npm run dev
```

### Contributing
Feel free to fork the repository and submit pull requests. Contributions, feature requests, and bug reports are welcome!

### License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
- The Hashnode Hackathon for inspiring this project.
- Google Cloud for the AI services used.
- The open-source community for the tools and libraries that made this project possible.
