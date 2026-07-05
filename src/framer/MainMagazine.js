
// ─────────────────────────────────────────────────────────────
// CMS Data Stub (Framer plugin v15)
//
// This component was bound to a Framer Collection. The runtime CMS
// machinery has been stripped — wire up your own data source by
// populating this object. Keys are the query aliases used internally
// by the design; values are arrays of items.
//
// AI INTEGRATION NOTE: identify the .map(item => ...) call(s) in
// the component below to learn what fields each item needs. Then
// replace the empty arrays here with your data (fetched from your
// CMS, an API, a JSON file, props, etc.).
// ─────────────────────────────────────────────────────────────
import { useQueryData as __cms_useQueryData } from "./_framer-runtime.js";
const __framer_useQueryData = (query) => __cms_useQueryData(query);

var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/ZljHxcVNhUNaungXt1zc/ydk5GJKJMQSr9N0lS390/tupKOS5Mn.js
import { jsx as _jsx8, jsxs as _jsxs5, Fragment as _Fragment } from "react/jsx-runtime";
import { addFonts as addFonts6, addPropertyControls as addPropertyControls8, ChildrenCanSuspend, ComponentViewportProvider as ComponentViewportProvider2, ControlType as ControlType8, cx as cx8, FormPlainTextInput, forwardLoader as forwardLoader2, getFonts as getFonts2, getFontsFromSharedStyle as getFontsFromSharedStyle5, Image as Image13, patchBorderRadiusScaleCorrector as patchBorderRadiusScaleCorrector2, PathVariablesContext, queryCache, ResolveLinks, RichText as RichText5, SmartComponentScopedContainer as SmartComponentScopedContainer2, useActiveVariantCallback as useActiveVariantCallback3, useComponentViewport as useComponentViewport6, useLocaleInfo as useLocaleInfo6, useQueryData, useRouter, useVariantState as useVariantState6, withCSS as withCSS8 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup6, motion as motion8, MotionConfigContext as MotionConfigContext6 } from "framer-motion";
import * as React8 from "react";
import { useRef as useRef6 } from "react";

// http-url:https://framerusercontent.com/modules/u39xhU6fUj657odBl4Xm/I448n51LV8RC7ipFz3NB/TWHZahxMp.js
import { addPropertyControls as e5, ControlType as l3, QueryEngine as t4 } from "./_framer-runtime.js";

