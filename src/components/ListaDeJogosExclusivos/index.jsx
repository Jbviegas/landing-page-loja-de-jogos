import "./style.css";
import Lupa from "../../assets/lupa.png";/* importação de imagem */
import CardsJogos from "../ItemJogos";/* importação dos valores de props dos cards */
import { useState } from "react";/* importação do useState */
import { filtrarJogo, filtrarJogoGenero, buscarJogo, retornarJogos } from "../../servico";/* importação das funçôes de serviços */
import xenoblade from "../../assets/xenoblade.jpg"


const ListaDeJogosExclusivos = () => {

  const [listaJogos, setListaJogos] = useState(retornarJogos());/*listaJogos é igual retornaJogos que é igual a todos os dados de jogosExclusivos */
  const [textoBusca, setTextoBusca] = useState("");/* textoBusca é o valor do imput que começa vazio */

  const handleFiltrarJogoPlataforma = (plataforma) => {
    setListaJogos(filtrarJogo(plataforma));/* vai filtrar o jogo pela plataforma que pode ser Xbox, Playstation ou Nintendo */
    setTextoBusca("");/* valor do input */
  };

  const handleFiltrarJogoGenero = (genero) => {
    setListaJogos(filtrarJogoGenero(genero));/* vai filtrar o jogo pelo genero que pode ser Ação, Aventura ou Terror */
    setTextoBusca("");/* valor do input */
  };

  const handleBuscarJogo = (textoDigitado) => {
    setListaJogos(buscarJogo(textoDigitado));/* Vai filtrar o jogo a partir do texto digitado na tela */
    setTextoBusca(textoDigitado);/* valor do input */
  };

  const handleLimparFiltro = () => {
    setListaJogos(retornarJogos());/* Vai retornar todos os dados da lista de jogosExclusivos */
    setTextoBusca("");/* valor do input */
  };

  /* função que escurece os botões Playstation e Nintendo e acende o botão Xbox */
  function cliqueiNoBotaoXbox() {
    let xbox = document.querySelector(".xbox")
    let playstation = document.querySelector(".playstation")
    let nintendo = document.querySelector(".nintendo")

    xbox.style.backgroundColor = "rgb(44, 194, 44)"
    playstation.style.backgroundColor = "rgb(2, 2, 139)"
    nintendo.style.backgroundColor = "rgb(122, 8, 8)"
    xbox.style.color = "#1f4110"
    xbox.style.boxShadow = " 0 0 18px #60e323"

    playstation.style.color = "#fff"
    playstation.style.boxShadow = ""

    nintendo.style.color = "#fff"
    nintendo.style.boxShadow = ""

  }

  /* função que escurece os botões Xbox e Nintendo e acende o botão Playstation */
  function cliqueiNoBotaoPlaystation() {
    let xbox = document.querySelector(".xbox")
    let playstation = document.querySelector(".playstation")
    let nintendo = document.querySelector(".nintendo")

    xbox.style.backgroundColor = "rgb(13, 87, 13)"
    playstation.style.backgroundColor = "rgb(25, 25, 255)"
    nintendo.style.backgroundColor = "rgb(122, 8, 8)"

    playstation.style.color = "rgb(2, 2, 34)"
    playstation.style.boxShadow = " 0 0 18px blue"

    xbox.style.color = "#fff"
    xbox.style.boxShadow = ""

    nintendo.style.color = "#fff"
    nintendo.style.boxShadow = ""
  }

  /* função que escurece os botões Playstation e Xbox e acende o botão Nintendo */
  function cliqueiNoBotaoNintendo() {
    let xbox = document.querySelector(".xbox")
    let playstation = document.querySelector(".playstation")
    let nintendo = document.querySelector(".nintendo")

    xbox.style.backgroundColor = "rgb(13, 87, 13)"
    playstation.style.backgroundColor = "rgb(2, 2, 139)"
    nintendo.style.backgroundColor = "Red"
    nintendo.style.color = "rgb(101, 14, 14)"
    nintendo.style.boxShadow = " 0 0 18px red"

    xbox.style.color = "#fff"
    xbox.style.boxShadow = ""

    playstation.style.color = "#fff"
    playstation.style.boxShadow = ""
  }

  /* função que escurece os botões Xbox, Playstation e Nintendo */
  function limpar() {
    let xbox = document.querySelector(".xbox")
    let playstation = document.querySelector(".playstation")
    let nintendo = document.querySelector(".nintendo")

    xbox.style.backgroundColor = "rgb(13, 87, 13)"
    playstation.style.backgroundColor = "rgb(2, 2, 139)"
    nintendo.style.backgroundColor = "rgb(122, 8, 8)"

    xbox.style.color = "#fff"
    xbox.style.boxShadow = ""

    playstation.style.color = "#fff"
    playstation.style.boxShadow = ""

    nintendo.style.color = "#fff"
    nintendo.style.boxShadow = ""
  }
  return (
    <div>
      <header className="container-principal">
        <div>
          <div className="container-btns2" onClick={limpar}>{/* chama a função limpar que escurece os botões Xbox, Playstation e Nintendo */}
            <button className="açao" onClick={() => handleFiltrarJogoGenero("Ação")}>Ação</button>
            {/* onClick  handleFiltrarJogoGenero chama afunção handleFiltrarJogoGenero que filtra os jogos do genero Ação*/}
            <button className="aventura" onClick={() => handleFiltrarJogoGenero("Aventura")}>Aventura</button>
            {/* onClick  handleFiltrarJogoGenero chama afunção handleFiltrarJogoGenero que filtra os jogos do genero Aventura*/}
            <button className="terror" onClick={() => handleFiltrarJogoGenero("Terror")}>Terror</button>
            {/* onClick  handleFiltrarJogoGenero chama afunção handleFiltrarJogoGenero que filtra os jogos do genero Terror*/}
          </div>
        </div>

        <div className="container-btns">


          <div onClick={cliqueiNoBotaoXbox}>{/* chama afunção cliqueiNoBotaoXbox que acende o botão Xbox e escurece os demais*/}
            <button className="xbox" onClick={() => handleFiltrarJogoPlataforma("xbox")}>Xbox</button>
          </div>{/* onClick  handleFiltrarJogoPlataforma chama afunção handleFiltrarJogoPlataforma que filtra os jogos da plataforma Xbox*/}

          <div onClick={cliqueiNoBotaoPlaystation}>{/*chama afunção cliqueiNoBotaoPlaystation que acende o botão Playstation e escurece os demais*/}
            <button className="playstation" onClick={() => handleFiltrarJogoPlataforma("playstation")}>Playstation</button>
          </div>{/* onClick  handleFiltrarJogoPlataforma chama afunção handleFiltrarJogoPlataforma que filtra os jogos da plataforma Playstation*/}

          <div onClick={cliqueiNoBotaoNintendo}>{/* chama afunção cliqueiNoBotaoNintendo que acende o botão Nintendo e escurece os demais*/}
            <button className="nintendo" onClick={() => handleFiltrarJogoPlataforma("nintendo")}>Nintendo</button>
          </div>{/* onClick  handleFiltrarJogoPlataforma chama afunção handleFiltrarJogoPlataforma que filtra os jogos da plataforma Nintendo*/}
        </div>

        <div onClick={limpar}> {/* onClick  handleLimparFiltro chama afunção handleLimparFiltro que retorna todos os valores de retornaJogos
           que são os dados de jogosExclusivos, ou seja retona tudo igual no começo, todos os cards disponíveis*/}
          <button className="limpar-busca" onClick={() => handleLimparFiltro()}>Limpar Busca</button>
        </div>



        <div className="container-input">
          <img src={Lupa} alt="ícone" />
          {/* textoBusca é o valor do useState textoBusca e esse valor mudará conforme for sendo setado em setTextoBusca nas funçoês handle*/}
          <input type="text" value={textoBusca} onChange={(event) => handleBuscarJogo(event.target.value)} placeholder="Pesquise um jogo ou plataforma" />
        </div>                                  {/*o retorno do evento onChange será o valor do texto digitado na função handlebuscarJogo,
         esse valor será o jogo que equivale ao nome ou genero digitado no input*/}
      </header>
      <main>
        <img src={xenoblade} alt="xenoblade" className="xenoblade"></img>
        <div className="container-jogos">
          {listaJogos.map((jogo) => (
            <CardsJogos className="cards2" /*cards dos jogos*/
              key={jogo.id}
              nome={jogo.nome}
              plataforma={jogo.plataforma}
              imagem={jogo.imagem}
              genero={jogo.genero}
              valor={jogo.preco}
            />
          ))}
        </div>
      </main>
    </div>
  );
};
export default ListaDeJogosExclusivos;
