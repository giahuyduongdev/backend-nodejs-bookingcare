"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _index = _interopRequireDefault(require("../models/index"));
var _lodash = _interopRequireDefault(require("lodash"));
var _emailService = _interopRequireDefault(require("../services/emailService"));
var _sequelize = require("sequelize");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
require("dotenv").config();
var textToImage = require("text-to-image");
var MAX_NUMBER_SCHEDULE = process.env.MAX_NUMBER_SCHEDULE;
var getTopDoctorHome = function getTopDoctorHome(limitInput) {
  return new Promise(/*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
      var users;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _index["default"].User.findAll({
              limit: limitInput,
              where: {
                roleId: "R2"
              },
              order: [["createdAt", "DESC"]],
              attributes: {
                exclude: ["password"]
              },
              include: [{
                model: _index["default"].Allcode,
                as: "positionData",
                attributes: ["valueEn", "valueVi"]
              }, {
                model: _index["default"].Allcode,
                as: "genderData",
                attributes: ["valueEn", "valueVi"]
              }, {
                model: _index["default"].Doctor_Infor,
                attributes: ["specialtyId"],
                include: [{
                  model: _index["default"].Specialty,
                  as: "specialtyData",
                  attributes: ["name"]
                }]
              }],
              raw: true,
              nest: true
            });
          case 3:
            users = _context.sent;
            resolve({
              errCode: 0,
              data: users
            });
            _context.next = 10;
            break;
          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            reject(_context.t0);
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 7]]);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};
var getAllDoctors = function getAllDoctors() {
  return new Promise(/*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve, reject) {
      var doctors;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _index["default"].User.findAll({
              where: {
                roleId: "R2"
              },
              order: [["createdAt", "DESC"]],
              attributes: {
                exclude: ["password"]
              },
              include: [{
                model: _index["default"].Allcode,
                as: "positionData",
                attributes: ["valueEn", "valueVi"]
              }, {
                model: _index["default"].Allcode,
                as: "genderData",
                attributes: ["valueEn", "valueVi"]
              }, {
                model: _index["default"].Doctor_Infor,
                attributes: ["specialtyId"],
                include: [{
                  model: _index["default"].Specialty,
                  as: "specialtyData",
                  attributes: ["name"]
                }]
              }],
              raw: true,
              nest: true
            });
          case 3:
            doctors = _context2.sent;
            resolve({
              errCode: 0,
              data: doctors
            });
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
var checkRequiredFields = function checkRequiredFields(inputData) {
  var arrFields = ["doctorId", "contentHTML", "contentMarkdown"
  // "action",
  // "selectedPrice",
  // "selectedPayment",
  // "selectedProvice",
  // "nameClinic",
  // "addressClinic",
  // "note",
  // "specialtyId",
  ];
  var isValid = true;
  var element = "";
  for (var i = 0; i < arrFields.length; i++) {
    if (!inputData[arrFields[i]]) {
      isValid = false;
      element = arrFields[i];
      break;
    }
  }
  return {
    isValid: isValid,
    element: element
  };
};
var saveDetailInforDoctor = function saveDetailInforDoctor(inputData) {
  return new Promise(/*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve, reject) {
      var checkObj, doctorMarkdown, doctorInfor;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            checkObj = checkRequiredFields(inputData);
            if (!(checkObj.isValid === false)) {
              _context3.next = 6;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: "Missing parameter: ".concat(checkObj.element)
            });
            _context3.next = 42;
            break;
          case 6:
            if (!(inputData.action === "CREATE")) {
              _context3.next = 11;
              break;
            }
            _context3.next = 9;
            return _index["default"].Markdown.create({
              contentHTML: inputData.contentHTML,
              contentMarkdown: inputData.contentMarkdown,
              description: inputData.description,
              doctorId: inputData.doctorId
            });
          case 9:
            _context3.next = 22;
            break;
          case 11:
            if (!(inputData.action === "EDIT")) {
              _context3.next = 22;
              break;
            }
            _context3.next = 14;
            return _index["default"].Markdown.findOne({
              where: {
                doctorId: inputData.doctorId
              },
              raw: false
            });
          case 14:
            doctorMarkdown = _context3.sent;
            if (!doctorMarkdown) {
              _context3.next = 22;
              break;
            }
            doctorMarkdown.contentHTML = inputData.contentHTML;
            doctorMarkdown.contentMarkdown = inputData.contentMarkdown;
            doctorMarkdown.description = inputData.description;
            doctorMarkdown.doctorId = inputData.doctorId;
            // doctorMarkdown.updatedAt = new Date();
            _context3.next = 22;
            return doctorMarkdown.save();
          case 22:
            _context3.next = 24;
            return _index["default"].Doctor_Infor.findOne({
              where: {
                doctorId: inputData.doctorId
              },
              raw: false
            });
          case 24:
            doctorInfor = _context3.sent;
            if (!doctorInfor) {
              _context3.next = 39;
              break;
            }
            //update
            doctorInfor.doctorId = inputData.doctorId;
            doctorInfor.priceId = inputData.selectedPrice;
            doctorInfor.provinceId = inputData.selectedProvice;
            doctorInfor.paymentId = inputData.selectedPayment;
            doctorInfor.nameClinic = inputData.nameClinic;
            doctorInfor.addressClinic = inputData.addressClinic;
            doctorInfor.note = inputData.note;
            doctorInfor.specialtyId = inputData.specialtyId;
            doctorInfor.clinicId = inputData.clinicId;
            _context3.next = 37;
            return doctorInfor.save();
          case 37:
            _context3.next = 41;
            break;
          case 39:
            _context3.next = 41;
            return _index["default"].Doctor_Infor.create({
              doctorId: inputData.doctorId,
              priceId: inputData.selectedPrice,
              provinceId: inputData.selectedProvice,
              paymentId: inputData.selectedPayment,
              nameClinic: inputData.nameClinic,
              addressClinic: inputData.addressClinic,
              note: inputData.note,
              specialtyId: inputData.specialtyId,
              clinicId: inputData.clinicId
            });
          case 41:
            resolve({
              errCode: 0,
              errMessage: "Lưu thông tin bác sĩ thành công"
            });
          case 42:
            _context3.next = 47;
            break;
          case 44:
            _context3.prev = 44;
            _context3.t0 = _context3["catch"](0);
            reject(_context3.t0);
          case 47:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 44]]);
    }));
    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
};
var getDetailDoctorById = function getDetailDoctorById(inputId) {
  return new Promise(/*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve, reject) {
      var data;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            if (inputId) {
              _context4.next = 5;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: "Thiếu dữ liệu đầu vào!"
            });
            _context4.next = 11;
            break;
          case 5:
            _context4.next = 7;
            return _index["default"].User.findOne({
              where: {
                id: inputId
              },
              attributes: {
                exclude: ["password"]
              },
              include: [{
                model: _index["default"].Markdown,
                attributes: ["description", "contentHTML", "contentMarkdown"]
              }, {
                model: _index["default"].Doctor_Infor,
                attributes: {
                  exclude: ["id", "doctorId"]
                },
                include: [{
                  model: _index["default"].Allcode,
                  as: "priceTypeData",
                  attributes: ["valueEn", "valueVi"]
                }, {
                  model: _index["default"].Allcode,
                  as: "provinceTypeData",
                  attributes: ["valueEn", "valueVi"]
                }, {
                  model: _index["default"].Allcode,
                  as: "paymentTypeData",
                  attributes: ["valueEn", "valueVi"]
                }]
              }, {
                model: _index["default"].Allcode,
                as: "positionData",
                attributes: ["valueEn", "valueVi"]
              }],
              raw: false,
              nest: true
            });
          case 7:
            data = _context4.sent;
            //convert image tu buffer sang base64
            if (data && data.image) {
              data.image = new Buffer(data.image, "base64").toString("binary");
            }
            if (!data) {
              data = {};
            }
            resolve({
              errCode: 0,
              data: data
            });
          case 11:
            _context4.next = 16;
            break;
          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](0);
            reject(_context4.t0);
          case 16:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 13]]);
    }));
    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
};
var getExtraInforDoctorById = function getExtraInforDoctorById(doctorId) {
  return new Promise(/*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(resolve, reject) {
      var data;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            if (doctorId) {
              _context5.next = 5;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: "Thiếu dữ liệu đầu vào"
            });
            _context5.next = 10;
            break;
          case 5:
            _context5.next = 7;
            return _index["default"].Doctor_Infor.findOne({
              where: {
                doctorId: doctorId
              },
              attributes: {
                exclude: ["id", "doctorId"]
              },
              include: [{
                model: _index["default"].Allcode,
                as: "priceTypeData",
                attributes: ["valueEn", "valueVi"]
              }, {
                model: _index["default"].Allcode,
                as: "provinceTypeData",
                attributes: ["valueEn", "valueVi"]
              }, {
                model: _index["default"].Allcode,
                as: "paymentTypeData",
                attributes: ["valueEn", "valueVi"]
              }],
              raw: false,
              nest: true
            });
          case 7:
            data = _context5.sent;
            if (!data) {
              data = [];
            }
            resolve({
              errCode: 0,
              data: data
            });
          case 10:
            _context5.next = 15;
            break;
          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](0);
            reject(_context5.t0);
          case 15:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 12]]);
    }));
    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }());
};
var getProfileDoctorById = function getProfileDoctorById(doctorId) {
  return new Promise(/*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(resolve, reject) {
      var data;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            if (doctorId) {
              _context6.next = 5;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: "Thiếu dữ liệu đầu vào"
            });
            _context6.next = 11;
            break;
          case 5:
            _context6.next = 7;
            return _index["default"].User.findOne({
              where: {
                id: doctorId
              },
              attributes: {
                exclude: ["password"]
              },
              include: [{
                model: _index["default"].Markdown,
                attributes: ["description", "contentHTML", "contentMarkdown"]
              }, {
                model: _index["default"].Allcode,
                as: "positionData",
                attributes: ["valueEn", "valueVi"]
              }, {
                model: _index["default"].Doctor_Infor,
                attributes: {
                  exclude: ["id", "doctorId"]
                },
                include: [{
                  model: _index["default"].Allcode,
                  as: "priceTypeData",
                  attributes: ["valueEn", "valueVi"]
                }, {
                  model: _index["default"].Allcode,
                  as: "provinceTypeData",
                  attributes: ["valueEn", "valueVi"]
                }, {
                  model: _index["default"].Allcode,
                  as: "paymentTypeData",
                  attributes: ["valueEn", "valueVi"]
                }]
              }],
              raw: false,
              nest: true
            });
          case 7:
            data = _context6.sent;
            //convert image tu buffer sang base64
            if (data && data.image) {
              data.image = new Buffer(data.image, "base64").toString("binary");
            }
            if (!data) {
              data = {};
            }
            resolve({
              errCode: 0,
              data: data
            });
          case 11:
            _context6.next = 16;
            break;
          case 13:
            _context6.prev = 13;
            _context6.t0 = _context6["catch"](0);
            reject(_context6.t0);
          case 16:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 13]]);
    }));
    return function (_x11, _x12) {
      return _ref6.apply(this, arguments);
    };
  }());
};
var bulkCreateSchedule = function bulkCreateSchedule(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(resolve, reject) {
      var schedule, existing, toCreate;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            if (!(!data.arrSchedule || !data.doctorId || !data.date)) {
              _context7.next = 5;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: "Missing required param"
            });
            _context7.next = 15;
            break;
          case 5:
            schedule = data.arrSchedule;
            if (schedule && schedule.length > 0) {
              schedule = schedule.map(function (item) {
                item.maxNumber = MAX_NUMBER_SCHEDULE;
                return item;
              });
            }

            //get all existing data
            _context7.next = 9;
            return _index["default"].Schedule.findAll({
              where: {
                doctorId: data.doctorId,
                date: data.date
              },
              attributes: ["timeType", "date", "doctorId", "maxNumber"],
              raw: true
            });
          case 9:
            existing = _context7.sent;
            //compare difference
            toCreate = _lodash["default"].differenceWith(schedule, existing, function (a, b) {
              return a.timeType === b.timeType && +a.date === +b.date;
            }); //create data
            if (!(toCreate && toCreate.length > 0)) {
              _context7.next = 14;
              break;
            }
            _context7.next = 14;
            return _index["default"].Schedule.bulkCreate(toCreate);
          case 14:
            resolve({
              errCode: 0,
              errMessage: "OK"
            });
          case 15:
            _context7.next = 20;
            break;
          case 17:
            _context7.prev = 17;
            _context7.t0 = _context7["catch"](0);
            reject(_context7.t0);
          case 20:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 17]]);
    }));
    return function (_x13, _x14) {
      return _ref7.apply(this, arguments);
    };
  }());
};
var getScheduleByDate = function getScheduleByDate(doctorId, date) {
  return new Promise(/*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(resolve, reject) {
      var dataSchedule;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            if (!(!doctorId || !date)) {
              _context8.next = 5;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: "Thiếu dữ liệu đầu vào"
            });
            _context8.next = 10;
            break;
          case 5:
            _context8.next = 7;
            return _index["default"].Schedule.findAll({
              where: {
                doctorId: doctorId,
                date: date
              },
              include: [{
                model: _index["default"].Allcode,
                as: "timeTypeData",
                attributes: ["valueEn", "valueVi"]
              }, {
                model: _index["default"].User,
                as: "doctorData",
                attributes: ["firstName", "lastName"]
              }],
              raw: false,
              nest: true
            });
          case 7:
            dataSchedule = _context8.sent;
            if (!dataSchedule) {
              dataSchedule = [];
            }
            // let now = new Date().getHours();
            // let value = '';
            // for (var i = dataSchedule.length - 1; i >= 0; i--) {
            //   if(dataSchedule[i].timeTypeData.valueVi[2] === ':'){
            //     value = dataSchedule[i].timeTypeData.valueVi.slice(0,2);
            //   }
            //   else{
            //     value = dataSchedule[i].timeTypeData.valueVi[0]
            //   }

            //   if(now > value || new Date() < ){
            //     dataSchedule.splice(i, 1);
            //   }

            //   // if(dataSchedule[i].id > 20){
            //   //   dataSchedule.splice(i, 1);
            //   // }
            // }
            resolve({
              errCode: 0,
              data: dataSchedule
            });
          case 10:
            _context8.next = 15;
            break;
          case 12:
            _context8.prev = 12;
            _context8.t0 = _context8["catch"](0);
            reject(_context8.t0);
          case 15:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 12]]);
    }));
    return function (_x15, _x16) {
      return _ref8.apply(this, arguments);
    };
  }());
};

// let checkTimeScheduleByDate = (doctorId, date, timeType) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       if (!doctorId || !date || !timeType) {
//         resolve({
//           errCode: 1,
//           errMessage: "Thiếu dữ liệu đầu vào",
//         });
//       } else {
//         let dataSchedule = await db.Schedule.findOne({
//           where: { doctorId: doctorId, date: date, timeType : timeType},
//           raw: false,
//           nest: true,
//         });

//         let check = 0;

//         if (!dataSchedule){
//             dataSchedule = [],
//             check  = 1
//           } 
//         resolve({
//           errCode: check,
//           data: dataSchedule,
//         });
//       }
//     } catch (e) {
//       reject(e);
//     }
//   });
// };

var getListPatientForDoctor = function getListPatientForDoctor(doctorId, date) {
  return new Promise(/*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(resolve, reject) {
      var data;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            if (!(!doctorId || !date)) {
              _context9.next = 5;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: "Thiếu dữ liệu đầu vào"
            });
            _context9.next = 10;
            break;
          case 5:
            _context9.next = 7;
            return _index["default"].Booking.findAll({
              where: {
                doctorId: doctorId,
                date: date
              },
              include: [{
                model: _index["default"].User,
                as: "patientData",
                attributes: ["email", "firstName", "lastName", "address", "gender", "phonenumber", "birthday"],
                include: [{
                  model: _index["default"].Allcode,
                  as: "genderData",
                  attributes: ["valueEn", "valueVi"]
                }]
              }, {
                model: _index["default"].Allcode,
                as: "timeTypeDataPatient",
                attributes: ["valueEn", "valueVi"]
              }],
              raw: false,
              nest: true
            });
          case 7:
            data = _context9.sent;
            if (!data) {
              data = {};
            }
            resolve({
              errCode: 0,
              data: data
            });
          case 10:
            _context9.next = 15;
            break;
          case 12:
            _context9.prev = 12;
            _context9.t0 = _context9["catch"](0);
            reject(_context9.t0);
          case 15:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[0, 12]]);
    }));
    return function (_x17, _x18) {
      return _ref9.apply(this, arguments);
    };
  }());
};
var cancelBooking = function cancelBooking(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(resolve, reject) {
      var appoinment;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            if (!(!data.date || !data.doctorId || !data.patientId || !data.timeType || !data.id)) {
              _context10.next = 5;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: "Thiếu dữ liệu đầu vào"
            });
            _context10.next = 13;
            break;
          case 5:
            _context10.next = 7;
            return _index["default"].Booking.findOne({
              where: {
                id: data.id,
                doctorId: data.doctorId,
                patientId: data.patientId,
                timeType: data.timeType,
                date: data.date
              },
              raw: false
            });
          case 7:
            appoinment = _context10.sent;
            if (!appoinment) {
              _context10.next = 12;
              break;
            }
            appoinment.statusId = "S4";
            _context10.next = 12;
            return appoinment.save();
          case 12:
            resolve({
              errCode: 0,
              errMessage: "ok"
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
    return function (_x19, _x20) {
      return _ref10.apply(this, arguments);
    };
  }());
};
var cancelBookingEmail = function cancelBookingEmail(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(resolve, reject) {
      var appoinment, doctorInfo, day;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            if (!(!data.date || !data.doctorId || !data.patientId || !data.timeType || !data.note || !data.date || !data.dateString || !data.month || !data.year || !data.time || !data.id)) {
              _context11.next = 5;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: "Thiếu dữ liệu đầu vào"
            });
            _context11.next = 20;
            break;
          case 5:
            _context11.next = 7;
            return _index["default"].Booking.findOne({
              where: {
                id: data.id,
                doctorId: data.doctorId,
                patientId: data.patientId,
                timeType: data.timeType,
                date: data.date,
                statusId: "S2"
              },
              include: [{
                model: _index["default"].User,
                as: "patientData",
                attributes: ["id", "email"]
              }],
              raw: false,
              nest: true
            });
          case 7:
            appoinment = _context11.sent;
            if (!appoinment) {
              _context11.next = 13;
              break;
            }
            appoinment.note = data.note;
            appoinment.statusId = "S4";
            _context11.next = 13;
            return appoinment.save();
          case 13:
            _context11.next = 15;
            return _index["default"].User.findOne({
              where: {
                id: data.doctorId
              },
              raw: false,
              nest: true
            });
          case 15:
            doctorInfo = _context11.sent;
            _context11.next = 18;
            return _emailService["default"].sendCancelBookingEmail({
              receiverEmail: appoinment.patientData.email,
              note: appoinment.note,
              date: data.dateString,
              month: data.month,
              year: data.year,
              time: data.time,
              doctorName: doctorInfo.lastName + ' ' + doctorInfo.firstName
            });
          case 18:
            day = new Date(data.date).toString();
            resolve({
              errCode: 0,
              errMessage: "ok",
              data: appoinment
            });
          case 20:
            _context11.next = 25;
            break;
          case 22:
            _context11.prev = 22;
            _context11.t0 = _context11["catch"](0);
            reject(_context11.t0);
          case 25:
          case "end":
            return _context11.stop();
        }
      }, _callee11, null, [[0, 22]]);
    }));
    return function (_x21, _x22) {
      return _ref11.apply(this, arguments);
    };
  }());
};
var sendRemedy = function sendRemedy(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(resolve, reject) {
      var appoinment, userTotalRevenue, userTotalCost;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            if (!(!data.email || !data.doctorId || !data.patientId || !data.timeType)) {
              _context12.next = 5;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: "Thiếu dữ liệu đầu vào"
            });
            _context12.next = 31;
            break;
          case 5:
            _context12.next = 7;
            return _index["default"].Booking.findOne({
              where: {
                doctorId: data.doctorId,
                patientId: data.patientId,
                timeType: data.timeType,
                statusId: "S2"
              },
              raw: false
            });
          case 7:
            appoinment = _context12.sent;
            if (!appoinment) {
              _context12.next = 12;
              break;
            }
            appoinment.statusId = "S3";
            _context12.next = 12;
            return appoinment.save();
          case 12:
            _context12.next = 14;
            return _emailService["default"].sendAttachment(data);
          case 14:
            _context12.next = 16;
            return _index["default"].Invoice.create({
              doctorId: data.doctorId,
              patientId: data.patientId,
              specialtyId: data.specialtyId,
              totalCost: data.totalCost ? data.totalCost : 0
            });
          case 16:
            _context12.next = 18;
            return _index["default"].User.findOne({
              where: {
                id: data.doctorId
              },
              raw: false
            });
          case 18:
            userTotalRevenue = _context12.sent;
            if (!userTotalRevenue) {
              _context12.next = 23;
              break;
            }
            userTotalRevenue.totalRevenue = userTotalRevenue.totalRevenue + parseInt(data.totalCost);
            _context12.next = 23;
            return userTotalRevenue.save();
          case 23:
            _context12.next = 25;
            return _index["default"].User.findOne({
              where: {
                id: data.patientId
              },
              raw: false
            });
          case 25:
            userTotalCost = _context12.sent;
            if (!userTotalCost) {
              _context12.next = 30;
              break;
            }
            userTotalCost.totalCost = userTotalCost.totalCost + parseInt(data.totalCost);
            _context12.next = 30;
            return userTotalCost.save();
          case 30:
            resolve({
              errCode: 0,
              errMessage: "ok"
            });
          case 31:
            _context12.next = 36;
            break;
          case 33:
            _context12.prev = 33;
            _context12.t0 = _context12["catch"](0);
            reject(_context12.t0);
          case 36:
          case "end":
            return _context12.stop();
        }
      }, _callee12, null, [[0, 33]]);
    }));
    return function (_x23, _x24) {
      return _ref12.apply(this, arguments);
    };
  }());
};
var createRemedy = function createRemedy(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(resolve, reject) {
      var today, dd, mm, yyyy, contentImageVi, dataUriBase64, appoinment;
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            _context13.prev = 0;
            if (!(!data.doctorId || !data.patientId || !data.timeType || !data.date ||
            // !data.token ||
            !data.patientName || !data.email || !data.listMedicine || !data.desciption)) {
              _context13.next = 5;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: "Thiếu dữ liệu đầu vào"
            });
            _context13.next = 22;
            break;
          case 5:
            //create image remedy
            //get today
            today = new Date();
            dd = String(today.getDate()).padStart(2, "0");
            mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
            yyyy = today.getFullYear();
            today = mm + "/" + dd + "/" + yyyy;
            contentImageVi = "\n        Th\xF4ng tin \u0111\u01A1n thu\u1ED1c ng\xE0y ".concat(today, "\n        B\xE1c s\u0129 ph\u1EE5 tr\xE1ch: ").concat(data.doctorName, "\n\n        B\u1EC7nh nh\xE2n ").concat(data.patientName, "\n        Email: ").concat(data.email, "\n\n        Danh s\xE1ch c\xE1c thu\u1ED1c:\n        ").concat(data.listMedicine, "\n\n        Th\xF4ng tin m\xF4 t\u1EA3 c\xE1ch s\u1EED d\u1EE5ng:\n        ").concat(data.desciption, "\n        ");
            dataUriBase64 = textToImage.generateSync(contentImageVi, {
              debug: false,
              maxWidth: parseInt("720"),
              fontSize: parseInt("30"),
              fontFamily: "Arial",
              lineHeight: parseInt("50"),
              margin: 10,
              bgColor: "#ffffff",
              textColor: "#000000"
            }); //update patient status
            _context13.next = 14;
            return _index["default"].Booking.findOne({
              where: {
                doctorId: data.doctorId,
                patientId: data.patientId,
                timeType: data.timeType,
                date: data.date
                // token: data.token,
              },
              raw: false
            });
          case 14:
            appoinment = _context13.sent;
            if (!appoinment) {
              _context13.next = 19;
              break;
            }
            appoinment.imageRemedy = dataUriBase64;
            _context13.next = 19;
            return appoinment.save();
          case 19:
            _context13.next = 21;
            return _index["default"].History.create({
              doctorId: data.doctorId,
              patientId: data.patientId,
              description: data.desciption,
              files: dataUriBase64
            });
          case 21:
            resolve({
              errCode: 0,
              errMessage: "ok"
            });
          case 22:
            _context13.next = 27;
            break;
          case 24:
            _context13.prev = 24;
            _context13.t0 = _context13["catch"](0);
            reject(_context13.t0);
          case 27:
          case "end":
            return _context13.stop();
        }
      }, _callee13, null, [[0, 24]]);
    }));
    return function (_x25, _x26) {
      return _ref13.apply(this, arguments);
    };
  }());
};
module.exports = {
  getTopDoctorHome: getTopDoctorHome,
  getAllDoctors: getAllDoctors,
  checkRequiredFields: checkRequiredFields,
  saveDetailInforDoctor: saveDetailInforDoctor,
  getDetailDoctorById: getDetailDoctorById,
  getExtraInforDoctorById: getExtraInforDoctorById,
  getProfileDoctorById: getProfileDoctorById,
  bulkCreateSchedule: bulkCreateSchedule,
  getScheduleByDate: getScheduleByDate,
  getListPatientForDoctor: getListPatientForDoctor,
  sendRemedy: sendRemedy,
  cancelBooking: cancelBooking,
  cancelBookingEmail: cancelBookingEmail,
  createRemedy: createRemedy
  // checkTimeScheduleByDate: checkTimeScheduleByDate
};