// http-url:https://framerusercontent.com/modules/u39xhU6fUj657odBl4Xm/I448n51LV8RC7ipFz3NB/TWHZahxMp-0.js
import { ControlType as y } from "./_framer-runtime.js";
import { ControlType as P } from "./_framer-runtime.js";
var t;
var e = Object.create;
var r = Object.defineProperty;
var n = Object.getOwnPropertyDescriptor;
var i = Object.getOwnPropertyNames;
var s = Object.getPrototypeOf;
var a = Object.prototype.hasOwnProperty;
var o = (t5, e6, n4) => e6 in t5 ? r(t5, e6, { enumerable: true, configurable: true, writable: true, value: n4 }) : t5[e6] = n4;
var u = (t5, e6) => function() {
  return e6 || (0, t5[i(t5)[0]])((e6 = { exports: {} }).exports, e6), e6.exports;
};
var l = (t5, e6, s4, o4) => {
  if (e6 && "object" == typeof e6 || "function" == typeof e6)
    for (let u4 of i(e6))
      a.call(t5, u4) || u4 === s4 || r(t5, u4, { get: () => e6[u4], enumerable: !(o4 = n(e6, u4)) || o4.enumerable });
  return t5;
};
var h = (t5, n4, i3) => (i3 = null != t5 ? e(s(t5)) : {}, l(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !n4 && t5 && t5.__esModule ? i3 : r(i3, "default", { value: t5, enumerable: true }),
  t5
));
var c = (t5, e6, r3) => o(t5, "symbol" != typeof e6 ? e6 + "" : e6, r3);
var f = u({ "../../../node_modules/dataloader/index.js"(t5, e6) {
  var r3, n4 = /* @__PURE__ */ function() {
    function t6(t7, e8) {
      if ("function" != typeof t7)
        throw TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: " + t7 + ".");
      this._batchLoadFn = t7, this._maxBatchSize = function(t8) {
        if (!(!t8 || false !== t8.batch))
          return 1;
        var e9 = t8 && t8.maxBatchSize;
        if (void 0 === e9)
          return 1 / 0;
        if ("number" != typeof e9 || e9 < 1)
          throw TypeError("maxBatchSize must be a positive number: " + e9);
        return e9;
      }(e8), this._batchScheduleFn = function(t8) {
        var e9 = t8 && t8.batchScheduleFn;
        if (void 0 === e9)
          return i3;
        if ("function" != typeof e9)
          throw TypeError("batchScheduleFn must be a function: " + e9);
        return e9;
      }(e8), this._cacheKeyFn = function(t8) {
        var e9 = t8 && t8.cacheKeyFn;
        if (void 0 === e9)
          return function(t9) {
            return t9;
          };
        if ("function" != typeof e9)
          throw TypeError("cacheKeyFn must be a function: " + e9);
        return e9;
      }(e8), this._cacheMap = function(t8) {
        if (!(!t8 || false !== t8.cache))
          return null;
        var e9 = t8 && t8.cacheMap;
        if (void 0 === e9)
          return /* @__PURE__ */ new Map();
        if (null !== e9) {
          var r4 = ["get", "set", "delete", "clear"].filter(function(t9) {
            return e9 && "function" != typeof e9[t9];
          });
          if (0 !== r4.length)
            throw TypeError("Custom cacheMap missing methods: " + r4.join(", "));
        }
        return e9;
      }(e8), this._batch = null, this.name = e8 && e8.name ? e8.name : null;
    }
    var e7 = t6.prototype;
    return e7.load = function(t7) {
      if (null == t7)
        throw TypeError("The loader.load() function must be called with a value, but got: " + String(t7) + ".");
      var e8 = function(t8) {
        var e9 = t8._batch;
        if (null !== e9 && !e9.hasDispatched && e9.keys.length < t8._maxBatchSize)
          return e9;
        var r5 = { hasDispatched: false, keys: [], callbacks: [] };
        return t8._batch = r5, t8._batchScheduleFn(function() {
          (function(t9, e10) {
            var r6;
            if (e10.hasDispatched = true, 0 === e10.keys.length) {
              a3(e10);
              return;
            }
            try {
              r6 = t9._batchLoadFn(e10.keys);
            } catch (r7) {
              return s4(t9, e10, TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: " + String(r7) + "."));
            }
            if (!r6 || "function" != typeof r6.then)
              return s4(t9, e10, TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: " + String(r6) + "."));
            r6.then(function(t10) {
              if (!o4(t10))
                throw TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: " + String(t10) + ".");
              if (t10.length !== e10.keys.length)
                throw TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.\n\nKeys:\n" + String(e10.keys) + "\n\nValues:\n" + String(t10));
              a3(e10);
              for (var r7 = 0; r7 < e10.callbacks.length; r7++) {
                var n6 = t10[r7];
                n6 instanceof Error ? e10.callbacks[r7].reject(n6) : e10.callbacks[r7].resolve(n6);
              }
            }).catch(function(r7) {
              s4(t9, e10, r7);
            });
          })(t8, r5);
        }), r5;
      }(this), r4 = this._cacheMap, n5 = this._cacheKeyFn(t7);
      if (r4) {
        var i4 = r4.get(n5);
        if (i4) {
          var u4 = e8.cacheHits || (e8.cacheHits = []);
          return new Promise(function(t8) {
            u4.push(function() {
              t8(i4);
            });
          });
        }
      }
      e8.keys.push(t7);
      var l4 = new Promise(function(t8, r5) {
        e8.callbacks.push({ resolve: t8, reject: r5 });
      });
      return r4 && r4.set(n5, l4), l4;
    }, e7.loadMany = function(t7) {
      if (!o4(t7))
        throw TypeError("The loader.loadMany() function must be called with Array<key> but got: " + t7 + ".");
      for (var e8 = [], r4 = 0; r4 < t7.length; r4++)
        e8.push(this.load(t7[r4]).catch(function(t8) {
          return t8;
        }));
      return Promise.all(e8);
    }, e7.clear = function(t7) {
      var e8 = this._cacheMap;
      if (e8) {
        var r4 = this._cacheKeyFn(t7);
        e8.delete(r4);
      }
      return this;
    }, e7.clearAll = function() {
      var t7 = this._cacheMap;
      return t7 && t7.clear(), this;
    }, e7.prime = function(t7, e8) {
      var r4 = this._cacheMap;
      if (r4) {
        var n5, i4 = this._cacheKeyFn(t7);
        void 0 === r4.get(i4) && (e8 instanceof Error ? (n5 = Promise.reject(e8)).catch(function() {
        }) : n5 = Promise.resolve(e8), r4.set(i4, n5));
      }
      return this;
    }, t6;
  }(), i3 = "object" == typeof process && "function" == typeof process.nextTick ? function(t6) {
    r3 || (r3 = Promise.resolve()), r3.then(function() {
      process.nextTick(t6);
    });
  } : "function" == typeof setImmediate ? function(t6) {
    setImmediate(t6);
  } : function(t6) {
    setTimeout(t6);
  };
  function s4(t6, e7, r4) {
    a3(e7);
    for (var n5 = 0; n5 < e7.keys.length; n5++)
      t6.clear(e7.keys[n5]), e7.callbacks[n5].reject(r4);
  }
  function a3(t6) {
    if (t6.cacheHits)
      for (var e7 = 0; e7 < t6.cacheHits.length; e7++)
        t6.cacheHits[e7]();
  }
  function o4(t6) {
    return "object" == typeof t6 && null !== t6 && "number" == typeof t6.length && (0 === t6.length || t6.length > 0 && Object.prototype.hasOwnProperty.call(t6, t6.length - 1));
  }
  e6.exports = n4;
} });
var d = h(f(), 1);
var g = { Uint8: 1, Uint16: 2, Uint32: 4, BigUint64: 8, Int8: 1, Int16: 2, Int32: 4, BigInt64: 8, Float32: 4, Float64: 8 };
var p = class {
  getOffset() {
    return this.offset;
  }
  ensureLength(t5) {
    let e6 = this.bytes.length;
    if (!(this.offset + t5 <= e6))
      throw Error("Reading out of bounds");
  }
  readUint8() {
    let t5 = g.Uint8;
    this.ensureLength(t5);
    let e6 = this.view.getUint8(this.offset);
    return this.offset += t5, e6;
  }
  readUint16() {
    let t5 = g.Uint16;
    this.ensureLength(t5);
    let e6 = this.view.getUint16(this.offset);
    return this.offset += t5, e6;
  }
  readUint32() {
    let t5 = g.Uint32;
    this.ensureLength(t5);
    let e6 = this.view.getUint32(this.offset);
    return this.offset += t5, e6;
  }
  readUint64() {
    let t5 = this.readBigUint64();
    return Number(t5);
  }
  readBigUint64() {
    let t5 = g.BigUint64;
    this.ensureLength(t5);
    let e6 = this.view.getBigUint64(this.offset);
    return this.offset += t5, e6;
  }
  readInt8() {
    let t5 = g.Int8;
    this.ensureLength(t5);
    let e6 = this.view.getInt8(this.offset);
    return this.offset += t5, e6;
  }
  readInt16() {
    let t5 = g.Int16;
    this.ensureLength(t5);
    let e6 = this.view.getInt16(this.offset);
    return this.offset += t5, e6;
  }
  readInt32() {
    let t5 = g.Int32;
    this.ensureLength(t5);
    let e6 = this.view.getInt32(this.offset);
    return this.offset += t5, e6;
  }
  readInt64() {
    let t5 = this.readBigInt64();
    return Number(t5);
  }
  readBigInt64() {
    let t5 = g.BigInt64;
    this.ensureLength(t5);
    let e6 = this.view.getBigInt64(this.offset);
    return this.offset += t5, e6;
  }
  readFloat32() {
    let t5 = g.Float32;
    this.ensureLength(t5);
    let e6 = this.view.getFloat32(this.offset);
    return this.offset += t5, e6;
  }
  readFloat64() {
    let t5 = g.Float64;
    this.ensureLength(t5);
    let e6 = this.view.getFloat64(this.offset);
    return this.offset += t5, e6;
  }
  readBytes(t5) {
    let e6 = this.offset, r3 = e6 + t5, n4 = this.bytes.subarray(e6, r3);
    return this.offset = r3, n4;
  }
  readString() {
    let t5 = this.readUint32(), e6 = this.readBytes(t5);
    return this.decoder.decode(e6);
  }
  readJson() {
    let t5 = this.readString();
    return JSON.parse(t5);
  }
  constructor(t5) {
    this.bytes = t5, c(this, "offset", 0), c(this, "view"), c(this, "decoder", new TextDecoder()), this.view = v(this.bytes);
  }
};
function v(t5) {
  return new DataView(t5.buffer, t5.byteOffset, t5.byteLength);
}
var m = "undefined" != typeof __dai_window;
var w = m && "function" == typeof __dai_window.requestIdleCallback;
function I(t5, ...e6) {
  if (!t5)
    throw Error("Assertion Error" + (e6.length > 0 ? ": " + e6.join(" ") : ""));
}
function b(t5) {
  throw Error(`Unexpected value: ${t5}`);
}
var U = 1024;
var S = 1.5;
var k = (t5) => 2 ** t5 - 1;
var L = (t5) => -(2 ** (t5 - 1));
var B = (t5) => 2 ** (t5 - 1) - 1;
var E = { Uint8: 0, Uint16: 0, Uint32: 0, Uint64: 0, BigUint64: 0, Int8: L(8), Int16: L(16), Int32: L(32), Int64: Number.MIN_SAFE_INTEGER, BigInt64: -(BigInt(2) ** BigInt(63)) };
var M = { Uint8: k(8), Uint16: k(16), Uint32: k(32), Uint64: Number.MAX_SAFE_INTEGER, BigUint64: BigInt(2) ** BigInt(64) - BigInt(1), Int8: B(8), Int16: B(16), Int32: B(32), Int64: Number.MAX_SAFE_INTEGER, BigInt64: BigInt(2) ** BigInt(63) - BigInt(1) };
function T(t5, e6, r3, n4) {
  I(t5 >= e6, t5, "outside lower bound for", n4), I(t5 <= r3, t5, "outside upper bound for", n4);
}
var F = class {
  getOffset() {
    return this.offset;
  }
  slice(t5 = 0, e6 = this.offset) {
    return this.bytes.slice(t5, e6);
  }
  subarray(t5 = 0, e6 = this.offset) {
    return this.bytes.subarray(t5, e6);
  }
  ensureLength(t5) {
    let e6 = this.bytes.length;
    if (this.offset + t5 <= e6)
      return;
    let r3 = new Uint8Array(Math.ceil(e6 * S) + t5);
    r3.set(this.bytes), this.bytes = r3, this.view = v(r3);
  }
  writeUint8(t5) {
    T(t5, E.Uint8, M.Uint8, "Uint8");
    let e6 = g.Uint8;
    this.ensureLength(e6), this.view.setUint8(this.offset, t5), this.offset += e6;
  }
  writeUint16(t5) {
    T(t5, E.Uint16, M.Uint16, "Uint16");
    let e6 = g.Uint16;
    this.ensureLength(e6), this.view.setUint16(this.offset, t5), this.offset += e6;
  }
  writeUint32(t5) {
    T(t5, E.Uint32, M.Uint32, "Uint32");
    let e6 = g.Uint32;
    this.ensureLength(e6), this.view.setUint32(this.offset, t5), this.offset += e6;
  }
  writeUint64(t5) {
    T(t5, E.Uint64, M.Uint64, "Uint64");
    let e6 = BigInt(t5);
    this.writeBigUint64(e6);
  }
  writeBigUint64(t5) {
    T(t5, E.BigUint64, M.BigUint64, "BigUint64");
    let e6 = g.BigUint64;
    this.ensureLength(e6), this.view.setBigUint64(this.offset, t5), this.offset += e6;
  }
  writeInt8(t5) {
    T(t5, E.Int8, M.Int8, "Int8");
    let e6 = g.Int8;
    this.ensureLength(e6), this.view.setInt8(this.offset, t5), this.offset += e6;
  }
  writeInt16(t5) {
    T(t5, E.Int16, M.Int16, "Int16");
    let e6 = g.Int16;
    this.ensureLength(e6), this.view.setInt16(this.offset, t5), this.offset += e6;
  }
  writeInt32(t5) {
    T(t5, E.Int32, M.Int32, "Int32");
    let e6 = g.Int32;
    this.ensureLength(e6), this.view.setInt32(this.offset, t5), this.offset += e6;
  }
  writeInt64(t5) {
    T(t5, E.Int64, M.Int64, "Int64");
    let e6 = BigInt(t5);
    this.writeBigInt64(e6);
  }
  writeBigInt64(t5) {
    T(t5, E.BigInt64, M.BigInt64, "BigInt64");
    let e6 = g.BigInt64;
    this.ensureLength(e6), this.view.setBigInt64(this.offset, t5), this.offset += e6;
  }
  writeFloat32(t5) {
    let e6 = g.Float32;
    this.ensureLength(e6), this.view.setFloat32(this.offset, t5), this.offset += e6;
  }
  writeFloat64(t5) {
    let e6 = g.Float64;
    this.ensureLength(e6), this.view.setFloat64(this.offset, t5), this.offset += e6;
  }
  writeBytes(t5) {
    let e6 = t5.length;
    this.ensureLength(e6), this.bytes.set(t5, this.offset), this.offset += e6;
  }
  encodeString(t5) {
    let e6 = this.encodedStrings.get(t5);
    if (e6)
      return e6;
    let r3 = this.encoder.encode(t5);
    return this.encodedStrings.set(t5, r3), r3;
  }
  writeString(t5) {
    let e6 = this.encodeString(t5), r3 = e6.length;
    this.writeUint32(r3), this.writeBytes(e6);
  }
  writeJson(t5) {
    let e6 = JSON.stringify(t5);
    this.writeString(e6);
  }
  constructor() {
    c(this, "offset", 0), c(this, "bytes", new Uint8Array(U)), c(this, "view", v(this.bytes)), c(this, "encoder", new TextEncoder()), c(this, "encodedStrings", /* @__PURE__ */ new Map());
  }
};
function x(t5) {
  return "string" == typeof t5;
}
function N(t5) {
  return Number.isFinite(t5);
}
function A(t5) {
  return null === t5;
}
var O = class t2 {
  static fromString(e6) {
    let [r3, n4, i3] = e6.split("/").map(Number);
    return I(N(r3), "Invalid chunkId"), I(N(n4), "Invalid offset"), I(N(i3), "Invalid length"), new t2(r3, n4, i3);
  }
  toString() {
    return `${this.chunkId}/${this.offset}/${this.length}`;
  }
  static read(e6) {
    let r3 = e6.readUint16(), n4 = e6.readUint32(), i3 = e6.readUint32();
    return new t2(r3, n4, i3);
  }
  write(t5) {
    t5.writeUint16(this.chunkId), t5.writeUint32(this.offset), t5.writeUint32(this.length);
  }
  compare(t5) {
    return this.chunkId < t5.chunkId ? -1 : this.chunkId > t5.chunkId ? 1 : this.offset < t5.offset ? -1 : this.offset > t5.offset ? 1 : (I(this.length === t5.length), 0);
  }
  constructor(t5, e6, r3) {
    this.chunkId = t5, this.offset = e6, this.length = r3;
  }
};
function R(t5) {
  if (A(t5))
    return 0;
  switch (t5.type) {
    case P.Array:
      return 1;
    case P.Boolean:
      return 2;
    case P.Color:
      return 3;
    case P.Date:
      return 4;
    case P.Enum:
      return 5;
    case P.File:
      return 6;
    case P.ResponsiveImage:
      return 10;
    case P.Link:
      return 7;
    case P.Number:
      return 8;
    case P.Object:
      return 9;
    case P.RichText:
      return 11;
    case P.String:
      return 12;
    case P.VectorSetItem:
      return 13;
    default:
      b(t5);
  }
}
function q(e6) {
  let r3 = e6.readUint16(), n4 = [];
  for (let i3 = 0; i3 < r3; i3++) {
    let r4 = t.read(e6);
    n4.push(r4);
  }
  return { type: P.Array, value: n4 };
}
function _(e6, r3) {
  for (let n4 of (e6.writeUint16(r3.value.length), r3.value))
    t.write(e6, n4);
}
function D(e6, r3, n4) {
  let i3 = e6.value.length, s4 = r3.value.length;
  if (i3 < s4)
    return -1;
  if (i3 > s4)
    return 1;
  for (let s5 = 0; s5 < i3; s5++) {
    let i4 = e6.value[s5], a3 = r3.value[s5], o4 = t.compare(i4, a3, n4);
    if (0 !== o4)
      return o4;
  }
  return 0;
}
function j(t5) {
  return { type: P.Boolean, value: 0 !== t5.readUint8() };
}
function C(t5, e6) {
  t5.writeUint8(e6.value ? 1 : 0);
}
function J(t5, e6) {
  return t5.value < e6.value ? -1 : t5.value > e6.value ? 1 : 0;
}
function V(t5) {
  return { type: P.Color, value: t5.readString() };
}
function W(t5, e6) {
  t5.writeString(e6.value);
}
function $(t5, e6) {
  return t5.value < e6.value ? -1 : t5.value > e6.value ? 1 : 0;
}
function z(t5) {
  let e6 = t5.readInt64(), r3 = new Date(e6);
  return { type: P.Date, value: r3.toISOString() };
}
function G(t5, e6) {
  let r3 = new Date(e6.value), n4 = r3.getTime();
  t5.writeInt64(n4);
}
function K(t5, e6) {
  let r3 = new Date(t5.value), n4 = new Date(e6.value);
  return r3 < n4 ? -1 : r3 > n4 ? 1 : 0;
}
function H(t5) {
  return { type: P.Enum, value: t5.readString() };
}
function X(t5, e6) {
  t5.writeString(e6.value);
}
function Q(t5, e6) {
  return t5.value < e6.value ? -1 : t5.value > e6.value ? 1 : 0;
}
function Y(t5) {
  return { type: P.File, value: t5.readString() };
}
function Z(t5, e6) {
  t5.writeString(e6.value);
}
function tt(t5, e6) {
  return t5.value < e6.value ? -1 : t5.value > e6.value ? 1 : 0;
}
function te(t5) {
  return { type: P.Link, value: t5.readJson() };
}
function tr(t5, e6) {
  t5.writeJson(e6.value);
}
function tn(t5, e6) {
  let r3 = JSON.stringify(t5.value), n4 = JSON.stringify(e6.value);
  return r3 < n4 ? -1 : r3 > n4 ? 1 : 0;
}
function ti(t5) {
  return { type: P.Number, value: t5.readFloat64() };
}
function ts(t5, e6) {
  t5.writeFloat64(e6.value);
}
function ta(t5, e6) {
  return t5.value < e6.value ? -1 : t5.value > e6.value ? 1 : 0;
}
function to(e6) {
  let r3 = e6.readUint16(), n4 = {};
  for (let i3 = 0; i3 < r3; i3++) {
    let r4 = e6.readString();
    n4[r4] = t.read(e6);
  }
  return { type: P.Object, value: n4 };
}
function tu(e6, r3) {
  let n4 = Object.entries(r3.value);
  for (let [r4, i3] of (e6.writeUint16(n4.length), n4))
    e6.writeString(r4), t.write(e6, i3);
}
function tl(e6, r3, n4) {
  let i3 = Object.keys(e6.value).sort(), s4 = Object.keys(r3.value).sort();
  if (i3.length < s4.length)
    return -1;
  if (i3.length > s4.length)
    return 1;
  for (let a3 = 0; a3 < i3.length; a3++) {
    let o4 = i3[a3], u4 = s4[a3];
    if (o4 < u4)
      return -1;
    if (o4 > u4)
      return 1;
    let l4 = e6.value[o4] ?? null, h3 = r3.value[u4] ?? null, c4 = t.compare(l4, h3, n4);
    if (0 !== c4)
      return c4;
  }
  return 0;
}
function th(t5) {
  return { type: P.ResponsiveImage, value: t5.readJson() };
}
function tc(t5, e6) {
  t5.writeJson(e6.value);
}
function tf(t5, e6) {
  let r3 = JSON.stringify(t5.value), n4 = JSON.stringify(e6.value);
  return r3 < n4 ? -1 : r3 > n4 ? 1 : 0;
}
function td(t5) {
  let e6 = t5.readInt8();
  if (0 === e6)
    return { type: P.RichText, value: t5.readUint32() };
  if (1 === e6)
    return { type: P.RichText, value: t5.readString() };
  throw Error("Invalid rich text pointer");
}
function tg(t5, e6) {
  if (N(e6.value)) {
    t5.writeInt8(0), t5.writeUint32(e6.value);
    return;
  }
  if (x(e6.value)) {
    t5.writeInt8(1), t5.writeString(e6.value);
    return;
  }
  throw Error("Invalid rich text pointer");
}
function tp(t5, e6) {
  let r3 = t5.value, n4 = e6.value;
  if (N(r3) && N(n4) || x(r3) && x(n4))
    return r3 < n4 ? -1 : r3 > n4 ? 1 : 0;
  throw Error("Invalid rich text pointer");
}
function tv(t5) {
  return { type: P.String, value: t5.readString() };
}
function ty(t5, e6) {
  t5.writeString(e6.value);
}
function tm(t5, e6, r3) {
  let n4 = t5.value, i3 = e6.value;
  return (0 === r3.type && (n4 = t5.value.toLowerCase(), i3 = e6.value.toLowerCase()), n4 < i3) ? -1 : n4 > i3 ? 1 : 0;
}
function tw(t5) {
  return { type: P.VectorSetItem, value: t5.readUint32() };
}
function tI(t5, e6) {
  t5.writeUint32(e6.value);
}
function tb(t5, e6) {
  let r3 = t5.value, n4 = e6.value;
  return r3 < n4 ? -1 : r3 > n4 ? 1 : 0;
}
((t5) => {
  t5.read = function(t6) {
    let e6 = t6.readUint8();
    switch (e6) {
      case 0:
        return null;
      case 1:
        return q(t6);
      case 2:
        return j(t6);
      case 3:
        return V(t6);
      case 4:
        return z(t6);
      case 5:
        return H(t6);
      case 6:
        return Y(t6);
      case 7:
        return te(t6);
      case 8:
        return ti(t6);
      case 9:
        return to(t6);
      case 10:
        return th(t6);
      case 11:
        return td(t6);
      case 12:
        return tv(t6);
      case 13:
        return tw(t6);
      default:
        b(e6);
    }
  }, t5.write = function(t6, e6) {
    let r3 = R(e6);
    if (t6.writeUint8(r3), !A(e6))
      switch (e6.type) {
        case P.Array:
          return _(t6, e6);
        case P.Boolean:
          return C(t6, e6);
        case P.Color:
          return W(t6, e6);
        case P.Date:
          return G(t6, e6);
        case P.Enum:
          return X(t6, e6);
        case P.File:
          return Z(t6, e6);
        case P.Link:
          return tr(t6, e6);
        case P.Number:
          return ts(t6, e6);
        case P.Object:
          return tu(t6, e6);
        case P.ResponsiveImage:
          return tc(t6, e6);
        case P.RichText:
          return tg(t6, e6);
        case P.VectorSetItem:
          return tI(t6, e6);
        case P.String:
          return ty(t6, e6);
        default:
          b(e6);
      }
  }, t5.compare = function(t6, e6, r3) {
    let n4 = R(t6), i3 = R(e6);
    if (n4 < i3)
      return -1;
    if (n4 > i3)
      return 1;
    if (A(t6) || A(e6))
      return 0;
    switch (t6.type) {
      case P.Array:
        return I(e6.type === P.Array), D(t6, e6, r3);
      case P.Boolean:
        return I(e6.type === P.Boolean), J(t6, e6);
      case P.Color:
        return I(e6.type === P.Color), $(t6, e6);
      case P.Date:
        return I(e6.type === P.Date), K(t6, e6);
      case P.Enum:
        return I(e6.type === P.Enum), Q(t6, e6);
      case P.File:
        return I(e6.type === P.File), tt(t6, e6);
      case P.Link:
        return I(e6.type === P.Link), tn(t6, e6);
      case P.Number:
        return I(e6.type === P.Number), ta(t6, e6);
      case P.Object:
        return I(e6.type === P.Object), tl(t6, e6, r3);
      case P.ResponsiveImage:
        return I(e6.type === P.ResponsiveImage), tf(t6, e6);
      case P.RichText:
        return I(e6.type === P.RichText), tp(t6, e6);
      case P.VectorSetItem:
        return I(e6.type === P.VectorSetItem), tb(t6, e6);
      case P.String:
        return I(e6.type === P.String), tm(t6, e6, r3);
      default:
        b(t6);
    }
  };
})(t || (t = {}));
var tU = class e2 {
  sortEntries() {
    this.entries.sort((e6, r3) => {
      for (let n4 = 0; n4 < this.fieldNames.length; n4++) {
        let i3 = e6.values[n4], s4 = r3.values[n4], a3 = t.compare(i3, s4, this.options.collation);
        if (0 !== a3)
          return a3;
      }
      return e6.pointer.compare(r3.pointer);
    });
  }
  static deserialize(r3) {
    let n4 = new p(r3), i3 = n4.readJson(), s4 = n4.readUint8(), a3 = [];
    for (let t5 = 0; t5 < s4; t5++) {
      let t6 = n4.readString();
      a3.push(t6);
    }
    let o4 = new e2(a3, { collation: i3 }), u4 = n4.readUint32();
    for (let e6 = 0; e6 < u4; e6++) {
      let e7 = [];
      for (let r5 = 0; r5 < s4; r5++) {
        let r6 = t.read(n4);
        e7.push(r6);
      }
      let r4 = O.read(n4);
      o4.entries.push({ values: e7, pointer: r4 });
    }
    return o4;
  }
  serialize() {
    let e6 = new F();
    for (let t5 of (e6.writeJson(this.options.collation), e6.writeUint8(this.fieldNames.length), this.fieldNames))
      e6.writeString(t5);
    for (let r3 of (this.sortEntries(), e6.writeUint32(this.entries.length), this.entries)) {
      let { values: n4, pointer: i3 } = r3;
      for (let r4 of n4)
        t.write(e6, r4);
      i3.write(e6);
    }
    return e6.subarray();
  }
  addItem(t5, e6) {
    let r3 = this.fieldNames.map((e7) => t5.getField(e7) ?? null);
    this.entries.push({ values: r3, pointer: e6 });
  }
  constructor(t5, e6) {
    this.fieldNames = t5, this.options = e6, c(this, "entries", []);
  }
};
var tS = 3;
var tk = 250;
var tL = [
  408,
  // Request Timeout
  429,
  // Too Many Requests
  500,
  // Internal Server Error
  502,
  // Bad Gateway
  503,
  // Service Unavailable
  504
];
var tB = async (t5, e6) => {
  let r3 = 0;
  for (; ; ) {
    try {
      let n4 = await fetch(t5, e6);
      if (!tL.includes(n4.status) || ++r3 > tS)
        return n4;
    } catch (t6) {
      if (e6?.signal?.aborted || ++r3 > tS)
        throw t6;
    }
    await tE(r3);
  }
};
async function tE(t5) {
  let e6 = Math.floor(tk * (Math.random() + 1) * 2 ** (t5 - 1));
  await new Promise((t6) => {
    setTimeout(t6, e6);
  });
}
var __wholeFileCache = /* @__PURE__ */ new Map();
async function tM(t5, e6) {
  const key = String(t5);
  let bufP = __wholeFileCache.get(key);
  if (!bufP) {
    bufP = fetch(key).then(async (res) => {
      if (res.status !== 200)
        throw Error(`Request failed: ${res.status} ${res.statusText}`);
      return new Uint8Array(await res.arrayBuffer());
    });
    __wholeFileCache.set(key, bufP);
  }
  return bufP.then((buf) => e6.map((r) => buf.slice(r.from, r.to)));
}
var tT = class {
  read(t5, e6) {
    for (let r3 of this.chunks) {
      if (t5 < r3.start)
        break;
      if (t5 > r3.end)
        continue;
      if (t5 + e6 > r3.end)
        break;
      let n4 = t5 - r3.start, i3 = n4 + e6;
      return r3.data.slice(n4, i3);
    }
    throw Error("Missing data");
  }
  write(t5, e6) {
    let r3 = t5, n4 = r3 + e6.length, i3 = 0, s4 = this.chunks.length;
    for (; i3 < s4; i3++) {
      let t6 = this.chunks[i3];
      if (I(t6, "Missing chunk"), !(r3 > t6.end)) {
        if (r3 > t6.start) {
          let n5 = r3 - t6.start, i4 = t6.data.subarray(0, n5);
          e6 = tF(i4, e6), r3 = t6.start;
        }
        break;
      }
    }
    for (; s4 > i3; s4--) {
      let t6 = this.chunks[s4 - 1];
      if (I(t6, "Missing chunk"), !(n4 < t6.start)) {
        if (n4 < t6.end) {
          let r4 = n4 - t6.start, i4 = t6.data.subarray(r4);
          e6 = tF(e6, i4), n4 = t6.end;
        }
        break;
      }
    }
    let a3 = { start: r3, end: n4, data: e6 }, o4 = s4 - i3;
    this.chunks.splice(i3, o4, a3);
  }
  constructor() {
    c(this, "chunks", []);
  }
};
function tF(t5, e6) {
  let r3 = t5.length + e6.length, n4 = new Uint8Array(r3);
  return n4.set(t5, 0), n4.set(e6, t5.length), n4;
}
function tx(t5) {
  I(t5.length > 0, "Must have at least one range");
  let e6 = [...t5].sort((t6, e7) => t6.from - e7.from), r3 = [];
  for (let t6 of e6) {
    let e7 = r3.length - 1, n4 = r3[e7];
    n4 && t6.from <= n4.to ? r3[e7] = { from: n4.from, to: Math.max(n4.to, t6.to) } : r3.push(t6);
  }
  return r3;
}
var tN = class {
  async loadModel() {
    let [t5] = await tM(this.options.url, [this.options.range]);
    return I(t5, "Failed to load model"), tU.deserialize(t5);
  }
  async getModel() {
    return this.modelPromise ?? (this.modelPromise = this.loadModel()), this.model ?? (this.model = await this.modelPromise), this.model;
  }
  async lookupItems(t5) {
    I(t5.length === this.fields.length, "Invalid query length");
    let e6 = await this.getModel(), r3 = t5.reduce((t6, e7, r4) => t6.flatMap((t7) => {
      switch (e7.type) {
        case "All":
          return [t7];
        case "Equals":
          return this.queryEquals(t7, e7, r4);
        case "NotEquals":
          return this.queryNotEquals(t7, e7, r4);
        case "LessThan":
          return this.queryLessThan(t7, e7, r4);
        case "GreaterThan":
          return this.queryGreaterThan(t7, e7, r4);
        case "Contains":
          return this.queryContains(t7, e7, r4);
        case "StartsWith":
          return this.queryStartsWith(t7, e7, r4);
        case "EndsWith":
          return this.queryEndsWith(t7, e7, r4);
        default:
          b(e7);
      }
    }), [e6.entries]), n4 = [];
    for (let t6 of r3)
      for (let e7 of t6) {
        let t7 = {};
        for (let r4 = 0; r4 < this.options.fieldNames.length; r4++) {
          let n5 = this.options.fieldNames[r4], i3 = e7.values[r4];
          t7[n5] = i3;
        }
        n4.push({ pointer: e7.pointer.toString(), data: t7 });
      }
    return n4;
  }
  queryEquals(t5, e6, r3) {
    let n4 = this.getLeftMost(t5, r3, e6.value), i3 = this.getRightMost(t5, r3, e6.value), s4 = t5.slice(n4, i3 + 1);
    return s4.length > 0 ? [s4] : [];
  }
  queryNotEquals(t5, e6, r3) {
    let n4 = this.getLeftMost(t5, r3, e6.value), i3 = this.getRightMost(t5, r3, e6.value), s4 = [], a3 = t5.slice(0, n4);
    a3.length > 0 && s4.push(a3);
    let o4 = t5.slice(i3 + 1);
    return o4.length > 0 && s4.push(o4), s4;
  }
  queryLessThan(t5, e6, r3) {
    let n4 = this.getRightMost(t5, r3, null);
    if (t5 = t5.slice(n4 + 1), e6.inclusive) {
      let n5 = this.getRightMost(t5, r3, e6.value), i4 = t5.slice(0, n5 + 1);
      return i4.length > 0 ? [i4] : [];
    }
    let i3 = this.getLeftMost(t5, r3, e6.value), s4 = t5.slice(0, i3);
    return s4.length > 0 ? [s4] : [];
  }
  queryGreaterThan(t5, e6, r3) {
    let n4 = this.getRightMost(t5, r3, null);
    if (t5 = t5.slice(n4 + 1), e6.inclusive) {
      let n5 = this.getLeftMost(t5, r3, e6.value), i4 = t5.slice(n5);
      return i4.length > 0 ? [i4] : [];
    }
    let i3 = this.getRightMost(t5, r3, e6.value), s4 = t5.slice(i3 + 1);
    return s4.length > 0 ? [s4] : [];
  }
  queryContains(t5, e6, r3) {
    return this.findItems(t5, r3, (t6) => {
      if (t6?.type !== y.String || e6.value?.type !== y.String)
        return false;
      let r4 = t6.value, n4 = e6.value.value;
      return 0 === this.collation.type && (r4 = r4.toLowerCase(), n4 = n4.toLowerCase()), r4.includes(n4);
    });
  }
  queryStartsWith(t5, e6, r3) {
    return this.findItems(t5, r3, (t6) => {
      if (t6?.type !== y.String || e6.value?.type !== y.String)
        return false;
      let r4 = t6.value, n4 = e6.value.value;
      return 0 === this.collation.type && (r4 = r4.toLowerCase(), n4 = n4.toLowerCase()), r4.startsWith(n4);
    });
  }
  queryEndsWith(t5, e6, r3) {
    return this.findItems(t5, r3, (t6) => {
      if (t6?.type !== y.String || e6.value?.type !== y.String)
        return false;
      let r4 = t6.value, n4 = e6.value.value;
      return 0 === this.collation.type && (r4 = r4.toLowerCase(), n4 = n4.toLowerCase()), r4.endsWith(n4);
    });
  }
  /**
  * Returns the index of the left most entry that is equal to the target.
  *
  * ```text
  *   Left most
  *       ↓
  * ┌───┬───┬───┬───┬───┬───┐
  * │ 1 │ 2 │ 2 │ 2 │ 2 │ 3 │
  * └───┴───┴───┴───┴───┴───┘
  * ```
  *
  * @param entries The entries array to search in.
  * @param position The position of the value in the entry.
  * @param target The target value to search for.
  * @returns The index of the left most entry that is equal to the target.
  */
  getLeftMost(e6, r3, n4) {
    let i3 = 0, s4 = e6.length;
    for (; i3 < s4; ) {
      let a3 = i3 + s4 >> 1, o4 = e6[a3], u4 = o4.values[r3];
      0 > t.compare(u4, n4, this.collation) ? i3 = a3 + 1 : s4 = a3;
    }
    return i3;
  }
  /**
  * Returns the index of the right most entry that is equal to the target.
  *
  * ```text
  *              Right most
  *                   ↓
  * ┌───┬───┬───┬───┬───┬───┐
  * │ 1 │ 2 │ 2 │ 2 │ 2 │ 3 │
  * └───┴───┴───┴───┴───┴───┘
  * ```
  *
  * @param entries The entries array to search in.
  * @param position The position of the value in the entry.
  * @param target The target value to search for.
  * @returns The index of the right most entry that is equal to the target.
  */
  getRightMost(e6, r3, n4) {
    let i3 = 0, s4 = e6.length;
    for (; i3 < s4; ) {
      let a3 = i3 + s4 >> 1, o4 = e6[a3], u4 = o4.values[r3];
      t.compare(u4, n4, this.collation) > 0 ? s4 = a3 : i3 = a3 + 1;
    }
    return s4 - 1;
  }
  /**
  * Finds all items that are matching the predicate and groups adjacent items together.
  *
  * @param entries The entries array to search in.
  * @param position The position of the value in the entry.
  * @param predicate The predicate to match the values against.
  * @returns An array of chunks that match the predicate.
  */
  findItems(t5, e6, r3) {
    let n4 = [], i3 = 0;
    for (let s4 = 0; s4 < t5.length; s4++) {
      let a3 = t5[s4], o4 = a3.values[e6], u4 = r3(o4);
      if (!u4) {
        if (i3 < s4) {
          let e7 = t5.slice(i3, s4);
          n4.push(e7);
        }
        i3 = s4 + 1;
      }
    }
    if (i3 < t5.length) {
      let e7 = t5.slice(i3);
      n4.push(e7);
    }
    return n4;
  }
  constructor(t5) {
    this.options = t5, c(this, "schema"), c(this, "fields"), c(this, "supportedLookupTypes", [
      "All",
      "Equals",
      "NotEquals",
      "LessThan",
      "GreaterThan",
      "Contains",
      "StartsWith",
      "EndsWith"
      /* EndsWith */
    ]), c(this, "modelPromise"), c(this, "model"), c(this, "collation");
    let e6 = {}, r3 = [];
    for (let t6 of this.options.fieldNames) {
      let n4 = this.options.collectionSchema[t6];
      I(n4, "Missing definition for field", t6), e6[t6] = n4, r3.push({ type: "Identifier", name: t6 });
    }
    this.schema = e6, this.fields = r3, this.collation = this.options.collation;
  }
};
var tA = class e3 {
  static read(r3) {
    let n4 = new e3(), i3 = r3.readUint16();
    for (let e6 = 0; e6 < i3; e6++) {
      let e7 = r3.readString(), i4 = t.read(r3);
      n4.setField(e7, i4);
    }
    return n4;
  }
  write(e6) {
    for (let [r3, n4] of (e6.writeUint16(this.fields.size), this.fields))
      e6.writeString(r3), t.write(e6, n4);
  }
  getData() {
    let t5 = {};
    for (let [e6, r3] of this.fields)
      t5[e6] = r3;
    return t5;
  }
  setField(t5, e6) {
    this.fields.set(t5, e6);
  }
  getField(t5) {
    return this.fields.get(t5);
  }
  constructor() {
    c(this, "fields", /* @__PURE__ */ new Map());
  }
};
var tO = class {
  scanItems() {
    return this.itemsPromise ?? (this.itemsPromise = tB(this.url).then(async (t5) => {
      if (!t5.ok)
        throw Error(`Request failed: ${t5.status} ${t5.statusText}`);
      let e6 = await t5.arrayBuffer(), r3 = new Uint8Array(e6), n4 = new p(r3), i3 = [], s4 = n4.readUint32();
      for (let t6 = 0; t6 < s4; t6++) {
        let t7 = n4.getOffset(), e7 = tA.read(n4), r4 = n4.getOffset() - t7, s5 = new O(this.id, t7, r4), a3 = s5.toString(), o4 = { pointer: a3, data: e7.getData() };
        this.itemLoader.prime(a3, o4), i3.push(o4);
      }
      return i3;
    })), this.itemsPromise;
  }
  resolveItem(t5) {
    return this.itemLoader.load(t5);
  }
  constructor(t5, e6) {
    this.id = t5, this.url = e6, c(this, "itemsPromise"), c(this, "itemLoader", new d.default(async (t6) => {
      let e7 = t6.map((t7) => {
        let e8 = O.fromString(t7);
        return { from: e8.offset, to: e8.offset + e8.length };
      }), r3 = await tM(this.url, e7);
      return r3.map((e8, r4) => {
        let n4 = new p(e8), i3 = tA.read(n4), s4 = t6[r4];
        return I(s4, "Missing pointer"), { pointer: s4, data: i3.getData() };
      });
    }, { maxBatchSize: 250 }));
  }
};
var tP = class {
  async scanItems() {
    let t5 = await Promise.all(this.chunks.map(async (t6) => t6.scanItems()));
    return t5.flat();
  }
  resolveItems(t5) {
    return Promise.all(t5.map((t6) => {
      let e6 = O.fromString(t6), r3 = this.chunks[e6.chunkId];
      return I(r3, "Missing chunk"), r3.resolveItem(t6);
    }));
  }
  compareItems(t5, e6) {
    let r3 = O.fromString(t5.pointer), n4 = O.fromString(e6.pointer);
    return r3.compare(n4);
  }
  compareValues(e6, r3, n4) {
    return t.compare(e6, r3, n4);
  }
  constructor(t5) {
    this.options = t5, c(this, "id"), c(this, "schema"), c(this, "indexes"), c(this, "resolveRichText"), c(this, "resolveVectorSetItem"), c(this, "chunks"), this.chunks = this.options.chunks.map((t6, e6) => new tO(e6, t6)), this.schema = t5.schema, this.indexes = t5.indexes, this.resolveRichText = t5.resolveRichText, this.resolveVectorSetItem = t5.resolveVectorSetItem, this.id = t5.id;
  }
};

// http-url:https://framerusercontent.com/modules/u39xhU6fUj657odBl4Xm/I448n51LV8RC7ipFz3NB/TWHZahxMp-1.js
import { jsx as e4 } from "react/jsx-runtime";
import { AutoBreakpointVariant as t3, ComponentPresetsConsumer as r2, Link as n2, motion as o2 } from "./_framer-runtime.js";
import { isValidElement as i2 } from "react";
import { Fragment as p2, createElement as s2 } from "react";
var a2;
var l2 = "undefined" != typeof __dai_window;
var f2 = l2 && "function" == typeof __dai_window.requestIdleCallback;
var u2 = "preload";
function c2(e6) {
  return "object" == typeof e6 && null !== e6 && !/* @__PURE__ */ i2(e6) && u2 in e6;
}
function m2(e6, ...t5) {
  if (!e6)
    throw Error("Assertion Error" + (t5.length > 0 ? ": " + t5.join(" ") : ""));
}
var d2 = ((a2 = d2 || {})[a2.Fragment = 1] = "Fragment", a2[a2.Link = 2] = "Link", a2[a2.Module = 3] = "Module", a2[a2.Tag = 4] = "Tag", a2[a2.Text = 5] = "Text", a2);
function g2(i3) {
  let a3 = /* @__PURE__ */ new Map();
  return (l4) => {
    let f4 = a3.get(l4);
    if (f4)
      return f4;
    let u4 = JSON.parse(l4), d4 = function a4(l5) {
      switch (l5[0]) {
        case 1: {
          let [, ...e6] = l5, t5 = e6.map(a4);
          return /* @__PURE__ */ s2(p2, void 0, ...t5);
        }
        case 2: {
          let [, e6, ...t5] = l5, r3 = t5.map(a4);
          return /* @__PURE__ */ s2(n2, e6, ...r3);
        }
        case 3: {
          let [, n4, o4, f5, u5] = l5;
          for (let e6 of f5) {
            let t5 = o4[e6];
            t5 && (o4[e6] = a4(t5));
          }
          for (let e6 of u5) {
            let t5 = o4[e6];
            if ("string" != typeof t5)
              continue;
            let r3 = i3[t5];
            r3 && (c2(r3) && r3.preload(), o4[e6] = r3);
          }
          let p4 = i3[n4];
          return m2(p4, "Module not found"), c2(p4) && p4.preload(), /* @__PURE__ */ e4(r2, { componentIdentifier: n4, children: (r3) => /* @__PURE__ */ e4(t3, { component: p4, props: { ...r3, ...o4 } }) });
        }
        case 4: {
          let [, e6, t5, ...r3] = l5, n4 = r3.map(a4);
          if ("a" === e6)
            return /* @__PURE__ */ s2(o2.a, t5, ...n4);
          return /* @__PURE__ */ s2(e6, t5, ...n4);
        }
        case 5: {
          let [, e6] = l5;
          return e6;
        }
      }
    }(u4);
    return a3.set(l4, d4), d4;
  };
}

// http-url:https://framerusercontent.com/modules/u39xhU6fUj657odBl4Xm/I448n51LV8RC7ipFz3NB/TWHZahxMp.js
var o3 = { aPnMXgj03: { isNullable: true, type: l3.Boolean }, createdAt: { isNullable: true, type: l3.Date }, csLuHnld1: { isNullable: true, type: l3.Date }, ewNw3V74U: { isNullable: true, type: l3.ResponsiveImage }, id: { isNullable: false, type: l3.String }, Kh8Gry2oe: { isNullable: true, type: l3.String }, nextItemId: { isNullable: true, type: l3.String }, previousItemId: { isNullable: true, type: l3.String }, rX8w5QpCr: { isNullable: true, type: l3.RichText }, TW6CR4xWI: { isNullable: true, type: l3.String }, updatedAt: { isNullable: true, type: l3.Date }, Vf4SyxiE5: { isNullable: true, type: l3.Boolean }, XLYJvQM4P: { isNullable: true, type: l3.String } };
var m3 = ["id"];
var n3 = { type: 1 };
var c3 = ["previousItemId"];
var u3 = ["nextItemId"];
var d3 = ["id", "XLYJvQM4P"];
var p3 = ["XLYJvQM4P", "id"];
var s3 = ["TW6CR4xWI"];
var f3 = { type: 0 };
var h2 = ["XLYJvQM4P"];
var y2 = ["ewNw3V74U"];
var x2 = ["csLuHnld1"];
var w2 = ["aPnMXgj03"];
var g3 = ["Vf4SyxiE5"];
var L2 = ["Kh8Gry2oe"];
var N2 = ["rX8w5QpCr"];
var M2 = [];
var S2 = (e6) => {
  let l4 = M2[e6];
  if (l4)
    return l4().then((e7) => e7.default);
};
var T2 = {};
var I2 = g2(T2);
var R2 = new t4();
var W2 = { collectionByLocaleId: { default: new tP({ chunks: ["https://framerusercontent.com/modules/u39xhU6fUj657odBl4Xm/I448n51LV8RC7ipFz3NB/TWHZahxMp-chunk-default-0.framercms"], id: "2141e47c-9c6d-40e4-9b34-e6c96a913dabdefault", indexes: [new tN({ collation: n3, collectionSchema: o3, fieldNames: m3, range: { from: 0, to: 145 }, url: "https://framerusercontent.com/modules/u39xhU6fUj657odBl4Xm/I448n51LV8RC7ipFz3NB/TWHZahxMp-indexes-default-0.framercms" }), new tN({ collation: n3, collectionSchema: o3, fieldNames: c3, range: { from: 145, to: 289 }, url: "https://framerusercontent.com/modules/u39xhU6fUj657odBl4Xm/I448n51LV8RC7ipFz3NB/TWHZahxMp-indexes-default-0.framercms" }), new tN({ collation: n3, collectionSchema: o3, fieldNames: u3, range: { from: 289, to: 429 }, url: "https://framerusercontent.com/modules/u39xhU6fUj657odBl4Xm/I448n51LV8RC7ipFz3NB/TWHZahxMp-indexes-default-0.framercms" }), new tN({ collation: n3, collectionSchema: o3, fieldNames: d3, range: { from: 429, to: 884 }, url: "https://framerusercontent.com/modules/u39xhU6fUj657odBl4Xm/I448n51LV8RC7ipFz3NB/TWHZahxMp-indexes-default-0.framercms" }), new tN({ collation: n3, collectionSchema: o3, fieldNames: p3, range: { from: 884, to: 1339 }, url: "https://framerusercontent.com/modules/u39xhU6fUj657odBl4Xm/I448n51LV8RC7ipFz3NB/TWHZahxMp-indexes-default-0.framercms" }), new tN({ collation: f3, collectionSchema: o3, fieldNames: s3, range: { from: 1339, to: 1719 }, url: "https://framerusercontent.com/modules/u39xhU6fUj657odBl4Xm/I448n51LV8RC7ipFz3NB/TWHZahxMp-indexes-default-0.framercms" }), new tN({ collation: f3, collectionSchema: o3, fieldNames: h2, range: { from: 1719, to: 2098 }, url: "https://framerusercontent.com/modules/u39xhU6fUj657odBl4Xm/I448n51LV8RC7ipFz3NB/TWHZahxMp-indexes-default-0.framercms" }), new tN({ collation: f3, collectionSchema: o3, fieldNames: y2, range: { from: 2098, to: 4935 }, url: "https://framerusercontent.com/modules/u39xhU6fUj657odBl4Xm/I448n51LV8RC7ipFz3NB/TWHZahxMp-indexes-default-0.framercms" }), new tN({ collation: f3, collectionSchema: o3, fieldNames: x2, range: { from: 4935, to: 5062 }, url: "https://framerusercontent.com/modules/u39xhU6fUj657odBl4Xm/I448n51LV8RC7ipFz3NB/TWHZahxMp-indexes-default-0.framercms" }), new tN({ collation: f3, collectionSchema: o3, fieldNames: w2, range: { from: 5062, to: 5154 }, url: "https://framerusercontent.com/modules/u39xhU6fUj657odBl4Xm/I448n51LV8RC7ipFz3NB/TWHZahxMp-indexes-default-0.framercms" }), new tN({ collation: f3, collectionSchema: o3, fieldNames: g3, range: { from: 5154, to: 5246 }, url: "https://framerusercontent.com/modules/u39xhU6fUj657odBl4Xm/I448n51LV8RC7ipFz3NB/TWHZahxMp-indexes-default-0.framercms" }), new tN({ collation: f3, collectionSchema: o3, fieldNames: L2, range: { from: 5246, to: 7419 }, url: "https://framerusercontent.com/modules/u39xhU6fUj657odBl4Xm/I448n51LV8RC7ipFz3NB/TWHZahxMp-indexes-default-0.framercms" }), new tN({ collation: f3, collectionSchema: o3, fieldNames: N2, range: { from: 7419, to: 25690 }, url: "https://framerusercontent.com/modules/u39xhU6fUj657odBl4Xm/I448n51LV8RC7ipFz3NB/TWHZahxMp-indexes-default-0.framercms" })], resolveRichText: I2, resolveVectorSetItem: S2, schema: o3 }) }, displayName: "Magazine", id: "2141e47c-9c6d-40e4-9b34-e6c96a913dab" };
var TWHZahxMp_default = W2;
e5(W2, { TW6CR4xWI: { defaultValue: "", title: "Title", type: l3.String }, XLYJvQM4P: { preventLocalization: true, title: "Slug", type: l3.String }, ewNw3V74U: { title: "Thumbnail", type: l3.ResponsiveImage }, csLuHnld1: { title: "Published", type: l3.Date }, aPnMXgj03: { defaultValue: false, title: "Featured", type: l3.Boolean }, Vf4SyxiE5: { defaultValue: false, title: "Highlighted", type: l3.Boolean }, Kh8Gry2oe: { defaultValue: "", displayTextArea: true, title: "Overview", type: l3.String }, rX8w5QpCr: { defaultValue: "", title: "Content", type: l3.RichText }, createdAt: { title: "Created", type: l3.Date }, updatedAt: { title: "Updated", type: l3.Date }, previousItemId: { dataIdentifier: "local-module:collection/TWHZahxMp:default", title: "Previous", type: l3.CollectionReference }, nextItemId: { dataIdentifier: "local-module:collection/TWHZahxMp:default", title: "Next", type: l3.CollectionReference } });

// http-url:https://framerusercontent.com/modules/aLOYSRZJWqY8fPpcSlm6/eS2ABocNwNfvmWb0Iodh/h36udAO3c.js
import { fontStore } from "./_framer-runtime.js";
fontStore.loadFonts(["Inter-Variable", "Inter-Bold", "Inter-BoldItalic", "Inter-Italic"]);
var variationAxes = [{ defaultValue: 14, maxValue: 32, minValue: 14, name: "Optical size", tag: "opsz" }, { defaultValue: 400, maxValue: 900, minValue: 100, name: "Weight", tag: "wght" }];
var fonts = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/mYcqTSergLb16PdbJJQMl9ebYm4.woff2", variationAxes, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2", variationAxes, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2", variationAxes, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/DYHjxG0qXjopUuruoacfl5SA.woff2", variationAxes, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2", variationAxes, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2", variationAxes, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2", variationAxes, weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/ia3uin3hQWqDrVloC1zEtYHWw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/pKRFNWFoZl77qYCAIp84lN1h944.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2", weight: "400" }] }];
var css = ['.framer-1CQHA .framer-styles-preset-r0nisa:not(.rich-text-wrapper), .framer-1CQHA .framer-styles-preset-r0nisa.rich-text-wrapper p { --framer-font-family: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: "opsz" 14, "wght" 525; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.03em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }'];
var className = "framer-1CQHA";

