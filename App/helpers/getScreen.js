function getScreen (props, stackScreen) {
  const routes = props.state.routes;
  const index = props.state.index;
  if (routes[index].params === undefined) return false;
  if(routes[index].params.screen === stackScreen) {
    return true;
  }
  return false;
};

export default getScreen;