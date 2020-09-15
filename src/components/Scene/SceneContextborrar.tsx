//Scene Context
import React, { useReducer } from "react"
//declare typescript interface
interface StateProps {
  stage: number
}
interface initStateProps {
  stage: number
  dispatch: any
}
const initState: initStateProps = {
  stage: 0,
  dispatch: null,
}

interface ActionProps {
  type: "set" | "stepUp" | "stepDown" | "reset"
  stage?: number
}
//create reducer for state management
const reducer = (state: StateProps, action: ActionProps): StateProps => {
  switch (action.type) {
    case "set":
      return { ...state, stage: action.stage }
    case "stepUp":
      return { ...state, stage: state.stage + 1 }
    case "stepDown":
      return { ...state, stage: state.stage - 1 }
    case "reset":
      //console.log("reset!")
      return { ...state, stage: 0 }
    //default, do nothing
    default:
      return { ...state }
  }
}

//create context with initial conditions
const SceneContext = React.createContext(initState)
//Provider Init
const SceneProvider: React.FC = ({ children }) => {
  //use Reducer
  const [state, dispatch] = useReducer(reducer, initState)
  return (
    <SceneContext.Provider value={{ stage: state.stage, dispatch }}>
      {/* Provider Wrapper, everything inside will be in further context */}
      {children}
    </SceneContext.Provider>
  )
}
//Export conext and provider
export { SceneContext, SceneProvider }
