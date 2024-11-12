import { useState } from 'react'

const App = () => {
  const [designacoes, setDesignacoes] = useState([])
  const [pessoas, setPessoas] = useState([      
    {
      nome: 'Bruno',
      atribuicoes: [
        "Indicador", "Indicador de entrada", "Áudio", "Vídeo", "Volante"
      ],
      tarefasPrincipais: ["Áudio", "Vídeo"]
    },
    {
      nome: 'Mateus',
      atribuicoes: [
        "Indicador", "Indicador de entrada", "Áudio", "Vídeo", "Volante"
      ],
      tarefasPrincipais: ["Áudio", "Vídeo"]
    },
    {
      nome: 'Lucas',
      atribuicoes: [
        "Indicador", "Indicador de entrada", "Áudio", "Vídeo", "Volante"
      ],
      tarefasPrincipais: ["Áudio", "Vídeo"]
    },
    {
      nome: 'Ricardo',
      atribuicoes: [
        "Indicador", "Indicador de entrada", "Áudio", "Vídeo", "Volante"
      ],
      tarefasPrincipais: ["Áudio", "Vídeo"]
    },
    {
      nome: 'Ramon',
      atribuicoes: [
        "Indicador", "Indicador de entrada", "Áudio", "Vídeo", "Volante"
      ],
      tarefasPrincipais: ["Áudio", "Vídeo"]
    },
    {
      nome: 'Henrique',
      atribuicoes: [
        "Indicador", "Indicador de entrada", "Áudio", "Vídeo", "Volante"
      ],
      tarefasPrincipais: ["Áudio", "Vídeo"]
    },
    {
      nome: 'Jhow',
      atribuicoes: [
        "Indicador", "Indicador de entrada", "Volante", "Áudio",
      ],
      tarefasPrincipais: ["Indicador", "Indicador de entrada", "Volante", "Áudio"]
    },
    {
      nome: 'Márcio',
      atribuicoes: [
        "Indicador", "Indicador de entrada", "Volante", "Áudio"
      ],
      tarefasPrincipais: ["Indicador", "Indicador de entrada", "Volante", "Áudio"]
    },
    {
      nome: 'Aurindo',
      atribuicoes: [
        "Indicador", "Indicador de entrada", "Volante", "Áudio"
      ],
      tarefasPrincipais: ["Indicador", "Indicador de entrada", "Volante", "Áudio"]
    },
    {
      nome: 'Gilberto',
      atribuicoes: [
        "Indicador", "Indicador de entrada", "Volante"
      ],
      tarefasPrincipais: ["Indicador", "Indicador de entrada", "Volante"]
    },
    {
      nome: 'Fernando Rocha',
      atribuicoes: [
        "Indicador", "Indicador de entrada", "Volante"
      ],
      tarefasPrincipais: ["Indicador", "Indicador de entrada", "Volante"]
    },
    {
      nome: 'Darci',
      atribuicoes: [
        "Indicador", "Indicador de entrada", "Volante"
      ],
      tarefasPrincipais: ["Indicador", "Indicador de entrada", "Volante"]
    },
    {
      nome: 'Edmilson',
      atribuicoes: [
        "Indicador", "Indicador de entrada", "Volante"
      ],
      tarefasPrincipais: ["Indicador", "Indicador de entrada", "Volante"]
    },
    {
      nome: 'Jonas',
      atribuicoes: [
        "Indicador", "Indicador de entrada", "Volante"
      ],
      tarefasPrincipais: ["Indicador", "Indicador de entrada", "Volante"]
    },
    {
      nome: 'Rubens',
      atribuicoes: [
        "Indicador", "Indicador de entrada", "Volante"
      ],
      tarefasPrincipais: ["Indicador", "Indicador de entrada", "Volante"]
    },
    {
      nome: 'Jean',
      atribuicoes: [
        "Indicador", "Indicador de entrada", "Volante"
      ],
      tarefasPrincipais: ["Indicador", "Indicador de entrada", "Volante"]
    },
    {
      nome: 'Kauan',
      atribuicoes: [
        "Volante"
      ],
      tarefasPrincipais: ["Volante"]
    },
    {
      nome: 'Orion',
      atribuicoes: [
        "Volante"
      ],
      tarefasPrincipais: ["Volante"]
    },
    {
      nome: 'Vinícius',
      atribuicoes: [
        "Volante"
      ],
      tarefasPrincipais: ["Volante"]
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

    const meses = [mes, mes + 1]

    meses.forEach(m => {
      for (let dia = 1; dia <= 31; dia++) {
        const data = new Date(ano, m, dia)
  
        if (data.getMonth() !== m) break
  
        if (diaSemanaDesejado.includes(data.getDay())) {
          datas.push(data)
        }
      }      
    })

    // retorna todas as tercas do mes
    return datas
  }

  function criarDesignacao(data, historicoDesignacoes) {
    const pessoasDisponiveis = [...pessoas]

    const inicializarHistorico = (pessoaNome) => {
      if (!historicoDesignacoes[pessoaNome]) {
        historicoDesignacoes[pessoaNome] = { total: 0 }
      }
    }

    const encontrarPessoa = (tarefa) => {
      const candidatasPrincipais = pessoasDisponiveis.filter(pessoa => 
        pessoa.tarefasPrincipais.includes(tarefa) && 
        !(historicoDesignacoes[pessoa.nome] && historicoDesignacoes[pessoa.nome][tarefa]?.includes(data.getMonth()))
      )

      const candidatas = candidatasPrincipais.length > 0 
        ? candidatasPrincipais 
        : pessoasDisponiveis.filter(pessoa => 
          pessoa.atribuicoes.includes(tarefa) &&
          !(historicoDesignacoes[pessoa.nome] && historicoDesignacoes[pessoa.nome][tarefa].includes(data.getMonth()))
        )

      const pessoaEscolhida = candidatas.sort((a, b) => {
        const atribuicaoA = historicoDesignacoes[a.nome]?.total || 0
        const atribuicaoB = historicoDesignacoes[b.nome]?.total || 0
        return atribuicaoA - atribuicaoB
      })[0]

      inicializarHistorico(pessoaEscolhida.nome)

      if (!historicoDesignacoes[pessoaEscolhida.nome][tarefa]) {
        historicoDesignacoes[pessoaEscolhida.nome][tarefa] = []
      }

      historicoDesignacoes[pessoaEscolhida.nome][tarefa].push(data.getMonth())
      historicoDesignacoes[pessoaEscolhida.nome].total += 1

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
    const historicoDesignacoes = {}
    const todasDesignacoes = datasTerca.map(data => criarDesignacao(data, historicoDesignacoes))
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