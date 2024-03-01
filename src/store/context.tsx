import { createContext } from "react";

import { ACTION } from "./Reducer";
import { State } from "./types";

type ContextType = {
    state: State,
    dispatch: React.Dispatch<ACTION>
};

const Context = createContext<ContextType | any>({})

export default Context