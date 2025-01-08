import { RouterProvider } from 'react-router-dom';
import { browserRouter } from '~/routes/browserRouter';

function App() {
  return (
    <div className="fade-in">
      <RouterProvider router={browserRouter} />
    </div>
  );
}

export default App;
