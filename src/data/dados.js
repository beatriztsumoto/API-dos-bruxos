const bruxos = [
    {
        id: 1,
        nome: "Harry Potter",
        casa: "Grifinória",
        ano: 7,
        varinha: "Azevinho e pena de fênix, 28cm",
        mascote: "Coruja (Edwiges)",
        patrono: "Cervo",
        especialidade: "Sobreviver a Voldemort 😎",
        vivo: false
    },
    {
        id: 2,
        nome: "Hermione Granger",
        casa: "Grifinória",
        ano: 7,
        varinha: "Videira e fibra de coração de dragão, 27cm",
        mascote: "Gato (Bichento)",
        patrono: "Lontra",
        especialidade: "Saber tudo de tudo",
    },
    {
        id: 3,
        nome: "Ron Weasley",
        casa: "Grifinória",
        ano: 7,
        varinha: "Salgueiro e crina de unicórnio, 35cm",
        mascote: "Rato (Perebas)",
        patrono: "Terrier Jack Russell",
        especialidade: "Xadrez Bruxo",
    },
    {
        id: 4,
        nome: "Draco Malfoy",
        casa: "Sonserina",
        ano: 7,
        varinha: "Espinheiro e crina de unicórnio, 25cm",
        mascote: "Coruja (não nomeada)",
        patrono: "Desconhecido",
        especialidade: "Ser irritante",
    },
    {
        id: 5,
        nome: "Luna Lovegood",
        casa: "Corvinal",
        ano: 6,
        varinha: "Madeira de cerejeira e núcleo desconhecido",
        mascote: "Nenhum",
        patrono: "Lebre",
        especialidade: "Ver criaturas imaginárias (ou não) 👻",
    },
    {
         id: 6,
         nome: "Neville Longbottom",
         casa: "Grifinória",
         ano: 7,
         varinha: "Cerejeira e pelo de unicórnio",
         mascote: "Sapo (Trevor)",
         patrono: "Desconhecido",
         especialidade: "Herbologia e bravura inesperada",
    },
    {
         id: 7,
         nome: "Ginny Weasley",
         casa: "Grifinória",
         ano: 6,
         varinha: "Teixo e núcleo desconhecido",
         mascote: "Coruja (Pigmew)",
         patrono: "Cavalo",
         especialidade: "Feitiços poderosos",
    },
    {
         id: 8,
         nome: "Cedrico Diggory",
         casa: "Lufa-Lufa",
         ano: 6,
         varinha: "Freixo e pelo de unicórnio, 31cm",
         mascote: "Coruja",
         patrono: "Desconhecido",
         especialidade: "Ser um Campeão e alma da Lufa-Lufa",
    },
    {
       
         id: 9,
         nome: "Fred Weasley",
         casa: "Grifinória",
         ano: "7 (abandonou)",
         varinha: "Salgueiro e crina de unicórnio, 30cm",
         mascote: "Desconhecido",
         patrono: "Desconhecido",
         especialidade: "Criar logros e piadas",
    },
    {
         id: 10,
         nome: "George Weasley",
         casa: "Grifinória",
         ano: "7 (abandonou)",
         varinha: "Desconhecida",
         mascote: "Desconhecido",
         patrono: "Desconhecido",
         especialidade: "Criar logros e piadas",
    },
 ];
const casas = [
    {
        id: 1,
        nome: "Grifinória",
        fundador:"Godric Gyffindor",
        cores: "vermelho e dourado",
        animal: "leão"
    },
    {
        id: 2,
        nome: "Sonserina",
        fundador:"Salazar Slytherin",
        cores: "Verde e Prata",
        animal: "Serpente"
    },
    {   id: 3,
        nome: "Lufa-Lufa",
        fundador:"Helga Hufflepuff",
        cores: "Amarelo e preto",
        animal: "Texugo"
    },
    {
        id: 4,
        nome: "Corvinal",
        fundador:"Rowena Ravenclaw",
        cores: "Azul e bronze",
        animal: "Àguia "
    }
]

const varinhas = [
    {
        id: 1,
        material: "Azevinho",
        nucleo:"Pena de Fênix",
        comprimento: "28cm"
    },
    {
        id: 2,
        material: "Videira",
        nucleo:"Fibra de Coração de Dragão",
        comprimento: "27cm"
    },
    {
        id: 3,
        material: "Salgueiro",
        nucleo:"Pelo de Unicórnio",
        comprimento: "35cm"
    },
    {
        id: 1,
        material: "Carvalho Inglês",
        nucleo:"Pelo de Testrálio",
        comprimento: "32cm"
    }
]

const animais = [
    {
        id: 1,
        nome: "Coruja",
        tipo:"Correio/Companhia",
    },
    {
        id: 2,
        Gato: "Companhia",
        tipo:"Correio/Companhia",
    },
    {
        id: 3,
        nome: "Sapo",
        tipo:"Companhia",
    },
    {
        id: 4,
        nome: "Rato",
        tipo:"Companhia",
    }
]

const pocoes = [
    {
        id: 1,
        nome: "Polissuco",
        efeito:"Transforma na aparência de outra pessoa",
    },
    {
        id: 2,
        Gato: "Felix Felicis",
        efeito:"Sorte temporária",
    },
    {
        id: 3,
        nome: "Amortentia",
        efeito:"Poção do amor",
    },
    {
        id: 4,
        nome: "Veritaserum",
        efeito:"Força a dizer a verdade",
    }
]

 export default {bruxos, casas, varinhas, animais, pocoes};