'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _dialog = require('./../components/dialog.js');

var _dialog2 = _interopRequireDefault(_dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MY_ITEMS = [{
  icon: '../assets/images/icon-qrcode.png',
  label: '我的二维码',
  handlerTap: function handlerTap() {
    wx.navigateTo({
      url: '/pages/my_qrcode'
    });
  }
}, {
  icon: '../assets/images/icon-relation.png',
  label: '绑定就诊人',
  handlerTap: function handlerTap() {
    wx.navigateTo({
      url: '/pages/my_relations'
    });
  }
}, {
  icon: '../assets/images/icon-consent.png',
  label: '知情通知书',
  handlerTap: function handlerTap() {
    wx.navigateTo({
      url: '/pages/my_consent'
    });
  }
}, {
  icon: '../assets/images/icon-vip.png',
  label: 'VIP预约列表',
  handlerTap: function handlerTap() {
    wx.navigateTo({
      url: '/pages/my_vip'
    });
  }
}, {
  icon: '../assets/images/icon-concat.png',
  label: '联系我们',
  handlerTap: function handlerTap() {
    wx.showModal({
      title: '客服电话',
      confirmlabel: '拨打',
      content: '8400561',
      success: function success(data) {
        if (data.confirm) {
          wx.makePhoneCall({
            phoneNumber: '44323423432'
          });
        }
        console.log('success', arguments);
      },
      fail: function fail() {
        console.log('fail', arguments);
      }
    });
  }
}, {
  icon: '../assets/images/icon-setting.png',
  label: '系统设置',
  handlerTap: function handlerTap() {
    wx.navigateTo({
      url: '/pages/my_setting'
    });
  }
}];

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
      navigationBarTitleText: '我的'
    }, _this.$repeat = {}, _this.$props = { "QrcodeDialog": { "xmlns:v-bind": "", "v-bind:visible.sync": "qrcodeVisible", "innerStyle": "padding: 40rpx;" }, "TelDialog": { "v-bind:visible.sync": "telDialogVisible", "innerStyle": "width: 560rpx;height: 220rpx;" } }, _this.$events = {}, _this.components = {
      QrcodeDialog: _dialog2.default,
      TelDialog: _dialog2.default
    }, _this.mixins = [], _this.data = {
      qrcodeVisible: false, // 二维码弹框
      telDialogVisible: false,
      myItems: MY_ITEMS
    }, _this.computed = {
      userInfo: function userInfo() {
        return this.$parent.globalData.userInfo;
      }
    }, _this.methods = {
      toLogin: function toLogin() {
        wx.navigateTo({
          url: '/pages/login'
        });
      },
      itemClick: function itemClick(index) {
        var handlerTap = MY_ITEMS[index].handlerTap;
        handlerTap.call(this);
      },
      callPhone: function callPhone() {
        wx.makePhoneCall({
          phoneNumber: '44323423432'
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log('route', this.$_getRoute());
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/my'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LmpzIl0sIm5hbWVzIjpbIk1ZX0lURU1TIiwiaWNvbiIsImxhYmVsIiwiaGFuZGxlclRhcCIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsInNob3dNb2RhbCIsInRpdGxlIiwiY29uZmlybWxhYmVsIiwiY29udGVudCIsInN1Y2Nlc3MiLCJkYXRhIiwiY29uZmlybSIsIm1ha2VQaG9uZUNhbGwiLCJwaG9uZU51bWJlciIsImNvbnNvbGUiLCJsb2ciLCJhcmd1bWVudHMiLCJmYWlsIiwiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiUXJjb2RlRGlhbG9nIiwiVGVsRGlhbG9nIiwibWl4aW5zIiwicXJjb2RlVmlzaWJsZSIsInRlbERpYWxvZ1Zpc2libGUiLCJteUl0ZW1zIiwiY29tcHV0ZWQiLCJ1c2VySW5mbyIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwibWV0aG9kcyIsInRvTG9naW4iLCJpdGVtQ2xpY2siLCJpbmRleCIsImNhbGwiLCJjYWxsUGhvbmUiLCJldmVudHMiLCIkX2dldFJvdXRlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBVyxDQUFDO0FBQ2hCQyxRQUFNLGtDQURVO0FBRWhCQyxTQUFPLE9BRlM7QUFHaEJDLFlBSGdCLHdCQUdGO0FBQ1pDLE9BQUdDLFVBQUgsQ0FBYztBQUNaQyxXQUFLO0FBRE8sS0FBZDtBQUdEO0FBUGUsQ0FBRCxFQVFkO0FBQ0RMLFFBQU0sb0NBREw7QUFFREMsU0FBTyxPQUZOO0FBR0RDLFlBSEMsd0JBR2E7QUFDWkMsT0FBR0MsVUFBSCxDQUFjO0FBQ1pDLFdBQUs7QUFETyxLQUFkO0FBR0Q7QUFQQSxDQVJjLEVBZ0JkO0FBQ0RMLFFBQU0sbUNBREw7QUFFREMsU0FBTyxPQUZOO0FBR0RDLFlBSEMsd0JBR2E7QUFDWkMsT0FBR0MsVUFBSCxDQUFjO0FBQ1pDLFdBQUs7QUFETyxLQUFkO0FBR0Q7QUFQQSxDQWhCYyxFQXdCZDtBQUNETCxRQUFNLCtCQURMO0FBRURDLFNBQU8sU0FGTjtBQUdEQyxZQUhDLHdCQUdhO0FBQ1pDLE9BQUdDLFVBQUgsQ0FBYztBQUNaQyxXQUFLO0FBRE8sS0FBZDtBQUdEO0FBUEEsQ0F4QmMsRUFnQ2Q7QUFDREwsUUFBTSxrQ0FETDtBQUVEQyxTQUFPLE1BRk47QUFHREMsWUFIQyx3QkFHYTtBQUNaQyxPQUFHRyxTQUFILENBQWE7QUFDWEMsYUFBTyxNQURJO0FBRVhDLG9CQUFjLElBRkg7QUFHWEMsZUFBUyxTQUhFO0FBSVhDLGFBSlcsbUJBSUZDLElBSkUsRUFJSTtBQUNiLFlBQUlBLEtBQUtDLE9BQVQsRUFBa0I7QUFDaEJULGFBQUdVLGFBQUgsQ0FBaUI7QUFDZkMseUJBQWE7QUFERSxXQUFqQjtBQUdEO0FBQ0RDLGdCQUFRQyxHQUFSLENBQVksU0FBWixFQUF1QkMsU0FBdkI7QUFDRCxPQVhVO0FBWVhDLFVBWlcsa0JBWUg7QUFDTkgsZ0JBQVFDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CQyxTQUFwQjtBQUNEO0FBZFUsS0FBYjtBQWdCRDtBQXBCQSxDQWhDYyxFQXFEZDtBQUNEakIsUUFBTSxtQ0FETDtBQUVEQyxTQUFPLE1BRk47QUFHREMsWUFIQyx3QkFHYTtBQUNaQyxPQUFHQyxVQUFILENBQWM7QUFDWkMsV0FBSztBQURPLEtBQWQ7QUFHRDtBQVBBLENBckRjLENBQWpCOztJQStEcUJjLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1ZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLGdCQUFlLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsdUJBQXNCLGVBQXpDLEVBQXlELGNBQWEsaUJBQXRFLEVBQWhCLEVBQXlHLGFBQVksRUFBQyx1QkFBc0Isa0JBQXZCLEVBQTBDLGNBQWEsK0JBQXZELEVBQXJILEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDLG9DQURRO0FBRVJDO0FBRlEsSyxRQUtWQyxNLEdBQVMsRSxRQUVUakIsSSxHQUFPO0FBQ0xrQixxQkFBZSxLQURWLEVBQ2lCO0FBQ3RCQyx3QkFBa0IsS0FGYjtBQUdMQyxlQUFTaEM7QUFISixLLFFBTVBpQyxRLEdBQVc7QUFDVEMsY0FEUyxzQkFDRztBQUNWLGVBQU8sS0FBS0MsT0FBTCxDQUFhQyxVQUFiLENBQXdCRixRQUEvQjtBQUNEO0FBSFEsSyxRQU1YRyxPLEdBQVU7QUFDUkMsYUFEUSxxQkFDRztBQUNUbEMsV0FBR0MsVUFBSCxDQUFjO0FBQ1pDLGVBQUs7QUFETyxTQUFkO0FBR0QsT0FMTztBQU1SaUMsZUFOUSxxQkFNR0MsS0FOSCxFQU1VO0FBQ2hCLFlBQU1yQyxhQUFhSCxTQUFTd0MsS0FBVCxFQUFnQnJDLFVBQW5DO0FBQ0FBLG1CQUFXc0MsSUFBWCxDQUFnQixJQUFoQjtBQUNELE9BVE87QUFVUkMsZUFWUSx1QkFVSztBQUNYdEMsV0FBR1UsYUFBSCxDQUFpQjtBQUNmQyx1QkFBYTtBQURFLFNBQWpCO0FBR0Q7QUFkTyxLLFFBaUJWNEIsTSxHQUFTLEU7Ozs7OzZCQUdBO0FBQ1AzQixjQUFRQyxHQUFSLENBQVksT0FBWixFQUFxQixLQUFLMkIsVUFBTCxFQUFyQjtBQUNEOzs7O0VBaERnQyxlQUFLQyxJOztrQkFBbkJ6QixLIiwiZmlsZSI6Im15LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBEaWFsb2cgZnJvbSAnQC9jb21wb25lbnRzL2RpYWxvZydcblxuICBjb25zdCBNWV9JVEVNUyA9IFt7XG4gICAgaWNvbjogJy4uL2Fzc2V0cy9pbWFnZXMvaWNvbi1xcmNvZGUucG5nJyxcbiAgICBsYWJlbDogJ+aIkeeahOS6jOe7tOeggScsXG4gICAgaGFuZGxlclRhcCAoKSB7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL215X3FyY29kZSdcbiAgICAgIH0pXG4gICAgfVxuICB9LCB7XG4gICAgaWNvbjogJy4uL2Fzc2V0cy9pbWFnZXMvaWNvbi1yZWxhdGlvbi5wbmcnLFxuICAgIGxhYmVsOiAn57uR5a6a5bCx6K+K5Lq6JyxcbiAgICBoYW5kbGVyVGFwICgpIHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvbXlfcmVsYXRpb25zJ1xuICAgICAgfSlcbiAgICB9XG4gIH0sIHtcbiAgICBpY29uOiAnLi4vYXNzZXRzL2ltYWdlcy9pY29uLWNvbnNlbnQucG5nJyxcbiAgICBsYWJlbDogJ+efpeaDhemAmuefpeS5picsXG4gICAgaGFuZGxlclRhcCAoKSB7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL215X2NvbnNlbnQnXG4gICAgICB9KVxuICAgIH1cbiAgfSwge1xuICAgIGljb246ICcuLi9hc3NldHMvaW1hZ2VzL2ljb24tdmlwLnBuZycsXG4gICAgbGFiZWw6ICdWSVDpooTnuqbliJfooagnLFxuICAgIGhhbmRsZXJUYXAgKCkge1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9teV92aXAnXG4gICAgICB9KVxuICAgIH1cbiAgfSwge1xuICAgIGljb246ICcuLi9hc3NldHMvaW1hZ2VzL2ljb24tY29uY2F0LnBuZycsXG4gICAgbGFiZWw6ICfogZTns7vmiJHku6wnLFxuICAgIGhhbmRsZXJUYXAgKCkge1xuICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgdGl0bGU6ICflrqLmnI3nlLXor50nLFxuICAgICAgICBjb25maXJtbGFiZWw6ICfmi6jmiZMnLFxuICAgICAgICBjb250ZW50OiAnODQwMDU2MScsXG4gICAgICAgIHN1Y2Nlc3MgKGRhdGEpIHtcbiAgICAgICAgICBpZiAoZGF0YS5jb25maXJtKSB7XG4gICAgICAgICAgICB3eC5tYWtlUGhvbmVDYWxsKHtcbiAgICAgICAgICAgICAgcGhvbmVOdW1iZXI6ICc0NDMyMzQyMzQzMidcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzJywgYXJndW1lbnRzKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsICgpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnZmFpbCcsIGFyZ3VtZW50cylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0sIHtcbiAgICBpY29uOiAnLi4vYXNzZXRzL2ltYWdlcy9pY29uLXNldHRpbmcucG5nJyxcbiAgICBsYWJlbDogJ+ezu+e7n+iuvue9ricsXG4gICAgaGFuZGxlclRhcCAoKSB7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL215X3NldHRpbmcnXG4gICAgICB9KVxuICAgIH1cbiAgfV1cblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahCdcbiAgICB9XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIlFyY29kZURpYWxvZ1wiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dmlzaWJsZS5zeW5jXCI6XCJxcmNvZGVWaXNpYmxlXCIsXCJpbm5lclN0eWxlXCI6XCJwYWRkaW5nOiA0MHJweDtcIn0sXCJUZWxEaWFsb2dcIjp7XCJ2LWJpbmQ6dmlzaWJsZS5zeW5jXCI6XCJ0ZWxEaWFsb2dWaXNpYmxlXCIsXCJpbm5lclN0eWxlXCI6XCJ3aWR0aDogNTYwcnB4O2hlaWdodDogMjIwcnB4O1wifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBRcmNvZGVEaWFsb2c6IERpYWxvZyxcbiAgICAgIFRlbERpYWxvZzogRGlhbG9nXG4gICAgfVxuXG4gICAgbWl4aW5zID0gW11cblxuICAgIGRhdGEgPSB7XG4gICAgICBxcmNvZGVWaXNpYmxlOiBmYWxzZSwgLy8g5LqM57u056CB5by55qGGXG4gICAgICB0ZWxEaWFsb2dWaXNpYmxlOiBmYWxzZSxcbiAgICAgIG15SXRlbXM6IE1ZX0lURU1TXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICB1c2VySW5mbyAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VySW5mb1xuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICB0b0xvZ2luICgpIHtcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnL3BhZ2VzL2xvZ2luJ1xuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGl0ZW1DbGljayAoaW5kZXgpIHtcbiAgICAgICAgY29uc3QgaGFuZGxlclRhcCA9IE1ZX0lURU1TW2luZGV4XS5oYW5kbGVyVGFwXG4gICAgICAgIGhhbmRsZXJUYXAuY2FsbCh0aGlzKVxuICAgICAgfSxcbiAgICAgIGNhbGxQaG9uZSAoKSB7XG4gICAgICAgIHd4Lm1ha2VQaG9uZUNhbGwoe1xuICAgICAgICAgIHBob25lTnVtYmVyOiAnNDQzMjM0MjM0MzInXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdyb3V0ZScsIHRoaXMuJF9nZXRSb3V0ZSgpKVxuICAgIH1cbiAgfVxuIl19