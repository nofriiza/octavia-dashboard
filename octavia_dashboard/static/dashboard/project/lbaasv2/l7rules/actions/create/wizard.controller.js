/*
 * Copyright 2018 Walmart.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(function () {
  'use strict';

  angular
    .module('horizon.dashboard.project.lbaasv2.l7rules')
    .controller('CreateL7RuleWizardController', CreateL7RuleWizardController);

  CreateL7RuleWizardController.$inject = [
    '$scope',
    '$routeParams',
    'horizon.dashboard.project.lbaasv2.workflow.model',
    'horizon.dashboard.project.lbaasv2.workflow.workflow',
    'horizon.framework.util.i18n.gettext'
  ];

  function CreateL7RuleWizardController($scope, $routeParams, model, workflowService, gettext) {
    var loadbalancerId = $routeParams.loadbalancerId;
    var l7policyId = $routeParams.l7policyId;
    var scope = $scope;
    scope.model = model;
    scope.submit = scope.model.submit;
    scope.workflow = workflowService(
        gettext('Create L7 Rule'),
        'fa fa-cloud-download',
        ['l7rule']
    );
    scope.model.initialize('l7rule', false, loadbalancerId, l7policyId);
  }

})();
