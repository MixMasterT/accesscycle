export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';
export const CLEAR_BOUNDS = 'CLEAR_BOUNDS';

export const updateBounds = bounds => ({
  type: UPDATE_BOUNDS,
  bounds
});

export const clearBounds = () => ({
  type: CLEAR_BOUNDS,
});
