
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

// http-url:https://framerusercontent.com/modules/agfXRGJooJxnXnlYd2Iu/r7m1iv9NWxIuCY35yDL7/DPAN4Oaz9.js
import { jsx as _jsx8, jsxs as _jsxs2, Fragment as _Fragment } from "react/jsx-runtime";
import { addFonts as addFonts5, addPropertyControls as addPropertyControls7, ChildrenCanSuspend, ComponentViewportProvider, ControlType as ControlType7, cx as cx8, Floating, FormBooleanInput, FormPlainTextInput, forwardLoader, getFonts, getFontsFromSharedStyle as getFontsFromSharedStyle4, patchBorderRadiusScaleCorrector as patchBorderRadiusScaleCorrector3, PathVariablesContext, queryCache, RichText as RichText4, SmartComponentScopedContainer, useActiveVariantCallback as useActiveVariantCallback3, useComponentViewport as useComponentViewport5, useLocaleInfo as useLocaleInfo5, useOverlayState, useQueryData, useVariantState as useVariantState5, withCSS as withCSS8, withFX, withOptimizedAppearEffect } from "./_framer-runtime.js";
import { AnimatePresence, LayoutGroup as LayoutGroup5, motion as motion8, MotionConfigContext as MotionConfigContext5 } from "framer-motion";
import * as React8 from "react";
import { useRef as useRef6 } from "react";

// http-url:https://framerusercontent.com/modules/0sYL7oXCpFvF2RErmtGc/KsSXcO3PhqEgm5lhqmr6/N2cLBMuUA.js
import { addPropertyControls as e4, ControlType as t4, QueryEngine as l3 } from "./_framer-runtime.js";

