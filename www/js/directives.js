angular.module('app.directives', [])

.filter('htmlToPlaintext', function() {
    return function(text) {
      return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
})

.directive('blankDirective', [function() {

}]);
