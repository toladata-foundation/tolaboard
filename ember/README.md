TolaBoard

===

To deploy TolaBoard to TolaTables:
    - comment the following lines b/c TolaTables already has bootstrap loaded in `ember-cli-build.js` file:
        -- app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');
        -- app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');
    - Remove `{{partial 'nav'}}` from the file: `app/templates/application.hbs` because we want to keep the TolaTables navigation bar.
    - ember build --environment=production  --output-path dist/static/
