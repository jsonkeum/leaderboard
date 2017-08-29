(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Leaderboard = require("./Leaderboard.js");

var _Leaderboard2 = _interopRequireDefault(_Leaderboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Body = function (_React$Component) {
  _inherits(Body, _React$Component);

  function Body(props) {
    _classCallCheck(this, Body);

    var _this = _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).call(this, props));

    _this.state = {
      dataSet: [],
      dataReq: "recent"
    };
    _this.apiCall = _this.apiCall.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(Body, [{
    key: "apiCall",
    value: function apiCall() {
      var _this2 = this;

      $.getJSON("https://fcctop100.herokuapp.com/api/fccusers/top/" + this.state.dataReq).then(function (data) {
        return _this2.setState({ dataSet: data });
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      var choice = e.target.className;
      if (this.state.dataReq != choice) {
        this.state.dataReq = choice;
        this.apiCall();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.apiCall();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          { id: "title", className: "text-center" },
          "FREE CODE CAMP LEADERBOARD"
        ),
        React.createElement(_Leaderboard2.default, { dataSet: this.state.dataSet, dataReq: this.state.dataReq, onClick: this.handleClick })
      );
    }
  }]);

  return Body;
}(React.Component);

exports.default = Body;

},{"./Leaderboard.js":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Footer = function Footer() {
  return React.createElement(
    "div",
    { id: "footer" },
    React.createElement(
      "span",
      null,
      "Written by quanchifootball"
    )
  );
};

exports.default = Footer;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TableHeaders = require("./TableHeaders.js");

var _TableHeaders2 = _interopRequireDefault(_TableHeaders);

var _TableData = require("./TableData.js");

var _TableData2 = _interopRequireDefault(_TableData);

var _Footer = require("./Footer.js");

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Leaderboard = function Leaderboard(props) {
  return React.createElement(
    "div",
    { id: "board" },
    React.createElement(
      "table",
      null,
      React.createElement(
        "thead",
        null,
        React.createElement(_TableHeaders2.default, { dataReq: props.dataReq, onClick: props.onClick })
      ),
      React.createElement(_TableData2.default, { dataReq: props.dataReq, dataSet: props.dataSet })
    ),
    React.createElement(_Footer2.default, null)
  );
};

exports.default = Leaderboard;

},{"./Footer.js":2,"./TableData.js":4,"./TableHeaders.js":5}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var TableData = function TableData(props) {
  var dataSet = props.dataSet;
  var dataReq = props.dataReq;
  var newRows = dataSet.map(function (data) {
    return React.createElement(
      "tr",
      { className: "usercard" },
      React.createElement(
        "td",
        { className: "rank" },
        dataSet.indexOf(data) + 1
      ),
      React.createElement(
        "td",
        { className: "username" },
        React.createElement("img", { className: "img", src: data.img }),
        React.createElement(
          "a",
          { href: "https://www.freecodecamp.com/" + data.username, target: "_blank" },
          data.username
        )
      ),
      React.createElement(
        "td",
        { className: "recent" },
        data.recent
      ),
      React.createElement(
        "td",
        { className: "alltime" },
        data.alltime
      )
    );
  });
  return React.createElement(
    "tbody",
    null,
    newRows
  );
};

exports.default = TableData;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var checked = React.createElement("i", { className: "fa fa-check-square-o", "aria-hidden": "true" });
var unchecked = React.createElement("i", { className: "fa fa-square-o", "aria-hidden": "true" });

var TableHeaders = function TableHeaders(props) {
  var recent = props.dataReq == "recent" ? checked : unchecked;
  var alltime = props.dataReq == "alltime" ? checked : unchecked;
  return React.createElement(
    "tr",
    null,
    React.createElement(
      "th",
      { className: "rank" },
      "#"
    ),
    React.createElement(
      "th",
      { className: "username" },
      "USERNAME"
    ),
    React.createElement(
      "th",
      { className: "recent", style: { cursor: "pointer" }, onClick: props.onClick },
      "LAST 30 DAYS ",
      recent
    ),
    React.createElement(
      "th",
      { className: "alltime", style: { cursor: "pointer" }, onClick: props.onClick },
      "ALL TIME ",
      alltime
    )
  );
};

exports.default = TableHeaders;

},{}],6:[function(require,module,exports){
'use strict';

var _Body = require('./components/Body.js');

var _Body2 = _interopRequireDefault(_Body);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

ReactDOM.render(React.createElement(_Body2.default, null), document.getElementById('app'));

},{"./components/Body.js":1}]},{},[6]);
