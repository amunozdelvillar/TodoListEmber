/**
 * Created by angel on 12/09/14.
 */
App.EditTodoView = Ember.TextField.extend({
    didInsertElement: function(){
        this.$().focus();
    }
});

Ember.Handlebars.helper( 'edit-todo' , App.EditTodoView );