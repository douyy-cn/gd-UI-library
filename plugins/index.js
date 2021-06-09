//组件
import DateTime from "./components/dateTime/date-time.vue";

//所有组件列表
const components = [DateTime];


//定义install方法，Vue作为参数
const install = Vue => {
    //判断是否安装，安装过就不用继续执行
    if (install.installed) return;
    install.installed = true;
    //遍历注册所有组件
    components.map(component => Vue.component(component.name, component));

    //遍历注册所有指令
    // directives.map(directives => Vue.use(directives));

    //遍历过滤器
    // filters.map(filters => Vue.use(filters));
};

//检测到Vue再执行
if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    //所有组件，必须具有install方法才能使用Vue.use()
    ...components
};