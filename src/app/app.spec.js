import app from './app.module';

describe('App', () => {

    var scope, element;
    beforeEach(angular.mock.module(app.name));

    beforeEach(inject(($rootScope, $compile) => {
        scope = $rootScope.$new();
        element = angular.element('<app></app>');
        element = $compile(element)(scope);
        scope.$apply();
    }));

    it('it should show hello world', () => {
        var h1 = element.find('h1');
        expect(h1.text()).toBe('Hello World');
    });

    it('it should set the toolbar', () => {
        var span = element.find('h2');
        expect(span).toBeDefined();
        expect(span.text()).toBe('Angular Starter');
    });
});
