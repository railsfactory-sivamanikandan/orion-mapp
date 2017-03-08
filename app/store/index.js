import { createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from '../reducers'

// to show the redux-logger only in dev env
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ })

export default function configureStore(initalState = {}){
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    )
  )

  return createStore(reducer, initalState, enhancer)
}
