angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])


.factory('FeedService', function($http) {

  var feeds = {
    section_1: "https://www.radionocaute.com.br/portal/index.php/app/get/k2/items/23",
    section_2: "https://www.radionocaute.com.br/portal/index.php/app/get/k2/items/42"
  };

  var content = "https://www.radionocaute.com.br/portal/index.php/app/get/k2/items/"

  var category = "https://www.radionocaute.com.br/portal/index.php/app/get/k2/items?cats=13"

  var category2 = "https://www.radionocaute.com.br/portal/index.php/app/get/k2/items?cats=30"

  var category17 = "https://www.radionocaute.com.br/portal/index.php/app/get/k2/items?cats=46"

  var category3 = "https://www.radionocaute.com.br/portal/index.php/app/get/k2/items?cats=14"

  var category4 = "https://www.radionocaute.com.br/site/index.php/app/get/k2/items?cats=11&ordering=alpha" //Equipe

  //var category5 = "https://www.radionocaute.com.br/portal/index.php/app/get/k2/items?cats=2&ordering=rand&limit=100" //Ouvintes
  var category5 = "https://www.radionocaute.com.br/portal/index.php/app/get/k2/users?limit=100&group=2&ordering=rand"; //Ouvintes

  var category6 = "https://www.radionocaute.com.br/portal/index.php/app/get/k2/items?cats=12&ordering=order&limit=10" //Artistas
  
  var category7 = "https://www.radionocaute.com.br/portal/index.php/app/get/k2/items?cats=25&ordering=rdate&limit=20" //Entretenimento
  var category8 = "https://www.radionocaute.com.br/portal/index.php/app/get/k2/items?cats=28&ordering=rdate&limit=20" //Esporte
  var category9 = "https://www.radionocaute.com.br/portal/index.php/app/get/k2/items?cats=27&ordering=rdate&limit=20" //Mundo
  var category10 = "https://www.radionocaute.com.br/portal/index.php/app/get/k2/items?cats=8&ordering=rdate&limit=20" //Música
  var category11= "https://www.radionocaute.com.br/portal/index.php/app/get/k2/items?cats=26&ordering=rdate&limit=20" //Notícias em Geral
  var category12 = "https://www.radionocaute.com.br/portal/index.php/app/get/k2/items?cats=24&ordering=rdate&limit=20" //Polícia
  var category13 = "https://www.radionocaute.com.br/portal/index.php/app/get/k2/items?cats=29&ordering=rdate&limit=20" //Política
  var category14 = "https://www.radionocaute.com.br/portal/index.php/app/get/k2/items?cats=22&ordering=rdate&limit=20" //Patrocinadores
  var category15 = "https://www.radionocaute.com.br/portal/index.php/app/get/k2/items?cats=31&ordering=rdate&limit=100" //Ebos
  var category16 = "https://www.radionocaute.com.br/portal/index.php/app/get/k2/items?cats=23&ordering=rdate&limit=100" //Simpatias
  return {
    getSectionContent: function(section, successCallback, errorCallback) {
      $http.get(feeds[section])
        .success(function(data, status, headers, config) {
          successCallback(data);
        })
        .error(function(data, status, headers, config) {
          errorCallback(status);
        });
    },
    getContentItem: function(id, successCallback, errorCallback) {
      $http.get(content + id)
        .success(function(data, status, headers, config) {
          successCallback(data);
        })
        .error(function(data, status, headers, config) {
          errorCallback(status);
        });
    },
    getCategoryItems: function(successCallback, errorCallback) {
      $http.get(category)
        .success(function(data, status, headers, config) {
          successCallback(data);
        })
        .error(function(data, status, headers, config) {
          errorCallback(status);
        });
    },

    getCategoryItems2: function(successCallback, errorCallback) {
      $http.get(category2)
        .success(function(data, status, headers, config) {
          successCallback(data);
        })
        .error(function(data, status, headers, config) {
          errorCallback(status);
        });
    },

    getCategoryItems3: function(successCallback, errorCallback) {
      $http.get(category3)
        .success(function(data, status, headers, config) {
          successCallback(data);
        })
        .error(function(data, status, headers, config) {
          errorCallback(status);
        });
    },

    getCategoryItems4: function(successCallback, errorCallback) {
      $http.get(category4)
        .success(function(data, status, headers, config) {
          successCallback(data);
        })
        .error(function(data, status, headers, config) {
          errorCallback(status);
        });
    },

    getCategoryItems5: function(successCallback, errorCallback) {
      $http.get(category5)
        .success(function(data, status, headers, config) {
          successCallback(data);
        })
        .error(function(data, status, headers, config) {
          errorCallback(status);
        });
    },

    getCategoryItems6: function(successCallback, errorCallback) {
      $http.get(category6)
        .success(function(data, status, headers, config) {
          successCallback(data);
        })
        .error(function(data, status, headers, config) {
          errorCallback(status);
        });
    },

    getCategoryItems7: function(successCallback, errorCallback) {
      $http.get(category7)
        .success(function(data, status, headers, config) {
          successCallback(data);
        })
        .error(function(data, status, headers, config) {
          errorCallback(status);
        });
    },

    getCategoryItems8: function(successCallback, errorCallback) {
      $http.get(category8)
        .success(function(data, status, headers, config) {
          successCallback(data);
        })
        .error(function(data, status, headers, config) {
          errorCallback(status);
        });
    },

    getCategoryItems9: function(successCallback, errorCallback) {
      $http.get(category9)
        .success(function(data, status, headers, config) {
          successCallback(data);
        })
        .error(function(data, status, headers, config) {
          errorCallback(status);
        });
    },

getCategoryItems10: function(successCallback, errorCallback) {
      $http.get(category10)
        .success(function(data, status, headers, config) {
          successCallback(data);
        })
        .error(function(data, status, headers, config) {
          errorCallback(status);
        });
    },

getCategoryItems11: function(successCallback, errorCallback) {
      $http.get(category11)
        .success(function(data, status, headers, config) {
          successCallback(data);
        })
        .error(function(data, status, headers, config) {
          errorCallback(status);
        });
    },

    getCategoryItems12: function(successCallback, errorCallback) {
      $http.get(category12)
        .success(function(data, status, headers, config) {
          successCallback(data);
        })
        .error(function(data, status, headers, config) {
          errorCallback(status);
        });
    },

    getCategoryItems13: function(successCallback, errorCallback) {
      $http.get(category13)
        .success(function(data, status, headers, config) {
          successCallback(data);
        })
        .error(function(data, status, headers, config) {
          errorCallback(status);
        });
    },

    getCategoryItems14: function(successCallback, errorCallback) {
      $http.get(category14)
        .success(function(data, status, headers, config) {
          successCallback(data);
        })
        .error(function(data, status, headers, config) {
          errorCallback(status);
        });
    },

    getCategoryItems15: function(successCallback, errorCallback) {
      $http.get(category15)
        .success(function(data, status, headers, config) {
          successCallback(data);
        })
        .error(function(data, status, headers, config) {
          errorCallback(status);
        });
    },

    getCategoryItems16: function(successCallback, errorCallback) {
      $http.get(category16)
        .success(function(data, status, headers, config) {
          successCallback(data);
        })
        .error(function(data, status, headers, config) {
          errorCallback(status);
        });
    },

    getCategoryItems17: function(successCallback, errorCallback) {
      $http.get(category17)
        .success(function(data, status, headers, config) {
          successCallback(data);
        })
        .error(function(data, status, headers, config) {
          errorCallback(status);
        });
    },

  }
});
