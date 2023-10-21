import DefaultTheme from "vitepress/theme";
// 导入返回顶部插件
import vitepressBackToTop from 'vitepress-plugin-back-to-top'
import 'vitepress-plugin-back-to-top/dist/style.css'
import "./custom.css";
export default {
  ...DefaultTheme,
  // 返回顶部插件设置
  enhanceApp({ app }) {
    vitepressBackToTop({
      // default
      threshold:300
    })
  },
};
