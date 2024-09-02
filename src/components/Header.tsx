import { Link } from 'react-router-dom';
import Image from '../assets/logo.png';
import Avatar from '../assets/user_icon.png';
export function Header() {
  return (
    <div className="p-5 bg-light-emphasis border-bottom shadow-sm d-flex justify-content-evenly align-items-center">
      <img src={Image} alt="logo" />

      <div className="d-flex gap-3 align-items-center">
        <h6>
          <Link to="/">Home</Link>
        </h6>
        <h6>
          <Link to="/">Projetos em destaque</Link>
        </h6>
        <h6>
          <Link to="/favorities">Meus favoritos</Link>
        </h6>
      </div>

      <div className="rounded-circle bg-body-secondary p-2">
        <img src={Avatar} alt="logo" className="image-resezing" />
      </div>
    </div>
  );
}
