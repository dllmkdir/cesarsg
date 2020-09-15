//Stage Context
import React, { useReducer } from "react"
//declare typescript interface
interface StateProps {
  stage: number
}
interface initStateProps {
  stage: number
  dispatch: any
}

interface ActionProps {
  type: "set"
  stage?: number
}

const initState: initStateProps = {
  stage: 1,
  dispatch: null,
}
//create reducer for state management
const reducer = (state: StateProps, action: ActionProps): StateProps => {
  switch (action.type) {
    case "set":
      return { ...state, stage: action.stage }
    //default, do nothing
    default:
      return { ...state }
  }
}

//create context with initial conditions
const StageContext = React.createContext(initState)
//Provider Init
const StageProvider: React.FC = ({ children }) => {
  //use Reducer
  const [state, dispatch] = useReducer(reducer, initState)
  return (
    <StageContext.Provider value={{ stage: state.stage, dispatch }}>
      {/* Provider Wrapper, everything inside will be in further context */}
      {children}
    </StageContext.Provider>
  )
}
//Export conext and provider
export { StageContext, StageProvider }
