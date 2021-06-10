# gd-UI-library
UI基础库-elementUI基础封装常用功能基础组件

本地开发运行：
```javascript
npm run server
```
构建部署包：
```javascript
npm run build
```
特别注意：
```javascript
.ignore文件
当构建发布UI工具库时，需在.ignore增加
src/
 plugins/
 public/
 vue.config.js
 babel.config.js
 *.map
 *.html
 配置，即保证构建npm发布包不会放在构建包里
```
