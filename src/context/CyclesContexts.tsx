import React, { createContext, ReactNode, useReducer, useState } from 'react'
import { Cycle, cycleReducer, ActionTypes } from '../reducers/cycles'

interface CreateCycleData {
  task: string
  minutesAmount: number
}

interface CycleContextDate {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: CreateCycleData) => void
  interruptCurrentCycle: () => void
}

export const CycleContext = createContext({} as CycleContextDate)

interface CyclesContextProviderProps {
  children: ReactNode
}

export function CycleContextProvider({ children }: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(cycleReducer, {
    cycles: [],
    activeCycleId: null,
  })

  const { activeCycleId, cycles } = cyclesState

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function markCurrentCycleAsFinished() {
    dispatch({
      type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
      payload: {
        activeCycleId,
      },
    })
    /*    setCycles((state) =>
      state.map((item) => {
        if (item.id === activeCycleId) {
          return { ...item, finishedDate: new Date() }
        } else {
          return item
        }
      }),
    ) */
  }

  function createNewCycle(data: CreateCycleData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    dispatch({
      type: ActionTypes.ADD_NEW_CYCLE,
      payload: {
        newCycle,
      },
    })
    /*    setCycles((state) => [...state, newCycle]) */
    setAmountSecondsPassed(0)
  }

  function interruptCurrentCycle() {
    dispatch({
      type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
      payload: {
        activeCycleId,
      },
    })
    /* setCycles((state) =>
      state.map((item) => {
        if (item.id === activeCycleId) {
          return { ...item, interruptedDate: new Date() }
        } else {
          return item
        }
      }),
    ) */
  }

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  return (
    <CycleContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSecondsPassed,
        setSecondsPassed,
        createNewCycle,
        interruptCurrentCycle,
      }}
    >
      {children}
    </CycleContext.Provider>
  )
}
