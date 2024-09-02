import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Projects } from '../types/IProjects';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import View from '../assets/view_icon.png';
import Heart from '../assets/heart_icon.png';
import { api } from '../lib/api';
import { SideBar } from '../components/SideBar';
import { Header } from '../components/Header';

export function ProjectView() {
  const params = useParams();
  const navigate = useNavigate();
  const paramId = params.projectId;

  const [project, setProject] = useState({} as Projects);

  const fetchProject = useCallback(async (query?: string) => {
    const response = await api.get(query as string);
    setProject(response.data);
  }, []);

  function handleClick(id: number) {
    navigate(`detail/${id}`, {
      replace: true,
    });
  }

  useEffect(() => {
    fetchProject(`/projetos/${paramId}`);
  }, [fetchProject, paramId]);

  return (
    <>
      <Header />
      <div className="container mw-100 mt-4">
        <div className="row">
          <div className="col-3">
            <SideBar />
          </div>
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
                  onClick={() => handleClick(project.categoryId)}
                >
                  <img
                    src={View}
                    alt="icone de view"
                    className="image-resezing me-1"
                  />
                  Acessar
                </Button>

                <Button className="rounded-pill" variant="btn btn-light">
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
        </div>
      </div>
    </>
  );
}
