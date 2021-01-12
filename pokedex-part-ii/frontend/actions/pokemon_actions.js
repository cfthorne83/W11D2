import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_SINGLE_POKEMON = "RECEIVE_SINGLE_POKEMON";

export const receiveSinglePokemon = payload => {
  return {
    type: RECEIVE_SINGLE_POKEMON,
    payload: payload
  }
};

export const requestSinglePokemon = pokeId => {
  APIUtil.fetchSinglePokemon(pokeId)
    .then( poke => dispatch(receiveSinglePokemon(poke)))
};

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
})

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

