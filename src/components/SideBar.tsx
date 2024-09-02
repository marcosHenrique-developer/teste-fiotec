import { useCallback, useEffect, useState } from 'react';
import { api } from '../lib/api';
import { Projects } from '../types/IProjects';
import { Link, useLocation } from 'react-router-dom';

export function SideBar() {
  const location = useLocation();

  const [projects, setProjects] = useState<Projects[]>([]);

  const fetchProjects = useCallback(async (query?: string) => {
    const response = await api.get(query as string);
    setProjects(response.data);
  }, []);

  useEffect(() => {
    fetchProjects('/projetos');
  }, [fetchProjects]);

  return (
    <div className="text-left p-3 bg-light border shadow-sm">
      <h6>Filtrar por categorias</h6>
      <ul className="list-unstyled">
        <li className="mt-3">
          <Link className="text-decoration-none" to="/">
            Todos
          </Link>
        </li>

        {projects.map((project) => {
          return (
            <li key={project.id} className="mt-3">
              {location.pathname === '/' ? (
                <Link
                  className="text-decoration-none"
                  to={`projects/${project.id}`}
                >
                  {project.category}
                </Link>
              ) : (
                <p></p>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
