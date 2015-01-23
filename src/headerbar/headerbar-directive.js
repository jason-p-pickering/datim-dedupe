angular.module('PEPFAR.dedupe').directive('headerBar', headerBar);

/**
 * @ngdoc directive
 * @name headerBar
 *
 * @restrict E
 * @scope
 *
 * @description
 *
 * This directive represents the headerbar in dhis
 *
 * @example
 This example specifies the most basic usage of the detailsbox. It passes an object and displays it's properties.

 <example module="d2-headerbar">
 <file name="index.html">
    <header-bar logo="https://www.dhis2.org/sites/all/themes/dhis/logo.png"></header-bar>
 </file>
 </example>
 */
function headerBar() {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {
            headerTitle: '=title',
            headerLink: '=link',
            headerLogo: '=logo'
        },
        templateUrl: 'headerbar/headerbar.html'
    };
}
