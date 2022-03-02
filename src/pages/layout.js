import { Outlet, Link } from "react-router-dom";


export default function Layout() {
  return (
    <>
      <header>Exercicis de React -- Jordi Prats Vilanova</header>
      <div class="HolyGrail-body">
        <main class="HolyGrail-content"><Outlet/></main>
        <nav class="HolyGrail-nav">
          <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/comptador">Comptador</Link>
            </li>
            <li>
                <Link to="/acordeon">Acordeon</Link>
            </li>
            <li>
                <Link to="/galeriafotos">GaleriaFotos</Link>
            </li>
          </ul>
        </nav>
        <aside class="HolyGrail-ads">…</aside>
      </div>
      <footer>by Jordi Prats Vilanova</footer>
    </>
  );
}


