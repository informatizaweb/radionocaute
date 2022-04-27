angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.rDioAoVivo'
      2) Using $state.go programatically:
        $state.go('tabsController.rDioAoVivo');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page2
      /page1/tab2/page2
  */
  .state('tabsController.rDioAoVivo', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/rDioAoVivo.html',
        controller: 'rDioAoVivoCtrl'
      },
      'tab2': {
        templateUrl: 'templates/rDioAoVivo.html',
        controller: 'rDioAoVivoCtrl'
      }
    }
  })

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.programaO'
      2) Using $state.go programatically:
        $state.go('tabsController.programaO');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page3
      /page1/tab3/page3
  */
  .state('tabsController.programaO', {
    url: '/page3',
    views: {
      'tab1': {
        templateUrl: 'templates/programaO.html',
        controller: 'programaOCtrl'
      },
      'tab3': {
        templateUrl: 'templates/programaO.html',
        controller: 'programaOCtrl'
      }
    }
  })

  .state('tabsController.equipe', {
    url: '/page9',
    views: {
      'tab1': {
        templateUrl: 'templates/equipe.html',
        controller: 'equipeCtrl'
      },
      'tab8': {
        templateUrl: 'templates/equipe.html',
        controller: 'equipeCtrl'
      }
    }
  })

  .state('tabsController.ouvinte', {
    url: '/page10',
    views: {
      'tab1': {
        templateUrl: 'templates/ouvinte.html',
        controller: 'ouvinteCtrl'
      },
      'tab9': {
        templateUrl: 'templates/ouvinte.html',
        controller: 'ouvinteCtrl'
      }
    }
  })

  .state('tabsController.noticias', {
    url: '/page12',
    views: {
      'tab11': {
        templateUrl: 'templates/noticias.html',
        controller: 'noticiasCtrl'
      },
      'tab1': {
        templateUrl: 'templates/noticias.html',
        controller: 'noticiasCtrl'
      }
    }
  })

.state('tabsController.entretenimento', {
    url: '/page13',
    views: {
      'tab1': {
        templateUrl: 'templates/news.html',
        controller: 'entretenimentoCtrl'
      }
    }
  })

   .state('tabsController.news2', {
    url: '/page13/:id',
    views: {
      'tab1': {
        templateUrl: 'templates/news2.html',
        controller: 'news2Ctrl'
      }
    }
  })


 .state('tabsController.esporte', {
    url: '/page14',
    views: {
      'tab1': {
        templateUrl: 'templates/esporte.html',
        controller: 'esporteCtrl'
      }
    }
  })

.state('tabsController.patrocinadores', {
    url: '/page20',
    views: {
      'tab1': {
        templateUrl: 'templates/patrocinadores.html',
        controller: 'patrocinadoresCtrl'
      }
    }
  })

.state('tabsController.cadastro', {
    url: '/page30',
    views: {
      'tab1': {
        templateUrl: 'templates/cadastro.html',
        controller: 'cadastroCtrl'
      }
    }
  })

.state('tabsController.mundo', {
    url: '/page15',
    views: {
      'tab1': {
        templateUrl: 'templates/mundo.html',
        controller: 'mundoCtrl'
      }
    }
  })


 .state('tabsController.musica', {
    url: '/page16',
    views: {
      'tab1': {
        templateUrl: 'templates/musica.html',
        controller: 'musicaCtrl'
      }
    }
  })

.state('tabsController.geral', {
    url: '/page17',
    views: {
      'tab1': {
        templateUrl: 'templates/geral.html',
        controller: 'geralCtrl'
      }
    }
  })  

.state('tabsController.policia', {
    url: '/page18',
    views: {
      'tab1': {
        templateUrl: 'templates/policia.html',
        controller: 'policiaCtrl'
      }
    }
  })

.state('tabsController.politica', {
    url: '/page19',
    views: {
      'tab1': {
        templateUrl: 'templates/politica.html',
        controller: 'politicaCtrl'
      }
    }
  })

   .state('tabsController.artistas', {
    url: '/page11',
    views: {
      'tab1': {
        templateUrl: 'templates/artistas.html',
        controller: 'artistasCtrl'
      }
    }
  })

.state('tabsController.ebos', {
    url: '/page40',
    views: {
      'tab1': {
        templateUrl: 'templates/ebos.html',
        controller: 'ebosCtrl'
      }
    }
  })

.state('tabsController.simpatias', {
    url: '/page41',
    views: {
      'tab1': {
        templateUrl: 'templates/simpatias.html',
        controller: 'simpatiasCtrl'
      }
    }
  })

   .state('tabsController.artista', {
    url: '/page11/:id',
    views: {
      'tab1': {
        templateUrl: 'templates/artista.html',
        controller: 'artistaCtrl'
      }
    }
  })

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.promoEs'
      2) Using $state.go programatically:
        $state.go('tabsController.promoEs');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page4
      /page1/tab4/page4
  */
  .state('tabsController.promoEs', {
    url: '/page4',
    views: {
      'tab1': {
        templateUrl: 'templates/promoEs.html',
        controller: 'promoEsCtrl'
      },
      'tab4': {
        templateUrl: 'templates/promoEs.html',
        controller: 'promoEsCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('page', {
    url: '/page5',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.peASuaMSica'
      2) Using $state.go programatically:
        $state.go('tabsController.peASuaMSica');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page6
      /page1/tab5/page6
  */
  .state('tabsController.peASuaMSica', {
    url: '/page6',
    views: {
      'tab1': {
        templateUrl: 'templates/peASuaMSica.html',
        controller: 'peASuaMSicaCtrl'
      },
      'tab5': {
        templateUrl: 'templates/peASuaMSica.html',
        controller: 'peASuaMSicaCtrl'
      }
    }
  })

  .state('tabsController.Assistir', {
    url: '/page66',
    views: {
      'tab1': {
        templateUrl: 'templates/assistir.html',
        controller: 'AssistirCtrl'
      },
      'tab42': {
        templateUrl: 'templates/assistir.html',
        controller: 'AssistirCtrl'
      }
    }
  })


.state('tabsController.horoscopo', {
    url: '/page8',
    views: {
      'tab1': {
        templateUrl: 'templates/horoscopo.html',
        controller: 'horoscopoCtrl'
      },
      'tab6': {
        templateUrl: 'templates/horoscopo.html',
        controller: 'horoscopoCtrl'
      }
    }
  })

  .state('tabsController.inCio', {
    url: '/page7',
    views: {
      'tab1': {
        templateUrl: 'templates/inCio.html',
        controller: 'inCioCtrl'
      },
      'tab1': {
        templateUrl: 'templates/inCio.html',
        controller: 'inCioCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page7')



});