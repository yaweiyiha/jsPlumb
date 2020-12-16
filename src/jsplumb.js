import { jsPlumb } from "jsplumb";
import EventEmitter from "eventemitter3";
import $ from "jquery";
import Const from "./const";
const __ID_STR__ = "id";
import "./index.css";

export default class jsplumb extends EventEmitter {
  constructor(opt) {
    super();
    this.opt = opt;
    this.instance = undefined;
    this._init();
  }

  _init() {
    jsPlumb.bind("ready", () => {
      this.instance = jsPlumb.getInstance({
        // default drag options
        DragOptions: { cursor: "pointer", zIndex: 2000 },
        Container: "container",
      });
      this.emit("ready");
    });
  }
  addNode(node, opt) {
    //return a unique id
    if (!node) {
      throw new Error("node str can not be empty");
    }
    const container = $(".container");
    const el = node;
    const id = `jsplumb_${this._genID(8)}`;
    $(el).attr(__ID_STR__, id);
    container.append(el);

    //add jsPlumb attribute

    this._addPoints(id);
    //add draggble
    if (opt.draggble) {
      this.instance.draggable($(el));
    }
    //add draggble
    if (opt.resizable) {
      // $(`#${id}`).resizable({
      //   resize: function(event, ui) {
      //     this.instance.repaint(ui.helper);
      //   },
      // });
    }

    return id;
  }
  deleteNode(id) {
    this.instance.remove(id);
  }
  connect(source, target, opt) {
    let common = {
      endpoint: "Dot",
      anchor: ["Left", "Right", "Top", "Bottom"],
    };
    this.instance.connect(
      {
        source,
        target,
        dropOptions: { hoverClass: "hover", activeClass: "active" },
        connector: ["Flowchart"],
        paintStyle: Const.paintStyle, // 线样式
        connectorHoverStyle: Const.connectorHoverStyle,
        endpointStyle: Const.endpointStyle, // 点样式
        hoverPaintStyle: Const.endpointHoverStyle,
        overlays: [
          [
            "Label",
            {
              location: 0.5,
              cssClass: "label",
              visible: true,
            },
          ],
        ],
      },
      common
    );
  }
  getData() {}
  _addPoints(id) {
    let common = {
      isSource: true,
      isTarget: true,
      maxConnections: 50,
      connector: ["Flowchart"],
      cssClass: "endPoint",
      paintStyle: Const.endpointStyle,
      hoverPaintStyle: Const.endpointHoverStyle,
      connectorStyle: Const.connectorPaintStyle,
      connectorHoverStyle: Const.connectorHoverStyle,
    };
    this.instance.addEndpoint(id, common, {
      anchors: ["Left"],
      uuid: `left_${id}`,
    });
    this.instance.addEndpoint(id, common, {
      anchors: ["Right"],
      uuid: `right_${id}`,
    });
  }

  _genID(length) {
    return Number(
      Math.random()
        .toString()
        .substr(3, length) + Date.now()
    ).toString(36);
  }
}
