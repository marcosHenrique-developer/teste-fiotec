import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import View from '../assets/view_icon.png';
import Heart from '../assets/heart_icon.png';
import { Projects } from '../types/IProjects';
import { useNavigate } from 'react-router-dom';
import { useFiotecStore } from '../store/FiotecStore';

type Props = {
  projects: Projects[];
};

export function HomeView({ projects }: Props) {
  const navigate = useNavigate();

  const [addToFavorities] = useFiotecStore((state) => [state.addToFavorities]);

  const goDetail = (id: number) => navigate(`detail/${id}`);
  return (
    <div className="container">
      <div className="row">
        {projects.map((project: Projects) => {
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
                    onClick={() => goDetail(project.categoryId)}
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
                    onClick={() => addToFavorities(project)}
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
    </div>
  );
}
