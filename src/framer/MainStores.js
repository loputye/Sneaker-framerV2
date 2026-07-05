
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

// http-url:https://framerusercontent.com/modules/PsaQrYTrX5dbw7mpAFrj/IN1k5uMfNUNGECO4SQLa/dDAguFXBt.js
import { jsx as _jsx11, jsxs as _jsxs5, Fragment as _Fragment } from "react/jsx-runtime";
import { addFonts as addFonts7, addPropertyControls as addPropertyControls11, ChildrenCanSuspend, ComponentViewportProvider as ComponentViewportProvider3, ControlType as ControlType14, cx as cx10, FormPlainTextInput, forwardLoader as forwardLoader2, getFonts as getFonts4, getFontsFromSharedStyle as getFontsFromSharedStyle5, patchBorderRadiusScaleCorrector as patchBorderRadiusScaleCorrector2, PathVariablesContext, ResolveLinks, RichText as RichText5, SmartComponentScopedContainer as SmartComponentScopedContainer3, useActiveVariantCallback as useActiveVariantCallback2, useComponentViewport as useComponentViewport7, useLoadMorePaginatedQuery, useLocaleInfo as useLocaleInfo7, useQueryData, useRouter, useVariantState as useVariantState7, withCSS as withCSS10, withInfiniteScroll } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup7, motion as motion11, MotionConfigContext as MotionConfigContext7 } from "framer-motion";
import * as React12 from "react";
import { useRef as useRef10 } from "react";

// http-url:https://framerusercontent.com/modules/bxbAzRjBaLPl1Q6Vqz0q/QEofGjON8Ow9ZSLvTCfX/nRUBpiZY0.js
import { addPropertyControls as e4, ControlType as t4, QueryEngine as l3 } from "./_framer-runtime.js";

// http-url:https://framerusercontent.com/modules/bxbAzRjBaLPl1Q6Vqz0q/QEofGjON8Ow9ZSLvTCfX/nRUBpiZY0-0.js
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
    let l4 = e5.value[o4] ?? null, h2 = r4.value[u4] ?? null, c3 = t.compare(l4, h2, n4);
    if (0 !== c3)
      return c3;
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

// http-url:https://framerusercontent.com/modules/bxbAzRjBaLPl1Q6Vqz0q/QEofGjON8Ow9ZSLvTCfX/nRUBpiZY0-1.js
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

// http-url:https://framerusercontent.com/modules/bxbAzRjBaLPl1Q6Vqz0q/QEofGjON8Ow9ZSLvTCfX/nRUBpiZY0.js
var n3 = { CFyGUV2JN: { isNullable: true, type: t4.String }, createdAt: { isNullable: true, type: t4.Date }, dQLMp3Snn: { isNullable: true, type: t4.String }, H9WdVkZCK: { isNullable: true, type: t4.String }, id: { isNullable: false, type: t4.String }, iHo87M7PO: { isNullable: true, type: t4.String }, iiMCZWLBK: { isNullable: true, type: t4.Link }, MS1Ep5QnQ: { isNullable: true, type: t4.Date }, nextItemId: { isNullable: true, type: t4.String }, previousItemId: { isNullable: true, type: t4.String }, qHzx1Qnq4: { isNullable: true, type: t4.Date }, qVHdJamkG: { isNullable: true, type: t4.Link }, T0OpxvaIF: { isNullable: true, type: t4.RichText }, updatedAt: { isNullable: true, type: t4.Date }, vDyzh1chb: { isNullable: true, type: t4.ResponsiveImage } };
var p3 = [];
var r3 = (e5) => {
  let t5 = p3[e5];
  if (t5)
    return t5().then((e6) => e6.default);
};
var o3 = {};
var d3 = g2(o3);
var u3 = new l3();
var y2 = { collectionByLocaleId: { default: new tP({ chunks: ["https://framerusercontent.com/modules/bxbAzRjBaLPl1Q6Vqz0q/QEofGjON8Ow9ZSLvTCfX/nRUBpiZY0-chunk-default-0.framercms"], id: "53891c41-ecb1-4b0e-97f1-453a6b8d2052default", indexes: [], resolveRichText: d3, resolveVectorSetItem: r3, schema: n3 }) }, displayName: "Stores", id: "53891c41-ecb1-4b0e-97f1-453a6b8d2052" };
var nRUBpiZY0_default = y2;
e4(y2, { iHo87M7PO: { defaultValue: "", title: "Store Name", type: t4.String }, dQLMp3Snn: { preventLocalization: true, title: "Slug", type: t4.String }, CFyGUV2JN: { defaultValue: "", title: "Google Coordinates", type: t4.String }, qVHdJamkG: { title: "Google Maps Link", type: t4.Link }, T0OpxvaIF: { defaultValue: "", title: "Store Address", type: t4.RichText }, H9WdVkZCK: { defaultValue: "", title: "Store Contact", type: t4.String }, iiMCZWLBK: { title: "Store Contact Link", type: t4.Link }, qHzx1Qnq4: { displayTime: true, title: "Opens At", type: t4.Date }, MS1Ep5QnQ: { displayTime: true, title: "Closes At", type: t4.Date }, vDyzh1chb: { title: "Store Image", type: t4.ResponsiveImage }, createdAt: { title: "Created", type: t4.Date }, updatedAt: { title: "Updated", type: t4.Date }, previousItemId: { dataIdentifier: "local-module:collection/nRUBpiZY0:default", title: "Previous", type: t4.CollectionReference }, nextItemId: { dataIdentifier: "local-module:collection/nRUBpiZY0:default", title: "Next", type: t4.CollectionReference } });

