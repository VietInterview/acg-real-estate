import { join } from 'path';

import { SeedConfig } from './seed.config';
// import { ExtendPackages } from './seed.config.interfaces';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  constructor() {
    super();
    this.APP_TITLE = 'Human Resource Management System';
    // this.GOOGLE_ANALYTICS_ID = 'Your site's ID';

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
        { src: 'chart.js/dist/Chart.bundle.min.js', inject: 'libs' },
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
        {src: `${this.APP_SRC}/assets/vendors/js/ui/tether.min.js`, inject: true, vendor: true},
        {src: `${this.APP_SRC}/assets/vendors/js/jquery/libraries/jquery.min.js`, inject: true, vendor: true},
        {src: `${this.APP_SRC}/assets/vendors/js/jquery/libraries/bootstrap.min.js`, inject: true, vendor: true},
        {src: `${this.APP_SRC}/assets/vendors/js/ui/perfect-scrollbar.jquery.min.js`, inject: true, vendor: true},
        {src: `${this.APP_SRC}/assets/vendors/js/ui/unison.min.js`, inject: true, vendor: true},
        {src: `${this.APP_SRC}/assets/vendors/js/ui/blockUI.min.js`, inject: true, vendor: true},
        {src: `${this.APP_SRC}/assets/vendors/js/ui/jquery.matchHeight-min.js`, inject: true, vendor: true},
        {src: `${this.APP_SRC}/assets/vendors/js/ui/jquery-sliding-menu.js`, inject: true, vendor: true},
        {src: `${this.APP_SRC}/assets/vendors/js/ui/jquery.sticky.js`, inject: true, vendor: true},
        {src: `${this.APP_SRC}/assets/vendors/js/ui/prism.min.js`, inject: true, vendor: true},
        {src: `${this.APP_SRC}/assets/vendors/js/sliders/slick/slick.min.js`, inject: true, vendor: true},
        {src: `${this.APP_SRC}/assets/vendors/js/ui/screenfull.min.js`, inject: true, vendor: true},
        {src: `${this.APP_SRC}/assets/vendors/js/extensions/pace.min.js`, inject: true, vendor: true},
        {src: `${this.APP_SRC}/assets/vendors/js/menu/jquery.mmenu.all.min.js`, inject: true, vendor: true},
        {src: `${this.APP_SRC}/assets/vendors/js/extensions/jquery.steps-modified.js`, inject: true, vendor: true},
        {src: `${this.APP_SRC}/assets/vendors/js/extensions/jquery.raty.js`, inject: true, vendor: true},
        {src: `${this.APP_SRC}/assets/vendors/js/extensions/jquery.knob.min.js`, inject: true, vendor: true},
        {src: `${this.APP_SRC}/assets/vendors/js/extensions/wNumb.js`, inject: true, vendor: true},
        {src: `${this.APP_SRC}/assets/vendors/js/extensions/unslider-min.js`, inject: true, vendor: true},
        {src: `${this.APP_SRC}/assets/vendors/js/extensions/nouislider.min.js`, inject: true, vendor: true},
        {src: `${this.APP_SRC}/assets/vendors/js/extensions/bootstrap-treeview.min.js`, inject: true, vendor: true},
        {src: `${this.APP_SRC}/assets/vendors/js/forms/icheck/icheck.min.js`, inject: true, vendor: true},
        {src: `${this.APP_SRC}/assets/vendors/js/forms/validation/jquery.validate.min.js`, inject: true, vendor: true},
        {src: `${this.APP_SRC}/assets/vendors/js/tables/jquery.dataTables.min.js`, inject: true, vendor: true},
        {src: `${this.APP_SRC}/assets/vendors/js/tables/datatable/dataTables.bootstrap4.min.js`, inject: true, vendor: true},
        {src: `${this.APP_SRC}/assets/vendors/js/tables/datatable/dataTables.responsive.min.js`, inject: true, vendor: true},
        {src: `${this.APP_SRC}/assets/vendors/js/tables/datatable/dataTables.select.min.js`, inject: true, vendor: true},
        {src: `${this.APP_SRC}/assets/vendors/js/tables/datatable/dataTables.buttons.min.js`, inject: true, vendor: true},
        {src: `${this.APP_SRC}/assets/vendors/js/tables/datatable/buttons.bootstrap4.min.js`, inject: true, vendor: true},
        {src: `${this.APP_SRC}/assets/vendors/js/forms/select/select2.full.min.js`, inject: true, vendor: true},
        {src: `${this.APP_SRC}/assets/vendors/js/pickers/dateTime/moment-with-locales.min.js`, inject: true, vendor: true},
        {src: `${this.APP_SRC}/assets/vendors/js/pickers/daterange/daterangepicker.js`, inject: true, vendor: true},
        {src: `${this.APP_SRC}/assets/vendors/js/pickers/dateTime/moment-with-locales.min.js`, inject: true, vendor: true},
        {src: `${this.APP_SRC}/assets/vendors/js/pickers/dateTime/bootstrap-datetimepicker.min.js`, inject: true, vendor: true},
        {src: `${this.APP_SRC}/assets/vendors/js/pickers/pickadate/picker.js`, inject: true, vendor: true},
        {src: `${this.APP_SRC}/assets/vendors/js/pickers/pickadate/picker.date.js`, inject: true, vendor: true},
        {src: `${this.APP_SRC}/assets/vendors/js/pickers/pickadate/picker.time.js`, inject: true, vendor: true},
        {src: `${this.APP_SRC}/assets/vendors/js/pickers/pickadate/legacy.js`, inject: true, vendor: true},
        {src: `${this.APP_SRC}/assets/vendors/js/pickers/daterange/daterangepicker.js`, inject: true, vendor: true},
        {src: `${this.ASSETS_SRC}/assets/fonts/icomoon.css`, inject: true, vendor: true},
        {src: `${this.ASSETS_SRC}/assets/fonts/flag-icon-css/css/flag-icon.min.css`, inject: true, vendor: true},
        {src: `${this.ASSETS_SRC}/assets/vendors/css/sliders/slick/slick.css`, inject: true, vendor: true},
        {src: `${this.ASSETS_SRC}/assets/vendors/css/extensions/pace.css`, inject: true, vendor: true},
        {src: `${this.ASSETS_SRC}/assets/vendors/css/forms/icheck/icheck.css`, inject: true, vendor: true},
        {src: `${this.ASSETS_SRC}/assets/vendors/css/file-uploaders/dropzone.min.css`, inject: true, vendor: true},
        {src: `${this.ASSETS_SRC}/assets/vendors/css/charts/jquery-jvectormap-2.0.3.css`, inject: true, vendor: true},
        {src: `${this.ASSETS_SRC}/assets/vendors/css/charts/morris.css`, inject: true, vendor: true},
        {src: `${this.ASSETS_SRC}/assets/vendors/css/extensions/unslider.css`, inject: true, vendor: true},
        {src: `${this.ASSETS_SRC}/assets/vendors/css/extensions/nouislider.min.css`, inject: true, vendor: true},
        {src: `${this.ASSETS_SRC}/assets/vendors/css/ui/prism.min.css`, inject: true, vendor: true},
        {src: `${this.ASSETS_SRC}/assets/vendors/css/sliders/slick/slick.css`, inject: true, vendor: true},
        {src: `${this.ASSETS_SRC}/assets/vendors/css/pickers/daterange/daterangepicker.css`, inject: true, vendor: true},
        {src: `${this.ASSETS_SRC}/assets/vendors/css/tables/datatable/dataTables.bootstrap4.min.css`, inject: true, vendor: true},
        {src: `${this.ASSETS_SRC}/assets/vendors/css/forms/selects/select2.min.css`, inject: true, vendor: true},
        {src: `${this.ASSETS_SRC}/assets/vendors/css/pickers/datetime/bootstrap-datetimepicker.css`, inject: true, vendor: true},
        {src: `${this.ASSETS_SRC}/assets/vendors/css/pickers/pickadate/pickadate.css`, inject: true, vendor: true},
        {src: `${this.ASSETS_SRC}/assets/theme/css/bootstrap.css`, inject: true, vendor: false},
        {src: `${this.ASSETS_SRC}/assets/theme/css/bootstrap-extended.css`, inject: true, vendor: false},
        {src: `${this.ASSETS_SRC}/assets/theme/css/app.css`, inject: true, vendor: false},
        {src: `${this.ASSETS_SRC}/assets/theme/css/colors.css`, inject: true, vendor: false},
        {src: `${this.ASSETS_SRC}/assets/theme/css/plugins/extensions/noui-slider.min.css`, inject: true, vendor: false},
        {src: `${this.ASSETS_SRC}/assets/theme/css/core/colors/palette-noui.css`, inject: true, vendor: false},
        {src: `${this.ASSETS_SRC}/assets/theme/css/core/menu/menu-types/vertical-menu.css`, inject: true, vendor: false},
        {src: `${this.ASSETS_SRC}/assets/theme/css/core/menu/menu-types/vertical-overlay-menu.css`, inject: true, vendor: false},
    ];



    this.APP_LOCALE = 'vn';

    this.ROLLUP_INCLUDE_DIR = [
      ...this.ROLLUP_INCLUDE_DIR,
      //'node_modules/moment/**'
    ];

    this.ROLLUP_NAMED_EXPORTS = [
      ...this.ROLLUP_NAMED_EXPORTS,
      //{'node_modules/immutable/dist/immutable.js': [ 'Map' ]},
    ];

    // install third-party library
    let additionalPackages: any[] = [
        {
            name: 'underscore',
            path: 'node_modules/underscore/underscore-min.js'
        }];

     this.addPackagesBundles(additionalPackages);

    /* Add proxy middleware */
    // this.PROXY_MIDDLEWARE = [
    //   require('http-proxy-middleware')('/api', { ws: false, target: 'http://localhost:3003' })
    // ];

    /* Add to or override NPM module configurations: */
    // this.PLUGIN_CONFIGS['browser-sync'] = { ghostMode: false };
  }

}
