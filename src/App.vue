<template>
  <div  class="container" id="container"></div>
</template>
<script>
import jsplumb from "./jsplumb";
import $ from "jquery";
import qConst from "./qianzhiji_const";
import Const from "./const";

export default {
  name: "App",
  components: {
    //HelloWorld
  },
  mounted: () => {
    const leftEle = $(`<div class="item"><button class="remove">X</button></div>`);
    const rightEle = $(`<div class="item right_item"><button class="remove">X</button></div>`);

    const jsPlumb = new jsplumb({const: Const, container: '.container'});
    jsPlumb.on("ready", function() {

      const leftId = jsPlumb.addNode(leftEle, {
        draggble: true,
        resizable: true
      });
      const rightId = jsPlumb.addNode(rightEle, {
        draggble: true,
        resizable: true
      });
      jsPlumb.connect(leftId,rightId,{
        animate : true,
        label : {
          location: 0.5,
          cssClass: "label",
          visible: true,
        }
      });
    });

    // const leftEle = $(
    // `<div class="qianzhiji-root">
    //   <div class="qianzhiji-label">四川省人大</div>
    // </div>`)
    // const rightEle1 = $(
    // `<div class=" rightEle rightEle-root1">
    //   <div class="rightEle-label">税务局</div>
    // </div>`)
    // const rightEle2 = $(
    // `<div class=" rightEle rightEle-root2">
    //   <div class="rightEle-label">审计厅</div>
    // </div>`)
    //   const rightEle3 = $(
    // `<div class=" rightEle rightEle-root3">
    //   <div class="rightEle-label">审计厅</div>
    // </div>`)


    // const bottomEle1 = $(
    // `<div class=" rightEle bottomEle-root1">
    //   <div class="rightEle-label">税务局</div>
    // </div>`)
    // const bottomEle2 = $(
    // `<div class=" rightEle bottomEle-root2">
    //   <div class="rightEle-label">审计厅</div>
    // </div>`)
    //   const bottomEle3 = $(
    // `<div class=" rightEle bottomEle-root3">
    //   <div class="rightEle-label">审计厅</div>
    // </div>`)

    // const jsPlumb = new jsplumb({const:qConst,container: '.container'});
    // jsPlumb.on("ready", function() {

    //   const leftId = jsPlumb.addNode(leftEle, {
    //     resizable: true,
    //     addEndPoint:['left','right']
    //   });
    //   const rightId1 = jsPlumb.addNode(rightEle1, {
    //     resizable: true
    //   });
    //   const rightId2 = jsPlumb.addNode(rightEle2, {
    //     resizable: true
    //   });
    //   const rightId3 = jsPlumb.addNode(rightEle3, {
    //     resizable: true
    //   });


    //   const bottomId1 = jsPlumb.addNode(bottomEle1, {
    //     resizable: true
    //   });
    //   const bottomId2 = jsPlumb.addNode(bottomEle2, {
    //     resizable: true
    //   });
    //   const bottomId3 = jsPlumb.addNode(bottomEle3, {
    //     resizable: true
    //   });
    //   jsPlumb.connect(leftId,rightId3,{paintStyle:{    
    //     stroke: "#F56C6C",
    //     // fill: "#017EFF",
    //     zIndex:12,
    //     radius: 7,
    //     strokeWidth: 1.4,
    //     width: 1,}});
    //   jsPlumb.connect(leftId,rightId1,{});
    //   jsPlumb.connect(leftId,rightId2,{});

    //   jsPlumb.connect(leftId,bottomId1,{});
    //   jsPlumb.connect(leftId,bottomId2,{});
    //   jsPlumb.connect(leftId,bottomId3,{});

    //   // $('.container').on('click', '.remove', ()=>{
    //   //   jsPlumb.deleteNode(leftId)
    //   // })
    // });


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
  width: 150px;
  position: absolute;
  height: 150px;
  background-color: #ddd;
  border: 1px solid #017EFF;
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.94);
  opacity: 0.8;
  z-index:30;
  border-radius: 4px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.12);
}
.right_item {
  position: absolute;
  left: 500px;
}
.endpointTargetLabel {
  z-index: 21;
  cursor: pointer;
  font-size: 10px;
}
.qianzhiji-root{
  background: url("./assets/root.png");
  background-size: 150px 150px;
  width:150px;
  height:150px;
  position: relative;
}
.qianzhiji-label{
  color :#fff;
  background: #4553C7;
  padding : 4px 10px;
  position: absolute;
  top: 97px;
  left: 24px;
}
.rightEle{
   background: url("./assets/connect.png");
  background-size: 60px 75px;
  width:60px;
  height:75px;
  position: absolute;
 

}
.rightEle-label{
  color :#fff;
  background: #4553C7;
  padding : 4px 10px;
  position: absolute;
  font-size:12px;
  top: 97px;
  left: 24px;

}
.rightEle-root1{
  left: 600px;
}
.rightEle-root2{
  top: 150px;
   left: 600px;
}
.rightEle-root3{
  left: 600px;
  top: 300px;
}
.bottomEle-root1{
  top: 400px;
}
.bottomEle-root2{
  left: 150px;
  top : 400px;
}
.bottomEle-root3{
  top: 400px;
  left : 300px;
}


</style>
