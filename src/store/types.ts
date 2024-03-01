import React from "react";

export type State = {
    pokemons: {
        id: string,
        img: string,
        name: string,
        about: {
            height: string,
            Weight: string,
            Abilities: string[]
        },
        stats: {
            HP : number,
            Attack : number,
            Defense : number,
            'Special Attack' : number,
            'Special Defense' : number,
            Speed : number,
        }
    }[],
    theme: string[]
};

export type Pokemon = {
        id: string,
        img: string,
        name: string,
        about: {
            height: string,
            Weight: string,
            Abilities: string[]
        },
        stats: {
            HP : number,
            Attack : number,
            Defense : number,
            'Special Attack' : number,
            'Special Defense' : number,
            Speed : number,
        }
    }[]