// http-url:https://framerusercontent.com/modules/FK7vXbt40rlBdIGfYYv5/72El9qx7FAfppwYFrm3J/nV6XvMHlN.js
import { fontStore } from "./_framer-runtime.js";
fontStore.loadFonts(["Inter-Variable", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNjI1", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNjI1", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNjI1"]);
var variationAxes = [{ defaultValue: 14, maxValue: 32, minValue: 14, name: "Optical size", tag: "opsz" }, { defaultValue: 400, maxValue: 900, minValue: 100, name: "Weight", tag: "wght" }];
var fonts = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/mYcqTSergLb16PdbJJQMl9ebYm4.woff2", variationAxes, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2", variationAxes, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2", variationAxes, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/DYHjxG0qXjopUuruoacfl5SA.woff2", variationAxes, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2", variationAxes, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2", variationAxes, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2", variationAxes, weight: "400" }] }];
var css = ['.framer-LcxX3 .framer-styles-preset-1cs224s:not(.rich-text-wrapper), .framer-LcxX3 .framer-styles-preset-1cs224s.rich-text-wrapper h3 { --framer-font-family: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 32px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "opsz" 14, "wght" 625; --framer-font-variation-axes-bold: "opsz" 14, "wght" 625; --framer-font-variation-axes-bold-italic: "opsz" 14, "wght" 625; --framer-font-variation-axes-italic: "opsz" 14, "wght" 625; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.05em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }'];
var className = "framer-LcxX3";

// http-url:https://framerusercontent.com/modules/vsWD3jrHa2UPZ4HBSelQ/mxksfTWSr4V3v6Ciw6Dn/q2LtQikRu.js
import { jsx as _jsx5, jsxs as _jsxs2 } from "react/jsx-runtime";
import { addFonts as addFonts3, addPropertyControls as addPropertyControls5, ComponentViewportProvider, ControlType as ControlType8, cx as cx4, forwardLoader, getFonts, getFontsFromSharedStyle as getFontsFromSharedStyle2, patchBorderRadiusScaleCorrector, RichText as RichText2, SmartComponentScopedContainer, useComponentViewport as useComponentViewport3, useLocaleCode, useLocaleInfo as useLocaleInfo3, useVariantState as useVariantState3, withCSS as withCSS4, withFX, withOptimizedAppearEffect } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup3, motion as motion5, MotionConfigContext as MotionConfigContext3 } from "framer-motion";
import * as React6 from "react";
import { useRef as useRef5 } from "react";

// http-url:https://framerusercontent.com/modules/Hbc0lxqGSRzFG6uMT9yO/jZfB18ggDrqER5ihmIsa/GoogleMaps.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addPropertyControls, ControlType as ControlType4, motion } from "./_framer-runtime.js";

// http-url:https://framerusercontent.com/modules/VTUDdizacRHpwbkOamr7/AykinQJbgwl92LvMGZwu/constants.js
import { ControlType } from "./_framer-runtime.js";
var containerStyles = {
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
var emptyStateStyle = {
  ...containerStyles,
  borderRadius: 6,
  background: "rgba(136, 85, 255, 0.3)",
  color: "#85F",
  border: "1px dashed #85F",
  flexDirection: "column"
};
var defaultEvents = {
  onClick: {
    type: ControlType.EventHandler
  },
  onMouseEnter: {
    type: ControlType.EventHandler
  },
  onMouseLeave: {
    type: ControlType.EventHandler
  }
};
var fontSizeOptions = {
  type: ControlType.Number,
  title: "Font Size",
  min: 2,
  max: 200,
  step: 1,
  displayStepper: true
};
var fontControls = {
  font: {
    type: ControlType.Boolean,
    title: "Font",
    defaultValue: false,
    disabledTitle: "Default",
    enabledTitle: "Custom"
  },
  fontFamily: {
    type: ControlType.String,
    title: "Family",
    placeholder: "Inter",
    hidden: ({ font }) => !font
  },
  fontWeight: {
    type: ControlType.Enum,
    title: "Weight",
    options: [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    optionTitles: [
      "Thin",
      "Extra-light",
      "Light",
      "Regular",
      "Medium",
      "Semi-bold",
      "Bold",
      "Extra-bold",
      "Black"
    ],
    hidden: ({ font }) => !font
  }
};

// http-url:https://framerusercontent.com/modules/D4TWeLfcxT6Tysr2BlYg/iZjmqdxVx1EOiM3k1FaW/useOnNavigationTargetChange.js
import { useIsInCurrentNavigationTarget } from "./_framer-runtime.js";
import { useEffect } from "react";

// http-url:https://framerusercontent.com/modules/ExNgrA7EJTKUPpH6vIlN/eiOrSJ2Ab5M9jPCvVwUz/useConstant.js
import { useRef } from "react";

// http-url:https://framerusercontent.com/modules/D2Lz5CmnNVPZFFiZXalt/QaCzPbriZBfXWZIIycFI/colorFromToken.js
import { Color } from "./_framer-runtime.js";

// http-url:https://framerusercontent.com/modules/3mKFSGQqKHV82uOV1eBc/5fbRLvOpxZC0JOXugvwm/isMotionValue.js
import { MotionValue } from "./_framer-runtime.js";

// http-url:https://framerusercontent.com/modules/xDiQsqBGXzmMsv7AlEVy/uhunpMiNsbXxzjlXsg1y/useUniqueClassName.js
import * as React from "react";

// http-url:https://framerusercontent.com/modules/ETACN5BJyFTSo0VVDJfu/NHRqowOiXkF9UwOzczF7/variantUtils.js
import { ControlType as ControlType2 } from "./_framer-runtime.js";

// http-url:https://framerusercontent.com/modules/eMBrwoqQK7h6mEeGQUH8/GuplvPJVjmxpk9zqOTcb/isBrowser.js
import { useMemo } from "react";

// http-url:https://framerusercontent.com/modules/v9AWX2URmiYsHf7GbctE/XxKAZ9KlhWqf5x1JMyyF/useOnChange.js
import { useEffect as useEffect3 } from "react";

// http-url:https://framerusercontent.com/modules/kNDwabfjDEb3vUxkQlZS/fSIr3AOAYbGlfSPgXpYu/useAutoMotionValue.js
import { useCallback, useEffect as useEffect4, useRef as useRef2 } from "react";
import { motionValue, animate, RenderTarget } from "./_framer-runtime.js";

// http-url:https://framerusercontent.com/modules/cuQH4dmpDnV8YK1mSgQX/KqRXqunFjE6ufhpc7ZRu/useFontControls.js
import { fontStore as fontStore2 } from "./_framer-runtime.js";
import { useEffect as useEffect5 } from "react";

// http-url:https://framerusercontent.com/modules/afBE9Yx1W6bY5q32qPxe/m3q7puE2tbo1S2C0s0CT/useRenderTarget.js
import { useMemo as useMemo2 } from "react";
import { RenderTarget as RenderTarget2 } from "./_framer-runtime.js";

// http-url:https://framerusercontent.com/modules/zGkoP8tPDCkoBzMdt5uq/0zFSjxIYliHxrQQnryFX/useControlledState.js
import * as React2 from "react";

// http-url:https://framerusercontent.com/modules/5SM58HxZHxjjv7aLMOgQ/WXz9i6mVki0bBCrKdqB3/propUtils.js
import { useMemo as useMemo3 } from "react";
import { ControlType as ControlType3 } from "./_framer-runtime.js";
function useRadius(props) {
  const { borderRadius, isMixedBorderRadius, topLeftRadius, topRightRadius, bottomRightRadius, bottomLeftRadius } = props;
  const radiusValue = useMemo3(
    () => isMixedBorderRadius ? `${topLeftRadius}px ${topRightRadius}px ${bottomRightRadius}px ${bottomLeftRadius}px` : `${borderRadius}px`,
    [
      borderRadius,
      isMixedBorderRadius,
      topLeftRadius,
      topRightRadius,
      bottomRightRadius,
      bottomLeftRadius
    ]
  );
  return radiusValue;
}
var borderRadiusControl = {
  borderRadius: {
    title: "Radius",
    type: ControlType3.FusedNumber,
    toggleKey: "isMixedBorderRadius",
    toggleTitles: [
      "Radius",
      "Radius per corner"
    ],
    valueKeys: [
      "topLeftRadius",
      "topRightRadius",
      "bottomRightRadius",
      "bottomLeftRadius"
    ],
    valueLabels: [
      "TL",
      "TR",
      "BR",
      "BL"
    ],
    min: 0
  }
};
var paddingControl = {
  padding: {
    type: ControlType3.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: [
      "Padding",
      "Padding per side"
    ],
    valueKeys: [
      "paddingTop",
      "paddingRight",
      "paddingBottom",
      "paddingLeft"
    ],
    valueLabels: [
      "T",
      "R",
      "B",
      "L"
    ],
    min: 0,
    title: "Padding"
  }
};

// http-url:https://framerusercontent.com/modules/Hbc0lxqGSRzFG6uMT9yO/jZfB18ggDrqER5ihmIsa/GoogleMaps.js
function GoogleMaps({ coordinates, zoom, style, ...props }) {
  const borderRadius = useRadius(props);
  return /* @__PURE__ */ _jsx(motion.div, { style: { ...style, ...containerStyles, overflow: "hidden", borderRadius }, ...props, children: /* @__PURE__ */ _jsx("iframe", { style: { height: "100%", width: "100%", border: 0 }, src: `https://maps.google.com/maps?q=${encodeURIComponent(coordinates)}&z=${zoom}&output=embed` }) });
}
addPropertyControls(GoogleMaps, { coordinates: { type: ControlType4.String, title: "Location", placeholder: "Framer B.V.", defaultValue: "Framer B.V.", description: "The name of the place or its GPS coordinates." }, zoom: { type: ControlType4.Number, step: 1, min: 0, max: 25, title: "Zoom", defaultValue: 15 }, ...borderRadiusControl });

// http-url:https://framerusercontent.com/modules/7fD7o2yl2ikIKpE0Z3qs/cvFG7h3quPS8ykPhV2yx/amNEcipQY.js
import { fontStore as fontStore3 } from "./_framer-runtime.js";
fontStore3.loadFonts(["Inter-Variable", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNDI1", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNDI1", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNDI1"]);
var variationAxes2 = [{ defaultValue: 14, maxValue: 32, minValue: 14, name: "Optical size", tag: "opsz" }, { defaultValue: 400, maxValue: 900, minValue: 100, name: "Weight", tag: "wght" }];
var fonts2 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/mYcqTSergLb16PdbJJQMl9ebYm4.woff2", variationAxes: variationAxes2, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2", variationAxes: variationAxes2, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2", variationAxes: variationAxes2, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/DYHjxG0qXjopUuruoacfl5SA.woff2", variationAxes: variationAxes2, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2", variationAxes: variationAxes2, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2", variationAxes: variationAxes2, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2", variationAxes: variationAxes2, weight: "400" }] }];
var css2 = ['.framer-cc5NC .framer-styles-preset-9tj2n0:not(.rich-text-wrapper), .framer-cc5NC .framer-styles-preset-9tj2n0.rich-text-wrapper p { --framer-font-family: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "opsz" 14, "wght" 425; --framer-font-variation-axes-bold: "opsz" 14, "wght" 425; --framer-font-variation-axes-bold-italic: "opsz" 14, "wght" 425; --framer-font-variation-axes-italic: "opsz" 14, "wght" 425; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }'];
var className2 = "framer-cc5NC";

// http-url:https://framerusercontent.com/modules/OiW05M5g2XZ97EK1r2ZB/8w7FgQF9a7BbDCCQCYLE/BeEmZXEZr.js
import { fontStore as fontStore4 } from "./_framer-runtime.js";
fontStore4.loadFonts(["Inter-Variable", "Inter-Bold", "Inter-BoldItalic", "Inter-Italic"]);
var variationAxes3 = [{ defaultValue: 14, maxValue: 32, minValue: 14, name: "Optical size", tag: "opsz" }, { defaultValue: 400, maxValue: 900, minValue: 100, name: "Weight", tag: "wght" }];
var fonts3 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/mYcqTSergLb16PdbJJQMl9ebYm4.woff2", variationAxes: variationAxes3, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2", variationAxes: variationAxes3, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2", variationAxes: variationAxes3, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/DYHjxG0qXjopUuruoacfl5SA.woff2", variationAxes: variationAxes3, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2", variationAxes: variationAxes3, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2", variationAxes: variationAxes3, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2", variationAxes: variationAxes3, weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/ia3uin3hQWqDrVloC1zEtYHWw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/pKRFNWFoZl77qYCAIp84lN1h944.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2", weight: "400" }] }];
var css3 = ['.framer-ndSSU .framer-styles-preset-1hqmwka:not(.rich-text-wrapper), .framer-ndSSU .framer-styles-preset-1hqmwka.rich-text-wrapper p { --framer-font-family: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: "opsz" 14, "wght" 425; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-31c75237-3696-4093-9011-7822eb8b6641, #7a7a7a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }'];
var className3 = "framer-ndSSU";

// http-url:https://framerusercontent.com/modules/5agbL2cxKr72OaHc8zyD/B8b1YjEnIzy2XMgfJmlz/DAYH3uYfF.js
import { fontStore as fontStore5 } from "./_framer-runtime.js";
fontStore5.loadFonts([]);
var fonts4 = [{ explicitInter: true, fonts: [] }];
var css4 = [".framer-904uj .framer-styles-preset-176fugv:not(.rich-text-wrapper), .framer-904uj .framer-styles-preset-176fugv.rich-text-wrapper table { --corner-shape-fallback: 0.796; border-bottom-left-radius: calc(19px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-bottom-right-radius: calc(19px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-color: var(--token-914b1e49-c6dc-49fc-93ac-369519474e4f, #e3e3e3); border-style: solid; border-top-left-radius: calc(19px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-top-right-radius: calc(19px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-width: 1px; corner-shape: superellipse(1.4); overflow: hidden; }", ".framer-904uj .framer-styles-preset-176fugv:not(.rich-text-wrapper) th, .framer-904uj .framer-styles-preset-176fugv.rich-text-wrapper table th, .framer-904uj .framer-styles-preset-176fugv:not(.rich-text-wrapper) td, .framer-904uj .framer-styles-preset-176fugv.rich-text-wrapper table td { padding: 15px; }", ".framer-904uj .framer-styles-preset-176fugv:not(.rich-text-wrapper) th, .framer-904uj .framer-styles-preset-176fugv.rich-text-wrapper table th { background-color: var(--token-f01462ef-eed7-451f-81c9-11ad0be4b3de, #f5f5f5); }", ".framer-904uj .framer-styles-preset-176fugv:not(.rich-text-wrapper) tr + tr td, .framer-904uj .framer-styles-preset-176fugv:not(.rich-text-wrapper) tr + tr th, .framer-904uj .framer-styles-preset-176fugv.rich-text-wrapper table tr + tr td, .framer-904uj .framer-styles-preset-176fugv.rich-text-wrapper table tr + tr th { border-top-color: var(--token-914b1e49-c6dc-49fc-93ac-369519474e4f, #e3e3e3); border-top-style: solid; border-top-width: 1px; }", ".framer-904uj .framer-styles-preset-176fugv:not(.rich-text-wrapper) td + td, .framer-904uj .framer-styles-preset-176fugv:not(.rich-text-wrapper) th + th, .framer-904uj .framer-styles-preset-176fugv:not(.rich-text-wrapper) td + th, .framer-904uj .framer-styles-preset-176fugv:not(.rich-text-wrapper) th + td, .framer-904uj .framer-styles-preset-176fugv.rich-text-wrapper table td + td, .framer-904uj .framer-styles-preset-176fugv.rich-text-wrapper table th + th, .framer-904uj .framer-styles-preset-176fugv.rich-text-wrapper table td + th, .framer-904uj .framer-styles-preset-176fugv.rich-text-wrapper table th + td {  }"];
var className4 = "framer-904uj";

// http-url:https://framerusercontent.com/modules/Hxcy0y1QLtQakc6CmrKc/xZrFVP8wtnN7q4Vxfc9I/hcX8gSJpR.js
import { fontStore as fontStore6 } from "./_framer-runtime.js";
fontStore6.loadFonts(["Inter-Variable", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNjI1", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNjI1", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNjI1"]);
var variationAxes4 = [{ defaultValue: 14, maxValue: 32, minValue: 14, name: "Optical size", tag: "opsz" }, { defaultValue: 400, maxValue: 900, minValue: 100, name: "Weight", tag: "wght" }];
var fonts5 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/mYcqTSergLb16PdbJJQMl9ebYm4.woff2", variationAxes: variationAxes4, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2", variationAxes: variationAxes4, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2", variationAxes: variationAxes4, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/DYHjxG0qXjopUuruoacfl5SA.woff2", variationAxes: variationAxes4, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2", variationAxes: variationAxes4, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2", variationAxes: variationAxes4, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2", variationAxes: variationAxes4, weight: "400" }] }];
var css5 = [`.framer-odkQo .framer-styles-preset-1mts5yh:not(.rich-text-wrapper), .framer-odkQo .framer-styles-preset-1mts5yh.rich-text-wrapper h6 { --framer-font-family: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "opsz" 14, "wght" 625; --framer-font-variation-axes-bold: "opsz" 14, "wght" 625; --framer-font-variation-axes-bold-italic: "opsz" 14, "wght" 625; --framer-font-variation-axes-italic: "opsz" 14, "wght" 625; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 15px; --framer-text-alignment: start; --framer-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`];
var className5 = "framer-odkQo";

// http-url:https://framerusercontent.com/modules/YR8eaKIcZq1lxn0G2QCZ/UK3BtzmfLMAF1qZ2J2Dm/Hme2S1hiD.js
import { fontStore as fontStore7 } from "./_framer-runtime.js";
fontStore7.loadFonts(["Inter-Variable", "Inter-Bold", "Inter-BoldItalic", "Inter-Italic"]);
var variationAxes5 = [{ defaultValue: 14, maxValue: 32, minValue: 14, name: "Optical size", tag: "opsz" }, { defaultValue: 400, maxValue: 900, minValue: 100, name: "Weight", tag: "wght" }];
var fonts6 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/mYcqTSergLb16PdbJJQMl9ebYm4.woff2", variationAxes: variationAxes5, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2", variationAxes: variationAxes5, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2", variationAxes: variationAxes5, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/DYHjxG0qXjopUuruoacfl5SA.woff2", variationAxes: variationAxes5, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2", variationAxes: variationAxes5, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2", variationAxes: variationAxes5, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2", variationAxes: variationAxes5, weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/ia3uin3hQWqDrVloC1zEtYHWw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/pKRFNWFoZl77qYCAIp84lN1h944.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2", weight: "400" }] }];
var css6 = ['.framer-Hau7Q .framer-styles-preset-bnfmu7:not(.rich-text-wrapper), .framer-Hau7Q .framer-styles-preset-bnfmu7.rich-text-wrapper p { --framer-font-family: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: "opsz" 14, "wght" 575; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.03em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }'];
var className6 = "framer-Hau7Q";

