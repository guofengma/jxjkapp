'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _qrcode = require('./../utils/qrcode.js');

var _qrcode2 = _interopRequireDefault(_qrcode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的二维码'
    }, _this.components = {}, _this.mixins = [], _this.data = {
      qrcodeVisible: false
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      this.drawQrcode('1222');
    }
  }, {
    key: 'drawQrcode',
    value: function drawQrcode(content) {
      var query = wx.createSelectorQuery();
      query.select('#qrcode').fields({
        size: true
      }, function (res) {
        _qrcode2.default.api.draw(content, 'mycanvas', res.width, res.height);
      }).exec();
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/my_qrcode'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15X3FyY29kZS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwibWl4aW5zIiwiZGF0YSIsInFyY29kZVZpc2libGUiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJldmVudHMiLCJkcmF3UXJjb2RlIiwiY29udGVudCIsInF1ZXJ5Iiwid3giLCJjcmVhdGVTZWxlY3RvclF1ZXJ5Iiwic2VsZWN0IiwiZmllbGRzIiwic2l6ZSIsInJlcyIsImFwaSIsImRyYXciLCJ3aWR0aCIsImhlaWdodCIsImV4ZWMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUVBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBR2JDLE0sR0FBUyxFLFFBRVRDLEksR0FBTztBQUNMQyxxQkFBZTtBQURWLEssUUFJUEMsUSxHQUFXLEUsUUFHWEMsTyxHQUFVLEUsUUFFVkMsTSxHQUFTLEU7Ozs7OzZCQUdBO0FBQ1AsV0FBS0MsVUFBTCxDQUFnQixNQUFoQjtBQUNEOzs7K0JBRVdDLE8sRUFBUztBQUNuQixVQUFNQyxRQUFRQyxHQUFHQyxtQkFBSCxFQUFkO0FBQ0FGLFlBQU1HLE1BQU4sQ0FBYSxTQUFiLEVBQXdCQyxNQUF4QixDQUErQjtBQUM3QkMsY0FBTTtBQUR1QixPQUEvQixFQUVHLFVBQUNDLEdBQUQsRUFBUztBQUNWLHlCQUFHQyxHQUFILENBQU9DLElBQVAsQ0FBWVQsT0FBWixFQUFxQixVQUFyQixFQUFpQ08sSUFBSUcsS0FBckMsRUFBNENILElBQUlJLE1BQWhEO0FBQ0QsT0FKRCxFQUlHQyxJQUpIO0FBS0Q7Ozs7RUFoQ2dDLGVBQUtDLEk7O2tCQUFuQnhCLEsiLCJmaWxlIjoibXlfcXJjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgaW1wb3J0IFFSIGZyb20gJ0AvdXRpbHMvcXJjb2RlLmpzJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qE5LqM57u056CBJ1xuICAgIH1cbiAgICBjb21wb25lbnRzID0ge1xuICAgIH1cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgICAgcXJjb2RlVmlzaWJsZTogZmFsc2VcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge31cblxuICAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICB0aGlzLmRyYXdRcmNvZGUoJzEyMjInKVxuICAgIH1cblxuICAgIGRyYXdRcmNvZGUgKGNvbnRlbnQpIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gd3guY3JlYXRlU2VsZWN0b3JRdWVyeSgpXG4gICAgICBxdWVyeS5zZWxlY3QoJyNxcmNvZGUnKS5maWVsZHMoe1xuICAgICAgICBzaXplOiB0cnVlXG4gICAgICB9LCAocmVzKSA9PiB7XG4gICAgICAgIFFSLmFwaS5kcmF3KGNvbnRlbnQsICdteWNhbnZhcycsIHJlcy53aWR0aCwgcmVzLmhlaWdodClcbiAgICAgIH0pLmV4ZWMoKVxuICAgIH1cbiAgfVxuIl19