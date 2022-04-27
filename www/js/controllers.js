angular.module('app.controllers', [])

.controller('rDioAoVivoCtrl', function($scope) {

})

.controller('programaOCtrl', function($scope, $log, $ionicPopup, FeedService) {

$scope.items = [];

  $scope.successGetCategoryItems2 = function(data) {
    $scope.items = data.items;
  };

  $scope.errorGetCategoryItems = function(status) {
    $scope.showAlert = function() {
       var alertPopup = $ionicPopup.alert({
         title: 'Erro na leitura do conteúdo',
         template: 'Verifique sua conexão com a internet'
       });
       alertPopup.then(function(res) {
         $log.debug('Erro na leitura do conteúdo');
       });
     };
     $scope.showAlert();
  };

  FeedService.getCategoryItems2($scope.successGetCategoryItems2, $scope.errorGetCategoryItems);
})

.controller('equipeCtrl', function($scope, $log, $ionicPopup, FeedService) {

$scope.items = [];

  $scope.successGetCategoryItems17 = function(data) {
    $scope.items = data.items;
  };

  $scope.errorGetCategoryItems = function(status) {
    $scope.showAlert = function() {
       var alertPopup = $ionicPopup.alert({
         title: 'Erro na leitura do conteúdo',
         template: 'Verifique sua conexão com a internet'
       });
       alertPopup.then(function(res) {
         $log.debug('Erro na leitura do conteúdo');
       });
     };
     $scope.showAlert();
  };

  FeedService.getCategoryItems17($scope.successGetCategoryItems17, $scope.errorGetCategoryItems);
})


.controller('ouvinteCtrl', function($scope, $log, $ionicPopup, FeedService) {

$scope.items = [];

  $scope.successGetCategoryItems5 = function(data) {
    $scope.items = data.users;
  };

  $scope.errorGetCategoryItems = function(status) {
    $scope.showAlert = function() {
       var alertPopup = $ionicPopup.alert({
         title: 'Erro na leitura do conteúdo',
         template: 'Verifique sua conexão com a internet'
       });
       alertPopup.then(function(res) {
         $log.debug('Erro na leitura do conteúdo');
       });
     };
     $scope.showAlert();
  };

  FeedService.getCategoryItems5($scope.successGetCategoryItems5, $scope.errorGetCategoryItems);
})

.controller('artistasCtrl', function($scope, $state, $log, $ionicPopup, FeedService) {

  $scope.items = [];

  $scope.goToContent = function(id) {
    $state.go('tabsController.artista', { id: id });
  };

  $scope.successGetCategoryItems6 = function(data) {
    $scope.items = data.items;
  };

  $scope.errorGetCategoryItems = function(status) {
    $scope.showAlert = function() {
       var alertPopup = $ionicPopup.alert({
         title: 'Erro na leitura do conteúdo',
         template: 'Verifique sua conexão com a internet'
       });
       alertPopup.then(function(res) {
         $log.debug('Erro na leitura do conteúdo');
       });
     };
     $scope.showAlert();
  };

  FeedService.getCategoryItems6($scope.successGetCategoryItems6, $scope.errorGetCategoryItems);

})

.controller('ebosCtrl', function($scope, $state, $log, $ionicPopup, FeedService) {

  $scope.items = [];

 $scope.goToContent = function(id) {
    $state.go('tabsController.news2', { id: id });
  };

  $scope.successGetCategoryItems15 = function(data) {
    $scope.items = data.items;
  };

  $scope.errorGetCategoryItems = function(status) {
    $scope.showAlert = function() {
       var alertPopup = $ionicPopup.alert({
         title: 'Erro na leitura do conteúdo',
         template: 'Verifique sua conexão com a internet'
       });
       alertPopup.then(function(res) {
         $log.debug('Erro na leitura do conteúdo');
       });
     };
     $scope.showAlert();
  };

  FeedService.getCategoryItems15($scope.successGetCategoryItems15, $scope.errorGetCategoryItems);

})

