import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Projects } from '../types/IProjects';
import { api } from '../lib/api';
import { Card } from 'react-bootstrap';
import { SideBar } from '../components/SideBar';
import { Header } from '../components/Header';

export function ProjectDetail() {
  const params = useParams();
  const paramId = params.projectId;
  const [project, setProject] = useState({} as Projects);

  const fetchProject = useCallback(async (query?: string) => {
    const response = await api.get(query as string);
    setProject(response.data);
  }, []);

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
          <div className="col-6">
            <h4>Projetos em destaque</h4>

            <h5>{project.title}</h5>
            <Card.Img
              variant="top"
              src={project.image}
              style={{ width: '100%', height: '20rem' }}
            />
            <p className="mt-2">{project.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
