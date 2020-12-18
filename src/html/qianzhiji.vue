<template>
  <div  class="container_qianzhiji demo1" id="container_qianzhiji">
    <div class="desc">操作说明：可切换动画效果</div>
    <select id="qianzhiji-animation-select" value="1" >
      <option value="1">动画1</option>
      <option value="2">动画2</option>
      </select>
  </div>
</template>
<script>
import jsplumb from "../jsplumb";
import $ from "jquery";
import qConst from "../const/qianzhiji_const";
import Const from "../const/const";
import "../css/index_qianzhiji.css";

export default {
  name: "App",
  components: {
    //HelloWorld
  },
  mounted: () => {
    // var script = document.createElement("script");
    //   script.onload = function () {
    //     const stats = new Stats();
    //     document.body.appendChild(stats.dom);
    //     requestAnimationFrame(function loop() {
    //       stats.update();
    //       requestAnimationFrame(loop);
    //     });
    //   };
    //   script.src = "../stat.min.js";
    //   document.head.appendChild(script);
    $('body').on('change', '#qianzhiji-animation-select', function(e) {
      const type = e.target.value;
      if (type === "1") {

        $('#container_qianzhiji').removeClass('demo2').addClass('demo1')
      } else {
        $('#container_qianzhiji').removeClass('demo1').addClass('demo2')
      }
    });
    const leftEle = $(
    `<div class="qianzhiji-root">
      <div class="qianzhiji-label">四川省人大</div>
    </div>`)
    const rightNodesData = ['税务局','审计厅','财政厅'];
    const bottomNodeDatas = ['成都市人大','内江市人大','泸州市人大']
    const rightEles  = rightNodesData.map((item,idx)=>{
      return $(
        `<div class=" rightEle rightEle-root${idx+1}">
          <div class="right-icon"></div>
          <div class="rightEle-label">${item}</div>
        </div>`)
    })
    const bottomEles = bottomNodeDatas.map((item,idx)=>{
      return  $(
        `<div class=" bottomEle bottomEle-root${idx+1}">
          <div class="bottom-icon"></div>
          <div class="bottomEle-label">${item}</div>
        </div>`)
    })

    const jsPlumb = new jsplumb({container: 'container_qianzhiji'});
    jsPlumb.on("ready", function() {
      jsPlumb.setStyle(qConst);

      const leftId = jsPlumb.addNode(leftEle, {
        addEndPoint:['left','right']
      });
      const rightIds = rightEles.map((item,idx) => {
        return jsPlumb.addNode(item)
      })
      const bottomIds = bottomEles.map((item,idx) => {
        return jsPlumb.addNode(item)
      })

      jsPlumb.connect(leftId,rightIds[2],
      {
        paintStyle:{    
          stroke: "#F56C6C",
          zIndex:12,
          radius: 7,
          strokeWidth: 1.4,
          width: 1
        },
        anchor:['Bottom'],
        animate: false,
        id: ''
      });
      $
      jsPlumb.connect(leftId,rightIds[1],{anchor:['Bottom'],animate: true,});
      jsPlumb.connect(leftId,rightIds[0],{anchor:['Bottom'],animate: true});

      bottomIds.map((item,idx) => {
        jsPlumb.connect(leftId,item,{
          anchor:['Bottom','Top'],
          animate: true
        });
      })
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
.container_qianzhiji{
  position: relative;
  top:50px;
  width :70%;
  height: 450px;
  margin: 0 auto;
  border : 1px solid #ddd;
  padding:20px;
}
#qianzhiji-animation-select{
  position:absolute;
  right: 30px;
  padding: 4px 10px;
  border:1px solid #ddd;
}
.qianzhiji-root{
  background: url("../assets/root.png");
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
  left: 12px;
}
.rightEle{
  position: absolute;
  width :84px;
}
.right-icon{
  background: url("../assets/connect.png");
  background-size: 60px 75px;
  width:60px;
  height:75px;
}
.bottomEle{
  position: absolute;
  width :120px;
}
.bottom-icon{
  background: url("../assets/unconnect.png");
  background-size: 60px 75px;
  width:60px;
  height:75px;
}
.rightEle-label{
    color: #fff;
    background: #4553C7;
    padding: 1px 10px;
    position: absolute;
    font-size: 12px;
    top: 55px;
    left: 8px;    
}
.bottomEle-label{
    color: #fff;
    background: #4553C7;
    padding: 1px 10px;
    position: absolute;
    font-size: 12px;
    top: 55px;
    left: 8px;    
}
.rightEle-root1{
  left: 400px;
  top:20px;
}
.rightEle-root2{
  top: 20px;
   left: 500px;
}
.rightEle-root3{
  left: 600px;
  top: 20px;
}
.bottomEle-root1{
  left :50px;
  top: 350px;
}
.bottomEle-root2{
  left: 150px;
  top : 350px;
}
.bottomEle-root3{
  left : 250px;
  top: 350px;
}


</style>