// http-url:https://framerusercontent.com/modules/0sYL7oXCpFvF2RErmtGc/KsSXcO3PhqEgm5lhqmr6/N2cLBMuUA-0.js
import { ControlType as y } from "./_framer-runtime.js";
import { ControlType as P } from "./_framer-runtime.js";
var t;
var e = Object.create;
var r = Object.defineProperty;
var n = Object.getOwnPropertyDescriptor;
var i = Object.getOwnPropertyNames;
var s = Object.getPrototypeOf;
var a = Object.prototype.hasOwnProperty;
var o = (t5, e5, n4) => e5 in t5 ? r(t5, e5, { enumerable: true, configurable: true, writable: true, value: n4 }) : t5[e5] = n4;
var u = (t5, e5) => function() {
  return e5 || (0, t5[i(t5)[0]])((e5 = { exports: {} }).exports, e5), e5.exports;
};
var l = (t5, e5, s3, o4) => {
  if (e5 && "object" == typeof e5 || "function" == typeof e5)
    for (let u4 of i(e5))
      a.call(t5, u4) || u4 === s3 || r(t5, u4, { get: () => e5[u4], enumerable: !(o4 = n(e5, u4)) || o4.enumerable });
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
var c = (t5, e5, r4) => o(t5, "symbol" != typeof e5 ? e5 + "" : e5, r4);
var f = u({ "../../../node_modules/dataloader/index.js"(t5, e5) {
  var r4, n4 = /* @__PURE__ */ function() {
    function t6(t7, e7) {
      if ("function" != typeof t7)
        throw TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: " + t7 + ".");
      this._batchLoadFn = t7, this._maxBatchSize = function(t8) {
        if (!(!t8 || false !== t8.batch))
          return 1;
        var e8 = t8 && t8.maxBatchSize;
        if (void 0 === e8)
          return 1 / 0;
        if ("number" != typeof e8 || e8 < 1)
          throw TypeError("maxBatchSize must be a positive number: " + e8);
        return e8;
      }(e7), this._batchScheduleFn = function(t8) {
        var e8 = t8 && t8.batchScheduleFn;
        if (void 0 === e8)
          return i3;
        if ("function" != typeof e8)
          throw TypeError("batchScheduleFn must be a function: " + e8);
        return e8;
      }(e7), this._cacheKeyFn = function(t8) {
        var e8 = t8 && t8.cacheKeyFn;
        if (void 0 === e8)
          return function(t9) {
            return t9;
          };
        if ("function" != typeof e8)
          throw TypeError("cacheKeyFn must be a function: " + e8);
        return e8;
      }(e7), this._cacheMap = function(t8) {
        if (!(!t8 || false !== t8.cache))
          return null;
        var e8 = t8 && t8.cacheMap;
        if (void 0 === e8)
          return /* @__PURE__ */ new Map();
        if (null !== e8) {
          var r5 = ["get", "set", "delete", "clear"].filter(function(t9) {
            return e8 && "function" != typeof e8[t9];
          });
          if (0 !== r5.length)
            throw TypeError("Custom cacheMap missing methods: " + r5.join(", "));
        }
        return e8;
      }(e7), this._batch = null, this.name = e7 && e7.name ? e7.name : null;
    }
    var e6 = t6.prototype;
    return e6.load = function(t7) {
      if (null == t7)
        throw TypeError("The loader.load() function must be called with a value, but got: " + String(t7) + ".");
      var e7 = function(t8) {
        var e8 = t8._batch;
        if (null !== e8 && !e8.hasDispatched && e8.keys.length < t8._maxBatchSize)
          return e8;
        var r6 = { hasDispatched: false, keys: [], callbacks: [] };
        return t8._batch = r6, t8._batchScheduleFn(function() {
          (function(t9, e9) {
            var r7;
            if (e9.hasDispatched = true, 0 === e9.keys.length) {
              a3(e9);
              return;
            }
            try {
              r7 = t9._batchLoadFn(e9.keys);
            } catch (r8) {
              return s3(t9, e9, TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: " + String(r8) + "."));
            }
            if (!r7 || "function" != typeof r7.then)
              return s3(t9, e9, TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: " + String(r7) + "."));
            r7.then(function(t10) {
              if (!o4(t10))
                throw TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: " + String(t10) + ".");
              if (t10.length !== e9.keys.length)
                throw TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.\n\nKeys:\n" + String(e9.keys) + "\n\nValues:\n" + String(t10));
              a3(e9);
              for (var r8 = 0; r8 < e9.callbacks.length; r8++) {
                var n6 = t10[r8];
                n6 instanceof Error ? e9.callbacks[r8].reject(n6) : e9.callbacks[r8].resolve(n6);
              }
            }).catch(function(r8) {
              s3(t9, e9, r8);
            });
          })(t8, r6);
        }), r6;
      }(this), r5 = this._cacheMap, n5 = this._cacheKeyFn(t7);
      if (r5) {
        var i4 = r5.get(n5);
        if (i4) {
          var u4 = e7.cacheHits || (e7.cacheHits = []);
          return new Promise(function(t8) {
            u4.push(function() {
              t8(i4);
            });
          });
        }
      }
      e7.keys.push(t7);
      var l4 = new Promise(function(t8, r6) {
        e7.callbacks.push({ resolve: t8, reject: r6 });
      });
      return r5 && r5.set(n5, l4), l4;
    }, e6.loadMany = function(t7) {
      if (!o4(t7))
        throw TypeError("The loader.loadMany() function must be called with Array<key> but got: " + t7 + ".");
      for (var e7 = [], r5 = 0; r5 < t7.length; r5++)
        e7.push(this.load(t7[r5]).catch(function(t8) {
          return t8;
        }));
      return Promise.all(e7);
    }, e6.clear = function(t7) {
      var e7 = this._cacheMap;
      if (e7) {
        var r5 = this._cacheKeyFn(t7);
        e7.delete(r5);
      }
      return this;
    }, e6.clearAll = function() {
      var t7 = this._cacheMap;
      return t7 && t7.clear(), this;
    }, e6.prime = function(t7, e7) {
      var r5 = this._cacheMap;
      if (r5) {
        var n5, i4 = this._cacheKeyFn(t7);
        void 0 === r5.get(i4) && (e7 instanceof Error ? (n5 = Promise.reject(e7)).catch(function() {
        }) : n5 = Promise.resolve(e7), r5.set(i4, n5));
      }
      return this;
    }, t6;
  }(), i3 = "object" == typeof process && "function" == typeof process.nextTick ? function(t6) {
    r4 || (r4 = Promise.resolve()), r4.then(function() {
      process.nextTick(t6);
    });
  } : "function" == typeof setImmediate ? function(t6) {
    setImmediate(t6);
  } : function(t6) {
    setTimeout(t6);
  };
  function s3(t6, e6, r5) {
    a3(e6);
    for (var n5 = 0; n5 < e6.keys.length; n5++)
      t6.clear(e6.keys[n5]), e6.callbacks[n5].reject(r5);
  }
  function a3(t6) {
    if (t6.cacheHits)
      for (var e6 = 0; e6 < t6.cacheHits.length; e6++)
        t6.cacheHits[e6]();
  }
  function o4(t6) {
    return "object" == typeof t6 && null !== t6 && "number" == typeof t6.length && (0 === t6.length || t6.length > 0 && Object.prototype.hasOwnProperty.call(t6, t6.length - 1));
  }
  e5.exports = n4;
} });
var d = h(f(), 1);
var g = { Uint8: 1, Uint16: 2, Uint32: 4, BigUint64: 8, Int8: 1, Int16: 2, Int32: 4, BigInt64: 8, Float32: 4, Float64: 8 };
var p = class {
  getOffset() {
    return this.offset;
  }
  ensureLength(t5) {
    let e5 = this.bytes.length;
    if (!(this.offset + t5 <= e5))
      throw Error("Reading out of bounds");
  }
  readUint8() {
    let t5 = g.Uint8;
    this.ensureLength(t5);
    let e5 = this.view.getUint8(this.offset);
    return this.offset += t5, e5;
  }
  readUint16() {
    let t5 = g.Uint16;
    this.ensureLength(t5);
    let e5 = this.view.getUint16(this.offset);
    return this.offset += t5, e5;
  }
  readUint32() {
    let t5 = g.Uint32;
    this.ensureLength(t5);
    let e5 = this.view.getUint32(this.offset);
    return this.offset += t5, e5;
  }
  readUint64() {
    let t5 = this.readBigUint64();
    return Number(t5);
  }
  readBigUint64() {
    let t5 = g.BigUint64;
    this.ensureLength(t5);
    let e5 = this.view.getBigUint64(this.offset);
    return this.offset += t5, e5;
  }
  readInt8() {
    let t5 = g.Int8;
    this.ensureLength(t5);
    let e5 = this.view.getInt8(this.offset);
    return this.offset += t5, e5;
  }
  readInt16() {
    let t5 = g.Int16;
    this.ensureLength(t5);
    let e5 = this.view.getInt16(this.offset);
    return this.offset += t5, e5;
  }
  readInt32() {
    let t5 = g.Int32;
    this.ensureLength(t5);
    let e5 = this.view.getInt32(this.offset);
    return this.offset += t5, e5;
  }
  readInt64() {
    let t5 = this.readBigInt64();
    return Number(t5);
  }
  readBigInt64() {
    let t5 = g.BigInt64;
    this.ensureLength(t5);
    let e5 = this.view.getBigInt64(this.offset);
    return this.offset += t5, e5;
  }
  readFloat32() {
    let t5 = g.Float32;
    this.ensureLength(t5);
    let e5 = this.view.getFloat32(this.offset);
    return this.offset += t5, e5;
  }
  readFloat64() {
    let t5 = g.Float64;
    this.ensureLength(t5);
    let e5 = this.view.getFloat64(this.offset);
    return this.offset += t5, e5;
  }
  readBytes(t5) {
    let e5 = this.offset, r4 = e5 + t5, n4 = this.bytes.subarray(e5, r4);
    return this.offset = r4, n4;
  }
  readString() {
    let t5 = this.readUint32(), e5 = this.readBytes(t5);
    return this.decoder.decode(e5);
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
function I(t5, ...e5) {
  if (!t5)
    throw Error("Assertion Error" + (e5.length > 0 ? ": " + e5.join(" ") : ""));
}
function b(t5) {
  throw Error(`Unexpected value: ${t5}`);
}
var k = (t5) => 2 ** t5 - 1;
var L = (t5) => -(2 ** (t5 - 1));
var B = (t5) => 2 ** (t5 - 1) - 1;
var E = { Uint8: 0, Uint16: 0, Uint32: 0, Uint64: 0, BigUint64: 0, Int8: L(8), Int16: L(16), Int32: L(32), Int64: Number.MIN_SAFE_INTEGER, BigInt64: -(BigInt(2) ** BigInt(63)) };
var M = { Uint8: k(8), Uint16: k(16), Uint32: k(32), Uint64: Number.MAX_SAFE_INTEGER, BigUint64: BigInt(2) ** BigInt(64) - BigInt(1), Int8: B(8), Int16: B(16), Int32: B(32), Int64: Number.MAX_SAFE_INTEGER, BigInt64: BigInt(2) ** BigInt(63) - BigInt(1) };
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
  static fromString(e5) {
    let [r4, n4, i3] = e5.split("/").map(Number);
    return I(N(r4), "Invalid chunkId"), I(N(n4), "Invalid offset"), I(N(i3), "Invalid length"), new t2(r4, n4, i3);
  }
  toString() {
    return `${this.chunkId}/${this.offset}/${this.length}`;
  }
  static read(e5) {
    let r4 = e5.readUint16(), n4 = e5.readUint32(), i3 = e5.readUint32();
    return new t2(r4, n4, i3);
  }
  write(t5) {
    t5.writeUint16(this.chunkId), t5.writeUint32(this.offset), t5.writeUint32(this.length);
  }
  compare(t5) {
    return this.chunkId < t5.chunkId ? -1 : this.chunkId > t5.chunkId ? 1 : this.offset < t5.offset ? -1 : this.offset > t5.offset ? 1 : (I(this.length === t5.length), 0);
  }
  constructor(t5, e5, r4) {
    this.chunkId = t5, this.offset = e5, this.length = r4;
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
function q(e5) {
  let r4 = e5.readUint16(), n4 = [];
  for (let i3 = 0; i3 < r4; i3++) {
    let r5 = t.read(e5);
    n4.push(r5);
  }
  return { type: P.Array, value: n4 };
}
function _(e5, r4) {
  for (let n4 of (e5.writeUint16(r4.value.length), r4.value))
    t.write(e5, n4);
}
function D(e5, r4, n4) {
  let i3 = e5.value.length, s3 = r4.value.length;
  if (i3 < s3)
    return -1;
  if (i3 > s3)
    return 1;
  for (let s4 = 0; s4 < i3; s4++) {
    let i4 = e5.value[s4], a3 = r4.value[s4], o4 = t.compare(i4, a3, n4);
    if (0 !== o4)
      return o4;
  }
  return 0;
}
function j(t5) {
  return { type: P.Boolean, value: 0 !== t5.readUint8() };
}
function C(t5, e5) {
  t5.writeUint8(e5.value ? 1 : 0);
}
function J(t5, e5) {
  return t5.value < e5.value ? -1 : t5.value > e5.value ? 1 : 0;
}
function V(t5) {
  return { type: P.Color, value: t5.readString() };
}
function W(t5, e5) {
  t5.writeString(e5.value);
}
function $(t5, e5) {
  return t5.value < e5.value ? -1 : t5.value > e5.value ? 1 : 0;
}
function z(t5) {
  let e5 = t5.readInt64(), r4 = new Date(e5);
  return { type: P.Date, value: r4.toISOString() };
}
function G(t5, e5) {
  let r4 = new Date(e5.value), n4 = r4.getTime();
  t5.writeInt64(n4);
}
function K(t5, e5) {
  let r4 = new Date(t5.value), n4 = new Date(e5.value);
  return r4 < n4 ? -1 : r4 > n4 ? 1 : 0;
}
function H(t5) {
  return { type: P.Enum, value: t5.readString() };
}
function X(t5, e5) {
  t5.writeString(e5.value);
}
function Q(t5, e5) {
  return t5.value < e5.value ? -1 : t5.value > e5.value ? 1 : 0;
}
function Y(t5) {
  return { type: P.File, value: t5.readString() };
}
function Z(t5, e5) {
  t5.writeString(e5.value);
}
function tt(t5, e5) {
  return t5.value < e5.value ? -1 : t5.value > e5.value ? 1 : 0;
}
function te(t5) {
  return { type: P.Link, value: t5.readJson() };
}
function tr(t5, e5) {
  t5.writeJson(e5.value);
}
function tn(t5, e5) {
  let r4 = JSON.stringify(t5.value), n4 = JSON.stringify(e5.value);
  return r4 < n4 ? -1 : r4 > n4 ? 1 : 0;
}
function ti(t5) {
  return { type: P.Number, value: t5.readFloat64() };
}
function ts(t5, e5) {
  t5.writeFloat64(e5.value);
}
function ta(t5, e5) {
  return t5.value < e5.value ? -1 : t5.value > e5.value ? 1 : 0;
}
function to(e5) {
  let r4 = e5.readUint16(), n4 = {};
  for (let i3 = 0; i3 < r4; i3++) {
    let r5 = e5.readString();
    n4[r5] = t.read(e5);
  }
  return { type: P.Object, value: n4 };
}
function tu(e5, r4) {
  let n4 = Object.entries(r4.value);
  for (let [r5, i3] of (e5.writeUint16(n4.length), n4))
    e5.writeString(r5), t.write(e5, i3);
}
function tl(e5, r4, n4) {
  let i3 = Object.keys(e5.value).sort(), s3 = Object.keys(r4.value).sort();
  if (i3.length < s3.length)
    return -1;
  if (i3.length > s3.length)
    return 1;
  for (let a3 = 0; a3 < i3.length; a3++) {
    let o4 = i3[a3], u4 = s3[a3];
    if (o4 < u4)
      return -1;
    if (o4 > u4)
      return 1;
    let l4 = e5.value[o4] ?? null, h2 = r4.value[u4] ?? null, c4 = t.compare(l4, h2, n4);
    if (0 !== c4)
      return c4;
  }
  return 0;
}
function th(t5) {
  return { type: P.ResponsiveImage, value: t5.readJson() };
}
function tc(t5, e5) {
  t5.writeJson(e5.value);
}
function tf(t5, e5) {
  let r4 = JSON.stringify(t5.value), n4 = JSON.stringify(e5.value);
  return r4 < n4 ? -1 : r4 > n4 ? 1 : 0;
}
function td(t5) {
  let e5 = t5.readInt8();
  if (0 === e5)
    return { type: P.RichText, value: t5.readUint32() };
  if (1 === e5)
    return { type: P.RichText, value: t5.readString() };
  throw Error("Invalid rich text pointer");
}
function tg(t5, e5) {
  if (N(e5.value)) {
    t5.writeInt8(0), t5.writeUint32(e5.value);
    return;
  }
  if (x(e5.value)) {
    t5.writeInt8(1), t5.writeString(e5.value);
    return;
  }
  throw Error("Invalid rich text pointer");
}
function tp(t5, e5) {
  let r4 = t5.value, n4 = e5.value;
  if (N(r4) && N(n4) || x(r4) && x(n4))
    return r4 < n4 ? -1 : r4 > n4 ? 1 : 0;
  throw Error("Invalid rich text pointer");
}
function tv(t5) {
  return { type: P.String, value: t5.readString() };
}
function ty(t5, e5) {
  t5.writeString(e5.value);
}
function tm(t5, e5, r4) {
  let n4 = t5.value, i3 = e5.value;
  return (0 === r4.type && (n4 = t5.value.toLowerCase(), i3 = e5.value.toLowerCase()), n4 < i3) ? -1 : n4 > i3 ? 1 : 0;
}
function tw(t5) {
  return { type: P.VectorSetItem, value: t5.readUint32() };
}
function tI(t5, e5) {
  t5.writeUint32(e5.value);
}
function tb(t5, e5) {
  let r4 = t5.value, n4 = e5.value;
  return r4 < n4 ? -1 : r4 > n4 ? 1 : 0;
}
((t5) => {
  t5.read = function(t6) {
    let e5 = t6.readUint8();
    switch (e5) {
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
        b(e5);
    }
  }, t5.write = function(t6, e5) {
    let r4 = R(e5);
    if (t6.writeUint8(r4), !A(e5))
      switch (e5.type) {
        case P.Array:
          return _(t6, e5);
        case P.Boolean:
          return C(t6, e5);
        case P.Color:
          return W(t6, e5);
        case P.Date:
          return G(t6, e5);
        case P.Enum:
          return X(t6, e5);
        case P.File:
          return Z(t6, e5);
        case P.Link:
          return tr(t6, e5);
        case P.Number:
          return ts(t6, e5);
        case P.Object:
          return tu(t6, e5);
        case P.ResponsiveImage:
          return tc(t6, e5);
        case P.RichText:
          return tg(t6, e5);
        case P.VectorSetItem:
          return tI(t6, e5);
        case P.String:
          return ty(t6, e5);
        default:
          b(e5);
      }
  }, t5.compare = function(t6, e5, r4) {
    let n4 = R(t6), i3 = R(e5);
    if (n4 < i3)
      return -1;
    if (n4 > i3)
      return 1;
    if (A(t6) || A(e5))
      return 0;
    switch (t6.type) {
      case P.Array:
        return I(e5.type === P.Array), D(t6, e5, r4);
      case P.Boolean:
        return I(e5.type === P.Boolean), J(t6, e5);
      case P.Color:
        return I(e5.type === P.Color), $(t6, e5);
      case P.Date:
        return I(e5.type === P.Date), K(t6, e5);
      case P.Enum:
        return I(e5.type === P.Enum), Q(t6, e5);
      case P.File:
        return I(e5.type === P.File), tt(t6, e5);
      case P.Link:
        return I(e5.type === P.Link), tn(t6, e5);
      case P.Number:
        return I(e5.type === P.Number), ta(t6, e5);
      case P.Object:
        return I(e5.type === P.Object), tl(t6, e5, r4);
      case P.ResponsiveImage:
        return I(e5.type === P.ResponsiveImage), tf(t6, e5);
      case P.RichText:
        return I(e5.type === P.RichText), tp(t6, e5);
      case P.VectorSetItem:
        return I(e5.type === P.VectorSetItem), tb(t6, e5);
      case P.String:
        return I(e5.type === P.String), tm(t6, e5, r4);
      default:
        b(t6);
    }
  };
})(t || (t = {}));
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
var tB = async (t5, e5) => {
  let r4 = 0;
  for (; ; ) {
    try {
      let n4 = await fetch(t5, e5);
      if (!tL.includes(n4.status) || ++r4 > tS)
        return n4;
    } catch (t6) {
      if (e5?.signal?.aborted || ++r4 > tS)
        throw t6;
    }
    await tE(r4);
  }
};
async function tE(t5) {
  let e5 = Math.floor(tk * (Math.random() + 1) * 2 ** (t5 - 1));
  await new Promise((t6) => {
    setTimeout(t6, e5);
  });
}
var __wholeFileCache = /* @__PURE__ */ new Map();
async function tM(t5, e5) {
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
  return bufP.then((buf) => e5.map((r) => buf.slice(r.from, r.to)));
}
var tT = class {
  read(t5, e5) {
    for (let r4 of this.chunks) {
      if (t5 < r4.start)
        break;
      if (t5 > r4.end)
        continue;
      if (t5 + e5 > r4.end)
        break;
      let n4 = t5 - r4.start, i3 = n4 + e5;
      return r4.data.slice(n4, i3);
    }
    throw Error("Missing data");
  }
  write(t5, e5) {
    let r4 = t5, n4 = r4 + e5.length, i3 = 0, s3 = this.chunks.length;
    for (; i3 < s3; i3++) {
      let t6 = this.chunks[i3];
      if (I(t6, "Missing chunk"), !(r4 > t6.end)) {
        if (r4 > t6.start) {
          let n5 = r4 - t6.start, i4 = t6.data.subarray(0, n5);
          e5 = tF(i4, e5), r4 = t6.start;
        }
        break;
      }
    }
    for (; s3 > i3; s3--) {
      let t6 = this.chunks[s3 - 1];
      if (I(t6, "Missing chunk"), !(n4 < t6.start)) {
        if (n4 < t6.end) {
          let r5 = n4 - t6.start, i4 = t6.data.subarray(r5);
          e5 = tF(e5, i4), n4 = t6.end;
        }
        break;
      }
    }
    let a3 = { start: r4, end: n4, data: e5 }, o4 = s3 - i3;
    this.chunks.splice(i3, o4, a3);
  }
  constructor() {
    c(this, "chunks", []);
  }
};
function tF(t5, e5) {
  let r4 = t5.length + e5.length, n4 = new Uint8Array(r4);
  return n4.set(t5, 0), n4.set(e5, t5.length), n4;
}
function tx(t5) {
  I(t5.length > 0, "Must have at least one range");
  let e5 = [...t5].sort((t6, e6) => t6.from - e6.from), r4 = [];
  for (let t6 of e5) {
    let e6 = r4.length - 1, n4 = r4[e6];
    n4 && t6.from <= n4.to ? r4[e6] = { from: n4.from, to: Math.max(n4.to, t6.to) } : r4.push(t6);
  }
  return r4;
}
var tA = class e2 {
  static read(r4) {
    let n4 = new e2(), i3 = r4.readUint16();
    for (let e5 = 0; e5 < i3; e5++) {
      let e6 = r4.readString(), i4 = t.read(r4);
      n4.setField(e6, i4);
    }
    return n4;
  }
  write(e5) {
    for (let [r4, n4] of (e5.writeUint16(this.fields.size), this.fields))
      e5.writeString(r4), t.write(e5, n4);
  }
  getData() {
    let t5 = {};
    for (let [e5, r4] of this.fields)
      t5[e5] = r4;
    return t5;
  }
  setField(t5, e5) {
    this.fields.set(t5, e5);
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
      let e5 = await t5.arrayBuffer(), r4 = new Uint8Array(e5), n4 = new p(r4), i3 = [], s3 = n4.readUint32();
      for (let t6 = 0; t6 < s3; t6++) {
        let t7 = n4.getOffset(), e6 = tA.read(n4), r5 = n4.getOffset() - t7, s4 = new O(this.id, t7, r5), a3 = s4.toString(), o4 = { pointer: a3, data: e6.getData() };
        this.itemLoader.prime(a3, o4), i3.push(o4);
      }
      return i3;
    })), this.itemsPromise;
  }
  resolveItem(t5) {
    return this.itemLoader.load(t5);
  }
  constructor(t5, e5) {
    this.id = t5, this.url = e5, c(this, "itemsPromise"), c(this, "itemLoader", new d.default(async (t6) => {
      let e6 = t6.map((t7) => {
        let e7 = O.fromString(t7);
        return { from: e7.offset, to: e7.offset + e7.length };
      }), r4 = await tM(this.url, e6);
      return r4.map((e7, r5) => {
        let n4 = new p(e7), i3 = tA.read(n4), s3 = t6[r5];
        return I(s3, "Missing pointer"), { pointer: s3, data: i3.getData() };
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
      let e5 = O.fromString(t6), r4 = this.chunks[e5.chunkId];
      return I(r4, "Missing chunk"), r4.resolveItem(t6);
    }));
  }
  compareItems(t5, e5) {
    let r4 = O.fromString(t5.pointer), n4 = O.fromString(e5.pointer);
    return r4.compare(n4);
  }
  compareValues(e5, r4, n4) {
    return t.compare(e5, r4, n4);
  }
  constructor(t5) {
    this.options = t5, c(this, "id"), c(this, "schema"), c(this, "indexes"), c(this, "resolveRichText"), c(this, "resolveVectorSetItem"), c(this, "chunks"), this.chunks = this.options.chunks.map((t6, e5) => new tO(e5, t6)), this.schema = t5.schema, this.indexes = t5.indexes, this.resolveRichText = t5.resolveRichText, this.resolveVectorSetItem = t5.resolveVectorSetItem, this.id = t5.id;
  }
};

// http-url:https://framerusercontent.com/modules/0sYL7oXCpFvF2RErmtGc/KsSXcO3PhqEgm5lhqmr6/N2cLBMuUA-1.js
import { jsx as e3 } from "react/jsx-runtime";
import { AutoBreakpointVariant as t3, ComponentPresetsConsumer as r2, Link as n2, motion as o2 } from "./_framer-runtime.js";
import { isValidElement as i2 } from "react";
import { Fragment as p2, createElement as s2 } from "react";
var a2;
var l2 = "undefined" != typeof __dai_window;
var f2 = l2 && "function" == typeof __dai_window.requestIdleCallback;
var u2 = "preload";
function c2(e5) {
  return "object" == typeof e5 && null !== e5 && !/* @__PURE__ */ i2(e5) && u2 in e5;
}
function m2(e5, ...t5) {
  if (!e5)
    throw Error("Assertion Error" + (t5.length > 0 ? ": " + t5.join(" ") : ""));
}
var d2 = ((a2 = d2 || {})[a2.Fragment = 1] = "Fragment", a2[a2.Link = 2] = "Link", a2[a2.Module = 3] = "Module", a2[a2.Tag = 4] = "Tag", a2[a2.Text = 5] = "Text", a2);
function g2(i3) {
  let a3 = /* @__PURE__ */ new Map();
  return (l4) => {
    let f3 = a3.get(l4);
    if (f3)
      return f3;
    let u4 = JSON.parse(l4), d4 = function a4(l5) {
      switch (l5[0]) {
        case 1: {
          let [, ...e5] = l5, t5 = e5.map(a4);
          return /* @__PURE__ */ s2(p2, void 0, ...t5);
        }
        case 2: {
          let [, e5, ...t5] = l5, r4 = t5.map(a4);
          return /* @__PURE__ */ s2(n2, e5, ...r4);
        }
        case 3: {
          let [, n4, o4, f4, u5] = l5;
          for (let e5 of f4) {
            let t5 = o4[e5];
            t5 && (o4[e5] = a4(t5));
          }
          for (let e5 of u5) {
            let t5 = o4[e5];
            if ("string" != typeof t5)
              continue;
            let r4 = i3[t5];
            r4 && (c2(r4) && r4.preload(), o4[e5] = r4);
          }
          let p4 = i3[n4];
          return m2(p4, "Module not found"), c2(p4) && p4.preload(), /* @__PURE__ */ e3(r2, { componentIdentifier: n4, children: (r4) => /* @__PURE__ */ e3(t3, { component: p4, props: { ...r4, ...o4 } }) });
        }
        case 4: {
          let [, e5, t5, ...r4] = l5, n4 = r4.map(a4);
          if ("a" === e5)
            return /* @__PURE__ */ s2(o2.a, t5, ...n4);
          return /* @__PURE__ */ s2(e5, t5, ...n4);
        }
        case 5: {
          let [, e5] = l5;
          return e5;
        }
      }
    }(u4);
    return a3.set(l4, d4), d4;
  };
}

// http-url:https://framerusercontent.com/modules/0sYL7oXCpFvF2RErmtGc/KsSXcO3PhqEgm5lhqmr6/N2cLBMuUA.js
var r3 = { ATsOqqDj8: { isNullable: true, type: t4.String }, ATZXIWoya: { isNullable: true, type: t4.String }, createdAt: { isNullable: true, type: t4.Date }, id: { isNullable: false, type: t4.String }, M6EPg92bX: { isNullable: true, type: t4.Enum }, nextItemId: { isNullable: true, type: t4.String }, previousItemId: { isNullable: true, type: t4.String }, updatedAt: { isNullable: true, type: t4.Date } };
var o3 = [];
var n3 = (e5) => {
  let t5 = o3[e5];
  if (t5)
    return t5().then((e6) => e6.default);
};
var u3 = {};
var d3 = g2(u3);
var p3 = new l3();
var c3 = { collectionByLocaleId: { default: new tP({ chunks: ["https://framerusercontent.com/modules/0sYL7oXCpFvF2RErmtGc/KsSXcO3PhqEgm5lhqmr6/N2cLBMuUA-chunk-default-0.framercms"], id: "fc53885d-96bc-4a80-99f1-0dd881b4ecf2default", indexes: [], resolveRichText: d3, resolveVectorSetItem: n3, schema: r3 }) }, displayName: "Metadata", id: "fc53885d-96bc-4a80-99f1-0dd881b4ecf2" };
var N2cLBMuUA_default = c3;
e4(c3, { ATZXIWoya: { defaultValue: "", title: "Title", type: t4.String }, ATsOqqDj8: { preventLocalization: true, title: "Slug", type: t4.String }, M6EPg92bX: { defaultValue: "bsr6K_9L6", options: ["bsr6K_9L6", "hLIbkFhin", "ZUowm3ft8"], optionTitles: ["Shoe Category", "Gender", "Collection"], title: "Type", type: t4.Enum }, createdAt: { title: "Created", type: t4.Date }, updatedAt: { title: "Updated", type: t4.Date }, previousItemId: { dataIdentifier: "local-module:collection/N2cLBMuUA:default", title: "Previous", type: t4.CollectionReference }, nextItemId: { dataIdentifier: "local-module:collection/N2cLBMuUA:default", title: "Next", type: t4.CollectionReference } });

// http-url:https://framerusercontent.com/modules/x792CL25E5sD9xXrqvMm/uqYErgItcWBHF3VgPrdn/bLruI0oTL.js
import { fontStore } from "./_framer-runtime.js";
fontStore.loadFonts(["Inter-Variable", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNTI1", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNTI1", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNTI1"]);
var variationAxes = [{ defaultValue: 14, maxValue: 32, minValue: 14, name: "Optical size", tag: "opsz" }, { defaultValue: 400, maxValue: 900, minValue: 100, name: "Weight", tag: "wght" }];
var fonts = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/mYcqTSergLb16PdbJJQMl9ebYm4.woff2", variationAxes, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2", variationAxes, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2", variationAxes, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/DYHjxG0qXjopUuruoacfl5SA.woff2", variationAxes, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2", variationAxes, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2", variationAxes, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2", variationAxes, weight: "400" }] }];
var css = ['.framer-UktaB .framer-styles-preset-1sqkecy:not(.rich-text-wrapper), .framer-UktaB .framer-styles-preset-1sqkecy.rich-text-wrapper p { --framer-font-family: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "opsz" 14, "wght" 525; --framer-font-variation-axes-bold: "opsz" 14, "wght" 525; --framer-font-variation-axes-bold-italic: "opsz" 14, "wght" 525; --framer-font-variation-axes-italic: "opsz" 14, "wght" 525; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.04em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }'];
var className = "framer-UktaB";

// http-url:https://framerusercontent.com/modules/pmoggTWmhxccZ8VWFvMy/CwgfCjbZuajs7tE5WxYA/ocOde6Lm9.js
import { fontStore as fontStore2 } from "./_framer-runtime.js";
fontStore2.loadFonts(["Inter-Variable", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNjI1", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNjI1", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNjI1"]);
var variationAxes2 = [{ defaultValue: 14, maxValue: 32, minValue: 14, name: "Optical size", tag: "opsz" }, { defaultValue: 400, maxValue: 900, minValue: 100, name: "Weight", tag: "wght" }];
var fonts2 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/mYcqTSergLb16PdbJJQMl9ebYm4.woff2", variationAxes: variationAxes2, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2", variationAxes: variationAxes2, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2", variationAxes: variationAxes2, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/DYHjxG0qXjopUuruoacfl5SA.woff2", variationAxes: variationAxes2, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2", variationAxes: variationAxes2, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2", variationAxes: variationAxes2, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2", variationAxes: variationAxes2, weight: "400" }] }];
var css2 = ['.framer-hoAO6 .framer-styles-preset-1v7qm6:not(.rich-text-wrapper), .framer-hoAO6 .framer-styles-preset-1v7qm6.rich-text-wrapper p { --framer-font-family: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 13px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "opsz" 14, "wght" 625; --framer-font-variation-axes-bold: "opsz" 14, "wght" 625; --framer-font-variation-axes-bold-italic: "opsz" 14, "wght" 625; --framer-font-variation-axes-italic: "opsz" 14, "wght" 625; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.04em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }'];
var className2 = "framer-hoAO6";

// http-url:https://framerusercontent.com/modules/P0N1EqiAeouWcDUuX04f/liMANN8zEFepdf0eeLiU/aq0DI8yMX.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addPropertyControls, ControlType, cx, motion, withCSS } from "./_framer-runtime.js";
import * as React from "react";
import { forwardRef as forwardRef2 } from "react";
var mask = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g d="M 46.95 24.967 C 51.335 18.622 50.465 10.031 44.896 4.695 C 39.249 -0.722 30.619 -1.543 24.052 2.711 C 21.356 4.451 19.237 6.961 17.973 9.913 C 16.725 12.836 16.398 16.07 17.036 19.183 C 17.677 22.309 19.244 25.172 21.529 27.4 C 26.331 31.992 33.373 33.355 39.542 30.885 C 42.539 29.686 45.115 27.63 46.95 24.973 Z M 52.509 76.322 C 48.124 69.976 48.994 61.386 54.563 56.049 C 60.208 50.631 68.839 49.807 75.407 54.059 C 78.103 55.799 80.221 58.309 81.486 61.255 C 82.731 64.183 83.059 67.418 82.423 70.531 C 81.783 73.659 80.217 76.522 77.93 78.748 C 75.597 81 72.659 82.523 69.475 83.133 C 66.274 83.753 62.962 83.436 59.936 82.221 C 56.933 81.027 54.349 78.972 52.509 76.315 L 52.509 76.315 Z M 49.75 11.278 C 47.091 11.278 44.935 13.433 44.935 16.092 C 44.935 18.751 47.091 20.907 49.75 20.907 Z M 94.685 20.907 C 97.344 20.907 99.5 18.751 99.5 16.092 C 99.5 13.433 97.344 11.278 94.685 11.278 Z M 16.735 20.907 C 19.394 20.907 21.55 18.751 21.55 16.092 C 21.55 13.433 19.394 11.278 16.735 11.278 Z M 4.815 11.278 C 2.156 11.278 0 13.433 0 16.092 C 0 18.751 2.156 20.907 4.815 20.907 Z M 49.75 72.262 C 52.409 72.262 54.565 70.106 54.565 67.447 C 54.565 64.788 52.409 62.633 49.75 62.633 Z M 4.815 62.633 C 2.156 62.633 0 64.788 0 67.447 C 0 70.106 2.156 72.262 4.815 72.262 Z M 82.765 62.633 C 80.106 62.633 77.95 64.788 77.95 67.447 C 77.95 70.106 80.106 72.262 82.765 72.262 Z M 94.685 72.262 C 97.344 72.262 99.5 70.106 99.5 67.447 C 99.5 64.788 97.344 62.633 94.685 62.633 Z M 49.75 20.907 L 94.685 20.907 L 94.685 11.278 L 49.75 11.278 Z M 16.735 11.278 L 4.815 11.278 L 4.815 20.907 L 16.735 20.907 Z M 49.75 62.633 L 4.815 62.633 L 4.815 72.262 L 49.75 72.262 Z M 82.765 72.262 L 94.685 72.262 L 94.685 62.633 L 82.765 62.633 Z" fill="transparent" height="83.44196792489129px" id="QnX2H9ozf" transform="translate(0.35 8.69)" width="99.50000171283182px"><path d="M 30.232 24.967 C 34.617 18.622 33.746 10.031 28.177 4.695 C 22.531 -0.722 13.9 -1.543 7.334 2.711 C 4.638 4.451 2.519 6.961 1.255 9.913 C 0.007 12.836 -0.32 16.07 0.317 19.183 C 0.959 22.309 2.526 25.172 4.811 27.4 C 9.613 31.992 16.655 33.355 22.824 30.885 C 25.821 29.686 28.397 27.63 30.232 24.973 Z M 35.791 76.322 C 31.405 69.976 32.276 61.386 37.845 56.049 C 43.49 50.631 52.12 49.807 58.689 54.059 C 61.385 55.799 63.503 58.309 64.768 61.255 C 66.013 64.183 66.34 67.418 65.705 70.531 C 65.065 73.659 63.499 76.522 61.211 78.748 C 58.879 81 55.941 82.523 52.757 83.133 C 49.556 83.753 46.244 83.436 43.218 82.221 C 40.215 81.027 37.631 78.972 35.791 76.315 L 35.791 76.315 Z" fill="transparent" height="83.44196792489129px" id="rFRYCiEsr" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="9.63" stroke="var(--118a55, var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)))" transform="translate(16.718 0)" width="66.02113943037973px"/><path d="M 49.75 0 C 47.091 0 44.935 2.156 44.935 4.815 C 44.935 7.473 47.091 9.629 49.75 9.629 Z M 94.685 9.629 C 97.344 9.629 99.5 7.473 99.5 4.815 C 99.5 2.156 97.344 0 94.685 0 Z M 16.735 9.629 C 19.394 9.629 21.55 7.473 21.55 4.815 C 21.55 2.156 19.394 0 16.735 0 Z M 4.815 0 C 2.156 0 0 2.156 0 4.815 C 0 7.473 2.156 9.629 4.815 9.629 Z M 49.75 60.984 C 52.409 60.984 54.565 58.828 54.565 56.169 C 54.565 53.51 52.409 51.355 49.75 51.355 Z M 4.815 51.355 C 2.156 51.355 0 53.51 0 56.169 C 0 58.828 2.156 60.984 4.815 60.984 Z M 82.765 51.355 C 80.106 51.355 77.95 53.51 77.95 56.169 C 77.95 58.828 80.106 60.984 82.765 60.984 Z M 94.685 60.984 C 97.344 60.984 99.5 58.828 99.5 56.169 C 99.5 53.51 97.344 51.355 94.685 51.355 Z M 49.75 9.629 L 94.685 9.629 L 94.685 0 L 49.75 0 Z M 16.735 0 L 4.815 0 L 4.815 9.629 L 16.735 9.629 Z M 49.75 51.355 L 4.815 51.355 L 4.815 60.984 L 49.75 60.984 Z M 82.765 60.984 L 94.685 60.984 L 94.685 51.355 L 82.765 51.355 Z" fill="var(--118a55, var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)))" height="60.98386344153728px" id="vwjr3PAjV" transform="translate(0 11.278)" width="99.50000171283409px"/></g></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`;
var SVG = /* @__PURE__ */ forwardRef2((props, ref) => {
  const { animated, layoutId, children, ...rest } = props;
  return animated ? /* @__PURE__ */ _jsx(motion.div, { ...rest, layoutId, ref }) : /* @__PURE__ */ _jsx("div", { ...rest, ref });
});
var getProps = ({ color, height, id, width, ...props }) => {
  return { ...props, GaDHsaDms: color ?? props.GaDHsaDms ?? "var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0))" };
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const { style, className: className5, layoutId, variant, GaDHsaDms, ...restProps } = getProps(props);
  return /* @__PURE__ */ _jsx(SVG, { ...restProps, className: cx("framer-wqA8z", className5), layoutId, ref, style: { "--118a55": GaDHsaDms, ...style } });
});
var css3 = [`.framer-wqA8z { -webkit-mask: ${mask}; aspect-ratio: 1; background-color: var(--118a55); mask: ${mask}; width: 100px; }`];
var Icon = withCSS(Component, css3, "framer-wqA8z");
Icon.displayName = "Filter";
var aq0DI8yMX_default = Icon;
addPropertyControls(Icon, { GaDHsaDms: { defaultValue: 'var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)) /* {"name":"Icon Black"} */', hidden: false, title: "Color", type: ControlType.Color } });

// http-url:https://framerusercontent.com/modules/Fs5VQrVyKoruA9COVjYx/V45WQoTRvnjjKwxyThBd/wggGXhZaC.js
import { jsx as _jsx2 } from "react/jsx-runtime";
import { addPropertyControls as addPropertyControls2, ControlType as ControlType2, cx as cx2, motion as motion2, withCSS as withCSS2 } from "./_framer-runtime.js";
import * as React2 from "react";
import { forwardRef as forwardRef4 } from "react";
var mask2 = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 0 39.757 L 38.539 1.218 C 39.317 0.438 40.373 0 41.475 0 C 42.577 0 43.633 0.438 44.411 1.218 L 82.95 39.757 M 41.475 14.872 L 41.475 81.232" fill="transparent" height="81.23205219268812px" id="jOHsmej4_" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="16.59" stroke="var(--118a55, var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)))" transform="translate(8.5 9.51) rotate(90 41.475 40.616)" width="82.95000000000005px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`;
var SVG2 = /* @__PURE__ */ forwardRef4((props, ref) => {
  const { animated, layoutId, children, ...rest } = props;
  return animated ? /* @__PURE__ */ _jsx2(motion2.div, { ...rest, layoutId, ref }) : /* @__PURE__ */ _jsx2("div", { ...rest, ref });
});
var getProps2 = ({ color, height, id, width, ...props }) => {
  return { ...props, GaDHsaDms: color ?? props.GaDHsaDms ?? "var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0))" };
};
var Component2 = /* @__PURE__ */ React2.forwardRef(function(props, ref) {
  const { style, className: className5, layoutId, variant, GaDHsaDms, ...restProps } = getProps2(props);
  return /* @__PURE__ */ _jsx2(SVG2, { ...restProps, className: cx2("framer-ZtDxP", className5), layoutId, ref, style: { "--118a55": GaDHsaDms, ...style } });
});
var css4 = [`.framer-ZtDxP { -webkit-mask: ${mask2}; aspect-ratio: 1; background-color: var(--118a55); mask: ${mask2}; width: 100px; }`];
var Icon2 = withCSS2(Component2, css4, "framer-ZtDxP");
Icon2.displayName = "Arrow Right";
var wggGXhZaC_default = Icon2;
addPropertyControls2(Icon2, { GaDHsaDms: { defaultValue: 'var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)) /* {"name":"Icon Black"} */', hidden: false, title: "Color", type: ControlType2.Color } });

// http-url:https://framerusercontent.com/modules/veQkkr7aVzULepLLAvWg/MiljbStCD6S6gZiQfWd1/ZpMbXYM0K.js
import { jsx as _jsx3 } from "react/jsx-runtime";
import { addPropertyControls as addPropertyControls3, ControlType as ControlType3, cx as cx3, motion as motion3, withCSS as withCSS3 } from "./_framer-runtime.js";
import * as React3 from "react";
import { forwardRef as forwardRef6 } from "react";
var mask3 = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 28.875 23.1 C 34.501 27.605 42.499 27.605 48.125 23.1 L 77 0" fill="transparent" height="26.47837885308308px" id="NhRxta1f0" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="23.1" stroke="var(--118a55, var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)))" transform="translate(11.5 36.61)" width="77px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`;
var SVG3 = /* @__PURE__ */ forwardRef6((props, ref) => {
  const { animated, layoutId, children, ...rest } = props;
  return animated ? /* @__PURE__ */ _jsx3(motion3.div, { ...rest, layoutId, ref }) : /* @__PURE__ */ _jsx3("div", { ...rest, ref });
});
var getProps3 = ({ color, height, id, width, ...props }) => {
  return { ...props, GaDHsaDms: color ?? props.GaDHsaDms ?? "var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0))" };
};
var Component3 = /* @__PURE__ */ React3.forwardRef(function(props, ref) {
  const { style, className: className5, layoutId, variant, GaDHsaDms, ...restProps } = getProps3(props);
  return /* @__PURE__ */ _jsx3(SVG3, { ...restProps, className: cx3("framer-RalHz", className5), layoutId, ref, style: { "--118a55": GaDHsaDms, ...style } });
});
var css5 = [`.framer-RalHz { -webkit-mask: ${mask3}; aspect-ratio: 1; background-color: var(--118a55); mask: ${mask3}; width: 100px; }`];
var Icon3 = withCSS3(Component3, css5, "framer-RalHz");
Icon3.displayName = "Chevron Down";
var ZpMbXYM0K_default = Icon3;
addPropertyControls3(Icon3, { GaDHsaDms: { defaultValue: 'var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)) /* {"name":"Icon Black"} */', hidden: false, title: "Color", type: ControlType3.Color } });

// http-url:https://framerusercontent.com/modules/W7GoYx7cj4C0BBuRZ3Ae/1xC8yhl2LAQMBIM4s4B6/b_m5Js9Ir.js
import { jsx as _jsx4, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls as addPropertyControls4, ControlType as ControlType4, cx as cx4, getFontsFromSharedStyle, Instance, Link, RichText, useActiveVariantCallback, useComponentViewport, useLocaleInfo, useVariantState, withCSS as withCSS4 } from "./_framer-runtime.js";
import { LayoutGroup, motion as motion4, MotionConfigContext } from "framer-motion";
import * as React4 from "react";
import { useRef } from "react";

// http-url:https://framerusercontent.com/modules/y2d0OkoyRx7p7dPgjusY/4YW2URfY9snHeO527GYC/kw43ePOKN.js
import { fontStore as fontStore3 } from "./_framer-runtime.js";
fontStore3.loadFonts(["Inter-Variable", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNTI1", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNTI1", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNTI1"]);
var variationAxes3 = [{ defaultValue: 14, maxValue: 32, minValue: 14, name: "Optical size", tag: "opsz" }, { defaultValue: 400, maxValue: 900, minValue: 100, name: "Weight", tag: "wght" }];
var fonts3 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/mYcqTSergLb16PdbJJQMl9ebYm4.woff2", variationAxes: variationAxes3, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2", variationAxes: variationAxes3, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2", variationAxes: variationAxes3, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/DYHjxG0qXjopUuruoacfl5SA.woff2", variationAxes: variationAxes3, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2", variationAxes: variationAxes3, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2", variationAxes: variationAxes3, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2", variationAxes: variationAxes3, weight: "400" }] }];
var css6 = ['.framer-KthDU .framer-styles-preset-10suf4d:not(.rich-text-wrapper), .framer-KthDU .framer-styles-preset-10suf4d.rich-text-wrapper p { --framer-font-family: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 13px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "opsz" 14, "wght" 525; --framer-font-variation-axes-bold: "opsz" 14, "wght" 525; --framer-font-variation-axes-bold-italic: "opsz" 14, "wght" 525; --framer-font-variation-axes-italic: "opsz" 14, "wght" 525; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }'];
var className3 = "framer-KthDU";

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
  const config = React4.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React4.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx4(MotionConfigContext.Provider, { value: contextValue, children });
};
var humanReadableVariantMap = { Primary: "fGebBpVaS", Secondary: "zq5haw0aW" };
var Variants = motion4.create(React4.Fragment);
var getProps4 = ({ click, height, icon, id, link, showIcon, title, width, ...props }) => {
  return { ...props, DY2dzgeiO: click ?? props.DY2dzgeiO, hZdVwdl_Y: showIcon ?? props.hZdVwdl_Y, peKL8pfJA: icon ?? props.peKL8pfJA ?? wggGXhZaC_default, TDPWRYXxk: title ?? props.TDPWRYXxk ?? "Button", variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "fGebBpVaS", vFRI3q06T: link ?? props.vFRI3q06T };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component4 = /* @__PURE__ */ React4.forwardRef(function(props, ref) {
  const fallbackRef = useRef(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React4.useId();
  const { activeLocale, setLocale } = useLocaleInfo();
  const componentViewport = useComponentViewport();
  const { style, className: className5, layoutId, variant, TDPWRYXxk, vFRI3q06T, DY2dzgeiO, peKL8pfJA, hZdVwdl_Y, ...restProps } = getProps4(props);
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
  const sharedStyleClassNames = [className2, className3];
  const scopingClassNames = cx4(serializationHash, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx4(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx4(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx4(Transition, { value: transition1, children: /* @__PURE__ */ _jsx4(Link, { href: vFRI3q06T, motionChild: true, nodeId: "fGebBpVaS", openInNewTab: false, scopeId: "b_m5Js9Ir", children: /* @__PURE__ */ _jsxs(motion4.a, { ...restProps, ...gestureHandlers, className: `${cx4(scopingClassNames, "framer-1o0lmo4", className5, classNames)} framer-1oaml23`, "data-framer-name": "Primary", "data-highlight": true, draggable: "false", layoutDependency, layoutId: "FloatingSearchFilters__fGebBpVaS", onTap: onTappg0bwd, ref: refBinding, style: { backgroundColor: "var(--token-8ef28781-a0a2-43db-933d-3d729ae85487, rgb(0, 81, 255))", borderBottomLeftRadius: 100, borderBottomRightRadius: 100, borderTopLeftRadius: 100, borderTopRightRadius: 100, ...style }, variants: { "fGebBpVaS-hover": { backgroundColor: "var(--token-d5dcd97d-793f-4a02-b4b2-f1cfb443a4e6, rgb(0, 102, 255))" }, "zq5haw0aW-hover": { backgroundColor: "var(--token-8bac5f11-507c-413f-b3a4-632beefe55cb, rgb(227, 227, 227))" }, zq5haw0aW: { backgroundColor: "var(--token-ef4d7bc1-0431-483d-9665-aeb18fbabc63, rgb(237, 237, 237))" } }, ...addPropertyOverrides({ "fGebBpVaS-hover": { "data-framer-name": void 0 }, "zq5haw0aW-hover": { "data-framer-name": void 0 }, zq5haw0aW: { "data-framer-name": "Secondary" } }, baseVariant, gestureVariant), children: [hZdVwdl_Y !== false && /* @__PURE__ */ _jsx4(Instance, { animated: true, className: "framer-1qra2si", Component: peKL8pfJA, layoutDependency, layoutId: "FloatingSearchFilters__yMwwNckn2", style: { "--118a55": "var(--token-c4652695-7f66-461d-9ec5-551c9e0af1d0, rgb(255, 255, 255))" }, variants: { zq5haw0aW: { "--118a55": "var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0))" } } }), /* @__PURE__ */ _jsx4(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx4(React4.Fragment, { children: /* @__PURE__ */ _jsx4(motion4.p, { className: "framer-styles-preset-1v7qm6", "data-styles-preset": "ocOde6Lm9", dir: "auto", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-e0ec22b8-2ee9-41b9-9c9b-068af203c374, rgb(255, 255, 255)))" }, children: "Join Waitlist" }) }), className: "framer-1iwjqtp", fonts: ["Inter"], layoutDependency, layoutId: "FloatingSearchFilters__E50KQQY7B", style: { "--extracted-r6o4lv": "var(--token-e0ec22b8-2ee9-41b9-9c9b-068af203c374, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, text: TDPWRYXxk, variants: { zq5haw0aW: { "--extracted-r6o4lv": "var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, rgb(0, 0, 0))" } }, verticalAlignment: "top", withExternalLayout: true, ...addPropertyOverrides({ zq5haw0aW: { children: /* @__PURE__ */ _jsx4(React4.Fragment, { children: /* @__PURE__ */ _jsx4(motion4.p, { className: "framer-styles-preset-10suf4d", "data-styles-preset": "kw43ePOKN", dir: "auto", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, rgb(0, 0, 0)))" }, children: "Button" }) }) } }, baseVariant, gestureVariant) })] }) }) }) }) });
});
var css7 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-MYjR9.framer-1oaml23, .framer-MYjR9 .framer-1oaml23 { display: block; }", ".framer-MYjR9.framer-1o0lmo4 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 7px 14px 7px 14px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-MYjR9 .framer-1qra2si { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 10px); position: relative; width: 10px; }", ".framer-MYjR9 .framer-1iwjqtp { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 2; }", ...css2, ...css6];
var Framerb_m5Js9Ir = withCSS4(Component4, css7, "framer-MYjR9");
var b_m5Js9Ir_default = Framerb_m5Js9Ir;
Framerb_m5Js9Ir.displayName = "Button";
Framerb_m5Js9Ir.defaultProps = { height: 29.5, width: 66 };
addPropertyControls4(Framerb_m5Js9Ir, { variant: { options: ["fGebBpVaS", "zq5haw0aW"], optionTitles: ["Primary", "Secondary"], title: "Variant", type: ControlType4.Enum }, TDPWRYXxk: { defaultValue: "Button", displayTextArea: false, title: "Title", type: ControlType4.String }, onTDPWRYXxkChange: { changes: "TDPWRYXxk", type: ControlType4.ChangeHandler }, vFRI3q06T: { title: "Link", type: ControlType4.Link }, DY2dzgeiO: { title: "Click", type: ControlType4.EventHandler }, peKL8pfJA: { defaultValue: { identifier: "local-module:vector/wggGXhZaC:default", moduleId: "Fs5VQrVyKoruA9COVjYx" }, setModuleId: "v49rTnsQ31Y5gd6DySlU", title: "Icon", type: ControlType4.VectorSetItem }, hZdVwdl_Y: { defaultValue: false, title: "Show Icon", type: ControlType4.Boolean }, onhZdVwdl_YChange: { changes: "hZdVwdl_Y", type: ControlType4.ChangeHandler } });
addFonts(Framerb_m5Js9Ir, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...getFontsFromSharedStyle(fonts2), ...getFontsFromSharedStyle(fonts3)], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/6gSeLGufj9YMO6ADzqOD/pnSAXwDC0JfNjp5xAcUa/BbFuZPGaK.js
import { jsx as _jsx5 } from "react/jsx-runtime";
import { addFonts as addFonts2, addPropertyControls as addPropertyControls5, ControlType as ControlType5, cx as cx5, useComponentViewport as useComponentViewport2, useLocaleInfo as useLocaleInfo2, useVariantState as useVariantState2, withCSS as withCSS5 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup2, motion as motion5, MotionConfigContext as MotionConfigContext2 } from "framer-motion";
import * as React5 from "react";
import { useRef as useRef2 } from "react";
var cycleOrder2 = ["FveAb6f2W", "I5Li6kC_5"];
var serializationHash2 = "framer-axTw0";
var variantClassNames2 = { FveAb6f2W: "framer-v-zl82vu", I5Li6kC_5: "framer-v-344k82" };
function addPropertyOverrides2(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition12 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var Transition2 = ({ value, children }) => {
  const config = React5.useContext(MotionConfigContext2);
  const transition = value ?? config.transition;
  const contextValue = React5.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx5(MotionConfigContext2.Provider, { value: contextValue, children });
};
var humanReadableVariantMap2 = { "100": "FveAb6f2W", "200": "I5Li6kC_5" };
var Variants2 = motion5.create(React5.Fragment);
var getProps5 = ({ height, id, width, ...props }) => {
  return { ...props, variant: humanReadableVariantMap2[props.variant] ?? props.variant ?? "FveAb6f2W" };
};
var createLayoutDependency2 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component5 = /* @__PURE__ */ React5.forwardRef(function(props, ref) {
  const fallbackRef = useRef2(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React5.useId();
  const { activeLocale, setLocale } = useLocaleInfo2();
  const componentViewport = useComponentViewport2();
  const { style, className: className5, layoutId, variant, ...restProps } = getProps5(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState2({ cycleOrder: cycleOrder2, defaultVariant: "FveAb6f2W", ref: refBinding, variant, variantClassNames: variantClassNames2 });
  const layoutDependency = createLayoutDependency2(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx5(serializationHash2, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx5(LayoutGroup2, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx5(Variants2, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx5(Transition2, { value: transition12, children: /* @__PURE__ */ _jsx5(motion5.div, { ...restProps, ...gestureHandlers, className: cx5(scopingClassNames, "framer-zl82vu", className5, classNames), "data-framer-name": "100", layoutDependency, layoutId: "FloatingSearchFilters__FveAb6f2W", ref: refBinding, style: { backgroundColor: "var(--token-914b1e49-c6dc-49fc-93ac-369519474e4f, rgb(227, 227, 227))", ...style }, variants: { I5Li6kC_5: { backgroundColor: "var(--token-fb0f7462-27b2-4a53-b10e-81b2a62b8279, rgb(204, 204, 204))" } }, ...addPropertyOverrides2({ I5Li6kC_5: { "data-framer-name": "200" } }, baseVariant, gestureVariant) }) }) }) });
});
var css8 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-axTw0.framer-2kef09, .framer-axTw0 .framer-2kef09 { display: block; }", ".framer-axTw0.framer-zl82vu { height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }"];
var FramerBbFuZPGaK = withCSS5(Component5, css8, "framer-axTw0");
var BbFuZPGaK_default = FramerBbFuZPGaK;
FramerBbFuZPGaK.displayName = "Separator";
FramerBbFuZPGaK.defaultProps = { height: 1, width: 1072 };
addPropertyControls5(FramerBbFuZPGaK, { variant: { options: ["FveAb6f2W", "I5Li6kC_5"], optionTitles: ["100", "200"], title: "Variant", type: ControlType5.Enum } });
addFonts2(FramerBbFuZPGaK, [{ explicitInter: true, fonts: [] }], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/P5KdB3eIcpm1TVUdGJYE/n0jGAYQfeLkZogAN6FwF/LGEi4XI_v.js
import { jsx as _jsx6 } from "react/jsx-runtime";
import { addFonts as addFonts3, cx as cx6, getFontsFromSharedStyle as getFontsFromSharedStyle2, patchBorderRadiusScaleCorrector, RichText as RichText2, useComponentViewport as useComponentViewport3, useLocaleInfo as useLocaleInfo3, useVariantState as useVariantState3, withCSS as withCSS6 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup3, motion as motion6, MotionConfigContext as MotionConfigContext3 } from "framer-motion";
import * as React6 from "react";
import { useRef as useRef3 } from "react";
var serializationHash3 = "framer-CppTD";
var variantClassNames3 = { cKNcR_8ho: "framer-v-11lhi8w" };
var patchBorderRadiusScaleCorrector1 = patchBorderRadiusScaleCorrector();
var transition13 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var Transition3 = ({ value, children }) => {
  const config = React6.useContext(MotionConfigContext3);
  const transition = value ?? config.transition;
  const contextValue = React6.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx6(MotionConfigContext3.Provider, { value: contextValue, children });
};
var Variants3 = motion6.create(React6.Fragment);
var getProps6 = ({ height, id, width, ...props }) => {
  return { ...props };
};
var createLayoutDependency3 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component6 = /* @__PURE__ */ React6.forwardRef(function(props, ref) {
  const fallbackRef = useRef3(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React6.useId();
  const { activeLocale, setLocale } = useLocaleInfo3();
  const componentViewport = useComponentViewport3();
  const { style, className: className5, layoutId, variant, ...restProps } = getProps6(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState3({ defaultVariant: "cKNcR_8ho", ref: refBinding, variant, variantClassNames: variantClassNames3 });
  const layoutDependency = createLayoutDependency3(props, variants);
  const sharedStyleClassNames = [className];
  const scopingClassNames = cx6(serializationHash3, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx6(LayoutGroup3, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx6(Variants3, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx6(Transition3, { value: transition13, children: /* @__PURE__ */ _jsx6(motion6.div, { ...restProps, ...gestureHandlers, className: cx6(scopingClassNames, "framer-11lhi8w", className5, classNames), "data-framer-name": "Primary", layoutDependency, layoutId: "FloatingSearchFilters__cKNcR_8ho", ref: refBinding, style: { "--corner-shape-fallback": 0.796, borderBottomLeftRadius: "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderBottomRightRadius: "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopLeftRadius: "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopRightRadius: "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.05), inset 0px 0px 0px 1px var(--token-b1c961a3-f1c5-4b40-bc8a-b110ebb296f2, rgba(0, 0, 0, 0.1))", cornerShape: "superellipse(1.4)", ...style }, children: /* @__PURE__ */ _jsx6(RichText2, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx6(React6.Fragment, { children: /* @__PURE__ */ _jsx6(motion6.p, { className: "framer-styles-preset-1sqkecy", "data-styles-preset": "bLruI0oTL", dir: "auto", style: { "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-55732a59-bc62-4580-8bcc-abc8c3da47fc, rgb(97, 97, 97)))" }, children: "Filter/s active" }) }), className: "framer-1f3gxg0", fonts: ["Inter"], layoutDependency, layoutId: "FloatingSearchFilters__rRAdO8JMJ", style: { "--extracted-r6o4lv": "var(--token-55732a59-bc62-4580-8bcc-abc8c3da47fc, rgb(97, 97, 97))" }, verticalAlignment: "top", withExternalLayout: true }) }) }) }) });
});
var css9 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-CppTD.framer-17specs, .framer-CppTD .framer-17specs { display: block; }", ".framer-CppTD.framer-11lhi8w { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 5px 12px 5px 12px; position: relative; width: min-content; }", ".framer-CppTD .framer-1f3gxg0 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }", ...css];
var FramerLGEi4XI_v = withCSS6(Component6, css9, "framer-CppTD");
var LGEi4XI_v_default = FramerLGEi4XI_v;
FramerLGEi4XI_v.displayName = "Filters Applied Tooltip";
FramerLGEi4XI_v.defaultProps = { height: 24.5, width: 94 };
addFonts3(FramerLGEi4XI_v, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...getFontsFromSharedStyle2(fonts)], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/hFKkcNNQM0XSdkWxO9VU/huSAoML0V9eP8Cp1O7wk/rjgpcZtAB.js
import { jsx as _jsx7 } from "react/jsx-runtime";
import { addFonts as addFonts4, addPropertyControls as addPropertyControls6, ControlType as ControlType6, cx as cx7, getFontsFromSharedStyle as getFontsFromSharedStyle3, patchBorderRadiusScaleCorrector as patchBorderRadiusScaleCorrector2, RichText as RichText3, useActiveVariantCallback as useActiveVariantCallback2, useComponentViewport as useComponentViewport4, useLocaleInfo as useLocaleInfo4, useVariantState as useVariantState4, withCSS as withCSS7 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup4, motion as motion7, MotionConfigContext as MotionConfigContext4 } from "framer-motion";
import * as React7 from "react";
import { useRef as useRef4 } from "react";

// http-url:https://framerusercontent.com/modules/pViJj926CBy444h3AYfq/yXDe2VVQ9pDsXbJlmrXJ/CT_DBbR5R.js
import { fontStore as fontStore4 } from "./_framer-runtime.js";
fontStore4.loadFonts(["Inter-Variable", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNTUw", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNTUw", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNTUw"]);
var variationAxes4 = [{ defaultValue: 14, maxValue: 32, minValue: 14, name: "Optical size", tag: "opsz" }, { defaultValue: 400, maxValue: 900, minValue: 100, name: "Weight", tag: "wght" }];
var fonts4 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/mYcqTSergLb16PdbJJQMl9ebYm4.woff2", variationAxes: variationAxes4, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2", variationAxes: variationAxes4, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2", variationAxes: variationAxes4, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/DYHjxG0qXjopUuruoacfl5SA.woff2", variationAxes: variationAxes4, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2", variationAxes: variationAxes4, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2", variationAxes: variationAxes4, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2", variationAxes: variationAxes4, weight: "400" }] }];
var css10 = ['.framer-fQ51O .framer-styles-preset-5rfdkx:not(.rich-text-wrapper), .framer-fQ51O .framer-styles-preset-5rfdkx.rich-text-wrapper p { --framer-font-family: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "opsz" 14, "wght" 550; --framer-font-variation-axes-bold: "opsz" 14, "wght" 550; --framer-font-variation-axes-bold-italic: "opsz" 14, "wght" 550; --framer-font-variation-axes-italic: "opsz" 14, "wght" 550; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }'];
var className4 = "framer-fQ51O";

// http-url:https://framerusercontent.com/modules/hFKkcNNQM0XSdkWxO9VU/huSAoML0V9eP8Cp1O7wk/rjgpcZtAB.js
var enabledGestures2 = { ewN8qP2Xx: { hover: true } };
var cycleOrder3 = ["ewN8qP2Xx", "M11k3kDdM"];
var serializationHash4 = "framer-YUY1n";
var variantClassNames4 = { ewN8qP2Xx: "framer-v-1h2op80", M11k3kDdM: "framer-v-1ugqf01" };
function addPropertyOverrides3(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var patchBorderRadiusScaleCorrector12 = patchBorderRadiusScaleCorrector2();
var transition14 = { bounce: 0, delay: 0, duration: 0.4, type: "spring" };
var Transition4 = ({ value, children }) => {
  const config = React7.useContext(MotionConfigContext4);
  const transition = value ?? config.transition;
  const contextValue = React7.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx7(MotionConfigContext4.Provider, { value: contextValue, children });
};
var humanReadableVariantMap3 = { Active: "M11k3kDdM", Base: "ewN8qP2Xx" };
var Variants4 = motion7.create(React7.Fragment);
var getProps7 = ({ click, height, id, title, width, ...props }) => {
  return { ...props, eAHGXWjyh: click ?? props.eAHGXWjyh, mXpY5N3RA: title ?? props.mXpY5N3RA ?? "Category", variant: humanReadableVariantMap3[props.variant] ?? props.variant ?? "ewN8qP2Xx" };
};
var createLayoutDependency4 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component7 = /* @__PURE__ */ React7.forwardRef(function(props, ref) {
  const fallbackRef = useRef4(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React7.useId();
  const { activeLocale, setLocale } = useLocaleInfo4();
  const componentViewport = useComponentViewport4();
  const { style, className: className5, layoutId, variant, mXpY5N3RA, eAHGXWjyh, ...restProps } = getProps7(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState4({ cycleOrder: cycleOrder3, defaultVariant: "ewN8qP2Xx", enabledGestures: enabledGestures2, ref: refBinding, variant, variantClassNames: variantClassNames4 });
  const layoutDependency = createLayoutDependency4(props, variants);
  const { activeVariantCallback, delay } = useActiveVariantCallback2(baseVariant);
  const onTap1rkcrh4 = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false });
    if (eAHGXWjyh) {
      const res = await eAHGXWjyh(...args);
      if (res === false)
        return false;
    }
  });
  const sharedStyleClassNames = [className4];
  const scopingClassNames = cx7(serializationHash4, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx7(LayoutGroup4, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx7(Variants4, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx7(Transition4, { value: transition14, children: /* @__PURE__ */ _jsx7(motion7.div, { ...restProps, ...gestureHandlers, className: cx7(scopingClassNames, "framer-1h2op80", className5, classNames), "data-framer-name": "Base", "data-highlight": true, layoutDependency, layoutId: "FloatingSearchFilters__ewN8qP2Xx", onTap: onTap1rkcrh4, ref: refBinding, style: { "--corner-shape-fallback": 0.796, backgroundColor: "var(--token-f01462ef-eed7-451f-81c9-11ad0be4b3de, rgb(245, 245, 245))", borderBottomLeftRadius: "calc(16px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderBottomRightRadius: "calc(16px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopLeftRadius: "calc(16px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopRightRadius: "calc(16px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", cornerShape: "superellipse(1.4)", ...style }, variants: { "ewN8qP2Xx-hover": { backgroundColor: "var(--token-8bac5f11-507c-413f-b3a4-632beefe55cb, rgb(227, 227, 227))" }, M11k3kDdM: { backgroundColor: "var(--token-8ef28781-a0a2-43db-933d-3d729ae85487, rgb(0, 123, 255))" } }, ...addPropertyOverrides3({ "ewN8qP2Xx-hover": { "data-framer-name": void 0 }, M11k3kDdM: { "data-framer-name": "Active" } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx7(RichText3, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx7(React7.Fragment, { children: /* @__PURE__ */ _jsx7(motion7.p, { className: "framer-styles-preset-5rfdkx", "data-styles-preset": "CT_DBbR5R", dir: "auto", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-31c75237-3696-4093-9011-7822eb8b6641, rgb(122, 122, 122)))" }, children: "Category" }) }), className: "framer-1vyo9he", "data-framer-name": "Title", fonts: ["Inter"], layoutDependency, layoutId: "FloatingSearchFilters__mrFzGWY2g", style: { "--extracted-r6o4lv": "var(--token-31c75237-3696-4093-9011-7822eb8b6641, rgb(122, 122, 122))" }, text: mXpY5N3RA, variants: { M11k3kDdM: { "--extracted-r6o4lv": "rgb(255, 255, 255)" } }, verticalAlignment: "top", withExternalLayout: true, ...addPropertyOverrides3({ M11k3kDdM: { children: /* @__PURE__ */ _jsx7(React7.Fragment, { children: /* @__PURE__ */ _jsx7(motion7.p, { className: "framer-styles-preset-5rfdkx", "data-styles-preset": "CT_DBbR5R", dir: "auto", style: { "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))" }, children: "Category" }) }) } }, baseVariant, gestureVariant) }) }) }) }) });
});
var css11 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-YUY1n.framer-itzrfu, .framer-YUY1n .framer-itzrfu { display: block; }", ".framer-YUY1n.framer-1h2op80 { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 6px 12px 6px 12px; position: relative; width: min-content; }", ".framer-YUY1n .framer-1vyo9he { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }", ...css10];
var FramerrjgpcZtAB = withCSS7(Component7, css11, "framer-YUY1n");
var rjgpcZtAB_default = FramerrjgpcZtAB;
FramerrjgpcZtAB.displayName = "Category Tab Selector";
FramerrjgpcZtAB.defaultProps = { height: 33, width: 84 };
addPropertyControls6(FramerrjgpcZtAB, { variant: { options: ["ewN8qP2Xx", "M11k3kDdM"], optionTitles: ["Base", "Active"], title: "Variant", type: ControlType6.Enum }, mXpY5N3RA: { defaultValue: "Category", displayTextArea: false, title: "Title", type: ControlType6.String }, onmXpY5N3RAChange: { changes: "mXpY5N3RA", type: ControlType6.ChangeHandler }, eAHGXWjyh: { title: "Click", type: ControlType6.EventHandler } });
addFonts4(FramerrjgpcZtAB, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...getFontsFromSharedStyle3(fonts4)], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/agfXRGJooJxnXnlYd2Iu/r7m1iv9NWxIuCY35yDL7/DPAN4Oaz9.js
var FilterFonts = getFonts(aq0DI8yMX_default);
var FilterWithFXWithOptimizedAppearEffect = withOptimizedAppearEffect(withFX(aq0DI8yMX_default));
var ChevronDownFonts = getFonts(ZpMbXYM0K_default);
var ChevronDownWithFXWithOptimizedAppearEffect = withOptimizedAppearEffect(withFX(ZpMbXYM0K_default));
var FiltersAppliedTooltipFonts = getFonts(LGEi4XI_v_default);
var MotionDivWithFX = withFX(motion8.div);
var CategoryTabSelectorFonts = getFonts(rjgpcZtAB_default);
var SeparatorFonts = getFonts(BbFuZPGaK_default);
var ButtonFonts = getFonts(b_m5Js9Ir_default);
var MotionDivWithFXWithOptimizedAppearEffect = withOptimizedAppearEffect(withFX(motion8.div));
var cycleOrder4 = ["PM02DOoWx", "LKacVAUVI"];
var serializationHash5 = "framer-qEYso";
var variantClassNames5 = { LKacVAUVI: "framer-v-1cgfhsk", PM02DOoWx: "framer-v-105sqt3" };
function addPropertyOverrides4(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var patchBorderRadiusScaleCorrector13 = patchBorderRadiusScaleCorrector3();
var transition15 = { bounce: 0, delay: 0, duration: 0.3, type: "spring" };
var transition2 = { bounce: 0, delay: 0, duration: 0.4, type: "spring" };
var animation = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: transition2, x: 0, y: 0 };
var animation1 = { opacity: 1e-3, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 0 };
var transformTemplate1 = (_2, t5) => `translate(-50%, -50%) ${t5}`;
var isSet = (value) => {
  if (Array.isArray(value))
    return value.length > 0;
  return value !== void 0 && value !== null && value !== "";
};
var transition3 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var animation2 = { opacity: 0, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: transition3, x: 0, y: 0 };
var animation3 = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: transition3, x: 0, y: 0 };
var animation4 = { opacity: 0, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 0 };
var Overlay = ({ children, blockDocumentScrolling, dismissWithEsc, enabled = true }) => {
  const [visible, setVisible] = useOverlayState({ blockDocumentScrolling, dismissWithEsc: enabled && dismissWithEsc });
  return children({ hide: () => setVisible(false), show: () => setVisible(true), toggle: () => setVisible(!visible), visible: enabled && visible });
};
var transition4 = { bounce: 0, delay: 0.1, duration: 0.6, type: "spring" };
var animation5 = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: transition4, x: 0, y: 0 };
var contains = (a3, b2) => {
  if (typeof a3 === "string" && typeof b2 === "string") {
    return a3.toLowerCase().includes(b2.toLowerCase());
  }
  if (Array.isArray(a3) && typeof b2 === "string") {
    return a3.includes(b2);
  }
  return false;
};
var convertFromBoolean = (value, activeLocale) => {
  return value ? "M11k3kDdM" : "ewN8qP2Xx";
};
var toggleInList = (list, value) => {
  if (typeof value !== "string")
    return list;
  if (!Array.isArray(list) || !list.every((item) => typeof item === "string"))
    return [value];
  const filtered = list.filter((item) => item !== value);
  if (filtered.length === list.length) {
    return [...list, value];
  }
  return filtered;
};
var matchVariant = (...args) => {
  for (const arg of args) {
    if (arg && typeof arg === "string")
      return arg;
  }
  return void 0;
};
var query1 = () => ({ from: { alias: "o1uIvxf5f", data: N2cLBMuUA_default, type: "Collection" }, select: [{ collection: "o1uIvxf5f", name: "id", type: "Identifier" }, { collection: "o1uIvxf5f", name: "ATZXIWoya", type: "Identifier" }, { collection: "o1uIvxf5f", name: "ATsOqqDj8", type: "Identifier" }], where: { left: { collection: "o1uIvxf5f", name: "M6EPg92bX", type: "Identifier" }, operator: "==", right: { type: "LiteralValue", value: "hLIbkFhin" }, type: "BinaryOperation" } });
var QueryData = ({ query, pageSize, children }) => {
  const data = __framer_useQueryData(query);
  return children(data);
};
var query3 = () => ({ from: { alias: "fElCacZjC", data: N2cLBMuUA_default, type: "Collection" }, select: [{ collection: "fElCacZjC", name: "id", type: "Identifier" }, { collection: "fElCacZjC", name: "ATZXIWoya", type: "Identifier" }, { collection: "fElCacZjC", name: "ATsOqqDj8", type: "Identifier" }], where: { left: { collection: "fElCacZjC", name: "M6EPg92bX", type: "Identifier" }, operator: "==", right: { type: "LiteralValue", value: "bsr6K_9L6" }, type: "BinaryOperation" } });
var Transition5 = ({ value, children }) => {
  const config = React8.useContext(MotionConfigContext5);
  const transition = value ?? config.transition;
  const contextValue = React8.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx8(MotionConfigContext5.Provider, { value: contextValue, children });
};
var humanReadableVariantMap4 = { Base: "PM02DOoWx", Expanded: "LKacVAUVI" };
var Variants5 = motion8.create(React8.Fragment);
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
var getProps8 = ({ bestSeller, categories, click, gender, height, id, onReset, productTitle, width, ...props }) => {
  return { ...props, cMjQL3FyO: gender ?? props.cMjQL3FyO, NnDXoDUnx: productTitle ?? props.NnDXoDUnx, OpuIHcazg: onReset ?? props.OpuIHcazg, PPUs8twVg: categories ?? props.PPUs8twVg, udm9VeqFi: bestSeller ?? props.udm9VeqFi, USIwCqC9j: click ?? props.USIwCqC9j, variant: humanReadableVariantMap4[props.variant] ?? props.variant ?? "PM02DOoWx" };
};
var createLayoutDependency5 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component8 = /* @__PURE__ */ React8.forwardRef(function(props, ref) {
  const fallbackRef = useRef6(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React8.useId();
  const { activeLocale, setLocale } = useLocaleInfo5();
  const componentViewport = useComponentViewport5();
  const { style, className: className5, layoutId, variant, "NnDXoDUnx": externalNnDXoDUnx, "onNnDXoDUnxChange": setExternalNnDXoDUnx, USIwCqC9j, "PPUs8twVg": externalPPUs8twVg, "onPPUs8twVgChange": setExternalPPUs8twVg, OpuIHcazg, "udm9VeqFi": externaludm9VeqFi, "onudm9VeqFiChange": setExternaludm9VeqFi, "cMjQL3FyO": externalcMjQL3FyO, "oncMjQL3FyOChange": setExternalcMjQL3FyO, ...restProps } = getProps8(props);
  const [NnDXoDUnx, setNnDXoDUnx] = useStateVariable(externalNnDXoDUnx, setExternalNnDXoDUnx);
  const [PPUs8twVg, setPPUs8twVg] = useStateVariable(externalPPUs8twVg, setExternalPPUs8twVg);
  const [udm9VeqFi, setudm9VeqFi] = useStateVariable(externaludm9VeqFi, setExternaludm9VeqFi);
  const [cMjQL3FyO, setcMjQL3FyO] = useStateVariable(externalcMjQL3FyO, setExternalcMjQL3FyO);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState5({ cycleOrder: cycleOrder4, defaultVariant: "PM02DOoWx", ref: refBinding, variant, variantClassNames: variantClassNames5 });
  const layoutDependency = createLayoutDependency5(props, variants);
  const { activeVariantCallback, delay } = useActiveVariantCallback3(baseVariant);
  const onTap1paxdo8 = activeVariantCallback(async (...args) => {
    if (USIwCqC9j) {
      const res = await USIwCqC9j(...args);
      if (res === false)
        return false;
    }
  });
  const onMouseEnter13elrgn = ({ overlay }) => activeVariantCallback(async (...args) => {
    overlay.show();
  });
  const eAHGXWjyhkvfkxi = ({ arg17aw6oq }) => activeVariantCallback(async (...args) => {
    setVariant("LKacVAUVI");
    setcMjQL3FyO?.(arg17aw6oq);
  });
  const eAHGXWjyh11nfom9 = ({ arg1y124t }) => activeVariantCallback(async (...args) => {
    setVariant("LKacVAUVI");
    setPPUs8twVg?.(arg1y124t);
  });
  const DY2dzgeiO1x878xa = activeVariantCallback(async (...args) => {
    if (OpuIHcazg) {
      const res = await OpuIHcazg(...args);
      if (res === false)
        return false;
    }
  });
  const sharedStyleClassNames = [className, className2];
  const scopingClassNames = cx8(serializationHash5, ...sharedStyleClassNames);
  const isDisplayed = () => {
    if (baseVariant === "LKacVAUVI")
      return false;
    return true;
  };
  const isDisplayed1 = () => {
    if (baseVariant === "LKacVAUVI")
      return true;
    return false;
  };
  const visible = isSet(NnDXoDUnx);
  const ref1 = React8.useRef(null);
  const ref2 = React8.useRef(null);
  const visible1 = isSet(PPUs8twVg);
  const ref3 = React8.useRef(null);
  const ref4 = React8.useRef(null);
  const visible2 = isSet(udm9VeqFi);
  const ref5 = React8.useRef(null);
  const ref6 = React8.useRef(null);
  const visible3 = isSet(cMjQL3FyO);
  const ref7 = React8.useRef(null);
  const ref8 = React8.useRef(null);
  return /* @__PURE__ */ _jsx8(LayoutGroup5, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx8(Variants5, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx8(Transition5, { value: transition15, children: /* @__PURE__ */ _jsxs2(motion8.div, { ...restProps, ...gestureHandlers, className: cx8(scopingClassNames, "framer-105sqt3", className5, classNames), "data-border": true, "data-framer-name": "Base", layoutDependency, layoutId: "FloatingSearchFilters__PM02DOoWx", ref: refBinding, style: { "--border-bottom-width": "1px", "--border-color": "var(--token-914b1e49-c6dc-49fc-93ac-369519474e4f, rgb(227, 227, 227))", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", "--corner-shape-fallback": 0.796, backdropFilter: "blur(10px)", backgroundColor: "var(--token-9039c660-569a-421b-a527-9ac056ae9951, rgb(255, 255, 255))", borderBottomLeftRadius: "calc(26px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderBottomRightRadius: "calc(26px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopLeftRadius: "calc(26px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopRightRadius: "calc(26px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", boxShadow: "0px 1px 6px 0px rgba(0, 0, 0, 0.03)", cornerShape: "superellipse(1.4)", WebkitBackdropFilter: "blur(10px)", ...style }, variants: { LKacVAUVI: { "--border-color": "rgb(227, 227, 227)", borderBottomLeftRadius: "calc(32px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderBottomRightRadius: "calc(32px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopLeftRadius: "calc(32px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopRightRadius: "calc(32px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", boxShadow: "none" } }, ...addPropertyOverrides4({ LKacVAUVI: { "data-framer-name": "Expanded" } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsxs2(motion8.div, { className: "framer-mkb9ye", "data-framer-name": "Header", layoutDependency, layoutId: "FloatingSearchFilters__XVIz1NnBI", children: [/* @__PURE__ */ _jsx8(motion8.label, { className: "framer-1449rwr", "data-highlight": true, layoutDependency, layoutId: "FloatingSearchFilters__EaOPEqsLC", onTap: onTap1paxdo8, ...addPropertyOverrides4({ LKacVAUVI: { "data-highlight": void 0, onTap: void 0 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx8(FormPlainTextInput, { className: "framer-enncmo", inputName: "hxeelS_41", layoutDependency, layoutId: "FloatingSearchFilters__hxeelS_41", onChange: (event) => setNnDXoDUnx(event.target.value || void 0), onClear: () => setNnDXoDUnx(void 0), placeholder: "Search\u2026", style: { "--framer-input-font-color": "var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, rgb(0, 0, 0))", "--framer-input-icon-color": "rgb(153, 153, 153)", "--framer-input-icon-content": '""', "--framer-input-icon-mask-image": "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 fill=%22none%22><path d=%22M7 2.5a5 5 0 0 1 4.13 7.82l2.03 2.03a.75.75 0 0 1-1.06 1.06l-2-2A5 5 0 1 1 7 2.5Zm-3.5 5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0Z%22 fill=%22%23999%22/></svg>')", "--framer-input-placeholder-color": "var(--token-7d0d6ded-a16b-44b0-b3c5-41032df0ed2d, rgb(148, 148, 148))" }, type: "text", value: NnDXoDUnx ?? "", variants: { LKacVAUVI: { "--framer-input-icon-color": "var(--token-15d556db-6b65-4633-9f9e-af8ebfb82667, rgb(0, 123, 255))" } }, ...addPropertyOverrides4({ LKacVAUVI: { inputName: "LKacVAUVIhxeelS_41" } }, baseVariant, gestureVariant) }) }), /* @__PURE__ */ _jsx8(motion8.div, { className: "framer-1e0c514", layoutDependency, layoutId: "FloatingSearchFilters__v7dyY9L6q", style: { backgroundColor: "var(--token-8bac5f11-507c-413f-b3a4-632beefe55cb, rgb(227, 227, 227))", borderBottomLeftRadius: 1e3, borderBottomRightRadius: 1e3, borderTopLeftRadius: 1e3, borderTopRightRadius: 1e3 } }), /* @__PURE__ */ _jsxs2(motion8.div, { className: "framer-1et34uk", "data-framer-name": "Icons", "data-highlight": true, layoutDependency, layoutId: "FloatingSearchFilters__Y_M6f9plD", onTap: onTap1paxdo8, children: [isDisplayed() && /* @__PURE__ */ _jsx8(FilterWithFXWithOptimizedAppearEffect, { __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, animate: animation, animated: true, className: "framer-1lb7urn", "data-framer-appear-id": "1lb7urn", initial: animation1, layoutDependency, layoutId: "FloatingSearchFilters__wIQbFqqH9", optimized: true, style: { "--118a55": "var(--token-27377471-6d4a-46b0-90a8-188d33236a38, rgb(133, 133, 133))", WebkitFilter: "blur(0px)" } }), isDisplayed1() && /* @__PURE__ */ _jsx8(ChevronDownWithFXWithOptimizedAppearEffect, { __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, animate: animation, animated: true, className: "framer-1d2nqrj", "data-framer-appear-id": "1d2nqrj", initial: animation1, layoutDependency, layoutId: "FloatingSearchFilters__Mt1invjAj", optimized: true, style: { "--118a55": "var(--token-b4c72fe1-799d-45da-8343-92aab29b00d1, rgb(148, 148, 148))", WebkitFilter: "blur(5px)" }, transformTemplate: transformTemplate1, variants: { LKacVAUVI: { filter: "blur(0px)", WebkitFilter: "blur(0px)" } } }), isDisplayed() && /* @__PURE__ */ _jsxs2(motion8.div, { className: "framer-1e5xhti", "data-framer-name": "Active Filters Indicator", layoutDependency, layoutId: "FloatingSearchFilters__f4oeWBEgg", children: [visible !== false && /* @__PURE__ */ _jsx8(Overlay, { blockDocumentScrolling: false, dismissWithEsc: false, children: (overlay) => /* @__PURE__ */ _jsx8(_Fragment, { children: /* @__PURE__ */ _jsx8(motion8.div, { className: "framer-hk4oqc", "data-framer-name": "Title", "data-highlight": true, id: `${layoutId}-hk4oqc`, layoutDependency, layoutId: "FloatingSearchFilters__Dd7IQbOQ2", onMouseEnter: onMouseEnter13elrgn({ overlay }), ref: ref1, style: { backgroundColor: "var(--token-8ef28781-a0a2-43db-933d-3d729ae85487, rgb(0, 123, 255))", borderBottomLeftRadius: "100%", borderBottomRightRadius: "100%", borderTopLeftRadius: "100%", borderTopRightRadius: "100%" }, children: /* @__PURE__ */ _jsx8(AnimatePresence, { children: overlay.visible && /* @__PURE__ */ _jsx8(Floating, { alignment: "center", anchorRef: ref1, className: cx8(scopingClassNames, classNames), collisionDetection: true, collisionDetectionPadding: 20, "data-framer-portal-id": `${layoutId}-hk4oqc`, offsetX: 0, offsetY: -10, onDismiss: overlay.hide, placement: "top", safeArea: true, zIndex: 11, children: /* @__PURE__ */ _jsx8(MotionDivWithFX, { __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, animate: animation3, className: "framer-1n9hotl", exit: animation2, initial: animation4, layoutDependency, layoutId: "FloatingSearchFilters__R2NKJvzrH", ref: ref2, role: "dialog", style: { "--corner-shape-fallback": 1, cornerShape: "superellipse(1)" }, children: /* @__PURE__ */ _jsx8(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx8(SmartComponentScopedContainer, { className: "framer-ci5m7c-container", layoutDependency, layoutId: "FloatingSearchFilters__P6sMUmYVB-container", nodeId: "P6sMUmYVB", rendersWithMotion: true, scopeId: "DPAN4Oaz9", children: /* @__PURE__ */ _jsx8(LGEi4XI_v_default, { height: "100%", id: "P6sMUmYVB", layoutId: "FloatingSearchFilters__P6sMUmYVB", width: "100%" }) }) }) }) }) }) }) }) }), visible1 !== false && /* @__PURE__ */ _jsx8(Overlay, { blockDocumentScrolling: false, dismissWithEsc: false, children: (overlay1) => /* @__PURE__ */ _jsx8(_Fragment, { children: /* @__PURE__ */ _jsx8(motion8.div, { className: "framer-1hs4fqh", "data-framer-name": "Categories", "data-highlight": true, id: `${layoutId}-1hs4fqh`, layoutDependency, layoutId: "FloatingSearchFilters__yTLny1FTK", onMouseEnter: onMouseEnter13elrgn({ overlay: overlay1 }), ref: ref3, style: { backgroundColor: "var(--token-8ef28781-a0a2-43db-933d-3d729ae85487, rgb(0, 123, 255))", borderBottomLeftRadius: "100%", borderBottomRightRadius: "100%", borderTopLeftRadius: "100%", borderTopRightRadius: "100%" }, children: /* @__PURE__ */ _jsx8(AnimatePresence, { children: overlay1.visible && /* @__PURE__ */ _jsx8(Floating, { alignment: "center", anchorRef: ref3, className: cx8(scopingClassNames, classNames), collisionDetection: true, collisionDetectionPadding: 20, "data-framer-portal-id": `${layoutId}-1hs4fqh`, offsetX: 0, offsetY: -10, onDismiss: overlay1.hide, placement: "top", safeArea: true, zIndex: 11, children: /* @__PURE__ */ _jsx8(MotionDivWithFX, { __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, animate: animation3, className: "framer-1ffio5", exit: animation2, initial: animation4, layoutDependency, layoutId: "FloatingSearchFilters__gC_RFXf9w", ref: ref4, role: "dialog", style: { "--corner-shape-fallback": 0.796, backgroundColor: "rgb(255, 255, 255)", borderBottomLeftRadius: "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderBottomRightRadius: "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopLeftRadius: "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopRightRadius: "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.05)", cornerShape: "superellipse(1.4)" }, children: /* @__PURE__ */ _jsx8(RichText4, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx8(React8.Fragment, { children: /* @__PURE__ */ _jsx8(motion8.p, { className: "framer-styles-preset-1sqkecy", "data-styles-preset": "bLruI0oTL", dir: "auto", style: { "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-55732a59-bc62-4580-8bcc-abc8c3da47fc, rgb(97, 97, 97)))" }, children: "Filter/s active" }) }), className: "framer-1gdqoph", fonts: ["Inter"], layoutDependency, layoutId: "FloatingSearchFilters__ztADkDY6h", style: { "--extracted-r6o4lv": "var(--token-55732a59-bc62-4580-8bcc-abc8c3da47fc, rgb(97, 97, 97))" }, verticalAlignment: "top", withExternalLayout: true }) }) }) }) }) }) }), visible2 !== false && /* @__PURE__ */ _jsx8(Overlay, { blockDocumentScrolling: false, dismissWithEsc: false, children: (overlay2) => /* @__PURE__ */ _jsx8(_Fragment, { children: /* @__PURE__ */ _jsx8(motion8.div, { className: "framer-23nn1j", "data-framer-name": "Best Seller", "data-highlight": true, id: `${layoutId}-23nn1j`, layoutDependency, layoutId: "FloatingSearchFilters__q3fJYEfvS", onMouseEnter: onMouseEnter13elrgn({ overlay: overlay2 }), ref: ref5, style: { backgroundColor: "var(--token-8ef28781-a0a2-43db-933d-3d729ae85487, rgb(0, 123, 255))", borderBottomLeftRadius: "100%", borderBottomRightRadius: "100%", borderTopLeftRadius: "100%", borderTopRightRadius: "100%" }, children: /* @__PURE__ */ _jsx8(AnimatePresence, { children: overlay2.visible && /* @__PURE__ */ _jsx8(Floating, { alignment: "center", anchorRef: ref5, className: cx8(scopingClassNames, classNames), collisionDetection: true, collisionDetectionPadding: 20, "data-framer-portal-id": `${layoutId}-23nn1j`, offsetX: 0, offsetY: -10, onDismiss: overlay2.hide, placement: "top", safeArea: true, zIndex: 11, children: /* @__PURE__ */ _jsx8(MotionDivWithFX, { __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, animate: animation3, className: "framer-1c0usra", exit: animation2, initial: animation4, layoutDependency, layoutId: "FloatingSearchFilters__GgJTnPCUv", ref: ref6, role: "dialog", style: { "--corner-shape-fallback": 0.796, backgroundColor: "rgb(255, 255, 255)", borderBottomLeftRadius: "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderBottomRightRadius: "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopLeftRadius: "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopRightRadius: "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.05)", cornerShape: "superellipse(1.4)" }, children: /* @__PURE__ */ _jsx8(RichText4, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx8(React8.Fragment, { children: /* @__PURE__ */ _jsx8(motion8.p, { className: "framer-styles-preset-1sqkecy", "data-styles-preset": "bLruI0oTL", dir: "auto", style: { "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-55732a59-bc62-4580-8bcc-abc8c3da47fc, rgb(97, 97, 97)))" }, children: "Filter/s active" }) }), className: "framer-14cvfz1", fonts: ["Inter"], layoutDependency, layoutId: "FloatingSearchFilters__Z_XeLlkZm", style: { "--extracted-r6o4lv": "var(--token-55732a59-bc62-4580-8bcc-abc8c3da47fc, rgb(97, 97, 97))" }, verticalAlignment: "top", withExternalLayout: true }) }) }) }) }) }) }), visible3 !== false && /* @__PURE__ */ _jsx8(Overlay, { blockDocumentScrolling: false, dismissWithEsc: false, children: (overlay3) => /* @__PURE__ */ _jsx8(_Fragment, { children: /* @__PURE__ */ _jsx8(motion8.div, { className: "framer-jpe6wz", "data-framer-name": "Gender", "data-highlight": true, id: `${layoutId}-jpe6wz`, layoutDependency, layoutId: "FloatingSearchFilters__TcENyQs7F", onMouseEnter: onMouseEnter13elrgn({ overlay: overlay3 }), ref: ref7, style: { backgroundColor: "var(--token-8ef28781-a0a2-43db-933d-3d729ae85487, rgb(0, 123, 255))", borderBottomLeftRadius: "100%", borderBottomRightRadius: "100%", borderTopLeftRadius: "100%", borderTopRightRadius: "100%" }, children: /* @__PURE__ */ _jsx8(AnimatePresence, { children: overlay3.visible && /* @__PURE__ */ _jsx8(Floating, { alignment: "center", anchorRef: ref7, className: cx8(scopingClassNames, classNames), collisionDetection: true, collisionDetectionPadding: 20, "data-framer-portal-id": `${layoutId}-jpe6wz`, offsetX: 0, offsetY: -10, onDismiss: overlay3.hide, placement: "top", safeArea: true, zIndex: 11, children: /* @__PURE__ */ _jsx8(MotionDivWithFX, { __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, animate: animation3, className: "framer-je9uey", exit: animation2, initial: animation4, layoutDependency, layoutId: "FloatingSearchFilters__ZiYx67ZMr", ref: ref8, role: "dialog", style: { "--corner-shape-fallback": 0.796, backgroundColor: "rgb(255, 255, 255)", borderBottomLeftRadius: "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderBottomRightRadius: "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopLeftRadius: "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopRightRadius: "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.05)", cornerShape: "superellipse(1.4)" }, children: /* @__PURE__ */ _jsx8(RichText4, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx8(React8.Fragment, { children: /* @__PURE__ */ _jsx8(motion8.p, { className: "framer-styles-preset-1sqkecy", "data-styles-preset": "bLruI0oTL", dir: "auto", style: { "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-55732a59-bc62-4580-8bcc-abc8c3da47fc, rgb(97, 97, 97)))" }, children: "Filter/s active" }) }), className: "framer-p4ffdr", fonts: ["Inter"], layoutDependency, layoutId: "FloatingSearchFilters__xX_FVh74r", style: { "--extracted-r6o4lv": "var(--token-55732a59-bc62-4580-8bcc-abc8c3da47fc, rgb(97, 97, 97))" }, verticalAlignment: "top", withExternalLayout: true }) }) }) }) }) }) })] })] })] }), isDisplayed1() && /* @__PURE__ */ _jsxs2(MotionDivWithFXWithOptimizedAppearEffect, { __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, animate: animation5, className: "framer-w26w9v", "data-framer-appear-id": "w26w9v", "data-framer-name": "Filter Controls", initial: animation1, layoutDependency, layoutId: "FloatingSearchFilters__An6XbUTaV", optimized: true, children: [/* @__PURE__ */ _jsxs2(motion8.div, { className: "framer-td1hhv", "data-border": true, "data-framer-name": "Filters", layoutDependency, layoutId: "FloatingSearchFilters__jAcjrjix1", style: { "--border-bottom-width": "0px", "--border-color": "var(--token-914b1e49-c6dc-49fc-93ac-369519474e4f, rgb(227, 227, 227))", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "1px" }, children: [/* @__PURE__ */ _jsxs2(motion8.label, { className: "framer-8lp11p", layoutDependency, layoutId: "FloatingSearchFilters__dDixjfw_V", children: [/* @__PURE__ */ _jsx8(FormBooleanInput, { checked: udm9VeqFi, className: "framer-nfgiqi", inputName: "hcBtpbGVT", layoutDependency, layoutId: "FloatingSearchFilters__hcBtpbGVT", onChange: (event) => setudm9VeqFi(event.target.checked ? true : void 0), style: { "--corner-shape-fallback": 0.796, "--framer-input-background": "var(--token-f01462ef-eed7-451f-81c9-11ad0be4b3de, rgb(245, 245, 245))", "--framer-input-boolean-checked-background": "var(--token-2da0c940-421e-44a3-be8a-e5120d5d1053, rgb(0, 123, 255))", "--framer-input-border-bottom-width": "1px", "--framer-input-border-color": "var(--token-914b1e49-c6dc-49fc-93ac-369519474e4f, rgb(227, 227, 227))", "--framer-input-border-left-width": "1px", "--framer-input-border-radius-bottom-left": "calc(7px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(7px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(7px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(7px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-right-width": "1px", "--framer-input-border-style": "solid", "--framer-input-border-top-width": "1px", "--framer-input-corner-shape": "superellipse(1.4)", "--framer-input-icon-color": "var(--token-c4652695-7f66-461d-9ec5-551c9e0af1d0, rgb(255, 255, 255))" }, type: "checkbox", ...addPropertyOverrides4({ LKacVAUVI: { inputName: "LKacVAUVIhcBtpbGVT" } }, baseVariant, gestureVariant) }), /* @__PURE__ */ _jsx8(RichText4, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx8(React8.Fragment, { children: /* @__PURE__ */ _jsx8(motion8.p, { className: "framer-styles-preset-1v7qm6", "data-styles-preset": "ocOde6Lm9", dir: "auto", style: { "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-55732a59-bc62-4580-8bcc-abc8c3da47fc, rgb(97, 97, 97)))" }, children: "Best Seller" }) }), className: "framer-exaxa2", fonts: ["Inter"], layoutDependency, layoutId: "FloatingSearchFilters__BJ6HEBk60", style: { "--extracted-r6o4lv": "var(--token-55732a59-bc62-4580-8bcc-abc8c3da47fc, rgb(97, 97, 97))" }, verticalAlignment: "top", withExternalLayout: true })] }), /* @__PURE__ */ _jsxs2(motion8.div, { className: "framer-1cwzk6h", "data-framer-name": "Categories", layoutDependency, layoutId: "FloatingSearchFilters__HNHEGu8YU", children: [/* @__PURE__ */ _jsx8(RichText4, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx8(React8.Fragment, { children: /* @__PURE__ */ _jsx8(motion8.p, { className: "framer-styles-preset-1v7qm6", "data-styles-preset": "ocOde6Lm9", dir: "auto", style: { "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-55732a59-bc62-4580-8bcc-abc8c3da47fc, rgb(97, 97, 97)))" }, children: "Gender" }) }), className: "framer-fff4fh", fonts: ["Inter"], layoutDependency, layoutId: "FloatingSearchFilters__qE8GJr77U", style: { "--extracted-r6o4lv": "var(--token-55732a59-bc62-4580-8bcc-abc8c3da47fc, rgb(97, 97, 97))" }, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx8(motion8.div, { className: "framer-era6mx", layoutDependency, layoutId: "FloatingSearchFilters__o1uIvxf5f", children: /* @__PURE__ */ _jsx8(ChildrenCanSuspend, { children: /* @__PURE__ */ _jsx8(QueryData, { query: query1(), children: (collection, paginationInfo, loadMore) => {
    return /* @__PURE__ */ _jsx8(_Fragment, { children: collection?.map(({ ATsOqqDj8: ATsOqqDj8o1uIvxf5f, ATZXIWoya: ATZXIWoyao1uIvxf5f, id: ido1uIvxf5f }, index) => {
      ATZXIWoyao1uIvxf5f ?? (ATZXIWoyao1uIvxf5f = "");
      ATsOqqDj8o1uIvxf5f ?? (ATsOqqDj8o1uIvxf5f = "");
      return /* @__PURE__ */ _jsx8(LayoutGroup5, { id: `o1uIvxf5f-${ido1uIvxf5f}`, children: /* @__PURE__ */ _jsx8(PathVariablesContext.Provider, { value: { ATsOqqDj8: ATsOqqDj8o1uIvxf5f }, children: /* @__PURE__ */ _jsx8(ComponentViewportProvider, { height: 33, children: /* @__PURE__ */ _jsx8(SmartComponentScopedContainer, { className: "framer-17ggsc7-container", layoutDependency, layoutId: "FloatingSearchFilters__bUV1yuJf3-container", nodeId: "bUV1yuJf3", rendersWithMotion: true, scopeId: "DPAN4Oaz9", children: /* @__PURE__ */ _jsx8(rjgpcZtAB_default, { eAHGXWjyh: eAHGXWjyhkvfkxi({ arg17aw6oq: toggleInList(cMjQL3FyO, ido1uIvxf5f) }), height: "100%", id: "bUV1yuJf3", layoutId: "FloatingSearchFilters__bUV1yuJf3", mXpY5N3RA: ATZXIWoyao1uIvxf5f, variant: matchVariant(convertFromBoolean(contains(cMjQL3FyO, ido1uIvxf5f), activeLocale)), width: "100%" }) }) }) }) }, ido1uIvxf5f);
    }) });
  } }) }) })] }), /* @__PURE__ */ _jsx8(ComponentViewportProvider, { height: 1, ...addPropertyOverrides4({ LKacVAUVI: { width: `calc(${componentViewport?.width || "100vw"} - 34px)` } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx8(SmartComponentScopedContainer, { className: "framer-1nxj96e-container", layoutDependency, layoutId: "FloatingSearchFilters__oCG2gKaRY-container", nodeId: "oCG2gKaRY", rendersWithMotion: true, scopeId: "DPAN4Oaz9", children: /* @__PURE__ */ _jsx8(BbFuZPGaK_default, { height: "100%", id: "oCG2gKaRY", layoutId: "FloatingSearchFilters__oCG2gKaRY", style: { height: "100%", width: "100%" }, variant: matchVariant("FveAb6f2W"), width: "100%" }) }) }), /* @__PURE__ */ _jsxs2(motion8.div, { className: "framer-1cwvrw4", "data-framer-name": "Categories", layoutDependency, layoutId: "FloatingSearchFilters__CuCLLweQG", children: [/* @__PURE__ */ _jsx8(RichText4, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx8(React8.Fragment, { children: /* @__PURE__ */ _jsx8(motion8.p, { className: "framer-styles-preset-1v7qm6", "data-styles-preset": "ocOde6Lm9", dir: "auto", style: { "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-55732a59-bc62-4580-8bcc-abc8c3da47fc, rgb(97, 97, 97)))" }, children: "Categories" }) }), className: "framer-1l7mce2", fonts: ["Inter"], layoutDependency, layoutId: "FloatingSearchFilters__baoxDNX_y", style: { "--extracted-r6o4lv": "var(--token-55732a59-bc62-4580-8bcc-abc8c3da47fc, rgb(97, 97, 97))" }, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx8(motion8.div, { className: "framer-bysc7u", layoutDependency, layoutId: "FloatingSearchFilters__fElCacZjC", children: /* @__PURE__ */ _jsx8(ChildrenCanSuspend, { children: /* @__PURE__ */ _jsx8(QueryData, { query: query3(), children: (collection1, paginationInfo1, loadMore1) => {
    return /* @__PURE__ */ _jsx8(_Fragment, { children: collection1?.map(({ ATsOqqDj8: ATsOqqDj8fElCacZjC, ATZXIWoya: ATZXIWoyafElCacZjC, id: idfElCacZjC }, index1) => {
      ATZXIWoyafElCacZjC ?? (ATZXIWoyafElCacZjC = "");
      ATsOqqDj8fElCacZjC ?? (ATsOqqDj8fElCacZjC = "");
      return /* @__PURE__ */ _jsx8(LayoutGroup5, { id: `fElCacZjC-${idfElCacZjC}`, children: /* @__PURE__ */ _jsx8(PathVariablesContext.Provider, { value: { ATsOqqDj8: ATsOqqDj8fElCacZjC }, children: /* @__PURE__ */ _jsx8(ComponentViewportProvider, { height: 33, children: /* @__PURE__ */ _jsx8(SmartComponentScopedContainer, { className: "framer-zhiw9u-container", layoutDependency, layoutId: "FloatingSearchFilters__bVtV_7IPo-container", nodeId: "bVtV_7IPo", rendersWithMotion: true, scopeId: "DPAN4Oaz9", children: /* @__PURE__ */ _jsx8(rjgpcZtAB_default, { eAHGXWjyh: eAHGXWjyh11nfom9({ arg1y124t: toggleInList(PPUs8twVg, idfElCacZjC) }), height: "100%", id: "bVtV_7IPo", layoutId: "FloatingSearchFilters__bVtV_7IPo", mXpY5N3RA: ATZXIWoyafElCacZjC, variant: matchVariant(convertFromBoolean(contains(PPUs8twVg, idfElCacZjC), activeLocale)), width: "100%" }) }) }) }) }, idfElCacZjC);
    }) });
  } }) }) })] }), /* @__PURE__ */ _jsx8(ComponentViewportProvider, { height: 1, ...addPropertyOverrides4({ LKacVAUVI: { width: `calc(${componentViewport?.width || "100vw"} - 34px)` } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx8(SmartComponentScopedContainer, { className: "framer-1ot81cf-container", layoutDependency, layoutId: "FloatingSearchFilters__LMfOu1sUD-container", nodeId: "LMfOu1sUD", rendersWithMotion: true, scopeId: "DPAN4Oaz9", children: /* @__PURE__ */ _jsx8(BbFuZPGaK_default, { height: "100%", id: "LMfOu1sUD", layoutId: "FloatingSearchFilters__LMfOu1sUD", style: { height: "100%", width: "100%" }, variant: matchVariant("FveAb6f2W"), width: "100%" }) }) })] }), /* @__PURE__ */ _jsx8(ComponentViewportProvider, { height: 29, children: /* @__PURE__ */ _jsx8(SmartComponentScopedContainer, { className: "framer-tkcusr-container", layoutDependency, layoutId: "FloatingSearchFilters__wLVleErzs-container", nodeId: "wLVleErzs", rendersWithMotion: true, scopeId: "DPAN4Oaz9", children: /* @__PURE__ */ _jsx8(b_m5Js9Ir_default, { DY2dzgeiO: DY2dzgeiO1x878xa, height: "100%", hZdVwdl_Y: false, id: "wLVleErzs", layoutId: "FloatingSearchFilters__wLVleErzs", peKL8pfJA: wggGXhZaC_default, TDPWRYXxk: "Reset filters", variant: matchVariant("zq5haw0aW"), width: "100%" }) }) })] })] }) }) }) });
});
var css12 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-qEYso.framer-1yqc94o, .framer-qEYso .framer-1yqc94o { display: block; }", ".framer-qEYso.framer-105sqt3 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-end; overflow: visible; padding: 6px 6px 6px 12px; position: relative; width: 100%; }", ".framer-qEYso .framer-mkb9ye { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-qEYso .framer-1449rwr { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }", '.framer-qEYso .framer-enncmo { --framer-input-font-family: "Inter Variable"; --framer-input-font-letter-spacing: -0.02em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-variation-axes: "opsz" 14, "wght" 575; --framer-input-font-weight: 400; --framer-input-padding: 9px; --framer-input-wrapper-height: auto; flex: none; height: auto; position: relative; width: 100%; }', ".framer-qEYso .framer-1e0c514 { flex: none; height: 20px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }", ".framer-qEYso .framer-1et34uk { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 12px 0px 6px; position: relative; width: min-content; }", ".framer-qEYso .framer-1lb7urn { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 16px); position: relative; width: 16px; }", ".framer-qEYso .framer-1d2nqrj { flex: none; height: var(--framer-aspect-ratio-supported, 13px); left: 50%; position: absolute; top: 50%; width: 13px; z-index: 1; }", ".framer-qEYso .framer-1e5xhti { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 6px); justify-content: center; left: 22px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; top: -2px; width: 6px; z-index: 1; }", ".framer-qEYso .framer-hk4oqc, .framer-qEYso .framer-1hs4fqh, .framer-qEYso .framer-23nn1j, .framer-qEYso .framer-jpe6wz { bottom: 0px; flex: none; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-override, transform); z-index: 1; }", ".framer-qEYso .framer-1n9hotl { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-qEYso .framer-ci5m7c-container, .framer-qEYso .framer-17ggsc7-container, .framer-qEYso .framer-zhiw9u-container, .framer-qEYso .framer-tkcusr-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-qEYso .framer-1ffio5, .framer-qEYso .framer-1c0usra, .framer-qEYso .framer-je9uey { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 5px 12px 5px 12px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-qEYso .framer-1gdqoph, .framer-qEYso .framer-14cvfz1, .framer-qEYso .framer-p4ffdr { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }", ".framer-qEYso .framer-w26w9v { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 8px 8px 8px; position: relative; width: 100%; }", ".framer-qEYso .framer-td1hhv { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 12px 0px 0px 0px; position: relative; width: 100%; }", ".framer-qEYso .framer-8lp11p { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }", ".framer-qEYso .framer-nfgiqi { --framer-input-focused-border-color: var(--token-2da0c940-421e-44a3-be8a-e5120d5d1053, #007bff); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 16px); position: relative; width: 16px; }", ".framer-qEYso .framer-exaxa2 { -webkit-user-select: none; flex: 1 0 0px; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", ".framer-qEYso .framer-1cwzk6h, .framer-qEYso .framer-1cwvrw4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }", ".framer-qEYso .framer-fff4fh, .framer-qEYso .framer-1l7mce2 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-qEYso .framer-era6mx, .framer-qEYso .framer-bysc7u { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px 0px 2px 0px; position: relative; width: 100%; }", ".framer-qEYso .framer-1nxj96e-container, .framer-qEYso .framer-1ot81cf-container { flex: none; height: 1px; position: relative; width: 100%; }", ".framer-qEYso.framer-v-1cgfhsk.framer-105sqt3 { align-content: flex-start; align-items: flex-start; width: 100%; }", ".framer-qEYso.framer-v-1cgfhsk .framer-mkb9ye, .framer-qEYso.framer-v-1cgfhsk .framer-td1hhv, .framer-qEYso.framer-v-1cgfhsk .framer-1cwvrw4 { order: 0; }", ".framer-qEYso.framer-v-1cgfhsk .framer-1449rwr { cursor: unset; }", ".framer-qEYso.framer-v-1cgfhsk .framer-1et34uk { min-height: 16px; min-width: 40px; }", ".framer-qEYso.framer-v-1cgfhsk .framer-w26w9v, .framer-qEYso.framer-v-1cgfhsk .framer-1ot81cf-container, .framer-qEYso.framer-v-1cgfhsk .framer-tkcusr-container { order: 1; }", ".framer-qEYso.framer-v-1cgfhsk .framer-8lp11p { order: 4; }", ".framer-qEYso.framer-v-1cgfhsk .framer-1cwzk6h { order: 2; }", ".framer-qEYso.framer-v-1cgfhsk .framer-1nxj96e-container { order: 3; }", ...css, ...css2, '.framer-qEYso[data-border="true"]::after, .framer-qEYso [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }'];
var FramerDPAN4Oaz9 = withCSS8(Component8, css12, "framer-qEYso");
var DPAN4Oaz9_default = FramerDPAN4Oaz9;
FramerDPAN4Oaz9.displayName = "Floating Search & Filters";
FramerDPAN4Oaz9.defaultProps = { height: 47, width: 250 };
addPropertyControls7(FramerDPAN4Oaz9, { variant: { options: ["PM02DOoWx", "LKacVAUVI"], optionTitles: ["Base", "Expanded"], title: "Variant", type: ControlType7.Enum }, NnDXoDUnx: { description: "Search Param", optional: true, title: "Product Title", type: ControlType7.String }, onNnDXoDUnxChange: { changes: "NnDXoDUnx", type: ControlType7.ChangeHandler }, USIwCqC9j: { title: "Click", type: ControlType7.EventHandler }, PPUs8twVg: { dataIdentifier: "local-module:collection/N2cLBMuUA:default", optional: true, title: "Categories", type: ControlType7.MultiCollectionReference }, onPPUs8twVgChange: { changes: "PPUs8twVg", type: ControlType7.ChangeHandler }, OpuIHcazg: { title: "On Reset", type: ControlType7.EventHandler }, udm9VeqFi: { optional: true, title: "Best Seller", type: ControlType7.Boolean }, onudm9VeqFiChange: { changes: "udm9VeqFi", type: ControlType7.ChangeHandler }, cMjQL3FyO: { dataIdentifier: "local-module:collection/N2cLBMuUA:default", optional: true, title: "Gender", type: ControlType7.MultiCollectionReference }, oncMjQL3FyOChange: { changes: "cMjQL3FyO", type: ControlType7.ChangeHandler } });
var variationAxes5 = [{ defaultValue: 14, maxValue: 32, minValue: 14, name: "Optical size", tag: "opsz" }, { defaultValue: 400, maxValue: 900, minValue: 100, name: "Weight", tag: "wght" }];
addFonts5(FramerDPAN4Oaz9, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/mYcqTSergLb16PdbJJQMl9ebYm4.woff2", variationAxes: variationAxes5, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2", variationAxes: variationAxes5, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2", variationAxes: variationAxes5, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/DYHjxG0qXjopUuruoacfl5SA.woff2", variationAxes: variationAxes5, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2", variationAxes: variationAxes5, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2", variationAxes: variationAxes5, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2", variationAxes: variationAxes5, weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...FilterFonts, ...ChevronDownFonts, ...FiltersAppliedTooltipFonts, ...CategoryTabSelectorFonts, ...SeparatorFonts, ...ButtonFonts, ...getFontsFromSharedStyle4(fonts), ...getFontsFromSharedStyle4(fonts2)], { supportsExplicitInterCodegen: true });
FramerDPAN4Oaz9.loader = { load: (props, context) => {
  const locale = context.locale;
  const queryCacheEntry = queryCache.get(query1(), locale);
  const queryCacheEntry1 = queryCache.get(query3(), locale);
  return Promise.allSettled([queryCacheEntry.preload(), queryCacheEntry1.preload(), forwardLoader(LGEi4XI_v_default, {}, context), forwardLoader(BbFuZPGaK_default, {}, context), forwardLoader(b_m5Js9Ir_default, {}, context), (async () => {
    const parentData = await queryCacheEntry.readMaybeAsync() ?? [];
    return Promise.allSettled(parentData.flatMap((item) => forwardLoader(rjgpcZtAB_default, {}, context)));
  })(), (async () => {
    const parentData = await queryCacheEntry1.readMaybeAsync() ?? [];
    return Promise.allSettled(parentData.flatMap((item) => forwardLoader(rjgpcZtAB_default, {}, context)));
  })()]);
} };
var __FramerMetadata__ = { "exports": { "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "default": { "type": "reactComponent", "name": "FramerDPAN4Oaz9", "slots": [], "annotations": { "framerComponentViewportWidth": "true", "framerDisplayContentsDiv": "false", "framerImmutableVariables": "true", "framerIntrinsicHeight": "47", "framerIntrinsicWidth": "250", "framerColorSyntax": "true", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"LKacVAUVI":{"layout":["fixed","auto"]}}}', "framerContractVersion": "1", "framerVariables": '{"NnDXoDUnx":"productTitle","USIwCqC9j":"click","PPUs8twVg":"categories","OpuIHcazg":"onReset","udm9VeqFi":"bestSeller","cMjQL3FyO":"gender"}', "framerAutoSizeImages": "true" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  DPAN4Oaz9_default as default
};
