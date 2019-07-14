import { SEARCH_CHARACTER } from './search.types';

import xivapi from '../../axios/xivapi';

export const searchCharacter = (
  characterName = '',
  serverName = ''
) => async dispatch => {
  if (!characterName) {
    throw new Error(
      `Please enter a character name to search (ex: 'Mozzey Magick')`
    );
  }

  const res = await xivapi.get(
    `/character/search?name=${characterName}&server=${serverName}`
  );

  dispatch({
    type: SEARCH_CHARACTER,
    payload: res.data,
  });
};
