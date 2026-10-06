import { Button } from "./components/ui/Button";

function App() {
  return (
    <main className="app-shell">
      <section className="welcome-card">
        <p className="eyebrow">React frontend</p>
        <h1>Frontend is ready.</h1>
        <p>
          Build your application in <code>src/</code> using the organized
          folders below.
        </p>
        <Button>Get started</Button>
      </section>
    </main>
  );
}

export default App;
