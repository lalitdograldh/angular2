/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
 (function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/',
      'bower:': 'bower_components/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      'ng2-table':'npm:ng2-table',
      'angular-calendar': 'npm:angular-calendar/dist/umd/angular-calendar.js',

      // other libraries
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      'angular2-google-maps/core': 'npm:angular2-google-maps/core/core.umd.js',
      'ng2-bootstrap': 'npm:ng2-bootstrap',
      'hammerjs': 'npm:hammerjs/hammer.js',
      'ng2-inline-editor':'node_modules/ng2-inline-editor',
      '@angular/material': 'npm:@angular/material/bundles/material.umd.js',
      'primeng':                   'npm:primeng',
      'multiple-date-picker-a2' : 'npm:multiple-date-picker-a2',
      'moment': 'npm:moment',
      'ng2-cc-library' : 'npm:ng2-cc-library'
      

      
      //"jquery" : 'npm:jquery',
      //'angular-xeditable': 'bower:angular-xeditable'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      
      'ng2-bootstrap': {
        main: "./bundles/ng2-bootstrap.umd.js",
        defaultExtension: 'js'
      },
      'ng2-inline-editor': {
        main: "./dist/index.js",
        defaultExtension: 'js'
      },
      'ng2-table':{
        main:"./ng2-table.js",
        defaultExtension:'js'
      },
      'primeng': {
          defaultExtension: 'js'
      },
      'multiple-date-picker-a2': {
          main:'./index.js',
          defaultExtension: 'js'
      },
      moment: {
          main: './moment.js',
          defaultExtension: 'js'
      },
      'ng2-cc-library':{
        main:'./dist/index.js',
        defaultExtension:'js'

      }
      /*,
      'angular2-fullcalendar': {
        main: "./src/calendar/calendar.js",
        defaultExtension: 'js'
      },
      "jquery":{
           main : "./dist/jquery.min.js",
            defaultExtension: 'js'

      }*/

    }


  });
 
})(this);
