function setup(module) {

    module
        .component('waltzAppLogicalFlowDiagram', require('./slope-graph/slope-graph-directive'))
        .component('waltzRatedFlowSummaryPanel', require('./rated-flow-summary/rated-flow-summary-panel'))
        .component('waltzRatedFlowSummaryInfoCell', require('./rated-flow-summary/rated-flow-summary-info-cell'))
        .component('waltzRatedSummaryTable', require('./rated-flow-summary/rated-summary-table'))
        .component('waltzRatedSummaryCell', require('./rated-flow-summary/rated-summary-cell'))
        .component('waltzSourceAndTargetGraph', require('./source-and-target-graph/source-and-target-graph'))
        .component('waltzSourceAndTargetPanel', require('./source-and-target-panel/source-and-target-panel'))
        .component('waltzAppCentricFlowTable', require('./app-centric-flow-table/app-centric-flow-table'))
        .component('waltzLogicalFlowDiagram', require('./boingy-graph/boingy-graph'))
        .component('waltzLogicalFlowTypeEditor', require('./edit/logical-flow-type-editor'))
        .component('waltzLogicalFlowsTabgroup', require('./logical-flows-tabgroup/logical-flows-tabgroup'))
        .component('waltzLogicalFlowTable', require('./../components/logical-flow-table/logical-flow-table'))
        .component('waltzFlowFilterOptionsOverlay', require('./filter-options-overlay/flow-filter-options-overlay'));

}


export default setup;