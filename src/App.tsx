import './App.css';
import { Surface } from './Surface';
import { Form } from './Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Glass UI</h1>
      </header>
      <main id="demo">
        <section className="demo-tile">
          <Surface>
            <Form />
          </Surface>
        </section>
      </main>
    </div>
  );
}

export default App;
