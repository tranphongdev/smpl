import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
      </Stack>
    </div>
  );
};

export default Dashboard;
