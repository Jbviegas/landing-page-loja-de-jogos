import { jogosExclusivos } from "../dados";

export const retornarJogos = () => {
  return jogosExclusivos;/* todos os dados dos jogos seram colocados em jogosExclusivos */
};

export const buscarJogo = (textoDigitado) => {
  return jogosExclusivos.filter((jogo) =>/* todos os dados dos jogos estão em jogosExclusivos e seram colocados no parâmetro jogo */
    jogo.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||/* O valor do texto digitado na tela será o valor do parâmetro textoDigitado
     que será o valor de jogo.nome que será transformado em letras minúsculas e irá ser filtrado dos dados de jogosExclusivos */
    jogo.plataforma.toLowerCase().includes(textoDigitado.toLowerCase()) ||
    jogo.genero.toLowerCase().includes(textoDigitado.toLowerCase())
  );
};

export const filtrarJogo = (plataforma) => {
  return jogosExclusivos.filter((jogo) => jogo.plataforma === plataforma);/* todos os dados dos jogos estão em jogosExclusivos e seram colocados
   no parâmetro jogo,depois jogo.plataforma irá buscar em todas as plataformas de jogosExclusivos a plataforma que foi digitada na tela e colocada
   no parâmetro plataforma*/
};

export const filtrarJogoGenero = (genero) => {
  return jogosExclusivos.filter((jogo) => jogo.genero === genero);/* todos os dados dos jogos estão em jogosExclusivos e seram colocados no
  parâmetro jogo, depois jogo.genero irá buscar em todas os generos de jogosExclusivos o genero que foi digitada na tela e colocada
 no parâmetro genero*/
};
