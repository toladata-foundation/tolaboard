import Ember from 'ember';

export function matchesGraphInput(params/*, hash*/) {
  var colName = params[0],
      graphModelName = params[1],
      graphInputs = params[2];

  var graphInputsHelper = graphInputs.map(function(gi) {
    return {graphmodel: gi.get('graphmodel').get('name'),
            graphmodelvalue: gi.get('graphmodelvalue')
          };
        }); // end map

  /*
  1. look for graphModelName in graphInputs
  2. if you find match, lookup colName in graphinput.graphmodelvalue
  3. if you find match, return true so it's selected */
  // console.log(graphInputs.getEach('graphmodel'));

  // examples... origin, group,
  // [{graphmodel: 'group', graphmodelvalue: 'origin'}, {graphmodel: 'size', graphmodelvalue: 'total_family_count'}]
  var modelWithInput = graphInputsHelper.findBy('graphmodel', graphModelName);
  if (modelWithInput) {
    return modelWithInput.graphmodelvalue === colName;
  }
  else return false;
}

export default Ember.Helper.helper(matchesGraphInput);
