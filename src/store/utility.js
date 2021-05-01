const updateState = (oldState, updatedKey) => {
  return { ...oldState, ...updatedKey };
};
export default updateState;
