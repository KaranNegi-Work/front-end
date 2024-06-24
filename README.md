
# Task Manager App

This is a simple React Native task management application that uses Context API for state management and AsyncStorage for offline storage. It also supports fetching, creating, updating, and deleting tasks from a backend API.

## Features

- Fetch tasks from the backend and display them.
- Add a new task using a form.
- Edit an existing task.
- Delete a task.
- Mark a task as completed/uncompleted.
- Offline storage to handle cases where the device is not connected to the internet using AsyncStorage.
- Navigation between screens using React Navigation.

## Installation

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/TaskManager.git
   cd TaskManager
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root of your project and add your API URL:

   ```env
   API_URL=http://localhost:3000/task-manager/api/v1.0
   ```

4. **Start the project:**

   ```bash
   expo start
   ```

   This will open the Expo Developer Tools in your browser. From there, you can run the app on an iOS simulator, Android emulator, or physical device using the Expo Go app.

## Project Structure

```
src/
├── api/
│   └── tasks.js
├── components/
│   ├── TaskForm.js
│   ├── TaskItem.js
│   └── TaskList.js
└── context/
    └── TaskContext.js
App.js
.babel.config.js
.env
```
