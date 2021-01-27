import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../index';

const Prodution = () => {
  const history = useHistory();
  const prodution = useContext(Context);

  const linkHandler = (id) => {
    console.log(history);
    history.push(`/detailed/${id}`);
  };

  return (
    <div className="page">
      <h1>Prodution</h1>
      <div className="text">
        <ul>
          {prodution.map(({ label, id }) => (
            <li key={id} onClick={() => linkHandler(id)}>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Prodution;