// http-url:https://framerusercontent.com/modules/YR8eaKIcZq1lxn0G2QCZ/UK3BtzmfLMAF1qZ2J2Dm/Hme2S1hiD.js
import { fontStore as fontStore2 } from "./_framer-runtime.js";
fontStore2.loadFonts(["Inter-Variable", "Inter-Bold", "Inter-BoldItalic", "Inter-Italic"]);
var variationAxes2 = [{ defaultValue: 14, maxValue: 32, minValue: 14, name: "Optical size", tag: "opsz" }, { defaultValue: 400, maxValue: 900, minValue: 100, name: "Weight", tag: "wght" }];
var fonts2 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/mYcqTSergLb16PdbJJQMl9ebYm4.woff2", variationAxes: variationAxes2, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2", variationAxes: variationAxes2, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2", variationAxes: variationAxes2, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/DYHjxG0qXjopUuruoacfl5SA.woff2", variationAxes: variationAxes2, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2", variationAxes: variationAxes2, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2", variationAxes: variationAxes2, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2", variationAxes: variationAxes2, weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/ia3uin3hQWqDrVloC1zEtYHWw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/pKRFNWFoZl77qYCAIp84lN1h944.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2", weight: "400" }] }];
var css2 = ['.framer-Hau7Q .framer-styles-preset-bnfmu7:not(.rich-text-wrapper), .framer-Hau7Q .framer-styles-preset-bnfmu7.rich-text-wrapper p { --framer-font-family: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: "opsz" 14, "wght" 575; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.03em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }'];
var className2 = "framer-Hau7Q";

