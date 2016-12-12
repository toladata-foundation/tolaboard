define('tolaboard/router', ['exports', 'ember', 'tolaboard/config/environment'], function (exports, _ember, _tolaboardConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _tolaboardConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('mydashboards');
    this.route('datasources');

    /* Ember can't do optional dynamic segments :( 
    	First designer route goes to empty designer with options for
    	editing existing or building new.
    	Routes to editing an existing Tolaboard use the dynamic segment */
    // this.route('designer');

    /* ok, new approach... same dynamic segment route, but id=0 means new
      designer model now needs to retrieve the JSON for the tolaboard if id <> 0
      Then designer calls layout and passes in the model
      If the id is not 0, then we display the tolaboard in edit mode */

    this.route('sharedboards');
    this.route('dashboard-view', { path: '/dashboard-view/:board_id' });
    this.route('dashboards', { path: '/dashboards/:board_id' });
    this.route('graph-options');
    this.route('login');
  });

  /* Forces a hash in the URL for routing. You need this if you want routing from the 
  server to direct traffic to "pages" or anchors other than index. Otherwise, you get 
  404's due to the route/file not existing on the server. You can also accomplish this 
  by having server traffic direct to index.html/#/route-name for all "other" routes. 
  The app needs to bootstrap, and that only happens through root. */
  Router.reopen({
    location: 'hash'
  });

  exports['default'] = Router;
});