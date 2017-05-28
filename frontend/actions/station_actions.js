export const RECEIVE_STATION = 'RECEIVE_STATION';
export const CLEAR_STATION = 'CLEAR_STATION';

export const receiveStation = station => ({
  type: RECEIVE_STATION,
  station,
});

export const clearStation = () => ({
  type: CLEAR_STATION
});
