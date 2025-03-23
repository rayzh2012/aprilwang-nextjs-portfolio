export default function Home() {
  return (
    <div className="container">
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 0'
      }}>
        <h1 style={{ fontSize: '1.5rem' }}>April Wang</h1>
        <nav style={{ display: 'flex', gap: '1rem' }}>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        margin: '5rem 0'
      }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Bridging AI & Industrial Design
        </h2>
        <p style={{ maxWidth: '600px' }}>
          A future-forward portfolio showcasing the blend of creativity and technology.
        </p>
      </section>

      <section id="projects" style={{ marginBottom: '5rem' }}>
        <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Selected Work</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          <div style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            overflow: 'hidden',
            padding: '1rem'
          }}>
            <img src="/assets/placeholder1.jpg" alt="Project 1" style={{ width: '100%', marginBottom: '1rem' }} />
            <h4>AI Poster Series</h4>
            <p>Conceptual designs blending algorithmic creativity and aesthetics.</p>
          </div>

          <div style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            overflow: 'hidden',
            padding: '1rem'
          }}>
            <img src="/assets/placeholder2.jpg" alt="Project 2" style={{ width: '100%', marginBottom: '1rem' }} />
            <h4>Industrial Coffee Machine</h4>
            <p>A modern, portable coffee experience designed with precision.</p>
          </div>
        </div>
      </section>

      <section id="contact" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h3>Contact</h3>
        <p>Email: april@example.com</p>
      </section>

      <footer style={{ borderTop: '1px solid #eee', padding: '2rem 0', textAlign: 'center' }}>
        <p>&copy; 2024 April Wang</p>
      </footer>
    </div>
  );
}