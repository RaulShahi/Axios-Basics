import { axiosInstance } from "./AxiosInstance";
import ErrorBoundary from "./ErrorBoundary";
import UserFinder from "./components/Users/UserFinder";
import Card from "./components/UI/Card";
import classes from "./components/Forms/Modal.module.css";

function App() {
  return (
    <ErrorBoundary>
      <Card className={classes.words}>
        <UserFinder />
      </Card>
    </ErrorBoundary>
  );
}

export default App;
