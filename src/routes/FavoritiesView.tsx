import { Card } from 'react-bootstrap';
import { Header } from '../components/Header';
import { useFiotecStore } from '../store/FiotecStore';

export function FavoritiesView() {
  const [listOfFavorities] = useFiotecStore((state) => [state.favorite]);

  return (
    <>
      <Header />
      <h3 className="m-2">Meus favoritos</h3>
      <div className="container mw-100 mt-4">
        {listOfFavorities.length ? (
          <>
            {listOfFavorities.map((item) => {
              return (
                <div className="row mb-4">
                  <div className="col-3">
                    <Card.Img
                      variant="top"
                      src={item.image}
                      style={{ width: '300px', height: '150px' }}
                    />
                  </div>
                  <div className="col-6">
                    <h6>{item.title}</h6>
                    <p className="mt-2">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <h2 className="text-center mt-4">Lista vazia</h2>
        )}
      </div>
    </>
  );
}
