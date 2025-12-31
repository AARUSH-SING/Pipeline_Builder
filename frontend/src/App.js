import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <div className="toolbar">
        <PipelineToolbar />
      </div>
      <div className="ui-container">
        <PipelineUI />
      </div>
      <div className="submit-container">
        <SubmitButton />
      </div>
    </div>
  );
}

export default App;
