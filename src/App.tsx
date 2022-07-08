import './App.css';
import { Surface } from './components/Surface';
import { Form, FormButton, FormHeading, FormInput } from './components/Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Glass UI</h1>
      </header>
      <main id="demo">
        <section className="demo-tile">
          <Surface>
            <Form>
              <FormHeading>
                Hello App
              </FormHeading>
              <FormInput label="Label Me" placeholder="Type Here" />
              <FormButton title="Click Me" />
            </Form>
          </Surface>
        </section>
      </main>
    </div>
  );
}

export default App;
