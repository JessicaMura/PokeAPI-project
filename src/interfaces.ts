export type Ability = {
ability: { name: string; url: string};
is_hidden: boolean;
slot: number;
};

export type Form = {
    name: string;
    url: string;
}
export type GameIndice = {
    game_index: number;
    is_default: boolean;
    location_area_encounters: string;
}
export type VersionGroupDetail = {
    level_learned_at: number;
    move_learn_method: { name: number; url: string};
    order: number | string ;
    version_group: { name: string; url: string};
}
export type Move = {
    move: {name: string; url: string};
    version_group_details: Array<VersionGroupDetail>;
}  
export type Species = {
    species: {name: string; url: string};

}
export type sprites = {
    back_default: number|string;
    back_female: number|string;
    back_shiny: number|string;
    front_default: string;
}
export type Stat = {
    base_stat: number;
    effort: number;
    stat: { name: string; url: string };
}
export type Type = {
    slot: number;
    type: { name: string; url: string };
  };

  export interface Pokemon {
    abilities: Array<Ability>;
    base_experience: number;
    cries: { latest: string; legacy: number|string };
    forms: { name: string; url: string};
    game_indices: [];
    height: number;
    held_items: [];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Array<Move>;
    name: string;
    order: number;
    past_abilities: [];
    past_types: [];
    species: { name: string; url: string };
    stats: Array<Stat>;
    types: {slot: number; name: string; url: string};
    weight: number;
  }  