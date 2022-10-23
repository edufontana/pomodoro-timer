import { ActionTypes } from './actons'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export function cycleReducer(state: CyclesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      return {
        ...state,
        cycles: [...state.cycles, action.payload.newCycle],
        activeCycleId: action.payload.newCycle.id,
      }
    case ActionTypes.INTERRUPT_CURRENT_CYCLE:
      return {
        ...state,
        cycles: state.cycles.map((item) => {
          if (item.id === state.activeCycleId) {
            return { ...item, interruptedDate: new Date() }
          } else {
            return item
          }
        }),
        activeCycleId: null,
      }

    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED:
      return {
        ...state,
        cycles: state.cycles.map((item) => {
          if (item.id === state.activeCycleId) {
            return { ...item, finishedDate: new Date() }
          } else {
            return item
          }
        }),
        activeCycleId: null,
      }
    default:
      return state
  }
}
