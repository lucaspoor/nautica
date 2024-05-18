import { Link } from "react-router-dom";

export default function ErrorPage404() {
  return (
    <div>
      <h1>Error 404: Pagina no encontrada</h1>
      <Link to="/">volver al inicio</Link>
    </div>
  );
}
