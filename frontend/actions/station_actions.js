export const RECEIVE_STATION = 'RECEIVE_STATION';
export const CLEAR_STATION = 'CLEAR_STATION';

export const receiveStation = station => ({
  type: RECEIVE_STATION,
  station,
});

export const clearStation = () => {
  console.log('clearStation called!');  
  return({
    type: CLEAR_STATION
  });
}
