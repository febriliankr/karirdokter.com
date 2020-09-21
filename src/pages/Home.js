import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home__container">
      <section>
        <h1>Membantu menentukan karir dokter anda</h1>
        <div className="links">
          <Link to="/quiz">Quiz Spesialis ›</Link>
          <Link to="/lowongan">Info Lowongan Kerja ›</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