// http-url:https://framerusercontent.com/modules/AfCaMmRn8u7qaCxd9l7b/a1AGSwGt3WRsdOZIFkvs/tzSCYd6Qc.js
import { fontStore as fontStore8 } from "./_framer-runtime.js";
fontStore8.loadFonts(["Inter-Variable", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNjI1", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNjI1", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNjI1"]);
var variationAxes6 = [{ defaultValue: 14, maxValue: 32, minValue: 14, name: "Optical size", tag: "opsz" }, { defaultValue: 400, maxValue: 900, minValue: 100, name: "Weight", tag: "wght" }];
var fonts7 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/mYcqTSergLb16PdbJJQMl9ebYm4.woff2", variationAxes: variationAxes6, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2", variationAxes: variationAxes6, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2", variationAxes: variationAxes6, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/DYHjxG0qXjopUuruoacfl5SA.woff2", variationAxes: variationAxes6, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2", variationAxes: variationAxes6, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2", variationAxes: variationAxes6, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2", variationAxes: variationAxes6, weight: "400" }] }];
var css7 = ['.framer-6EjDN .framer-styles-preset-1lkvzko:not(.rich-text-wrapper), .framer-6EjDN .framer-styles-preset-1lkvzko.rich-text-wrapper h5 { --framer-font-family: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 22px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "opsz" 14, "wght" 625; --framer-font-variation-axes-bold: "opsz" 14, "wght" 625; --framer-font-variation-axes-bold-italic: "opsz" 14, "wght" 625; --framer-font-variation-axes-italic: "opsz" 14, "wght" 625; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.04em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }'];
var className7 = "framer-6EjDN";

// http-url:https://framerusercontent.com/modules/Fs5VQrVyKoruA9COVjYx/V45WQoTRvnjjKwxyThBd/wggGXhZaC.js
import { jsx as _jsx2 } from "react/jsx-runtime";
import { addPropertyControls as addPropertyControls2, ControlType as ControlType5, cx, motion as motion2, withCSS } from "./_framer-runtime.js";
import * as React3 from "react";
import { forwardRef as forwardRef2 } from "react";
var mask = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 0 39.757 L 38.539 1.218 C 39.317 0.438 40.373 0 41.475 0 C 42.577 0 43.633 0.438 44.411 1.218 L 82.95 39.757 M 41.475 14.872 L 41.475 81.232" fill="transparent" height="81.23205219268812px" id="jOHsmej4_" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="16.59" stroke="var(--118a55, var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)))" transform="translate(8.5 9.51) rotate(90 41.475 40.616)" width="82.95000000000005px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`;
var SVG = /* @__PURE__ */ forwardRef2((props, ref) => {
  const { animated, layoutId, children, ...rest } = props;
  return animated ? /* @__PURE__ */ _jsx2(motion2.div, { ...rest, layoutId, ref }) : /* @__PURE__ */ _jsx2("div", { ...rest, ref });
});
var getProps = ({ color, height, id, width, ...props }) => {
  return { ...props, GaDHsaDms: color ?? props.GaDHsaDms ?? "var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0))" };
};
var Component = /* @__PURE__ */ React3.forwardRef(function(props, ref) {
  const { style, className: className11, layoutId, variant, GaDHsaDms, ...restProps } = getProps(props);
  return /* @__PURE__ */ _jsx2(SVG, { ...restProps, className: cx("framer-ZtDxP", className11), layoutId, ref, style: { "--118a55": GaDHsaDms, ...style } });
});
var css8 = [`.framer-ZtDxP { -webkit-mask: ${mask}; aspect-ratio: 1; background-color: var(--118a55); mask: ${mask}; width: 100px; }`];
var Icon = withCSS(Component, css8, "framer-ZtDxP");
Icon.displayName = "Arrow Right";
var wggGXhZaC_default = Icon;
addPropertyControls2(Icon, { GaDHsaDms: { defaultValue: 'var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)) /* {"name":"Icon Black"} */', hidden: false, title: "Color", type: ControlType5.Color } });

// http-url:https://framerusercontent.com/modules/W7GoYx7cj4C0BBuRZ3Ae/1xC8yhl2LAQMBIM4s4B6/b_m5Js9Ir.js
import { jsx as _jsx3, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls as addPropertyControls3, ControlType as ControlType6, cx as cx2, getFontsFromSharedStyle, Instance, Link, RichText, useActiveVariantCallback, useComponentViewport, useLocaleInfo, useVariantState, withCSS as withCSS2 } from "./_framer-runtime.js";
import { LayoutGroup, motion as motion3, MotionConfigContext } from "framer-motion";
import * as React4 from "react";
import { useRef as useRef3 } from "react";

// http-url:https://framerusercontent.com/modules/y2d0OkoyRx7p7dPgjusY/4YW2URfY9snHeO527GYC/kw43ePOKN.js
import { fontStore as fontStore9 } from "./_framer-runtime.js";
fontStore9.loadFonts(["Inter-Variable", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNTI1", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNTI1", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNTI1"]);
var variationAxes7 = [{ defaultValue: 14, maxValue: 32, minValue: 14, name: "Optical size", tag: "opsz" }, { defaultValue: 400, maxValue: 900, minValue: 100, name: "Weight", tag: "wght" }];
var fonts8 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/mYcqTSergLb16PdbJJQMl9ebYm4.woff2", variationAxes: variationAxes7, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2", variationAxes: variationAxes7, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2", variationAxes: variationAxes7, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/DYHjxG0qXjopUuruoacfl5SA.woff2", variationAxes: variationAxes7, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2", variationAxes: variationAxes7, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2", variationAxes: variationAxes7, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2", variationAxes: variationAxes7, weight: "400" }] }];
var css9 = ['.framer-KthDU .framer-styles-preset-10suf4d:not(.rich-text-wrapper), .framer-KthDU .framer-styles-preset-10suf4d.rich-text-wrapper p { --framer-font-family: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 13px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "opsz" 14, "wght" 525; --framer-font-variation-axes-bold: "opsz" 14, "wght" 525; --framer-font-variation-axes-bold-italic: "opsz" 14, "wght" 525; --framer-font-variation-axes-italic: "opsz" 14, "wght" 525; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }'];
var className8 = "framer-KthDU";

// http-url:https://framerusercontent.com/modules/pmoggTWmhxccZ8VWFvMy/CwgfCjbZuajs7tE5WxYA/ocOde6Lm9.js
import { fontStore as fontStore10 } from "./_framer-runtime.js";
fontStore10.loadFonts(["Inter-Variable", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNjI1", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNjI1", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNjI1"]);
var variationAxes8 = [{ defaultValue: 14, maxValue: 32, minValue: 14, name: "Optical size", tag: "opsz" }, { defaultValue: 400, maxValue: 900, minValue: 100, name: "Weight", tag: "wght" }];
var fonts9 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/mYcqTSergLb16PdbJJQMl9ebYm4.woff2", variationAxes: variationAxes8, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2", variationAxes: variationAxes8, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2", variationAxes: variationAxes8, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/DYHjxG0qXjopUuruoacfl5SA.woff2", variationAxes: variationAxes8, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2", variationAxes: variationAxes8, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2", variationAxes: variationAxes8, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2", variationAxes: variationAxes8, weight: "400" }] }];
var css10 = ['.framer-hoAO6 .framer-styles-preset-1v7qm6:not(.rich-text-wrapper), .framer-hoAO6 .framer-styles-preset-1v7qm6.rich-text-wrapper p { --framer-font-family: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 13px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "opsz" 14, "wght" 625; --framer-font-variation-axes-bold: "opsz" 14, "wght" 625; --framer-font-variation-axes-bold-italic: "opsz" 14, "wght" 625; --framer-font-variation-axes-italic: "opsz" 14, "wght" 625; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.04em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }'];
var className9 = "framer-hoAO6";

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
  return /* @__PURE__ */ _jsx3(MotionConfigContext.Provider, { value: contextValue, children });
};
var humanReadableVariantMap = { Primary: "fGebBpVaS", Secondary: "zq5haw0aW" };
var Variants = motion3.create(React4.Fragment);
var getProps2 = ({ click, height, icon, id, link, showIcon, title, width, ...props }) => {
  return { ...props, DY2dzgeiO: click ?? props.DY2dzgeiO, hZdVwdl_Y: showIcon ?? props.hZdVwdl_Y, peKL8pfJA: icon ?? props.peKL8pfJA ?? wggGXhZaC_default, TDPWRYXxk: title ?? props.TDPWRYXxk ?? "Button", variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "fGebBpVaS", vFRI3q06T: link ?? props.vFRI3q06T };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component2 = /* @__PURE__ */ React4.forwardRef(function(props, ref) {
  const fallbackRef = useRef3(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React4.useId();
  const { activeLocale, setLocale } = useLocaleInfo();
  const componentViewport = useComponentViewport();
  const { style, className: className11, layoutId, variant, TDPWRYXxk, vFRI3q06T, DY2dzgeiO, peKL8pfJA, hZdVwdl_Y, ...restProps } = getProps2(props);
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
  const sharedStyleClassNames = [className9, className8];
  const scopingClassNames = cx2(serializationHash, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx3(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx3(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx3(Transition, { value: transition1, children: /* @__PURE__ */ _jsx3(Link, { href: vFRI3q06T, motionChild: true, nodeId: "fGebBpVaS", openInNewTab: false, scopeId: "b_m5Js9Ir", children: /* @__PURE__ */ _jsxs(motion3.a, { ...restProps, ...gestureHandlers, className: `${cx2(scopingClassNames, "framer-1o0lmo4", className11, classNames)} framer-1oaml23`, "data-framer-name": "Primary", "data-highlight": true, draggable: "false", layoutDependency, layoutId: "Mainstores__fGebBpVaS", onTap: onTappg0bwd, ref: refBinding, style: { backgroundColor: "var(--token-8ef28781-a0a2-43db-933d-3d729ae85487, rgb(0, 81, 255))", borderBottomLeftRadius: 100, borderBottomRightRadius: 100, borderTopLeftRadius: 100, borderTopRightRadius: 100, ...style }, variants: { "fGebBpVaS-hover": { backgroundColor: "var(--token-d5dcd97d-793f-4a02-b4b2-f1cfb443a4e6, rgb(0, 102, 255))" }, "zq5haw0aW-hover": { backgroundColor: "var(--token-8bac5f11-507c-413f-b3a4-632beefe55cb, rgb(227, 227, 227))" }, zq5haw0aW: { backgroundColor: "var(--token-ef4d7bc1-0431-483d-9665-aeb18fbabc63, rgb(237, 237, 237))" } }, ...addPropertyOverrides({ "fGebBpVaS-hover": { "data-framer-name": void 0 }, "zq5haw0aW-hover": { "data-framer-name": void 0 }, zq5haw0aW: { "data-framer-name": "Secondary" } }, baseVariant, gestureVariant), children: [hZdVwdl_Y !== false && /* @__PURE__ */ _jsx3(Instance, { animated: true, className: "framer-1qra2si", Component: peKL8pfJA, layoutDependency, layoutId: "Mainstores__yMwwNckn2", style: { "--118a55": "var(--token-c4652695-7f66-461d-9ec5-551c9e0af1d0, rgb(255, 255, 255))" }, variants: { zq5haw0aW: { "--118a55": "var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0))" } } }), /* @__PURE__ */ _jsx3(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx3(React4.Fragment, { children: /* @__PURE__ */ _jsx3(motion3.p, { className: "framer-styles-preset-1v7qm6", "data-styles-preset": "ocOde6Lm9", dir: "auto", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-e0ec22b8-2ee9-41b9-9c9b-068af203c374, rgb(255, 255, 255)))" }, children: "Join Waitlist" }) }), className: "framer-1iwjqtp", fonts: ["Inter"], layoutDependency, layoutId: "Mainstores__E50KQQY7B", style: { "--extracted-r6o4lv": "var(--token-e0ec22b8-2ee9-41b9-9c9b-068af203c374, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, text: TDPWRYXxk, variants: { zq5haw0aW: { "--extracted-r6o4lv": "var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, rgb(0, 0, 0))" } }, verticalAlignment: "top", withExternalLayout: true, ...addPropertyOverrides({ zq5haw0aW: { children: /* @__PURE__ */ _jsx3(React4.Fragment, { children: /* @__PURE__ */ _jsx3(motion3.p, { className: "framer-styles-preset-10suf4d", "data-styles-preset": "kw43ePOKN", dir: "auto", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, rgb(0, 0, 0)))" }, children: "Button" }) }) } }, baseVariant, gestureVariant) })] }) }) }) }) });
});
var css11 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-MYjR9.framer-1oaml23, .framer-MYjR9 .framer-1oaml23 { display: block; }", ".framer-MYjR9.framer-1o0lmo4 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 7px 14px 7px 14px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-MYjR9 .framer-1qra2si { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 10px); position: relative; width: 10px; }", ".framer-MYjR9 .framer-1iwjqtp { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 2; }", ...css10, ...css9];
var Framerb_m5Js9Ir = withCSS2(Component2, css11, "framer-MYjR9");
var b_m5Js9Ir_default = Framerb_m5Js9Ir;
Framerb_m5Js9Ir.displayName = "Button";
Framerb_m5Js9Ir.defaultProps = { height: 29.5, width: 66 };
addPropertyControls3(Framerb_m5Js9Ir, { variant: { options: ["fGebBpVaS", "zq5haw0aW"], optionTitles: ["Primary", "Secondary"], title: "Variant", type: ControlType6.Enum }, TDPWRYXxk: { defaultValue: "Button", displayTextArea: false, title: "Title", type: ControlType6.String }, onTDPWRYXxkChange: { changes: "TDPWRYXxk", type: ControlType6.ChangeHandler }, vFRI3q06T: { title: "Link", type: ControlType6.Link }, DY2dzgeiO: { title: "Click", type: ControlType6.EventHandler }, peKL8pfJA: { defaultValue: { identifier: "local-module:vector/wggGXhZaC:default", moduleId: "Fs5VQrVyKoruA9COVjYx" }, setModuleId: "v49rTnsQ31Y5gd6DySlU", title: "Icon", type: ControlType6.VectorSetItem }, hZdVwdl_Y: { defaultValue: false, title: "Show Icon", type: ControlType6.Boolean }, onhZdVwdl_YChange: { changes: "hZdVwdl_Y", type: ControlType6.ChangeHandler } });
addFonts(Framerb_m5Js9Ir, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...getFontsFromSharedStyle(fonts9), ...getFontsFromSharedStyle(fonts8)], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/6gSeLGufj9YMO6ADzqOD/pnSAXwDC0JfNjp5xAcUa/BbFuZPGaK.js
import { jsx as _jsx4 } from "react/jsx-runtime";
import { addFonts as addFonts2, addPropertyControls as addPropertyControls4, ControlType as ControlType7, cx as cx3, useComponentViewport as useComponentViewport2, useLocaleInfo as useLocaleInfo2, useVariantState as useVariantState2, withCSS as withCSS3 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup2, motion as motion4, MotionConfigContext as MotionConfigContext2 } from "framer-motion";
import * as React5 from "react";
import { useRef as useRef4 } from "react";
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
  return /* @__PURE__ */ _jsx4(MotionConfigContext2.Provider, { value: contextValue, children });
};
var humanReadableVariantMap2 = { "100": "FveAb6f2W", "200": "I5Li6kC_5" };
var Variants2 = motion4.create(React5.Fragment);
var getProps3 = ({ height, id, width, ...props }) => {
  return { ...props, variant: humanReadableVariantMap2[props.variant] ?? props.variant ?? "FveAb6f2W" };
};
var createLayoutDependency2 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component3 = /* @__PURE__ */ React5.forwardRef(function(props, ref) {
  const fallbackRef = useRef4(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React5.useId();
  const { activeLocale, setLocale } = useLocaleInfo2();
  const componentViewport = useComponentViewport2();
  const { style, className: className11, layoutId, variant, ...restProps } = getProps3(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState2({ cycleOrder: cycleOrder2, defaultVariant: "FveAb6f2W", ref: refBinding, variant, variantClassNames: variantClassNames2 });
  const layoutDependency = createLayoutDependency2(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx3(serializationHash2, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx4(LayoutGroup2, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx4(Variants2, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx4(Transition2, { value: transition12, children: /* @__PURE__ */ _jsx4(motion4.div, { ...restProps, ...gestureHandlers, className: cx3(scopingClassNames, "framer-zl82vu", className11, classNames), "data-framer-name": "100", layoutDependency, layoutId: "Mainstores__FveAb6f2W", ref: refBinding, style: { backgroundColor: "var(--token-914b1e49-c6dc-49fc-93ac-369519474e4f, rgb(227, 227, 227))", ...style }, variants: { I5Li6kC_5: { backgroundColor: "var(--token-fb0f7462-27b2-4a53-b10e-81b2a62b8279, rgb(204, 204, 204))" } }, ...addPropertyOverrides2({ I5Li6kC_5: { "data-framer-name": "200" } }, baseVariant, gestureVariant) }) }) }) });
});
var css12 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-axTw0.framer-2kef09, .framer-axTw0 .framer-2kef09 { display: block; }", ".framer-axTw0.framer-zl82vu { height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }"];
var FramerBbFuZPGaK = withCSS3(Component3, css12, "framer-axTw0");
var BbFuZPGaK_default = FramerBbFuZPGaK;
FramerBbFuZPGaK.displayName = "Separator";
FramerBbFuZPGaK.defaultProps = { height: 1, width: 1072 };
addPropertyControls4(FramerBbFuZPGaK, { variant: { options: ["FveAb6f2W", "I5Li6kC_5"], optionTitles: ["100", "200"], title: "Variant", type: ControlType7.Enum } });
addFonts2(FramerBbFuZPGaK, [{ explicitInter: true, fonts: [] }], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/vsWD3jrHa2UPZ4HBSelQ/mxksfTWSr4V3v6Ciw6Dn/q2LtQikRu.js
var GoogleMapsFonts = getFonts(GoogleMaps);
var SeparatorFonts = getFonts(BbFuZPGaK_default);
var ButtonFonts = getFonts(b_m5Js9Ir_default);
var SmartComponentScopedContainerWithFXWithOptimizedAppearEffect = withOptimizedAppearEffect(withFX(SmartComponentScopedContainer));
var cycleOrder3 = ["TBAcir2H4", "SZZanYjav", "oF5VsfZwB"];
var serializationHash3 = "framer-JNPGv";
var variantClassNames3 = { oF5VsfZwB: "framer-v-1cp5wyj", SZZanYjav: "framer-v-3y2p3x", TBAcir2H4: "framer-v-11y8jg3" };
function addPropertyOverrides3(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var patchBorderRadiusScaleCorrector1 = patchBorderRadiusScaleCorrector();
var transition13 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var matchVariant = (...args) => {
  for (const arg of args) {
    if (arg && typeof arg === "string")
      return arg;
  }
  return void 0;
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
var dateOptions = { hour: "2-digit", hour12: true, minute: "2-digit", timeZone: "UTC" };
var toDateString = (value, activeLocale) => {
  return sharedDateFormatter(value, dateOptions, activeLocale);
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
var transition2 = { bounce: 0, delay: 0, duration: 0.4, type: "spring" };
var animation = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: transition2, x: 0, y: 0 };
var animation1 = { opacity: 1e-3, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 0 };
var Transition3 = ({ value, children }) => {
  const config = React6.useContext(MotionConfigContext3);
  const transition = value ?? config.transition;
  const contextValue = React6.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx5(MotionConfigContext3.Provider, { value: contextValue, children });
};
var humanReadableVariantMap3 = { "Integrated Map": "oF5VsfZwB", Base: "TBAcir2H4", Selected: "SZZanYjav" };
var Variants3 = motion5.create(React6.Fragment);
var getProps4 = ({ closesAt, googleCoordinates, height, id, link, opensAt, storeAddress, storeName, width, ...props }) => {
  return { ...props, a2PH_U_lq: opensAt ?? props.a2PH_U_lq ?? "1970-01-01T09:30:00.000Z", FDCqm9z4a: storeName ?? props.FDCqm9z4a ?? "Sneaks Miami Design District", Fuurl_OdZ: link ?? props.Fuurl_OdZ, p4IsTOy6X: closesAt ?? props.p4IsTOy6X ?? "1970-01-01T21:30:00.000Z", SVp6vluqo: googleCoordinates ?? props.SVp6vluqo ?? "23.00541930770128, 72.60516262339667", tYPOqSkzQ: storeAddress ?? props.tYPOqSkzQ ?? /* @__PURE__ */ _jsx5(React6.Fragment, { children: /* @__PURE__ */ _jsx5(motion5.p, { dir: "auto", children: "151 NE 41st Street, Miami, FL 33137, USA" }) }), variant: humanReadableVariantMap3[props.variant] ?? props.variant ?? "TBAcir2H4" };
};
var createLayoutDependency3 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component4 = /* @__PURE__ */ React6.forwardRef(function(props, ref) {
  const fallbackRef = useRef5(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React6.useId();
  const { activeLocale, setLocale } = useLocaleInfo3();
  const componentViewport = useComponentViewport3();
  const { style, className: className11, layoutId, variant, Fuurl_OdZ, FDCqm9z4a, tYPOqSkzQ, a2PH_U_lq, p4IsTOy6X, SVp6vluqo, ...restProps } = getProps4(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState3({ cycleOrder: cycleOrder3, defaultVariant: "TBAcir2H4", ref: refBinding, variant, variantClassNames: variantClassNames3 });
  const layoutDependency = createLayoutDependency3(props, variants);
  const sharedStyleClassNames = [className6, className7, className5, className3, className4, className2];
  const scopingClassNames = cx4(serializationHash3, ...sharedStyleClassNames);
  const isDisplayed = () => {
    if (baseVariant === "oF5VsfZwB")
      return true;
    return false;
  };
  const activeLocaleCode = useLocaleCode();
  const textContent = prefix(toDateString(a2PH_U_lq, activeLocaleCode), "Opens  ");
  const textContent1 = prefix(toDateString(p4IsTOy6X, activeLocaleCode), "Closes  ");
  const isDisplayed1 = () => {
    if (["SZZanYjav", "oF5VsfZwB"].includes(baseVariant))
      return true;
    return false;
  };
  return /* @__PURE__ */ _jsx5(LayoutGroup3, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx5(Variants3, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx5(Transition3, { value: transition13, children: /* @__PURE__ */ _jsxs2(motion5.div, { ...restProps, ...gestureHandlers, className: cx4(scopingClassNames, "framer-11y8jg3", className11, classNames), "data-border": true, "data-framer-name": "Base", layoutDependency, layoutId: "Mainstores__TBAcir2H4", ref: refBinding, style: { "--border-bottom-width": "1.5px", "--border-color": "var(--token-914b1e49-c6dc-49fc-93ac-369519474e4f, rgb(227, 227, 227))", "--border-left-width": "1.5px", "--border-right-width": "1.5px", "--border-style": "solid", "--border-top-width": "1.5px", "--corner-shape-fallback": 0.796, backgroundColor: "var(--token-c81209ee-d76c-46df-b8d5-cc628e2f35fa, rgb(250, 250, 250))", borderBottomLeftRadius: "calc(31px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderBottomRightRadius: "calc(31px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopLeftRadius: "calc(31px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopRightRadius: "calc(31px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", cornerShape: "superellipse(1.4)", ...style }, variants: { oF5VsfZwB: { "--border-color": "var(--token-fef8ed21-2275-401e-b9be-ccc5aaee5e6f, rgb(237, 237, 237))", backgroundColor: "var(--token-9039c660-569a-421b-a527-9ac056ae9951, rgb(255, 255, 255))" }, SZZanYjav: { "--border-color": "var(--token-2da0c940-421e-44a3-be8a-e5120d5d1053, rgb(0, 123, 255))" } }, ...addPropertyOverrides3({ oF5VsfZwB: { "data-framer-name": "Integrated Map" }, SZZanYjav: { "data-framer-name": "Selected" } }, baseVariant, gestureVariant), children: [isDisplayed() && /* @__PURE__ */ _jsx5(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx5(SmartComponentScopedContainer, { className: "framer-2ohiwn-container", isAuthoredByUser: true, isModuleExternal: true, layoutDependency, layoutId: "Mainstores__ZNFwiT4_Y-container", nodeId: "ZNFwiT4_Y", rendersWithMotion: true, scopeId: "q2LtQikRu", children: /* @__PURE__ */ _jsx5(GoogleMaps, { borderRadius: 0, bottomLeftRadius: 0, bottomRightRadius: 0, coordinates: SVp6vluqo, height: "100%", id: "ZNFwiT4_Y", isMixedBorderRadius: false, layoutId: "Mainstores__ZNFwiT4_Y", style: { height: "100%", width: "100%" }, topLeftRadius: 0, topRightRadius: 0, width: "100%", zoom: 15 }) }) }), /* @__PURE__ */ _jsxs2(motion5.div, { className: "framer-1qo50y0", "data-framer-name": "Body", layoutDependency, layoutId: "Mainstores__n4op0sVg_", children: [/* @__PURE__ */ _jsxs2(motion5.div, { className: "framer-zwvhb6", "data-framer-name": "Name & Address", layoutDependency, layoutId: "Mainstores__CCnbuclWX", children: [/* @__PURE__ */ _jsx5(RichText2, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx5(React6.Fragment, { children: /* @__PURE__ */ _jsx5(motion5.p, { className: "framer-styles-preset-bnfmu7", "data-styles-preset": "Hme2S1hiD", dir: "auto", children: "Adidas Store Delhi, Pacific Mall NSP Delhi" }) }), className: "framer-12ilio7", fonts: ["Inter"], layoutDependency, layoutId: "Mainstores__M2VdMkFP7", text: FDCqm9z4a, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx5(RichText2, { __fromCanvasComponent: true, children: tYPOqSkzQ, className: "framer-kuw317", fonts: ["Inter"], layoutDependency, layoutId: "Mainstores__NNRoyUl2W", style: { "--extracted-r6o4lv": "var(--token-31c75237-3696-4093-9011-7822eb8b6641, rgb(122, 122, 122))" }, stylesPresetsClassNames: { h5: "framer-styles-preset-1lkvzko", h6: "framer-styles-preset-1mts5yh", p: "framer-styles-preset-1hqmwka", table: "framer-styles-preset-176fugv" }, verticalAlignment: "top", withExternalLayout: true })] }), /* @__PURE__ */ _jsx5(ComponentViewportProvider, { height: 1, width: `calc(${componentViewport?.width || "100vw"} - 48px)`, y: (componentViewport?.y || 0) + 0 + 0 + 24 + 230, ...addPropertyOverrides3({ oF5VsfZwB: { y: (componentViewport?.y || 0) + 0 + 170 + 24 + 230 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx5(SmartComponentScopedContainer, { className: "framer-1jl4cxq-container", layoutDependency, layoutId: "Mainstores__UaaRHSIJa-container", nodeId: "UaaRHSIJa", rendersWithMotion: true, scopeId: "q2LtQikRu", children: /* @__PURE__ */ _jsx5(BbFuZPGaK_default, { height: "100%", id: "UaaRHSIJa", layoutId: "Mainstores__UaaRHSIJa", style: { height: "100%", width: "100%" }, variant: matchVariant("FveAb6f2W"), width: "100%" }) }) }), /* @__PURE__ */ _jsxs2(motion5.div, { className: "framer-89olh4", "data-framer-name": "Opening Hours", layoutDependency, layoutId: "Mainstores__STFAaMdLM", children: [/* @__PURE__ */ _jsx5(motion5.div, { className: "framer-x86gvm", "data-framer-name": "Opens", layoutDependency, layoutId: "Mainstores__zUk_Qo1gy", children: /* @__PURE__ */ _jsx5(RichText2, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx5(React6.Fragment, { children: /* @__PURE__ */ _jsx5(motion5.p, { className: "framer-styles-preset-9tj2n0", "data-styles-preset": "amNEcipQY", dir: "auto", style: { "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-31c75237-3696-4093-9011-7822eb8b6641, rgb(122, 122, 122)))" }, children: "Opens  09:30 AM" }) }), className: "framer-17x71os", "data-framer-name": "Store Name", fonts: ["Inter"], layoutDependency, layoutId: "Mainstores__GvqynT9bf", style: { "--extracted-r6o4lv": "var(--token-31c75237-3696-4093-9011-7822eb8b6641, rgb(122, 122, 122))" }, text: /* @__PURE__ */ _jsx5("time", { dateTime: a2PH_U_lq, children: textContent }), verticalAlignment: "top", withExternalLayout: true }) }), /* @__PURE__ */ _jsx5(motion5.div, { className: "framer-1qff8l6", "data-framer-name": "Closes", layoutDependency, layoutId: "Mainstores__RNtYKwtaQ", children: /* @__PURE__ */ _jsx5(RichText2, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx5(React6.Fragment, { children: /* @__PURE__ */ _jsx5(motion5.p, { className: "framer-styles-preset-9tj2n0", "data-styles-preset": "amNEcipQY", dir: "auto", style: { "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-31c75237-3696-4093-9011-7822eb8b6641, rgb(122, 122, 122)))" }, children: "Closes  09:30 PM" }) }), className: "framer-134cpu8", "data-framer-name": "Store Name", fonts: ["Inter"], layoutDependency, layoutId: "Mainstores__TPaHtE1IN", style: { "--extracted-r6o4lv": "var(--token-31c75237-3696-4093-9011-7822eb8b6641, rgb(122, 122, 122))" }, text: /* @__PURE__ */ _jsx5("time", { dateTime: p4IsTOy6X, children: textContent1 }), verticalAlignment: "top", withExternalLayout: true }) })] }), isDisplayed1() && /* @__PURE__ */ _jsx5(ComponentViewportProvider, { ...addPropertyOverrides3({ oF5VsfZwB: { height: 27, width: `calc(${componentViewport?.width || "100vw"} - 48px)`, y: (componentViewport?.y || 0) + 0 + 170 + 24 + 284 }, SZZanYjav: { height: 27, width: `calc(${componentViewport?.width || "100vw"} - 48px)`, y: (componentViewport?.y || 0) + 0 + 0 + 24 + 284 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx5(SmartComponentScopedContainerWithFXWithOptimizedAppearEffect, { __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, animate: animation, className: "framer-1ns3wjw-container", "data-framer-appear-id": "1ns3wjw", initial: animation1, layoutDependency, layoutId: "Mainstores__cqSWp0JAl-container", nodeId: "cqSWp0JAl", optimized: true, rendersWithMotion: true, scopeId: "q2LtQikRu", children: /* @__PURE__ */ _jsx5(b_m5Js9Ir_default, { height: "100%", hZdVwdl_Y: false, id: "cqSWp0JAl", layoutId: "Mainstores__cqSWp0JAl", peKL8pfJA: wggGXhZaC_default, style: { width: "100%" }, TDPWRYXxk: "View", variant: matchVariant("fGebBpVaS"), vFRI3q06T: Fuurl_OdZ, width: "100%" }) }) })] })] }) }) }) });
});
var css13 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-JNPGv.framer-1vwb71c, .framer-JNPGv .framer-1vwb71c { display: block; }", ".framer-JNPGv.framer-11y8jg3 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }", ".framer-JNPGv .framer-2ohiwn-container { flex: none; height: 170px; position: sticky; top: 0px; width: 100%; z-index: 1; }", ".framer-JNPGv .framer-1qo50y0 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 24px; position: relative; width: 100%; }", ".framer-JNPGv .framer-zwvhb6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }", ".framer-JNPGv .framer-12ilio7 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", '.framer-JNPGv .framer-kuw317 { --text-truncation-display-inline-for-safari-16: inline; --text-truncation-display-none-for-safari-16: none; --text-truncation-line-break-for-safari-16: "\\A"; -webkit-box-orient: vertical; -webkit-line-clamp: 1; display: -webkit-box; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; white-space: pre-line; width: 100%; word-break: break-word; word-wrap: break-word; }', ".framer-JNPGv .framer-1jl4cxq-container { flex: none; height: 1px; position: relative; width: 100%; }", ".framer-JNPGv .framer-89olh4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }", ".framer-JNPGv .framer-x86gvm, .framer-JNPGv .framer-1qff8l6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }", '.framer-JNPGv .framer-17x71os, .framer-JNPGv .framer-134cpu8 { --text-truncation-display-inline-for-safari-16: inline; --text-truncation-display-none-for-safari-16: none; --text-truncation-line-break-for-safari-16: "\\A"; -webkit-box-orient: vertical; -webkit-line-clamp: 1; display: -webkit-box; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; white-space: pre; width: auto; }', ".framer-JNPGv .framer-1ns3wjw-container { flex: none; height: auto; position: relative; width: 100%; }", ".framer-JNPGv.framer-v-3y2p3x .framer-1qo50y0 { padding: 24px 24px 19px 24px; }", ".framer-JNPGv.framer-v-1cp5wyj .framer-1qo50y0 { padding: 24px 24px 20px 24px; }", ...css6, ...css7, ...css5, ...css3, ...css4, ...css2, '.framer-JNPGv[data-border="true"]::after, .framer-JNPGv [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }'];
var Framerq2LtQikRu = withCSS4(Component4, css13, "framer-JNPGv");
var q2LtQikRu_default = Framerq2LtQikRu;
Framerq2LtQikRu.displayName = "Store Card";
Framerq2LtQikRu.defaultProps = { height: 151.5, width: 344 };
addPropertyControls5(Framerq2LtQikRu, { variant: { options: ["TBAcir2H4", "SZZanYjav", "oF5VsfZwB"], optionTitles: ["Base", "Selected", "Integrated Map"], title: "Variant", type: ControlType8.Enum }, Fuurl_OdZ: { title: "Link", type: ControlType8.Link }, FDCqm9z4a: { defaultValue: "Sneaks Miami Design District", title: "Store Name", type: ControlType8.String }, onFDCqm9z4aChange: { changes: "FDCqm9z4a", type: ControlType8.ChangeHandler }, tYPOqSkzQ: { defaultValue: '<p dir="auto">151 NE 41st Street, Miami, FL 33137, USA</p>', title: "Store Address", type: ControlType8.RichText }, a2PH_U_lq: { defaultValue: "1970-01-01T09:30:00.000Z", title: "Opens At", type: ControlType8.Date }, ona2PH_U_lqChange: { changes: "a2PH_U_lq", type: ControlType8.ChangeHandler }, p4IsTOy6X: { defaultValue: "1970-01-01T21:30:00.000Z", title: "Closes At", type: ControlType8.Date }, onp4IsTOy6XChange: { changes: "p4IsTOy6X", type: ControlType8.ChangeHandler }, SVp6vluqo: { defaultValue: "23.00541930770128, 72.60516262339667", placeholder: "Framer B.V.", title: "Google Coordinates", type: ControlType8.String }, onSVp6vluqoChange: { changes: "SVp6vluqo", type: ControlType8.ChangeHandler } });
addFonts3(Framerq2LtQikRu, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...GoogleMapsFonts, ...SeparatorFonts, ...ButtonFonts, ...getFontsFromSharedStyle2(fonts6), ...getFontsFromSharedStyle2(fonts7), ...getFontsFromSharedStyle2(fonts5), ...getFontsFromSharedStyle2(fonts3), ...getFontsFromSharedStyle2(fonts4), ...getFontsFromSharedStyle2(fonts2)], { supportsExplicitInterCodegen: true });
Framerq2LtQikRu.loader = { load: (props, context) => {
  const locale = context.locale;
  return Promise.allSettled([forwardLoader(BbFuZPGaK_default, {}, context), forwardLoader(b_m5Js9Ir_default, {}, context)]);
} };

// http-url:https://framerusercontent.com/modules/j2reeD79JFJb4qX56LB0/cW6U6wATsWTsVT3zl1ar/RHuv4_JXb.js
import { jsx as _jsx7 } from "react/jsx-runtime";
import { addFonts as addFonts4, addPropertyControls as addPropertyControls7, ControlType as ControlType10, cx as cx6, getFonts as getFonts2, useComponentViewport as useComponentViewport4, useLocaleInfo as useLocaleInfo4, useVariantState as useVariantState4, withCSS as withCSS6, withFX as withFX2 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup4, motion as motion7, MotionConfigContext as MotionConfigContext4 } from "framer-motion";
import * as React8 from "react";
import { useRef as useRef6 } from "react";

// http-url:https://framerusercontent.com/modules/uwcebgf1Nax0iqlL3Vms/uikRyu62wXvhstMDihWt/rulyW4hkS.js
import { jsx as _jsx6 } from "react/jsx-runtime";
import { addPropertyControls as addPropertyControls6, ControlType as ControlType9, cx as cx5, motion as motion6, withCSS as withCSS5 } from "./_framer-runtime.js";
import * as React7 from "react";
import { forwardRef as forwardRef7 } from "react";
var mask2 = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g d="M 15.021 50.012 C 15.021 30.687 30.687 15.021 50.012 15.021 C 69.338 15.021 85.004 30.687 85.004 50.012 C 85.004 69.338 69.338 85.004 50.012 85.004 C 30.687 85.004 15.021 69.338 15.021 50.012 Z M 50.012 100 C 77.621 100 100 77.621 100 50.012 C 100 22.404 77.621 0.025 50.012 0.025 C 22.404 0.025 0.025 22.404 0.025 50.012 C 0.025 77.621 22.404 100 50.012 100 Z M 0 49.988 C 0 22.379 22.379 0 49.988 0 L 49.988 14.996 C 30.662 14.996 14.996 30.662 14.996 49.988 Z" fill="transparent" height="99.9999885610566px" id="Sj3L4dRPK" width="100px"><g opacity="0.2"><path d="M 14.996 49.988 C 14.996 30.662 30.662 14.996 49.988 14.996 C 69.313 14.996 84.979 30.662 84.979 49.988 C 84.979 69.313 69.313 84.979 49.988 84.979 C 30.662 84.979 14.996 69.313 14.996 49.988 Z M 49.988 99.975 C 77.596 99.975 99.975 77.596 99.975 49.988 C 99.975 22.379 77.596 0 49.988 0 C 22.379 0 0 22.379 0 49.988 C 0 77.596 22.379 99.975 49.988 99.975 Z" fill="var(--118a55, var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)))" height="99.97500587024544px" id="hs2PlSSLu" transform="translate(0.025 0.025)" width="99.97500586452463px"/></g><path d="M 0 49.988 C 0 22.379 22.379 0 49.988 0 L 49.988 14.996 C 30.662 14.996 14.996 30.662 14.996 49.988 Z" fill="var(--118a55, var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)))" height="49.98750293283456px" id="lL24lIlID" width="49.98750293283471px"/></g></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`;
var SVG2 = /* @__PURE__ */ forwardRef7((props, ref) => {
  const { animated, layoutId, children, ...rest } = props;
  return animated ? /* @__PURE__ */ _jsx6(motion6.div, { ...rest, layoutId, ref }) : /* @__PURE__ */ _jsx6("div", { ...rest, ref });
});
var getProps5 = ({ color, height, id, width, ...props }) => {
  return { ...props, GaDHsaDms: color ?? props.GaDHsaDms ?? "var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0))" };
};
var Component5 = /* @__PURE__ */ React7.forwardRef(function(props, ref) {
  const { style, className: className11, layoutId, variant, GaDHsaDms, ...restProps } = getProps5(props);
  return /* @__PURE__ */ _jsx6(SVG2, { ...restProps, className: cx5("framer-WJlJO", className11), layoutId, ref, style: { "--118a55": GaDHsaDms, ...style } });
});
var css14 = [`.framer-WJlJO { -webkit-mask: ${mask2}; aspect-ratio: 1; background-color: var(--118a55); mask: ${mask2}; width: 100px; }`];
var Icon2 = withCSS5(Component5, css14, "framer-WJlJO");
Icon2.displayName = "Spinner";
var rulyW4hkS_default = Icon2;
addPropertyControls6(Icon2, { GaDHsaDms: { defaultValue: 'var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)) /* {"name":"Icon Black"} */', hidden: false, title: "Color", type: ControlType9.Color } });

