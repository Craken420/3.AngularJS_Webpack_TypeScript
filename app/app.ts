import { module, element, bootstrap, ILogService } from 'angular';
import '@uirouter/angularjs';
import { AppComponent } from '../app/app.component';
import { HomeComponent } from '../app/home/home.component';
import './app.less';

export let app = module('app', [
    'ui.router'
])
.config(['$stateProvider', '$urlRouterProvider',
    ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
        $stateProvider.state({
            name: 'app',
            url: '/app',
            component: AppComponent.NAME
        }).state({
            name: 'app.home',
            url: '/home',
            component: HomeComponent.NAME
        });
        $urlRouterProvider.otherwise('/app');
    }])
    .component(AppComponent.NAME, new AppComponent())
    .component(HomeComponent.NAME, new HomeComponent());

element(document).ready(() => {
    bootstrap(document, ['app']);
})
