import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('graphs/chartjs-line', 'Integration | Component | graphs/chartjs line', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{graphs/chartjs-line}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#graphs/chartjs-line}}
      template block text
    {{/graphs/chartjs-line}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
