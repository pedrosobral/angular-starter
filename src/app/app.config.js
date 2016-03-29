export default routes;

routes.$inject = ['$stateProvider', '$urlRouterProvider'];

function routes($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /inicio
    $urlRouterProvider.otherwise("/inicio");

    $stateProvider
        .state('home', {
            url: '/inicio',
            views: {
                'toolbar': {
                    template: require('./layouts/_toolbar.html')
                }
            }
        });
}