.controller('simpatiasCtrl', function($scope, $state, $log, $ionicPopup, FeedService) {

  $scope.items = [];

 $scope.goToContent = function(id) {
    $state.go('tabsController.news2', { id: id });
  };

  $scope.successGetCategoryItems16 = function(data) {
    $scope.items = data.items;
  };

  $scope.errorGetCategoryItems = function(status) {
    $scope.showAlert = function() {
       var alertPopup = $ionicPopup.alert({
         title: 'Erro na leitura do conteúdo',
         template: 'Verifique sua conexão com a internet'
       });
       alertPopup.then(function(res) {
         $log.debug('Erro na leitura do conteúdo');
       });
     };
     $scope.showAlert();
  };

  FeedService.getCategoryItems16($scope.successGetCategoryItems16, $scope.errorGetCategoryItems);

})

.controller('artistaCtrl', function($scope, $stateParams, $log, $ionicPopup, FeedService) {

  $scope.item = {};

  $scope.successGetContentItem = function(data) {
    console.log(data);
    $scope.item = data;
  };

  $scope.errorGetContentItem = function(status) {
    $scope.showAlert = function() {
       var alertPopup = $ionicPopup.alert({
         title: 'Erro na leitura do conteúdo',
         template: 'Verifique sua conexão com a internet'
       });
       alertPopup.then(function(res) {
         $log.debug('Erro na leitura do conteúdo');
       });
     };
     $scope.showAlert();
  };

  FeedService.getContentItem($stateParams.id, $scope.successGetContentItem, $scope.errorGetContentItem);

})

.controller('equipe2Ctrl', function($scope, $log, $ionicPopup, FeedService) {

$scope.items = [];

  $scope.successGetCategoryItems4 = function(data) {
    $scope.items = data.items;
  };

  $scope.errorGetCategoryItems = function(status) {
    $scope.showAlert = function() {
       var alertPopup = $ionicPopup.alert({
         title: 'Erro na leitura do conteúdo',
         template: 'Verifique sua conexão com a internet'
       });
       alertPopup.then(function(res) {
         $log.debug('Erro na leitura do conteúdo');
       });
     };
     $scope.showAlert();
  };

  FeedService.getCategoryItems4($scope.successGetCategoryItems4, $scope.errorGetCategoryItems);
})


//Entretenimento
.controller('entretenimentoCtrl', function($scope, $state, $log, $ionicPopup, FeedService) {

  $scope.items = [];

  $scope.goToContent = function(id) {
    $state.go('tabsController.news2', { id: id });
  };

  $scope.successGetCategoryItems7 = function(data) {
    $scope.items = data.items;
  };

  $scope.errorGetCategoryItems = function(status) {
    $scope.showAlert = function() {
       var alertPopup = $ionicPopup.alert({
         title: 'Erro na leitura do conteúdo',
         template: 'Verifique sua conexão com a internet'
       });
       alertPopup.then(function(res) {
         $log.debug('Erro na leitura do conteúdo');
       });
     };
     $scope.showAlert();
  };

  FeedService.getCategoryItems7($scope.successGetCategoryItems7, $scope.errorGetCategoryItems);

})
//Fim de Entretenimento

//Patrocinadores
.controller('patrocinadoresCtrl', function($scope, $state, $log, $ionicPopup, FeedService) {

  $scope.items = [];

  $scope.goToContent = function(id) {
    $state.go('tabsController.news2', { id: id });
  };

  $scope.successGetCategoryItems14 = function(data) {
    $scope.items = data.items;
  };

  $scope.errorGetCategoryItems = function(status) {
    $scope.showAlert = function() {
       var alertPopup = $ionicPopup.alert({
         title: 'Erro na leitura do conteúdo',
         template: 'Verifique sua conexão com a internet'
       });
       alertPopup.then(function(res) {
         $log.debug('Erro na leitura do conteúdo');
       });
     };
     $scope.showAlert();
  };

  FeedService.getCategoryItems14($scope.successGetCategoryItems14, $scope.errorGetCategoryItems);

})
//Fim de Patrocinadores


