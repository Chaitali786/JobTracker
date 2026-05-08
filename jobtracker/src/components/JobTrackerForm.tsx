import Paper from "@mui/material/Paper";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import type { Job } from "../type/job";
type Props = {
  onAddJob: (newJob: Job) => void;
};
const JobTrackerForm = ({ onAddJob }: Props) => {
  const [role, setRole] = useState<string>("");
  const [employer, setEmployer] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const handleClick = () => {
    if (!role || !employer) return;

    const newJob: Job = { id: Date.now(), role, employer, location, date };
    onAddJob(newJob);
    setRole("");
    setEmployer("");
    setLocation("");
    setDate("");
  };

  return (
    <div>
      <Paper sx={{ p: 3, maxWidth: 400, mx: "auto", mt: 4 }}>
        <Typography variant="h6">Add New Job Application</Typography>
        <Stack spacing={3}>
          <TextField
            label="Role"
            variant="outlined"
            fullWidth
            placeholder="e.g. Frontend Developer"
            onChange={(e) => setRole(e.target.value)}
          />

          <TextField
            label="Employer"
            variant="outlined"
            fullWidth
            onChange={(e) => setEmployer(e.target.value)}
          />

          <TextField
            label="Location"
            variant="outlined"
            fullWidth
            onChange={(e) => setLocation(e.target.value)}
          />

          <TextField
            label="Date Applied"
            type="date"
            fullWidth
            onChange={(e) => setDate(e.target.value)}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
          />

          <Button
            variant="contained"
            onClick={handleClick}
            color="primary"
            size="large"
          >
            Save Application
          </Button>
        </Stack>
      </Paper>
    </div>
  );
};

export default JobTrackerForm;
