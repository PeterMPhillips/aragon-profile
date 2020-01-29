import { createContext } from 'react';
import { initialState } from '../../stateManagers/box';
var BoxContext = createContext(initialState);
export default BoxContext;