// http-url:https://framerusercontent.com/modules/FK7vXbt40rlBdIGfYYv5/72El9qx7FAfppwYFrm3J/nV6XvMHlN.js
import { fontStore as fontStore3 } from "./_framer-runtime.js";
fontStore3.loadFonts(["Inter-Variable", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNjI1", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNjI1", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNjI1"]);
var variationAxes3 = [{ defaultValue: 14, maxValue: 32, minValue: 14, name: "Optical size", tag: "opsz" }, { defaultValue: 400, maxValue: 900, minValue: 100, name: "Weight", tag: "wght" }];
var fonts3 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/mYcqTSergLb16PdbJJQMl9ebYm4.woff2", variationAxes: variationAxes3, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2", variationAxes: variationAxes3, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2", variationAxes: variationAxes3, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/DYHjxG0qXjopUuruoacfl5SA.woff2", variationAxes: variationAxes3, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2", variationAxes: variationAxes3, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2", variationAxes: variationAxes3, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2", variationAxes: variationAxes3, weight: "400" }] }];
var css3 = ['.framer-LcxX3 .framer-styles-preset-1cs224s:not(.rich-text-wrapper), .framer-LcxX3 .framer-styles-preset-1cs224s.rich-text-wrapper h3 { --framer-font-family: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 32px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "opsz" 14, "wght" 625; --framer-font-variation-axes-bold: "opsz" 14, "wght" 625; --framer-font-variation-axes-bold-italic: "opsz" 14, "wght" 625; --framer-font-variation-axes-italic: "opsz" 14, "wght" 625; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.05em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }'];
var className3 = "framer-LcxX3";

// http-url:https://framerusercontent.com/modules/LAsYFcfgCfLCeC4neoat/RobgVz10gUfJAP51tGmm/RoRGeZoiF.js
import { fontStore as fontStore4 } from "./_framer-runtime.js";
fontStore4.loadFonts(["GF;Ranchers-regular"]);
var fonts4 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Ranchers", source: "google", style: "normal", uiFamilyName: "Ranchers", url: "https://fonts.gstatic.com/s/ranchers/v19/zrfm0H3Lx-P2Xvs2AoDdDC79XTHv.woff2", weight: "400" }] }];
var css4 = ['.framer-aSX0A .framer-styles-preset-tsnpik:not(.rich-text-wrapper), .framer-aSX0A .framer-styles-preset-tsnpik.rich-text-wrapper h2 { --framer-font-family: "Ranchers", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 120px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: -0.01em; --framer-line-height: 1em; --framer-paragraph-spacing: 10px; --framer-text-alignment: center; --framer-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }', '@media (max-width: 1199px) and (min-width: 810px) { .framer-aSX0A .framer-styles-preset-tsnpik:not(.rich-text-wrapper), .framer-aSX0A .framer-styles-preset-tsnpik.rich-text-wrapper h2 { --framer-font-family: "Ranchers", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 110px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: -0.01em; --framer-line-height: 1em; --framer-paragraph-spacing: 10px; --framer-text-alignment: center; --framer-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }', '@media (max-width: 809px) and (min-width: 0px) { .framer-aSX0A .framer-styles-preset-tsnpik:not(.rich-text-wrapper), .framer-aSX0A .framer-styles-preset-tsnpik.rich-text-wrapper h2 { --framer-font-family: "Ranchers", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 70px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: -0.01em; --framer-line-height: 1em; --framer-paragraph-spacing: 10px; --framer-text-alignment: center; --framer-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }'];
var className4 = "framer-aSX0A";

// http-url:https://framerusercontent.com/modules/WcEuKCPb8gqa5MbhnYh2/G4iCHQvj21XG4587G8RY/uqBUPUQHk.js
import { fontStore as fontStore5 } from "./_framer-runtime.js";
fontStore5.loadFonts(["Inter-Variable", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNzUw", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNzUw", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNzUw"]);
var variationAxes4 = [{ defaultValue: 14, maxValue: 32, minValue: 14, name: "Optical size", tag: "opsz" }, { defaultValue: 400, maxValue: 900, minValue: 100, name: "Weight", tag: "wght" }];
var fonts5 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/mYcqTSergLb16PdbJJQMl9ebYm4.woff2", variationAxes: variationAxes4, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2", variationAxes: variationAxes4, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2", variationAxes: variationAxes4, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/DYHjxG0qXjopUuruoacfl5SA.woff2", variationAxes: variationAxes4, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2", variationAxes: variationAxes4, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2", variationAxes: variationAxes4, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2", variationAxes: variationAxes4, weight: "400" }] }];
var css5 = ['.framer-kdSVA .framer-styles-preset-1xcc6ic:not(.rich-text-wrapper), .framer-kdSVA .framer-styles-preset-1xcc6ic.rich-text-wrapper h3 { --framer-font-family: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 32px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "opsz" 14, "wght" 750; --framer-font-variation-axes-bold: "opsz" 14, "wght" 750; --framer-font-variation-axes-bold-italic: "opsz" 14, "wght" 750; --framer-font-variation-axes-italic: "opsz" 14, "wght" 750; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.05em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }'];
var className5 = "framer-kdSVA";

// http-url:https://framerusercontent.com/modules/Fs5VQrVyKoruA9COVjYx/V45WQoTRvnjjKwxyThBd/wggGXhZaC.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addPropertyControls, ControlType, cx, motion, withCSS } from "./_framer-runtime.js";
import * as React from "react";
import { forwardRef as forwardRef2 } from "react";
var mask = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 0 39.757 L 38.539 1.218 C 39.317 0.438 40.373 0 41.475 0 C 42.577 0 43.633 0.438 44.411 1.218 L 82.95 39.757 M 41.475 14.872 L 41.475 81.232" fill="transparent" height="81.23205219268812px" id="jOHsmej4_" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="16.59" stroke="var(--118a55, var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)))" transform="translate(8.5 9.51) rotate(90 41.475 40.616)" width="82.95000000000005px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`;
var SVG = /* @__PURE__ */ forwardRef2((props, ref) => {
  const { animated, layoutId, children, ...rest } = props;
  return animated ? /* @__PURE__ */ _jsx(motion.div, { ...rest, layoutId, ref }) : /* @__PURE__ */ _jsx("div", { ...rest, ref });
});
var getProps = ({ color, height, id, width, ...props }) => {
  return { ...props, GaDHsaDms: color ?? props.GaDHsaDms ?? "var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0))" };
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const { style, className: className10, layoutId, variant, GaDHsaDms, ...restProps } = getProps(props);
  return /* @__PURE__ */ _jsx(SVG, { ...restProps, className: cx("framer-ZtDxP", className10), layoutId, ref, style: { "--118a55": GaDHsaDms, ...style } });
});
var css6 = [`.framer-ZtDxP { -webkit-mask: ${mask}; aspect-ratio: 1; background-color: var(--118a55); mask: ${mask}; width: 100px; }`];
var Icon = withCSS(Component, css6, "framer-ZtDxP");
Icon.displayName = "Arrow Right";
var wggGXhZaC_default = Icon;
addPropertyControls(Icon, { GaDHsaDms: { defaultValue: 'var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)) /* {"name":"Icon Black"} */', hidden: false, title: "Color", type: ControlType.Color } });

// http-url:https://framerusercontent.com/modules/Q6x5X7qRr7rs52lYoDHh/YAf2l2mu6UwBwSZMPn3Z/AF0NNkhvm.js
import { jsx as _jsx4, jsxs as _jsxs2 } from "react/jsx-runtime";
import { addFonts as addFonts2, addPropertyControls as addPropertyControls4, ComponentViewportProvider, ControlType as ControlType4, cx as cx4, forwardLoader, getFonts, getFontsFromSharedStyle as getFontsFromSharedStyle2, RichText as RichText2, SmartComponentScopedContainer, useActiveVariantCallback as useActiveVariantCallback2, useComponentViewport as useComponentViewport2, useLocaleInfo as useLocaleInfo2, useVariantState as useVariantState2, withCSS as withCSS4 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup2, motion as motion4, MotionConfigContext as MotionConfigContext2 } from "framer-motion";
import * as React4 from "react";
import { useRef as useRef2 } from "react";

// http-url:https://framerusercontent.com/modules/pViJj926CBy444h3AYfq/yXDe2VVQ9pDsXbJlmrXJ/CT_DBbR5R.js
import { fontStore as fontStore6 } from "./_framer-runtime.js";
fontStore6.loadFonts(["Inter-Variable", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNTUw", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNTUw", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNTUw"]);
var variationAxes5 = [{ defaultValue: 14, maxValue: 32, minValue: 14, name: "Optical size", tag: "opsz" }, { defaultValue: 400, maxValue: 900, minValue: 100, name: "Weight", tag: "wght" }];
var fonts6 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/mYcqTSergLb16PdbJJQMl9ebYm4.woff2", variationAxes: variationAxes5, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2", variationAxes: variationAxes5, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2", variationAxes: variationAxes5, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/DYHjxG0qXjopUuruoacfl5SA.woff2", variationAxes: variationAxes5, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2", variationAxes: variationAxes5, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2", variationAxes: variationAxes5, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2", variationAxes: variationAxes5, weight: "400" }] }];
var css7 = ['.framer-fQ51O .framer-styles-preset-5rfdkx:not(.rich-text-wrapper), .framer-fQ51O .framer-styles-preset-5rfdkx.rich-text-wrapper p { --framer-font-family: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "opsz" 14, "wght" 550; --framer-font-variation-axes-bold: "opsz" 14, "wght" 550; --framer-font-variation-axes-bold-italic: "opsz" 14, "wght" 550; --framer-font-variation-axes-italic: "opsz" 14, "wght" 550; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }'];
var className6 = "framer-fQ51O";

// http-url:https://framerusercontent.com/modules/wiZWlA4BR8fzseCgtm7P/akYCWSJ0yjhEdJSBwHED/Hrf2VVQ5F.js
import { jsx as _jsx2 } from "react/jsx-runtime";
import { addPropertyControls as addPropertyControls2, ControlType as ControlType2, cx as cx2, motion as motion2, withCSS as withCSS2 } from "./_framer-runtime.js";
import * as React2 from "react";
import { forwardRef as forwardRef4 } from "react";
var mask2 = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 0 25 C 0 11.193 11.193 0 25 0 L 75 0 C 88.807 0 100 11.193 100 25 L 100 75 C 100 88.807 88.807 100 75 100 L 25 100 C 11.193 100 0 88.807 0 75 Z M 66.5 75 C 68.078 75 69.521 74.108 70.227 72.697 C 70.933 71.285 70.78 69.596 69.833 68.333 L 49 41.667 C 48.209 40.681 47.014 40.107 45.75 40.107 C 44.486 40.107 43.291 40.681 42.5 41.667 L 21.917 68.333 C 20.97 69.596 20.817 71.285 21.523 72.697 C 22.229 74.108 23.672 75 25.25 75 Z M 62.5 27.083 C 62.5 32.836 67.164 37.5 72.917 37.5 C 78.67 37.5 83.333 32.836 83.333 27.083 C 83.333 21.33 78.67 16.667 72.917 16.667 C 67.164 16.667 62.5 21.33 62.5 27.083 Z" fill="var(--118a55, var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)))" height="100px" id="fW412M7Ut" width="100px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`;
var SVG2 = /* @__PURE__ */ forwardRef4((props, ref) => {
  const { animated, layoutId, children, ...rest } = props;
  return animated ? /* @__PURE__ */ _jsx2(motion2.div, { ...rest, layoutId, ref }) : /* @__PURE__ */ _jsx2("div", { ...rest, ref });
});
var getProps2 = ({ color, height, id, width, ...props }) => {
  return { ...props, GaDHsaDms: color ?? props.GaDHsaDms ?? "var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0))" };
};
var Component2 = /* @__PURE__ */ React2.forwardRef(function(props, ref) {
  const { style, className: className10, layoutId, variant, GaDHsaDms, ...restProps } = getProps2(props);
  return /* @__PURE__ */ _jsx2(SVG2, { ...restProps, className: cx2("framer-yRL2U", className10), layoutId, ref, style: { "--118a55": GaDHsaDms, ...style } });
});
var css8 = [`.framer-yRL2U { -webkit-mask: ${mask2}; aspect-ratio: 1; background-color: var(--118a55); mask: ${mask2}; width: 100px; }`];
var Icon2 = withCSS2(Component2, css8, "framer-yRL2U");
Icon2.displayName = "Image";
var Hrf2VVQ5F_default = Icon2;
addPropertyControls2(Icon2, { GaDHsaDms: { defaultValue: 'var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)) /* {"name":"Icon Black"} */', hidden: false, title: "Color", type: ControlType2.Color } });

// http-url:https://framerusercontent.com/modules/W7GoYx7cj4C0BBuRZ3Ae/1xC8yhl2LAQMBIM4s4B6/b_m5Js9Ir.js
import { jsx as _jsx3, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls as addPropertyControls3, ControlType as ControlType3, cx as cx3, getFontsFromSharedStyle, Instance, Link, RichText, useActiveVariantCallback, useComponentViewport, useLocaleInfo, useVariantState, withCSS as withCSS3 } from "./_framer-runtime.js";
import { LayoutGroup, motion as motion3, MotionConfigContext } from "framer-motion";
import * as React3 from "react";
import { useRef } from "react";

// http-url:https://framerusercontent.com/modules/y2d0OkoyRx7p7dPgjusY/4YW2URfY9snHeO527GYC/kw43ePOKN.js
import { fontStore as fontStore7 } from "./_framer-runtime.js";
fontStore7.loadFonts(["Inter-Variable", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNTI1", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNTI1", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNTI1"]);
var variationAxes6 = [{ defaultValue: 14, maxValue: 32, minValue: 14, name: "Optical size", tag: "opsz" }, { defaultValue: 400, maxValue: 900, minValue: 100, name: "Weight", tag: "wght" }];
var fonts7 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/mYcqTSergLb16PdbJJQMl9ebYm4.woff2", variationAxes: variationAxes6, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2", variationAxes: variationAxes6, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2", variationAxes: variationAxes6, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/DYHjxG0qXjopUuruoacfl5SA.woff2", variationAxes: variationAxes6, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2", variationAxes: variationAxes6, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2", variationAxes: variationAxes6, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2", variationAxes: variationAxes6, weight: "400" }] }];
var css9 = ['.framer-KthDU .framer-styles-preset-10suf4d:not(.rich-text-wrapper), .framer-KthDU .framer-styles-preset-10suf4d.rich-text-wrapper p { --framer-font-family: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 13px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "opsz" 14, "wght" 525; --framer-font-variation-axes-bold: "opsz" 14, "wght" 525; --framer-font-variation-axes-bold-italic: "opsz" 14, "wght" 525; --framer-font-variation-axes-italic: "opsz" 14, "wght" 525; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }'];
var className7 = "framer-KthDU";

// http-url:https://framerusercontent.com/modules/pmoggTWmhxccZ8VWFvMy/CwgfCjbZuajs7tE5WxYA/ocOde6Lm9.js
import { fontStore as fontStore8 } from "./_framer-runtime.js";
fontStore8.loadFonts(["Inter-Variable", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNjI1", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNjI1", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNjI1"]);
var variationAxes7 = [{ defaultValue: 14, maxValue: 32, minValue: 14, name: "Optical size", tag: "opsz" }, { defaultValue: 400, maxValue: 900, minValue: 100, name: "Weight", tag: "wght" }];
var fonts8 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/mYcqTSergLb16PdbJJQMl9ebYm4.woff2", variationAxes: variationAxes7, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2", variationAxes: variationAxes7, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2", variationAxes: variationAxes7, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/DYHjxG0qXjopUuruoacfl5SA.woff2", variationAxes: variationAxes7, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2", variationAxes: variationAxes7, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2", variationAxes: variationAxes7, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2", variationAxes: variationAxes7, weight: "400" }] }];
var css10 = ['.framer-hoAO6 .framer-styles-preset-1v7qm6:not(.rich-text-wrapper), .framer-hoAO6 .framer-styles-preset-1v7qm6.rich-text-wrapper p { --framer-font-family: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 13px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "opsz" 14, "wght" 625; --framer-font-variation-axes-bold: "opsz" 14, "wght" 625; --framer-font-variation-axes-bold-italic: "opsz" 14, "wght" 625; --framer-font-variation-axes-italic: "opsz" 14, "wght" 625; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.04em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }'];
var className8 = "framer-hoAO6";

// http-url:https://framerusercontent.com/modules/W7GoYx7cj4C0BBuRZ3Ae/1xC8yhl2LAQMBIM4s4B6/b_m5Js9Ir.js
var enabledGestures = { fGebBpVaS: { hover: true }, zq5haw0aW: { hover: true } };
var cycleOrder = ["fGebBpVaS", "zq5haw0aW"];
var serializationHash = "framer-MYjR9";
var variantClassNames = { fGebBpVaS: "framer-v-1o0lmo4", zq5haw0aW: "framer-v-ae5cq4" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var Transition = ({ value, children }) => {
  const config = React3.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React3.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx3(MotionConfigContext.Provider, { value: contextValue, children });
};
var humanReadableVariantMap = { Primary: "fGebBpVaS", Secondary: "zq5haw0aW" };
var Variants = motion3.create(React3.Fragment);
var getProps3 = ({ click, height, icon, id, link, showIcon, title, width, ...props }) => {
  return { ...props, DY2dzgeiO: click ?? props.DY2dzgeiO, hZdVwdl_Y: showIcon ?? props.hZdVwdl_Y, peKL8pfJA: icon ?? props.peKL8pfJA ?? wggGXhZaC_default, TDPWRYXxk: title ?? props.TDPWRYXxk ?? "Button", variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "fGebBpVaS", vFRI3q06T: link ?? props.vFRI3q06T };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component3 = /* @__PURE__ */ React3.forwardRef(function(props, ref) {
  const fallbackRef = useRef(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React3.useId();
  const { activeLocale, setLocale } = useLocaleInfo();
  const componentViewport = useComponentViewport();
  const { style, className: className10, layoutId, variant, TDPWRYXxk, vFRI3q06T, DY2dzgeiO, peKL8pfJA, hZdVwdl_Y, ...restProps } = getProps3(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "fGebBpVaS", enabledGestures, ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const { activeVariantCallback, delay } = useActiveVariantCallback(baseVariant);
  const onTappg0bwd = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false });
    if (DY2dzgeiO) {
      const res = await DY2dzgeiO(...args);
      if (res === false)
        return false;
    }
  });
  const sharedStyleClassNames = [className8, className7];
  const scopingClassNames = cx3(serializationHash, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx3(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx3(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx3(Transition, { value: transition1, children: /* @__PURE__ */ _jsx3(Link, { href: vFRI3q06T, motionChild: true, nodeId: "fGebBpVaS", openInNewTab: false, scopeId: "b_m5Js9Ir", children: /* @__PURE__ */ _jsxs(motion3.a, { ...restProps, ...gestureHandlers, className: `${cx3(scopingClassNames, "framer-1o0lmo4", className10, classNames)} framer-1oaml23`, "data-framer-name": "Primary", "data-highlight": true, draggable: "false", layoutDependency, layoutId: "MainMagazine__fGebBpVaS", onTap: onTappg0bwd, ref: refBinding, style: { backgroundColor: "var(--token-8ef28781-a0a2-43db-933d-3d729ae85487, rgb(0, 81, 255))", borderBottomLeftRadius: 100, borderBottomRightRadius: 100, borderTopLeftRadius: 100, borderTopRightRadius: 100, ...style }, variants: { "fGebBpVaS-hover": { backgroundColor: "var(--token-d5dcd97d-793f-4a02-b4b2-f1cfb443a4e6, rgb(0, 102, 255))" }, "zq5haw0aW-hover": { backgroundColor: "var(--token-8bac5f11-507c-413f-b3a4-632beefe55cb, rgb(227, 227, 227))" }, zq5haw0aW: { backgroundColor: "var(--token-ef4d7bc1-0431-483d-9665-aeb18fbabc63, rgb(237, 237, 237))" } }, ...addPropertyOverrides({ "fGebBpVaS-hover": { "data-framer-name": void 0 }, "zq5haw0aW-hover": { "data-framer-name": void 0 }, zq5haw0aW: { "data-framer-name": "Secondary" } }, baseVariant, gestureVariant), children: [hZdVwdl_Y !== false && /* @__PURE__ */ _jsx3(Instance, { animated: true, className: "framer-1qra2si", Component: peKL8pfJA, layoutDependency, layoutId: "MainMagazine__yMwwNckn2", style: { "--118a55": "var(--token-c4652695-7f66-461d-9ec5-551c9e0af1d0, rgb(255, 255, 255))" }, variants: { zq5haw0aW: { "--118a55": "var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0))" } } }), /* @__PURE__ */ _jsx3(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx3(React3.Fragment, { children: /* @__PURE__ */ _jsx3(motion3.p, { className: "framer-styles-preset-1v7qm6", "data-styles-preset": "ocOde6Lm9", dir: "auto", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-e0ec22b8-2ee9-41b9-9c9b-068af203c374, rgb(255, 255, 255)))" }, children: "Join Waitlist" }) }), className: "framer-1iwjqtp", fonts: ["Inter"], layoutDependency, layoutId: "MainMagazine__E50KQQY7B", style: { "--extracted-r6o4lv": "var(--token-e0ec22b8-2ee9-41b9-9c9b-068af203c374, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, text: TDPWRYXxk, variants: { zq5haw0aW: { "--extracted-r6o4lv": "var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, rgb(0, 0, 0))" } }, verticalAlignment: "top", withExternalLayout: true, ...addPropertyOverrides({ zq5haw0aW: { children: /* @__PURE__ */ _jsx3(React3.Fragment, { children: /* @__PURE__ */ _jsx3(motion3.p, { className: "framer-styles-preset-10suf4d", "data-styles-preset": "kw43ePOKN", dir: "auto", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, rgb(0, 0, 0)))" }, children: "Button" }) }) } }, baseVariant, gestureVariant) })] }) }) }) }) });
});
var css11 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-MYjR9.framer-1oaml23, .framer-MYjR9 .framer-1oaml23 { display: block; }", ".framer-MYjR9.framer-1o0lmo4 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 7px 14px 7px 14px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-MYjR9 .framer-1qra2si { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 10px); position: relative; width: 10px; }", ".framer-MYjR9 .framer-1iwjqtp { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 2; }", ...css10, ...css9];
var Framerb_m5Js9Ir = withCSS3(Component3, css11, "framer-MYjR9");
var b_m5Js9Ir_default = Framerb_m5Js9Ir;
Framerb_m5Js9Ir.displayName = "Button";
Framerb_m5Js9Ir.defaultProps = { height: 29.5, width: 66 };
addPropertyControls3(Framerb_m5Js9Ir, { variant: { options: ["fGebBpVaS", "zq5haw0aW"], optionTitles: ["Primary", "Secondary"], title: "Variant", type: ControlType3.Enum }, TDPWRYXxk: { defaultValue: "Button", displayTextArea: false, title: "Title", type: ControlType3.String }, onTDPWRYXxkChange: { changes: "TDPWRYXxk", type: ControlType3.ChangeHandler }, vFRI3q06T: { title: "Link", type: ControlType3.Link }, DY2dzgeiO: { title: "Click", type: ControlType3.EventHandler }, peKL8pfJA: { defaultValue: { identifier: "local-module:vector/wggGXhZaC:default", moduleId: "Fs5VQrVyKoruA9COVjYx" }, setModuleId: "v49rTnsQ31Y5gd6DySlU", title: "Icon", type: ControlType3.VectorSetItem }, hZdVwdl_Y: { defaultValue: false, title: "Show Icon", type: ControlType3.Boolean }, onhZdVwdl_YChange: { changes: "hZdVwdl_Y", type: ControlType3.ChangeHandler } });
addFonts(Framerb_m5Js9Ir, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...getFontsFromSharedStyle(fonts8), ...getFontsFromSharedStyle(fonts7)], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/Q6x5X7qRr7rs52lYoDHh/YAf2l2mu6UwBwSZMPn3Z/AF0NNkhvm.js
var Image1Fonts = getFonts(Hrf2VVQ5F_default);
var ButtonFonts = getFonts(b_m5Js9Ir_default);
var serializationHash2 = "framer-pMrlr";
var variantClassNames2 = { yN6Aplgzb: "framer-v-e746oh" };
var transition12 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var matchVariant = (...args) => {
  for (const arg of args) {
    if (arg && typeof arg === "string")
      return arg;
  }
  return void 0;
};
var Transition2 = ({ value, children }) => {
  const config = React4.useContext(MotionConfigContext2);
  const transition = value ?? config.transition;
  const contextValue = React4.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx4(MotionConfigContext2.Provider, { value: contextValue, children });
};
var Variants2 = motion4.create(React4.Fragment);
var getProps4 = ({ height, id, resetFilters, width, ...props }) => {
  return { ...props, cIQQTftsx: resetFilters ?? props.cIQQTftsx };
};
var createLayoutDependency2 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component4 = /* @__PURE__ */ React4.forwardRef(function(props, ref) {
  const fallbackRef = useRef2(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React4.useId();
  const { activeLocale, setLocale } = useLocaleInfo2();
  const componentViewport = useComponentViewport2();
  const { style, className: className10, layoutId, variant, cIQQTftsx, ...restProps } = getProps4(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState2({ defaultVariant: "yN6Aplgzb", ref: refBinding, variant, variantClassNames: variantClassNames2 });
  const layoutDependency = createLayoutDependency2(props, variants);
  const { activeVariantCallback, delay } = useActiveVariantCallback2(baseVariant);
  const DY2dzgeiO14lwh64 = activeVariantCallback(async (...args) => {
    if (cIQQTftsx) {
      const res = await cIQQTftsx(...args);
      if (res === false)
        return false;
    }
  });
  const sharedStyleClassNames = [className6];
  const scopingClassNames = cx4(serializationHash2, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx4(LayoutGroup2, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx4(Variants2, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx4(Transition2, { value: transition12, children: /* @__PURE__ */ _jsxs2(motion4.div, { ...restProps, ...gestureHandlers, className: cx4(scopingClassNames, "framer-e746oh", className10, classNames), "data-framer-name": "Base", layoutDependency, layoutId: "MainMagazine__yN6Aplgzb", ref: refBinding, style: { borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, ...style }, children: [/* @__PURE__ */ _jsxs2(motion4.div, { className: "framer-15b9llu", "data-framer-name": "Icon & Text", layoutDependency, layoutId: "MainMagazine__Gpqy93jet", children: [/* @__PURE__ */ _jsx4(Hrf2VVQ5F_default, { animated: true, className: "framer-1qdbxbq", layoutDependency, layoutId: "MainMagazine__ILYVPEV4R", style: { "--118a55": "var(--token-318e7803-4327-4041-8ab7-5a5664c34c8f, rgb(179, 179, 179))" } }), /* @__PURE__ */ _jsx4(RichText2, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx4(React4.Fragment, { children: /* @__PURE__ */ _jsx4(motion4.p, { className: "framer-styles-preset-5rfdkx", "data-styles-preset": "CT_DBbR5R", dir: "auto", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d0d6ded-a16b-44b0-b3c5-41032df0ed2d, rgb(148, 148, 148)))" }, children: "Couldn't find a magazine like that :(" }) }), className: "framer-glvz0w", fonts: ["Inter"], layoutDependency, layoutId: "MainMagazine__fa63NVoYF", style: { "--extracted-r6o4lv": "var(--token-7d0d6ded-a16b-44b0-b3c5-41032df0ed2d, rgb(148, 148, 148))" }, verticalAlignment: "top", withExternalLayout: true })] }), /* @__PURE__ */ _jsx4(ComponentViewportProvider, { height: 27, y: (componentViewport?.y || 0) + 10 + (((componentViewport?.height || 400) - 20 - 114) / 2 + 71 + 16), children: /* @__PURE__ */ _jsx4(SmartComponentScopedContainer, { className: "framer-inoxdr-container", layoutDependency, layoutId: "MainMagazine__PrxHJ_tK3-container", nodeId: "PrxHJ_tK3", rendersWithMotion: true, scopeId: "AF0NNkhvm", children: /* @__PURE__ */ _jsx4(b_m5Js9Ir_default, { DY2dzgeiO: DY2dzgeiO14lwh64, height: "100%", id: "PrxHJ_tK3", layoutId: "MainMagazine__PrxHJ_tK3", TDPWRYXxk: "Reset Query", variant: matchVariant("zq5haw0aW"), width: "100%" }) }) })] }) }) }) });
});
var css12 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-pMrlr.framer-1mamepi, .framer-pMrlr .framer-1mamepi { display: block; }", ".framer-pMrlr.framer-e746oh { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: auto; justify-content: center; padding: 10px; position: relative; width: 100%; }", ".framer-pMrlr .framer-15b9llu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-pMrlr .framer-1qdbxbq { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 40px); position: relative; width: 40px; }", ".framer-pMrlr .framer-glvz0w { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-pMrlr .framer-inoxdr-container { flex: none; height: auto; position: relative; width: auto; }", ...css7];
var FramerAF0NNkhvm = withCSS4(Component4, css12, "framer-pMrlr");
var AF0NNkhvm_default = FramerAF0NNkhvm;
FramerAF0NNkhvm.displayName = "Magazine Empty State";
FramerAF0NNkhvm.defaultProps = { height: 400, width: 1072 };
addPropertyControls4(FramerAF0NNkhvm, { cIQQTftsx: { title: "Reset Filters", type: ControlType4.EventHandler } });
addFonts2(FramerAF0NNkhvm, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...Image1Fonts, ...ButtonFonts, ...getFontsFromSharedStyle2(fonts6)], { supportsExplicitInterCodegen: true });
FramerAF0NNkhvm.loader = { load: (props, context) => {
  const locale = context.locale;
  return Promise.allSettled([forwardLoader(b_m5Js9Ir_default, {}, context)]);
} };

// http-url:https://framerusercontent.com/modules/6gSeLGufj9YMO6ADzqOD/pnSAXwDC0JfNjp5xAcUa/BbFuZPGaK.js
import { jsx as _jsx5 } from "react/jsx-runtime";
import { addFonts as addFonts3, addPropertyControls as addPropertyControls5, ControlType as ControlType5, cx as cx5, useComponentViewport as useComponentViewport3, useLocaleInfo as useLocaleInfo3, useVariantState as useVariantState3, withCSS as withCSS5 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup3, motion as motion5, MotionConfigContext as MotionConfigContext3 } from "framer-motion";
import * as React5 from "react";
import { useRef as useRef3 } from "react";
var cycleOrder2 = ["FveAb6f2W", "I5Li6kC_5"];
var serializationHash3 = "framer-axTw0";
var variantClassNames3 = { FveAb6f2W: "framer-v-zl82vu", I5Li6kC_5: "framer-v-344k82" };
function addPropertyOverrides2(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition13 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var Transition3 = ({ value, children }) => {
  const config = React5.useContext(MotionConfigContext3);
  const transition = value ?? config.transition;
  const contextValue = React5.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx5(MotionConfigContext3.Provider, { value: contextValue, children });
};
var humanReadableVariantMap2 = { "100": "FveAb6f2W", "200": "I5Li6kC_5" };
var Variants3 = motion5.create(React5.Fragment);
var getProps5 = ({ height, id, width, ...props }) => {
  return { ...props, variant: humanReadableVariantMap2[props.variant] ?? props.variant ?? "FveAb6f2W" };
};
var createLayoutDependency3 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component5 = /* @__PURE__ */ React5.forwardRef(function(props, ref) {
  const fallbackRef = useRef3(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React5.useId();
  const { activeLocale, setLocale } = useLocaleInfo3();
  const componentViewport = useComponentViewport3();
  const { style, className: className10, layoutId, variant, ...restProps } = getProps5(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState3({ cycleOrder: cycleOrder2, defaultVariant: "FveAb6f2W", ref: refBinding, variant, variantClassNames: variantClassNames3 });
  const layoutDependency = createLayoutDependency3(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx5(serializationHash3, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx5(LayoutGroup3, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx5(Variants3, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx5(Transition3, { value: transition13, children: /* @__PURE__ */ _jsx5(motion5.div, { ...restProps, ...gestureHandlers, className: cx5(scopingClassNames, "framer-zl82vu", className10, classNames), "data-framer-name": "100", layoutDependency, layoutId: "MainMagazine__FveAb6f2W", ref: refBinding, style: { backgroundColor: "var(--token-914b1e49-c6dc-49fc-93ac-369519474e4f, rgb(227, 227, 227))", ...style }, variants: { I5Li6kC_5: { backgroundColor: "var(--token-fb0f7462-27b2-4a53-b10e-81b2a62b8279, rgb(204, 204, 204))" } }, ...addPropertyOverrides2({ I5Li6kC_5: { "data-framer-name": "200" } }, baseVariant, gestureVariant) }) }) }) });
});
var css13 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-axTw0.framer-2kef09, .framer-axTw0 .framer-2kef09 { display: block; }", ".framer-axTw0.framer-zl82vu { height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }"];
var FramerBbFuZPGaK = withCSS5(Component5, css13, "framer-axTw0");
var BbFuZPGaK_default = FramerBbFuZPGaK;
FramerBbFuZPGaK.displayName = "Separator";
FramerBbFuZPGaK.defaultProps = { height: 1, width: 1072 };
addPropertyControls5(FramerBbFuZPGaK, { variant: { options: ["FveAb6f2W", "I5Li6kC_5"], optionTitles: ["100", "200"], title: "Variant", type: ControlType5.Enum } });
addFonts3(FramerBbFuZPGaK, [{ explicitInter: true, fonts: [] }], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/3mjBItGVVWHF7IoWevsI/bbDg70gRkpEtAwB59wGO/ndzuqCusO.js
import { jsx as _jsx6, jsxs as _jsxs3 } from "react/jsx-runtime";
import { addFonts as addFonts4, addPropertyControls as addPropertyControls6, ControlType as ControlType6, cx as cx6, getFontsFromSharedStyle as getFontsFromSharedStyle3, getLoadingLazyAtYPosition, Image as Image1, Link as Link2, RichText as RichText3, useComponentViewport as useComponentViewport4, useLocaleCode, useLocaleInfo as useLocaleInfo4, useVariantState as useVariantState4, withCSS as withCSS6 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup4, motion as motion6, MotionConfigContext as MotionConfigContext4 } from "framer-motion";
import * as React6 from "react";
import { useRef as useRef4 } from "react";
var serializationHash4 = "framer-LOdkN";
var variantClassNames4 = { l9mc6mImQ: "framer-v-11mh694" };
var transition14 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var toResponsiveImage = (value) => {
  if (typeof value === "object" && value !== null && typeof value.src === "string") {
    return value;
  }
  return typeof value === "string" ? { src: value } : void 0;
};
var sharedDateFormatter = (value, formatOptions, locale) => {
  if (typeof value !== "string")
    return "";
  const date = new Date(value);
  if (isNaN(date.getTime()))
    return "";
  const fallbackLocale = "en-US";
  try {
    return date.toLocaleString(locale || fallbackLocale, formatOptions);
  } catch {
    return date.toLocaleString(fallbackLocale, formatOptions);
  }
};
var dateOptions = { dateStyle: "medium", timeZone: "UTC" };
var toDateString = (value, activeLocale) => {
  return sharedDateFormatter(value, dateOptions, activeLocale);
};
var Transition4 = ({ value, children }) => {
  const config = React6.useContext(MotionConfigContext4);
  const transition = value ?? config.transition;
  const contextValue = React6.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx6(MotionConfigContext4.Provider, { value: contextValue, children });
};
var Variants4 = motion6.create(React6.Fragment);
var getProps6 = ({ height, id, link, published, thumbnail, title, width, ...props }) => {
  return { ...props, gPJQWheCc: link ?? props.gPJQWheCc, HsoOXef_w: title ?? props.HsoOXef_w ?? "The After Dark Tour Is Back: A Global Race Series Built for Women, Powered by Nike", qwaFNB3PS: thumbnail ?? props.qwaFNB3PS, WDxiXD_gi: published ?? props.WDxiXD_gi ?? "2026-05-21T00:00:00.000Z" };
};
var createLayoutDependency4 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component6 = /* @__PURE__ */ React6.forwardRef(function(props, ref) {
  const fallbackRef = useRef4(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React6.useId();
  const { activeLocale, setLocale } = useLocaleInfo4();
  const componentViewport = useComponentViewport4();
  const { style, className: className10, layoutId, variant, gPJQWheCc, qwaFNB3PS, HsoOXef_w, WDxiXD_gi, ...restProps } = getProps6(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState4({ defaultVariant: "l9mc6mImQ", ref: refBinding, variant, variantClassNames: variantClassNames4 });
  const layoutDependency = createLayoutDependency4(props, variants);
  const sharedStyleClassNames = [className2, className];
  const scopingClassNames = cx6(serializationHash4, ...sharedStyleClassNames);
  const activeLocaleCode = useLocaleCode();
  const textContent = toDateString(WDxiXD_gi, activeLocaleCode);
  return /* @__PURE__ */ _jsx6(LayoutGroup4, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx6(Variants4, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx6(Transition4, { value: transition14, children: /* @__PURE__ */ _jsx6(Link2, { href: gPJQWheCc, motionChild: true, nodeId: "l9mc6mImQ", scopeId: "ndzuqCusO", children: /* @__PURE__ */ _jsxs3(motion6.a, { ...restProps, ...gestureHandlers, className: `${cx6(scopingClassNames, "framer-11mh694", className10, classNames)} framer-1kv4kt7`, "data-framer-name": "Base", layoutDependency, layoutId: "MainMagazine__l9mc6mImQ", ref: refBinding, style: { ...style }, children: [/* @__PURE__ */ _jsx6(Image1, { as: "figure", background: { alt: "", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 0 + 0), sizes: componentViewport?.width || "100vw", ...toResponsiveImage(qwaFNB3PS) }, className: "framer-qywxeg", draggable: "false", layoutDependency, layoutId: "MainMagazine__pts9v5LKj", style: { borderBottomLeftRadius: 8, borderBottomRightRadius: 8, borderTopLeftRadius: 8, borderTopRightRadius: 8 } }), /* @__PURE__ */ _jsxs3(motion6.div, { className: "framer-q17910", "data-framer-name": "Title & Published", layoutDependency, layoutId: "MainMagazine__JxaU_8Y2i", children: [/* @__PURE__ */ _jsx6(RichText3, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx6(React6.Fragment, { children: /* @__PURE__ */ _jsx6(motion6.p, { className: "framer-styles-preset-bnfmu7", "data-styles-preset": "Hme2S1hiD", dir: "auto", style: { "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, rgb(0, 0, 0)))" }, children: "The After Dark Tour Is Back: A Global Race Series Built for Women, Powered by Nike" }) }), className: "framer-h3xhuj", fonts: ["Inter"], layoutDependency, layoutId: "MainMagazine__yryQoN9VB", style: { "--extracted-r6o4lv": "var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, text: HsoOXef_w, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx6(RichText3, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx6(React6.Fragment, { children: /* @__PURE__ */ _jsx6(motion6.p, { className: "framer-styles-preset-r0nisa", "data-styles-preset": "h36udAO3c", dir: "auto", style: { "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5c950482-85ac-4716-bcd5-1945331447e4, rgb(133, 133, 133)))" }, children: "Nike Sportswear is gathering a new generation of designers from across the world to create the future of Air Max through the inaugural Air Works research, development and design program. Gathering at Nike\u2019s Philip H. Knight Campus in Beaverton, Oregon, the visiting Air Works designers will work alongside Nike mentors to inspire new cultural expressions of Air Max that build on the brand\u2019s 40-year heritage of Air innovation." }) }), className: "framer-1mv82qw", fonts: ["Inter"], layoutDependency, layoutId: "MainMagazine__FISmu5p3y", style: { "--extracted-r6o4lv": "var(--token-5c950482-85ac-4716-bcd5-1945331447e4, rgb(133, 133, 133))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, text: /* @__PURE__ */ _jsx6("time", { dateTime: WDxiXD_gi, children: textContent }), verticalAlignment: "top", withExternalLayout: true })] })] }) }) }) }) });
});
var css14 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-LOdkN.framer-1kv4kt7, .framer-LOdkN .framer-1kv4kt7 { display: block; }", ".framer-LOdkN.framer-11mh694 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; text-decoration: none; width: 526px; }", ".framer-LOdkN .framer-qywxeg { -webkit-user-select: none; aspect-ratio: 1.62346 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 324px); position: relative; user-select: none; width: 100%; }", ".framer-LOdkN .framer-q17910 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 600px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }", ".framer-LOdkN .framer-h3xhuj { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", '.framer-LOdkN .framer-1mv82qw { --text-truncation-display-inline-for-safari-16: inline; --text-truncation-display-none-for-safari-16: none; --text-truncation-line-break-for-safari-16: "\\A"; -webkit-box-orient: vertical; -webkit-line-clamp: 3; display: -webkit-box; flex: none; height: auto; max-width: 450px; overflow: var(--overflow-clip-fallback, clip); position: relative; white-space: pre-line; width: 100%; word-break: break-word; word-wrap: break-word; }', ...css2, ...css];
var FramerndzuqCusO = withCSS6(Component6, css14, "framer-LOdkN");
var ndzuqCusO_default = FramerndzuqCusO;
FramerndzuqCusO.displayName = "Magazine Highlight Card";
FramerndzuqCusO.defaultProps = { height: 419, width: 526 };
addPropertyControls6(FramerndzuqCusO, { gPJQWheCc: { title: "Link", type: ControlType6.Link }, qwaFNB3PS: { title: "Thumbnail", type: ControlType6.ResponsiveImage }, HsoOXef_w: { defaultValue: "The After Dark Tour Is Back: A Global Race Series Built for Women, Powered by Nike", title: "Title", type: ControlType6.String }, onHsoOXef_wChange: { changes: "HsoOXef_w", type: ControlType6.ChangeHandler }, WDxiXD_gi: { defaultValue: "2026-05-21T00:00:00.000Z", title: "Published", type: ControlType6.Date }, onWDxiXD_giChange: { changes: "WDxiXD_gi", type: ControlType6.ChangeHandler } });
addFonts4(FramerndzuqCusO, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...getFontsFromSharedStyle3(fonts2), ...getFontsFromSharedStyle3(fonts)], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/PwxUKsZQ0vP7m24sxduo/6AiqVNEQ08LM50NtHcOU/uawOVD3oE.js
import { jsx as _jsx7, jsxs as _jsxs4 } from "react/jsx-runtime";
import { addFonts as addFonts5, addPropertyControls as addPropertyControls7, ControlType as ControlType7, cx as cx7, getFontsFromSharedStyle as getFontsFromSharedStyle4, getLoadingLazyAtYPosition as getLoadingLazyAtYPosition2, Image as Image12, Link as Link3, patchBorderRadiusScaleCorrector, RichText as RichText4, useComponentViewport as useComponentViewport5, useLocaleCode as useLocaleCode2, useLocaleInfo as useLocaleInfo5, useVariantState as useVariantState5, withCSS as withCSS7 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup5, motion as motion7, MotionConfigContext as MotionConfigContext5 } from "framer-motion";
import * as React7 from "react";
import { useRef as useRef5 } from "react";

// http-url:https://framerusercontent.com/modules/AfCaMmRn8u7qaCxd9l7b/a1AGSwGt3WRsdOZIFkvs/tzSCYd6Qc.js
import { fontStore as fontStore9 } from "./_framer-runtime.js";
fontStore9.loadFonts(["Inter-Variable", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNjI1", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNjI1", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNjI1"]);
var variationAxes8 = [{ defaultValue: 14, maxValue: 32, minValue: 14, name: "Optical size", tag: "opsz" }, { defaultValue: 400, maxValue: 900, minValue: 100, name: "Weight", tag: "wght" }];
var fonts9 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/mYcqTSergLb16PdbJJQMl9ebYm4.woff2", variationAxes: variationAxes8, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2", variationAxes: variationAxes8, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2", variationAxes: variationAxes8, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/DYHjxG0qXjopUuruoacfl5SA.woff2", variationAxes: variationAxes8, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2", variationAxes: variationAxes8, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2", variationAxes: variationAxes8, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2", variationAxes: variationAxes8, weight: "400" }] }];
var css15 = ['.framer-6EjDN .framer-styles-preset-1lkvzko:not(.rich-text-wrapper), .framer-6EjDN .framer-styles-preset-1lkvzko.rich-text-wrapper h5 { --framer-font-family: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 22px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "opsz" 14, "wght" 625; --framer-font-variation-axes-bold: "opsz" 14, "wght" 625; --framer-font-variation-axes-bold-italic: "opsz" 14, "wght" 625; --framer-font-variation-axes-italic: "opsz" 14, "wght" 625; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.04em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }'];
var className9 = "framer-6EjDN";

// http-url:https://framerusercontent.com/modules/PwxUKsZQ0vP7m24sxduo/6AiqVNEQ08LM50NtHcOU/uawOVD3oE.js
var cycleOrder3 = ["kgKnbM4Xe", "XIO_gOeW_", "dBw2pqMUa"];
var serializationHash5 = "framer-hZv4K";
var variantClassNames5 = { dBw2pqMUa: "framer-v-1vctpq2", kgKnbM4Xe: "framer-v-s9yv2w", XIO_gOeW_: "framer-v-p1bynv" };
function addPropertyOverrides3(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition15 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var patchBorderRadiusScaleCorrector1 = patchBorderRadiusScaleCorrector();
var toResponsiveImage2 = (value) => {
  if (typeof value === "object" && value !== null && typeof value.src === "string") {
    return value;
  }
  return typeof value === "string" ? { src: value } : void 0;
};
var sharedDateFormatter2 = (value, formatOptions, locale) => {
  if (typeof value !== "string")
    return "";
  const date = new Date(value);
  if (isNaN(date.getTime()))
    return "";
  const fallbackLocale = "en-US";
  try {
    return date.toLocaleString(locale || fallbackLocale, formatOptions);
  } catch {
    return date.toLocaleString(fallbackLocale, formatOptions);
  }
};
var dateOptions2 = { dateStyle: "medium", timeZone: "UTC" };
var toDateString2 = (value, activeLocale) => {
  return sharedDateFormatter2(value, dateOptions2, activeLocale);
};
var Transition5 = ({ value, children }) => {
  const config = React7.useContext(MotionConfigContext5);
  const transition = value ?? config.transition;
  const contextValue = React7.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx7(MotionConfigContext5.Provider, { value: contextValue, children });
};
var humanReadableVariantMap3 = { Desktop: "kgKnbM4Xe", Phone: "dBw2pqMUa", Tablet: "XIO_gOeW_" };
var Variants5 = motion7.create(React7.Fragment);
var getProps7 = ({ height, id, link, published, thumbnail, title, width, ...props }) => {
  return { ...props, l2Ml9f2CA: thumbnail ?? props.l2Ml9f2CA, NQPNP7axw: published ?? props.NQPNP7axw ?? "2026-05-19T00:00:00.000Z", OIZ1_NbrT: title ?? props.OIZ1_NbrT ?? "Nike Is Serving Athletes Faster Through AI-Powered Shopping on Google", variant: humanReadableVariantMap3[props.variant] ?? props.variant ?? "kgKnbM4Xe", wvadA_zEA: link ?? props.wvadA_zEA };
};
var createLayoutDependency5 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component7 = /* @__PURE__ */ React7.forwardRef(function(props, ref) {
  const fallbackRef = useRef5(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React7.useId();
  const { activeLocale, setLocale } = useLocaleInfo5();
  const componentViewport = useComponentViewport5();
  const { style, className: className10, layoutId, variant, l2Ml9f2CA, OIZ1_NbrT, NQPNP7axw, wvadA_zEA, ...restProps } = getProps7(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState5({ cycleOrder: cycleOrder3, defaultVariant: "kgKnbM4Xe", ref: refBinding, variant, variantClassNames: variantClassNames5 });
  const layoutDependency = createLayoutDependency5(props, variants);
  const sharedStyleClassNames = [className9, className];
  const scopingClassNames = cx7(serializationHash5, ...sharedStyleClassNames);
  const activeLocaleCode = useLocaleCode2();
  const textContent = toDateString2(NQPNP7axw, activeLocaleCode);
  return /* @__PURE__ */ _jsx7(LayoutGroup5, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx7(Variants5, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx7(Transition5, { value: transition15, children: /* @__PURE__ */ _jsx7(Link3, { href: wvadA_zEA, motionChild: true, nodeId: "kgKnbM4Xe", openInNewTab: false, scopeId: "uawOVD3oE", children: /* @__PURE__ */ _jsxs4(motion7.a, { ...restProps, ...gestureHandlers, className: `${cx7(scopingClassNames, "framer-s9yv2w", className10, classNames)} framer-1l2xoj4`, "data-framer-name": "Desktop", layoutDependency, layoutId: "MainMagazine__kgKnbM4Xe", ref: refBinding, style: { ...style }, ...addPropertyOverrides3({ dBw2pqMUa: { "data-framer-name": "Phone" }, XIO_gOeW_: { "data-framer-name": "Tablet" } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsx7(Image12, { as: "figure", background: { alt: "", fit: "fill", loading: getLoadingLazyAtYPosition2((componentViewport?.y || 0) + 0), sizes: "(min-width: 1200px) max(max(min(100vw - 40px, 1200px) - 128px, 1px), 266px), (min-width: 810px) and (max-width: 1199.98px) max(max(min(100vw - 40px, 1200px) - 88px, 1px), 266px), (max-width: 809.98px) calc(min(100vw - 40px, 500px) - 56px)", ...toResponsiveImage2(l2Ml9f2CA) }, className: "framer-flwv4m", draggable: "false", layoutDependency, layoutId: "MainMagazine__a_jZxSpWv", style: { "--corner-shape-fallback": 0.796, borderBottomLeftRadius: "calc(50px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderBottomRightRadius: "calc(50px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopLeftRadius: "calc(50px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopRightRadius: "calc(50px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", cornerShape: "superellipse(1.4)" }, ...addPropertyOverrides3({ dBw2pqMUa: { background: { alt: "", fit: "fill", loading: getLoadingLazyAtYPosition2((componentViewport?.y || 0) + 0 + (((componentViewport?.height || 306.5) - 0 - 348.6) / 2 + 0 + 0)), sizes: componentViewport?.width || "100vw", ...toResponsiveImage2(l2Ml9f2CA) } } }, baseVariant, gestureVariant) }), /* @__PURE__ */ _jsxs4(motion7.div, { className: "framer-siuyc0", "data-framer-name": "Title & Published", layoutDependency, layoutId: "MainMagazine__daqHC_wja", children: [/* @__PURE__ */ _jsx7(RichText4, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx7(React7.Fragment, { children: /* @__PURE__ */ _jsx7(motion7.h5, { className: "framer-styles-preset-1lkvzko", "data-styles-preset": "tzSCYd6Qc", dir: "auto", style: { "--framer-text-color": "var(--extracted-1lwpl3i, var(--token-6d07e840-0908-44af-b7b3-055ece1d0a4b, rgb(41, 41, 41)))" }, children: "Nike Is Serving Athletes Faster Through AI-Powered Shopping on Google" }) }), className: "framer-12nzqp0", fonts: ["Inter"], layoutDependency, layoutId: "MainMagazine__gL0q1JzQV", style: { "--extracted-1lwpl3i": "var(--token-6d07e840-0908-44af-b7b3-055ece1d0a4b, rgb(41, 41, 41))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, text: OIZ1_NbrT, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx7(RichText4, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx7(React7.Fragment, { children: /* @__PURE__ */ _jsx7(motion7.p, { className: "framer-styles-preset-r0nisa", "data-styles-preset": "h36udAO3c", dir: "auto", style: { "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5c950482-85ac-4716-bcd5-1945331447e4, rgb(133, 133, 133)))" }, children: "Content" }) }), className: "framer-dfgkfi", fonts: ["Inter"], layoutDependency, layoutId: "MainMagazine__czOwgkBeB", style: { "--extracted-r6o4lv": "var(--token-5c950482-85ac-4716-bcd5-1945331447e4, rgb(133, 133, 133))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, text: /* @__PURE__ */ _jsx7("time", { dateTime: NQPNP7axw, children: textContent }), verticalAlignment: "top", withExternalLayout: true })] })] }) }) }) }) });
});
var css16 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-hZv4K.framer-1l2xoj4, .framer-hZv4K .framer-1l2xoj4 { display: block; }", ".framer-hZv4K.framer-s9yv2w { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 44px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: 1072px; }", ".framer-hZv4K .framer-flwv4m { -webkit-user-select: none; aspect-ratio: 1.62346 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 164px); position: relative; user-select: none; width: 266px; }", ".framer-hZv4K .framer-siuyc0 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1200px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; z-index: 1; }", '.framer-hZv4K .framer-12nzqp0 { --text-truncation-display-inline-for-safari-16: inline; --text-truncation-display-none-for-safari-16: none; --text-truncation-line-break-for-safari-16: "\\A"; -webkit-box-orient: vertical; -webkit-line-clamp: 3; display: -webkit-box; flex: 1 0 0px; height: auto; max-width: 470px; overflow: var(--overflow-clip-fallback, clip); position: relative; white-space: pre-line; width: 1px; word-break: break-word; word-wrap: break-word; }', '.framer-hZv4K .framer-dfgkfi { --text-truncation-display-inline-for-safari-16: inline; --text-truncation-display-none-for-safari-16: none; --text-truncation-line-break-for-safari-16: "\\A"; -webkit-box-orient: vertical; -webkit-line-clamp: 3; display: -webkit-box; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; white-space: pre-line; width: 120px; word-break: break-word; word-wrap: break-word; }', ".framer-hZv4K.framer-v-p1bynv.framer-s9yv2w { width: 682px; }", ".framer-hZv4K.framer-v-p1bynv .framer-siuyc0 { align-self: stretch; flex-direction: column; height: auto; }", ".framer-hZv4K.framer-v-p1bynv .framer-12nzqp0, .framer-hZv4K.framer-v-1vctpq2 .framer-12nzqp0 { flex: none; width: 100%; }", ".framer-hZv4K.framer-v-1vctpq2.framer-s9yv2w { flex-direction: column; gap: 24px; width: 261px; }", ".framer-hZv4K.framer-v-1vctpq2 .framer-flwv4m { height: var(--framer-aspect-ratio-supported, 161px); width: 100%; }", ".framer-hZv4K.framer-v-1vctpq2 .framer-siuyc0 { flex: none; flex-direction: column; gap: 12px; justify-content: flex-start; width: 100%; }", ".framer-hZv4K.framer-v-1vctpq2 .framer-dfgkfi { width: 100%; }", ...css15, ...css];
var FrameruawOVD3oE = withCSS7(Component7, css16, "framer-hZv4K");
var uawOVD3oE_default = FrameruawOVD3oE;
FrameruawOVD3oE.displayName = "Magazine Card";
FrameruawOVD3oE.defaultProps = { height: 164, width: 1072 };
addPropertyControls7(FrameruawOVD3oE, { variant: { options: ["kgKnbM4Xe", "XIO_gOeW_", "dBw2pqMUa"], optionTitles: ["Desktop", "Tablet", "Phone"], title: "Variant", type: ControlType7.Enum }, l2Ml9f2CA: { title: "Thumbnail", type: ControlType7.ResponsiveImage }, OIZ1_NbrT: { defaultValue: "Nike Is Serving Athletes Faster Through AI-Powered Shopping on Google", title: "Title", type: ControlType7.String }, onOIZ1_NbrTChange: { changes: "OIZ1_NbrT", type: ControlType7.ChangeHandler }, NQPNP7axw: { defaultValue: "2026-05-19T00:00:00.000Z", title: "Published", type: ControlType7.Date }, onNQPNP7axwChange: { changes: "NQPNP7axw", type: ControlType7.ChangeHandler }, wvadA_zEA: { title: "Link", type: ControlType7.Link } });
addFonts5(FrameruawOVD3oE, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...getFontsFromSharedStyle4(fonts9), ...getFontsFromSharedStyle4(fonts)], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/ZljHxcVNhUNaungXt1zc/ydk5GJKJMQSr9N0lS390/tupKOS5Mn.js
var ButtonFonts2 = getFonts2(b_m5Js9Ir_default);
var MagazineHighlightCardFonts = getFonts2(ndzuqCusO_default);
var SeparatorFonts = getFonts2(BbFuZPGaK_default);
var MagazineCardFonts = getFonts2(uawOVD3oE_default);
var MagazineEmptyStateFonts = getFonts2(AF0NNkhvm_default);
var cycleOrder4 = ["WwiHakYfG", "jWZKHdvR1", "G4DLB8S6g"];
var serializationHash6 = "framer-AtOlR";
var variantClassNames6 = { G4DLB8S6g: "framer-v-1712gp5", jWZKHdvR1: "framer-v-13q62fw", WwiHakYfG: "framer-v-145luc6" };
function addPropertyOverrides4(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition16 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var toString = (value) => {
  return typeof value === "string" ? value : String(value);
};
var prefix = (value, prefix2) => {
  if (typeof value === "string" && typeof prefix2 === "string") {
    return prefix2 + value;
  } else if (typeof value === "string") {
    return value;
  } else if (typeof prefix2 === "string") {
    return prefix2;
  }
  return "";
};
var suffix = (value, suffix2) => {
  if (typeof value === "string" && typeof suffix2 === "string") {
    return value + suffix2;
  } else if (typeof value === "string") {
    return value;
  } else if (typeof suffix2 === "string") {
    return suffix2;
  }
  return "";
};
var query1 = () => ({ from: { alias: "O2Kml7oY4", data: TWHZahxMp_default, type: "Collection" }, select: [] });
var QueryData = ({ query, pageSize, children }) => {
  const data = __framer_useQueryData(query);
  return children(data);
};
var toResponsiveImage3 = (value) => {
  if (typeof value === "object" && value !== null && typeof value.src === "string") {
    return value;
  }
  return typeof value === "string" ? { src: value } : void 0;
};
var matchVariant2 = (...args) => {
  for (const arg of args) {
    if (arg && typeof arg === "string")
      return arg;
  }
  return void 0;
};
var query3 = () => ({ from: { alias: "r2SYpTpbt", data: TWHZahxMp_default, type: "Collection" }, limit: { type: "LiteralValue", value: 1 }, select: [{ collection: "r2SYpTpbt", name: "ewNw3V74U", type: "Identifier" }, { collection: "r2SYpTpbt", name: "TW6CR4xWI", type: "Identifier" }, { collection: "r2SYpTpbt", name: "Kh8Gry2oe", type: "Identifier" }, { collection: "r2SYpTpbt", name: "XLYJvQM4P", type: "Identifier" }, { collection: "r2SYpTpbt", name: "id", type: "Identifier" }], where: { left: { collection: "r2SYpTpbt", name: "aPnMXgj03", type: "Identifier" }, operator: "==", right: { type: "LiteralValue", value: true }, type: "BinaryOperation" } });
var query5 = () => ({ from: { alias: "NwkIJQawq", data: TWHZahxMp_default, type: "Collection" }, limit: { type: "LiteralValue", value: 2 }, select: [{ collection: "NwkIJQawq", name: "XLYJvQM4P", type: "Identifier" }, { collection: "NwkIJQawq", name: "ewNw3V74U", type: "Identifier" }, { collection: "NwkIJQawq", name: "TW6CR4xWI", type: "Identifier" }, { collection: "NwkIJQawq", name: "csLuHnld1", type: "Identifier" }, { collection: "NwkIJQawq", name: "id", type: "Identifier" }], where: { collection: "NwkIJQawq", name: "Vf4SyxiE5", type: "Identifier" } });
var patchBorderRadiusScaleCorrector12 = patchBorderRadiusScaleCorrector2();
var equals = (a3, b2) => {
  return typeof a3 === "string" && typeof b2 === "string" ? a3.toLowerCase() === b2.toLowerCase() : a3 === b2;
};
var query7 = (iTzLusSg5) => ({ from: { alias: "xA8sWU4Vd", data: TWHZahxMp_default, type: "Collection" }, select: [{ collection: "xA8sWU4Vd", name: "ewNw3V74U", type: "Identifier" }, { collection: "xA8sWU4Vd", name: "TW6CR4xWI", type: "Identifier" }, { collection: "xA8sWU4Vd", name: "csLuHnld1", type: "Identifier" }, { collection: "xA8sWU4Vd", name: "XLYJvQM4P", type: "Identifier" }, { collection: "xA8sWU4Vd", name: "id", type: "Identifier" }], where: { left: { left: { type: "LiteralValue", value: iTzLusSg5 }, operator: "==", right: { type: "LiteralValue", value: null }, type: "BinaryOperation" }, operator: "or", right: { arguments: [{ collection: "xA8sWU4Vd", name: "TW6CR4xWI", type: "Identifier" }, { type: "LiteralValue", value: iTzLusSg5 }], functionName: "CONTAINS", type: "FunctionCall" }, type: "BinaryOperation" } });
var Transition6 = ({ value, children }) => {
  const config = React8.useContext(MotionConfigContext6);
  const transition = value ?? config.transition;
  const contextValue = React8.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx8(MotionConfigContext6.Provider, { value: contextValue, children });
};
var humanReadableVariantMap4 = { Desktop: "WwiHakYfG", Phone: "G4DLB8S6g", Tablet: "jWZKHdvR1" };
var Variants6 = motion8.create(React8.Fragment);
var useStateVariable = (externalState, setExternalState) => {
  const [internalState, setInternalState] = React8.useState(externalState);
  const [previousExternalState, setPreviousExternalState] = React8.useState(externalState);
  if (setExternalState) {
    return [externalState, setExternalState];
  }
  if (externalState !== previousExternalState) {
    setInternalState(externalState);
    setPreviousExternalState(externalState);
  }
  return [internalState, setInternalState];
};
var getProps8 = ({ height, id, resetFilters, title, width, ...props }) => {
  return { ...props, iTzLusSg5: title ?? props.iTzLusSg5, lzQVoXmXH: resetFilters ?? props.lzQVoXmXH, variant: humanReadableVariantMap4[props.variant] ?? props.variant ?? "WwiHakYfG" };
};
var createLayoutDependency6 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component8 = /* @__PURE__ */ React8.forwardRef(function(props, ref) {
  const fallbackRef = useRef6(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React8.useId();
  const { activeLocale, setLocale } = useLocaleInfo6();
  const componentViewport = useComponentViewport6();
  const { style, className: className10, layoutId, variant, lzQVoXmXH, "iTzLusSg5": externaliTzLusSg5, "oniTzLusSg5Change": setExternaliTzLusSg5, ...restProps } = getProps8(props);
  const [iTzLusSg5, setiTzLusSg5] = useStateVariable(externaliTzLusSg5, setExternaliTzLusSg5);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState6({ cycleOrder: cycleOrder4, defaultVariant: "WwiHakYfG", ref: refBinding, variant, variantClassNames: variantClassNames6 });
  const layoutDependency = createLayoutDependency6(props, variants);
  const { activeVariantCallback, delay } = useActiveVariantCallback3(baseVariant);
  const cIQQTftsxsq9h7n = activeVariantCallback(async (...args) => {
    if (lzQVoXmXH) {
      const res = await lzQVoXmXH(...args);
      if (res === false)
        return false;
    }
  });
  const sharedStyleClassNames = [className2, className4, className5, className, className3];
  const scopingClassNames = cx8(serializationHash6, ...sharedStyleClassNames);
  const isDisplayed = () => {
    if (baseVariant === "G4DLB8S6g")
      return false;
    return true;
  };
  const router = useRouter();
  return /* @__PURE__ */ _jsx8(LayoutGroup6, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx8(Variants6, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx8(Transition6, { value: transition16, children: /* @__PURE__ */ _jsxs5(motion8.main, { ...restProps, ...gestureHandlers, className: cx8(scopingClassNames, "framer-145luc6", className10, classNames), "data-framer-name": "Desktop", layoutDependency, layoutId: "MainMagazine__WwiHakYfG", ref: refBinding, style: { ...style }, ...addPropertyOverrides4({ G4DLB8S6g: { "data-framer-name": "Phone" }, jWZKHdvR1: { "data-framer-name": "Tablet" } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsxs5(motion8.section, { className: "framer-1v641kd", "data-framer-name": "Hero", layoutDependency, layoutId: "MainMagazine__jiugOUhAq", children: [/* @__PURE__ */ _jsxs5(motion8.div, { className: "framer-1baos1z", "data-framer-name": "Header", layoutDependency, layoutId: "MainMagazine__rebPBC3kj", children: [isDisplayed() && /* @__PURE__ */ _jsx8(motion8.div, { className: "framer-1u3874s", "data-framer-name": "Abstract", layoutDependency, layoutId: "MainMagazine__a64R7jGUd", children: /* @__PURE__ */ _jsx8(RichText5, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx8(React8.Fragment, { children: /* @__PURE__ */ _jsxs5(motion8.p, { className: "framer-styles-preset-bnfmu7", "data-styles-preset": "Hme2S1hiD", dir: "auto", style: { "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, rgb(0, 0, 0)))" }, children: [/* @__PURE__ */ _jsx8(motion8.span, { style: { "--framer-text-color": "var(--extracted-1w3ko1f, var(--token-e99fdf97-7de2-4ce1-a9f5-0922d834af49, rgb(179, 179, 179)))" }, children: "\u2736" }), " ", /* @__PURE__ */ _jsx8(motion8.span, { style: { "--framer-text-color": "var(--extracted-3sq8v0, var(--token-5c950482-85ac-4716-bcd5-1945331447e4, rgb(133, 133, 133)))" }, children: "\u2736" }), " ", /* @__PURE__ */ _jsx8(motion8.span, { style: { "--framer-text-color": "var(--extracted-c9yw3e, var(--token-bbe0c2aa-5207-4997-b514-2bd605315d76, rgb(66, 66, 66)))" }, children: "\u2736" })] }) }), className: "framer-o8qqmr", fonts: ["Inter"], layoutDependency, layoutId: "MainMagazine__uH2GRSHY6", style: { "--extracted-1w3ko1f": "var(--token-e99fdf97-7de2-4ce1-a9f5-0922d834af49, rgb(179, 179, 179))", "--extracted-3sq8v0": "var(--token-5c950482-85ac-4716-bcd5-1945331447e4, rgb(133, 133, 133))", "--extracted-c9yw3e": "var(--token-bbe0c2aa-5207-4997-b514-2bd605315d76, rgb(66, 66, 66))", "--extracted-r6o4lv": "var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, verticalAlignment: "top", withExternalLayout: true }) }), /* @__PURE__ */ _jsxs5(motion8.div, { className: "framer-4l5fuh", "data-framer-name": "Title", layoutDependency, layoutId: "MainMagazine__u7nDWRbOW", children: [/* @__PURE__ */ _jsx8(RichText5, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx8(React8.Fragment, { children: /* @__PURE__ */ _jsx8(motion8.p, { className: "framer-styles-preset-bnfmu7", "data-styles-preset": "Hme2S1hiD", dir: "auto", style: { "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-31c75237-3696-4093-9011-7822eb8b6641, rgb(122, 122, 122)))" }, children: "The Sneaks" }) }), className: "framer-1bsr354", fonts: ["Inter"], layoutDependency, layoutId: "MainMagazine__KCjB3u38g", style: { "--extracted-r6o4lv": "var(--token-31c75237-3696-4093-9011-7822eb8b6641, rgb(122, 122, 122))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx8(RichText5, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx8(React8.Fragment, { children: /* @__PURE__ */ _jsx8(motion8.h2, { className: "framer-styles-preset-tsnpik", "data-styles-preset": "RoRGeZoiF", dir: "auto", children: "Magazine" }) }), className: "framer-ujc29c", fonts: ["Inter"], layoutDependency, layoutId: "MainMagazine__sxox7VaKV", style: { "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, verticalAlignment: "top", withExternalLayout: true, ...addPropertyOverrides4({ G4DLB8S6g: { children: /* @__PURE__ */ _jsx8(React8.Fragment, { children: /* @__PURE__ */ _jsx8(motion8.h6, { className: "framer-styles-preset-tsnpik", "data-styles-preset": "RoRGeZoiF", dir: "auto", children: "Magazine" }) }) } }, baseVariant, gestureVariant) })] }), isDisplayed() && /* @__PURE__ */ _jsx8(motion8.div, { className: "framer-18pimmf", layoutDependency, layoutId: "MainMagazine__O2Kml7oY4", children: /* @__PURE__ */ _jsx8(ChildrenCanSuspend, { children: /* @__PURE__ */ _jsx8(QueryData, { query: query1(), children: (collection, paginationInfo, loadMore) => {
    const repeater_item_countO2Kml7oY4 = collection?.length ?? 0;
    const textContent = suffix(prefix(toString(repeater_item_countO2Kml7oY4), "[ "), " ]");
    return /* @__PURE__ */ _jsx8(_Fragment, { children: /* @__PURE__ */ _jsx8(RichText5, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx8(React8.Fragment, { children: /* @__PURE__ */ _jsx8(motion8.p, { className: "framer-styles-preset-bnfmu7", "data-styles-preset": "Hme2S1hiD", dir: "auto", style: { "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, rgb(0, 0, 0)))" }, children: "[ undefined ]" }) }), className: "framer-vbvs04", fonts: ["Inter"], layoutDependency, layoutId: "MainMagazine__zC4bUKgkm", style: { "--extracted-r6o4lv": "var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, text: textContent, verticalAlignment: "top", withExternalLayout: true }) });
  } }) }) })] }), /* @__PURE__ */ _jsx8(motion8.div, { className: "framer-e15i7s", layoutDependency, layoutId: "MainMagazine__r2SYpTpbt", children: /* @__PURE__ */ _jsx8(ChildrenCanSuspend, { children: /* @__PURE__ */ _jsx8(QueryData, { query: query3(), children: (collection1, paginationInfo1, loadMore1) => {
    return /* @__PURE__ */ _jsx8(_Fragment, { children: collection1?.map(({ ewNw3V74U: ewNw3V74Ur2SYpTpbt, id: idr2SYpTpbt, Kh8Gry2oe: Kh8Gry2oer2SYpTpbt, TW6CR4xWI: TW6CR4xWIr2SYpTpbt, XLYJvQM4P: XLYJvQM4Pr2SYpTpbt }, index) => {
      TW6CR4xWIr2SYpTpbt ?? (TW6CR4xWIr2SYpTpbt = "");
      Kh8Gry2oer2SYpTpbt ?? (Kh8Gry2oer2SYpTpbt = "");
      XLYJvQM4Pr2SYpTpbt ?? (XLYJvQM4Pr2SYpTpbt = "");
      return /* @__PURE__ */ _jsx8(LayoutGroup6, { id: `r2SYpTpbt-${idr2SYpTpbt}`, children: /* @__PURE__ */ _jsx8(PathVariablesContext.Provider, { value: { XLYJvQM4P: XLYJvQM4Pr2SYpTpbt }, children: /* @__PURE__ */ _jsxs5(motion8.div, { className: "framer-k6vl26", layoutDependency, layoutId: "MainMagazine__TvWuxZeE9", children: [/* @__PURE__ */ _jsx8(Image13, { as: "figure", background: { alt: "The Business of Limited Drops: How Scarcity Drives Modern Fashion Thumbnail", fit: "fill", pixelHeight: 941, pixelWidth: 1672, sizes: `max(${componentViewport?.width || "100vw"}, 1px)`, ...toResponsiveImage3(ewNw3V74Ur2SYpTpbt) }, className: "framer-1b5p0n4", draggable: "false", layoutDependency, layoutId: "MainMagazine__bKqIWFGk9", style: { filter: "brightness(0.75)", WebkitFilter: "brightness(0.75)" }, ...addPropertyOverrides4({ G4DLB8S6g: { background: { alt: "", fit: "fill", sizes: `max(${componentViewport?.width || "100vw"}, 1px)`, ...toResponsiveImage3(ewNw3V74Ur2SYpTpbt) } }, jWZKHdvR1: { background: { alt: "", fit: "fill", sizes: `max(${componentViewport?.width || "100vw"}, 1px)`, ...toResponsiveImage3(ewNw3V74Ur2SYpTpbt) } } }, baseVariant, gestureVariant) }), /* @__PURE__ */ _jsxs5(motion8.div, { className: "framer-sde6jg", "data-framer-name": "Content", layoutDependency, layoutId: "MainMagazine__Pt75e_VgL", style: { background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, var(--token-6aca2af6-7bc8-421c-b8cd-bfc0b39cfbb4, rgba(0, 0, 0, 0.4)) 100%)" }, children: [/* @__PURE__ */ _jsxs5(motion8.div, { className: "framer-1j6soa4", "data-framer-name": "Text", layoutDependency, layoutId: "MainMagazine__SrRgw1ini", children: [/* @__PURE__ */ _jsx8(RichText5, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx8(React8.Fragment, { children: /* @__PURE__ */ _jsx8(motion8.h3, { className: "framer-styles-preset-1xcc6ic", "data-styles-preset": "uqBUPUQHk", dir: "auto", style: { "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-a0htzi, var(--token-e0ec22b8-2ee9-41b9-9c9b-068af203c374, rgb(255, 255, 255)))" }, children: "Nike\u2019s Air Works Program Gathers Designers From Around the World to Co-Create the Future of Air Max" }) }), className: "framer-1jywv1r", fonts: ["Inter"], layoutDependency, layoutId: "MainMagazine__IjSg4RLDU", style: { "--extracted-a0htzi": "var(--token-e0ec22b8-2ee9-41b9-9c9b-068af203c374, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, text: TW6CR4xWIr2SYpTpbt, variants: { G4DLB8S6g: { "--extracted-1w1cjl5": "var(--token-e0ec22b8-2ee9-41b9-9c9b-068af203c374, rgb(255, 255, 255))" } }, verticalAlignment: "top", withExternalLayout: true, ...addPropertyOverrides4({ G4DLB8S6g: { children: /* @__PURE__ */ _jsx8(React8.Fragment, { children: /* @__PURE__ */ _jsx8(motion8.h6, { className: "framer-styles-preset-1xcc6ic", "data-styles-preset": "uqBUPUQHk", dir: "auto", style: { "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-1w1cjl5, var(--token-e0ec22b8-2ee9-41b9-9c9b-068af203c374, rgb(255, 255, 255)))" }, children: "Nike\u2019s Air Works Program Gathers Designers From Around the World to Co-Create the Future of Air Max" }) }) } }, baseVariant, gestureVariant) }), /* @__PURE__ */ _jsx8(RichText5, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx8(React8.Fragment, { children: /* @__PURE__ */ _jsx8(motion8.p, { className: "framer-styles-preset-r0nisa", "data-styles-preset": "h36udAO3c", dir: "auto", style: { "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-51691b3f-8afa-49cb-9774-3217d6caa732, rgb(217, 217, 217)))" }, children: "We're launching a limited edition collection in the coming months. " }) }), className: "framer-n9zqwt", fonts: ["Inter"], layoutDependency, layoutId: "MainMagazine__uZBR7ySM6", style: { "--extracted-r6o4lv": "var(--token-51691b3f-8afa-49cb-9774-3217d6caa732, rgb(217, 217, 217))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, text: Kh8Gry2oer2SYpTpbt, verticalAlignment: "top", withExternalLayout: true })] }), /* @__PURE__ */ _jsx8(ResolveLinks, { links: [{ href: { pathVariables: { XLYJvQM4P: XLYJvQM4Pr2SYpTpbt }, webPageId: "ja8Mitsv9" }, implicitPathVariables: void 0 }, { href: { pathVariables: { XLYJvQM4P: XLYJvQM4Pr2SYpTpbt }, webPageId: "ja8Mitsv9" }, implicitPathVariables: void 0 }, { href: { pathVariables: { XLYJvQM4P: XLYJvQM4Pr2SYpTpbt }, webPageId: "ja8Mitsv9" }, implicitPathVariables: void 0 }], children: (resolvedLinks) => /* @__PURE__ */ _jsx8(ComponentViewportProvider2, { height: 29, children: /* @__PURE__ */ _jsx8(SmartComponentScopedContainer2, { className: "framer-1cibkac-container", layoutDependency, layoutId: "MainMagazine__cNQwgPELi-container", nodeId: "cNQwgPELi", rendersWithMotion: true, scopeId: "tupKOS5Mn", children: /* @__PURE__ */ _jsx8(b_m5Js9Ir_default, { height: "100%", hZdVwdl_Y: false, id: "cNQwgPELi", layoutId: "MainMagazine__cNQwgPELi", peKL8pfJA: wggGXhZaC_default, TDPWRYXxk: "Read Now", variant: matchVariant2("fGebBpVaS"), vFRI3q06T: resolvedLinks[0], width: "100%", ...addPropertyOverrides4({ G4DLB8S6g: { vFRI3q06T: resolvedLinks[2] }, jWZKHdvR1: { vFRI3q06T: resolvedLinks[1] } }, baseVariant, gestureVariant) }) }) }) })] })] }) }) }, idr2SYpTpbt);
    }) });
  } }) }) })] }), /* @__PURE__ */ _jsx8(motion8.section, { className: "framer-fax84e", layoutDependency, layoutId: "MainMagazine__NwkIJQawq", children: /* @__PURE__ */ _jsx8(ChildrenCanSuspend, { children: /* @__PURE__ */ _jsx8(QueryData, { query: query5(), children: (collection2, paginationInfo2, loadMore2) => {
    return /* @__PURE__ */ _jsx8(_Fragment, { children: collection2?.map(({ csLuHnld1: csLuHnld1NwkIJQawq, ewNw3V74U: ewNw3V74UNwkIJQawq, id: idNwkIJQawq, TW6CR4xWI: TW6CR4xWINwkIJQawq, XLYJvQM4P: XLYJvQM4PNwkIJQawq }, index1) => {
      XLYJvQM4PNwkIJQawq ?? (XLYJvQM4PNwkIJQawq = "");
      TW6CR4xWINwkIJQawq ?? (TW6CR4xWINwkIJQawq = "");
      return /* @__PURE__ */ _jsx8(LayoutGroup6, { id: `NwkIJQawq-${idNwkIJQawq}`, children: /* @__PURE__ */ _jsx8(PathVariablesContext.Provider, { value: { XLYJvQM4P: XLYJvQM4PNwkIJQawq }, children: /* @__PURE__ */ _jsx8(ResolveLinks, { links: [{ href: { pathVariables: { XLYJvQM4P: XLYJvQM4PNwkIJQawq }, webPageId: "ja8Mitsv9" }, implicitPathVariables: void 0 }, { href: { pathVariables: { XLYJvQM4P: XLYJvQM4PNwkIJQawq }, webPageId: "ja8Mitsv9" }, implicitPathVariables: void 0 }, { href: { pathVariables: { XLYJvQM4P: XLYJvQM4PNwkIJQawq }, webPageId: "ja8Mitsv9" }, implicitPathVariables: void 0 }], children: (resolvedLinks1) => /* @__PURE__ */ _jsx8(ComponentViewportProvider2, { height: 419, width: `max(min(${componentViewport?.width || "100vw"}, 1200px) - 128px, 1px)`, ...addPropertyOverrides4({ G4DLB8S6g: { width: `calc(min(${componentViewport?.width || "100vw"}, 500px) - 56px)` }, jWZKHdvR1: { width: `max(min(${componentViewport?.width || "100vw"}, 1200px) - 88px, 1px)` } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx8(SmartComponentScopedContainer2, { className: "framer-29j4zx-container", layoutDependency, layoutId: "MainMagazine__wf2RZoEzX-container", nodeId: "wf2RZoEzX", rendersWithMotion: true, scopeId: "tupKOS5Mn", children: /* @__PURE__ */ _jsx8(ndzuqCusO_default, { gPJQWheCc: resolvedLinks1[0], height: "100%", HsoOXef_w: TW6CR4xWINwkIJQawq, id: "wf2RZoEzX", layoutId: "MainMagazine__wf2RZoEzX", qwaFNB3PS: toResponsiveImage3(ewNw3V74UNwkIJQawq), style: { width: "100%" }, WDxiXD_gi: csLuHnld1NwkIJQawq, width: "100%", ...addPropertyOverrides4({ G4DLB8S6g: { gPJQWheCc: resolvedLinks1[2] }, jWZKHdvR1: { gPJQWheCc: resolvedLinks1[1] } }, baseVariant, gestureVariant) }) }) }) }) }) }, idNwkIJQawq);
    }) });
  } }) }) }), /* @__PURE__ */ _jsxs5(motion8.section, { className: "framer-1bu789r", "data-framer-name": "All publishes", layoutDependency, layoutId: "MainMagazine__aHCdOXe4D", children: [/* @__PURE__ */ _jsxs5(motion8.div, { className: "framer-nad0f4", "data-framer-name": "Header", layoutDependency, layoutId: "MainMagazine__xzopv9E6Q", children: [/* @__PURE__ */ _jsxs5(motion8.div, { className: "framer-6haqwp", "data-framer-name": "Title & Search Bar", layoutDependency, layoutId: "MainMagazine__Apb9AgeKH", children: [/* @__PURE__ */ _jsx8(RichText5, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx8(React8.Fragment, { children: /* @__PURE__ */ _jsx8(motion8.h3, { className: "framer-styles-preset-1cs224s", "data-styles-preset": "nV6XvMHlN", dir: "auto", children: "All publishes" }) }), className: "framer-1iqtvl8", fonts: ["Inter"], layoutDependency, layoutId: "MainMagazine__HVOyYHkhN", style: { "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx8(motion8.div, { className: "framer-17jnjf4", "data-framer-name": "Search Bar", layoutDependency, layoutId: "MainMagazine__lFqE7nDZ6", children: /* @__PURE__ */ _jsx8(FormPlainTextInput, { className: "framer-1a0bets", inputName: "VBvKvUnmx", layoutDependency, layoutId: "MainMagazine__VBvKvUnmx", onChange: (event) => setiTzLusSg5(event.target.value || void 0), onClear: () => setiTzLusSg5(void 0), placeholder: "Search\u2026", style: { "--corner-shape-fallback": 0.796, "--framer-input-background": "var(--token-f01462ef-eed7-451f-81c9-11ad0be4b3de, rgb(245, 245, 245))", "--framer-input-border-radius-bottom-left": "calc(14px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(14px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(14px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(14px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.4)", "--framer-input-font-color": "var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, rgb(0, 0, 0))", "--framer-input-icon-color": "rgb(153, 153, 153)", "--framer-input-icon-content": '""', "--framer-input-icon-mask-image": "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 fill=%22none%22><path d=%22M7 2.5a5 5 0 0 1 4.13 7.82l2.03 2.03a.75.75 0 0 1-1.06 1.06l-2-2A5 5 0 1 1 7 2.5Zm-3.5 5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0Z%22 fill=%22%23999%22/></svg>')", "--framer-input-placeholder-color": "var(--token-7d0d6ded-a16b-44b0-b3c5-41032df0ed2d, rgb(148, 148, 148))" }, type: "text", value: iTzLusSg5 ?? "", ...addPropertyOverrides4({ G4DLB8S6g: { inputName: "G4DLB8S6gVBvKvUnmx" }, jWZKHdvR1: { inputName: "jWZKHdvR1VBvKvUnmx" } }, baseVariant, gestureVariant) }) })] }), /* @__PURE__ */ _jsx8(ComponentViewportProvider2, { height: 1, width: `calc(min(${componentViewport?.width || "100vw"}, 1200px) - 128px)`, ...addPropertyOverrides4({ G4DLB8S6g: { width: `calc(min(${componentViewport?.width || "100vw"}, 500px) - 56px)` }, jWZKHdvR1: { width: `calc(min(${componentViewport?.width || "100vw"}, 1200px) - 88px)` } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx8(SmartComponentScopedContainer2, { className: "framer-qw4wha-container", layoutDependency, layoutId: "MainMagazine__TTAgTq4d8-container", nodeId: "TTAgTq4d8", rendersWithMotion: true, scopeId: "tupKOS5Mn", children: /* @__PURE__ */ _jsx8(BbFuZPGaK_default, { height: "100%", id: "TTAgTq4d8", layoutId: "MainMagazine__TTAgTq4d8", style: { height: "100%", width: "100%" }, variant: matchVariant2("FveAb6f2W"), width: "100%" }) }) })] }), /* @__PURE__ */ _jsx8(motion8.div, { className: "framer-l155k7", layoutDependency, layoutId: "MainMagazine__xA8sWU4Vd", children: /* @__PURE__ */ _jsx8(ChildrenCanSuspend, { children: /* @__PURE__ */ _jsx8(QueryData, { query: query7(iTzLusSg5), children: (collection3, paginationInfo3, loadMore3) => {
    const repeater_item_countxA8sWU4Vd = collection3?.length ?? 0;
    const visible = equals(repeater_item_countxA8sWU4Vd, 0);
    return /* @__PURE__ */ _jsxs5(_Fragment, { children: [collection3?.map(({ csLuHnld1: csLuHnld1xA8sWU4Vd, ewNw3V74U: ewNw3V74UxA8sWU4Vd, id: idxA8sWU4Vd, TW6CR4xWI: TW6CR4xWIxA8sWU4Vd, XLYJvQM4P: XLYJvQM4PxA8sWU4Vd }, index2) => {
      TW6CR4xWIxA8sWU4Vd ?? (TW6CR4xWIxA8sWU4Vd = "");
      XLYJvQM4PxA8sWU4Vd ?? (XLYJvQM4PxA8sWU4Vd = "");
      return /* @__PURE__ */ _jsx8(LayoutGroup6, { id: `xA8sWU4Vd-${idxA8sWU4Vd}`, children: /* @__PURE__ */ _jsx8(PathVariablesContext.Provider, { value: { XLYJvQM4P: XLYJvQM4PxA8sWU4Vd }, children: /* @__PURE__ */ _jsxs5(motion8.div, { className: "framer-5o6mi8", layoutDependency, layoutId: "MainMagazine__J_gFFdoik", children: [/* @__PURE__ */ _jsx8(ResolveLinks, { links: [{ href: { pathVariables: { XLYJvQM4P: XLYJvQM4PxA8sWU4Vd }, webPageId: "ja8Mitsv9" }, implicitPathVariables: void 0 }, { href: { pathVariables: { XLYJvQM4P: XLYJvQM4PxA8sWU4Vd }, webPageId: "ja8Mitsv9" }, implicitPathVariables: void 0 }, { href: { pathVariables: { XLYJvQM4P: XLYJvQM4PxA8sWU4Vd }, webPageId: "ja8Mitsv9" }, implicitPathVariables: void 0 }], children: (resolvedLinks2) => /* @__PURE__ */ _jsx8(ComponentViewportProvider2, { height: 164, width: `calc(min(${componentViewport?.width || "100vw"}, 1200px) - 128px)`, ...addPropertyOverrides4({ G4DLB8S6g: { width: `calc(min(${componentViewport?.width || "100vw"}, 500px) - 56px)` }, jWZKHdvR1: { width: `calc(min(${componentViewport?.width || "100vw"}, 1200px) - 88px)` } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx8(SmartComponentScopedContainer2, { className: "framer-ikpid3-container", layoutDependency, layoutId: "MainMagazine__lxyg4ROAw-container", nodeId: "lxyg4ROAw", rendersWithMotion: true, scopeId: "tupKOS5Mn", children: /* @__PURE__ */ _jsx8(uawOVD3oE_default, { height: "100%", id: "lxyg4ROAw", l2Ml9f2CA: toResponsiveImage3(ewNw3V74UxA8sWU4Vd), layoutId: "MainMagazine__lxyg4ROAw", NQPNP7axw: csLuHnld1xA8sWU4Vd, OIZ1_NbrT: TW6CR4xWIxA8sWU4Vd, style: { width: "100%" }, variant: matchVariant2("kgKnbM4Xe"), width: "100%", wvadA_zEA: resolvedLinks2[0], ...addPropertyOverrides4({ G4DLB8S6g: { variant: matchVariant2("dBw2pqMUa"), wvadA_zEA: resolvedLinks2[2] }, jWZKHdvR1: { variant: matchVariant2("XIO_gOeW_"), wvadA_zEA: resolvedLinks2[1] } }, baseVariant, gestureVariant) }) }) }) }), /* @__PURE__ */ _jsx8(ComponentViewportProvider2, { height: 1, width: `calc(min(${componentViewport?.width || "100vw"}, 1200px) - 128px)`, ...addPropertyOverrides4({ G4DLB8S6g: { width: `calc(min(${componentViewport?.width || "100vw"}, 500px) - 56px)` }, jWZKHdvR1: { width: `calc(min(${componentViewport?.width || "100vw"}, 1200px) - 88px)` } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx8(SmartComponentScopedContainer2, { className: "framer-19ob0uw-container", layoutDependency, layoutId: "MainMagazine__aryiLU0tB-container", nodeId: "aryiLU0tB", rendersWithMotion: true, scopeId: "tupKOS5Mn", children: /* @__PURE__ */ _jsx8(BbFuZPGaK_default, { height: "100%", id: "aryiLU0tB", layoutId: "MainMagazine__aryiLU0tB", style: { height: "100%", width: "100%" }, variant: matchVariant2("FveAb6f2W"), width: "100%" }) }) })] }) }) }, idxA8sWU4Vd);
    }), visible !== false && /* @__PURE__ */ _jsx8(ComponentViewportProvider2, { height: 400, width: `calc(min(${componentViewport?.width || "100vw"}, 1200px) - 128px)`, ...addPropertyOverrides4({ G4DLB8S6g: { width: `calc(min(${componentViewport?.width || "100vw"}, 500px) - 56px)` }, jWZKHdvR1: { width: `calc(min(${componentViewport?.width || "100vw"}, 1200px) - 88px)` } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx8(SmartComponentScopedContainer2, { className: "framer-70xwd5-container", layoutDependency, layoutId: "MainMagazine__bH09Pzlp1-container", nodeId: "bH09Pzlp1", rendersWithMotion: true, scopeId: "tupKOS5Mn", children: /* @__PURE__ */ _jsx8(AF0NNkhvm_default, { cIQQTftsx: cIQQTftsxsq9h7n, height: "100%", id: "bH09Pzlp1", layoutId: "MainMagazine__bH09Pzlp1", style: { height: "100%", width: "100%" }, width: "100%" }) }) })] });
  } }) }) })] })] }) }) }) });
});
var css17 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-AtOlR.framer-1t21sm0, .framer-AtOlR .framer-1t21sm0 { display: block; }", ".framer-AtOlR.framer-145luc6 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-AtOlR .framer-1v641kd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }", ".framer-AtOlR .framer-1baos1z { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; max-width: 1200px; min-height: calc(var(--framer-viewport-height, 100vh) * 0.4); overflow: var(--overflow-clip-fallback, clip); padding: 120px 64px 64px 64px; position: relative; width: 100%; }", ".framer-AtOlR .framer-1u3874s { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 50px; }", ".framer-AtOlR .framer-o8qqmr, .framer-AtOlR .framer-vbvs04 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-AtOlR .framer-4l5fuh { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }", ".framer-AtOlR .framer-1bsr354 { flex: none; height: auto; max-width: 350px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-AtOlR .framer-ujc29c, .framer-AtOlR .framer-1jywv1r { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-AtOlR .framer-18pimmf { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: 0px; position: relative; width: min-content; }", ".framer-AtOlR .framer-e15i7s { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 100vh; justify-content: center; padding: 0px; position: relative; width: 100%; }", ".framer-AtOlR .framer-k6vl26 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }", ".framer-AtOlR .framer-1b5p0n4 { -webkit-user-select: none; flex: 1 0 0px; height: 100%; position: relative; user-select: none; width: 1px; }", ".framer-AtOlR .framer-sde6jg { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: 100%; justify-content: flex-end; left: 0px; max-width: 1200px; overflow: var(--overflow-clip-fallback, clip); padding: 64px; position: absolute; top: 0px; width: 100%; z-index: 1; }", ".framer-AtOlR .framer-1j6soa4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 600px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }", '.framer-AtOlR .framer-n9zqwt { --text-truncation-display-inline-for-safari-16: inline; --text-truncation-display-none-for-safari-16: none; --text-truncation-line-break-for-safari-16: "\\A"; -webkit-box-orient: vertical; -webkit-line-clamp: 3; display: -webkit-box; flex: none; height: auto; max-width: 450px; overflow: var(--overflow-clip-fallback, clip); position: relative; white-space: pre-line; width: 100%; word-break: break-word; word-wrap: break-word; }', ".framer-AtOlR .framer-1cibkac-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-AtOlR .framer-fax84e { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; max-width: 1200px; padding: 64px; position: relative; width: 100%; }", ".framer-AtOlR .framer-29j4zx-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }", ".framer-AtOlR .framer-1bu789r { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 0px 64px 64px 64px; position: relative; width: 100%; }", ".framer-AtOlR .framer-nad0f4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-AtOlR .framer-6haqwp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-AtOlR .framer-1iqtvl8 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", ".framer-AtOlR .framer-17jnjf4 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 250px; overflow: visible; padding: 0px; position: relative; width: 1px; }", '.framer-AtOlR .framer-1a0bets { --framer-input-focused-box-shadow: 0px 0px 0px 2px var(--token-434336aa-a6fe-4798-9765-0e50c6ce5ef4, #007bff); --framer-input-focused-transition: all 0.2s cubic-bezier(0.44,0,0.56,1) 0s; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-padding: 9px; --framer-input-wrapper-height: auto; flex: 1 0 0px; height: auto; position: relative; width: 1px; }', ".framer-AtOlR .framer-qw4wha-container, .framer-AtOlR .framer-19ob0uw-container { flex: none; height: 1px; position: relative; width: 100%; }", ".framer-AtOlR .framer-l155k7 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }", ".framer-AtOlR .framer-5o6mi8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }", ".framer-AtOlR .framer-ikpid3-container { flex: none; height: auto; position: relative; width: 100%; }", ".framer-AtOlR .framer-70xwd5-container { flex: none; height: 400px; position: relative; width: 100%; }", ".framer-AtOlR.framer-v-13q62fw.framer-145luc6 { width: 100%; }", ".framer-AtOlR.framer-v-13q62fw .framer-1baos1z { padding: 120px 44px 64px 44px; }", ".framer-AtOlR.framer-v-13q62fw .framer-fax84e { padding: 44px; }", ".framer-AtOlR.framer-v-13q62fw .framer-1bu789r { padding: 0px 44px 44px 44px; }", ".framer-AtOlR.framer-v-1712gp5.framer-145luc6 { width: 100%; }", ".framer-AtOlR.framer-v-1712gp5 .framer-1baos1z { min-height: calc(var(--framer-viewport-height, 100vh) * 0.3); padding: 120px 28px 64px 28px; }", ".framer-AtOlR.framer-v-1712gp5 .framer-sde6jg { padding: 28px 28px 64px 28px; }", ".framer-AtOlR.framer-v-1712gp5 .framer-fax84e { flex-direction: column; gap: 24px; max-width: 500px; padding: 28px; }", ".framer-AtOlR.framer-v-1712gp5 .framer-29j4zx-container, .framer-AtOlR.framer-v-1712gp5 .framer-1iqtvl8 { flex: none; width: 100%; }", ".framer-AtOlR.framer-v-1712gp5 .framer-1bu789r { max-width: 500px; padding: 28px; }", ".framer-AtOlR.framer-v-1712gp5 .framer-6haqwp { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 24px; }", ".framer-AtOlR.framer-v-1712gp5 .framer-17jnjf4 { flex: none; max-width: unset; width: 100%; }", ...css2, ...css4, ...css5, ...css, ...css3];
var FramertupKOS5Mn = withCSS8(Component8, css17, "framer-AtOlR");
var tupKOS5Mn_default = FramertupKOS5Mn;
FramertupKOS5Mn.displayName = "Main Magazine";
FramertupKOS5Mn.defaultProps = { height: 2846, width: 1200 };
addPropertyControls8(FramertupKOS5Mn, { variant: { options: ["WwiHakYfG", "jWZKHdvR1", "G4DLB8S6g"], optionTitles: ["Desktop", "Tablet", "Phone"], title: "Variant", type: ControlType8.Enum }, lzQVoXmXH: { title: "Reset Filters", type: ControlType8.EventHandler }, iTzLusSg5: { optional: true, title: "Title", type: ControlType8.String }, oniTzLusSg5Change: { changes: "iTzLusSg5", type: ControlType8.ChangeHandler } });
addFonts6(FramertupKOS5Mn, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...ButtonFonts2, ...MagazineHighlightCardFonts, ...SeparatorFonts, ...MagazineCardFonts, ...MagazineEmptyStateFonts, ...getFontsFromSharedStyle5(fonts2), ...getFontsFromSharedStyle5(fonts4), ...getFontsFromSharedStyle5(fonts5), ...getFontsFromSharedStyle5(fonts), ...getFontsFromSharedStyle5(fonts3)], { supportsExplicitInterCodegen: true });
FramertupKOS5Mn.loader = { load: (props, context) => {
  const locale = context.locale;
  const queryCacheEntry = queryCache.get(query1(), locale);
  const queryCacheEntry1 = queryCache.get(query3(), locale);
  const queryCacheEntry2 = queryCache.get(query5(), locale);
  return Promise.allSettled([queryCacheEntry.preload(), queryCacheEntry1.preload(), queryCacheEntry2.preload(), forwardLoader2(BbFuZPGaK_default, {}, context), (async () => {
    const parentData = await queryCacheEntry1.readMaybeAsync() ?? [];
    return Promise.allSettled(parentData.flatMap((item) => forwardLoader2(b_m5Js9Ir_default, {}, context)));
  })(), (async () => {
    const parentData = await queryCacheEntry2.readMaybeAsync() ?? [];
    return Promise.allSettled(parentData.flatMap((item) => forwardLoader2(ndzuqCusO_default, {}, context)));
  })()]);
} };
var __FramerMetadata__ = { "exports": { "default": { "type": "reactComponent", "name": "FramertupKOS5Mn", "slots": [], "annotations": { "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"jWZKHdvR1":{"layout":["fixed","auto"]},"G4DLB8S6g":{"layout":["fixed","auto"]}}}', "framerDisplayContentsDiv": "false", "framerAutoSizeImages": "true", "framerContractVersion": "1", "framerIntrinsicHeight": "2846", "framerIntrinsicWidth": "1200", "framerVariables": '{"lzQVoXmXH":"resetFilters","iTzLusSg5":"title"}', "framerComponentViewportWidth": "true", "framerImmutableVariables": "true", "framerColorSyntax": "true" } }, "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  tupKOS5Mn_default as default
};
