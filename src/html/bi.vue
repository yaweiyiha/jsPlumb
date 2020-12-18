<template>
  <div class="wrapper">

    <div  class="container" id="container">
      <div class="desc">操作说明：卡片可拖拽(不可拖出该画布)，删除；连线可双击删除</div>
    </div>
  </div>
</template>
<script>
import jsplumb from "../jsplumb";
import $ from "jquery";
import qConst from "../const/qianzhiji_const";
import Const from "../const/const";
import "../css/index_bi.css";

export default {
  name: "BI",
  components: {
    //HelloWorld
  },
  mounted: () => {


    const leftEle = $(
      `<div class="item">
        <div class="title-wrapper">
          <div class="left-wrapper">
            <div>一般公共预算支出表</div>
            <div class="table-name">csdfSHD-SDHFS-SHDH=ASJFLKh</div>
          </div>
          <div class="right-wrapper">
            <span class="remove">X</span>
          </div>
        </div>
      </div>`
      );
    const rightEle = $(
      `<div class="item right_item">
        <div class="title-wrapper">
          <div class="left-wrapper">
            <div>一般公共预算支出表</div>
            <div class="table-name">csdfSHD-SDHFS-SHDH=ASJFLKh</div>
          </div>
          <div class="right-wrapper">
            <span class="remove">X</span>
          </div>
        </div>
      </div>`
      );
      const bottomEle = $(
      `<div class="item bottom_item">
        <div class="title-wrapper">
          <div class="left-wrapper">
            <div>一般公共预算支出表</div>
            <div class="table-name">csdfSHD-SDHFS-SHDH=ASJFLKh</div>
          </div>
          <div class="right-wrapper">
            <span class="remove">X</span>
          </div>
        </div>
      </div>`
      );

    const jsPlumb = new jsplumb({container: 'container'});
    jsPlumb.on("ready", function() {

      jsPlumb.setStyle(Const);
      const leftId = jsPlumb.addNode(leftEle, {
        draggble: true
      });
      const rightId = jsPlumb.addNode(rightEle, {
        draggble: true
      });
      const bottomId = jsPlumb.addNode(bottomEle, {
        draggble: true
      });
      jsPlumb.connect(leftId,rightId,{
        animate : true,
        label : {
          location: 0.5,
          cssClass: "label",
          visible: true,
          events:{
              tap:function() { alert("是否转化连接关系"); }
          }
        },
        anchor:["Left", "Right", "Bottom", "Top"]
      });
      jsPlumb.connect(leftId,bottomId,{
        animate : true,
        label : {
          location: 0.5,
          cssClass: "blabel",
          visible: true,
          events:{
              tap:function() { alert("是否转化连接关系"); }
          }
        },
        anchor:["Left", "Right", "Bottom", "Top"]
      });
    });

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
.wrapper{
  margin-top:50px;
}
.container{
  width :70%;
  height: 350px;
  margin: 0 auto;
  border : 1px solid #ddd;
  padding:20px;
  position: relative;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  width: 100%;
  height: 100vh;
}
.item {
  width :260px;
  background-color: #ddd;
  border: 1px solid #017EFF;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.94);
  opacity: 0.8;
  z-index:30;
  border-radius: 4px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.12);
  position: absolute;
  top:50px;
  padding:10px;
  cursor:pointer;
}
.desc{
  font-size:12px; 

}
.right_item {
  left: 500px;
}
.bottom_item{
  top : 250px;
  left : 250px;
}
.endpointTargetLabel {
  z-index: 21;
  cursor: pointer;
  font-size: 10px;
}
.title-wrapper{
  background-color: #017EFF;
  display: flex;
  color:#fff;
  font-size:10px;
  border-radius: 4px;
  padding:10px;
  width:90%;
  position: relative;
}
.left-wrapper .table-name {
  margin-top :8px;
}
.right-wrapper{
  position: absolute;;
  right : 10px;
}
.remove:hover{
  color :#2c3e50;
  cursor: pointer;
}

</style>
