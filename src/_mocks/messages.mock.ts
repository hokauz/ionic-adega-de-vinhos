const BASIC_OPTION = {
  text  : 'Entendi',
  action: 'cancel',
  color : 'secondary'
}
export const MESSAGES_MOCK = {
  name: {
    message: 'Ops.Você precisa dar um nome para o seu vinho',
    options: [BASIC_OPTION]
  }, 
  harvest: {
    message: 'Ops. Você precisa informar a data da safra do seu viho', 
    options: [BASIC_OPTION]
  },
  grape: {
    message: 'Ops. Você precisa informar o tipo de uva do seu vinho',
    options: [BASIC_OPTION]
  },
  stock: {
    message: 'Ops. É ruim querer tomar aquele bom vinho e chegar na adega e perceber que está faltando. Informe a quantidade de vinhos disponíveis para não correr este risco',
    options: [BASIC_OPTION]
  },
  country: {
    message: 'Ops. Um bom vinho sempre tem um país como referência. Informe o país de origem se lembrar posteriormente', 
    options: [BASIC_OPTION]    
  },
  description: {
    message: 'Ops. Um vinho sempre trás uma boa lembra, tem certeza que não deseja este não te trás uma boa memória?',
    options: [
      {
        text: 'Lembrei de uma agora',
        action: 'cancel',
        color: 'secondary'
      },
      {
        text: 'Poxa, este não',
        action: 'next',
        color: 'light'
      }
    ]
  },
  image: {
    message: 'Ops. Tem gente que gosta de relembrar os rótulos de seus vinhos, mas você pode fazer isso mais tarde', 
    options: [
      {
        text: 'Resolvi fazer agora xD',
        action: 'cancel',
        color: 'secondary'
      },
      {
        text: 'Realmente prefiro fazer mais tarde',
        action: 'next',
        color: 'light'
      }
    ]
  },
  cam: {
    message: 'Ops. Parace que você está tentando tirar uma foto sem ter acesso a câmera do disposivito',
    options:  [BASIC_OPTION]
  },
  create: {
    message: 'Algo aconteceu e não podemos salvar os dados, por favor, tente novamente',
    options: [BASIC_OPTION] 
  },
  export: {
    message: 'Ops! Não há nada para exportar',
    options: [BASIC_OPTION] 
  },
  exportSuccess: {
    message: 'Sua lista de vinho foi exportada com sucesso', 
    options: [{
      text: 'Ok',
      action: 'cancel',
      color: 'secondary'
    }]
  },
  deleteEmpty: {
    message: 'Você ainda não cadastrou nenhum vinho, a lista que você está vendo é um mock xD',
    options: [BASIC_OPTION]
  },
  deleteAll: {
    message: 'Tem certeza que deseja deletar todos os vinhos da sua adega?',
    options: [
      {
        text: 'Sim',
        action: 'next', 
        color: 'light'
      },
      {
        text: 'Não, Deus é mais!',
        action: 'cancel',
        color: 'secondary'
      }
    ]
  },
  deleteAllSuccess: {
    message: 'Sua lista de vinhos foi excluida com sucesso',
    options: [BASIC_OPTION]
  },
  delete: {
    message: 'Tem certeza que deseja excluir este vinho da sua adega?',
    options: [
      {
        text: 'Sim',
        action: 'next', 
        color: 'light'
      },
      {
        text: 'Não, Deus é mais!',
        action: 'cancel',
        color: 'secondary'
      }
    ]
  },
  tryEditMock: {
    message: 'Você não pode editar um mock, adicione um vinho a sua adega e tente novamente',
    options: [BASIC_OPTION]
  }
}