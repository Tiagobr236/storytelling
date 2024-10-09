  import { getCSS, tickConfig } from "./common.js"

  async function quantidadeUsuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/tiagoyamashita/api/main/numero-u'
    const res = await fetch (url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeDeUsuarios = Object.values(dados)

    const data = [
        {
            x: nomeDasRedes,
            y: quantidadeDeUsuarios,
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')
            }
        }
    ]
    const laytout = {
        plot_bgcolor: getCSS('--primary-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Redes sociais com mais usuários',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                size: #0,
                font: getCSS('--font')
            }
            },
            xaxis:{
                
            }
        }
    }
  }