/* used by graph-builder-widget component to style selected graph */
import Ember from 'ember';

export function selectedGraph(params/*, hash*/) {
  if(params[0] === params[1]) {
    return 'selected-graph'; // this is a CSS class
  };
}

export default Ember.Helper.helper(selectedGraph);
