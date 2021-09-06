"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function n(o) {
    if (t[o]) return t[o].exports;
    var r = t[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, o) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: o
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var o = Object.create(null);
    if (n.r(o), Object.defineProperty(o, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) {
      n.d(o, r, function (t) {
        return e[t];
      }.bind(null, r));
    }
    return o;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 0);
}([function (e, t, n) {
  "use strict";

  n.r(t);
  var o = document.querySelector(".chat-activos"),
      r = document.querySelector("#group-mensagem"),
      s = (document.querySelectorAll(".members-active"), document.querySelector("form")),
      i = document.querySelector("#div-mensagens");
  var a = null,
      c = new ( /*#__PURE__*/function () {
    function _class(e) {
      _classCallCheck(this, _class);

      this.main = e;
    }

    _createClass(_class, [{
      key: "adicionarmembro",
      value: function adicionarmembro(e) {
        var t = "<div\n                        class=\"d-flex align-items-center justify-content-between p-2 bg-white rounded mb-3 members-active\">\n                        <div class=\"d-flex align-items-center\">\n                            <img src=\"./assets/img/f1.jpg\" class=\"img-fluid rounded-circle\" alt=\"\"\n                                style=\"height: 50px; width: 50px;\">\n                            <h5 class=\"text-muted mx-3\" codigo=\"".concat(e.id, "\">").concat(e.nome, "</h5>\n                        </div>\n                        <img src=\"./assets/img/activo.png\">\n                    </div>");
        this.main.innerHTML += t;
      }
    }]);

    return _class;
  }())(o),
      d = new ( /*#__PURE__*/function () {
    function _class2(e) {
      _classCallCheck(this, _class2);

      this.url = e;
    }

    _createClass(_class2, [{
      key: "listarMembros",
      value: function () {
        var _listarMembros = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var e;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return fetch(this.url + "/getmembers", {
                    method: "GET"
                  });

                case 2:
                  e = _context.sent;

                  if (!(200 != e.status)) {
                    _context.next = 5;
                    break;
                  }

                  throw new Error("Erro desconhecido");

                case 5:
                  _context.next = 7;
                  return e.json();

                case 7:
                  return _context.abrupt("return", _context.sent);

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function listarMembros() {
          return _listarMembros.apply(this, arguments);
        }

        return listarMembros;
      }()
    }, {
      key: "usuario",
      value: function () {
        var _usuario = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
          var t;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return fetch(this.url + "/usuario/" + e, {
                    method: "GET"
                  });

                case 2:
                  t = _context2.sent;

                  if (!(200 != t.status)) {
                    _context2.next = 5;
                    break;
                  }

                  throw new Error("Erro desconhecido");

                case 5:
                  _context2.next = 7;
                  return t.json();

                case 7:
                  return _context2.abrupt("return", _context2.sent);

                case 8:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function usuario(_x) {
          return _usuario.apply(this, arguments);
        }

        return usuario;
      }()
    }, {
      key: "salvaSocket",
      value: function () {
        var _salvaSocket = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e, t) {
          var n;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return fetch(this.url + "/salvaSocket", {
                    method: "POST",
                    headers: {
                      "content-type": "application/x-www-form-urlencoded"
                    },
                    body: "id=".concat(e, "&id_socket=").concat(t)
                  });

                case 2:
                  n = _context3.sent;

                  if (!(200 != n.status)) {
                    _context3.next = 5;
                    break;
                  }

                  throw new Error("Erro desconhecido");

                case 5:
                  _context3.next = 7;
                  return n.json();

                case 7:
                  return _context3.abrupt("return", _context3.sent);

                case 8:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function salvaSocket(_x2, _x3) {
          return _salvaSocket.apply(this, arguments);
        }

        return salvaSocket;
      }()
    }, {
      key: "listarMensagens",
      value: function () {
        var _listarMensagens = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e, t) {
          var n;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return fetch(this.url + "/getsms/".concat(e, "/").concat(t));

                case 2:
                  n = _context4.sent;

                  if (!(200 != n.status)) {
                    _context4.next = 5;
                    break;
                  }

                  throw new Error("Erro desconhecido");

                case 5:
                  _context4.next = 7;
                  return n.json();

                case 7:
                  return _context4.abrupt("return", _context4.sent);

                case 8:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        function listarMensagens(_x4, _x5) {
          return _listarMensagens.apply(this, arguments);
        }

        return listarMensagens;
      }()
    }, {
      key: "enviar",
      value: function () {
        var _enviar = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
          var t, n, o, r;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  t = e.emissor;
                  n = e.receptor;
                  o = e.mensagem;
                  _context5.next = 5;
                  return fetch(this.url + "/send", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: "emissor=".concat(t, "&receptor=").concat(n, "&mensagem=").concat(o)
                  });

                case 5:
                  r = _context5.sent;

                  if (!(200 != r.status)) {
                    _context5.next = 8;
                    break;
                  }

                  throw new Error("Erro desconhecido");

                case 8:
                  _context5.next = 10;
                  return r.json();

                case 10:
                  return _context5.abrupt("return", _context5.sent);

                case 11:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }));

        function enviar(_x6) {
          return _enviar.apply(this, arguments);
        }

        return enviar;
      }()
    }]);

    return _class2;
  }())("http://localhost:3000");

  function l(e) {
    var t;
    t = e.emissor !== a ? "<div class=\"d-flex justify-content-start my-3 px-3\">\n                        <img src=\"./assets/img/activo.png\" class=\"img-fluid rounded-circle\" alt=\"\" style=\"height: 50px; width: 50px;\">\n                     <div class=\"p-3 mx-2 context-mensagem-item bg-white rounded\" style=\"width: 300px;\">\n                         <p class=\"text-muted lead\" codigo=".concat(e.id, "> ").concat(e.conteudo, "</p>\n                     </div> ") : "<div class=\"d-flex justify-content-end my-3 px-3\">\n                    <div class=\"p-3 mx-2 context-mensagem-item bg-white rounded\"\n                        style=\"width: 300px;\">\n                        <p class=\"text-muted lead\" codigo=".concat(e.id, "> ").concat(e.conteudo, "</p>\n                    </div>\n                    <img src=\"./assets/img/activo.png\" class=\"img-fluid rounded-circle\" alt=\"\"style=\"height: 50px; width: 50px;\">\n                </div>"), r.innerHTML += t;
  }

  window.onload = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var e, t, n, o, u;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            e = "";
            t = io.connect("http://localhost:3000", {
              withCredentials: !1
            });
            t.on("connect", function (n) {
              console.log("conectado: ", t.id), e = t.id;
            });
            n = "";
            null == a && (n = prompt("digite seu nome"));
            _context7.next = 7;
            return d.usuario(n);

          case 7:
            o = _context7.sent;
            console.log(o);
            a = o.id;
            _context7.next = 12;
            return d.salvaSocket(a, e);

          case 12:
            _context7.next = 14;
            return d.listarMembros();

          case 14:
            u = _context7.sent;
            console.log(u), u.filter(function (e) {
              return e.id !== a;
            }).map(function (e) {
              c.adicionarmembro(e), console.log(e);
            });
            document.querySelectorAll(".members-active.d-flex h5").forEach(function (e) {
              e.addEventListener("click", function (e) {
                i.classList.remove("d-none");
                var t = e.target.getAttribute("codigo");
                s.idDestino.value = t, function () {
                  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
                    var t, _e;

                    return regeneratorRuntime.wrap(function _callee6$(_context6) {
                      while (1) {
                        switch (_context6.prev = _context6.next) {
                          case 0:
                            r.innerHTML = "";
                            _context6.next = 3;
                            return d.listarMensagens(a, e);

                          case 3:
                            t = _context6.sent;
                            console.log(t);

                            for (_e in t) {
                              l(t[_e]);
                            }

                          case 6:
                          case "end":
                            return _context6.stop();
                        }
                      }
                    }, _callee6);
                  }));

                  return function (_x7) {
                    return _ref2.apply(this, arguments);
                  };
                }()(t);
              });
            });

          case 17:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  })), s.addEventListener("submit", function (e) {
    if (e.preventDefault(), !s.idDestino.value) return void console.log("Nenhum amigo selecionado");
    var t = s.idDestino.value,
        n = s.txtMensagem.value,
        o = {
      emissor: a,
      receptor: t,
      mensagem: n
    };
    d.enviar(o).then(function (e) {
      return d.listarMensagens(a, t);
    }).then(function (e) {
      r.innerHTML = "";
      var t = new Audio();
      t.src = "./assets/Facebook_Sound.mp3", t.play();

      for (var _t in e) {
        l(e[_t]);
      }
    }), s.txtMensagem.value = "";
  });
}]);
