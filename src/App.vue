<template>
  <div id="app" class="container"></div>
</template>
<script>
import jsplumb from "./jsplumb";
import $ from "jquery";

export default {
  name: "App",
  components: {
    //HelloWorld
  },
  mounted: () => {
    const leftEle = $(`<div class="item"><button class="remove">X</button></div>`);
    const rightEle = $(`<div class="item right_item"></div>`);

    const jsPlumb = new jsplumb({});
    jsPlumb.on("ready", function() {

      const leftId = jsPlumb.addNode(leftEle, {
        draggble: true,
        resizable: true
      });
      const rightId = jsPlumb.addNode(rightEle, {
        draggble: true,
        resizable: true
      });
      jsPlumb.connect(leftId,rightId,{});

      $('.container').on('click', '.remove', ()=>{
        jsPlumb.deleteNode(leftId)
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
  background-color: rgba(255, 255, 255, 0.14);
  opacity: 0.8;
  border-radius: 4px;
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
</style>
