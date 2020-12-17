import { jsPlumb } from "jsplumb";
import EventEmitter from "eventemitter3";
import $ from "jquery";
//import Const from "./const";
const __ID_STR__ = "id";
import "./index_bi.css";
import "./index_qianzhiji.css";

export default class jsplumb extends EventEmitter {
  constructor(opt) {
    super();
    this.opt = opt;
    this.instance = undefined;
    this.const = opt.const;
    this._init();
  }

  _init() {
    const that = this;
    //初始化
    jsPlumb.bind("ready", () => {
      that.instance = jsPlumb.getInstance({
        // default drag options
        DragOptions: { cursor: "pointer", zIndex: 2000 },
        Container: "container",
        ConnectionsDetachable: true,
        ReattachConnections: true,
      });
      that.emit("ready");
    });
    //删除
    $(this.opt.container).on("click", ".remove", function() {
      const id = $(this)
        .parents(".jsplumb_card")
        .attr("id");
      if (id) {
        that.deleteNode(id);
      }
    });
  }
  addNode(node, opt) {
    //return a unique id
    if (!node) {
      throw new Error("node str can not be empty");
    }
    const container = $(this.opt.container); //传进来
    const el = node;
    const id = `jsplumb_${this._genID(8)}`;
    $(el).attr(__ID_STR__, id);
    $(el).addClass("jsplumb_card");
    container.append(el);

    //add jsPlumb attribute

    this._addPoints(id);
    //add draggble
    if (opt.draggble) {
      this.instance.draggable($(el));
    }
    //add draggble  TODO
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

    const labelOpt = opt.label ? opt.label : {};
    this.instance.connect(
      {
        source,
        target,
        dropOptions: { hoverClass: "hover", activeClass: "active" },
        connector: [
          "Flowchart",
          {
            stub: [40, 60],
            gap: 10,
            cornerRadius: 8,
            alwaysRespectStubs: true,
          },
        ],
        paintStyle: opt.paintStyle || this.const.paintStyle, // 线样式
        connectorHoverStyle: this.const.connectorHoverStyle,
        endpointStyle: this.const.endpointStyle, // 点样式
        hoverPaintStyle: this.const.endpointHoverStyle,
        overlays: [["Label", labelOpt]], //该项不能设置
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
      connector: [
        "Flowchart",
        { stub: [40, 60], gap: 10, cornerRadius: 8, alwaysRespectStubs: true },
      ],
      cssClass: "endPoint",
      paintStyle: this.const.endpointStyle,
      hoverPaintStyle: this.const.endpointHoverStyle,
      connectorStyle: this.const.connectorPaintStyle,
      connectorHoverStyle: this.const.connectorHoverStyle,
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
