export default {
  install(Vue: any) {
    const app = new Vue({
      data() {
        return {
          isRTL: false,
        };
      },
      methods: {
        getDocClasses() {
          return document.body.classList;
        },
        enableRTL() {
          (this as any).isRTL = true;
          (this as any).getDocClasses().add("rtl");
          (this as any).getDocClasses().add("menu-on-right");
          (this as any).toggleBootstrapRTL(true);
        },
        disableRTL() {
          (this as any).isRTL = false;
          (this as any).getDocClasses().remove("rtl");
          (this as any).getDocClasses().remove("menu-on-right");
          (this as any).toggleBootstrapRTL(false);
        },
        toggleBootstrapRTL(value: boolean) {
          for (let i = 0; i < document.styleSheets.length; i++) {
            const styleSheet = document.styleSheets[i];
            const { href } = styleSheet;
            if (href && href.endsWith("bootstrap-rtl.css")) {
              styleSheet.disabled = !value;
            }
          }
        },
      },
    });

    Vue.prototype.$rtl = app;
  },
};
