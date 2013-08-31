Todos.Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

Todos.Todo.FIXTURES = [
  {
    id: 1,
      title: 'Finish this todoozle',
      isCompleted: true
  },
  {
    id: 2,
    title: 'build all the ember things',
    isCompleted: false
  },
  {
    id: 3,
    title: 'dollar dollar bills',
    isCompleted: false
  }
];
