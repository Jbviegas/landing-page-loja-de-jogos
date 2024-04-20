import xboxLogo from "../../assets/xbox.png"
import playstationLogo from "../../assets/playstation.jpg";
import nintendoLogo from "../../assets/nintendo.jpg";
import "./style.css";

const CardsJogos = ({ plataforma, nome, imagem, genero, valor }) => {
  return (


    <div className="card">
      <mask className="mask">
        <div className="logo">
          <img src={plataforma === "xbox" ? xboxLogo : plataforma === "playstation" ? playstationLogo : nintendoLogo} alt="logo" />
          <p className="nome">{nome}</p>
        </div>

        <div className="img-principal">
          <img src={imagem} alt={"imagem"} />
        </div>

        <div className="genero">
          <p>{genero}</p>
        </div>

        <div className="valor">
          <p>{valor}</p>
        </div>
      </mask>
    </div>

  );
};
export default CardsJogos;
