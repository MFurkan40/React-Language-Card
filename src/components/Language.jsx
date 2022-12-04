import { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Language = ({ name, img, options }) => {
  const [showDesc, setShowDesc] = useState(false);
  return (
    <Container
      className="rounded-3 h-100 p-4  lang-card"
      style={{ background: "Tomato" }}
      onClick={() => setShowDesc(!showDesc)}
      type="button"
    >
      {!showDesc && (
        <Container>
          <Image className="lang-logo" src={img} width="70%"></Image>
          <h3 className="display-6">{name}</h3>
        </Container>
      )}

      {showDesc && (
        <ul className="h-100 d-flex flex-column justify-content-center ">
          {options.map((option, index) => {
            return (
              <li className="h5 text-start" key={index}>
                {option}
              </li>
            );
          })}
        </ul>
      )}
    </Container>
  );
};

export default Language;
