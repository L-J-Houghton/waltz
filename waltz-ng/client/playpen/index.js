/*
 *  Waltz
 * Copyright (c) David Watkins. All rights reserved.
 * The use and distribution terms for this software are covered by the
 * Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
 * which can be found in the file epl-v10.html at the root of this distribution.
 * By using this software in any fashion, you are agreeing to be bound by
 * the terms of this license.
 * You must not remove this notice, or any other, from this software.
 *
 */

import playpenView from './playpen';
import hughView from './hughview';


export default (module) => {

    module.config([
        '$stateProvider',
        ($stateProvider) => {
            $stateProvider
                .state('main.playpen', {
                    url: 'playpen/{id:int}',
                    views: { 'content@': playpenView }
                })
                .state('main.hv', {
                    url: 'hv/{groupId:int}',
                    views: { 'content@': hughView }
                });
        }
    ]);

    module.directive('waltzAppRatingTable', require('./directives/app-rating-table'));
    module.directive('waltzCapabilityMultiSelector', require('./directives/capability-multi-selector'));
};