//Esporte
.controller('esporteCtrl', function($scope, $state, $log, $ionicPopup, FeedService) {

  $scope.items = [];

  $scope.goToContent = function(id) {
    $state.go('tabsController.news2', { id: id });
  };

  $scope.successGetCategoryItems8 = function(data) {
    $scope.items = data.items;
  };

  $scope.errorGetCategoryItems = function(status) {
    $scope.showAlert = function() {
       var alertPopup = $ionicPopup.alert({
         title: 'Erro na leitura do conteúdo',
         template: 'Verifique sua conexão com a internet'
       });
       alertPopup.then(function(res) {
         $log.debug('Erro na leitura do conteúdo');
       });
     };
     $scope.showAlert();
  };

  FeedService.getCategoryItems8($scope.successGetCategoryItems8, $scope.errorGetCategoryItems);

})
//Fim de Esporte

//Mundo
.controller('mundoCtrl', function($scope, $state, $log, $ionicPopup, FeedService) {

  $scope.items = [];

  $scope.goToContent = function(id) {
    $state.go('tabsController.news2', { id: id });
  };

  $scope.successGetCategoryItems9 = function(data) {
    $scope.items = data.items;
  };

  $scope.errorGetCategoryItems = function(status) {
    $scope.showAlert = function() {
       var alertPopup = $ionicPopup.alert({
         title: 'Erro na leitura do conteúdo',
         template: 'Verifique sua conexão com a internet'
       });
       alertPopup.then(function(res) {
         $log.debug('Erro na leitura do conteúdo');
       });
     };
     $scope.showAlert();
  };

  FeedService.getCategoryItems9($scope.successGetCategoryItems9, $scope.errorGetCategoryItems);

})
//Fim de Mundo

//Música
.controller('musicaCtrl', function($scope, $state, $log, $ionicPopup, FeedService) {

  $scope.items = [];

  $scope.goToContent = function(id) {
    $state.go('tabsController.news2', { id: id });
  };

  $scope.successGetCategoryItems10 = function(data) {
    $scope.items = data.items;
  };

  $scope.errorGetCategoryItems = function(status) {
    $scope.showAlert = function() {
       var alertPopup = $ionicPopup.alert({
         title: 'Erro na leitura do conteúdo',
         template: 'Verifique sua conexão com a internet'
       });
       alertPopup.then(function(res) {
         $log.debug('Erro na leitura do conteúdo');
       });
     };
     $scope.showAlert();
  };

  FeedService.getCategoryItems10($scope.successGetCategoryItems10, $scope.errorGetCategoryItems);

})
//Fim de Música

//Notícias em Geral
.controller('geralCtrl', function($scope, $state, $log, $ionicPopup, FeedService) {

  $scope.items = [];

  $scope.goToContent = function(id) {
    $state.go('tabsController.news2', { id: id });
  };

  $scope.successGetCategoryItems11 = function(data) {
    $scope.items = data.items;
  };

  $scope.errorGetCategoryItems = function(status) {
    $scope.showAlert = function() {
       var alertPopup = $ionicPopup.alert({
         title: 'Erro na leitura do conteúdo',
         template: 'Verifique sua conexão com a internet'
       });
       alertPopup.then(function(res) {
         $log.debug('Erro na leitura do conteúdo');
       });
     };
     $scope.showAlert();
  };

  FeedService.getCategoryItems11($scope.successGetCategoryItems11, $scope.errorGetCategoryItems);

})
//Fim de Notícais em Geral

//Polícia
.controller('policiaCtrl', function($scope, $state, $log, $ionicPopup, FeedService) {

  $scope.items = [];

  $scope.goToContent = function(id) {
    $state.go('tabsController.news2', { id: id });
  };

  $scope.successGetCategoryItems12 = function(data) {
    $scope.items = data.items;
  };

  $scope.errorGetCategoryItems = function(status) {
    $scope.showAlert = function() {
       var alertPopup = $ionicPopup.alert({
         title: 'Erro na leitura do conteúdo',
         template: 'Verifique sua conexão com a internet'
       });
       alertPopup.then(function(res) {
         $log.debug('Erro na leitura do conteúdo');
       });
     };
     $scope.showAlert();
  };

  FeedService.getCategoryItems12($scope.successGetCategoryItems12, $scope.errorGetCategoryItems);

})
//Fim Polícia

