;(function(){
module.exports = {
  mixins: [require("vue-mixins/class")],
  props: {
    accordion: {
      type: Boolean,
      "default": false
    },
    "class": {
      "default": function() {
        return ["collapsible"];
      }
    },
    itemClass: {
      type: String,
      "default": "collapsible-item"
    },
    headerClass: {
      type: String,
      "default": "collapsible-header"
    },
    bodyClass: {
      type: String,
      "default": "collapsible-body"
    },
    noScroll: {
      type: Boolean,
      "default": false
    },
    scrollTransition: {
      type: Function,
      "default": function(top) {
        return typeof window !== "undefined" && window !== null ? typeof window.scrollBy === "function" ? window.scrollBy(0, top) : void 0 : void 0;
      }
    },
    transition: {
      type: String,
      "default": "collapsible-transition"
    },
    transitionName: {
      type: String,
      "default": "collapsible"
    }
  },
  methods: {
    closeAll: function(sender) {
      var beforeSender, child, i, index, len, ref, results;
      beforeSender = false;
      ref = this.$children;
      results = [];
      for (index = i = 0, len = ref.length; i < len; index = ++i) {
        child = ref[index];
        if (sender === child) {
          beforeSender = true;
          continue;
        }
        if (child.isCollapsibleItem && !child.stayOpen) {
          results.push(child.close(!beforeSender));
        } else {
          results.push(void 0);
        }
      }
      return results;
    }
  }
};

})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{class:_vm.computedClass},[_vm._t("default")],2)}
__vue__options__.staticRenderFns = []
