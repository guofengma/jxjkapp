'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _orderInfo = require('./../components/orderInfo.js');

var _orderInfo2 = _interopRequireDefault(_orderInfo);

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
      navigationBarTitleText: '修改信息'
    }, _this.$repeat = {}, _this.$props = { "OrderInfo": { "xmlns:v-bind": "", "v-bind:lists.sync": "lists", "v-bind:pickeds.sync": "pickeds" } }, _this.$events = {}, _this.components = {
      OrderInfo: _orderInfo2.default
    }, _this.mixins = [], _this.data = {
      lists: {
        hospitalList: [],
        projectList: [],
        orderDateList: [],
        orderTimeList: []
      },
      pickeds: {
        hospital: '',
        projectName: '',
        orderDate: '',
        orderTime: ''
      }
    }, _this.computed = {}, _this.watch = {
      pickeds: function pickeds(newVal) {
        console.log('newVal', newVal);
      }
    }, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var _this2 = this;

      setTimeout(function () {
        _this2.lists = {
          hospitalList: [{
            value: 0,
            label: '医院一'
          }, {
            value: 1,
            label: '医院二'
          }],
          projectList: [{
            value: 0,
            label: '项目一'
          }, {
            value: 1,
            label: '项目二'
          }],
          orderDateList: [{
            value: 0,
            label: '2017-12-1'
          }, {
            value: 1,
            label: '2017-12-2'
          }, {
            value: 2,
            label: '2017-12-3'
          }],
          orderTimeList: [{
            value: 0,
            label: '1:00~2:00'
          }, {
            value: 1,
            label: '2:00~3:00'
          }]
        };
        _this2.pickeds = {
          hospital: '医院二',
          projectName: '项目二',
          orderDate: '2017-12-1',
          orderTime: '1:00~2:00'
        };
        _this2.$apply();
      }, 1000);
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/my_vip_update'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15X3ZpcF91cGRhdGUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiT3JkZXJJbmZvIiwibWl4aW5zIiwiZGF0YSIsImxpc3RzIiwiaG9zcGl0YWxMaXN0IiwicHJvamVjdExpc3QiLCJvcmRlckRhdGVMaXN0Iiwib3JkZXJUaW1lTGlzdCIsInBpY2tlZHMiLCJob3NwaXRhbCIsInByb2plY3ROYW1lIiwib3JkZXJEYXRlIiwib3JkZXJUaW1lIiwiY29tcHV0ZWQiLCJ3YXRjaCIsIm5ld1ZhbCIsImNvbnNvbGUiLCJsb2ciLCJtZXRob2RzIiwiZXZlbnRzIiwic2V0VGltZW91dCIsInZhbHVlIiwibGFiZWwiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUVBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1ZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLGFBQVksRUFBQyxnQkFBZSxFQUFoQixFQUFtQixxQkFBb0IsT0FBdkMsRUFBK0MsdUJBQXNCLFNBQXJFLEVBQWIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkM7QUFEUSxLLFFBSVZDLE0sR0FBUyxFLFFBRVRDLEksR0FBTztBQUNMQyxhQUFPO0FBQ0xDLHNCQUFjLEVBRFQ7QUFFTEMscUJBQWEsRUFGUjtBQUdMQyx1QkFBZSxFQUhWO0FBSUxDLHVCQUFlO0FBSlYsT0FERjtBQU9MQyxlQUFTO0FBQ1BDLGtCQUFVLEVBREg7QUFFUEMscUJBQWEsRUFGTjtBQUdQQyxtQkFBVyxFQUhKO0FBSVBDLG1CQUFXO0FBSko7QUFQSixLLFFBZVBDLFEsR0FBVyxFLFFBR1hDLEssR0FBUTtBQUNOTixhQURNLG1CQUNHTyxNQURILEVBQ1c7QUFDZkMsZ0JBQVFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCRixNQUF0QjtBQUNEO0FBSEssSyxRQU1SRyxPLEdBQVUsRSxRQUdWQyxNLEdBQVMsRTs7Ozs7NkJBR0E7QUFBQTs7QUFDUEMsaUJBQVcsWUFBTTtBQUNmLGVBQUtqQixLQUFMLEdBQWE7QUFDWEMsd0JBQWMsQ0FBQztBQUNiaUIsbUJBQU8sQ0FETTtBQUViQyxtQkFBTztBQUZNLFdBQUQsRUFHWDtBQUNERCxtQkFBTyxDQUROO0FBRURDLG1CQUFPO0FBRk4sV0FIVyxDQURIO0FBUVhqQix1QkFBYSxDQUFDO0FBQ1pnQixtQkFBTyxDQURLO0FBRVpDLG1CQUFPO0FBRkssV0FBRCxFQUdWO0FBQ0RELG1CQUFPLENBRE47QUFFREMsbUJBQU87QUFGTixXQUhVLENBUkY7QUFlWGhCLHlCQUFlLENBQUM7QUFDZGUsbUJBQU8sQ0FETztBQUVkQyxtQkFBTztBQUZPLFdBQUQsRUFHWjtBQUNERCxtQkFBTyxDQUROO0FBRURDLG1CQUFPO0FBRk4sV0FIWSxFQU1aO0FBQ0RELG1CQUFPLENBRE47QUFFREMsbUJBQU87QUFGTixXQU5ZLENBZko7QUF5QlhmLHlCQUFlLENBQUM7QUFDZGMsbUJBQU8sQ0FETztBQUVkQyxtQkFBTztBQUZPLFdBQUQsRUFHWjtBQUNERCxtQkFBTyxDQUROO0FBRURDLG1CQUFPO0FBRk4sV0FIWTtBQXpCSixTQUFiO0FBaUNBLGVBQUtkLE9BQUwsR0FBZTtBQUNiQyxvQkFBVSxLQURHO0FBRWJDLHVCQUFhLEtBRkE7QUFHYkMscUJBQVcsV0FIRTtBQUliQyxxQkFBVztBQUpFLFNBQWY7QUFNQSxlQUFLVyxNQUFMO0FBQ0QsT0F6Q0QsRUF5Q0csSUF6Q0g7QUEwQ0Q7Ozs7RUF0RmdDLGVBQUtDLEk7O2tCQUFuQi9CLEsiLCJmaWxlIjoibXlfdmlwX3VwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGltcG9ydCBPcmRlckluZm8gZnJvbSAnQC9jb21wb25lbnRzL29yZGVySW5mbydcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S/ruaUueS/oeaBrydcbiAgICB9XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIk9yZGVySW5mb1wiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bGlzdHMuc3luY1wiOlwibGlzdHNcIixcInYtYmluZDpwaWNrZWRzLnN5bmNcIjpcInBpY2tlZHNcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgT3JkZXJJbmZvXG4gICAgfVxuXG4gICAgbWl4aW5zID0gW11cblxuICAgIGRhdGEgPSB7XG4gICAgICBsaXN0czoge1xuICAgICAgICBob3NwaXRhbExpc3Q6IFtdLFxuICAgICAgICBwcm9qZWN0TGlzdDogW10sXG4gICAgICAgIG9yZGVyRGF0ZUxpc3Q6IFtdLFxuICAgICAgICBvcmRlclRpbWVMaXN0OiBbXVxuICAgICAgfSxcbiAgICAgIHBpY2tlZHM6IHtcbiAgICAgICAgaG9zcGl0YWw6ICcnLFxuICAgICAgICBwcm9qZWN0TmFtZTogJycsXG4gICAgICAgIG9yZGVyRGF0ZTogJycsXG4gICAgICAgIG9yZGVyVGltZTogJydcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICB9XG5cbiAgICB3YXRjaCA9IHtcbiAgICAgIHBpY2tlZHMgKG5ld1ZhbCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbmV3VmFsJywgbmV3VmFsKVxuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmxpc3RzID0ge1xuICAgICAgICAgIGhvc3BpdGFsTGlzdDogW3tcbiAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgbGFiZWw6ICfljLvpmaLkuIAnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgdmFsdWU6IDEsXG4gICAgICAgICAgICBsYWJlbDogJ+WMu+mZouS6jCdcbiAgICAgICAgICB9XSxcbiAgICAgICAgICBwcm9qZWN0TGlzdDogW3tcbiAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgbGFiZWw6ICfpobnnm67kuIAnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgdmFsdWU6IDEsXG4gICAgICAgICAgICBsYWJlbDogJ+mhueebruS6jCdcbiAgICAgICAgICB9XSxcbiAgICAgICAgICBvcmRlckRhdGVMaXN0OiBbe1xuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICBsYWJlbDogJzIwMTctMTItMSdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICB2YWx1ZTogMSxcbiAgICAgICAgICAgIGxhYmVsOiAnMjAxNy0xMi0yJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIHZhbHVlOiAyLFxuICAgICAgICAgICAgbGFiZWw6ICcyMDE3LTEyLTMnXG4gICAgICAgICAgfV0sXG4gICAgICAgICAgb3JkZXJUaW1lTGlzdDogW3tcbiAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgbGFiZWw6ICcxOjAwfjI6MDAnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgdmFsdWU6IDEsXG4gICAgICAgICAgICBsYWJlbDogJzI6MDB+MzowMCdcbiAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucGlja2VkcyA9IHtcbiAgICAgICAgICBob3NwaXRhbDogJ+WMu+mZouS6jCcsXG4gICAgICAgICAgcHJvamVjdE5hbWU6ICfpobnnm67kuownLFxuICAgICAgICAgIG9yZGVyRGF0ZTogJzIwMTctMTItMScsXG4gICAgICAgICAgb3JkZXJUaW1lOiAnMTowMH4yOjAwJ1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0sIDEwMDApXG4gICAgfVxuICB9XG4iXX0=