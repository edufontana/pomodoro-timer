import { useContext } from 'react'
import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  const { cycle } = useContext(CycleContext)

  return (
    <HistoryContainer>
      <h1>Meu historico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>há 2 meses</td>
              <td>
                <Status statuscolor="green">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>há 2 meses</td>
              <td>
                <Status statuscolor="red">Interrompido</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>há 2 meses</td>
              <td>
                <Status statuscolor="yellow">Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>há 2 meses</td>
              <td>
                <Status statuscolor="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>há 2 meses</td>
              <td>
                <Status statuscolor="green">Concluído</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