// http-url:https://framerusercontent.com/modules/j2reeD79JFJb4qX56LB0/cW6U6wATsWTsVT3zl1ar/RHuv4_JXb.js
var SpinnerFonts = getFonts2(rulyW4hkS_default);
var SpinnerWithFX = withFX2(rulyW4hkS_default);
var cycleOrder4 = ["B61_BL_iz", "YzeiBTjIT"];
var serializationHash4 = "framer-t9Ssb";
var variantClassNames4 = { B61_BL_iz: "framer-v-1nq8e1a", YzeiBTjIT: "framer-v-1q8zkpo" };
var transition14 = { duration: 0, type: "tween" };
var transition22 = { delay: 0, duration: 0.65, ease: [0, 0, 1, 1], type: "tween" };
var animation2 = { opacity: 1, rotate: 360, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 0 };
var Transition4 = ({ value, children }) => {
  const config = React8.useContext(MotionConfigContext4);
  const transition = value ?? config.transition;
  const contextValue = React8.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx7(MotionConfigContext4.Provider, { value: contextValue, children });
};
var humanReadableVariantMap4 = { Hidden: "YzeiBTjIT", Loading: "B61_BL_iz" };
var Variants4 = motion7.create(React8.Fragment);
var getProps6 = ({ height, id, width, ...props }) => {
  return { ...props, variant: humanReadableVariantMap4[props.variant] ?? props.variant ?? "B61_BL_iz" };
};
var createLayoutDependency4 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component6 = /* @__PURE__ */ React8.forwardRef(function(props, ref) {
  const fallbackRef = useRef6(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React8.useId();
  const { activeLocale, setLocale } = useLocaleInfo4();
  const componentViewport = useComponentViewport4();
  const { style, className: className11, layoutId, variant, ...restProps } = getProps6(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState4({ cycleOrder: cycleOrder4, defaultVariant: "B61_BL_iz", ref: refBinding, variant, variantClassNames: variantClassNames4 });
  const layoutDependency = createLayoutDependency4(props, variants);
  const sharedStyleClassNames = [];
  const isDisplayed = () => {
    if (baseVariant === "YzeiBTjIT")
      return false;
    return true;
  };
  const scopingClassNames = cx6(serializationHash4, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx7(LayoutGroup4, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx7(Variants4, { animate: variants, initial: false, children: isDisplayed() && /* @__PURE__ */ _jsx7(Transition4, { value: transition14, children: /* @__PURE__ */ _jsx7(motion7.div, { ...restProps, ...gestureHandlers, className: cx6(scopingClassNames, "framer-1nq8e1a", className11, classNames), "data-framer-name": "Loading", layoutDependency, layoutId: "Mainstores__B61_BL_iz", ref: refBinding, style: { ...style }, children: /* @__PURE__ */ _jsx7(SpinnerWithFX, { __framer__loop: animation2, __framer__loopEffectEnabled: true, __framer__loopRepeatDelay: 0, __framer__loopRepeatType: "loop", __framer__loopTransition: transition22, __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, animated: true, className: "framer-ptbnlq", layoutDependency, layoutId: "Mainstores__YFk0vTjqr", style: { "--118a55": "var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0))" } }) }) }) }) });
});
var css15 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-t9Ssb.framer-e7rpc1, .framer-t9Ssb .framer-e7rpc1 { display: block; }", ".framer-t9Ssb.framer-1nq8e1a { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }", ".framer-t9Ssb .framer-ptbnlq { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); position: relative; width: 20px; }"];
var FramerRHuv4_JXb = withCSS6(Component6, css15, "framer-t9Ssb");
var RHuv4_JXb_default = FramerRHuv4_JXb;
FramerRHuv4_JXb.displayName = "Store Pagination Spinner";
FramerRHuv4_JXb.defaultProps = { height: 20, width: 40 };
addPropertyControls7(FramerRHuv4_JXb, { variant: { options: ["B61_BL_iz", "YzeiBTjIT"], optionTitles: ["Loading", "Hidden"], title: "Variant", type: ControlType10.Enum } });
addFonts4(FramerRHuv4_JXb, [{ explicitInter: true, fonts: [] }, ...SpinnerFonts], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/GleUd8rkqhU8fDOp9YVF/rKUsGmf1jQjF2KQTudXq/sAat8iFw8.js
import { jsx as _jsx8, jsxs as _jsxs3 } from "react/jsx-runtime";
import { addFonts as addFonts5, addPropertyControls as addPropertyControls8, ControlType as ControlType11, cx as cx7, getFontsFromSharedStyle as getFontsFromSharedStyle3, RichText as RichText3, useComponentViewport as useComponentViewport5, useLocaleInfo as useLocaleInfo5, useVariantState as useVariantState5, withCSS as withCSS7 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup5, motion as motion8, MotionConfigContext as MotionConfigContext5 } from "framer-motion";
import * as React9 from "react";
import { useRef as useRef7 } from "react";

// http-url:https://framerusercontent.com/modules/pViJj926CBy444h3AYfq/yXDe2VVQ9pDsXbJlmrXJ/CT_DBbR5R.js
import { fontStore as fontStore11 } from "./_framer-runtime.js";
fontStore11.loadFonts(["Inter-Variable", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNTUw", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNTUw", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNTUw"]);
var variationAxes9 = [{ defaultValue: 14, maxValue: 32, minValue: 14, name: "Optical size", tag: "opsz" }, { defaultValue: 400, maxValue: 900, minValue: 100, name: "Weight", tag: "wght" }];
var fonts10 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/mYcqTSergLb16PdbJJQMl9ebYm4.woff2", variationAxes: variationAxes9, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2", variationAxes: variationAxes9, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2", variationAxes: variationAxes9, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/DYHjxG0qXjopUuruoacfl5SA.woff2", variationAxes: variationAxes9, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2", variationAxes: variationAxes9, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2", variationAxes: variationAxes9, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2", variationAxes: variationAxes9, weight: "400" }] }];
var css16 = ['.framer-fQ51O .framer-styles-preset-5rfdkx:not(.rich-text-wrapper), .framer-fQ51O .framer-styles-preset-5rfdkx.rich-text-wrapper p { --framer-font-family: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "opsz" 14, "wght" 550; --framer-font-variation-axes-bold: "opsz" 14, "wght" 550; --framer-font-variation-axes-bold-italic: "opsz" 14, "wght" 550; --framer-font-variation-axes-italic: "opsz" 14, "wght" 550; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }'];
var className10 = "framer-fQ51O";

// http-url:https://framerusercontent.com/modules/GleUd8rkqhU8fDOp9YVF/rKUsGmf1jQjF2KQTudXq/sAat8iFw8.js
var serializationHash5 = "framer-J6Uch";
var variantClassNames5 = { IFRWjDoNX: "framer-v-5tab0w" };
var transition15 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var toString = (value) => {
  return typeof value === "string" ? value : String(value);
};
var Transition5 = ({ value, children }) => {
  const config = React9.useContext(MotionConfigContext5);
  const transition = value ?? config.transition;
  const contextValue = React9.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx8(MotionConfigContext5.Provider, { value: contextValue, children });
};
var Variants5 = motion8.create(React9.Fragment);
var getProps7 = ({ height, id, tagline, visibleItems, width, ...props }) => {
  return { ...props, BwN_hqFrE: tagline ?? props.BwN_hqFrE ?? "results", rGomIo08R: visibleItems ?? props.rGomIo08R ?? 4 };
};
var createLayoutDependency5 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component7 = /* @__PURE__ */ React9.forwardRef(function(props, ref) {
  const fallbackRef = useRef7(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React9.useId();
  const { activeLocale, setLocale } = useLocaleInfo5();
  const componentViewport = useComponentViewport5();
  const { style, className: className11, layoutId, variant, rGomIo08R, BwN_hqFrE, ...restProps } = getProps7(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState5({ defaultVariant: "IFRWjDoNX", ref: refBinding, variant, variantClassNames: variantClassNames5 });
  const layoutDependency = createLayoutDependency5(props, variants);
  const sharedStyleClassNames = [className10, className2];
  const scopingClassNames = cx7(serializationHash5, ...sharedStyleClassNames);
  const textContent = toString(rGomIo08R);
  return /* @__PURE__ */ _jsx8(LayoutGroup5, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx8(Variants5, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx8(Transition5, { value: transition15, children: /* @__PURE__ */ _jsxs3(motion8.div, { ...restProps, ...gestureHandlers, className: cx7(scopingClassNames, "framer-5tab0w", className11, classNames), "data-framer-name": "Base", layoutDependency, layoutId: "Mainstores__IFRWjDoNX", ref: refBinding, style: { ...style }, children: [/* @__PURE__ */ _jsx8(RichText3, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx8(React9.Fragment, { children: /* @__PURE__ */ _jsx8(motion8.p, { className: "framer-styles-preset-5rfdkx", "data-styles-preset": "CT_DBbR5R", dir: "auto", style: { "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6d07e840-0908-44af-b7b3-055ece1d0a4b, rgb(41, 41, 41)))" }, children: "undefined" }) }), className: "framer-1uukdzl", fonts: ["Inter"], layoutDependency, layoutId: "Mainstores__ZvQSbmzZB", style: { "--extracted-r6o4lv": "var(--token-6d07e840-0908-44af-b7b3-055ece1d0a4b, rgb(41, 41, 41))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, text: textContent, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx8(RichText3, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx8(React9.Fragment, { children: /* @__PURE__ */ _jsx8(motion8.p, { className: "framer-styles-preset-9tj2n0", "data-styles-preset": "amNEcipQY", dir: "auto", style: { "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-55732a59-bc62-4580-8bcc-abc8c3da47fc, rgb(97, 97, 97)))" }, children: "results" }) }), className: "framer-1vz3pov", fonts: ["Inter"], layoutDependency, layoutId: "Mainstores__GlGCNL3cu", style: { "--extracted-r6o4lv": "var(--token-55732a59-bc62-4580-8bcc-abc8c3da47fc, rgb(97, 97, 97))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, text: BwN_hqFrE, verticalAlignment: "top", withExternalLayout: true })] }) }) }) });
});
var css17 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-J6Uch.framer-k2ld83, .framer-J6Uch .framer-k2ld83 { display: block; }", ".framer-J6Uch.framer-5tab0w { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }", ".framer-J6Uch .framer-1uukdzl { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-J6Uch .framer-1vz3pov { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", ...css16, ...css2];
var FramersAat8iFw8 = withCSS7(Component7, css17, "framer-J6Uch");
var sAat8iFw8_default = FramersAat8iFw8;
FramersAat8iFw8.displayName = "CMS Visible Items Count";
FramersAat8iFw8.defaultProps = { height: 21, width: 324 };
addPropertyControls8(FramersAat8iFw8, { rGomIo08R: { defaultValue: 4, min: 0, step: 1, title: "Visible Items", type: ControlType11.Number }, onrGomIo08RChange: { changes: "rGomIo08R", type: ControlType11.ChangeHandler }, BwN_hqFrE: { defaultValue: "results", displayTextArea: false, title: "Tagline", type: ControlType11.String }, onBwN_hqFrEChange: { changes: "BwN_hqFrE", type: ControlType11.ChangeHandler } });
addFonts5(FramersAat8iFw8, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...getFontsFromSharedStyle3(fonts10), ...getFontsFromSharedStyle3(fonts2)], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/Kk7wEZuu161iJO3pqz1n/KCLOFd30R7K2osvdrTM2/TUhvHjB8l.js
import { jsx as _jsx10, jsxs as _jsxs4 } from "react/jsx-runtime";
import { addFonts as addFonts6, addPropertyControls as addPropertyControls10, ComponentViewportProvider as ComponentViewportProvider2, ControlType as ControlType13, cx as cx9, getFonts as getFonts3, getFontsFromSharedStyle as getFontsFromSharedStyle4, RichText as RichText4, SmartComponentScopedContainer as SmartComponentScopedContainer2, useComponentViewport as useComponentViewport6, useLocaleInfo as useLocaleInfo6, useVariantState as useVariantState6, withCSS as withCSS9 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup6, motion as motion10, MotionConfigContext as MotionConfigContext6 } from "framer-motion";
import * as React11 from "react";
import { useRef as useRef8 } from "react";

// http-url:https://framerusercontent.com/modules/wiZWlA4BR8fzseCgtm7P/akYCWSJ0yjhEdJSBwHED/Hrf2VVQ5F.js
import { jsx as _jsx9 } from "react/jsx-runtime";
import { addPropertyControls as addPropertyControls9, ControlType as ControlType12, cx as cx8, motion as motion9, withCSS as withCSS8 } from "./_framer-runtime.js";
import * as React10 from "react";
import { forwardRef as forwardRef11 } from "react";
var mask3 = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 0 25 C 0 11.193 11.193 0 25 0 L 75 0 C 88.807 0 100 11.193 100 25 L 100 75 C 100 88.807 88.807 100 75 100 L 25 100 C 11.193 100 0 88.807 0 75 Z M 66.5 75 C 68.078 75 69.521 74.108 70.227 72.697 C 70.933 71.285 70.78 69.596 69.833 68.333 L 49 41.667 C 48.209 40.681 47.014 40.107 45.75 40.107 C 44.486 40.107 43.291 40.681 42.5 41.667 L 21.917 68.333 C 20.97 69.596 20.817 71.285 21.523 72.697 C 22.229 74.108 23.672 75 25.25 75 Z M 62.5 27.083 C 62.5 32.836 67.164 37.5 72.917 37.5 C 78.67 37.5 83.333 32.836 83.333 27.083 C 83.333 21.33 78.67 16.667 72.917 16.667 C 67.164 16.667 62.5 21.33 62.5 27.083 Z" fill="var(--118a55, var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)))" height="100px" id="fW412M7Ut" width="100px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`;
var SVG3 = /* @__PURE__ */ forwardRef11((props, ref) => {
  const { animated, layoutId, children, ...rest } = props;
  return animated ? /* @__PURE__ */ _jsx9(motion9.div, { ...rest, layoutId, ref }) : /* @__PURE__ */ _jsx9("div", { ...rest, ref });
});
var getProps8 = ({ color, height, id, width, ...props }) => {
  return { ...props, GaDHsaDms: color ?? props.GaDHsaDms ?? "var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0))" };
};
var Component8 = /* @__PURE__ */ React10.forwardRef(function(props, ref) {
  const { style, className: className11, layoutId, variant, GaDHsaDms, ...restProps } = getProps8(props);
  return /* @__PURE__ */ _jsx9(SVG3, { ...restProps, className: cx8("framer-yRL2U", className11), layoutId, ref, style: { "--118a55": GaDHsaDms, ...style } });
});
var css18 = [`.framer-yRL2U { -webkit-mask: ${mask3}; aspect-ratio: 1; background-color: var(--118a55); mask: ${mask3}; width: 100px; }`];
var Icon3 = withCSS8(Component8, css18, "framer-yRL2U");
Icon3.displayName = "Image";
var Hrf2VVQ5F_default = Icon3;
addPropertyControls9(Icon3, { GaDHsaDms: { defaultValue: 'var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)) /* {"name":"Icon Black"} */', hidden: false, title: "Color", type: ControlType12.Color } });

// http-url:https://framerusercontent.com/modules/Kk7wEZuu161iJO3pqz1n/KCLOFd30R7K2osvdrTM2/TUhvHjB8l.js
var GoogleMapsFonts2 = getFonts3(GoogleMaps);
var Image1Fonts = getFonts3(Hrf2VVQ5F_default);
var cycleOrder5 = ["o3PwaQ7_V", "h_6m_4lGN"];
var serializationHash6 = "framer-o2kgn";
var variantClassNames6 = { h_6m_4lGN: "framer-v-1whvyy0", o3PwaQ7_V: "framer-v-v8ux9g" };
function addPropertyOverrides4(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition16 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var Transition6 = ({ value, children }) => {
  const config = React11.useContext(MotionConfigContext6);
  const transition = value ?? config.transition;
  const contextValue = React11.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx10(MotionConfigContext6.Provider, { value: contextValue, children });
};
var humanReadableVariantMap5 = { Active: "h_6m_4lGN", Inactive: "o3PwaQ7_V" };
var Variants6 = motion10.create(React11.Fragment);
var getProps9 = ({ googleCoordinates, height, id, width, ...props }) => {
  return { ...props, variant: humanReadableVariantMap5[props.variant] ?? props.variant ?? "o3PwaQ7_V", waO0zPV5Z: googleCoordinates ?? props.waO0zPV5Z };
};
var createLayoutDependency6 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component9 = /* @__PURE__ */ React11.forwardRef(function(props, ref) {
  const fallbackRef = useRef8(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React11.useId();
  const { activeLocale, setLocale } = useLocaleInfo6();
  const componentViewport = useComponentViewport6();
  const { style, className: className11, layoutId, variant, waO0zPV5Z, ...restProps } = getProps9(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState6({ cycleOrder: cycleOrder5, defaultVariant: "o3PwaQ7_V", ref: refBinding, variant, variantClassNames: variantClassNames6 });
  const layoutDependency = createLayoutDependency6(props, variants);
  const sharedStyleClassNames = [className10];
  const scopingClassNames = cx9(serializationHash6, ...sharedStyleClassNames);
  const isDisplayed = () => {
    if (baseVariant === "h_6m_4lGN")
      return true;
    return false;
  };
  const isDisplayed1 = () => {
    if (baseVariant === "h_6m_4lGN")
      return false;
    return true;
  };
  return /* @__PURE__ */ _jsx10(LayoutGroup6, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx10(Variants6, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx10(Transition6, { value: transition16, children: /* @__PURE__ */ _jsxs4(motion10.div, { ...restProps, ...gestureHandlers, className: cx9(scopingClassNames, "framer-v8ux9g", className11, classNames), "data-framer-name": "Inactive", layoutDependency, layoutId: "Mainstores__o3PwaQ7_V", ref: refBinding, style: { ...style }, ...addPropertyOverrides4({ h_6m_4lGN: { "data-framer-name": "Active" } }, baseVariant, gestureVariant), children: [isDisplayed() && /* @__PURE__ */ _jsx10(ComponentViewportProvider2, { children: /* @__PURE__ */ _jsx10(SmartComponentScopedContainer2, { className: "framer-l2e04u-container", isAuthoredByUser: true, isModuleExternal: true, layoutDependency, layoutId: "Mainstores__S0UR2Kr_x-container", nodeId: "S0UR2Kr_x", rendersWithMotion: true, scopeId: "TUhvHjB8l", children: /* @__PURE__ */ _jsx10(GoogleMaps, { borderRadius: 0, bottomLeftRadius: 0, bottomRightRadius: 0, coordinates: waO0zPV5Z, height: "100%", id: "S0UR2Kr_x", isMixedBorderRadius: false, layoutId: "Mainstores__S0UR2Kr_x", style: { height: "100%", width: "100%" }, topLeftRadius: 0, topRightRadius: 0, width: "100%", zoom: 15 }) }) }), isDisplayed1() && /* @__PURE__ */ _jsx10(motion10.div, { className: "framer-175co96", layoutDependency, layoutId: "Mainstores__lB_D0_s0c", style: { backgroundColor: "var(--token-c81209ee-d76c-46df-b8d5-cc628e2f35fa, rgb(250, 250, 250))" }, children: /* @__PURE__ */ _jsxs4(motion10.div, { className: "framer-1vftgo3", "data-framer-name": "Icon & Text", layoutDependency, layoutId: "Mainstores__uOxI1UGaz", children: [/* @__PURE__ */ _jsx10(Hrf2VVQ5F_default, { animated: true, className: "framer-1ewabql", layoutDependency, layoutId: "Mainstores__ZV5yzGdEw", style: { "--118a55": "var(--token-318e7803-4327-4041-8ab7-5a5664c34c8f, rgb(179, 179, 179))" } }), /* @__PURE__ */ _jsx10(RichText4, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx10(React11.Fragment, { children: /* @__PURE__ */ _jsx10(motion10.p, { className: "framer-styles-preset-5rfdkx", "data-styles-preset": "CT_DBbR5R", dir: "auto", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7d0d6ded-a16b-44b0-b3c5-41032df0ed2d, rgb(148, 148, 148)))" }, children: "Select a store to view it on map" }) }), className: "framer-1oxeuqg", fonts: ["Inter"], layoutDependency, layoutId: "Mainstores__JOJrZuYrL", style: { "--extracted-r6o4lv": "var(--token-7d0d6ded-a16b-44b0-b3c5-41032df0ed2d, rgb(148, 148, 148))" }, verticalAlignment: "top", withExternalLayout: true })] }) })] }) }) }) });
});
var css19 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-o2kgn.framer-1dlxcs1, .framer-o2kgn .framer-1dlxcs1 { display: block; }", ".framer-o2kgn.framer-v8ux9g { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }", ".framer-o2kgn .framer-l2e04u-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; z-index: 1; }", ".framer-o2kgn .framer-175co96 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 28px; position: relative; width: 1px; }", ".framer-o2kgn .framer-1vftgo3 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }", ".framer-o2kgn .framer-1ewabql { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 40px); position: relative; width: 40px; }", ".framer-o2kgn .framer-1oxeuqg { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ...css16];
var FramerTUhvHjB8l = withCSS9(Component9, css19, "framer-o2kgn");
var TUhvHjB8l_default = FramerTUhvHjB8l;
FramerTUhvHjB8l.displayName = "Store Google Map";
FramerTUhvHjB8l.defaultProps = { height: 800, width: 820 };
addPropertyControls10(FramerTUhvHjB8l, { variant: { options: ["o3PwaQ7_V", "h_6m_4lGN"], optionTitles: ["Inactive", "Active"], title: "Variant", type: ControlType13.Enum }, waO0zPV5Z: { optional: true, title: "Google Coordinates", type: ControlType13.String }, onwaO0zPV5ZChange: { changes: "waO0zPV5Z", type: ControlType13.ChangeHandler } });
addFonts6(FramerTUhvHjB8l, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...GoogleMapsFonts2, ...Image1Fonts, ...getFontsFromSharedStyle4(fonts10)], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/PsaQrYTrX5dbw7mpAFrj/IN1k5uMfNUNGECO4SQLa/dDAguFXBt.js
var CMSVisibleItemsCountFonts = getFonts4(sAat8iFw8_default);
var StoreCardFonts = getFonts4(q2LtQikRu_default);
var StorePaginationSpinnerFonts = getFonts4(RHuv4_JXb_default);
var SmartComponentScopedContainerWithInfiniteScroll = withInfiniteScroll(SmartComponentScopedContainer3);
var StoreGoogleMapFonts = getFonts4(TUhvHjB8l_default);
var cycleOrder6 = ["NJMCQhRGL", "Ln01DQKbn", "WVzv7TQ9E"];
var serializationHash7 = "framer-uuz38";
var variantClassNames7 = { Ln01DQKbn: "framer-v-cjc05q", NJMCQhRGL: "framer-v-btmigw", WVzv7TQ9E: "framer-v-k56aym" };
function addPropertyOverrides5(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var CFyGUV2JNnDLKYWWRb = void 0;
var transition17 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var patchBorderRadiusScaleCorrector12 = patchBorderRadiusScaleCorrector2();
var equals = (a3, b2) => {
  return typeof a3 === "string" && typeof b2 === "string" ? a3.toLowerCase() === b2.toLowerCase() : a3 === b2;
};
var convertFromBoolean = (value, activeLocale) => {
  switch (value) {
    case true:
      return "SZZanYjav";
    case false:
      return "TBAcir2H4";
    default:
      return "TBAcir2H4";
  }
};
var matchVariant2 = (...args) => {
  for (const arg of args) {
    if (arg && typeof arg === "string")
      return arg;
  }
  return void 0;
};
var loaderVariants = (repeaterState, variants, currentVariant) => {
  if (repeaterState.currentPage >= repeaterState.totalPages)
    return variants.disabled ?? currentVariant;
  if (repeaterState.isLoading)
    return variants.loading ?? currentVariant;
  return currentVariant;
};
var query1 = (IA43KtXX9) => ({ from: { alias: "RRm6iXUcH", data: nRUBpiZY0_default, type: "Collection" }, limit: { type: "LiteralValue", value: 10 }, select: [{ collection: "RRm6iXUcH", name: "CFyGUV2JN", type: "Identifier" }, { collection: "RRm6iXUcH", name: "dQLMp3Snn", type: "Identifier" }, { collection: "RRm6iXUcH", name: "iHo87M7PO", type: "Identifier" }, { collection: "RRm6iXUcH", name: "T0OpxvaIF", type: "Identifier" }, { collection: "RRm6iXUcH", name: "qHzx1Qnq4", type: "Identifier" }, { collection: "RRm6iXUcH", name: "MS1Ep5QnQ", type: "Identifier" }, { collection: "RRm6iXUcH", name: "id", type: "Identifier" }], where: { left: { left: { type: "LiteralValue", value: IA43KtXX9 }, operator: "==", right: { type: "LiteralValue", value: null }, type: "BinaryOperation" }, operator: "or", right: { arguments: [{ collection: "RRm6iXUcH", name: "iHo87M7PO", type: "Identifier" }, { type: "LiteralValue", value: IA43KtXX9 }], functionName: "CONTAINS", type: "FunctionCall" }, type: "BinaryOperation" } });
var QueryData = ({ query, pageSize, children }) => {
  const { paginatedQuery, paginationInfo, loadMore } = useLoadMorePaginatedQuery(query, pageSize, "RRm6iXUcH");
  const data = __framer_useQueryData(paginatedQuery);
  return children(data, paginationInfo, loadMore);
};
var isSet = (value) => {
  if (Array.isArray(value))
    return value.length > 0;
  return value !== void 0 && value !== null && value !== "";
};
var convertFromBoolean1 = (value, activeLocale) => {
  switch (value) {
    case true:
      return "h_6m_4lGN";
    case false:
      return "o3PwaQ7_V";
    default:
      return "o3PwaQ7_V";
  }
};
var Transition7 = ({ value, children }) => {
  const config = React12.useContext(MotionConfigContext7);
  const transition = value ?? config.transition;
  const contextValue = React12.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx11(MotionConfigContext7.Provider, { value: contextValue, children });
};
var humanReadableVariantMap6 = { Desktop: "NJMCQhRGL", Phone: "WVzv7TQ9E", Tablet: "Ln01DQKbn" };
var Variants7 = motion11.create(React12.Fragment);
var useStateVariable = (externalState, setExternalState) => {
  const [internalState, setInternalState] = React12.useState(externalState);
  const [previousExternalState, setPreviousExternalState] = React12.useState(externalState);
  if (setExternalState) {
    return [externalState, setExternalState];
  }
  if (externalState !== previousExternalState) {
    setInternalState(externalState);
    setPreviousExternalState(externalState);
  }
  return [internalState, setInternalState];
};
var getProps10 = ({ currentCoordinates, height, id, storeName, width, ...props }) => {
  return { ...props, IA43KtXX9: storeName ?? props.IA43KtXX9, TlS_lBfyT: currentCoordinates ?? props.TlS_lBfyT, variant: humanReadableVariantMap6[props.variant] ?? props.variant ?? "NJMCQhRGL" };
};
var createLayoutDependency7 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component10 = /* @__PURE__ */ React12.forwardRef(function(props, ref) {
  const fallbackRef = useRef10(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React12.useId();
  const { activeLocale, setLocale } = useLocaleInfo7();
  const componentViewport = useComponentViewport7();
  const { style, className: className11, layoutId, variant, "IA43KtXX9": externalIA43KtXX9, "onIA43KtXX9Change": setExternalIA43KtXX9, "TlS_lBfyT": externalTlS_lBfyT, "onTlS_lBfyTChange": setExternalTlS_lBfyT, ...restProps } = getProps10(props);
  const [IA43KtXX9, setIA43KtXX9] = useStateVariable(externalIA43KtXX9, setExternalIA43KtXX9);
  const [TlS_lBfyT, setTlS_lBfyT] = useStateVariable(externalTlS_lBfyT, setExternalTlS_lBfyT);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState7({ cycleOrder: cycleOrder6, defaultVariant: "NJMCQhRGL", ref: refBinding, variant, variantClassNames: variantClassNames7 });
  const layoutDependency = createLayoutDependency7(props, variants);
  const { activeVariantCallback, delay } = useActiveVariantCallback2(baseVariant);
  const onTapr5s79p = ({ arg1vwmycx }) => activeVariantCallback(async (...args) => {
    setTlS_lBfyT?.(arg1vwmycx);
  });
  const sharedStyleClassNames = [className];
  const scopingClassNames = cx10(serializationHash7, ...sharedStyleClassNames);
  const router = useRouter();
  const ref1 = React12.useRef(null);
  const isDisplayed = () => {
    if (baseVariant === "WVzv7TQ9E")
      return false;
    return true;
  };
  return /* @__PURE__ */ _jsx11(LayoutGroup7, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx11(Variants7, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx11(Transition7, { value: transition17, children: /* @__PURE__ */ _jsxs5(motion11.main, { ...restProps, ...gestureHandlers, className: cx10(scopingClassNames, "framer-btmigw", className11, classNames), "data-framer-name": "Desktop", layoutDependency, layoutId: "Mainstores__NJMCQhRGL", ref: refBinding, style: { ...style }, ...addPropertyOverrides5({ Ln01DQKbn: { "data-framer-name": "Tablet" }, WVzv7TQ9E: { "data-framer-name": "Phone" } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsx11(motion11.div, { className: "framer-xzvrf6", "data-framer-name": "Store List", layoutDependency, layoutId: "Mainstores__D9gD_41S8", children: /* @__PURE__ */ _jsx11(motion11.div, { className: "framer-gpqaob", layoutDependency, layoutId: "Mainstores__RRm6iXUcH", children: /* @__PURE__ */ _jsx11(ChildrenCanSuspend, { children: /* @__PURE__ */ _jsx11(QueryData, { pageSize: 4, query: query1(IA43KtXX9), children: (collection, paginationInfo, loadMore) => {
    const repeater_item_countRRm6iXUcH = collection?.length ?? 0;
    return /* @__PURE__ */ _jsxs5(_Fragment, { children: [/* @__PURE__ */ _jsxs5(motion11.div, { className: "framer-18gfgp9", "data-framer-name": "Header", layoutDependency, layoutId: "Mainstores__nFqFVFqzc", children: [/* @__PURE__ */ _jsx11(RichText5, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx11(React12.Fragment, { children: /* @__PURE__ */ _jsx11(motion11.h3, { className: "framer-styles-preset-1cs224s", "data-styles-preset": "nV6XvMHlN", dir: "auto", children: "Find stores" }) }), className: "framer-1rc3d2w", fonts: ["Inter"], layoutDependency, layoutId: "Mainstores__gIGpph0G8", style: { "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx11(ComponentViewportProvider3, { height: 21, width: "324px", ...addPropertyOverrides5({ Ln01DQKbn: { width: "244px" }, WVzv7TQ9E: { width: `calc(max(${componentViewport?.width || "100vw"}, 1px) - 56px)` } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx11(SmartComponentScopedContainer3, { className: "framer-26qg9t-container", layoutDependency, layoutId: "Mainstores__Xm6WwNgbX-container", nodeId: "Xm6WwNgbX", rendersWithMotion: true, scopeId: "dDAguFXBt", children: /* @__PURE__ */ _jsx11(sAat8iFw8_default, { BwN_hqFrE: "results", height: "100%", id: "Xm6WwNgbX", layoutId: "Mainstores__Xm6WwNgbX", rGomIo08R: repeater_item_countRRm6iXUcH, style: { width: "100%" }, width: "100%" }) }) })] }), /* @__PURE__ */ _jsx11(motion11.label, { className: "framer-1w3hs3y", layoutDependency, layoutId: "Mainstores__dIHDCxejX", children: /* @__PURE__ */ _jsx11(FormPlainTextInput, { className: "framer-1ih9tir", inputName: "RpPnoVYtr", layoutDependency, layoutId: "Mainstores__RpPnoVYtr", onChange: (event) => setIA43KtXX9(event.target.value || void 0), onClear: () => setIA43KtXX9(void 0), placeholder: "Search\u2026", style: { "--corner-shape-fallback": 0.796, "--framer-input-background": "var(--token-f01462ef-eed7-451f-81c9-11ad0be4b3de, rgb(245, 245, 245))", "--framer-input-border-radius-bottom-left": "calc(11px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(11px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(11px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(11px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.4)", "--framer-input-font-color": "var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, rgb(0, 0, 0))", "--framer-input-icon-color": "rgb(153, 153, 153)", "--framer-input-icon-content": '""', "--framer-input-icon-mask-image": "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 fill=%22none%22><path d=%22M7 2.5a5 5 0 0 1 4.13 7.82l2.03 2.03a.75.75 0 0 1-1.06 1.06l-2-2A5 5 0 1 1 7 2.5Zm-3.5 5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0Z%22 fill=%22%23999%22/></svg>')", "--framer-input-placeholder-color": "var(--token-7d0d6ded-a16b-44b0-b3c5-41032df0ed2d, rgb(148, 148, 148))" }, type: "text", value: IA43KtXX9 ?? "", ...addPropertyOverrides5({ Ln01DQKbn: { inputName: "Ln01DQKbnRpPnoVYtr" }, WVzv7TQ9E: { inputName: "WVzv7TQ9ERpPnoVYtr" } }, baseVariant, gestureVariant) }) }), collection?.map(({ CFyGUV2JN: CFyGUV2JNRRm6iXUcH, dQLMp3Snn: dQLMp3SnnRRm6iXUcH, id: idRRm6iXUcH, iHo87M7PO: iHo87M7PORRm6iXUcH, MS1Ep5QnQ: MS1Ep5QnQRRm6iXUcH, qHzx1Qnq4: qHzx1Qnq4RRm6iXUcH, T0OpxvaIF: T0OpxvaIFRRm6iXUcH }, index) => {
      CFyGUV2JNRRm6iXUcH ?? (CFyGUV2JNRRm6iXUcH = "");
      dQLMp3SnnRRm6iXUcH ?? (dQLMp3SnnRRm6iXUcH = "");
      iHo87M7PORRm6iXUcH ?? (iHo87M7PORRm6iXUcH = "");
      T0OpxvaIFRRm6iXUcH ?? (T0OpxvaIFRRm6iXUcH = "");
      return /* @__PURE__ */ _jsx11(LayoutGroup7, { id: `RRm6iXUcH-${idRRm6iXUcH}`, children: /* @__PURE__ */ _jsx11(PathVariablesContext.Provider, { value: { dQLMp3Snn: dQLMp3SnnRRm6iXUcH }, children: /* @__PURE__ */ _jsx11(motion11.div, { className: "framer-167e78q", "data-highlight": true, layoutDependency, layoutId: "Mainstores__egEbIqP9B", onTap: onTapr5s79p({ arg1vwmycx: CFyGUV2JNRRm6iXUcH }), children: /* @__PURE__ */ _jsx11(ResolveLinks, { links: [{ href: { pathVariables: { dQLMp3Snn: dQLMp3SnnRRm6iXUcH }, webPageId: "hlb0hjsQy" }, implicitPathVariables: void 0 }, { href: { pathVariables: { dQLMp3Snn: dQLMp3SnnRRm6iXUcH }, webPageId: "hlb0hjsQy" }, implicitPathVariables: void 0 }, { href: { pathVariables: { dQLMp3Snn: dQLMp3SnnRRm6iXUcH }, webPageId: "hlb0hjsQy" }, implicitPathVariables: void 0 }], children: (resolvedLinks) => /* @__PURE__ */ _jsx11(ComponentViewportProvider3, { height: 151, width: "324px", ...addPropertyOverrides5({ Ln01DQKbn: { width: "244px" }, WVzv7TQ9E: { width: `max(max(${componentViewport?.width || "100vw"}, 1px) - 56px, 1px)` } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx11(SmartComponentScopedContainer3, { className: "framer-9qbe3x-container", layoutDependency, layoutId: "Mainstores__mSdeXhn1U-container", nodeId: "mSdeXhn1U", rendersWithMotion: true, scopeId: "dDAguFXBt", children: /* @__PURE__ */ _jsx11(q2LtQikRu_default, { a2PH_U_lq: qHzx1Qnq4RRm6iXUcH, FDCqm9z4a: iHo87M7PORRm6iXUcH, Fuurl_OdZ: resolvedLinks[0], height: "100%", id: "mSdeXhn1U", layoutId: "Mainstores__mSdeXhn1U", p4IsTOy6X: MS1Ep5QnQRRm6iXUcH, style: { width: "100%" }, SVp6vluqo: CFyGUV2JNRRm6iXUcH, tYPOqSkzQ: T0OpxvaIFRRm6iXUcH, variant: matchVariant2(convertFromBoolean(equals(TlS_lBfyT, CFyGUV2JNRRm6iXUcH), activeLocale)), width: "100%", ...addPropertyOverrides5({ Ln01DQKbn: { Fuurl_OdZ: resolvedLinks[1] }, WVzv7TQ9E: { Fuurl_OdZ: resolvedLinks[2], SVp6vluqo: CFyGUV2JNnDLKYWWRb, variant: matchVariant2("oF5VsfZwB") } }, baseVariant, gestureVariant) }) }) }) }) }) }) }, idRRm6iXUcH);
    }), /* @__PURE__ */ _jsx11(ComponentViewportProvider3, { height: 20, width: "324px", ...addPropertyOverrides5({ Ln01DQKbn: { width: "244px" }, WVzv7TQ9E: { width: `calc(max(${componentViewport?.width || "100vw"}, 1px) - 56px)` } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx11(SmartComponentScopedContainerWithInfiniteScroll, { __loadMore: loadMore, __paginationInfo: paginationInfo, className: "framer-1lzo4wx-container", layoutDependency, layoutId: "Mainstores__yjHPRcVtm-container", nodeId: "yjHPRcVtm", ref: ref1, rendersWithMotion: true, scopeId: "dDAguFXBt", children: /* @__PURE__ */ _jsx11(RHuv4_JXb_default, { height: "100%", id: "yjHPRcVtm", layoutId: "Mainstores__yjHPRcVtm", style: { width: "100%" }, variant: loaderVariants(paginationInfo, { disabled: "YzeiBTjIT", loading: "B61_BL_iz" }, matchVariant2("B61_BL_iz")), width: "100%" }) }) })] });
  } }) }) }) }), isDisplayed() && /* @__PURE__ */ _jsx11(ComponentViewportProvider3, { height: 800, width: `max(${componentViewport?.width || "100vw"} - 380px, 1px)`, y: (componentViewport?.y || 0) + 0, ...addPropertyOverrides5({ Ln01DQKbn: { width: `max(${componentViewport?.width || "100vw"} - 300px, 1px)` } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx11(SmartComponentScopedContainer3, { className: "framer-kuszop-container", layoutDependency, layoutId: "Mainstores__Y0cKMPnKv-container", nodeId: "Y0cKMPnKv", rendersWithMotion: true, scopeId: "dDAguFXBt", children: /* @__PURE__ */ _jsx11(TUhvHjB8l_default, { height: "100%", id: "Y0cKMPnKv", layoutId: "Mainstores__Y0cKMPnKv", onwaO0zPV5ZChange: setTlS_lBfyT, style: { height: "100%", width: "100%" }, variant: matchVariant2(convertFromBoolean1(isSet(TlS_lBfyT), activeLocale)), waO0zPV5Z: TlS_lBfyT, width: "100%" }) }) })] }) }) }) });
});
var css20 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-uuz38.framer-f1gez7, .framer-uuz38 .framer-f1gez7 { display: block; }", ".framer-uuz38.framer-btmigw { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-uuz38 .framer-xzvrf6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; min-height: calc(var(--framer-viewport-height, 100vh) * 1); overflow: var(--overflow-clip-fallback, clip); padding: 50px 28px 80px 28px; position: relative; width: 380px; }", ".framer-uuz38 .framer-gpqaob { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }", ".framer-uuz38 .framer-18gfgp9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }", ".framer-uuz38 .framer-1rc3d2w { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-uuz38 .framer-26qg9t-container, .framer-uuz38 .framer-1lzo4wx-container { flex: none; height: auto; position: relative; width: 100%; }", ".framer-uuz38 .framer-1w3hs3y { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }", '.framer-uuz38 .framer-1ih9tir { --framer-input-focused-box-shadow: 0px 0px 0px 2px var(--token-434336aa-a6fe-4798-9765-0e50c6ce5ef4, #007bff); --framer-input-focused-transition: all 0.2s cubic-bezier(0.44,0,0.56,1) 0s; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-padding: 9px; --framer-input-wrapper-height: auto; flex: none; height: auto; position: relative; width: 100%; }', ".framer-uuz38 .framer-167e78q { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }", ".framer-uuz38 .framer-9qbe3x-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }", ".framer-uuz38 .framer-kuszop-container { flex: 1 0 0px; height: 100vh; position: sticky; top: 0px; width: 1px; z-index: 1; }", ".framer-uuz38.framer-v-cjc05q.framer-btmigw { width: 100%; }", ".framer-uuz38.framer-v-cjc05q .framer-xzvrf6 { width: 300px; }", ".framer-uuz38.framer-v-k56aym.framer-btmigw { width: 100%; }", ".framer-uuz38.framer-v-k56aym .framer-xzvrf6 { flex: 1 0 0px; padding: 100px 28px 80px 28px; width: 1px; }", ...css];
var FramerdDAguFXBt = withCSS10(Component10, css20, "framer-uuz38");
var dDAguFXBt_default = FramerdDAguFXBt;
FramerdDAguFXBt.displayName = "Main stores";
FramerdDAguFXBt.defaultProps = { height: 980, width: 1200 };
addPropertyControls11(FramerdDAguFXBt, { variant: { options: ["NJMCQhRGL", "Ln01DQKbn", "WVzv7TQ9E"], optionTitles: ["Desktop", "Tablet", "Phone"], title: "Variant", type: ControlType14.Enum }, IA43KtXX9: { optional: true, title: "Store Name", type: ControlType14.String }, onIA43KtXX9Change: { changes: "IA43KtXX9", type: ControlType14.ChangeHandler }, TlS_lBfyT: { optional: true, title: "Current Coordinates", type: ControlType14.String }, onTlS_lBfyTChange: { changes: "TlS_lBfyT", type: ControlType14.ChangeHandler } });
addFonts7(FramerdDAguFXBt, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...CMSVisibleItemsCountFonts, ...StoreCardFonts, ...StorePaginationSpinnerFonts, ...StoreGoogleMapFonts, ...getFontsFromSharedStyle5(fonts)], { supportsExplicitInterCodegen: true });
FramerdDAguFXBt.loader = { load: (props, context) => {
  const locale = context.locale;
  return Promise.allSettled([forwardLoader2(TUhvHjB8l_default, {}, context)]);
} };
var __FramerMetadata__ = { "exports": { "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "default": { "type": "reactComponent", "name": "FramerdDAguFXBt", "slots": [], "annotations": { "framerImmutableVariables": "true", "framerAutoSizeImages": "true", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"Ln01DQKbn":{"layout":["fixed","auto"]},"WVzv7TQ9E":{"layout":["fixed","auto"]}}}', "framerVariables": '{"IA43KtXX9":"storeName","TlS_lBfyT":"currentCoordinates"}', "framerIntrinsicHeight": "980", "framerDisplayContentsDiv": "false", "framerContractVersion": "1", "framerColorSyntax": "true", "framerIntrinsicWidth": "1200", "framerComponentViewportWidth": "true" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  dDAguFXBt_default as default
};
