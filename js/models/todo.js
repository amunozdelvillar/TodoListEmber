/**
 * Created by angel on 11/09/14.
 */
App.Todo = DS.Model.extend({
    title:       DS.attr('string'),
    isCompleted: DS.attr('boolean')
});


//Fixtures are a way to put sample data into an app before connecting the app to long-term
//persistence
App.Todo.FIXTURES  =
    [
    {
        id: 1,
        title: 'Learn Ember.js',
        isCompleted: true
    },
    {
        id: 2,
        title: '...',
        isCompleted: false
    },
    {
        id: 3,
        title: 'Profit!!!',
        isCompleted: false
    }
];