//Política
.controller('politicaCtrl', function($scope, $state, $log, $ionicPopup, FeedService) {

  $scope.items = [];

  $scope.goToContent = function(id) {
    $state.go('tabsController.news2', { id: id });
  };

  $scope.successGetCategoryItems13 = function(data) {
    $scope.items = data.items;
  };

  $scope.errorGetCategoryItems = function(status) {
    $scope.showAlert = function() {
       var alertPopup = $ionicPopup.alert({
         title: 'Erro na leitura do conteúdo',
         template: 'Verifique sua conexão com a internet'
       });
       alertPopup.then(function(res) {
         $log.debug('Erro na leitura do conteúdo');
       });
     };
     $scope.showAlert();
  };

  FeedService.getCategoryItems13($scope.successGetCategoryItems13, $scope.errorGetCategoryItems);

})
//Fim de Política

.controller('news2Ctrl', function($scope, $stateParams, $log, $ionicPopup, FeedService) {

  $scope.item = {};

  $scope.successGetContentItem = function(data) {
    console.log(data);
    $scope.item = data;
  };

  $scope.errorGetContentItem = function(status) {
    $scope.showAlert = function() {
       var alertPopup = $ionicPopup.alert({
         title: 'Erro na leitura do conteúdo',
         template: 'Verifique sua conexão com a internet'
       });
       alertPopup.then(function(res) {
         $log.debug('Erro na leitura do conteúdo');
       });
     };
     $scope.showAlert();
  };

  FeedService.getContentItem($stateParams.id, $scope.successGetContentItem, $scope.errorGetContentItem);

})



.controller('promoEsCtrl', function($scope, $log, $ionicPopup, FeedService) {

  $scope.items = [];

  $scope.successGetCategoryItems = function(data) {
    $scope.items = data.items;
  };

  $scope.errorGetCategoryItems = function(status) {
    $scope.showAlert = function() {
       var alertPopup = $ionicPopup.alert({
         title: 'Erro na leitura do conteúdo',
         template: 'Verifique sua conexão com a internet'
       });
       alertPopup.then(function(res) {
         $log.debug('Erro na leitura do conteúdo');
       });
     };
     $scope.showAlert();
  };

  FeedService.getCategoryItems($scope.successGetCategoryItems, $scope.errorGetCategoryItems);

})


.controller('cadastroCtrl', function($scope, $log, $ionicPopup, FeedService) {

$scope.items = [];

  $scope.successGetCategoryItems3 = function(data) {
    $scope.items = data.items;
  };

  $scope.errorGetCategoryItems = function(status) {
    $scope.showAlert = function() {
       var alertPopup = $ionicPopup.alert({
         title: 'Erro na leitura do conteúdo',
         template: 'Verifique sua conexão com a internet'
       });
       alertPopup.then(function(res) {
         $log.debug('Erro na leitura do conteúdo');
       });
     };
     $scope.showAlert();
  };

  FeedService.getCategoryItems3($scope.successGetCategoryItems3, $scope.errorGetCategoryItems);
})



.controller('horoscopoCtrl', function($scope, $log, $ionicPopup, FeedService) {

$scope.items = [];

  $scope.successGetCategoryItems3 = function(data) {
    $scope.items = data.items;
  };

  $scope.errorGetCategoryItems = function(status) {
    $scope.showAlert = function() {
       var alertPopup = $ionicPopup.alert({
         title: 'Erro na leitura do conteúdo',
         template: 'Verifique sua conexão com a internet'
       });
       alertPopup.then(function(res) {
         $log.debug('Erro na leitura do conteúdo');
       });
     };
     $scope.showAlert();
  };

  FeedService.getCategoryItems3($scope.successGetCategoryItems3, $scope.errorGetCategoryItems);
})

.controller('pageCtrl', function($scope) {

})

.controller('noticiasCtrl', function($scope) {

})

.controller('peASuaMSicaCtrl', function($scope) {

})

.controller('AssistirCtrl', function($scope) {

})

.controller('inCioCtrl', function($scope) {

});
