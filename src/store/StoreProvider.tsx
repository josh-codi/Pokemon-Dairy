import { ReactNode, useReducer } from "react";
import Context from "./context";
import { reducer } from "./Reducer";
import { State } from "./types";
import session from "./session";

export const initialState: State = {
    pokemons: session.get('pokemons') || [],
    theme: session.get('theme') || ['rgba(232,83,130,1)', 'rgba(232,83,130,.7)']
};

type providerProps = {
  children: ReactNode;
};

const StoreProvider = ({ children }: providerProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { StoreProvider };
