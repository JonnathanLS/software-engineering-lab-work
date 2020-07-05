function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/angular-material/angular-material.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/angular-material/angular-material.module.ts ***!
    \*************************************************************/

  /*! exports provided: AngularMaterialModule */

  /***/
  function srcAppAngularMaterialAngularMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function () {
      return AngularMaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./multi-select/multi-select.component */
    "./src/app/angular-material/multi-select/multi-select.component.ts");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/angular-material/menu/menu.component.ts");

    var AngularMaterialModule = function AngularMaterialModule() {
      _classCallCheck(this, AngularMaterialModule);
    };

    AngularMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AngularMaterialModule
    });
    AngularMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AngularMaterialModule_Factory(t) {
        return new (t || AngularMaterialModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngularMaterialModule, {
        declarations: [_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_7__["MultiSelectComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"]],
        exports: [_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_7__["MultiSelectComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_7__["MultiSelectComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"]],
          exports: [_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_7__["MultiSelectComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/angular-material/menu/menu.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/angular-material/menu/menu.component.ts ***!
    \*********************************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppAngularMaterialMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MenuComponent_button_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_button_4_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var item_r2 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.emitEvent(item_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2);
      }
    }

    var MenuComponent = /*#__PURE__*/function () {
      function MenuComponent() {
        var _this = this;

        _classCallCheck(this, MenuComponent);

        this.content = '';
        this.items = [];
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

        this.emitEvent = function (content) {
          return _this.clicked.emit(content);
        };
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MenuComponent;
    }();

    MenuComponent.ɵfac = function MenuComponent_Factory(t) {
      return new (t || MenuComponent)();
    };

    MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuComponent,
      selectors: [["app-menu"]],
      inputs: {
        content: "content",
        items: "items"
      },
      outputs: {
        clicked: "clicked"
      },
      decls: 5,
      vars: 3,
      consts: [["mat-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "click"]],
      template: function MenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-menu", null, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MenuComponent_button_4_Template, 2, 1, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.content, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["_MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuItem"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuZ3VsYXItbWF0ZXJpYWwvbWVudS9tZW51LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-menu',
          templateUrl: './menu.component.html',
          styleUrls: ['./menu.component.css']
        }]
      }], function () {
        return [];
      }, {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        clicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/angular-material/multi-select/multi-select.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/angular-material/multi-select/multi-select.component.ts ***!
    \*************************************************************************/

  /*! exports provided: MultiSelectComponent */

  /***/
  function srcAppAngularMaterialMultiSelectMultiSelectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MultiSelectComponent", function () {
      return MultiSelectComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function MultiSelectComponent_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" (+", ctx_r0.formSelect.value.length - 1, " ", (ctx_r0.formSelect.value == null ? null : ctx_r0.formSelect.value.length) === 2 ? "other" : "others", ") ");
      }
    }

    function MultiSelectComponent_mat_option_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var val_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", val_r2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](val_r2);
      }
    }

    var MultiSelectComponent = /*#__PURE__*/function () {
      function MultiSelectComponent() {
        _classCallCheck(this, MultiSelectComponent);

        this.formSelect = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
      }

      _createClass(MultiSelectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.label, this.list);
        }
      }]);

      return MultiSelectComponent;
    }();

    MultiSelectComponent.ɵfac = function MultiSelectComponent_Factory(t) {
      return new (t || MultiSelectComponent)();
    };

    MultiSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MultiSelectComponent,
      selectors: [["app-multi-select"]],
      inputs: {
        label: "label",
        list: "list"
      },
      decls: 8,
      vars: 5,
      consts: [["appearance", "fill"], ["multiple", "", 3, "formControl"], ["class", "example-additional-selection", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], [1, "example-additional-selection"], [3, "value"]],
      template: function MultiSelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select-trigger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MultiSelectComponent_span_6_Template, 2, 2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MultiSelectComponent_mat_option_7_Template, 2, 2, "mat-option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.formSelect);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.formSelect.value ? ctx.formSelect.value[0] : "", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formSelect.value == null ? null : ctx.formSelect.value.length) > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectTrigger"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatOption"]],
      styles: [".example-additional-selection[_ngcontent-%COMP%] {\n    opacity: 0.75;\n    font-size: 0.75em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5ndWxhci1tYXRlcmlhbC9tdWx0aS1zZWxlY3QvbXVsdGktc2VsZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYW5ndWxhci1tYXRlcmlhbC9tdWx0aS1zZWxlY3QvbXVsdGktc2VsZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1hZGRpdGlvbmFsLXNlbGVjdGlvbiB7XG4gICAgb3BhY2l0eTogMC43NTtcbiAgICBmb250LXNpemU6IDAuNzVlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultiSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-multi-select',
          templateUrl: './multi-select.component.html',
          styleUrls: ['./multi-select.component.css']
        }]
      }], function () {
        return [];
      }, {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        list: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/api/api-endpoint.ts":
  /*!*************************************!*\
    !*** ./src/app/api/api-endpoint.ts ***!
    \*************************************/

  /*! exports provided: STAGES_PATH, JOBS_PATH, API */

  /***/
  function srcAppApiApiEndpointTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "STAGES_PATH", function () {
      return STAGES_PATH;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JOBS_PATH", function () {
      return JOBS_PATH;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "API", function () {
      return API;
    });

    var HOST = "https://software-engineering-lab-api.herokuapp.com";
    var PATH = {
      JOBS: "/job-opportunities/",
      SKILLS: "/skills/",
      STAGES: "/stages/",
      CANDIDATES: "/candidates/",
      USERS: '/users/',
      DEPARTMENTS: '/departments/',
      EVALUATIONS: '/evaluations/'
    };
    var STAGES_PATH = PATH.STAGES;
    var JOBS_PATH = PATH.JOBS;
    var API = {
      authenticate: HOST,
      departments: "".concat(HOST).concat(PATH.DEPARTMENTS),
      users: "".concat(HOST).concat(PATH.USERS),
      job_opportunities: "".concat(HOST).concat(PATH.JOBS),
      skills: "".concat(HOST).concat(PATH.SKILLS),
      stages: "".concat(HOST).concat(PATH.STAGES),
      candidates: "".concat(HOST).concat(PATH.CANDIDATES),
      evaluations: "".concat(HOST).concat(PATH.EVALUATIONS)
    };
    /***/
  },

  /***/
  "./src/app/api/api.interceptor.ts":
  /*!****************************************!*\
    !*** ./src/app/api/api.interceptor.ts ***!
    \****************************************/

  /*! exports provided: ApiInterceptor */

  /***/
  function srcAppApiApiInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiInterceptor", function () {
      return ApiInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../authentication/authentication.service */
    "./src/app/authentication/authentication.service.ts");

    var ApiInterceptor = /*#__PURE__*/function () {
      function ApiInterceptor(authService) {
        _classCallCheck(this, ApiInterceptor);

        this.authService = authService;
      }

      _createClass(ApiInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          if (this.authService.isAuthenticated()) {
            var auth = this.authService.getAuthorization();
            var dupReq = req.clone({
              headers: req.headers.set('Authorization', "Basic " + auth).set("Content-Type", "application/json")
            });
            return next.handle(dupReq);
          }

          return next.handle(req);
        }
      }]);

      return ApiInterceptor;
    }();

    ApiInterceptor.ɵfac = function ApiInterceptor_Factory(t) {
      return new (t || ApiInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]));
    };

    ApiInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ApiInterceptor,
      factory: ApiInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/api/api.module.ts":
  /*!***********************************!*\
    !*** ./src/app/api/api.module.ts ***!
    \***********************************/

  /*! exports provided: ApiModule */

  /***/
  function srcAppApiApiModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiModule", function () {
      return ApiModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _api_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./api.interceptor */
    "./src/app/api/api.interceptor.ts");

    var ApiModule = function ApiModule() {
      _classCallCheck(this, ApiModule);
    };

    ApiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ApiModule
    });
    ApiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ApiModule_Factory(t) {
        return new (t || ApiModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
        useClass: _api_interceptor__WEBPACK_IMPORTED_MODULE_3__["ApiInterceptor"],
        multi: true
      }],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ApiModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            useClass: _api_interceptor__WEBPACK_IMPORTED_MODULE_3__["ApiInterceptor"],
            multi: true
          }]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/api/api.service.ts":
  /*!************************************!*\
    !*** ./src/app/api/api.service.ts ***!
    \************************************/

  /*! exports provided: APIService */

  /***/
  function srcAppApiApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APIService", function () {
      return APIService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_endpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./api-endpoint */
    "./src/app/api/api-endpoint.ts");
    /* harmony import */


    var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../utils/utils */
    "./src/app/utils/utils.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var json = function json(object) {
      return JSON.stringify(object);
    };

    var APIService = function APIService(httpClient) {
      var _this2 = this;

      _classCallCheck(this, APIService);

      this.httpClient = httpClient; // delete = (data: any, interfaceName: string) => {
      // 	switch (interfaceName) {
      // 		case "job": return this.jobOpportunities.delete(data);
      // 		case "stage": return this.stages.delete(data);
      // 		case "skill": return this.skills.delete(data);
      // 		default: throw new Error("API Service DELETE : the interface name is not configured");
      // 	}
      // }

      this.user = {
        create: function create(user) {
          return _this2.httpClient.post(_api_endpoint__WEBPACK_IMPORTED_MODULE_1__["API"].users, json(user));
        },
        evaluators: function evaluators() {
          return _this2.httpClient.get("".concat(_api_endpoint__WEBPACK_IMPORTED_MODULE_1__["API"].users, "evaluators"));
        }
      };
      this.get = {
        // Users
        evaluators: function evaluators() {
          return _this2.httpClient.get("".concat(_api_endpoint__WEBPACK_IMPORTED_MODULE_1__["API"].users, "evaluators"));
        },
        // Departments
        departments: function departments() {
          return _this2.httpClient.get(_api_endpoint__WEBPACK_IMPORTED_MODULE_1__["API"].departments);
        },
        // Job Oppotunities
        job_opportunities: function job_opportunities() {
          return _this2.httpClient.get(_api_endpoint__WEBPACK_IMPORTED_MODULE_1__["API"].job_opportunities);
        },
        job_opportunity: function job_opportunity(id) {
          return _this2.httpClient.get("".concat(_api_endpoint__WEBPACK_IMPORTED_MODULE_1__["API"].job_opportunities).concat(id));
        },
        stages_of_job_opportunity: function stages_of_job_opportunity(job_id) {
          return _this2.httpClient.get("".concat(_api_endpoint__WEBPACK_IMPORTED_MODULE_1__["API"].job_opportunities).concat(job_id).concat(_api_endpoint__WEBPACK_IMPORTED_MODULE_1__["STAGES_PATH"]));
        },
        // Skills
        all_skills: function all_skills() {
          return _this2.httpClient.get(_api_endpoint__WEBPACK_IMPORTED_MODULE_1__["API"].skills);
        },
        skill_by_id: function skill_by_id(id) {
          return _this2.httpClient.get("".concat(_api_endpoint__WEBPACK_IMPORTED_MODULE_1__["API"].skills).concat(id));
        },
        // Candidates
        all_candidates: function all_candidates() {
          return _this2.httpClient.get(_api_endpoint__WEBPACK_IMPORTED_MODULE_1__["API"].candidates);
        },
        candidate: function candidate(id) {
          return _this2.httpClient.get("".concat(_api_endpoint__WEBPACK_IMPORTED_MODULE_1__["API"].candidates).concat(id));
        },
        candidate_resume: function candidate_resume(candidate_id) {
          return _this2.httpClient.get("".concat(_api_endpoint__WEBPACK_IMPORTED_MODULE_1__["API"].candidates).concat(candidate_id, "/resume"));
        },
        evaluations_that_the_user_is_responsible: function evaluations_that_the_user_is_responsible() {
          return _this2.httpClient.get("".concat(_api_endpoint__WEBPACK_IMPORTED_MODULE_1__["API"].evaluations));
        },
        job_opportunity_by_evaluation: function job_opportunity_by_evaluation(id) {
          return _this2.httpClient.get("".concat(_api_endpoint__WEBPACK_IMPORTED_MODULE_1__["API"].evaluations).concat(id, "/job-opportunity"));
        },
        candidate_by_evaluation: function candidate_by_evaluation(id) {
          return _this2.httpClient.get("".concat(_api_endpoint__WEBPACK_IMPORTED_MODULE_1__["API"].evaluations).concat(id, "/candidate"));
        },
        skills_by_evaluation: function skills_by_evaluation(id) {
          return _this2.httpClient.get("".concat(_api_endpoint__WEBPACK_IMPORTED_MODULE_1__["API"].evaluations).concat(id, "/skills"));
        },
        candidate_curriculum: function candidate_curriculum(id) {
          return _this2.httpClient.get("".concat(_api_endpoint__WEBPACK_IMPORTED_MODULE_1__["API"].candidates).concat(id, "/resume"));
        }
      };
      this.post = {
        user: function user(_user) {
          return _this2.httpClient.post(_api_endpoint__WEBPACK_IMPORTED_MODULE_1__["API"].users, json(_user));
        },
        job_opportunity: function job_opportunity(job) {
          var newValue = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["builderObject"])(job, ['name', 'description', 'department']);
          return _this2.httpClient.post(_api_endpoint__WEBPACK_IMPORTED_MODULE_1__["API"].job_opportunities, json(newValue));
        },
        skill: function skill(_skill) {
          var newValue = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["builderObject"])(_skill, ['name', 'description']);
          return _this2.httpClient.post(_api_endpoint__WEBPACK_IMPORTED_MODULE_1__["API"].skills, json(newValue));
        },
        candidate: function candidate(_candidate) {
          var newValue = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["builderObject"])(_candidate, ['name', 'cpf', 'address', 'links']);
          return _this2.httpClient.post(_api_endpoint__WEBPACK_IMPORTED_MODULE_1__["API"].candidates, json(newValue));
        },
        candidate_curriculum: function candidate_curriculum(candidate_id, file) {
          debugger;
          var empty = file.get('resume') === 'null';
          if (empty) throw new Error('You must attach a resume to the candidate!');
          return _this2.httpClient.post("".concat(_api_endpoint__WEBPACK_IMPORTED_MODULE_1__["API"].candidates).concat(candidate_id, "/resume"), file, {
            observe: 'response'
          });
        },
        evaluate: function evaluate(_evaluate) {
          var newValue = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["builderObject"])(_evaluate, ['stageEvaluator', 'skillScoreList']);
          return _this2.httpClient.post(_api_endpoint__WEBPACK_IMPORTED_MODULE_1__["API"].evaluations, json(newValue));
        }
      };
      this.update = {
        job_opportunity: function job_opportunity(job) {
          var newData = {
            name: job.name,
            description: job.description,
            department: job.department
          };
          return _this2.httpClient.put("".concat(_api_endpoint__WEBPACK_IMPORTED_MODULE_1__["API"].job_opportunities).concat(job._id), json(newData));
        },
        skill: function skill(_skill2) {
          var newData = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["builderObject"])(_skill2, ['name', 'description']);
          return _this2.httpClient.put("".concat(_api_endpoint__WEBPACK_IMPORTED_MODULE_1__["API"].skills).concat(_skill2._id), json(_skill2));
        },
        stage: function stage(_stage) {
          var newData = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["builderObject"])(_stage, ['name', 'description', 'skills']);
          return _this2.httpClient.put("".concat(_api_endpoint__WEBPACK_IMPORTED_MODULE_1__["API"].stages).concat(_stage._id), json(newData));
        },
        candidate: function candidate(_candidate2) {
          var newData = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["builderObject"])(_candidate2, ['name', 'cpf', 'address', 'links']);
          return _this2.httpClient.put("".concat(_api_endpoint__WEBPACK_IMPORTED_MODULE_1__["API"].candidates).concat(_candidate2._id), json(newData));
        }
      };
      this["delete"] = {
        job_opportunity: function job_opportunity(id) {
          return _this2.httpClient["delete"]("".concat(_api_endpoint__WEBPACK_IMPORTED_MODULE_1__["API"].job_opportunities).concat(id), {
            observe: 'response'
          });
        },
        skill: function skill(id) {
          return _this2.httpClient["delete"]("".concat(_api_endpoint__WEBPACK_IMPORTED_MODULE_1__["API"].skills).concat(id), {
            observe: 'response'
          });
        },
        stage: function stage(id) {
          return _this2.httpClient["delete"]("".concat(_api_endpoint__WEBPACK_IMPORTED_MODULE_1__["API"].stages).concat(id), {
            observe: 'response'
          });
        },
        // Candidates
        candidate: function candidate(id) {
          return _this2.httpClient["delete"]("".concat(_api_endpoint__WEBPACK_IMPORTED_MODULE_1__["API"].candidates).concat(id), {
            observe: 'response'
          });
        },
        candidate_curriculum: function candidate_curriculum(id) {
          return _this2.httpClient["delete"]("".concat(_api_endpoint__WEBPACK_IMPORTED_MODULE_1__["API"].candidates).concat(id, "/resume"), {
            observe: 'response'
          });
        }
      };

      this.add_estages_to_job_opportunity = function (stage, job_id) {
        var newStage = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["builderObject"])(stage, ['name', 'description', 'skills']);
        return _this2.httpClient.post("".concat(_api_endpoint__WEBPACK_IMPORTED_MODULE_1__["API"].job_opportunities).concat(job_id).concat(_api_endpoint__WEBPACK_IMPORTED_MODULE_1__["STAGES_PATH"]), json(newStage));
      };

      this.associate_candidate_with_job_opportunity = function (candidate_id, associate) {
        return _this2.httpClient.post("".concat(_api_endpoint__WEBPACK_IMPORTED_MODULE_1__["API"].candidates).concat(candidate_id).concat(_api_endpoint__WEBPACK_IMPORTED_MODULE_1__["JOBS_PATH"]), json(associate));
      };

      this.disassociate_candidate_with_job_opportunity = function (associate_id) {
        return _this2.httpClient["delete"]("".concat(_api_endpoint__WEBPACK_IMPORTED_MODULE_1__["API"].candidates, "job-opportunities/").concat(associate_id));
      };
    };

    APIService.ɵfac = function APIService_Factory(t) {
      return new (t || APIService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    APIService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: APIService,
      factory: APIService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](APIService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./authentication/authentication.component */
    "./src/app/authentication/authentication.component.ts");
    /* harmony import */


    var _authentication_authentication_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./authentication/authentication-guard.service */
    "./src/app/authentication/authentication-guard.service.ts");
    /* harmony import */


    var _user_config_user_config_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user-config/user-config.component */
    "./src/app/user-config/user-config.component.ts");
    /* harmony import */


    var _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./jobs/jobs.component */
    "./src/app/jobs/jobs.component.ts");
    /* harmony import */


    var _skills_skills_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./skills/skills.component */
    "./src/app/skills/skills.component.ts");
    /* harmony import */


    var _candidates_candidates_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./candidates/candidates.component */
    "./src/app/candidates/candidates.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'auth',
      pathMatch: 'full'
    }, {
      path: 'auth',
      component: _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_2__["AuthenticationComponent"]
    }, {
      path: 'home',
      canActivate: [_authentication_authentication_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationGuardService"]],
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomeModule;
        });
      }
    }, {
      path: 'jobs',
      canActivate: [_authentication_authentication_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationGuardService"]],
      component: _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_5__["JobsComponent"]
    }, {
      path: 'users',
      canActivate: [_authentication_authentication_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationGuardService"]],
      component: _user_config_user_config_component__WEBPACK_IMPORTED_MODULE_4__["UserConfigComponent"]
    }, {
      path: 'skills',
      canActivate: [_authentication_authentication_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationGuardService"]],
      component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_6__["SkillsComponent"]
    }, {
      path: 'candidates',
      canActivate: [_authentication_authentication_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationGuardService"]],
      component: _candidates_candidates_component__WEBPACK_IMPORTED_MODULE_7__["CandidatesComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'app';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./authentication/authentication.module */
    "./src/app/authentication/authentication.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _user_config_user_config_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./user-config/user-config.component */
    "./src/app/user-config/user-config.component.ts");
    /* harmony import */


    var _home_home_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./home/home.module */
    "./src/app/home/home.module.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./jobs/jobs.component */
    "./src/app/jobs/jobs.component.ts");
    /* harmony import */


    var _jobs_stages_stages_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./jobs/stages/stages.component */
    "./src/app/jobs/stages/stages.component.ts");
    /* harmony import */


    var _skills_skills_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./skills/skills.component */
    "./src/app/skills/skills.component.ts");
    /* harmony import */


    var _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./angular-material/angular-material.module */
    "./src/app/angular-material/angular-material.module.ts");
    /* harmony import */


    var _candidates_candidates_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./candidates/candidates.component */
    "./src/app/candidates/candidates.component.ts");
    /* harmony import */


    var _candidates_new_candidate_new_candidate_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./candidates/new-candidate/new-candidate.component */
    "./src/app/candidates/new-candidate/new-candidate.component.ts");
    /* harmony import */


    var _candidates_candidate_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./candidates/candidate/upload-file/upload-file.component */
    "./src/app/candidates/candidate/upload-file/upload-file.component.ts");
    /* harmony import */


    var _candidates_candidate_candidate_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./candidates/candidate/candidate.component */
    "./src/app/candidates/candidate/candidate.component.ts");
    /* harmony import */


    var _candidates_candidate_associate_job_stage_evaluator_stage_evaluator_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./candidates/candidate/associate-job/stage-evaluator/stage-evaluator.component */
    "./src/app/candidates/candidate/associate-job/stage-evaluator/stage-evaluator.component.ts");
    /* harmony import */


    var _candidates_candidate_associate_job_associate_job_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./candidates/candidate/associate-job/associate-job.component */
    "./src/app/candidates/candidate/associate-job/associate-job.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_5__["AuthenticationModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_9__["HomeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_14__["AngularMaterialModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _jobs_stages_stages_component__WEBPACK_IMPORTED_MODULE_12__["StagesComponent"], _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_11__["JobsComponent"], _user_config_user_config_component__WEBPACK_IMPORTED_MODULE_8__["UserConfigComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_13__["SkillsComponent"], _candidates_candidates_component__WEBPACK_IMPORTED_MODULE_15__["CandidatesComponent"], _candidates_new_candidate_new_candidate_component__WEBPACK_IMPORTED_MODULE_16__["NewCandidateComponent"], _candidates_candidate_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_17__["UploadFileComponent"], _candidates_candidate_candidate_component__WEBPACK_IMPORTED_MODULE_18__["CandidateComponent"], _candidates_candidate_associate_job_associate_job_component__WEBPACK_IMPORTED_MODULE_20__["AssociateJobComponent"], _candidates_candidate_associate_job_stage_evaluator_stage_evaluator_component__WEBPACK_IMPORTED_MODULE_19__["StageEvaluatorComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_5__["AuthenticationModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_9__["HomeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_14__["AngularMaterialModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _jobs_stages_stages_component__WEBPACK_IMPORTED_MODULE_12__["StagesComponent"], _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_11__["JobsComponent"], _user_config_user_config_component__WEBPACK_IMPORTED_MODULE_8__["UserConfigComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_13__["SkillsComponent"], _candidates_candidates_component__WEBPACK_IMPORTED_MODULE_15__["CandidatesComponent"], _candidates_new_candidate_new_candidate_component__WEBPACK_IMPORTED_MODULE_16__["NewCandidateComponent"], _candidates_candidate_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_17__["UploadFileComponent"], _candidates_candidate_candidate_component__WEBPACK_IMPORTED_MODULE_18__["CandidateComponent"], _candidates_candidate_associate_job_associate_job_component__WEBPACK_IMPORTED_MODULE_20__["AssociateJobComponent"], _candidates_candidate_associate_job_stage_evaluator_stage_evaluator_component__WEBPACK_IMPORTED_MODULE_19__["StageEvaluatorComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_5__["AuthenticationModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_9__["HomeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_14__["AngularMaterialModule"]],
          providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/authentication/authentication-guard.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/authentication/authentication-guard.service.ts ***!
    \****************************************************************/

  /*! exports provided: AuthenticationGuardService */

  /***/
  function srcAppAuthenticationAuthenticationGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationGuardService", function () {
      return AuthenticationGuardService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/authentication/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthenticationGuardService = /*#__PURE__*/function () {
      function AuthenticationGuardService(auth, router) {
        _classCallCheck(this, AuthenticationGuardService);

        this.auth = auth;
        this.router = router;
      }

      _createClass(AuthenticationGuardService, [{
        key: "canActivate",
        value: function canActivate() {
          if (!this.auth.isAuthenticated()) {
            this.router.navigate(['auth']);
            return false;
          }

          return true;
        }
      }]);

      return AuthenticationGuardService;
    }();

    AuthenticationGuardService.ɵfac = function AuthenticationGuardService_Factory(t) {
      return new (t || AuthenticationGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthenticationGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthenticationGuardService,
      factory: AuthenticationGuardService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/authentication/authentication.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/authentication/authentication.component.ts ***!
    \************************************************************/

  /*! exports provided: AuthenticationComponent */

  /***/
  function srcAppAuthenticationAuthenticationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationComponent", function () {
      return AuthenticationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/authentication/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../api/api.service */
    "./src/app/api/api.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AuthenticationComponent = /*#__PURE__*/function () {
      function AuthenticationComponent(service, router, apiService, formBuilder) {
        _classCallCheck(this, AuthenticationComponent);

        this.service = service;
        this.router = router;
        this.apiService = apiService;
        this.formBuilder = formBuilder;
      }

      _createClass(AuthenticationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.authForm = this.formBuilder.group({
            username: '',
            password: ''
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(userData) {
          var _this3 = this;

          var user = {
            _id: '',
            username: userData.username,
            password: userData.password,
            department: null,
            role: null
          };
          this.service.authenticate(user).then(function (response) {
            return _this3.router.navigate(['/home']);
          })["catch"](function (error) {
            return console.log(error);
          });
        }
      }]);

      return AuthenticationComponent;
    }();

    AuthenticationComponent.ɵfac = function AuthenticationComponent_Factory(t) {
      return new (t || AuthenticationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]));
    };

    AuthenticationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AuthenticationComponent,
      selectors: [["app-authentication"]],
      decls: 5,
      vars: 1,
      consts: [[1, "authentication", 3, "formGroup", "ngSubmit"], ["type", "text", "formControlName", "username", "placeholder", "Usu\xE1rio"], ["type", "password", "formControlName", "password", "placeholder", "Senha de Acesso"], ["type", "submit"]],
      template: function AuthenticationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AuthenticationComponent_Template_form_ngSubmit_0_listener() {
            return ctx.onSubmit(ctx.authForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Acessar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.authForm);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBc0RHIiwiZmlsZSI6InNyYy9hcHAvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5hdXRoZW50aWNhdGlvbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogNSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmF1dGhlbnRpY2F0aW9uIGRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5hdXRoZW50aWNhdGlvbiBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMTVweCAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLmF1dGhlbnRpY2F0aW9uIGlucHV0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodHNsYXRlZ3JheTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgaGVpZ2h0OiAyLjVyZW07XG59XG4uYXV0aGVudGljYXRpb24gYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCAxNSwgMTYxLCAwLjgpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDMwcHggMCAwIDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNzVzLCBjb2xvciAwLjc1cztcbiAgICBib3JkZXI6IDA7XG59XG4uYXV0aGVudGljYXRpb24gYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNjEpO1xuICAgIGNvbG9yOiB5ZWxsb3c7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAgIC5hdXRoZW50aWNhdGlvbntcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgLmF1dGhlbnRpY2F0aW9uIGRpdiB7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgIH1cbiAgICAuYXV0aGVudGljYXRpb24gaW5wdXQsIC5hdXRoZW50aWNhdGlvbiBsYWJlbCwgLmF1dGhlbnRpY2F0aW9uIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiA1NzVweDtcbiAgICB9XG4gICAgLmF1dGhlbnRpY2F0aW9uIGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgfVxufSAqLyJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-authentication',
          templateUrl: './authentication.component.html',
          styleUrls: ['./authentication.component.css']
        }]
      }], function () {
        return [{
          type: _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _api_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/authentication/authentication.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/authentication/authentication.module.ts ***!
    \*********************************************************/

  /*! exports provided: AuthenticationModule */

  /***/
  function srcAppAuthenticationAuthenticationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function () {
      return AuthenticationModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _authentication_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./authentication.component */
    "./src/app/authentication/authentication.component.ts");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/authentication/authentication.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _api_api_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../api/api.module */
    "./src/app/api/api.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _authentication_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./authentication-guard.service */
    "./src/app/authentication/authentication-guard.service.ts");

    var AuthenticationModule = function AuthenticationModule() {
      _classCallCheck(this, AuthenticationModule);
    };

    AuthenticationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AuthenticationModule,
      bootstrap: [_authentication_component__WEBPACK_IMPORTED_MODULE_2__["AuthenticationComponent"]]
    });
    AuthenticationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AuthenticationModule_Factory(t) {
        return new (t || AuthenticationModule)();
      },
      providers: [_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _authentication_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationGuardService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _api_api_module__WEBPACK_IMPORTED_MODULE_5__["ApiModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AuthenticationModule, {
        declarations: [_authentication_component__WEBPACK_IMPORTED_MODULE_2__["AuthenticationComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _api_api_module__WEBPACK_IMPORTED_MODULE_5__["ApiModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthenticationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_authentication_component__WEBPACK_IMPORTED_MODULE_2__["AuthenticationComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _api_api_module__WEBPACK_IMPORTED_MODULE_5__["ApiModule"]],
          providers: [_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _authentication_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationGuardService"]],
          bootstrap: [_authentication_component__WEBPACK_IMPORTED_MODULE_2__["AuthenticationComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/authentication/authentication.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/authentication/authentication.service.ts ***!
    \**********************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcAppAuthenticationAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _api_api_endpoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../api/api-endpoint */
    "./src/app/api/api-endpoint.ts");
    /* harmony import */


    var src_assets_error_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/assets/error-messages */
    "./src/assets/error-messages.ts");

    var TOKEN = "token";

    var AuthenticationService = function AuthenticationService(http) {
      var _this4 = this;

      _classCallCheck(this, AuthenticationService);

      this.http = http;

      this.authenticate = function (user) {
        if (!user.username) throw new Error('Authentication Service : authentication method requires a user to be informed.');
        if (!user.password) throw new Error('Authentication Service : authentication method requires the password to be informed.');
        var auth = btoa("".concat(user.username, ":").concat(user.password));
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.append("Authorization", "Basic ".concat(auth));
        headers = headers.append("Content-Type", "application/json");
        return new Promise(function (resolve, reject) {
          _this4.http.get(_api_api_endpoint__WEBPACK_IMPORTED_MODULE_2__["API"].authenticate, {
            headers: headers,
            observe: 'response'
          }).subscribe(function (response) {
            if (response.status === 200) if (response.body.hasOwnProperty("data")) sessionStorage.setItem(TOKEN, auth);
            resolve(src_assets_error_messages__WEBPACK_IMPORTED_MODULE_3__["ErrorMessages"].authenticate.valid);
          }, function (error) {
            reject(new Error(src_assets_error_messages__WEBPACK_IMPORTED_MODULE_3__["ErrorMessages"].authenticate.invalid));
          });
        });
      };

      this.isAuthenticated = function () {
        return !!sessionStorage.getItem(TOKEN);
      };

      this.getAuthorization = function () {
        return sessionStorage.getItem(TOKEN);
      };
    };

    AuthenticationService.ɵfac = function AuthenticationService_Factory(t) {
      return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthenticationService,
      factory: AuthenticationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/candidates/candidate/associate-job/associate-job.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/candidates/candidate/associate-job/associate-job.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: AssociateJobComponent */

  /***/
  function srcAppCandidatesCandidateAssociateJobAssociateJobComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssociateJobComponent", function () {
      return AssociateJobComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/utils/utils */
    "./src/app/utils/utils.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _candidates_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../candidates.service */
    "./src/app/candidates/candidates.service.ts");
    /* harmony import */


    var src_app_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api/api.service */
    "./src/app/api/api.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _stage_evaluator_stage_evaluator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./stage-evaluator/stage-evaluator.component */
    "./src/app/candidates/candidate/associate-job/stage-evaluator/stage-evaluator.component.ts");

    function AssociateJobComponent_option_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var job_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", job_r2._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](job_r2.name);
      }
    }

    function AssociateJobComponent_app_stage_evaluator_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-stage-evaluator", 8);
      }

      if (rf & 2) {
        var stage_r3 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r1.associateJobForm)("stage", stage_r3);
      }
    }

    var AssociateJobComponent = /*#__PURE__*/function () {
      function AssociateJobComponent(formBuilder, candidatesService, apiService) {
        var _this5 = this;

        _classCallCheck(this, AssociateJobComponent);

        this.formBuilder = formBuilder;
        this.candidatesService = candidatesService;
        this.apiService = apiService;

        this.selectJob = function () {
          var jobResult;

          _this5.candidatesService.jobs.map(function (job) {
            return job._id === _this5.associateJobForm.get('jobOpportunityId').value ? jobResult = job : null;
          });

          _this5.selectedJob = jobResult;
        };

        this.jobs = function () {
          return _this5.candidatesService.jobs;
        };
      }

      _createClass(AssociateJobComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.candidateId) throw new Error('AssociateJobComponent : there are properties that have not been loaded.');
          var associate = {
            _id: null,
            jobOpportunityId: '',
            stageEvaluatorList: null
          };
          this.associateJobForm = this.formBuilder.group(associate);
          Object(src_app_utils_utils__WEBPACK_IMPORTED_MODULE_1__["fbSetValue"])(this.associateJobForm, 'stageEvaluatorList', []);
        }
      }, {
        key: "associate",
        value: function associate(data) {
          var _this6 = this;

          this.apiService.associate_candidate_with_job_opportunity(this.candidateId, data).subscribe(function (associateCreated) {
            console.log(associateCreated);

            _this6.associateJobForm.reset();
          }, function (error) {
            return console.error(error);
          });
        }
      }]);

      return AssociateJobComponent;
    }();

    AssociateJobComponent.ɵfac = function AssociateJobComponent_Factory(t) {
      return new (t || AssociateJobComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_candidates_service__WEBPACK_IMPORTED_MODULE_3__["CandidatesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_api_service__WEBPACK_IMPORTED_MODULE_4__["APIService"]));
    };

    AssociateJobComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AssociateJobComponent,
      selectors: [["app-associate-job"]],
      inputs: {
        candidateId: "candidateId"
      },
      decls: 9,
      vars: 3,
      consts: [[1, "associate-job", 3, "formGroup", "ngSubmit"], [1, "associate-job__title"], ["type", "text", "formControlName", "jobOpportunityId", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "associate-job__stages"], [3, "form", "stage", 4, "ngFor", "ngForOf"], ["type", "submit"], [3, "value"], [3, "form", "stage"]],
      template: function AssociateJobComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AssociateJobComponent_Template_form_ngSubmit_0_listener() {
            return ctx.associate(ctx.associateJobForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Associar Vaga");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AssociateJobComponent_Template_select_change_3_listener() {
            return ctx.selectJob();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AssociateJobComponent_option_4_Template, 2, 2, "option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AssociateJobComponent_app_stage_evaluator_6_Template, 1, 2, "app-stage-evaluator", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Associar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.associateJobForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.jobs());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectedJob == null ? null : ctx.selectedJob.stages);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _stage_evaluator_stage_evaluator_component__WEBPACK_IMPORTED_MODULE_6__["StageEvaluatorComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbmRpZGF0ZXMvY2FuZGlkYXRlL2Fzc29jaWF0ZS1qb2IvYXNzb2NpYXRlLWpvYi5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssociateJobComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-associate-job',
          templateUrl: './associate-job.component.html',
          styleUrls: ['./associate-job.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _candidates_service__WEBPACK_IMPORTED_MODULE_3__["CandidatesService"]
        }, {
          type: src_app_api_api_service__WEBPACK_IMPORTED_MODULE_4__["APIService"]
        }];
      }, {
        candidateId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/candidates/candidate/associate-job/stage-evaluator/stage-evaluator.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/candidates/candidate/associate-job/stage-evaluator/stage-evaluator.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: StageEvaluatorComponent */

  /***/
  function srcAppCandidatesCandidateAssociateJobStageEvaluatorStageEvaluatorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StageEvaluatorComponent", function () {
      return StageEvaluatorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/utils/utils */
    "./src/app/utils/utils.ts");
    /* harmony import */


    var src_app_candidates_candidates_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/candidates/candidates.service */
    "./src/app/candidates/candidates.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function StageEvaluatorComponent_option_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var evaluator_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", evaluator_r1._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](evaluator_r1.username);
      }
    }

    var _c0 = function _c0() {
      return {
        standalone: true
      };
    };

    var StageEvaluatorComponent = /*#__PURE__*/function () {
      function StageEvaluatorComponent(candidatesService) {
        var _this7 = this;

        _classCallCheck(this, StageEvaluatorComponent);

        this.candidatesService = candidatesService;

        this.evaluators = function () {
          return _this7.candidatesService.evaluators;
        };

        this.addStageEvaluator = function (stageId) {
          var key = 'stageEvaluatorList';
          var currentValues = Object(src_app_utils_utils__WEBPACK_IMPORTED_MODULE_1__["fbGetValue"])(_this7.form, key);

          if (_this7.evaluatorSelected) {
            var newStageEvaluator = {
              stage: stageId,
              evaluator: _this7.evaluatorSelected
            };
            currentValues = currentValues.filter(function (stageEvaluator) {
              return stageEvaluator.stage !== stageId;
            });
            Object(src_app_utils_utils__WEBPACK_IMPORTED_MODULE_1__["fbSetValue"])(_this7.form, key, [].concat(_toConsumableArray(currentValues), [newStageEvaluator]));
          }
        };
      }

      _createClass(StageEvaluatorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.stage || !this.form) throw new Error('StageEvaluatorComponent : there are properties that have not been loaded.');
          this.candidatesService.reloadJobs();
          this.candidatesService.reloadEvaluators();
          this.evaluatorSelected = null;
        }
      }]);

      return StageEvaluatorComponent;
    }();

    StageEvaluatorComponent.ɵfac = function StageEvaluatorComponent_Factory(t) {
      return new (t || StageEvaluatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_candidates_candidates_service__WEBPACK_IMPORTED_MODULE_2__["CandidatesService"]));
    };

    StageEvaluatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StageEvaluatorComponent,
      selectors: [["app-stage-evaluator"]],
      inputs: {
        stage: "stage",
        form: "form"
      },
      decls: 5,
      vars: 5,
      consts: [[1, "stage-evaluator"], ["type", "text", 3, "ngModel", "ngModelOptions", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
      template: function StageEvaluatorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StageEvaluatorComponent_Template_select_ngModelChange_3_listener($event) {
            return ctx.evaluatorSelected = $event;
          })("change", function StageEvaluatorComponent_Template_select_change_3_listener() {
            return ctx.addStageEvaluator(ctx.stage._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StageEvaluatorComponent_option_4_Template, 2, 2, "option", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.stage.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.evaluatorSelected)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.evaluators());
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbmRpZGF0ZXMvY2FuZGlkYXRlL2Fzc29jaWF0ZS1qb2Ivc3RhZ2UtZXZhbHVhdG9yL3N0YWdlLWV2YWx1YXRvci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StageEvaluatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-stage-evaluator',
          templateUrl: './stage-evaluator.component.html',
          styleUrls: ['./stage-evaluator.component.css']
        }]
      }], function () {
        return [{
          type: src_app_candidates_candidates_service__WEBPACK_IMPORTED_MODULE_2__["CandidatesService"]
        }];
      }, {
        stage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/candidates/candidate/candidate.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/candidates/candidate/candidate.component.ts ***!
    \*************************************************************/

  /*! exports provided: CandidateComponent */

  /***/
  function srcAppCandidatesCandidateCandidateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CandidateComponent", function () {
      return CandidateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/utils/utils */
    "./src/app/utils/utils.ts");
    /* harmony import */


    var src_app_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/api/api.service */
    "./src/app/api/api.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _associate_job_associate_job_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./associate-job/associate-job.component */
    "./src/app/candidates/candidate/associate-job/associate-job.component.ts");
    /* harmony import */


    var _angular_material_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../angular-material/menu/menu.component */
    "./src/app/angular-material/menu/menu.component.ts");
    /* harmony import */


    var _upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./upload-file/upload-file.component */
    "./src/app/candidates/candidate/upload-file/upload-file.component.ts");

    function CandidateComponent_app_menu_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-menu", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clicked", function CandidateComponent_app_menu_1_Template_app_menu_clicked_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.curriculumClicked($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r0.curriculumActions);
      }
    }

    function CandidateComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-upload-file", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("curriculumAdded", function CandidateComponent_ng_template_2_Template_app_upload_file_curriculumAdded_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.curriculumAdded($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("candidateId", ctx_r2.candidate._id);
      }
    }

    var _c0 = function _c0() {
      return {
        standalone: true
      };
    };

    function CandidateComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CandidateComponent_div_8_Template_input_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.newLink = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CandidateComponent_div_8_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.addLinkToCandidate();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Adicionar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.newLink)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
      }
    }

    function CandidateComponent_div_10_button_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CandidateComponent_div_10_button_2_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var link_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.removeLinkOfCandidate(link_r15);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remover");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CandidateComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CandidateComponent_div_10_button_2_Template, 2, 0, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var link_r15 = ctx.$implicit;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", link_r15, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.uploadCandidate);
      }
    }

    function CandidateComponent_button_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CandidateComponent_button_11_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.edit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Editar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CandidateComponent_ng_template_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CandidateComponent_ng_template_12_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r22.update();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Atualizar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var CandidateComponent = /*#__PURE__*/function () {
      // associatedJobs: Job
      function CandidateComponent(apiService) {
        var _this8 = this;

        _classCallCheck(this, CandidateComponent);

        this.apiService = apiService;
        this.candidateRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.uploadCandidate = false;
        this.newLink = '';
        this.hasCurriculum = true;
        this.curriculumActions = ['download', 'delete'];

        this.addLinkToCandidate = function () {
          if (_this8.newLink && !_this8.candidate.links.includes(_this8.newLink)) {
            _this8.candidate.links.push(_this8.newLink);

            _this8.newLink = '';
          }
        };

        this.removeLinkOfCandidate = function (url) {
          return _this8.candidate.links = _this8.candidate.links.filter(function (link) {
            return !(link === url);
          });
        };

        this.curriculumClicked = function (action) {
          debugger;

          if (action === 'download') {
            _this8.apiService.get.candidate_curriculum(_this8.candidate._id).subscribe(function (curriculum) {
              console.log(curriculum);
            }, function (error) {
              return console.error(error);
            });
          } else _this8.apiService["delete"].candidate_curriculum(_this8.candidate._id).subscribe(function (response) {
            if (response.status === 204) {
              console.log('Currículo deletado com sucesso');
              _this8.hasCurriculum = false;
            }
          }, function (error) {
            return console.error(error);
          });
        };

        this.curriculumAdded = function (result) {
          return _this8.hasCurriculum = result;
        };
      }

      _createClass(CandidateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.candidate) throw new Error('CandidateComponent : there are properties that have not been loaded.');
          this.hasCurriculum = this.candidate.hasResume;
        }
      }, {
        key: "delete",
        value: function _delete() {
          var _this9 = this;

          this.apiService["delete"].candidate(this.candidate._id).subscribe(function (response) {
            if (response.status === 204) {
              console.log('Candidato deletado com sucesso');

              _this9.candidateRemoved.emit(_this9.candidate._id);
            }
          }, function (error) {
            return console.warn(error);
          });
        }
      }, {
        key: "edit",
        value: function edit() {
          Object(src_app_utils_utils__WEBPACK_IMPORTED_MODULE_1__["toggleDisabledInputsAndSelect"])(this.candidate._id);
          this.uploadCandidate = true;
        }
      }, {
        key: "update",
        value: function update() {
          var _this10 = this;

          this.apiService.update.candidate(this.candidate).subscribe(function (candidateUpdated) {
            Object(src_app_utils_utils__WEBPACK_IMPORTED_MODULE_1__["toggleDisabledInputsAndSelect"])(candidateUpdated._id);
            _this10.uploadCandidate = false;
          }, function (error) {
            return console.log(error);
          });
        }
      }]);

      return CandidateComponent;
    }();

    CandidateComponent.ɵfac = function CandidateComponent_Factory(t) {
      return new (t || CandidateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]));
    };

    CandidateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CandidateComponent,
      selectors: [["app-candidate"]],
      inputs: {
        candidate: "candidate"
      },
      outputs: {
        candidateRemoved: "candidateRemoved"
      },
      decls: 16,
      vars: 11,
      consts: [[1, "candidate", 3, "id"], ["content", "Curr\xEDculo", 3, "items", "clicked", 4, "ngIf", "ngIfElse"], ["uploadCurriculo", ""], ["disabled", "", 3, "ngModel", "ngModelChange"], [1, "candidate-links-content"], ["class", "candidate__new-link", 4, "ngIf"], [1, "candidate__links"], [4, "ngFor", "ngForOf"], [3, "click", 4, "ngIf", "ngIfElse"], ["updateCandidate", ""], [3, "candidateId"], ["candidate-job-opportunities", ""], ["content", "Curr\xEDculo", 3, "items", "clicked"], [3, "candidateId", "curriculumAdded"], [1, "candidate__new-link"], ["placeholder", "Perfil Social", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["type", "button", 3, "click"], [3, "click", 4, "ngIf"], [3, "click"]],
      template: function CandidateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CandidateComponent_app_menu_1_Template, 1, 1, "app-menu", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CandidateComponent_ng_template_2_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CandidateComponent_Template_input_ngModelChange_4_listener($event) {
            return ctx.candidate.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CandidateComponent_Template_input_ngModelChange_5_listener($event) {
            return ctx.candidate.cpf = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CandidateComponent_Template_input_ngModelChange_6_listener($event) {
            return ctx.candidate.address = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CandidateComponent_div_8_Template, 4, 3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CandidateComponent_div_10_Template, 3, 2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CandidateComponent_button_11_Template, 2, 0, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CandidateComponent_ng_template_12_Template, 2, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-associate-job", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.candidate._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasCurriculum)("ngIfElse", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.candidate.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.candidate.cpf);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.candidate.address);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.uploadCandidate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.candidate.links);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.uploadCandidate)("ngIfElse", _r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("candidateId", ctx.candidate._id);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _associate_job_associate_job_component__WEBPACK_IMPORTED_MODULE_5__["AssociateJobComponent"], _angular_material_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"], _upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_7__["UploadFileComponent"]],
      styles: [".candidate[_ngcontent-%COMP%]{\n    background-color:cadetblue;\n    padding: 10px;\n    margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FuZGlkYXRlcy9jYW5kaWRhdGUvY2FuZGlkYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jYW5kaWRhdGVzL2NhbmRpZGF0ZS9jYW5kaWRhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYW5kaWRhdGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpjYWRldGJsdWU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDEwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CandidateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-candidate',
          templateUrl: './candidate.component.html',
          styleUrls: ['./candidate.component.css']
        }]
      }], function () {
        return [{
          type: src_app_api_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]
        }];
      }, {
        candidate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        candidateRemoved: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/candidates/candidate/upload-file/upload-file.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/candidates/candidate/upload-file/upload-file.component.ts ***!
    \***************************************************************************/

  /*! exports provided: UploadFileComponent */

  /***/
  function srcAppCandidatesCandidateUploadFileUploadFileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadFileComponent", function () {
      return UploadFileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/api/api.service */
    "./src/app/api/api.service.ts");

    var UploadFileComponent = /*#__PURE__*/function () {
      function UploadFileComponent(formBuilder, apiService) {
        _classCallCheck(this, UploadFileComponent);

        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.curriculumAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(UploadFileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.uploadForm = this.formBuilder.group({
            file: null
          });
        }
      }, {
        key: "onFileSelect",
        value: function onFileSelect(event) {
          if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.uploadForm.get('file').setValue(file);
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this11 = this;

          var file = new FormData();
          file.append('resume', this.uploadForm.get('file').value);
          this.apiService.post.candidate_curriculum(this.candidateId, file).subscribe(function (response) {
            if (response.status === 201) {
              console.log('Currículo carregado com sucesso');

              _this11.curriculumAdded.emit(true);
            }
          }, function (error) {
            return console.error(error);
          });
        }
      }]);

      return UploadFileComponent;
    }();

    UploadFileComponent.ɵfac = function UploadFileComponent_Factory(t) {
      return new (t || UploadFileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]));
    };

    UploadFileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UploadFileComponent,
      selectors: [["app-upload-file"]],
      inputs: {
        candidateId: "candidateId"
      },
      outputs: {
        curriculumAdded: "curriculumAdded"
      },
      decls: 4,
      vars: 1,
      consts: [[1, "upload-file", 3, "formGroup", "ngSubmit"], ["type", "file", "name", "file", "accept", "application/pdf", 3, "change"], ["type", "submit"]],
      template: function UploadFileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UploadFileComponent_Template_form_ngSubmit_0_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UploadFileComponent_Template_input_change_1_listener($event) {
            return ctx.onFileSelect($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Enviar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.uploadForm);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbmRpZGF0ZXMvY2FuZGlkYXRlL3VwbG9hZC1maWxlL3VwbG9hZC1maWxlLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadFileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-upload-file',
          templateUrl: './upload-file.component.html',
          styleUrls: ['./upload-file.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: src_app_api_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]
        }];
      }, {
        candidateId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        curriculumAdded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/candidates/candidates.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/candidates/candidates.component.ts ***!
    \****************************************************/

  /*! exports provided: CandidatesComponent */

  /***/
  function srcAppCandidatesCandidatesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CandidatesComponent", function () {
      return CandidatesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../api/api.service */
    "./src/app/api/api.service.ts");
    /* harmony import */


    var _new_candidate_new_candidate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./new-candidate/new-candidate.component */
    "./src/app/candidates/new-candidate/new-candidate.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _candidate_candidate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./candidate/candidate.component */
    "./src/app/candidates/candidate/candidate.component.ts");

    function CandidatesComponent_app_candidate_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-candidate", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("candidateRemoved", function CandidatesComponent_app_candidate_2_Template_app_candidate_candidateRemoved_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.removeCandidate($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var candidate_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("candidate", candidate_r1);
      }
    }

    var CandidatesComponent = /*#__PURE__*/function () {
      function CandidatesComponent(apiService) {
        var _this12 = this;

        _classCallCheck(this, CandidatesComponent);

        this.apiService = apiService;
        this.candidates = [];
        this.jobs = [];

        this.addCandidate = function (candidate) {
          return _this12.candidates.push(candidate);
        };

        this.removeCandidate = function (id) {
          return _this12.candidates = _this12.candidates.filter(function (c) {
            return !(c._id === id);
          });
        };
      }

      _createClass(CandidatesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.apiService.get.all_candidates().subscribe(function (candidates) {
            return _this13.candidates = candidates;
          }, function (error) {
            return console.log(error);
          });
        }
      }]);

      return CandidatesComponent;
    }();

    CandidatesComponent.ɵfac = function CandidatesComponent_Factory(t) {
      return new (t || CandidatesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"]));
    };

    CandidatesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CandidatesComponent,
      selectors: [["app-candidates"]],
      decls: 3,
      vars: 1,
      consts: [[3, "candidateCreated"], [1, "candidates"], [3, "candidate", "candidateRemoved", 4, "ngFor", "ngForOf"], [3, "candidate", "candidateRemoved"]],
      template: function CandidatesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-new-candidate", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("candidateCreated", function CandidatesComponent_Template_app_new_candidate_candidateCreated_0_listener($event) {
            return ctx.addCandidate($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CandidatesComponent_app_candidate_2_Template, 1, 1, "app-candidate", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.candidates);
        }
      },
      directives: [_new_candidate_new_candidate_component__WEBPACK_IMPORTED_MODULE_2__["NewCandidateComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _candidate_candidate_component__WEBPACK_IMPORTED_MODULE_4__["CandidateComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbmRpZGF0ZXMvY2FuZGlkYXRlcy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CandidatesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-candidates',
          templateUrl: './candidates.component.html',
          styleUrls: ['./candidates.component.css']
        }]
      }], function () {
        return [{
          type: _api_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/candidates/candidates.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/candidates/candidates.service.ts ***!
    \**************************************************/

  /*! exports provided: CandidatesService */

  /***/
  function srcAppCandidatesCandidatesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CandidatesService", function () {
      return CandidatesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../api/api.service */
    "./src/app/api/api.service.ts");

    var CandidatesService = function CandidatesService(apiService) {
      var _this14 = this;

      _classCallCheck(this, CandidatesService);

      this.apiService = apiService;
      this.jobs = [];
      this.evaluators = [];

      this.getJobs = function () {
        return _this14.apiService.get.job_opportunities().subscribe(function (jobs) {
          return _this14.jobs = jobs;
        }, function (error) {
          return console.log(error);
        });
      };

      this.reloadJobs = function () {
        return _this14.getJobs();
      };

      this.getEvaluators = function () {
        return _this14.apiService.get.evaluators().subscribe(function (evaluators) {
          return _this14.evaluators = evaluators;
        }, function (error) {
          return console.log(error);
        });
      };

      this.reloadEvaluators = function () {
        return _this14.getEvaluators();
      };

      this.getJobs();
      this.getEvaluators();
    };

    CandidatesService.ɵfac = function CandidatesService_Factory(t) {
      return new (t || CandidatesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"]));
    };

    CandidatesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CandidatesService,
      factory: CandidatesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CandidatesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _api_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/candidates/new-candidate/new-candidate.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/candidates/new-candidate/new-candidate.component.ts ***!
    \*********************************************************************/

  /*! exports provided: NewCandidateComponent */

  /***/
  function srcAppCandidatesNewCandidateNewCandidateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewCandidateComponent", function () {
      return NewCandidateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/utils/utils */
    "./src/app/utils/utils.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api/api.service */
    "./src/app/api/api.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function NewCandidateComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewCandidateComponent_div_11_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var link_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.removeLink(link_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Remover");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var link_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", link_r1, " ");
      }
    }

    var _c0 = function _c0() {
      return {
        standalone: true
      };
    };

    var NewCandidateComponent = /*#__PURE__*/function () {
      function NewCandidateComponent(formBuilder, apiService) {
        var _this15 = this;

        _classCallCheck(this, NewCandidateComponent);

        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.candidateCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

        this.addLink = function () {
          var links = Object(src_app_utils_utils__WEBPACK_IMPORTED_MODULE_1__["fbGetValue"])(_this15.candidateForm, 'links');

          if (_this15.newLink && !links.includes(_this15.newLink)) {
            Object(src_app_utils_utils__WEBPACK_IMPORTED_MODULE_1__["fbSetValue"])(_this15.candidateForm, 'links', [].concat(_toConsumableArray(links), [_this15.newLink]));
            _this15.newLink = '';
          }
        };

        this.emitCandidateCreated = function (candidate) {
          return _this15.candidateCreated.emit(candidate);
        };

        this.getLinks = function () {
          return Object(src_app_utils_utils__WEBPACK_IMPORTED_MODULE_1__["fbGetValue"])(_this15.candidateForm, 'links');
        };

        this.removeLink = function (url) {
          var newLinks = Object(src_app_utils_utils__WEBPACK_IMPORTED_MODULE_1__["fbGetValue"])(_this15.candidateForm, 'links').filter(function (link) {
            return !(link === url);
          });
          Object(src_app_utils_utils__WEBPACK_IMPORTED_MODULE_1__["fbSetValue"])(_this15.candidateForm, 'links', newLinks);
        };
      }

      _createClass(NewCandidateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var newCandidate = {
            _id: null,
            name: '',
            cpf: '',
            address: '',
            links: null,
            curriculum: null,
            jobOpportunities: null,
            hasResume: null
          };
          this.candidateForm = this.formBuilder.group(newCandidate);
          Object(src_app_utils_utils__WEBPACK_IMPORTED_MODULE_1__["fbSetValue"])(this.candidateForm, 'links', []);
        }
      }, {
        key: "create",
        value: function create(candidate) {
          var _this16 = this;

          this.apiService.post.candidate(candidate).subscribe(function (candidateCreated) {
            _this16.emitCandidateCreated(candidateCreated);

            _this16.candidateForm.reset();
          }, function (error) {
            return console.error(error);
          });
        }
      }]);

      return NewCandidateComponent;
    }();

    NewCandidateComponent.ɵfac = function NewCandidateComponent_Factory(t) {
      return new (t || NewCandidateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"]));
    };

    NewCandidateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewCandidateComponent,
      selectors: [["app-new-candidate"]],
      outputs: {
        candidateCreated: "candidateCreated"
      },
      decls: 14,
      vars: 5,
      consts: [[1, "new-candidate", 3, "formGroup", "ngSubmit"], [1, "new-candidate__title"], ["formControlName", "name", "placeholder", "Nome"], ["formControlName", "cpf", "maxlength", "11", "placeholder", "CPF"], ["formControlName", "address", "placeholder", "Endere\xE7o"], [1, "new-candidate__new-link"], ["placeholder", "Perfil Social", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["type", "button", 3, "click"], [1, "new-candidate__links"], [4, "ngFor", "ngForOf"], ["type", "submit"], [3, "click"]],
      template: function NewCandidateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NewCandidateComponent_Template_form_ngSubmit_0_listener() {
            return ctx.create(ctx.candidateForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Novo Candidato");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewCandidateComponent_Template_input_ngModelChange_7_listener($event) {
            return ctx.newLink = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewCandidateComponent_Template_button_click_8_listener() {
            return ctx.addLink();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Adicionar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NewCandidateComponent_div_11_Template, 4, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cadastrar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.candidateForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newLink)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getLinks());
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbmRpZGF0ZXMvbmV3LWNhbmRpZGF0ZS9uZXctY2FuZGlkYXRlLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewCandidateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-new-candidate',
          templateUrl: './new-candidate.component.html',
          styleUrls: ['./new-candidate.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: src_app_api_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"]
        }];
      }, {
        candidateCreated: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 16,
      vars: 0,
      consts: [[1, "menu"], ["routerLink", "/home", "routerLinkActive", "active"], ["routerLink", "/jobs", "routerLinkActive", "active"], ["routerLink", "/skills", "routerLinkActive", "active"], ["routerLink", "/candidates", "routerLinkActive", "active"], ["routerLink", "/users", "routerLinkActive", "active"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "System");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Vagas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Compet\xEAncias");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Candidatos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Configura\xE7\xF5es");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: [".menu[_ngcontent-%COMP%]{\n    display: flex;\n    height: 100%;\n    background-color: rgb(22, 89, 145);\n    grid-area: header;\n    padding: 0;\n    flex-direction: column;\n    \n}\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 15px 0px;\n    border: 1px solid lightcyan;\n    height: 100%;\n    width: 100%;\n    transition: font 0.5s, color 0.5s;\n    cursor: pointer;\n}\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{\n    background: lightsteelblue\n}\n.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    text-decoration: none;\n    color: white;\n    height: 100%;\n    display: flex;\n    padding: 5px;\n    align-items: center;\n}\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{\n    font-size: 1rem;\n    color: black    ;\n    background: lightsteelblue\n}\n@media screen and (min-width: 600px) {\n    .menu[_ngcontent-%COMP%] {\n        flex-direction: row;\n        align-items: center;\n        justify-content: center;\n    }\n    .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        width: auto;\n        border: 0;\n        padding: 0 10px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixrQ0FBa0M7SUFDbEMsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixzQkFBc0I7O0FBRTFCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUNBQWlDO0lBQ2pDLGVBQWU7QUFDbkI7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQix1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLFdBQVc7UUFDWCxTQUFTO1FBQ1QsZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyLCA4OSwgMTQ1KTtcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgXG59XG4ubWVudSBsaSB7XG4gICAgcGFkZGluZzogMTVweCAwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRjeWFuO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0cmFuc2l0aW9uOiBmb250IDAuNXMsIGNvbG9yIDAuNXM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm1lbnUgbGk6aG92ZXJ7XG4gICAgYmFja2dyb3VuZDogbGlnaHRzdGVlbGJsdWVcbn1cbi5tZW51IGF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tZW51IGxpOmhvdmVyIGF7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiBibGFjayAgICA7XG4gICAgYmFja2dyb3VuZDogbGlnaHRzdGVlbGJsdWVcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gICAgLm1lbnUge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgLm1lbnUgbGkge1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HomeRoutingModule */

  /***/
  function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () {
      return HomeRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/home/home.component.ts");

    var routes = [{
      path: '',
      component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }];

    var HomeRoutingModule = function HomeRoutingModule() {
      _classCallCheck(this, HomeRoutingModule);
    };

    HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HomeRoutingModule
    });
    HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HomeRoutingModule_Factory(t) {
        return new (t || HomeRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        this.evaluations = [];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 2,
      vars: 0,
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Home Works");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _api_api_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../api/api.module */
    "./src/app/api/api.module.ts");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/home/home-routing.module.ts");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/home/home.component.ts");

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HomeModule
    });
    HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HomeModule_Factory(t) {
        return new (t || HomeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _api_api_module__WEBPACK_IMPORTED_MODULE_2__["ApiModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, {
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _api_api_module__WEBPACK_IMPORTED_MODULE_2__["ApiModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"]],
        exports: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _api_api_module__WEBPACK_IMPORTED_MODULE_2__["ApiModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"]],
          exports: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/jobs/jobs.component.ts":
  /*!****************************************!*\
    !*** ./src/app/jobs/jobs.component.ts ***!
    \****************************************/

  /*! exports provided: JobsComponent */

  /***/
  function srcAppJobsJobsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobsComponent", function () {
      return JobsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../utils/utils */
    "./src/app/utils/utils.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../api/api.service */
    "./src/app/api/api.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _stages_stages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./stages/stages.component */
    "./src/app/jobs/stages/stages.component.ts");

    function JobsComponent_option_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var department_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", department_r2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](department_r2);
      }
    }

    function JobsComponent_div_12_option_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var department_r8 = ctx.$implicit;

        var job_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", department_r8 === job_r3.department);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", department_r8, " ");
      }
    }

    function JobsComponent_div_12_button_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobsComponent_div_12_button_7_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var job_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.edit(job_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Editar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function JobsComponent_div_12_ng_template_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobsComponent_div_12_ng_template_8_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var job_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.update(job_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Atualizar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function JobsComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobsComponent_div_12_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var job_r3 = ctx.$implicit;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16["delete"](job_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Deletar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function JobsComponent_div_12_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var job_r3 = ctx.$implicit;
          return job_r3.name = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function JobsComponent_div_12_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var job_r3 = ctx.$implicit;
          return job_r3.description = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function JobsComponent_div_12_Template_select_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var job_r3 = ctx.$implicit;
          return job_r3.department = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, JobsComponent_div_12_option_6_Template, 2, 2, "option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, JobsComponent_div_12_button_7_Template, 2, 0, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, JobsComponent_div_12_ng_template_8_Template, 2, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-stages", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var job_r3 = ctx.$implicit;

        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", job_r3._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", job_r3.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", job_r3.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", job_r3.department);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.departments);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r1.showButtonUpdateJobID === job_r3._id))("ngIfElse", _r6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("job", job_r3);
      }
    }

    var JobsComponent = /*#__PURE__*/function () {
      function JobsComponent(formBuilder, apiService) {
        _classCallCheck(this, JobsComponent);

        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.departments = [];
        this.jobs = [];
      }

      _createClass(JobsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          this.apiService.get.departments().subscribe(function (departments) {
            return _this17.departments = departments;
          });
          var job = {
            _id: null,
            name: '',
            stages: null,
            department: '',
            description: ''
          };
          this.jobForm = this.formBuilder.group(job);
          this.apiService.get.job_opportunities().subscribe(function (jobs) {
            return _this17.jobs = jobs;
          });
        }
      }, {
        key: "create",
        value: function create(job) {
          var _this18 = this;

          this.apiService.post.job_opportunity(job).subscribe(function (jobCreated) {
            _this18.jobs.push(jobCreated);

            _this18.jobForm.reset();
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "delete",
        value: function _delete(job) {
          var _this19 = this;

          debugger;
          this.apiService["delete"].job_opportunity(job._id).subscribe(function (response) {
            if (response.status === 204) {
              console.log('Vaga deletada com sucesso');
              _this19.jobs = _this19.jobs.filter(function (j) {
                return !(j._id === job._id);
              });
            }
          }, function (error) {
            return console.warn(error);
          });
        }
      }, {
        key: "edit",
        value: function edit(job) {
          Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["toggleDisabledInputsAndSelect"])(job._id);
          this.showButtonUpdateJobID = job._id;
        }
      }, {
        key: "update",
        value: function update(job) {
          var _this20 = this;

          this.apiService.update.job_opportunity(job).subscribe(function (jobUpdated) {
            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["toggleDisabledInputsAndSelect"])(job._id);
            _this20.showButtonUpdateJobID = null;
          }, function (error) {
            return console.log(error);
          });
        }
      }]);

      return JobsComponent;
    }();

    JobsComponent.ɵfac = function JobsComponent_Factory(t) {
      return new (t || JobsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"]));
    };

    JobsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: JobsComponent,
      selectors: [["app-jobs"]],
      decls: 13,
      vars: 3,
      consts: [[1, "new-job", 3, "formGroup", "ngSubmit"], [1, "new-job__title"], ["formControlName", "name", "placeholder", "Nome da Vaga"], ["formControlName", "description", "placeholder", "Descri\xE7\xE3o da Vaga"], ["formControlName", "department"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "submit"], [1, "jobs"], [1, "jobs__title"], ["class", "job", 3, "id", 4, "ngFor", "ngForOf"], [3, "value"], [1, "job", 3, "id"], [3, "click"], ["disabled", "", 3, "ngModel", "ngModelChange"], [3, "selected", 4, "ngFor", "ngForOf"], [3, "click", 4, "ngIf", "ngIfElse"], ["updateButton", ""], [3, "job"], [3, "selected"]],
      template: function JobsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function JobsComponent_Template_form_ngSubmit_0_listener() {
            return ctx.create(ctx.jobForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Nova Vaga");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, JobsComponent_option_6_Template, 2, 2, "option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cadastrar Vaga");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Lista de Vagas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, JobsComponent_div_12_Template, 11, 8, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.jobForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.departments);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.jobs.reverse());
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _stages_stages_component__WEBPACK_IMPORTED_MODULE_5__["StagesComponent"]],
      styles: [".job[_ngcontent-%COMP%]{\n    margin-bottom: 50px;\n    background-color: coral;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9icy9qb2JzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0VHOzs7QUFHSDtJQUNJLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9qb2JzL2pvYnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5hZGQtam9ie1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiA1JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYWRkLWpvYiBkaXYge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uYWRkLWpvYiBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMTVweCAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLmFkZC1qb2IgaW5wdXQsIC5hZGQtam9iLXN0YWdlcyBzZWxlY3Qge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0c2xhdGVncmF5O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBoZWlnaHQ6IDIuNXJlbTtcbn1cbi5hZGQtam9iIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCAxNSwgMTYxLCAwLjgpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDMwcHggMCAwIDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNzVzLCBjb2xvciAwLjc1cztcbiAgICBib3JkZXI6IDA7XG59XG4uYWRkLWpvYiBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTUsIDE2MSk7XG4gICAgY29sb3I6IHllbGxvdztcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gICAgLmFkZC1qb2J7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIC5hZGQtam9iIGRpdiB7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgIH1cbiAgICAuYWRkLWpvYiBpbnB1dCwgLmFkZC1qb2IgbGFiZWwsIC5hZGQtam9iIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiA4MDBweDtcbiAgICB9XG4gICAgLmFkZC1qb2IgYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG59XG5cblxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gICAgLmFkZC1qb2Itc3RhZ2VzIHNlbGVjdCB7XG4gICAgICAgIHdpZHRoOiA4MDBweDtcbiAgICB9XG4gICAgLmFkZC1qb2Itc3RhZ2VzLWxpc3R7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMCAwIDAgO1xuICAgIH1cbiAgICAuYWRkLWpvYi1zdGFnZXMtbGlzdCBkaXZ7XG4gICAgICAgIHBhZGRpbmc6IDdweDtcbiAgICB9XG59ICovXG5cblxuLmpvYntcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcmFsO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JobsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-jobs',
          templateUrl: './jobs.component.html',
          styleUrls: ['./jobs.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _api_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/jobs/stages/stages.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/jobs/stages/stages.component.ts ***!
    \*************************************************/

  /*! exports provided: StagesComponent */

  /***/
  function srcAppJobsStagesStagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StagesComponent", function () {
      return StagesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/utils/utils */
    "./src/app/utils/utils.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api/api.service */
    "./src/app/api/api.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function StagesComponent_form_3_option_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var skill_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", skill_r3._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r3.name);
      }
    }

    function StagesComponent_form_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function StagesComponent_form_3_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.addStage(ctx_r4.stageForm.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StagesComponent_form_3_option_4_Template, 2, 2, "option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Adiccionar Etapa");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.stageForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.skills);
      }
    }

    function StagesComponent_div_4_div_3_div_5_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var skill_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r15.name);
      }
    }

    function StagesComponent_div_4_div_3_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StagesComponent_div_4_div_3_div_5_div_1_Template, 2, 1, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var stage_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", stage_r7.skills);
      }
    }

    function StagesComponent_div_4_div_3_ng_template_6_option_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var skill_r18 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", skill_r18._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r18.name);
      }
    }

    function StagesComponent_div_4_div_3_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StagesComponent_div_4_div_3_ng_template_6_Template_select_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var stage_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return stage_r7.skills = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StagesComponent_div_4_div_3_ng_template_6_option_1_Template, 2, 2, "option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var stage_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", stage_r7.skills);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.skills);
      }
    }

    function StagesComponent_div_4_div_3_button_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StagesComponent_div_4_div_3_button_8_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var stage_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r23.edit(stage_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Editar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StagesComponent_div_4_div_3_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StagesComponent_div_4_div_3_ng_template_9_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var stage_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r26.update(stage_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Atualizar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StagesComponent_div_4_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StagesComponent_div_4_div_3_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var stage_r7 = ctx.$implicit;

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r29["delete"](stage_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Deletar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StagesComponent_div_4_div_3_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var stage_r7 = ctx.$implicit;
          return stage_r7.name = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StagesComponent_div_4_div_3_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var stage_r7 = ctx.$implicit;
          return stage_r7.description = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StagesComponent_div_4_div_3_div_5_Template, 2, 1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, StagesComponent_div_4_div_3_ng_template_6_Template, 2, 2, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, StagesComponent_div_4_div_3_button_8_Template, 2, 0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, StagesComponent_div_4_div_3_ng_template_9_Template, 2, 0, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var stage_r7 = ctx.$implicit;

        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", stage_r7._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", stage_r7.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", stage_r7.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r6.showButtonUpdateStageID === stage_r7._id))("ngIfElse", _r9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r6.showButtonUpdateStageID === stage_r7._id))("ngIfElse", _r12);
      }
    }

    function StagesComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Lista de Etapas");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StagesComponent_div_4_div_3_Template, 11, 7, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.job.stages.reverse());
      }
    }

    var StagesComponent = /*#__PURE__*/function () {
      function StagesComponent(formBuilder, apiService) {
        var _this21 = this;

        _classCallCheck(this, StagesComponent);

        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.skills = [];
        this.showAddStage = false;
        this.showButtonUpdateStageID = null;

        this.toggleAddStage = function () {
          return _this21.showAddStage = !_this21.showAddStage;
        };
      }

      _createClass(StagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this22 = this;

          if (!this.job) throw new Error('StagesComponent : there are properties that have not been loaded.');
          this.apiService.get.all_skills().subscribe(function (skills) {
            return _this22.skills = skills;
          });
          var stage = {
            _id: null,
            name: '',
            description: '',
            skills: null
          };
          this.stageForm = this.formBuilder.group(stage);
        }
      }, {
        key: "addStage",
        value: function addStage(stageData) {
          var _this23 = this;

          this.apiService.add_estages_to_job_opportunity(stageData, this.job._id).subscribe(function (jobStages) {
            _this23.job.stages = jobStages;

            _this23.stageForm.reset();

            console.log(_this23.job.stages);
          }, function (error) {
            return console.log(error);
          });
          this.job.stages.push(stageData);
        }
      }, {
        key: "delete",
        value: function _delete(stage) {
          var _this24 = this;

          this.apiService["delete"].stage(stage._id).subscribe(function (response) {
            if (response.status === 204) {
              console.log('Etapa deletada com sucesso');
              _this24.job.stages = _this24.job.stages.filter(function (s) {
                return !(s._id === stage._id);
              });
            }
          }, function (error) {
            return console.warn(error);
          });
        }
      }, {
        key: "edit",
        value: function edit(stage) {
          Object(src_app_utils_utils__WEBPACK_IMPORTED_MODULE_1__["toggleDisabledInputsAndSelect"])(stage._id);
          this.showButtonUpdateStageID = stage._id;
        }
      }, {
        key: "update",
        value: function update(stage) {
          var _this25 = this;

          this.apiService.update.stage(stage).subscribe(function (stageUpdated) {
            stage = stageUpdated;
            Object(src_app_utils_utils__WEBPACK_IMPORTED_MODULE_1__["toggleDisabledInputsAndSelect"])(stage._id);
            _this25.showButtonUpdateStageID = null;
          }, function (error) {
            return console.log(error);
          });
        }
      }]);

      return StagesComponent;
    }();

    StagesComponent.ɵfac = function StagesComponent_Factory(t) {
      return new (t || StagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"]));
    };

    StagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StagesComponent,
      selectors: [["app-stages"]],
      inputs: {
        job: "job"
      },
      decls: 5,
      vars: 2,
      consts: [[1, "stages"], [1, "stages__title", 3, "click"], ["class", "stages__new-stage", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "stages__list", 4, "ngIf"], [1, "stages__new-stage", 3, "formGroup", "ngSubmit"], ["type", "text", "formControlName", "name", "placeholder", "Nome"], ["type", "text", "formControlName", "description", "placeholder", "Descri\xE7\xE3o"], ["formControlName", "skills", "multiple", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "button"], [3, "value"], [1, "stages__list"], [1, "stages__title"], ["class", "stage", 3, "id", 4, "ngFor", "ngForOf"], [1, "stage", 3, "id"], [3, "click"], ["disabled", "", 3, "ngModel", "ngModelChange"], ["class", "stage__skills", 4, "ngIf", "ngIfElse"], ["selectSkills", ""], [3, "click", 4, "ngIf", "ngIfElse"], ["updateButton", ""], [1, "stage__skills"], [4, "ngFor", "ngForOf"], ["multiple", "", 3, "ngModel", "ngModelChange"]],
      template: function StagesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StagesComponent_Template_button_click_1_listener() {
            return ctx.toggleAddStage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Nova Etapa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StagesComponent_form_3_Template, 7, 2, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StagesComponent_div_4_Template, 4, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAddStage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.job.stages == null ? null : ctx.job.stages.length);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectMultipleControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]],
      styles: [".stage[_ngcontent-%COMP%]{\n    background-color: blueviolet;\n    margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9icy9zdGFnZXMvc3RhZ2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0QkFBNEI7SUFDNUIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2pvYnMvc3RhZ2VzL3N0YWdlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YWdle1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XG4gICAgbWFyZ2luOiAxMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-stages',
          templateUrl: './stages.component.html',
          styleUrls: ['./stages.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: src_app_api_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"]
        }];
      }, {
        job: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/skills/skills.component.ts":
  /*!********************************************!*\
    !*** ./src/app/skills/skills.component.ts ***!
    \********************************************/

  /*! exports provided: SkillsComponent */

  /***/
  function srcAppSkillsSkillsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkillsComponent", function () {
      return SkillsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../utils/utils */
    "./src/app/utils/utils.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../api/api.service */
    "./src/app/api/api.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SkillsComponent_div_10_button_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillsComponent_div_10_button_5_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var skill_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.edit(skill_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Editar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SkillsComponent_div_10_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillsComponent_div_10_ng_template_6_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var skill_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.update(skill_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Atualizar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SkillsComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillsComponent_div_10_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var skill_r1 = ctx.$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11["delete"](skill_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Deletar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SkillsComponent_div_10_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var skill_r1 = ctx.$implicit;
          return skill_r1.name = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SkillsComponent_div_10_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var skill_r1 = ctx.$implicit;
          return skill_r1.description = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SkillsComponent_div_10_button_5_Template, 2, 0, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SkillsComponent_div_10_ng_template_6_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var skill_r1 = ctx.$implicit;

        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", skill_r1._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", skill_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", skill_r1.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r0.showButtonUpdateSkillID === skill_r1._id))("ngIfElse", _r3);
      }
    }

    var SkillsComponent = /*#__PURE__*/function () {
      function SkillsComponent(formBuilder, apiService) {
        _classCallCheck(this, SkillsComponent);

        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.skills = [];
        this.showButtonUpdateSkillID = null;
      }

      _createClass(SkillsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this26 = this;

          this.apiService.get.all_skills().subscribe(function (skills) {
            return _this26.skills = skills;
          });
          var newSkill = {
            _id: null,
            name: '',
            description: ''
          };
          this.skillForm = this.formBuilder.group(newSkill);
        }
      }, {
        key: "create",
        value: function create(skill) {
          var _this27 = this;

          this.apiService.post.skill(skill).subscribe(function (skillCreated) {
            _this27.skills.push(skillCreated);

            _this27.skillForm.reset();
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "delete",
        value: function _delete(skill) {
          var _this28 = this;

          this.apiService["delete"].skill(skill._id).subscribe(function (response) {
            if (response.status === 204) {
              console.log('Competência deletada com sucesso');
              _this28.skills = _this28.skills.filter(function (j) {
                return !(j._id === skill._id);
              });
            }
          }, function (error) {
            return console.warn(error);
          });
        }
      }, {
        key: "edit",
        value: function edit(skill) {
          Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["toggleDisabledInputsAndSelect"])(skill._id);
          this.showButtonUpdateSkillID = skill._id;
        }
      }, {
        key: "update",
        value: function update(skill) {
          var _this29 = this;

          this.apiService.update.skill(skill).subscribe(function (skillUpdated) {
            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["toggleDisabledInputsAndSelect"])(skillUpdated._id);
            _this29.showButtonUpdateSkillID = null;
          }, function (error) {
            return console.log(error);
          });
        }
      }]);

      return SkillsComponent;
    }();

    SkillsComponent.ɵfac = function SkillsComponent_Factory(t) {
      return new (t || SkillsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"]));
    };

    SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SkillsComponent,
      selectors: [["app-skills"]],
      decls: 11,
      vars: 2,
      consts: [[1, "new-skill", 3, "formGroup", "ngSubmit"], [1, "new-skill__title"], ["formControlName", "name", "placeholder", "Nome da Compet\xEAncia"], ["formControlName", "description", "placeholder", "Descri\xE7\xE3o da Compet\xEAncia"], ["type", "submit"], [1, "skills"], [1, "skills__title"], ["class", "skill", 3, "id", 4, "ngFor", "ngForOf"], [1, "skill", 3, "id"], [3, "click"], ["disabled", "", 3, "ngModel", "ngModelChange"], [3, "click", 4, "ngIf", "ngIfElse"], ["updateButton", ""]],
      template: function SkillsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SkillsComponent_Template_form_ngSubmit_0_listener() {
            return ctx.create(ctx.skillForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Adicionar Nova Compet\xEAncia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Cadastrar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Lista de Vagas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SkillsComponent_div_10_Template, 8, 5, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.skillForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills.reverse());
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NraWxscy9za2lsbHMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-skills',
          templateUrl: './skills.component.html',
          styleUrls: ['./skills.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _api_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user-config/user-config.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/user-config/user-config.component.ts ***!
    \******************************************************/

  /*! exports provided: UserConfigComponent */

  /***/
  function srcAppUserConfigUserConfigComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserConfigComponent", function () {
      return UserConfigComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../api/api.service */
    "./src/app/api/api.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UserConfigComponent_li_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " 0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var evaluator_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](evaluator_r1.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", evaluator_r1.department, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", evaluator_r1.role, " ");
      }
    }

    var UserConfigComponent = /*#__PURE__*/function () {
      function UserConfigComponent(formBuilder, apiService) {
        _classCallCheck(this, UserConfigComponent);

        this.formBuilder = formBuilder;
        this.apiService = apiService;
      }

      _createClass(UserConfigComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this30 = this;

          var properties = {
            username: '',
            password: '',
            department: '',
            role: ''
          };
          this.userForm = this.formBuilder.group(properties);
          this.apiService.user.evaluators().subscribe(function (data) {
            return _this30.evaluators = data;
          });
          console.log(this.evaluators);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(userData) {
          this.apiService.user.create(userData).subscribe(function (response) {
            return console.log(response);
          }, function (error) {
            return console.log(error);
          });
        }
      }]);

      return UserConfigComponent;
    }();

    UserConfigComponent.ɵfac = function UserConfigComponent_Factory(t) {
      return new (t || UserConfigComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]));
    };

    UserConfigComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserConfigComponent,
      selectors: [["app-user-config"]],
      decls: 44,
      vars: 2,
      consts: [[1, "user-info"], ["src", "https://rmtelefonia.com.br/wp-content/uploads/2015/11/Avatar-masculino.png", "alt", "...", 1, "rounded"], [1, "user-details"], [1, "user-config", 3, "formGroup", "ngSubmit"], ["for", "username"], ["id", "username", "type", "text", "formControlName", "username"], ["for", "password"], ["id", "password", "type", "text", "formControlName", "password"], ["for", "department"], ["id", "department", "type", "text", "formControlName", "department", "value", "SOFTWARE_DEVELOPMENT"], ["for", "role"], ["id", "role", "type", "text", "formControlName", "role"], ["type", "submit", 1, "button"], [1, "user-list-title"], [1, "user-list"], [4, "ngFor", "ngForOf"]],
      template: function UserConfigComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Nome de Usu\xE1rio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Senha de Acesso");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Departamento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Fun\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UserConfigComponent_Template_form_ngSubmit_12_listener() {
            return ctx.onSubmit(ctx.userForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Nome de Usu\xE1rio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Senha de Acesso ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Departamento Respons\xE1vel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Fun\xE7\xE3o ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Cadastrar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Lista de Usu\xE1rios");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Usu\xE1rio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Departamento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Fun\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, UserConfigComponent_li_43_Template, 9, 3, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.evaluators);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: [".user-info[_ngcontent-%COMP%] {\n    display: flex;\n    margin: 50px;\n    flex-direction: column;\n    align-items: center;\n}\n.user-details[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n}\n.user-details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n    margin: 10px 0;\n}\n.user-config[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n    padding: 1% 4%;\n}\n.user-config[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    width: 100%;\n}\n.user-config[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 15px;\n    font-weight: bold;\n    display: block;\n}\n.user-config[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    flex-basis: auto;\n    padding: 10px;\n    display: block;\n    width: 100%;\n    margin: 10px 0;\n    border: 1px solid lightslategray;\n    border-radius: 5px;\n    height: 2.5rem;\n}\n.user-config[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    background-color: rgb(15, 15, 161, 0.8);\n    color: white;\n    border-radius: 5px;\n    padding: 0.85em;\n    transition: background 0.75s, color 0.75s;\n    border: 0;\n}\n.user-config[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n    background-color: rgb(15, 15, 161);\n    color: yellow;\n}\n@media screen and (min-width: 600px) {\n    .user-info[_ngcontent-%COMP%] {\n        display: flex;\n        flex-direction: row;\n    }\n    .user-details[_ngcontent-%COMP%]{\n        height: 150px;\n        margin: 20px 0 0 30px;\n        align-items: flex-start;\n    }\n    \n    .user-config[_ngcontent-%COMP%]{\n        align-items: center;\n        flex-direction: row;\n        justify-content: space-between;\n    }\n    .user-config[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n        width: auto;\n    }\n    .user-config[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .user-config[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .user-config[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n        width: auto;\n    }\n    .user-list-title[_ngcontent-%COMP%]{\n        margin: 30px 0 0 55px;\n        color: blue;\n        font-size: 1rem;\n        font-weight: bold;\n    }\n    .user-list[_ngcontent-%COMP%] {\n        margin: 20px 55px;\n    }\n    .user-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        display: flex;\n        align-items: flex-start;\n    }\n    .user-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        width: 25%;\n    }\n    .user-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        padding: 10px 0;\n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1jb25maWcvdXNlci1jb25maWcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGNBQWM7SUFDZCxXQUFXO0lBQ1gsY0FBYztJQUNkLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksdUNBQXVDO0lBQ3ZDLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHlDQUF5QztJQUN6QyxTQUFTO0FBQ2I7QUFDQTtJQUNJLGtDQUFrQztJQUNsQyxhQUFhO0FBQ2pCO0FBR0E7SUFDSTtRQUNJLGFBQWE7UUFDYixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGFBQWE7UUFDYixxQkFBcUI7UUFDckIsdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQiw4QkFBOEI7SUFDbEM7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxxQkFBcUI7UUFDckIsV0FBVztRQUNYLGVBQWU7UUFDZixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxlQUFlO0lBQ25COztBQUVKIiwiZmlsZSI6InNyYy9hcHAvdXNlci1jb25maWcvdXNlci1jb25maWcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiA1MHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi51c2VyLWRldGFpbHN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udXNlci1kZXRhaWxzIHNwYW57XG4gICAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbi51c2VyLWNvbmZpZ3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMSUgNCU7XG59XG4udXNlci1jb25maWcgZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnVzZXItY29uZmlnIGxhYmVsIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4udXNlci1jb25maWcgaW5wdXQge1xuICAgIGZsZXgtYmFzaXM6IGF1dG87XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodHNsYXRlZ3JheTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgaGVpZ2h0OiAyLjVyZW07XG59XG4udXNlci1jb25maWcgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNjEsIDAuOCk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAwLjg1ZW07XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjc1cywgY29sb3IgMC43NXM7XG4gICAgYm9yZGVyOiAwO1xufVxuLnVzZXItY29uZmlnIGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCAxNSwgMTYxKTtcbiAgICBjb2xvcjogeWVsbG93O1xufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gICAgLnVzZXItaW5mbyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgfVxuICAgIC51c2VyLWRldGFpbHN7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgIG1hcmdpbjogMjBweCAwIDAgMzBweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgfVxuICAgIFxuICAgIC51c2VyLWNvbmZpZ3tcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cbiAgICAudXNlci1jb25maWcgZGl2IHtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgfVxuICAgIC51c2VyLWNvbmZpZyBpbnB1dCwgLnVzZXItY29uZmlnIGxhYmVsLCAudXNlci1jb25maWcgYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgfVxuICAgIC51c2VyLWxpc3QtdGl0bGV7XG4gICAgICAgIG1hcmdpbjogMzBweCAwIDAgNTVweDtcbiAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIC51c2VyLWxpc3Qge1xuICAgICAgICBtYXJnaW46IDIwcHggNTVweDtcbiAgICB9XG4gICAgLnVzZXItbGlzdCBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIH1cbiAgICAudXNlci1saXN0IHNwYW4ge1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgIH1cbiAgICAudXNlci1saXN0IGxpIHtcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgIH1cblxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserConfigComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-config',
          templateUrl: './user-config.component.html',
          styleUrls: ['./user-config.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _api_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/utils/utils.ts":
  /*!********************************!*\
    !*** ./src/app/utils/utils.ts ***!
    \********************************/

  /*! exports provided: toggleDisabledInputsAndSelect, hasPropertyWithValueNullOrEmpty, builderObject, fbGetValue, fbSetValue */

  /***/
  function srcAppUtilsUtilsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toggleDisabledInputsAndSelect", function () {
      return toggleDisabledInputsAndSelect;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "hasPropertyWithValueNullOrEmpty", function () {
      return hasPropertyWithValueNullOrEmpty;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "builderObject", function () {
      return builderObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fbGetValue", function () {
      return fbGetValue;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fbSetValue", function () {
      return fbSetValue;
    });

    var toggleDisabledInputsAndSelect = function toggleDisabledInputsAndSelect(idElement) {
      var element = document.getElementById(idElement);
      element.childNodes.forEach(function (node) {
        if (node.nodeName === 'INPUT' || node.nodeName === 'SELECT') node['disabled'] = !node['disabled'];else if (node.nodeName === 'DIV') {
          if (node.childNodes.length) {
            node.childNodes.forEach(function (n) {
              if (n.nodeName === 'INPUT' || n.nodeName === 'SELECT') n['disabled'] = !n['disabled'];
            });
          }
        }
      });
    };

    var hasPropertyWithValueNullOrEmpty = function hasPropertyWithValueNullOrEmpty(object) {
      var result = false;

      for (var _len = arguments.length, props = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        props[_key - 1] = arguments[_key];
      }

      props.forEach(function (prop) {
        if (!result) {
          if (object.hasOwnProperty(prop)) {
            var value = object[prop];
            if (!value) result = true;else if (Array.isArray(value) && !value["length"]) result = true;
          }
        }
      });
      return result;
    };

    var builderObject = function builderObject(object, properties) {
      var invalid = hasPropertyWithValueNullOrEmpty.apply(void 0, [object].concat(_toConsumableArray(properties)));
      if (invalid) throw new Error("Builder Object : the reported object contains properties with invalid values");
      return properties.reduce(function (newObject, prop) {
        newObject[prop] = object[prop];
        return newObject;
      }, {});
    };

    var fbGetValue = function fbGetValue(form, key) {
      return form.get(key).value;
    };

    var fbSetValue = function fbSetValue(form, key, value) {
      return form.get(key).setValue(value);
    };
    /***/

  },

  /***/
  "./src/assets/error-messages.ts":
  /*!**************************************!*\
    !*** ./src/assets/error-messages.ts ***!
    \**************************************/

  /*! exports provided: ErrorMessages */

  /***/
  function srcAssetsErrorMessagesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorMessages", function () {
      return ErrorMessages;
    });

    var ErrorMessages = {
      authenticate: {
        valid: "Valid API access authorization",
        invalid: "API access authorization failed ..."
      }
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/felipemp/Documentos/projects/fatec/software-engineering-lab-work/app/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map