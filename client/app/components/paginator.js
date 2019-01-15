class PaginatorCtrl {
  pageChanged() {
    this.paginator.setPage(this.paginator.page);
  }
}

export default function init(ngModule) {
  ngModule.component('paginator', {
    template: `
<div class="paginator-container" ng-if="$ctrl.paginator.totalCount > $ctrl.paginator.itemsPerPage">
  <ul uib-pagination total-items="$ctrl.paginator.totalCount"
                     items-per-page="$ctrl.paginator.itemsPerPage"
                     ng-model="$ctrl.paginator.page"
                     max-size="6"
                     class="pagination"
                     boundary-link-numbers="true"
                     rotate="false"
                     next-text='&#8594;'
                     previous-text='&#8592;'
                     ng-change="$ctrl.pageChanged()"></ul>
</div>
    `,
    bindings: {
      paginator: '<',
    },
    controller: PaginatorCtrl,
  });
}

init.init = true;