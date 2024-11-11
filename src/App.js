import { useState } from 'react'

const App = () => {
  const [designacoes, setDesignacoes] = useState([])
  const [pessoas, setPessoas] = useState([
      {
        nome: 'Mateus',
        atribuicoes: [
          "Indicador", "Indicador de entrada", "Áudio", "Vídeo"
        ]
      },
      {
        nome: 'Bruno',
        atribuicoes: [
          "Indicador", "Indicador de entrada", "Áudio", "Vídeo"
        ]
      },
      {
        nome: 'Lucas',
        atribuicoes: [
          "Indicador", "Indicador de entrada", "Áudio", "Vídeo"
        ]
      },
      {
        nome: 'Ricardo',
        atribuicoes: [
          "Indicador", "Indicador de entrada", "Áudio", "Vídeo"
        ]
      },
      {
        nome: 'Ramon',
        atribuicoes: [
          "Indicador", "Indicador de entrada", "Áudio", "Vídeo"
        ]
      },
      {
        nome: 'Henrique',
        atribuicoes: [
          "Indicador", "Indicador de entrada", "Áudio", "Vídeo"
        ]
      },
      {
        nome: 'Jhow',
        atribuicoes: [
          "Indicador", "Indicador de entrada", "Volante", "Áudio",
        ]
      },
      {
        nome: 'Márcio',
        atribuicoes: [
          "Indicador", "Indicador de entrada", "Volante", "Áudio",
        ]
      },
      {
        nome: 'Aurindo',
        atribuicoes: [
          "Indicador", "Indicador de entrada", "Volante", "Áudio",
        ]
      },
      {
        nome: 'Gilberto',
        atribuicoes: [
          "Indicador", "Indicador de entrada", "Volante"
        ]
      },
      {
        nome: 'Fernando Rocha',
        atribuicoes: [
          "Indicador", "Indicador de entrada", "Volante"
        ]
      },
      {
        nome: 'Darci',
        atribuicoes: [
          "Indicador", "Indicador de entrada", "Volante"
        ]
      },
      {
        nome: 'Edmilson',
        atribuicoes: [
          "Indicador", "Indicador de entrada", "Volante"
        ]
      },
      {
        nome: 'Jonas',
        atribuicoes: [
          "Indicador", "Indicador de entrada", "Volante"
        ]
      },
      {
        nome: 'Kauan',
        atribuicoes: [
          "Volante"
        ]
      },
      {
        nome: 'Órion',
        atribuicoes: [
          "Volante"
        ]
      }
  ])

  const tarefas = [
    "Volante",
    "Volante",
    "Indicador",
    "Indicador de entrada",
    "Áudio",
    "Vídeo"
  ]

  const obterDataEspecifica = (diaSemanaDesejado) => {
      const data_atual = new Date()
      const ano = data_atual.getFullYear()
      const mes = data_atual.getMonth()
      const datas = []

      for (let dia = 1; dia <= 31; dia++) {
          const data = new Date(ano, mes, dia)

          if (data.getMonth() !== mes) break

          if (diaSemanaDesejado.includes(data.getDay())) {
              datas.push(data)
          }
      }

      return datas
  }

  function criarDesignacao(data) {
    const pessoasDisponiveis = [...pessoas]

    const encontrarPessoa = (tarefa) => {
      const candidatas = pessoasDisponiveis.filter(pessoa => pessoa.atribuicoes.includes(tarefa))

      if (candidatas.length === 0) {
        return "Nenhuma pessoa encontrada!"
      }

      const indiceAleatorio = Math.floor(Math.random() * candidatas.length)
      const pessoaEscolhida = candidatas[indiceAleatorio]

      const index = pessoasDisponiveis.indexOf(pessoaEscolhida)
      if (index !== -1) {
        pessoasDisponiveis.splice(index, 1)
      }

      return pessoaEscolhida.nome
    }

    return {
      data: data.toLocaleDateString(),
      designacoes: tarefas.map(tarefa => ({
        tarefa,
        pessoa: encontrarPessoa(tarefa)
      }))
    }
  }    

  const gerarDesignacoes = () => {
    const datasTerca = obterDataEspecifica([2])
    const todasDesignacoes = datasTerca.map(data => criarDesignacao(data))
    setDesignacoes(todasDesignacoes)
  }

  return (
    <div className='container py-5'>
      <div className='d-flex align-items-center justify-content-between w-100 mb-5'>
        <h1>Lista de tarefas</h1>
        <button className='btn btn-primary' onClick={gerarDesignacoes}>Gerar</button> 
      </div>

      {designacoes.length > 0 && (
        designacoes.map((designacao, index) => (
            <div key={index}>
              <h2>{designacao.data}</h2>
                <ul>
                  {designacao.designacoes.map((item, index) => (
                    <li key={index}>{item.tarefa} : {item.pessoa}</li>
                  ))}
                </ul>
            </div>
        ))
      )}
    </div>
  );
}

export default App