import { SEARCH_CHARACTER, GET_SERVER_LIST } from './search-form.types';

import xivapi from '../../axios/xivapi';

export const searchCharacter = (
  characterName = '',
  serverName = ''
) => async dispatch => {
  if (!characterName) {
    console.error(
      `Please enter a character name to search (ex: 'Mozzey Magick')`
    );
    return;
  }

  if (serverName.toLowerCase() === 'servers') {
    serverName.replace('servers', '');
  }

  try {
    const res = await xivapi.get(
      `/character/search?name=${characterName}&server=${serverName}`
    );
    const searchResults = res.data;

    dispatch({
      type: SEARCH_CHARACTER,
      payload: searchResults,
    });
  } catch (err) {
    console.error(err);
  }
};

export const getServerList = () => async dispatch => {
  try {
    const res = await xivapi.get(`/servers`);
    const serverList = res.data;

    dispatch({
      type: GET_SERVER_LIST,
      payload: serverList,
    });
  } catch (err) {
    console.error(err);
  }
};
