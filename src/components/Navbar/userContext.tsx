//Username declaration
import React, { useReducer } from "react"
//declare typescript interface
interface StateProps {
    username: string
}
interface initStateProps {
    username: string
    dispatch: any
}
const initState: initStateProps = {
    username: '',
    dispatch: null,
}

interface ActionProps {
    type: 'set' | 'reset'
    username?: string
}
//create reducer for state management
const reducer = (state: StateProps, action: ActionProps): StateProps => {
    switch (action.type) {
        case "set":
            return { ...state, username: action.username }
        case "reset":
            //console.log("reset!")
            return { ...state, username: '' }

        //default, do nothing
        default:
            return { ...state }
    }
}

//create context with initial conditions
const UserContext = React.createContext(initState)
//Provider Init
const UserProvider: React.FC = ({ children }) => {
    //use Reducer
    const [state, dispatch] = useReducer(reducer, initState)
    return (
        <UserContext.Provider value={{ username: state.username, dispatch }}>
            {/* Provider Wrapper, everything inside will be in further context */}
            {children}
        </UserContext.Provider>
    )
}
//Export conext and provider
export { UserContext, UserProvider }
