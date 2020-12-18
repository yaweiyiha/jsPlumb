<template>
<div class="app">
  <p class="title">可视化库API文档及验收</p>
  <div class="desc-wrapper">
    <h1>工作内容</h1>
    <p>jsPlumb二次封装，包含：API封装，渲染性能优化，自定义动画添加</p>
    <p>API文档产出</p>
  </div>
  
  <BI/>
  <Qianzhiji/>
  <div class="desc-wrapper" style="margin-top:80px;padding-bottom:100px;">
    <h1>初始化</h1>
    <div class="code">const jsPlumb = new jsplumb({container: 'container'});</div>
    <h1>API</h1>
    <h2>addNode</h2>
    在画布上添加节点
    <table width="50%">
        <tr>
          <th>名称</th>
          <th>类型</th>
          <th>说明</th>
        </tr>
        <tr>
          <td>element</td> 
          <td>html dom</td>
          <td>添加画布的元素</td>
        </tr>
        <tr>
          <td>opt</td> 
          <td>Object</td>
          <td>
            <tr>draggble:是否可拖拽，默认为false</tr>
            <tr>resizeble:是否可改变大小,默认为false</tr>
            <tr>addPoints:添加端点，设置位置['left','right','top','bottom']</tr>
          </td>
        </tr>
    </table>
    <h2>deleteNode</h2>
    在画布上删除节点
    <table width="50%">
        <tr>
          <th>名称</th>
          <th>类型</th>
          <th>说明</th>
        </tr>
        <tr>
          <td>element</td> 
          <td>html dom</td>
          <td>删除画布的元素</td>
        </tr>
    </table>
    <h2>setStyle</h2>
    设置画布上元素通用样式，
    <table width="50%">
        <tr>
          <th>名称</th>
          <th>类型</th>
          <th>说明</th>
        </tr>
        <tr>
          <td>styles</td> 
          <td>Object</td>
          <td>包含节点样式，连线样式，覆盖物(label,箭头)样式，不设置采用通用样式主题</td>
        </tr>
    </table>
    <h2>connect</h2>
    连线
    <table width="50%">
        <tr>
          <th>名称</th>
          <th>类型</th>
          <th>说明</th>
        </tr>
        <tr>
          <td>source</td> 
          <td>String</td>
          <td>源节点id</td>
        </tr>
        <tr>
          <td>target</td> 
          <td>String</td>
          <td>目标节点id</td>
        </tr>
        <tr>
          <td>opt</td> 
          <td>Object</td>
          <td>
            <th>animate：是否添加动画</th>
            <th>label: 添加label.及label的具体样式</th>
            <th></th>
          </td>
        </tr>
    </table>
  </div>
</div>

</template>
<script>
import jsplumb from "./jsplumb";
import $ from "jquery";
import qConst from "./const/qianzhiji_const";
import Const from "./const/const";
import "./css/index_bi.css";
import "./css/index_qianzhiji.css";
import BI from "./html/bi"
import Qianzhiji from "./html/qianzhiji"

export default {
  name: "App",
  components: {
    BI,
    Qianzhiji
  },
  mounted: () => {
  },
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  bottom: 0;
}
.app {
  color: #2c3e50;
  width: 100%;
  height: 100vh;
}
.title{
  font-size:35px;
  width:100%;
  text-align: center;
  margin : 0;
}
.desc-wrapper{
  padding:0px 50px;
}
table {
  border-collapse: collapse;
  width: 80%;
  border: 1px solid #cfd0c9;
  margin-top:20px;
}
table th,
table td {
  padding: 10px;
  text-align: center;
}

tr,th {
  border-bottom: 1px solid #cfd0c9;
}
table td {
   border-right: 1px solid #cfd0c9;
}
td tr {
  width :100%;
}
.code{
  background-color: #f4f5f1;
  color:rgb(14, 17, 17);
  width:80%;
  padding:10px;
}

</style>
