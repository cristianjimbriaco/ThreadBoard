import './App.css';
import { BoardCanvas } from './features/board/BoardCanvas';

function App() {
  return (
    <div className="threadboard-shell">
      <aside className="sidebar">
        <div className="sidebar__brand">
          <span className="sidebar__logo">TB</span>

          <div>
            <strong>ThreadBoard</strong>
            <span>Narrative workspace</span>
          </div>
        </div>

        <section className="sidebar__section">
          <span className="sidebar__eyebrow">Current board</span>

          <h1>Investigation Board</h1>

          <p>Explore the relationship between scenes and theories.</p>
        </section>

        <section className="sidebar__section">
          <span className="sidebar__eyebrow">Elements</span>

          <div className="element-legend">
            <div className="element-legend__item">
              <span className="element-legend__mark element-legend__mark--scene" />

              <div>
                <strong>Scene</strong>
                <span>Evidence from the source material</span>
              </div>
            </div>

            <div className="element-legend__item">
              <span className="element-legend__mark element-legend__mark--theory" />

              <div>
                <strong>Theory</strong>
                <span>An interpretation or hypothesis</span>
              </div>
            </div>
          </div>
        </section>

        <section className="sidebar__sprint">
          <span>Sprint 1 prototype</span>
          <strong>Interactive canvas</strong>
          <p>Nodes are temporary until backend persistence is connected.</p>
        </section>
      </aside>

      <main className="workspace">
        <header className="workspace__header">
          <div>
            <span className="workspace__eyebrow">Workspace</span>
            <h2>Investigation Board</h2>
          </div>

          <span className="workspace__status">Local prototype</span>
        </header>

        <section
          className="workspace__canvas"
          aria-label="Interactive ThreadBoard canvas"
        >
          <BoardCanvas />
        </section>
      </main>
    </div>
  );
}

export default App;
