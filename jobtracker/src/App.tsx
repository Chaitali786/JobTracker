import { useState, useEffect } from "react";
import Header from "./components/Header";
import JobTrackerForm from "./components/JobTrackerForm";
import type { Job } from "./type/job";
import "./App.css";

function App() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("my_job_logs");
    if (saved) {
      setJobs(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    if (jobs.length > 0) {
      localStorage.setItem("my_job_logs", JSON.stringify(jobs));
    }
  }, [jobs]);

  const handleAddJob = (newJob: Job) => {
    setJobs([newJob, ...jobs]);
    console.log("Job received in App:", newJob);
  };

  return (
    <>
      <Header />
      <JobTrackerForm onAddJob={handleAddJob} />

      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <h2>Total Jobs Applied: {jobs.length}</h2>
      </div>
    </>
  );
}

export default App;
