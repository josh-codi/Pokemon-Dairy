import  { Reducer } from "react";
import { State, Pokemon } from "./types";
import session from "./session";

export type ACTION = {type: 'pokemon', content:Pokemon} | {type: 'theme', content: string[]}

export const reducer: Reducer<State, ACTION> = (state, action) => {
  switch (action.type) {
    case 'pokemon':
        session.set('pokemons', action.content)
        return {...state, pokemons: action.content}
    case 'theme':
        session.set('theme', action.content)
        return {...state, theme: action.content}
    default:
      return state;
  }
};
