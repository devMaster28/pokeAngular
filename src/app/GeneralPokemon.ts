export interface ListPokemon {
    count: number;
    next: string;
    previous: string;
    results: GeneralDataPokemon[];
}

export interface GeneralDataPokemon {
    name: string;
    url: string;
}

export interface DetailsPokemon{
    abilities: object[];
    base_experience: number;
    forms: [];
    game_indices: [];
    height: number;
    held_items: [];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: [];
    name: string;
    order: number;
    species: object;
    sprites: object;
    stats: [];
    types: slot[];
    weight: number;

}

export interface slot{
    slot:string;
    type:Tipo;

}
export interface Tipo{
    name:string;
    url:string;
}