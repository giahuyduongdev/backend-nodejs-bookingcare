"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _index = _interopRequireDefault(require("../models/index"));
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
var _emailService = _interopRequireDefault(require("./emailService"));
var _uuid = require("uuid");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
require("dotenv").config();
var salt = _bcryptjs["default"].genSaltSync(10);
var handleUserLogin = function handleUserLogin(email, password) {
  return new Promise(/*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
      var userData, isExist, user, check, tokenUser;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            userData = {};
            _context.next = 4;
            return checkUserEmail(email);
          case 4:
            isExist = _context.sent;
            if (!isExist) {
              _context.next = 37;
              break;
            }
            _context.next = 8;
            return _index["default"].User.findOne({
              where: {
                email: email
              },
              attributes: ["id", "email", "roleId", "password", "firstName", "lastName", "image", "tokenUser", "authicated"],
              include: [{
                model: _index["default"].Doctor_Infor,
                attributes: ["priceId", "specialtyId"],
                include: [{
                  model: _index["default"].Allcode,
                  as: "priceTypeData",
                  attributes: ["valueEn", "valueVi"]
                }]
              }],
              raw: true,
              nest: true
            });
          case 8:
            user = _context.sent;
            if (!user) {
              _context.next = 33;
              break;
            }
            if (!(user.authicated === 'no')) {
              _context.next = 15;
              break;
            }
            userData.errCode = 4;
            userData.errMessage = "T\xE0i kho\u1EA3n ch\u01B0a \u0111\u01B0\u1EE3c x\xE1c th\u1EF1c, vui l\xF2ng x\xE1c th\u1EF1c t\xE0i kho\u1EA3n";
            _context.next = 31;
            break;
          case 15:
            _context.next = 17;
            return _bcryptjs["default"].compareSync(password, user.password);
          case 17:
            check = _context.sent;
            if (!check) {
              _context.next = 29;
              break;
            }
            tokenUser = (0, _uuid.v4)();
            _context.next = 22;
            return updateTokenUserData(user.id, tokenUser);
          case 22:
            userData.errCode = 0;
            userData.errMessage = "OK";
            delete user.password;
            delete user.tokenUser;
            userData.user = user;
            _context.next = 31;
            break;
          case 29:
            userData.errCode = 3;
            userData.errMessage = "Sai mật khẩu";
          case 31:
            _context.next = 35;
            break;
          case 33:
            userData.errCode = 2;
            userData.errMessage = "Kh\xF4ng t\xECm th\u1EA5y ng\u01B0\u1EDDi d\xF9ng";
          case 35:
            _context.next = 39;
            break;
          case 37:
            userData.errCode = 1;
            userData.errMessage = "Email kh\xF4ng t\u1ED3n t\u1EA1i trong h\u1EC7 th\xF3ng, vui l\xF2ng th\u1EED l\u1EA1i";
          case 39:
            resolve(userData);
            _context.next = 45;
            break;
          case 42:
            _context.prev = 42;
            _context.t0 = _context["catch"](0);
            reject(_context.t0);
          case 45:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 42]]);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};
var checkUserEmail = function checkUserEmail(userEmail) {
  return new Promise(/*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve, reject) {
      var user;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _index["default"].User.findOne({
              where: {
                email: userEmail
              }
            });
          case 3:
            user = _context2.sent;
            if (user) {
              resolve(true);
            } else {
              resolve(false);
            }
            _context2.next = 10;
            break;
          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            reject(_context2.t0);
          case 10:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 7]]);
    }));
    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
};
var getAllUsers = function getAllUsers(userId) {
  return new Promise(/*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve, reject) {
      var users;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            users = "";
            if (!(userId === "ALL")) {
              _context3.next = 6;
              break;
            }
            _context3.next = 5;
            return _index["default"].User.findAll({
              attributes: {
                exclude: ["password", "tokenUser"]
              }
            });
          case 5:
            users = _context3.sent;
          case 6:
            if (!(userId && userId !== "ALL")) {
              _context3.next = 10;
              break;
            }
            _context3.next = 9;
            return _index["default"].User.findOne({
              where: {
                id: userId
              },
              attributes: {
                exclude: ["password", "tokenUser"]
              }
            });
          case 9:
            users = _context3.sent;
          case 10:
            resolve(users);
            _context3.next = 16;
            break;
          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](0);
            reject(_context3.t0);
          case 16:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 13]]);
    }));
    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
};
var registerNewUser = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(data) {
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          return _context5.abrupt("return", new Promise(/*#__PURE__*/function () {
            var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve, reject) {
              var check, hashPasswordFromBcrypt;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.prev = 0;
                    _context4.next = 3;
                    return checkUserEmail(data.email);
                  case 3:
                    check = _context4.sent;
                    if (!(check === true)) {
                      _context4.next = 8;
                      break;
                    }
                    resolve({
                      errCode: 1,
                      errMessage: "Email đã được sử dụng, hãy thử với email khác"
                    });
                    _context4.next = 14;
                    break;
                  case 8:
                    _context4.next = 10;
                    return hashUserPassword(data.password);
                  case 10:
                    hashPasswordFromBcrypt = _context4.sent;
                    _context4.next = 13;
                    return _index["default"].User.create({
                      email: data.email,
                      password: hashPasswordFromBcrypt,
                      firstName: data.firstName,
                      lastName: data.lastName,
                      address: data.address,
                      phonenumber: data.phonenumber,
                      birthday: data.birthday,
                      gender: data.gender,
                      roleId: 'R3',
                      authicated: 'no'
                    });
                  case 13:
                    resolve({
                      errCode: 0,
                      message: "ok",
                      data: data
                    });
                  case 14:
                    _context4.next = 19;
                    break;
                  case 16:
                    _context4.prev = 16;
                    _context4.t0 = _context4["catch"](0);
                    reject(_context4.t0);
                  case 19:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, null, [[0, 16]]);
            }));
            return function (_x8, _x9) {
              return _ref5.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function registerNewUser(_x7) {
    return _ref4.apply(this, arguments);
  };
}();
var createNewUser = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(data) {
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          return _context7.abrupt("return", new Promise(/*#__PURE__*/function () {
            var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(resolve, reject) {
              var check, hashPasswordFromBcrypt;
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.prev = 0;
                    _context6.next = 3;
                    return checkUserEmail(data.email);
                  case 3:
                    check = _context6.sent;
                    if (!(check === true)) {
                      _context6.next = 8;
                      break;
                    }
                    resolve({
                      errCode: 1,
                      errMessage: "Email đã được sử dụng, hãy thử với email khác"
                    });
                    _context6.next = 14;
                    break;
                  case 8:
                    _context6.next = 10;
                    return hashUserPassword(data.password);
                  case 10:
                    hashPasswordFromBcrypt = _context6.sent;
                    _context6.next = 13;
                    return _index["default"].User.create({
                      email: data.email,
                      password: hashPasswordFromBcrypt,
                      firstName: data.firstName,
                      lastName: data.lastName,
                      address: data.address,
                      phonenumber: data.phonenumber,
                      gender: data.gender,
                      roleId: data.roleId,
                      positionId: data.positionId,
                      image: data.avatar,
                      authicated: 'yes'
                    });
                  case 13:
                    resolve({
                      errCode: 0,
                      message: "ok"
                    });
                  case 14:
                    _context6.next = 19;
                    break;
                  case 16:
                    _context6.prev = 16;
                    _context6.t0 = _context6["catch"](0);
                    reject(_context6.t0);
                  case 19:
                  case "end":
                    return _context6.stop();
                }
              }, _callee6, null, [[0, 16]]);
            }));
            return function (_x11, _x12) {
              return _ref7.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function createNewUser(_x10) {
    return _ref6.apply(this, arguments);
  };
}();
var hashUserPassword = function hashUserPassword(password) {
  return new Promise(/*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(resolve, reject) {
      var hashPassword;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return _bcryptjs["default"].hashSync(password, salt);
          case 3:
            hashPassword = _context8.sent;
            resolve(hashPassword);
            _context8.next = 10;
            break;
          case 7:
            _context8.prev = 7;
            _context8.t0 = _context8["catch"](0);
            reject(_context8.t0);
          case 10:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 7]]);
    }));
    return function (_x13, _x14) {
      return _ref8.apply(this, arguments);
    };
  }());
};
var deleteUser = function deleteUser(userId) {
  return new Promise(/*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(resolve, reject) {
      var user;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return _index["default"].User.findOne({
              where: {
                id: userId
              }
            });
          case 3:
            user = _context9.sent;
            if (!user) {
              resolve({
                errCode: 2,
                errMessage: "Ng\u01B0\u1EDDi d\xF9ng kh\xF4ng t\u1ED3n t\u1EA1i"
              });
            }
            if (!user) {
              _context9.next = 8;
              break;
            }
            _context9.next = 8;
            return _index["default"].User.destroy({
              where: {
                id: userId
              }
            });
          case 8:
            resolve({
              errCode: 0,
              errMessage: "Ng\u01B0\u1EDDi d\xF9ng \u0111\xE3 b\u1ECB x\xF3a"
            });
            _context9.next = 14;
            break;
          case 11:
            _context9.prev = 11;
            _context9.t0 = _context9["catch"](0);
            reject(_context9.t0);
          case 14:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[0, 11]]);
    }));
    return function (_x15, _x16) {
      return _ref9.apply(this, arguments);
    };
  }());
};
var updateTokenUserData = function updateTokenUserData(userId, tokenUser) {
  return new Promise(/*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(resolve, reject) {
      var user;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            if (!userId) {
              resolve({
                errCode: 2,
                errMessage: "Thiếu dữ liệu đầu vào"
              });
            }
            _context10.next = 4;
            return _index["default"].User.findOne({
              where: {
                id: userId
              },
              raw: false
            });
          case 4:
            user = _context10.sent;
            if (!user) {
              _context10.next = 12;
              break;
            }
            user.tokenUser = tokenUser;
            _context10.next = 9;
            return user.save();
          case 9:
            resolve({
              errCode: 0,
              message: "Cập nhật token thành công"
            });
            _context10.next = 13;
            break;
          case 12:
            resolve({
              errCode: 1,
              errMessage: "Ng\u01B0\u1EDDi d\xF9ng kh\xF4ng t\u1ED3n t\u1EA1i"
            });
          case 13:
            _context10.next = 18;
            break;
          case 15:
            _context10.prev = 15;
            _context10.t0 = _context10["catch"](0);
            reject(_context10.t0);
          case 18:
          case "end":
            return _context10.stop();
        }
      }, _callee10, null, [[0, 15]]);
    }));
    return function (_x17, _x18) {
      return _ref10.apply(this, arguments);
    };
  }());
};
var updateUserData = function updateUserData(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(resolve, reject) {
      var user;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            if (!data.id) {
              resolve({
                errCode: 2,
                errMessage: "Thiếu dữ liệu đầu vào"
              });
            }
            _context11.next = 4;
            return _index["default"].User.findOne({
              where: {
                id: data.id
              },
              raw: false
            });
          case 4:
            user = _context11.sent;
            if (!user) {
              _context11.next = 20;
              break;
            }
            user.firstName = data.firstName;
            user.lastName = data.lastName;
            user.address = data.address;
            user.roleId = data.roleId;
            user.positionId = data.positionId;
            user.gender = data.gender;
            user.phonenumber = data.phonenumber;
            if (data.avatar !== "") {
              user.image = data.avatar;
            }
            user.image = data.avatar;
            _context11.next = 17;
            return user.save();
          case 17:
            resolve({
              errCode: 0,
              message: "Cập nhật người dùng thành công"
            });
            _context11.next = 21;
            break;
          case 20:
            resolve({
              errCode: 1,
              errMessage: "Ng\u01B0\u1EDDi d\xF9ng kh\xF4ng t\u1ED3n t\u1EA1i"
            });
          case 21:
            _context11.next = 26;
            break;
          case 23:
            _context11.prev = 23;
            _context11.t0 = _context11["catch"](0);
            reject(_context11.t0);
          case 26:
          case "end":
            return _context11.stop();
        }
      }, _callee11, null, [[0, 23]]);
    }));
    return function (_x19, _x20) {
      return _ref11.apply(this, arguments);
    };
  }());
};
var changeAccountPassword = function changeAccountPassword(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(resolve, reject) {
      var user, check, hashPasswordFromBcrypt;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            if (!(!data.id || !data.oldPassword || !data.newPassword)) {
              _context12.next = 5;
              break;
            }
            resolve({
              errCode: 2,
              errMessage: "Thiếu dữ liệu đầu vào"
            });
            _context12.next = 27;
            break;
          case 5:
            _context12.next = 7;
            return _index["default"].User.findOne({
              where: {
                id: data.id
              },
              raw: false
            });
          case 7:
            user = _context12.sent;
            if (!user) {
              _context12.next = 26;
              break;
            }
            _context12.next = 11;
            return _bcryptjs["default"].compareSync(data.oldPassword, user.password);
          case 11:
            check = _context12.sent;
            if (!check) {
              _context12.next = 23;
              break;
            }
            if (data.oldPassword === data.newPassword) {
              resolve({
                errCode: 1,
                message: "Mật khẩu mới không được giống mật khẩu cũ"
              });
            }
            _context12.next = 16;
            return hashUserPassword(data.newPassword);
          case 16:
            hashPasswordFromBcrypt = _context12.sent;
            user.password = hashPasswordFromBcrypt;
            _context12.next = 20;
            return user.save();
          case 20:
            resolve({
              errCode: 0,
              message: "Cập nhật mật khẩu mới thành công"
            });
            _context12.next = 24;
            break;
          case 23:
            resolve({
              errCode: 1,
              message: "Mật khẩu hiện tại không đúng"
            });
          case 24:
            _context12.next = 27;
            break;
          case 26:
            resolve({
              errCode: 1,
              errMessage: "Ng\u01B0\u1EDDi d\xF9ng kh\xF4ng t\u1ED3n t\u1EA1i"
            });
          case 27:
            _context12.next = 32;
            break;
          case 29:
            _context12.prev = 29;
            _context12.t0 = _context12["catch"](0);
            reject(_context12.t0);
          case 32:
          case "end":
            return _context12.stop();
        }
      }, _callee12, null, [[0, 29]]);
    }));
    return function (_x21, _x22) {
      return _ref12.apply(this, arguments);
    };
  }());
};
var getUserInfoProfile = function getUserInfoProfile(userEmail) {
  return new Promise(/*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(resolve, reject) {
      var users;
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            _context13.prev = 0;
            _context13.next = 3;
            return _index["default"].User.findOne({
              where: {
                email: userEmail
              },
              attributes: {
                exclude: ["password", "tokenUser"]
              },
              raw: true,
              nest: true
            });
          case 3:
            users = _context13.sent;
            resolve(users);
            _context13.next = 10;
            break;
          case 7:
            _context13.prev = 7;
            _context13.t0 = _context13["catch"](0);
            reject(_context13.t0);
          case 10:
          case "end":
            return _context13.stop();
        }
      }, _callee13, null, [[0, 7]]);
    }));
    return function (_x23, _x24) {
      return _ref13.apply(this, arguments);
    };
  }());
};
var getAllCodeService = function getAllCodeService(typeInput) {
  return new Promise(/*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(resolve, reject) {
      var res, allcode;
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            _context14.prev = 0;
            if (typeInput) {
              _context14.next = 5;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: "Thiếu dữ liệu đầu vào"
            });
            _context14.next = 12;
            break;
          case 5:
            res = {};
            _context14.next = 8;
            return _index["default"].Allcode.findAll({
              where: {
                type: typeInput
              }
            });
          case 8:
            allcode = _context14.sent;
            res.errCode = 0;
            res.data = allcode;
            resolve(res);
          case 12:
            _context14.next = 17;
            break;
          case 14:
            _context14.prev = 14;
            _context14.t0 = _context14["catch"](0);
            reject(_context14.t0);
          case 17:
          case "end":
            return _context14.stop();
        }
      }, _callee14, null, [[0, 14]]);
    }));
    return function (_x25, _x26) {
      return _ref14.apply(this, arguments);
    };
  }());
};
var buildUrlEmailForgotPassword = function buildUrlEmailForgotPassword(tokenUser, email) {
  var result = "".concat(process.env.URL_REACT, "/retrieve-password?tokenUser=").concat(tokenUser, "&email=").concat(email);
  return result;
};
var buildUrlEmailConfirmAccount = function buildUrlEmailConfirmAccount(tokenUser, email) {
  var result = "".concat(process.env.URL_REACT, "/confirm-new-account?tokenUser=").concat(tokenUser, "&email=").concat(email);
  return result;
};
var postCofirmAccountService = function postCofirmAccountService(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(resolve, reject) {
      var tokenUser, user;
      return _regeneratorRuntime().wrap(function _callee15$(_context15) {
        while (1) switch (_context15.prev = _context15.next) {
          case 0:
            _context15.prev = 0;
            if (data.email) {
              _context15.next = 5;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: "Thiếu dữ liệu đầu vào"
            });
            _context15.next = 12;
            break;
          case 5:
            tokenUser = (0, _uuid.v4)(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d' -random
            _context15.next = 8;
            return _emailService["default"].sendConfirmAccountEmail({
              receiverEmail: data.email,
              language: data.language,
              redirectLink: buildUrlEmailConfirmAccount(tokenUser, data.email)
            });
          case 8:
            _context15.next = 10;
            return _index["default"].User.findOne({
              where: {
                email: data.email
              },
              raw: false
            });
          case 10:
            user = _context15.sent;
            if (user) {
              user.tokenUser = tokenUser;
              user.save();
              resolve({
                errCode: 0,
                message: "Hãy kiểm tra email của bạn"
              });
            } else {
              resolve({
                errCode: 1,
                errMessage: "Ng\u01B0\u1EDDi d\xF9ng kh\xF4ng t\u1ED3n t\u1EA1i"
              });
            }
          case 12:
            _context15.next = 17;
            break;
          case 14:
            _context15.prev = 14;
            _context15.t0 = _context15["catch"](0);
            reject(_context15.t0);
          case 17:
          case "end":
            return _context15.stop();
        }
      }, _callee15, null, [[0, 14]]);
    }));
    return function (_x27, _x28) {
      return _ref15.apply(this, arguments);
    };
  }());
};
var postConFirmNewAccountEmail = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(data) {
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          return _context17.abrupt("return", new Promise(/*#__PURE__*/function () {
            var _ref17 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(resolve, reject) {
              var user;
              return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                while (1) switch (_context16.prev = _context16.next) {
                  case 0:
                    _context16.prev = 0;
                    if (!(!data.tokenUser || !data.email)) {
                      _context16.next = 5;
                      break;
                    }
                    resolve({
                      errCode: 1,
                      errMessage: "Thiếu dữ liệu đầu vào"
                    });
                    _context16.next = 17;
                    break;
                  case 5:
                    _context16.next = 7;
                    return _index["default"].User.findOne({
                      where: {
                        email: data.email,
                        tokenUser: data.tokenUser
                      },
                      raw: false
                    });
                  case 7:
                    user = _context16.sent;
                    if (!user) {
                      _context16.next = 16;
                      break;
                    }
                    user.authicated = 'yes';
                    user.tokenUser = null;
                    _context16.next = 13;
                    return user.save();
                  case 13:
                    resolve({
                      errCode: 0,
                      message: "Xác thực tài khoản thành công"
                    });
                    _context16.next = 17;
                    break;
                  case 16:
                    resolve({
                      errCode: 2,
                      errMessage: "T\xE0i kho\u1EA3n \u0111\xE3 \u0111\u01B0\u1EE3c x\xE1c th\u1EF1c ho\u1EB7c kh\xF4ng t\u1ED3n t\u1EA1i"
                    });
                  case 17:
                    _context16.next = 22;
                    break;
                  case 19:
                    _context16.prev = 19;
                    _context16.t0 = _context16["catch"](0);
                    reject(_context16.t0);
                  case 22:
                  case "end":
                    return _context16.stop();
                }
              }, _callee16, null, [[0, 19]]);
            }));
            return function (_x30, _x31) {
              return _ref17.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context17.stop();
      }
    }, _callee17);
  }));
  return function postConFirmNewAccountEmail(_x29) {
    return _ref16.apply(this, arguments);
  };
}();
var postForgotPasswordService = function postForgotPasswordService(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref18 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18(resolve, reject) {
      var tokenUser, user;
      return _regeneratorRuntime().wrap(function _callee18$(_context18) {
        while (1) switch (_context18.prev = _context18.next) {
          case 0:
            _context18.prev = 0;
            if (data.email) {
              _context18.next = 5;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: "Thiếu dữ liệu đầu vào"
            });
            _context18.next = 19;
            break;
          case 5:
            tokenUser = (0, _uuid.v4)(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d' -random
            _context18.next = 8;
            return _emailService["default"].sendForgotPasswordEmail({
              receiverEmail: data.email,
              redirectLink: buildUrlEmailForgotPassword(tokenUser, data.email)
            });
          case 8:
            _context18.next = 10;
            return _index["default"].User.findOne({
              where: {
                email: data.email
              },
              raw: false
            });
          case 10:
            user = _context18.sent;
            if (!user) {
              _context18.next = 18;
              break;
            }
            user.tokenUser = tokenUser;
            _context18.next = 15;
            return user.save();
          case 15:
            resolve({
              errCode: 0,
              message: "Gửi email lấy lại mật khẩu thành công"
            });
            _context18.next = 19;
            break;
          case 18:
            resolve({
              errCode: 1,
              errMessage: "Ng\u01B0\u1EDDi d\xF9ng kh\xF4ng t\u1ED3n t\u1EA1i"
            });
          case 19:
            _context18.next = 24;
            break;
          case 21:
            _context18.prev = 21;
            _context18.t0 = _context18["catch"](0);
            reject(_context18.t0);
          case 24:
          case "end":
            return _context18.stop();
        }
      }, _callee18, null, [[0, 21]]);
    }));
    return function (_x32, _x33) {
      return _ref18.apply(this, arguments);
    };
  }());
};
var postVerifyRetrievePasswordService = /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee20(data) {
    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          return _context20.abrupt("return", new Promise(/*#__PURE__*/function () {
            var _ref20 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19(resolve, reject) {
              var hashPasswordFromBcrypt, user;
              return _regeneratorRuntime().wrap(function _callee19$(_context19) {
                while (1) switch (_context19.prev = _context19.next) {
                  case 0:
                    _context19.prev = 0;
                    if (!(!data.tokenUser || !data.email || !data.newPassword)) {
                      _context19.next = 5;
                      break;
                    }
                    resolve({
                      errCode: 1,
                      errMessage: "Thiếu dữ liệu đầu vào"
                    });
                    _context19.next = 20;
                    break;
                  case 5:
                    _context19.next = 7;
                    return hashUserPassword(data.newPassword);
                  case 7:
                    hashPasswordFromBcrypt = _context19.sent;
                    _context19.next = 10;
                    return _index["default"].User.findOne({
                      where: {
                        email: data.email,
                        tokenUser: data.tokenUser
                      },
                      raw: false
                    });
                  case 10:
                    user = _context19.sent;
                    if (!user) {
                      _context19.next = 19;
                      break;
                    }
                    user.password = hashPasswordFromBcrypt;
                    user.tokenUser = null;
                    _context19.next = 16;
                    return user.save();
                  case 16:
                    resolve({
                      errCode: 0,
                      message: "Đổi mật khẩu thành công"
                    });
                    _context19.next = 20;
                    break;
                  case 19:
                    resolve({
                      errCode: 2,
                      errMessage: "Ng\u01B0\u1EDDi d\xF9ng kh\xF4ng t\u1ED3n t\u1EA1i"
                    });
                  case 20:
                    _context19.next = 25;
                    break;
                  case 22:
                    _context19.prev = 22;
                    _context19.t0 = _context19["catch"](0);
                    reject(_context19.t0);
                  case 25:
                  case "end":
                    return _context19.stop();
                }
              }, _callee19, null, [[0, 22]]);
            }));
            return function (_x35, _x36) {
              return _ref20.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context20.stop();
      }
    }, _callee20);
  }));
  return function postVerifyRetrievePasswordService(_x34) {
    return _ref19.apply(this, arguments);
  };
}();
module.exports = {
  handleUserLogin: handleUserLogin,
  checkUserEmail: checkUserEmail,
  getAllUsers: getAllUsers,
  registerNewUser: registerNewUser,
  createNewUser: createNewUser,
  hashUserPassword: hashUserPassword,
  deleteUser: deleteUser,
  updateTokenUserData: updateTokenUserData,
  updateUserData: updateUserData,
  getAllCodeService: getAllCodeService,
  postForgotPasswordService: postForgotPasswordService,
  postVerifyRetrievePasswordService: postVerifyRetrievePasswordService,
  postCofirmAccountService: postCofirmAccountService,
  postConFirmNewAccountEmail: postConFirmNewAccountEmail,
  getUserInfoProfile: getUserInfoProfile,
  changeAccountPassword: changeAccountPassword
};