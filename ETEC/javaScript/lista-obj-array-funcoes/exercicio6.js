const livrosTI = [
  {
    titulo: "Clean Code",
    autor: "Robert C. Martin",
    ano: 2008
  },
  {
    titulo: "The Pragmatic Programmer - 2nd Edition",
    autor: "Andrew Hunt e David Thomas",
    ano: 2010 
  },
  {
    titulo: "Clean Architecture",
    autor: "Robert C. Martin",
    ano: 2015
  },
  {
    titulo: "Continuous Delivery",
    autor: "Jez Humble e David Farley",
    ano: 2010
  },
  {
    titulo: "The Phoenix Project",
    autor: "Gene Kim, Kevin Behr, George Spafford",
    ano: 2013
  },
  {
    titulo: "Refactoring - 2nd Edition",
    autor: "Martin Fowler",
    ano: 2012
  },
  {
    titulo: "Release It!",
    autor: "Michael T. Nygard",
    ano: 2007
  }
];

function obterLivrosPosterioresAno2010 (arrayLivros) {
  let livrosRecentes = arrayLivros.filter(livro => {
    return livro.ano > 2010;
  });

  return livrosRecentes;
}

function main () {
  let livrosDepoisDe2010 = obterLivrosPosterioresAno2010(livrosTI)

  console.log("Livros publicados depois do ano de 2010:")
  console.log(livrosDepoisDe2010)
}


// Execução
main()