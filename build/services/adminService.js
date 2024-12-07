"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var db = require("../models");
var moment = require("moment");
var _require = require("sequelize"),
  Sequelize = _require.Sequelize;
var getWeeklyRevenue = function getWeeklyRevenue() {
  return new Promise(/*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
      var invoices, sixDaysAgo, currentDate, totalWeeklyRevenue;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return db.Invoice.findAll({
              // where: { createdAt>=moment(new Date()).subtract(3, 'days'),createdAt<=(new Date())},
              // order: [["createdAt", "DESC"]],
              attributes: ["totalCost", "createdAt"],
              raw: true,
              nest: true
            });
          case 3:
            invoices = _context.sent;
            invoices.map(function (item) {
              item.createdAt = moment(item.createdAt).format("YYYY-MM-DD");
              return item;
            });
            sixDaysAgo = moment(new Date()).subtract(6, "days").format("YYYY-MM-DD");
            currentDate = moment(new Date()).format("YYYY-MM-DD");
            invoices = invoices.filter(function (item) {
              return item.createdAt >= sixDaysAgo && item.createdAt <= currentDate;
            });
            totalWeeklyRevenue = 0;
            invoices.map(function (item) {
              totalWeeklyRevenue = totalWeeklyRevenue + parseInt(item.totalCost);
            });
            resolve({
              errCode: 0,
              data: {
                totalWeeklyRevenue: totalWeeklyRevenue
              }
            });
            _context.next = 16;
            break;
          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            reject(_context.t0);
          case 16:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 13]]);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};
var getTotalNewUserDay = function getTotalNewUserDay() {
  return new Promise(/*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve, reject) {
      var currentDate, users, totalNewUserDay;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            currentDate = moment(new Date()).format("YYYY-MM-DD");
            _context2.next = 4;
            return db.User.findAll({
              // where: { createdAt==currentDate},
              // order: [["createdAt", "DESC"]],
              attributes: ["id", "createdAt"],
              raw: true,
              nest: true
            });
          case 4:
            users = _context2.sent;
            users.map(function (item) {
              item.createdAt = moment(item.createdAt).format("YYYY-MM-DD");
              return item;
            });
            users = users.filter(function (item) {
              return item.createdAt == currentDate;
            });
            totalNewUserDay = users.length;
            resolve({
              errCode: 0,
              data: {
                totalNewUserDay: totalNewUserDay
              }
            });
            _context2.next = 14;
            break;
          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            reject(_context2.t0);
          case 14:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 11]]);
    }));
    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
};
var getTotalHealthAppointmentDone = function getTotalHealthAppointmentDone() {
  return new Promise(/*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve, reject) {
      var apointmentDones, totalHealthApointmentDone;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return db.Booking.findAll({
              where: {
                statusId: "S3"
              },
              attributes: ["id", "createdAt", "statusId"],
              raw: true,
              nest: true
            });
          case 3:
            apointmentDones = _context3.sent;
            totalHealthApointmentDone = apointmentDones.length;
            resolve({
              errCode: 0,
              data: {
                totalHealthApointmentDone: totalHealthApointmentDone
              }
            });
            _context3.next = 11;
            break;
          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            reject(_context3.t0);
          case 11:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 8]]);
    }));
    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
};
var getTotalDoctor = function getTotalDoctor() {
  return new Promise(/*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve, reject) {
      var doctors, totalDoctors;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return db.User.findAll({
              where: {
                roleId: "R2"
              },
              attributes: ["id", "roleId"],
              raw: true,
              nest: true
            });
          case 3:
            doctors = _context4.sent;
            totalDoctors = doctors.length;
            resolve({
              errCode: 0,
              data: {
                totalDoctors: totalDoctors
              }
            });
            _context4.next = 11;
            break;
          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            reject(_context4.t0);
          case 11:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 8]]);
    }));
    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
};
var getTopThreeIdDoctorOfTheYear = function getTopThreeIdDoctorOfTheYear() {
  return new Promise(/*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(resolve, reject) {
      var invoices, slicedInvoices;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return db.Invoice.findAll({
              // where: { createdAt:  },
              attributes: ["doctorId", [Sequelize.fn("sum", Sequelize.col("Invoice.totalCost")), "total_revenue"]],
              // order: [["Invoice.total_revenue", "DESC"]],
              group: ["Invoice.doctorId"],
              raw: true,
              nest: true
            });
          case 3:
            invoices = _context5.sent;
            //sap xep giam dan
            invoices.sort(function (b, a) {
              return a.total_revenue - b.total_revenue;
            });

            //chi lay ra 3 phan tu dau
            slicedInvoices = invoices.slice(0, 3);
            resolve({
              errCode: 0,
              data: {
                invoices: slicedInvoices
              }
            });
            _context5.next = 12;
            break;
          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](0);
            reject(_context5.t0);
          case 12:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 9]]);
    }));
    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }());
};
var getTotalRevenueDoctorEachMonthByDoctorId = function getTotalRevenueDoctorEachMonthByDoctorId(doctorId) {
  return new Promise(/*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(resolve, reject) {
      var invoices, totalRevenueMonth0, totalRevenueMonth1, totalRevenueMonth2, totalRevenueMonth3, totalRevenueMonth4, totalRevenueMonth5, totalRevenueMonth6, totalRevenueMonth7, totalRevenueMonth8, totalRevenueMonth9, totalRevenueMonth10, totalRevenueMonth11, dataRevenue12Month;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return db.Invoice.findAll({
              where: {
                doctorId: doctorId
              },
              attributes: ["id", "doctorId", "totalCost", "createdAt"],
              include: [{
                model: db.User,
                as: "doctorDataInvoice",
                attributes: ["firstName", "lastName"]
              }],
              raw: true,
              nest: true
            });
          case 3:
            invoices = _context6.sent;
            invoices.map(function (item) {
              item.createdAt = moment(item.createdAt).month();
              //format("YYYY-MM-DD")
              return item;
            });
            totalRevenueMonth0 = 0;
            totalRevenueMonth1 = 0;
            totalRevenueMonth2 = 0;
            totalRevenueMonth3 = 0;
            totalRevenueMonth4 = 0;
            totalRevenueMonth5 = 0;
            totalRevenueMonth6 = 0;
            totalRevenueMonth7 = 0;
            totalRevenueMonth8 = 0;
            totalRevenueMonth9 = 0;
            totalRevenueMonth10 = 0;
            totalRevenueMonth11 = 0;
            invoices.map(function (item) {
              // if (item.createdAt === 10) {
              //   totalRevenueMonth10 = totalRevenueMonth10 + parseInt(item.totalCost);
              // }
              switch (item.createdAt) {
                case 0:
                  totalRevenueMonth0 = totalRevenueMonth0 + parseInt(item.totalCost);
                  break;
                case 1:
                  totalRevenueMonth1 = totalRevenueMonth1 + parseInt(item.totalCost);
                  break;
                case 2:
                  totalRevenueMonth2 = totalRevenueMonth2 + parseInt(item.totalCost);
                  break;
                case 3:
                  totalRevenueMonth3 = totalRevenueMonth3 + parseInt(item.totalCost);
                  break;
                case 4:
                  totalRevenueMonth4 = totalRevenueMonth4 + parseInt(item.totalCost);
                  break;
                case 5:
                  totalRevenueMonth5 = totalRevenueMonth5 + parseInt(item.totalCost);
                  break;
                case 6:
                  totalRevenueMonth6 = totalRevenueMonth6 + parseInt(item.totalCost);
                  break;
                case 7:
                  totalRevenueMonth7 = totalRevenueMonth7 + parseInt(item.totalCost);
                  break;
                case 8:
                  totalRevenueMonth8 = totalRevenueMonth8 + parseInt(item.totalCost);
                  break;
                case 9:
                  totalRevenueMonth9 = totalRevenueMonth9 + parseInt(item.totalCost);
                  break;
                case 10:
                  totalRevenueMonth10 = totalRevenueMonth10 + parseInt(item.totalCost);
                  break;
                case 11:
                  totalRevenueMonth11 = totalRevenueMonth11 + parseInt(item.totalCost);
                  break;
                default:
                // code block
              }
            });

            //   console.log("totalRevenueMonth0", totalRevenueMonth0);
            //   console.log("totalRevenueMonth1", totalRevenueMonth1);
            //   console.log("totalRevenueMonth2", totalRevenueMonth2);
            //   console.log("totalRevenueMonth3", totalRevenueMonth3);
            //   console.log("totalRevenueMonth4", totalRevenueMonth4);
            dataRevenue12Month = {};
            dataRevenue12Month.revenueMonth0 = totalRevenueMonth0;
            dataRevenue12Month.revenueMonth1 = totalRevenueMonth1;
            dataRevenue12Month.revenueMonth2 = totalRevenueMonth2;
            dataRevenue12Month.revenueMonth3 = totalRevenueMonth3;
            dataRevenue12Month.revenueMonth4 = totalRevenueMonth4;
            dataRevenue12Month.revenueMonth5 = totalRevenueMonth5;
            dataRevenue12Month.revenueMonth6 = totalRevenueMonth6;
            dataRevenue12Month.revenueMonth7 = totalRevenueMonth7;
            dataRevenue12Month.revenueMonth8 = totalRevenueMonth8;
            dataRevenue12Month.revenueMonth9 = totalRevenueMonth9;
            dataRevenue12Month.revenueMonth10 = totalRevenueMonth10;
            dataRevenue12Month.revenueMonth11 = totalRevenueMonth11;
            resolve({
              errCode: 0,
              data: {
                doctorId: doctorId,
                dataRevenue12Month: dataRevenue12Month,
                firstName: invoices[0].doctorDataInvoice.firstName,
                lastName: invoices[0].doctorDataInvoice.lastName
              }
            });
            _context6.next = 37;
            break;
          case 34:
            _context6.prev = 34;
            _context6.t0 = _context6["catch"](0);
            reject(_context6.t0);
          case 37:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 34]]);
    }));
    return function (_x11, _x12) {
      return _ref6.apply(this, arguments);
    };
  }());
};
var getTopThreeDoctorsOfTheYear = function getTopThreeDoctorsOfTheYear() {
  return new Promise(/*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(resolve, reject) {
      var resThreeDoctors, threeDoctors, RevenueEachMonthOfThreeDoctors;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return getTopThreeIdDoctorOfTheYear();
          case 3:
            resThreeDoctors = _context8.sent;
            threeDoctors = [];
            if (resThreeDoctors && resThreeDoctors.errCode === 0) {
              threeDoctors = resThreeDoctors.data.invoices;
              //resThreeDoctors.data.invoices.doctorId
            }

            //lay doanh thu theo 12 thang cua moi bac si
            RevenueEachMonthOfThreeDoctors = [];
            if (threeDoctors) {
              threeDoctors.map(/*#__PURE__*/function () {
                var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(item) {
                  var resRevenueEachMonthOfDoctor, dataRevenueDoctor, copy_RevenueEachMonthOfThreeDoctors;
                  return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                      case 0:
                        _context7.next = 2;
                        return getTotalRevenueDoctorEachMonthByDoctorId(item.doctorId);
                      case 2:
                        resRevenueEachMonthOfDoctor = _context7.sent;
                        if (resRevenueEachMonthOfDoctor && resRevenueEachMonthOfDoctor.errCode === 0) {
                          dataRevenueDoctor = resRevenueEachMonthOfDoctor.data;
                          copy_RevenueEachMonthOfThreeDoctors = _toConsumableArray(RevenueEachMonthOfThreeDoctors);
                          RevenueEachMonthOfThreeDoctors = [].concat(_toConsumableArray(copy_RevenueEachMonthOfThreeDoctors), [dataRevenueDoctor]);
                          if (RevenueEachMonthOfThreeDoctors.length === 3) {
                            resolve({
                              errCode: 0,
                              data: {
                                dataRevenueThreeDoctor: RevenueEachMonthOfThreeDoctors
                              }
                            });
                          }
                        }
                      case 4:
                      case "end":
                        return _context7.stop();
                    }
                  }, _callee7);
                }));
                return function (_x15) {
                  return _ref8.apply(this, arguments);
                };
              }());
            }
            _context8.next = 13;
            break;
          case 10:
            _context8.prev = 10;
            _context8.t0 = _context8["catch"](0);
            reject(_context8.t0);
          case 13:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 10]]);
    }));
    return function (_x13, _x14) {
      return _ref7.apply(this, arguments);
    };
  }());
};
var getTopFourVipPatient = function getTopFourVipPatient() {
  return new Promise(/*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(resolve, reject) {
      var invoices, slicedInvoices;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return db.Invoice.findAll({
              // where: { createdAt:  },
              attributes: ["patientId", [Sequelize.fn("sum", Sequelize.col("Invoice.totalCost")), "total_revenue"]],
              include: [{
                model: db.User,
                as: "patientDataInvoice",
                attributes: ["firstName", "lastName"]
              }],
              // order: [["Invoice.total_revenue", "DESC"]],
              group: ["Invoice.patientId"],
              raw: true,
              nest: true
            });
          case 3:
            invoices = _context9.sent;
            //sap xep giam dan
            invoices.sort(function (b, a) {
              return a.total_revenue - b.total_revenue;
            });

            //chi lay ra 3 phan tu dau
            slicedInvoices = invoices.slice(0, 4);
            resolve({
              errCode: 0,
              data: {
                invoices: slicedInvoices
              }
            });
            _context9.next = 12;
            break;
          case 9:
            _context9.prev = 9;
            _context9.t0 = _context9["catch"](0);
            reject(_context9.t0);
          case 12:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[0, 9]]);
    }));
    return function (_x16, _x17) {
      return _ref9.apply(this, arguments);
    };
  }());
};
var getMonthlyRevenueSpecialty = function getMonthlyRevenueSpecialty() {
  return new Promise(/*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(resolve, reject) {
      var invoices, startOfMonth, endOfMonth, arrSpecialtyId, resultMonthlyRevenueSpecialty;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            _context10.next = 3;
            return db.Invoice.findAll({
              // where: { createdAt>=moment(new Date()).subtract(3, 'days'),createdAt<=(new Date())},
              // order: [["createdAt", "DESC"]],
              attributes: ["specialtyId", "totalCost", "createdAt"],
              include: [{
                model: db.Specialty,
                as: "specialtyInvoiceData",
                attributes: ["name"]
              }],
              raw: true,
              nest: true
            });
          case 3:
            invoices = _context10.sent;
            invoices.map(function (item) {
              item.createdAt = moment(item.createdAt).format("YYYY-MM-DD");
              return item;
            });
            //   let sixDaysAgo = moment(new Date())
            //     .subtract(6, "days")
            //     .format("YYYY-MM-DD");
            //   let currentDate = moment(new Date()).format("YYYY-MM-DD");
            startOfMonth = moment(new Date()).startOf("month").format("YYYY-MM-DD");
            endOfMonth = moment(new Date()).endOf("month").format("YYYY-MM-DD");
            invoices = invoices.filter(function (item) {
              return item.createdAt >= startOfMonth && item.createdAt <= endOfMonth;
            });
            arrSpecialtyId = [];
            invoices.map(function (item) {
              if (arrSpecialtyId.includes(item.specialtyId) === false) {
                arrSpecialtyId.push(item.specialtyId);
              }
            });
            resultMonthlyRevenueSpecialty = [];
            arrSpecialtyId.map(function (item) {
              var arr = [];
              var obj = {};
              var totalRevenueMonthly = 0; //luu total revenue month co xuong khop
              arr = invoices.filter(function (item2) {
                return item2.specialtyId === item;
              });
              arr.map(function (item3) {
                totalRevenueMonthly = totalRevenueMonthly + parseInt(item3.totalCost);
              });
              if (arr.length !== 0) {
                obj.totalRevenueMonth = totalRevenueMonthly;
                obj.name = arr[0].specialtyInvoiceData.name;
              }
              resultMonthlyRevenueSpecialty.push(obj);
            });
            resolve({
              errCode: 0,
              data: resultMonthlyRevenueSpecialty
            });
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
    return function (_x18, _x19) {
      return _ref10.apply(this, arguments);
    };
  }());
};
module.exports = {
  getWeeklyRevenue: getWeeklyRevenue,
  getTotalNewUserDay: getTotalNewUserDay,
  getTotalHealthAppointmentDone: getTotalHealthAppointmentDone,
  getTotalDoctor: getTotalDoctor,
  getTopThreeDoctorsOfTheYear: getTopThreeDoctorsOfTheYear,
  getTopThreeIdDoctorOfTheYear: getTopThreeIdDoctorOfTheYear,
  getTotalRevenueDoctorEachMonthByDoctorId: getTotalRevenueDoctorEachMonthByDoctorId,
  getTopFourVipPatient: getTopFourVipPatient,
  getMonthlyRevenueSpecialty: getMonthlyRevenueSpecialty
};