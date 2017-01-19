;(function(){
module.exports = {
  mixins: [require("vue-mixins/isOpened2"), require("vue-mixins/class"), require("vue-mixins/transition2")],
  props: {
    stayOpen: {
      type: Boolean,
      "default": false
    },
    transition: {
      type: String
    },
    transitionName: {
      type: String
    }
  },
  computed: {
    mergeClass: function() {
      var tmp;
      tmp = [this.$parent.itemClass];
      if (this.opened) {
        tmp.push("active");
      }
      return tmp;
    },
    headerClass: function() {
      var tmp;
      tmp = [this.$parent.headerClass];
      if (this.opened) {
        tmp.push("active");
      }
      return tmp;
    },
    bodyClass: function() {
      return [this.$parent.bodyClass];
    },
    cTransition: function() {
      var name;
      name = this.transition;
      if (name == null) {
        name = this.$parent.transition;
      }
      return this.processTransition(name, {
        parent: this.$parent.$parent
      });
    },
    cTransitionName: function() {
      var name;
      name = this.transitionName;
      if (name == null) {
        name = this.$parent.transitionName;
      }
      return name;
    }
  },
  data: function() {
    return {
      isCollapsibleItem: true
    };
  },
  methods: {
    show: function() {
      return this.setOpened();
    },
    hide: function() {
      return this.setClosed();
    },
    open: function() {
      this.show();
      if (this.$parent.accordion) {
        return this.$parent.closeAll(this);
      }
    },
    close: function(scroll) {
      var top;
      if (this.opened) {
        if (scroll && !this.$parent.noScroll) {
          top = this.$el.children[1].getBoundingClientRect().top;
          if (top < 0) {
            this.$parent.scrollTransition(top);
          }
        }
        return this.hide();
      }
    },
    toggle: function(e) {
      if (e != null) {
        if (e.defaultPrevented) {
          return;
        }
        e.preventDefault();
      }
      if (this.opened) {
        return this.close();
      } else {
        return this.open();
      }
    }
  }
};

})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{class:_vm.computedClass},[_c('a',{class:_vm.headerClass,on:{"click":_vm.toggle}},[_vm._t("header")],2),_c(_vm.cTransition,{tag:"transition",attrs:{"name":_vm.cTransitionName}},[(_vm.opened)?_c('div',{class:_vm.bodyClass},[_vm._t("default")],2):_vm._e()])],1)}
__vue__options__.staticRenderFns = []
