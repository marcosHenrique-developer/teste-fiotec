import { useCallback, useEffect, useState } from 'react';
import { Projects } from './types/IProjects';
import { api } from './lib/api';
import { HomeView } from './routes/HomeView';
import { SideBar } from './components/SideBar';
import { Header } from './components/Header';

export function App() {
  const [projects, setProjects] = useState<Projects[]>([]);

  const fetchProjects = useCallback(async (query?: string) => {
    const response = await api.get(query as string);
    setProjects(response.data);
  }, []);

  useEffect(() => {
    fetchProjects('/projetos');
  }, [fetchProjects]);
  return (
    <>
      <Header />
      <div className="container mw-100 mt-4">
        <div className="row">
          <nav className="col-3">
            <SideBar />

            {/* <div className="text-left p-3 bg-light border shadow-sm">
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
                      <Link
                        className="text-decoration-none"
                        to={`projects/${project.id}`}
                      >
                        {project.category}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div> */}
          </nav>
          <main className="col-9">
            <h6>Projetos em destaque</h6>

            <HomeView projects={projects} />

            {/* <div className="container">
              <div className="row">
                {projects.map((project) => {
                  return (
                    <Card
                      key={project.id}
                      style={{ width: '18rem', maxHeight: '350px' }}
                      className="col-3 m-2 overflow-scroll"
                    >
                      <Card.Img variant="top" src={project.image} />

                      <Card.Body>
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Text>{project.description}</Card.Text>
                        <div className="d-flex justify-content-between">
                          <Button
                            className="rounded-pill"
                            variant="btn btn-light"
                          >
                            <img
                              src={View}
                              alt="icone de view"
                              className="image-resezing me-1"
                            />
                            Acessar
                          </Button>

                          <Button
                            className="rounded-pill"
                            variant="btn btn-light"
                          >
                            <img
                              src={Heart}
                              alt="icone de view"
                              className="image-resezing me-1"
                            />
                            Favoritos
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  );
                })}
              </div>
            </div> */}
          </main>
        </div>
      </div>
    </>
  );
}
