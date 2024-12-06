# React HR Scheduler Application

This is a React-based application designed for scheduling and managing HR-related activities. The app provides distinct dashboards and functionalities for admins, candidates, and experts.

## Features

- **Admin Dashboard:** Manage users, schedules, and interviews.
- **Candidate Dashboard:** View and manage candidate-specific details.
- **Expert Dashboard:** Manage and review expert-related data.
- **Interview Scheduling:** A centralized page to organize interviews.
- **Login Page:** Authentication to access role-specific dashboards.
- **Routing:** Efficient navigation using React Router.
- **Context Management:** State managed using Context API for interviews.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/hr-scheduler.git
   cd hr-scheduler
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Project Structure

```
project-root
├── src
│   ├── components
│   │   ├── CandidatePage.jsx
│   │   ├── MatchPage.jsx
│   ├── context
│   │   ├── InterviewsContext.jsx
│   ├── pages
│   │   ├── Login.jsx
│   │   ├── AdminDashboard.jsx
│   │   ├── CandidateDashboard.jsx
│   │   ├── ExpertDashboard.jsx
│   │   ├── InterviewsPage.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
└── public
    ├── index.html
```

## Technologies Used

- **React**: For building the user interface.
- **React Router**: For managing routing.
- **Tailwind CSS**: For styling the application.
- **Context API**: For state management.

## Setup Notes

1. **Base URL:** The app uses a base URL `/HR_Scheduler` for routing. Ensure your deployment server supports this configuration.
2. **Styling:** The app uses Tailwind CSS. Ensure Tailwind is set up correctly by following the official [installation guide](https://tailwindcss.com/docs/installation).

## Scripts

- `npm start`: Start the development server.
- `npm run build`: Build the app for production.
- `npm test`: Run tests.

## Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Deploy the `build` folder to your preferred hosting service.

## Contributing

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License.

---

Feel free to contribute, raise issues, or suggest features for improvement!

