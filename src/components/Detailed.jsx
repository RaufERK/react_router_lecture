import { useParams } from 'react-router-dom';
import { Context } from '../index';
import { useContext } from 'react';

const Detailed = () => {
  const prodution = useContext(Context);

  const params = useParams();
  console.log('useParams==>', params.id, prodution);

  const productName = () => {
    const nameObj = prodution.find((item) => item.id === Number(params.id));
    return nameObj && nameObj.label;
  };

  return (
    <div className="page">
      <h1>{productName()}</h1>
      <div className="text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi minus
        illo eaque asperiores, nulla possimus? Nobis, mollitia fugit? Sunt
        commodi molestias exercitationem obcaecati at doloremque ipsam sequi
        dolor id numquam.
      </div>
    </div>
  );
};

export default Detailed;
