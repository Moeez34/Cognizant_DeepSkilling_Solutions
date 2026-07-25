import CohortDetails from "./CohortDetails";

function App() {
  return (
    <div>
      <h1>My Academy - Cohort Dashboard</h1>

      <CohortDetails
        name="React Fundamentals"
        startedOn="10-Jul-2026"
        currentStatus="Ongoing"
        coach="John"
        trainer="Alex"
      />

      <CohortDetails
        name="Java Full Stack"
        startedOn="15-Jun-2026"
        currentStatus="Completed"
        coach="David"
        trainer="Smith"
      />

      <CohortDetails
        name="Spring Boot"
        startedOn="01-May-2026"
        currentStatus="Ongoing"
        coach="Emma"
        trainer="Robert"
      />
    </div>
  );
}

export default App;