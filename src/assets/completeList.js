import astronauts from './astronauts';
import aliens from './aliens';
import actions from './actions';
import neutrals from './neutralList';

export default {
  ...astronauts,
  ...aliens,
  ...actions,
  ...neutrals,
};
