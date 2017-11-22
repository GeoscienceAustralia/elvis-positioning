{
   class RootCtrl {
      constructor(configService) {
         configService.getConfig().then((data) => {
            this.data = data;
            this.state = new State();
         });
      }
   }

   RootCtrl.$invoke = ['configService'];

   angular.module("PositioningApp", [
      'common.altthemes',
      'common.navigation',
      'common.storage',
      'common.templates',
      'common.toolbar',

      'explorer.confirm',
      'explorer.drag',
      'explorer.enter',
      'explorer.flasher',
      'explorer.googleanalytics',
      'explorer.httpdata',
      'explorer.info',
      'explorer.legend',
      'explorer.message',
      'explorer.modal',
		'explorer.persist',
      'explorer.projects',
      'explorer.tabs',
      'explorer.version',
      'exp.ui.templates',

      'positioning.config',
      'positioning.download',
      'positioning.file',
      'positioning.filedrop',
      'positioning.header',
      'positioning.templates',

      'ui.bootstrap',
      'ui.bootstrap-slider',
      'page.footer'
   ])

      // Set up all the service providers here.
      .config(['projectsServiceProvider', 'versionServiceProvider', 'persistServiceProvider',
         function (projectsServiceProvider, versionServiceProvider, persistServiceProvider) {
            versionServiceProvider.url("positioning/assets/package.json");
            projectsServiceProvider.setProject("positioning");
				persistServiceProvider.handler("local");
         }])

      .factory("userService", [function () {
         return {
            login: noop,
            hasAcceptedTerms: noop,
            setAcceptedTerms: noop,
            getUsername: function () {
               return {
                  then: (fn) => fn("anon")
               }
            }
         };
         function noop() { return true; }
      }])

      .controller("RootCtrl", RootCtrl)

      .filter('bytes', function () {
         return function (bytes, precision) {
            if (isNaN(parseFloat(bytes)) || !isFinite(bytes)) return '-';
            if (typeof precision === 'undefined') precision = 0;
            let units = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB'],
               number = Math.floor(Math.log(bytes) / Math.log(1024));
            return (bytes / Math.pow(1024, Math.floor(number))).toFixed(precision) + ' ' + units[number];
         }
      });
}