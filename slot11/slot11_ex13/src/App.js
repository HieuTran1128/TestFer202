import './App.css';
import FormValidation from './components/FormValidation';
import ValidatedForm from './components/ValidatedForm';
import ValidatedInput from './components/ValidatedInput';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <ValidatedInput />
      <FormValidation />
      <ValidatedForm />
    </div>
  );
}

export default App;
