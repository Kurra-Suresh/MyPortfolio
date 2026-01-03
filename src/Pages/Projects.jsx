import ProjectCard from "../components/ProjectCard";
function Projects() {
  return (
    <section className="page">
      <h2>Projects</h2>
      <ProjectCard
        title="Task Manager Application"
        description="A React-based task management application designed to organize daily activities efficiently."
        features={[
          "Add, edit, and delete tasks",
          "Mark tasks as completed",
          "Filter tasks by status",
          "Persistent data using localStorage"
        ]}
        tech="React.js, Hooks, JavaScript, CSS"
        github="https://github.com/yourusername/task-manager"
        demo="https://your-demo-link.com"
      />
      <ProjectCard
        title="Weather Forecast Application"
        description="A real-time weather application that fetches and displays weather data using a public API."
        features={[
          "Search weather by city name",
          "Displays temperature, humidity, and conditions",
          "Handles loading and error states",
          "Responsive UI for all devices"
        ]}
        tech="React.js, REST API, Fetch, CSS"
        github="https://github.com/yourusername/weather-app"
        demo="https://your-demo-link.com"
      />
      <ProjectCard
        title="Expense Tracker Dashboard"
        description="A practical expense tracking dashboard to manage income and expenses with real-time balance calculation."
        features={[
          "Add income and expense transactions",
          "Category-based tracking",
          "Monthly summary and balance",
          "Clean and reusable component structure"
        ]}
        tech="React.js, Context API, JavaScript, CSS"
        github=""
        demo=""
      />
    </section>
  );
}
export default Projects;