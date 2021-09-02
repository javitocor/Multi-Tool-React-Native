function getScreen (props, stackScreen) {
  const routes = props.state.routes;
  const index = props.state.index;
  if (routes[index].params === undefined) return false;
  if (index === 2) {
    const subindex = routes[index].state.index;
    if(routes[index].state.routeNames[subindex] === stackScreen) {
      return true;
    } 
      return false;
    
  } 
  if(routes[index].params.screen === stackScreen) {
    return true;
  }   
  return false;
};

export default getScreen;