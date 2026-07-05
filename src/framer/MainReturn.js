
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

// http-url:https://framerusercontent.com/modules/y8uVpBUF8Wbf67WPqhSr/tG3umAf8IphE4SPRF3M2/SwbrOoXuy.js
import { jsx as _jsx5, jsxs as _jsxs2, Fragment as _Fragment } from "react/jsx-runtime";
import { addFonts as addFonts3, addPropertyControls as addPropertyControls4, ChildrenCanSuspend, ComponentViewportProvider, ControlType as ControlType4, cx as cx5, forwardLoader, getFonts, getFontsFromSharedStyle as getFontsFromSharedStyle2, getLoadingLazyAtYPosition, Image as Image1, patchBorderRadiusScaleCorrector, PathVariablesContext, queryCache, ResolveLinks, RichText as RichText2, SmartComponentScopedContainer, useComponentViewport as useComponentViewport3, useLocaleInfo as useLocaleInfo3, useQueryData, useRouter, useVariantState as useVariantState3, withCSS as withCSS5, withFX, withOptimizedAppearEffect, withVariantAppearEffect } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup3, motion as motion5, MotionConfigContext as MotionConfigContext3 } from "framer-motion";
import * as React5 from "react";
import { useRef as useRef3 } from "react";

// http-url:https://framerusercontent.com/modules/krzINDtI9JxSyGULB8rI/WfkDIhFZdQHZHc5f4vl2/QOgS8yO19.js
import { addPropertyControls as e5, ControlType as t4, QueryEngine as l3 } from "./_framer-runtime.js";

// http-url:https://framerusercontent.com/modules/krzINDtI9JxSyGULB8rI/WfkDIhFZdQHZHc5f4vl2/QOgS8yO19-0.js
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

// http-url:https://framerusercontent.com/modules/krzINDtI9JxSyGULB8rI/WfkDIhFZdQHZHc5f4vl2/QOgS8yO19-1.js
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

// http-url:https://framerusercontent.com/modules/krzINDtI9JxSyGULB8rI/WfkDIhFZdQHZHc5f4vl2/QOgS8yO19.js
var m3 = { cGT5udmtH: { isNullable: true, type: t4.RichText }, createdAt: { isNullable: true, type: t4.Date }, hWqyOEP_3: { isNullable: true, type: t4.String }, id: { isNullable: false, type: t4.String }, nextItemId: { isNullable: true, type: t4.String }, previousItemId: { isNullable: true, type: t4.String }, updatedAt: { isNullable: true, type: t4.Date }, uQ2JvQyPw: { isNullable: true, type: t4.String }, wilSgI4j3: { isNullable: true, type: t4.Enum } };
var o3 = ["id"];
var n3 = { type: 1 };
var u3 = ["previousItemId"];
var c3 = ["nextItemId"];
var d3 = ["id", "uQ2JvQyPw"];
var s3 = ["uQ2JvQyPw", "id"];
var p3 = ["wilSgI4j3"];
var f3 = { type: 0 };
var y2 = ["hWqyOEP_3"];
var g3 = ["uQ2JvQyPw"];
var w2 = ["cGT5udmtH"];
var S2 = [];
var h2 = (e6) => {
  let t5 = S2[e6];
  if (t5)
    return t5().then((e7) => e7.default);
};
var O2 = {};
var Q2 = g2(O2);
var I2 = new l3();
var N2 = { collectionByLocaleId: { default: new tP({ chunks: ["https://framerusercontent.com/modules/krzINDtI9JxSyGULB8rI/WfkDIhFZdQHZHc5f4vl2/QOgS8yO19-chunk-default-0.framercms"], id: "c5a36916-064d-4091-8bb6-94bfc129f317default", indexes: [new tN({ collation: n3, collectionSchema: m3, fieldNames: o3, range: { from: 0, to: 1105 }, url: "https://framerusercontent.com/modules/krzINDtI9JxSyGULB8rI/WfkDIhFZdQHZHc5f4vl2/QOgS8yO19-indexes-default-0.framercms" }), new tN({ collation: n3, collectionSchema: m3, fieldNames: u3, range: { from: 1105, to: 2209 }, url: "https://framerusercontent.com/modules/krzINDtI9JxSyGULB8rI/WfkDIhFZdQHZHc5f4vl2/QOgS8yO19-indexes-default-0.framercms" }), new tN({ collation: n3, collectionSchema: m3, fieldNames: c3, range: { from: 2209, to: 3309 }, url: "https://framerusercontent.com/modules/krzINDtI9JxSyGULB8rI/WfkDIhFZdQHZHc5f4vl2/QOgS8yO19-indexes-default-0.framercms" }), new tN({ collation: n3, collectionSchema: m3, fieldNames: d3, range: { from: 3309, to: 5449 }, url: "https://framerusercontent.com/modules/krzINDtI9JxSyGULB8rI/WfkDIhFZdQHZHc5f4vl2/QOgS8yO19-indexes-default-0.framercms" }), new tN({ collation: n3, collectionSchema: m3, fieldNames: s3, range: { from: 5449, to: 7589 }, url: "https://framerusercontent.com/modules/krzINDtI9JxSyGULB8rI/WfkDIhFZdQHZHc5f4vl2/QOgS8yO19-indexes-default-0.framercms" }), new tN({ collation: f3, collectionSchema: m3, fieldNames: p3, range: { from: 7589, to: 8701 }, url: "https://framerusercontent.com/modules/krzINDtI9JxSyGULB8rI/WfkDIhFZdQHZHc5f4vl2/QOgS8yO19-indexes-default-0.framercms" }), new tN({ collation: f3, collectionSchema: m3, fieldNames: y2, range: { from: 8701, to: 10186 }, url: "https://framerusercontent.com/modules/krzINDtI9JxSyGULB8rI/WfkDIhFZdQHZHc5f4vl2/QOgS8yO19-indexes-default-0.framercms" }), new tN({ collation: f3, collectionSchema: m3, fieldNames: g3, range: { from: 10186, to: 11690 }, url: "https://framerusercontent.com/modules/krzINDtI9JxSyGULB8rI/WfkDIhFZdQHZHc5f4vl2/QOgS8yO19-indexes-default-0.framercms" }), new tN({ collation: f3, collectionSchema: m3, fieldNames: w2, range: { from: 11690, to: 36331 }, url: "https://framerusercontent.com/modules/krzINDtI9JxSyGULB8rI/WfkDIhFZdQHZHc5f4vl2/QOgS8yO19-indexes-default-0.framercms" })], resolveRichText: Q2, resolveVectorSetItem: h2, schema: m3 }) }, displayName: "Business", id: "c5a36916-064d-4091-8bb6-94bfc129f317" };
var QOgS8yO19_default = N2;
e5(N2, { wilSgI4j3: { defaultValue: "rAskz1xe9", options: ["rAskz1xe9", "XdmpgBQwB", "Z0cX6KWha", "NCj5IlbaW"], optionTitles: ["Privacy", "Terms", "Shipping", "Returns"], title: "Document Type", type: t4.Enum }, hWqyOEP_3: { defaultValue: "", title: "Title", type: t4.String }, uQ2JvQyPw: { preventLocalization: true, title: "Slug", type: t4.String }, cGT5udmtH: { defaultValue: "", title: "Content", type: t4.RichText }, createdAt: { title: "Created", type: t4.Date }, updatedAt: { title: "Updated", type: t4.Date }, previousItemId: { dataIdentifier: "local-module:collection/QOgS8yO19:default", title: "Previous", type: t4.CollectionReference }, nextItemId: { dataIdentifier: "local-module:collection/QOgS8yO19:default", title: "Next", type: t4.CollectionReference } });

// http-url:https://framerusercontent.com/modules/7fD7o2yl2ikIKpE0Z3qs/cvFG7h3quPS8ykPhV2yx/amNEcipQY.js
import { fontStore } from "./_framer-runtime.js";
fontStore.loadFonts(["Inter-Variable", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNDI1", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNDI1", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNDI1"]);
var variationAxes = [{ defaultValue: 14, maxValue: 32, minValue: 14, name: "Optical size", tag: "opsz" }, { defaultValue: 400, maxValue: 900, minValue: 100, name: "Weight", tag: "wght" }];
var fonts = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/mYcqTSergLb16PdbJJQMl9ebYm4.woff2", variationAxes, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2", variationAxes, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2", variationAxes, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/DYHjxG0qXjopUuruoacfl5SA.woff2", variationAxes, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2", variationAxes, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2", variationAxes, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2", variationAxes, weight: "400" }] }];
var css = ['.framer-cc5NC .framer-styles-preset-9tj2n0:not(.rich-text-wrapper), .framer-cc5NC .framer-styles-preset-9tj2n0.rich-text-wrapper p { --framer-font-family: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "opsz" 14, "wght" 425; --framer-font-variation-axes-bold: "opsz" 14, "wght" 425; --framer-font-variation-axes-bold-italic: "opsz" 14, "wght" 425; --framer-font-variation-axes-italic: "opsz" 14, "wght" 425; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }'];
var className = "framer-cc5NC";

// http-url:https://framerusercontent.com/modules/pViJj926CBy444h3AYfq/yXDe2VVQ9pDsXbJlmrXJ/CT_DBbR5R.js
import { fontStore as fontStore2 } from "./_framer-runtime.js";
fontStore2.loadFonts(["Inter-Variable", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNTUw", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNTUw", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNTUw"]);
var variationAxes2 = [{ defaultValue: 14, maxValue: 32, minValue: 14, name: "Optical size", tag: "opsz" }, { defaultValue: 400, maxValue: 900, minValue: 100, name: "Weight", tag: "wght" }];
var fonts2 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/mYcqTSergLb16PdbJJQMl9ebYm4.woff2", variationAxes: variationAxes2, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2", variationAxes: variationAxes2, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2", variationAxes: variationAxes2, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/DYHjxG0qXjopUuruoacfl5SA.woff2", variationAxes: variationAxes2, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2", variationAxes: variationAxes2, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2", variationAxes: variationAxes2, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2", variationAxes: variationAxes2, weight: "400" }] }];
var css2 = ['.framer-fQ51O .framer-styles-preset-5rfdkx:not(.rich-text-wrapper), .framer-fQ51O .framer-styles-preset-5rfdkx.rich-text-wrapper p { --framer-font-family: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "opsz" 14, "wght" 550; --framer-font-variation-axes-bold: "opsz" 14, "wght" 550; --framer-font-variation-axes-bold-italic: "opsz" 14, "wght" 550; --framer-font-variation-axes-italic: "opsz" 14, "wght" 550; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }'];
var className2 = "framer-fQ51O";

// http-url:https://framerusercontent.com/modules/TQJ6tAwQbMoidEOgWcCs/6OaT2cgYRyhz8zHaq9WZ/cxfU_vRgl.js
import { fontStore as fontStore3 } from "./_framer-runtime.js";
fontStore3.loadFonts(["Inter-Variable", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNjI1", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNjI1", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNjI1"]);
var variationAxes3 = [{ defaultValue: 14, maxValue: 32, minValue: 14, name: "Optical size", tag: "opsz" }, { defaultValue: 400, maxValue: 900, minValue: 100, name: "Weight", tag: "wght" }];
var fonts3 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/mYcqTSergLb16PdbJJQMl9ebYm4.woff2", variationAxes: variationAxes3, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2", variationAxes: variationAxes3, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2", variationAxes: variationAxes3, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/DYHjxG0qXjopUuruoacfl5SA.woff2", variationAxes: variationAxes3, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2", variationAxes: variationAxes3, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2", variationAxes: variationAxes3, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2", variationAxes: variationAxes3, weight: "400" }] }];
var css3 = ['.framer-4RHim .framer-styles-preset-1ll98pl:not(.rich-text-wrapper), .framer-4RHim .framer-styles-preset-1ll98pl.rich-text-wrapper h2 { --framer-font-family: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 52px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "opsz" 14, "wght" 625; --framer-font-variation-axes-bold: "opsz" 14, "wght" 625; --framer-font-variation-axes-bold-italic: "opsz" 14, "wght" 625; --framer-font-variation-axes-italic: "opsz" 14, "wght" 625; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.05em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }', '@media (max-width: 1199px) and (min-width: 810px) { .framer-4RHim .framer-styles-preset-1ll98pl:not(.rich-text-wrapper), .framer-4RHim .framer-styles-preset-1ll98pl.rich-text-wrapper h2 { --framer-font-family: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 48px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "opsz" 14, "wght" 625; --framer-font-variation-axes-bold: "opsz" 14, "wght" 625; --framer-font-variation-axes-bold-italic: "opsz" 14, "wght" 625; --framer-font-variation-axes-italic: "opsz" 14, "wght" 625; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.05em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }', '@media (max-width: 809px) and (min-width: 0px) { .framer-4RHim .framer-styles-preset-1ll98pl:not(.rich-text-wrapper), .framer-4RHim .framer-styles-preset-1ll98pl.rich-text-wrapper h2 { --framer-font-family: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 36px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "opsz" 14, "wght" 625; --framer-font-variation-axes-bold: "opsz" 14, "wght" 625; --framer-font-variation-axes-bold-italic: "opsz" 14, "wght" 625; --framer-font-variation-axes-italic: "opsz" 14, "wght" 625; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.05em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }'];
var className3 = "framer-4RHim";

// http-url:https://framerusercontent.com/modules/5agbL2cxKr72OaHc8zyD/B8b1YjEnIzy2XMgfJmlz/DAYH3uYfF.js
import { fontStore as fontStore4 } from "./_framer-runtime.js";
fontStore4.loadFonts([]);
var fonts4 = [{ explicitInter: true, fonts: [] }];
var css4 = [".framer-904uj .framer-styles-preset-176fugv:not(.rich-text-wrapper), .framer-904uj .framer-styles-preset-176fugv.rich-text-wrapper table { --corner-shape-fallback: 0.796; border-bottom-left-radius: calc(19px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-bottom-right-radius: calc(19px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-color: var(--token-914b1e49-c6dc-49fc-93ac-369519474e4f, #e3e3e3); border-style: solid; border-top-left-radius: calc(19px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-top-right-radius: calc(19px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-width: 1px; corner-shape: superellipse(1.4); overflow: hidden; }", ".framer-904uj .framer-styles-preset-176fugv:not(.rich-text-wrapper) th, .framer-904uj .framer-styles-preset-176fugv.rich-text-wrapper table th, .framer-904uj .framer-styles-preset-176fugv:not(.rich-text-wrapper) td, .framer-904uj .framer-styles-preset-176fugv.rich-text-wrapper table td { padding: 15px; }", ".framer-904uj .framer-styles-preset-176fugv:not(.rich-text-wrapper) th, .framer-904uj .framer-styles-preset-176fugv.rich-text-wrapper table th { background-color: var(--token-f01462ef-eed7-451f-81c9-11ad0be4b3de, #f5f5f5); }", ".framer-904uj .framer-styles-preset-176fugv:not(.rich-text-wrapper) tr + tr td, .framer-904uj .framer-styles-preset-176fugv:not(.rich-text-wrapper) tr + tr th, .framer-904uj .framer-styles-preset-176fugv.rich-text-wrapper table tr + tr td, .framer-904uj .framer-styles-preset-176fugv.rich-text-wrapper table tr + tr th { border-top-color: var(--token-914b1e49-c6dc-49fc-93ac-369519474e4f, #e3e3e3); border-top-style: solid; border-top-width: 1px; }", ".framer-904uj .framer-styles-preset-176fugv:not(.rich-text-wrapper) td + td, .framer-904uj .framer-styles-preset-176fugv:not(.rich-text-wrapper) th + th, .framer-904uj .framer-styles-preset-176fugv:not(.rich-text-wrapper) td + th, .framer-904uj .framer-styles-preset-176fugv:not(.rich-text-wrapper) th + td, .framer-904uj .framer-styles-preset-176fugv.rich-text-wrapper table td + td, .framer-904uj .framer-styles-preset-176fugv.rich-text-wrapper table th + th, .framer-904uj .framer-styles-preset-176fugv.rich-text-wrapper table td + th, .framer-904uj .framer-styles-preset-176fugv.rich-text-wrapper table th + td {  }"];
var className4 = "framer-904uj";

// http-url:https://framerusercontent.com/modules/Hxcy0y1QLtQakc6CmrKc/xZrFVP8wtnN7q4Vxfc9I/hcX8gSJpR.js
import { fontStore as fontStore5 } from "./_framer-runtime.js";
fontStore5.loadFonts(["Inter-Variable", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNjI1", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNjI1", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNjI1"]);
var variationAxes4 = [{ defaultValue: 14, maxValue: 32, minValue: 14, name: "Optical size", tag: "opsz" }, { defaultValue: 400, maxValue: 900, minValue: 100, name: "Weight", tag: "wght" }];
var fonts5 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/mYcqTSergLb16PdbJJQMl9ebYm4.woff2", variationAxes: variationAxes4, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2", variationAxes: variationAxes4, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2", variationAxes: variationAxes4, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/DYHjxG0qXjopUuruoacfl5SA.woff2", variationAxes: variationAxes4, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2", variationAxes: variationAxes4, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2", variationAxes: variationAxes4, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2", variationAxes: variationAxes4, weight: "400" }] }];
var css5 = [`.framer-odkQo .framer-styles-preset-1mts5yh:not(.rich-text-wrapper), .framer-odkQo .framer-styles-preset-1mts5yh.rich-text-wrapper h6 { --framer-font-family: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "opsz" 14, "wght" 625; --framer-font-variation-axes-bold: "opsz" 14, "wght" 625; --framer-font-variation-axes-bold-italic: "opsz" 14, "wght" 625; --framer-font-variation-axes-italic: "opsz" 14, "wght" 625; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 15px; --framer-text-alignment: start; --framer-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`];
var className5 = "framer-odkQo";

// http-url:https://framerusercontent.com/modules/93UYi9sqjUKx02jq6pVg/u28S9ozPSyWRKz05IUo0/oESEGjQit.js
import { fontStore as fontStore6 } from "./_framer-runtime.js";
fontStore6.loadFonts(["Inter-Variable", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNTI1", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNTI1", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNTI1"]);
var variationAxes5 = [{ defaultValue: 14, maxValue: 32, minValue: 14, name: "Optical size", tag: "opsz" }, { defaultValue: 400, maxValue: 900, minValue: 100, name: "Weight", tag: "wght" }];
var fonts6 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/mYcqTSergLb16PdbJJQMl9ebYm4.woff2", variationAxes: variationAxes5, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2", variationAxes: variationAxes5, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2", variationAxes: variationAxes5, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/DYHjxG0qXjopUuruoacfl5SA.woff2", variationAxes: variationAxes5, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2", variationAxes: variationAxes5, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2", variationAxes: variationAxes5, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2", variationAxes: variationAxes5, weight: "400" }] }];
var css6 = ['.framer-nZzIb .framer-styles-preset-kx3c0q:not(.rich-text-wrapper), .framer-nZzIb .framer-styles-preset-kx3c0q.rich-text-wrapper h4 { --framer-font-family: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 26px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "opsz" 14, "wght" 525; --framer-font-variation-axes-bold: "opsz" 14, "wght" 525; --framer-font-variation-axes-bold-italic: "opsz" 14, "wght" 525; --framer-font-variation-axes-italic: "opsz" 14, "wght" 525; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.05em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }', '@media (max-width: 1199px) and (min-width: 810px) { .framer-nZzIb .framer-styles-preset-kx3c0q:not(.rich-text-wrapper), .framer-nZzIb .framer-styles-preset-kx3c0q.rich-text-wrapper h4 { --framer-font-family: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "opsz" 14, "wght" 525; --framer-font-variation-axes-bold: "opsz" 14, "wght" 525; --framer-font-variation-axes-bold-italic: "opsz" 14, "wght" 525; --framer-font-variation-axes-italic: "opsz" 14, "wght" 525; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.05em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }', '@media (max-width: 809px) and (min-width: 0px) { .framer-nZzIb .framer-styles-preset-kx3c0q:not(.rich-text-wrapper), .framer-nZzIb .framer-styles-preset-kx3c0q.rich-text-wrapper h4 { --framer-font-family: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "opsz" 14, "wght" 525; --framer-font-variation-axes-bold: "opsz" 14, "wght" 525; --framer-font-variation-axes-bold-italic: "opsz" 14, "wght" 525; --framer-font-variation-axes-italic: "opsz" 14, "wght" 525; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.05em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }'];
var className6 = "framer-nZzIb";

// http-url:https://framerusercontent.com/modules/XSg6hjAyhLe0ncrTlAkA/dILEgbL8rCgZcOG9r7yc/pN_gL4Xds.js
import { fontStore as fontStore7 } from "./_framer-runtime.js";
fontStore7.loadFonts(["Inter-Variable", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNjI1", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNjI1", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNjI1"]);
var variationAxes6 = [{ defaultValue: 14, maxValue: 32, minValue: 14, name: "Optical size", tag: "opsz" }, { defaultValue: 400, maxValue: 900, minValue: 100, name: "Weight", tag: "wght" }];
var fonts7 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/mYcqTSergLb16PdbJJQMl9ebYm4.woff2", variationAxes: variationAxes6, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2", variationAxes: variationAxes6, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2", variationAxes: variationAxes6, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/DYHjxG0qXjopUuruoacfl5SA.woff2", variationAxes: variationAxes6, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2", variationAxes: variationAxes6, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2", variationAxes: variationAxes6, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2", variationAxes: variationAxes6, weight: "400" }] }];
var css7 = ['.framer-t3DkE .framer-styles-preset-19ynewv:not(.rich-text-wrapper), .framer-t3DkE .framer-styles-preset-19ynewv.rich-text-wrapper h4 { --framer-font-family: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 26px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "opsz" 14, "wght" 625; --framer-font-variation-axes-bold: "opsz" 14, "wght" 625; --framer-font-variation-axes-bold-italic: "opsz" 14, "wght" 625; --framer-font-variation-axes-italic: "opsz" 14, "wght" 625; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.05em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }', '@media (max-width: 1199px) and (min-width: 810px) { .framer-t3DkE .framer-styles-preset-19ynewv:not(.rich-text-wrapper), .framer-t3DkE .framer-styles-preset-19ynewv.rich-text-wrapper h4 { --framer-font-family: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "opsz" 14, "wght" 625; --framer-font-variation-axes-bold: "opsz" 14, "wght" 625; --framer-font-variation-axes-bold-italic: "opsz" 14, "wght" 625; --framer-font-variation-axes-italic: "opsz" 14, "wght" 625; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.05em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }', '@media (max-width: 809px) and (min-width: 0px) { .framer-t3DkE .framer-styles-preset-19ynewv:not(.rich-text-wrapper), .framer-t3DkE .framer-styles-preset-19ynewv.rich-text-wrapper h4 { --framer-font-family: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "opsz" 14, "wght" 625; --framer-font-variation-axes-bold: "opsz" 14, "wght" 625; --framer-font-variation-axes-bold-italic: "opsz" 14, "wght" 625; --framer-font-variation-axes-italic: "opsz" 14, "wght" 625; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.05em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }'];
var className7 = "framer-t3DkE";

// http-url:https://framerusercontent.com/modules/JLSdMdw3IEXRji0TMuUs/8L6w2VIxzdCvIF8UKkP1/QawiXOoTj.js
import { fontStore as fontStore8 } from "./_framer-runtime.js";
fontStore8.loadFonts([]);
var fonts8 = [{ explicitInter: true, fonts: [] }];
var css8 = [".framer-LV2Ws .framer-styles-preset-1eqj9u:not(.rich-text-wrapper), .framer-LV2Ws .framer-styles-preset-1eqj9u.rich-text-wrapper a { --framer-link-current-text-color: var(--token-6d07e840-0908-44af-b7b3-055ece1d0a4b, #292929); --framer-link-hover-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-link-text-color: var(--token-bbe0c2aa-5207-4997-b514-2bd605315d76, #424242); }"];
var className8 = "framer-LV2Ws";

// http-url:https://framerusercontent.com/modules/vQQZ1X68vh7wRZPhJipa/lPj1g7YpWs9MApdFK9Xe/RFw1qTA_c.js
import { fontStore as fontStore9 } from "./_framer-runtime.js";
fontStore9.loadFonts(["Inter-Variable", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNDc1", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNDc1", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNDc1"]);
var variationAxes7 = [{ defaultValue: 14, maxValue: 32, minValue: 14, name: "Optical size", tag: "opsz" }, { defaultValue: 400, maxValue: 900, minValue: 100, name: "Weight", tag: "wght" }];
var fonts9 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/mYcqTSergLb16PdbJJQMl9ebYm4.woff2", variationAxes: variationAxes7, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2", variationAxes: variationAxes7, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2", variationAxes: variationAxes7, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/DYHjxG0qXjopUuruoacfl5SA.woff2", variationAxes: variationAxes7, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2", variationAxes: variationAxes7, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2", variationAxes: variationAxes7, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2", variationAxes: variationAxes7, weight: "400" }] }];
var css9 = ['.framer-DET16 .framer-styles-preset-1ozkt1o:not(.rich-text-wrapper), .framer-DET16 .framer-styles-preset-1ozkt1o.rich-text-wrapper p { --framer-font-family: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "opsz" 14, "wght" 475; --framer-font-variation-axes-bold: "opsz" 14, "wght" 475; --framer-font-variation-axes-bold-italic: "opsz" 14, "wght" 475; --framer-font-variation-axes-italic: "opsz" 14, "wght" 475; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 10px; --framer-text-alignment: left; --framer-text-color: var(--token-bbe0c2aa-5207-4997-b514-2bd605315d76, #424242); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }'];
var className9 = "framer-DET16";

// http-url:https://framerusercontent.com/modules/LAsYFcfgCfLCeC4neoat/RobgVz10gUfJAP51tGmm/RoRGeZoiF.js
import { fontStore as fontStore10 } from "./_framer-runtime.js";
fontStore10.loadFonts(["GF;Ranchers-regular"]);
var fonts10 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Ranchers", source: "google", style: "normal", uiFamilyName: "Ranchers", url: "https://fonts.gstatic.com/s/ranchers/v19/zrfm0H3Lx-P2Xvs2AoDdDC79XTHv.woff2", weight: "400" }] }];
var css10 = ['.framer-aSX0A .framer-styles-preset-tsnpik:not(.rich-text-wrapper), .framer-aSX0A .framer-styles-preset-tsnpik.rich-text-wrapper h2 { --framer-font-family: "Ranchers", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 120px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: -0.01em; --framer-line-height: 1em; --framer-paragraph-spacing: 10px; --framer-text-alignment: center; --framer-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }', '@media (max-width: 1199px) and (min-width: 810px) { .framer-aSX0A .framer-styles-preset-tsnpik:not(.rich-text-wrapper), .framer-aSX0A .framer-styles-preset-tsnpik.rich-text-wrapper h2 { --framer-font-family: "Ranchers", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 110px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: -0.01em; --framer-line-height: 1em; --framer-paragraph-spacing: 10px; --framer-text-alignment: center; --framer-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }', '@media (max-width: 809px) and (min-width: 0px) { .framer-aSX0A .framer-styles-preset-tsnpik:not(.rich-text-wrapper), .framer-aSX0A .framer-styles-preset-tsnpik.rich-text-wrapper h2 { --framer-font-family: "Ranchers", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 70px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: -0.01em; --framer-line-height: 1em; --framer-paragraph-spacing: 10px; --framer-text-alignment: center; --framer-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }'];
var className10 = "framer-aSX0A";

// http-url:https://framerusercontent.com/modules/ek3QnXwrIcyhfTXhlK9h/8jgcJi4O7ng8F71wpQo5/tdkiMToHV.js
import { fontStore as fontStore11 } from "./_framer-runtime.js";
fontStore11.loadFonts(["GF;Ranchers-regular"]);
var fonts11 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Ranchers", source: "google", style: "normal", uiFamilyName: "Ranchers", url: "https://fonts.gstatic.com/s/ranchers/v19/zrfm0H3Lx-P2Xvs2AoDdDC79XTHv.woff2", weight: "400" }] }];
var css11 = ['.framer-rmOM9 .framer-styles-preset-rzow5z:not(.rich-text-wrapper), .framer-rmOM9 .framer-styles-preset-rzow5z.rich-text-wrapper h3 { --framer-font-family: "Ranchers", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 48px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: -0.01em; --framer-line-height: 1em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: inherit; }'];
var className11 = "framer-rmOM9";

// http-url:https://framerusercontent.com/modules/AfCaMmRn8u7qaCxd9l7b/a1AGSwGt3WRsdOZIFkvs/tzSCYd6Qc.js
import { fontStore as fontStore12 } from "./_framer-runtime.js";
fontStore12.loadFonts(["Inter-Variable", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNjI1", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNjI1", "Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNjI1"]);
var variationAxes8 = [{ defaultValue: 14, maxValue: 32, minValue: 14, name: "Optical size", tag: "opsz" }, { defaultValue: 400, maxValue: 900, minValue: 100, name: "Weight", tag: "wght" }];
var fonts12 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/mYcqTSergLb16PdbJJQMl9ebYm4.woff2", variationAxes: variationAxes8, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2", variationAxes: variationAxes8, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2", variationAxes: variationAxes8, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/DYHjxG0qXjopUuruoacfl5SA.woff2", variationAxes: variationAxes8, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2", variationAxes: variationAxes8, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2", variationAxes: variationAxes8, weight: "400" }, { cssFamilyName: "Inter Variable", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2", variationAxes: variationAxes8, weight: "400" }] }];
var css12 = ['.framer-6EjDN .framer-styles-preset-1lkvzko:not(.rich-text-wrapper), .framer-6EjDN .framer-styles-preset-1lkvzko.rich-text-wrapper h5 { --framer-font-family: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 22px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "opsz" 14, "wght" 625; --framer-font-variation-axes-bold: "opsz" 14, "wght" 625; --framer-font-variation-axes-bold-italic: "opsz" 14, "wght" 625; --framer-font-variation-axes-italic: "opsz" 14, "wght" 625; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.04em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }'];
var className12 = "framer-6EjDN";

// http-url:https://framerusercontent.com/modules/5KA73QmVdbAb9YF0Xmuy/2EX0XCQtWmk1DKoPWI9m/X4l3QYsOx.js
import { fontStore as fontStore13 } from "./_framer-runtime.js";
fontStore13.loadFonts(["GF;Ranchers-regular"]);
var fonts13 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Ranchers", source: "google", style: "normal", uiFamilyName: "Ranchers", url: "https://fonts.gstatic.com/s/ranchers/v19/zrfm0H3Lx-P2Xvs2AoDdDC79XTHv.woff2", weight: "400" }] }];
var css13 = ['.framer-F1CzE .framer-styles-preset-1r5o7uy:not(.rich-text-wrapper), .framer-F1CzE .framer-styles-preset-1r5o7uy.rich-text-wrapper h1 { --framer-font-family: "Ranchers", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 220px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }', '@media (max-width: 1199px) and (min-width: 810px) { .framer-F1CzE .framer-styles-preset-1r5o7uy:not(.rich-text-wrapper), .framer-F1CzE .framer-styles-preset-1r5o7uy.rich-text-wrapper h1 { --framer-font-family: "Ranchers", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 200px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }', '@media (max-width: 809px) and (min-width: 0px) { .framer-F1CzE .framer-styles-preset-1r5o7uy:not(.rich-text-wrapper), .framer-F1CzE .framer-styles-preset-1r5o7uy.rich-text-wrapper h1 { --framer-font-family: "Ranchers", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 80px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }'];
var className13 = "framer-F1CzE";

// http-url:https://framerusercontent.com/modules/3CbRyBziBzBaGFOrDjFm/v7VAWuazJMTdCVErDC3h/alWRNtbeL.js
import { jsx as _jsx } from "react/jsx-runtime";
import { cx, motion, withCSS } from "./_framer-runtime.js";
import * as React from "react";
import { forwardRef as forwardRef2 } from "react";
var mask = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 17.088 0.03 C 12.278 0.03 7.612 0.025 2.946 0.033 C 0.097 0.037 -0.735 1.434 0.666 3.872 C 3.803 9.334 6.98 14.774 10.079 20.258 C 11.054 21.985 12.502 22.621 14.365 22.627 C 18.02 22.64 21.681 22.54 25.33 22.694 C 33.125 23.025 39.101 26.649 43.151 33.25 C 46.832 39.248 51.907 43.181 58.87 44.375 C 68.544 46.035 77.417 41.82 82.343 33.333 C 88.064 23.476 93.734 13.591 99.42 3.714 C 100.684 1.517 99.84 0.044 97.299 0.038 C 90.949 0.022 84.6 0.052 78.251 0.02 C 76.376 0.01 75.051 0.763 74.12 2.383 C 68.944 11.388 63.746 20.379 58.556 29.375 C 58.46 29.542 58.378 29.717 58.281 29.883 C 57.057 31.979 55.781 32.011 54.576 29.939 C 52.4 26.198 50.296 22.415 48.08 18.698 C 46.013 15.233 44.344 11.517 41.787 8.36 C 37.443 2.995 31.736 0.304 24.88 0.047 C 22.334 -0.048 19.781 0.031 17.088 0.03 Z M 31.464 77.128 C 34.957 71.082 38.387 65.122 41.841 59.175 C 43.006 57.17 44.255 57.201 45.432 59.234 C 49.046 65.477 52.594 71.759 56.276 77.961 C 60.576 85.203 67.069 88.903 75.439 89.084 C 82.651 89.241 89.87 89.124 97.086 89.119 C 99.924 89.118 100.727 87.727 99.307 85.251 C 96.222 79.869 93.096 74.511 90.039 69.113 C 89.033 67.338 87.614 66.483 85.585 66.498 C 82.121 66.523 78.656 66.574 75.194 66.478 C 67.053 66.251 60.859 62.564 56.642 55.639 C 54.435 52.013 51.587 49.107 47.86 47.096 C 37.757 41.645 24.272 44.4 17.709 55.745 C 12.026 65.569 6.375 75.411 0.718 85.25 C -0.715 87.743 0.068 89.108 2.921 89.112 C 9.174 89.12 15.428 89.093 21.682 89.133 C 23.675 89.146 25.043 88.329 26.01 86.595 C 27.766 83.446 29.605 80.341 31.464 77.128 Z" fill="var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0))" height="89.16537360973305px" id="hyANsVxZq" transform="translate(0 5)" width="100px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`;
var SVG = /* @__PURE__ */ forwardRef2((props, ref) => {
  const { animated, layoutId, children, ...rest } = props;
  return animated ? /* @__PURE__ */ _jsx(motion.div, { ...rest, layoutId, ref }) : /* @__PURE__ */ _jsx("div", { ...rest, ref });
});
var getProps = ({ height, id, width, ...props }) => {
  return { ...props };
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const { style, className: className14, layoutId, variant, ...restProps } = getProps(props);
  return /* @__PURE__ */ _jsx(SVG, { ...restProps, className: cx("framer-Ttzji", className14), layoutId, ref, style: { ...style } });
});
var css14 = [`.framer-Ttzji { -webkit-mask: ${mask}; aspect-ratio: 1; background-color: var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, #000000); mask: ${mask}; width: 100px; }`];
var Icon = withCSS(Component, css14, "framer-Ttzji");
Icon.displayName = "Square Black";
var alWRNtbeL_default = Icon;

// http-url:https://framerusercontent.com/modules/CqbIaNlNJ9zHYkkFL52F/ayfCmlhj1m67KpAJxyby/WWrKfqOcU.js
import { jsx as _jsx2 } from "react/jsx-runtime";
import { addPropertyControls, ControlType, cx as cx2, motion as motion2, withCSS as withCSS2 } from "./_framer-runtime.js";
import * as React2 from "react";
import { forwardRef as forwardRef4 } from "react";
var mask2 = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g d="M 29.667 34.611 L 59.333 34.611 M 29.667 54.389 L 59.333 54.389 M 0 44.5 C 0 7.852 7.852 0 44.5 0 C 81.148 0 89 7.852 89 44.5 C 89 81.148 81.148 89 44.5 89 C 7.852 89 0 81.148 0 44.5 Z" fill="transparent" height="89px" id="v5QTL8CkT" transform="translate(5.25 5.25)" width="89px"><path d="M 0 0 L 29.667 0 M 0 19.778 L 29.667 19.778" fill="transparent" height="19.777788162231445px" id="HGFOKFIny" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="9.89" stroke="var(--118a55, var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)))" transform="translate(29.667 34.611)" width="29.666666751583193px"/><path d="M 0 44.5 C 0 7.852 7.852 0 44.5 0 C 81.148 0 89 7.852 89 44.5 C 89 81.148 81.148 89 44.5 89 C 7.852 89 0 81.148 0 44.5 Z" fill="transparent" height="89px" id="kucAr83Cm" stroke-dasharray="" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-width="9.89" stroke="var(--118a55, var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)))" width="89px"/></g></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`;
var SVG2 = /* @__PURE__ */ forwardRef4((props, ref) => {
  const { animated, layoutId, children, ...rest } = props;
  return animated ? /* @__PURE__ */ _jsx2(motion2.div, { ...rest, layoutId, ref }) : /* @__PURE__ */ _jsx2("div", { ...rest, ref });
});
var getProps2 = ({ color, height, id, width, ...props }) => {
  return { ...props, GaDHsaDms: color ?? props.GaDHsaDms ?? "var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0))" };
};
var Component2 = /* @__PURE__ */ React2.forwardRef(function(props, ref) {
  const { style, className: className14, layoutId, variant, GaDHsaDms, ...restProps } = getProps2(props);
  return /* @__PURE__ */ _jsx2(SVG2, { ...restProps, className: cx2("framer-cCPtd", className14), layoutId, ref, style: { "--118a55": GaDHsaDms, ...style } });
});
var css15 = [`.framer-cCPtd { -webkit-mask: ${mask2}; aspect-ratio: 1; background-color: var(--118a55); mask: ${mask2}; width: 100px; }`];
var Icon2 = withCSS2(Component2, css15, "framer-cCPtd");
Icon2.displayName = "Equal Square";
var WWrKfqOcU_default = Icon2;
addPropertyControls(Icon2, { GaDHsaDms: { defaultValue: 'var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)) /* {"name":"Icon Black"} */', hidden: false, title: "Color", type: ControlType.Color } });

// http-url:https://framerusercontent.com/modules/6gSeLGufj9YMO6ADzqOD/pnSAXwDC0JfNjp5xAcUa/BbFuZPGaK.js
import { jsx as _jsx3 } from "react/jsx-runtime";
import { addFonts, addPropertyControls as addPropertyControls2, ControlType as ControlType2, cx as cx3, useComponentViewport, useLocaleInfo, useVariantState, withCSS as withCSS3 } from "./_framer-runtime.js";
import { LayoutGroup, motion as motion3, MotionConfigContext } from "framer-motion";
import * as React3 from "react";
import { useRef } from "react";
var cycleOrder = ["FveAb6f2W", "I5Li6kC_5"];
var serializationHash = "framer-axTw0";
var variantClassNames = { FveAb6f2W: "framer-v-zl82vu", I5Li6kC_5: "framer-v-344k82" };
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
var humanReadableVariantMap = { "100": "FveAb6f2W", "200": "I5Li6kC_5" };
var Variants = motion3.create(React3.Fragment);
var getProps3 = ({ height, id, width, ...props }) => {
  return { ...props, variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "FveAb6f2W" };
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
  const { style, className: className14, layoutId, variant, ...restProps } = getProps3(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "FveAb6f2W", ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx3(serializationHash, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx3(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx3(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx3(Transition, { value: transition1, children: /* @__PURE__ */ _jsx3(motion3.div, { ...restProps, ...gestureHandlers, className: cx3(scopingClassNames, "framer-zl82vu", className14, classNames), "data-framer-name": "100", layoutDependency, layoutId: "Mainreturn__FveAb6f2W", ref: refBinding, style: { backgroundColor: "var(--token-914b1e49-c6dc-49fc-93ac-369519474e4f, rgb(227, 227, 227))", ...style }, variants: { I5Li6kC_5: { backgroundColor: "var(--token-fb0f7462-27b2-4a53-b10e-81b2a62b8279, rgb(204, 204, 204))" } }, ...addPropertyOverrides({ I5Li6kC_5: { "data-framer-name": "200" } }, baseVariant, gestureVariant) }) }) }) });
});
var css16 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-axTw0.framer-2kef09, .framer-axTw0 .framer-2kef09 { display: block; }", ".framer-axTw0.framer-zl82vu { height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }"];
var FramerBbFuZPGaK = withCSS3(Component3, css16, "framer-axTw0");
var BbFuZPGaK_default = FramerBbFuZPGaK;
FramerBbFuZPGaK.displayName = "Separator";
FramerBbFuZPGaK.defaultProps = { height: 1, width: 1072 };
addPropertyControls2(FramerBbFuZPGaK, { variant: { options: ["FveAb6f2W", "I5Li6kC_5"], optionTitles: ["100", "200"], title: "Variant", type: ControlType2.Enum } });
addFonts(FramerBbFuZPGaK, [{ explicitInter: true, fonts: [] }], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/zycX9yEdKmx3RwyjdFF7/zgiUIjoeIcIl52gVRMIk/n9UsXiqAk.js
import { jsx as _jsx4, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts as addFonts2, addPropertyControls as addPropertyControls3, ControlType as ControlType3, cx as cx4, getFontsFromSharedStyle, Link, RichText, useComponentViewport as useComponentViewport2, useLocaleInfo as useLocaleInfo2, useVariantState as useVariantState2, withCSS as withCSS4 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup2, motion as motion4, MotionConfigContext as MotionConfigContext2 } from "framer-motion";
import * as React4 from "react";
import { useRef as useRef2 } from "react";
var enabledGestures = { ESexIw2tb: { hover: true } };
var cycleOrder2 = ["ESexIw2tb", "ZEy_EiJQy"];
var serializationHash2 = "framer-qcBhP";
var variantClassNames2 = { ESexIw2tb: "framer-v-lvzxr7", ZEy_EiJQy: "framer-v-mvn0tj" };
function addPropertyOverrides2(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition12 = { bounce: 0, delay: 0, duration: 0.6, type: "spring" };
var Transition2 = ({ value, children }) => {
  const config = React4.useContext(MotionConfigContext2);
  const transition = value ?? config.transition;
  const contextValue = React4.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx4(MotionConfigContext2.Provider, { value: contextValue, children });
};
var humanReadableVariantMap2 = { Active: "ZEy_EiJQy", Base: "ESexIw2tb" };
var Variants2 = motion4.create(React4.Fragment);
var getProps4 = ({ height, id, link, title, width, ...props }) => {
  return { ...props, MsA4ziVRH: title ?? props.MsA4ziVRH ?? "Shipping & Delivery", S8tU6pV6t: link ?? props.S8tU6pV6t, variant: humanReadableVariantMap2[props.variant] ?? props.variant ?? "ESexIw2tb" };
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
  const { style, className: className14, layoutId, variant, MsA4ziVRH, S8tU6pV6t, ...restProps } = getProps4(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState2({ cycleOrder: cycleOrder2, defaultVariant: "ESexIw2tb", enabledGestures, ref: refBinding, variant, variantClassNames: variantClassNames2 });
  const layoutDependency = createLayoutDependency2(props, variants);
  const sharedStyleClassNames = [className2];
  const scopingClassNames = cx4(serializationHash2, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx4(LayoutGroup2, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx4(Variants2, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx4(Transition2, { value: transition12, children: /* @__PURE__ */ _jsx4(Link, { href: S8tU6pV6t, motionChild: true, nodeId: "ESexIw2tb", openInNewTab: false, scopeId: "n9UsXiqAk", smoothScroll: true, children: /* @__PURE__ */ _jsxs(motion4.a, { ...restProps, ...gestureHandlers, className: `${cx4(scopingClassNames, "framer-lvzxr7", className14, classNames)} framer-1072xoc`, "data-framer-name": "Base", draggable: "false", layoutDependency, layoutId: "Mainreturn__ESexIw2tb", ref: refBinding, style: { ...style }, ...addPropertyOverrides2({ "ESexIw2tb-hover": { "data-framer-name": void 0 }, ZEy_EiJQy: { "data-framer-name": "Active" } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsx4(motion4.div, { className: "framer-wje3qw", "data-framer-name": "Active Line", layoutDependency, layoutId: "Mainreturn__xdU1nG8XL", style: { backgroundColor: "var(--token-8ef28781-a0a2-43db-933d-3d729ae85487, rgb(0, 123, 255))" } }), /* @__PURE__ */ _jsx4(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx4(React4.Fragment, { children: /* @__PURE__ */ _jsx4(motion4.p, { className: "framer-styles-preset-5rfdkx", "data-styles-preset": "CT_DBbR5R", dir: "auto", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-31c75237-3696-4093-9011-7822eb8b6641, rgb(122, 122, 122)))" }, children: "Shipping & Delivery" }) }), className: "framer-16enwxh", fonts: ["Inter"], layoutDependency, layoutId: "Mainreturn__kZL6yxQxj", style: { "--extracted-r6o4lv": "var(--token-31c75237-3696-4093-9011-7822eb8b6641, rgb(122, 122, 122))" }, text: MsA4ziVRH, variants: { "ESexIw2tb-hover": { "--extracted-r6o4lv": "var(--token-6d07e840-0908-44af-b7b3-055ece1d0a4b, rgb(41, 41, 41))" }, ZEy_EiJQy: { "--extracted-r6o4lv": "var(--token-32488aad-6873-4288-96b6-2211f3f7af61, rgb(0, 123, 255))" } }, verticalAlignment: "top", withExternalLayout: true, ...addPropertyOverrides2({ "ESexIw2tb-hover": { children: /* @__PURE__ */ _jsx4(React4.Fragment, { children: /* @__PURE__ */ _jsx4(motion4.p, { className: "framer-styles-preset-5rfdkx", "data-styles-preset": "CT_DBbR5R", dir: "auto", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6d07e840-0908-44af-b7b3-055ece1d0a4b, rgb(41, 41, 41)))" }, children: "Shipping & Delivery" }) }) }, ZEy_EiJQy: { children: /* @__PURE__ */ _jsx4(React4.Fragment, { children: /* @__PURE__ */ _jsx4(motion4.p, { className: "framer-styles-preset-5rfdkx", "data-styles-preset": "CT_DBbR5R", dir: "auto", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-32488aad-6873-4288-96b6-2211f3f7af61, rgb(0, 123, 255)))" }, children: "Shipping & Delivery" }) }) } }, baseVariant, gestureVariant) })] }) }) }) }) });
});
var css17 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-qcBhP.framer-1072xoc, .framer-qcBhP .framer-1072xoc { display: block; }", ".framer-qcBhP.framer-lvzxr7 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: 200px; }", ".framer-qcBhP .framer-wje3qw { flex: none; height: 2px; left: -1px; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: absolute; top: calc(47.61904761904764% - 2px / 2); width: 1px; z-index: 1; }", '.framer-qcBhP .framer-16enwxh { --text-truncation-display-inline-for-safari-16: inline; --text-truncation-display-none-for-safari-16: none; --text-truncation-line-break-for-safari-16: "\\A"; -webkit-box-orient: vertical; -webkit-line-clamp: 1; display: -webkit-box; flex: 1 0 0px; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; white-space: pre-line; width: 1px; word-break: break-word; word-wrap: break-word; }', ".framer-qcBhP.framer-v-mvn0tj.framer-lvzxr7 { cursor: unset; }", ".framer-qcBhP.framer-v-mvn0tj .framer-wje3qw { left: unset; position: relative; top: unset; width: 20px; }", ...css2];
var Framern9UsXiqAk = withCSS4(Component4, css17, "framer-qcBhP");
var n9UsXiqAk_default = Framern9UsXiqAk;
Framern9UsXiqAk.displayName = "Table Of Contents Item";
Framern9UsXiqAk.defaultProps = { height: 21, width: 200 };
addPropertyControls3(Framern9UsXiqAk, { variant: { options: ["ESexIw2tb", "ZEy_EiJQy"], optionTitles: ["Base", "Active"], title: "Variant", type: ControlType3.Enum }, MsA4ziVRH: { defaultValue: "Shipping & Delivery", title: "Title", type: ControlType3.String }, onMsA4ziVRHChange: { changes: "MsA4ziVRH", type: ControlType3.ChangeHandler }, S8tU6pV6t: { title: "Link", type: ControlType3.Link } });
addFonts2(Framern9UsXiqAk, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...getFontsFromSharedStyle(fonts2)], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/y8uVpBUF8Wbf67WPqhSr/tG3umAf8IphE4SPRF3M2/SwbrOoXuy.js
var Image1WithFXWithOptimizedAppearEffect = withOptimizedAppearEffect(withFX(Image1));
var SquareBlackFonts = getFonts(alWRNtbeL_default);
var EqualSquareFonts = getFonts(WWrKfqOcU_default);
var SeparatorFonts = getFonts(BbFuZPGaK_default);
var TableOfContentsItemFonts = getFonts(n9UsXiqAk_default);
var TableOfContentsItemWithVariantAppearEffect = withVariantAppearEffect(n9UsXiqAk_default);
var cycleOrder3 = ["reXWQeIKk", "k1o5gWvEF", "v8O3rGysA"];
var serializationHash3 = "framer-wIUqh";
var variantClassNames3 = { k1o5gWvEF: "framer-v-v9s3cd", reXWQeIKk: "framer-v-110uxok", v8O3rGysA: "framer-v-2fl2v5" };
function addPropertyOverrides3(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition13 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var transition2 = { bounce: 0, delay: 0, duration: 1.5, type: "spring" };
var animation = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: transition2, x: 0, y: 0 };
var animation1 = { opacity: 1, rotate: -5, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: -80, y: 0 };
var transformTemplate1 = (_2, t5) => `translateY(-50%) ${t5}`;
var animation2 = { opacity: 1, rotate: 24, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: transition2, x: 0, y: 0 };
var animation3 = { opacity: 0.5, rotate: 24, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: -80, y: -30 };
var transformTemplate2 = (_2, t5) => `translate(-50%, -50%) ${t5}`;
var animation4 = { opacity: 1, rotate: -5, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 80, y: 0 };
var animation5 = { opacity: 1, rotate: 25, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: transition2, x: 0, y: 0 };
var animation6 = { opacity: 0.5, rotate: 25, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 80, y: 30 };
var query1 = () => ({ from: { alias: "VM53qTxlV", data: QOgS8yO19_default, type: "Collection" }, limit: { type: "LiteralValue", value: 10 }, select: [{ collection: "VM53qTxlV", name: "hWqyOEP_3", type: "Identifier" }, { collection: "VM53qTxlV", name: "cGT5udmtH", type: "Identifier" }, { collection: "VM53qTxlV", name: "uQ2JvQyPw", type: "Identifier" }, { collection: "VM53qTxlV", name: "id", type: "Identifier" }], where: { left: { collection: "VM53qTxlV", name: "wilSgI4j3", type: "Identifier" }, operator: "==", right: { type: "LiteralValue", value: "NCj5IlbaW" }, type: "BinaryOperation" } });
var QueryData = ({ query, pageSize, children }) => {
  const data = __framer_useQueryData(query);
  return children(data);
};
var patchBorderRadiusScaleCorrector1 = patchBorderRadiusScaleCorrector();
var matchVariant = (...args) => {
  for (const arg of args) {
    if (arg && typeof arg === "string")
      return arg;
  }
  return void 0;
};
var query3 = () => ({ from: { alias: "xhZ4iZywU", data: QOgS8yO19_default, type: "Collection" }, select: [{ collection: "xhZ4iZywU", name: "hWqyOEP_3", type: "Identifier" }, { collection: "xhZ4iZywU", name: "uQ2JvQyPw", type: "Identifier" }, { collection: "xhZ4iZywU", name: "id", type: "Identifier" }], where: { left: { collection: "xhZ4iZywU", name: "wilSgI4j3", type: "Identifier" }, operator: "==", right: { type: "LiteralValue", value: "NCj5IlbaW" }, type: "BinaryOperation" } });
var Transition3 = ({ value, children }) => {
  const config = React5.useContext(MotionConfigContext3);
  const transition = value ?? config.transition;
  const contextValue = React5.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx5(MotionConfigContext3.Provider, { value: contextValue, children });
};
var humanReadableVariantMap3 = { Desktop: "reXWQeIKk", Phone: "v8O3rGysA", Tablet: "k1o5gWvEF" };
var Variants3 = motion5.create(React5.Fragment);
var getProps5 = ({ height, id, scrollSection, scrollSection2, scrollSection3, width, ...props }) => {
  return { ...props, gyQGgfn6b: scrollSection3 ?? props.gyQGgfn6b, sWdKE55LS: scrollSection ?? props.sWdKE55LS, variant: humanReadableVariantMap3[props.variant] ?? props.variant ?? "reXWQeIKk", zH7tfzMhc: scrollSection2 ?? props.zH7tfzMhc };
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
  const { style, className: className14, layoutId, variant, sWdKE55LS, zH7tfzMhc, gyQGgfn6b, ...restProps } = getProps5(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState3({ cycleOrder: cycleOrder3, defaultVariant: "reXWQeIKk", ref: refBinding, variant, variantClassNames: variantClassNames3 });
  const layoutDependency = createLayoutDependency3(props, variants);
  const sharedStyleClassNames = [className3, className, className7, className13, className10, className11, className6, className12, className5, className9, className8, className4, className2];
  const scopingClassNames = cx5(serializationHash3, ...sharedStyleClassNames);
  const isDisplayed = () => {
    if (baseVariant === "v8O3rGysA")
      return false;
    return true;
  };
  const router = useRouter();
  return /* @__PURE__ */ _jsx5(LayoutGroup3, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx5(Variants3, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx5(Transition3, { value: transition13, children: /* @__PURE__ */ _jsxs2(motion5.main, { ...restProps, ...gestureHandlers, className: cx5(scopingClassNames, "framer-110uxok", className14, classNames), "data-framer-name": "Desktop", layoutDependency, layoutId: "Mainreturn__reXWQeIKk", ref: refBinding, style: { ...style }, ...addPropertyOverrides3({ k1o5gWvEF: { "data-framer-name": "Tablet" }, v8O3rGysA: { "data-framer-name": "Phone" } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsxs2(motion5.section, { className: "framer-17ckawh", "data-framer-name": "Hero", layoutDependency, layoutId: "Mainreturn__f32YcTQ3I", children: [/* @__PURE__ */ _jsxs2(motion5.div, { className: "framer-1neafch", "data-framer-name": "Header", layoutDependency, layoutId: "Mainreturn__Jce7zmSxD", children: [/* @__PURE__ */ _jsx5(RichText2, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx5(React5.Fragment, { children: /* @__PURE__ */ _jsx5(motion5.h2, { className: "framer-styles-preset-1ll98pl", "data-styles-preset": "cxfU_vRgl", dir: "auto", style: { "--framer-text-alignment": "center" }, children: "Returns & Exchange" }) }), className: "framer-17xtr8m", fonts: ["Inter"], layoutDependency, layoutId: "Mainreturn__O1Qjc3Obd", style: { "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx5(RichText2, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx5(React5.Fragment, { children: /* @__PURE__ */ _jsx5(motion5.p, { className: "framer-styles-preset-9tj2n0", "data-styles-preset": "amNEcipQY", dir: "auto", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-55732a59-bc62-4580-8bcc-abc8c3da47fc, rgb(97, 97, 97)))" }, children: "We want you to feel confident with every purchase. If your order isn\u2019t the right fit, you can request a return or exchange within the eligible return period." }) }), className: "framer-oymhg3", fonts: ["Inter"], layoutDependency, layoutId: "Mainreturn__mpKHSFCef", style: { "--extracted-r6o4lv": "var(--token-55732a59-bc62-4580-8bcc-abc8c3da47fc, rgb(97, 97, 97))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, verticalAlignment: "top", withExternalLayout: true })] }), /* @__PURE__ */ _jsxs2(motion5.div, { className: "framer-ohjqpy", "data-framer-name": "Content", layoutDependency, layoutId: "Mainreturn__Kh2nsIrpH", children: [/* @__PURE__ */ _jsx5(motion5.div, { className: "framer-54s1dp", "data-framer-name": "Left Hand", layoutDependency, layoutId: "Mainreturn__wBs0T5kY_", children: /* @__PURE__ */ _jsx5(Image1WithFXWithOptimizedAppearEffect, { __framer__spring: { damping: 60, delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1], mass: 1, stagger: 0, stiffness: 500, type: "spring" }, __framer__styleTransformEffectEnabled: true, __framer__transformTargets: [{ target: { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: -40, y: 0 } }, { ref: sWdKE55LS, target: { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 0 } }], __framer__transformTrigger: "onScrollTarget", __framer__transformViewportThreshold: 0, __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, animate: animation, as: "figure", background: { alt: "Left Reaching Hand With Shoe", fit: "fill", intrinsicHeight: 552, intrinsicWidth: 1536, loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 0 + (((componentViewport?.height || 200) - 0 - 1294.9) / 2 + 0 + 0) + 120 + 183.4 + 0 + 0), pixelHeight: 552, pixelWidth: 1536, sizes: `max((${componentViewport?.width || "100vw"} - 70px) * 0.5349, 1px)`, src: "https://framerusercontent.com/images/ZHw0lzeidaQRxx5RsrN1UsPXbRk.png?width=1536&height=552", srcSet: "https://framerusercontent.com/images/ZHw0lzeidaQRxx5RsrN1UsPXbRk.png?scale-down-to=512&width=1536&height=552 512w,https://framerusercontent.com/images/ZHw0lzeidaQRxx5RsrN1UsPXbRk.png?scale-down-to=1024&width=1536&height=552 1024w,https://framerusercontent.com/images/ZHw0lzeidaQRxx5RsrN1UsPXbRk.png?width=1536&height=552 1536w" }, className: "framer-yxtd3f", "data-framer-appear-id": "yxtd3f", "data-framer-name": "Left Hand", draggable: "false", fitImageDimension: "height", initial: animation1, layoutDependency, layoutId: "Mainreturn__qnQNzvhkE", optimized: true, style: { rotate: 0 }, variants: { v8O3rGysA: { rotate: 24 } }, ...addPropertyOverrides3({ v8O3rGysA: { animate: animation2, background: { alt: "Left Reaching Hand With Shoe", fit: "fill", intrinsicHeight: 552, intrinsicWidth: 1536, loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 0 + (((componentViewport?.height || 200) - 0 - 1010.6) / 2 + 0 + 0) + 120 + 183.4 + 0 + -0.5), pixelHeight: 552, pixelWidth: 1536, sizes: `calc(min(max((${componentViewport?.width || "100vw"} - 10px) / 2, 1px), 300px) * 1.7)`, src: "https://framerusercontent.com/images/ZHw0lzeidaQRxx5RsrN1UsPXbRk.png?width=1536&height=552", srcSet: "https://framerusercontent.com/images/ZHw0lzeidaQRxx5RsrN1UsPXbRk.png?scale-down-to=512&width=1536&height=552 512w,https://framerusercontent.com/images/ZHw0lzeidaQRxx5RsrN1UsPXbRk.png?scale-down-to=1024&width=1536&height=552 1024w,https://framerusercontent.com/images/ZHw0lzeidaQRxx5RsrN1UsPXbRk.png?width=1536&height=552 1536w" }, initial: animation3, transformTemplate: transformTemplate1 } }, baseVariant, gestureVariant) }) }), /* @__PURE__ */ _jsx5(alWRNtbeL_default, { animated: true, className: "framer-13twvuv", layoutDependency, layoutId: "Mainreturn__g6w0qMg0s", style: { opacity: 0.17 }, transformTemplate: transformTemplate2 }), isDisplayed() && /* @__PURE__ */ _jsx5(motion5.div, { className: "framer-1wt141f", "data-framer-name": "Spacer", layoutDependency, layoutId: "Mainreturn__T6C3D4dbG" }), /* @__PURE__ */ _jsx5(motion5.div, { className: "framer-1p96xjq", "data-framer-name": "Right Hand", layoutDependency, layoutId: "Mainreturn__I2HRmrToM", children: /* @__PURE__ */ _jsx5(Image1WithFXWithOptimizedAppearEffect, { __framer__spring: { damping: 60, delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1], mass: 1, stagger: 0, stiffness: 500, type: "spring" }, __framer__styleTransformEffectEnabled: true, __framer__transformTargets: [{ target: { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 40, y: 0 } }, { ref: zH7tfzMhc, target: { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 0 } }], __framer__transformTrigger: "onScrollTarget", __framer__transformViewportThreshold: 0, __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, animate: animation, as: "figure", background: { alt: "Right Reaching Hand", fit: "fill", intrinsicHeight: 470.5, intrinsicWidth: 836, loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 0 + (((componentViewport?.height || 200) - 0 - 1294.9) / 2 + 0 + 0) + 120 + 183.4 + 0 + 190), pixelHeight: 941, pixelWidth: 1672, sizes: `max((${componentViewport?.width || "100vw"} - 70px) / 2.15, 1px)`, src: "https://framerusercontent.com/images/MpKWrlDz2KQ3ymuppyxexEQ4Yrs.png?width=1672&height=941", srcSet: "https://framerusercontent.com/images/MpKWrlDz2KQ3ymuppyxexEQ4Yrs.png?scale-down-to=512&width=1672&height=941 512w,https://framerusercontent.com/images/MpKWrlDz2KQ3ymuppyxexEQ4Yrs.png?scale-down-to=1024&width=1672&height=941 1024w,https://framerusercontent.com/images/MpKWrlDz2KQ3ymuppyxexEQ4Yrs.png?width=1672&height=941 1672w" }, className: "framer-bamgjw", "data-framer-appear-id": "bamgjw", "data-framer-name": "Right Hand", draggable: "false", fitImageDimension: "height", initial: animation4, layoutDependency, layoutId: "Mainreturn__ctcPRusDJ", optimized: true, style: { rotate: 0 }, variants: { v8O3rGysA: { rotate: 25 } }, ...addPropertyOverrides3({ v8O3rGysA: { animate: animation5, background: { alt: "Right Reaching Hand", fit: "fill", intrinsicHeight: 470.5, intrinsicWidth: 836, loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 0 + (((componentViewport?.height || 200) - 0 - 1010.6) / 2 + 0 + 0) + 120 + 183.4 + 0 + 108.75), pixelHeight: 941, pixelWidth: 1672, sizes: `calc(min(max((${componentViewport?.width || "100vw"} - 10px) / 2, 1px), 300px) * 1.2)`, src: "https://framerusercontent.com/images/MpKWrlDz2KQ3ymuppyxexEQ4Yrs.png?width=1672&height=941", srcSet: "https://framerusercontent.com/images/MpKWrlDz2KQ3ymuppyxexEQ4Yrs.png?scale-down-to=512&width=1672&height=941 512w,https://framerusercontent.com/images/MpKWrlDz2KQ3ymuppyxexEQ4Yrs.png?scale-down-to=1024&width=1672&height=941 1024w,https://framerusercontent.com/images/MpKWrlDz2KQ3ymuppyxexEQ4Yrs.png?width=1672&height=941 1672w" }, initial: animation6, transformTemplate: transformTemplate1 } }, baseVariant, gestureVariant) }) })] })] }), /* @__PURE__ */ _jsxs2(motion5.section, { className: "framer-1svluzk", "data-framer-name": "Content", layoutDependency, layoutId: "Mainreturn__ehN6ao4vK", children: [/* @__PURE__ */ _jsx5(motion5.div, { className: "framer-1mu5z32", layoutDependency, layoutId: "Mainreturn__VM53qTxlV", children: /* @__PURE__ */ _jsx5(ChildrenCanSuspend, { children: /* @__PURE__ */ _jsx5(QueryData, { query: query1(), children: (collection, paginationInfo, loadMore) => {
    return /* @__PURE__ */ _jsx5(_Fragment, { children: collection?.map(({ cGT5udmtH: cGT5udmtHVM53qTxlV, hWqyOEP_3: hWqyOEP_3VM53qTxlV, id: idVM53qTxlV, uQ2JvQyPw: uQ2JvQyPwVM53qTxlV }, index) => {
      hWqyOEP_3VM53qTxlV ?? (hWqyOEP_3VM53qTxlV = "");
      cGT5udmtHVM53qTxlV ?? (cGT5udmtHVM53qTxlV = "");
      uQ2JvQyPwVM53qTxlV ?? (uQ2JvQyPwVM53qTxlV = "");
      return /* @__PURE__ */ _jsx5(LayoutGroup3, { id: `VM53qTxlV-${idVM53qTxlV}`, children: /* @__PURE__ */ _jsx5(PathVariablesContext.Provider, { value: { uQ2JvQyPw: uQ2JvQyPwVM53qTxlV }, children: /* @__PURE__ */ _jsxs2(motion5.div, { className: "framer-1x0f9gx", layoutDependency, layoutId: "Mainreturn__ssWhGuYI5", children: [/* @__PURE__ */ _jsx5(RichText2, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx5(React5.Fragment, { children: /* @__PURE__ */ _jsx5(motion5.h4, { className: "framer-styles-preset-19ynewv", "data-styles-preset": "pN_gL4Xds", dir: "auto", children: "Shipping & Delivery" }) }), className: "framer-td14hh", fonts: ["Inter"], layoutDependency, layoutId: "Mainreturn__pKNbQG8UT", text: hWqyOEP_3VM53qTxlV, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx5(RichText2, { __fromCanvasComponent: true, children: cGT5udmtHVM53qTxlV, className: "framer-1db0nsl", fonts: ["Inter"], layoutDependency, layoutId: "Mainreturn__TDrKPEBkU", stylesPresetsClassNames: { a: "framer-styles-preset-1eqj9u", h1: "framer-styles-preset-1r5o7uy", h2: "framer-styles-preset-tsnpik", h3: "framer-styles-preset-rzow5z", h4: "framer-styles-preset-kx3c0q", h5: "framer-styles-preset-1lkvzko", h6: "framer-styles-preset-1mts5yh", p: "framer-styles-preset-1ozkt1o", table: "framer-styles-preset-176fugv" }, verticalAlignment: "top", withExternalLayout: true })] }) }) }, idVM53qTxlV);
    }) });
  } }) }) }), isDisplayed() && /* @__PURE__ */ _jsx5(motion5.aside, { className: "framer-ty71ez", "data-border": true, layoutDependency, layoutId: "Mainreturn__xhZ4iZywU", style: { "--border-bottom-width": "1px", "--border-color": "var(--token-914b1e49-c6dc-49fc-93ac-369519474e4f, rgb(227, 227, 227))", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", "--corner-shape-fallback": 0.796, backgroundColor: "var(--token-c81209ee-d76c-46df-b8d5-cc628e2f35fa, rgb(250, 250, 250))", borderBottomLeftRadius: "calc(37px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderBottomRightRadius: "calc(37px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopLeftRadius: "calc(37px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopRightRadius: "calc(37px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", cornerShape: "superellipse(1.4)" }, children: /* @__PURE__ */ _jsx5(ChildrenCanSuspend, { children: /* @__PURE__ */ _jsx5(QueryData, { query: query3(), children: (collection1, paginationInfo1, loadMore1) => {
    return /* @__PURE__ */ _jsxs2(_Fragment, { children: [/* @__PURE__ */ _jsxs2(motion5.div, { className: "framer-16p94qg", "data-framer-name": "Header", layoutDependency, layoutId: "Mainreturn__eg4Kbx0MK", children: [/* @__PURE__ */ _jsx5(WWrKfqOcU_default, { animated: true, className: "framer-1jzhpgk", layoutDependency, layoutId: "Mainreturn__Af4MWTJlE", style: { "--118a55": "var(--token-271a8250-cf6c-498c-9a0f-d0b021ee941e, rgb(41, 41, 41))" } }), /* @__PURE__ */ _jsx5(RichText2, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx5(React5.Fragment, { children: /* @__PURE__ */ _jsx5(motion5.p, { className: "framer-styles-preset-5rfdkx", "data-styles-preset": "CT_DBbR5R", dir: "auto", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6d07e840-0908-44af-b7b3-055ece1d0a4b, rgb(41, 41, 41)))" }, children: "Table of contents" }) }), className: "framer-15axmbu", "data-framer-name": "Title", fonts: ["Inter"], layoutDependency, layoutId: "Mainreturn__fTkqACN34", style: { "--extracted-r6o4lv": "var(--token-6d07e840-0908-44af-b7b3-055ece1d0a4b, rgb(41, 41, 41))" }, verticalAlignment: "top", withExternalLayout: true })] }), /* @__PURE__ */ _jsx5(ComponentViewportProvider, { height: 1, width: `calc(min(max((min(${componentViewport?.width || "100vw"}, 1200px) - 100px) / 2, 1px), 300px) - 64px)`, y: (componentViewport?.y || 0) + 0 + (((componentViewport?.height || 200) - 0 - 1294.9) / 2 + 1027.9 + 0) + 28 + 32 + 115, children: /* @__PURE__ */ _jsx5(SmartComponentScopedContainer, { className: "framer-13oi4h3-container", layoutDependency, layoutId: "Mainreturn__OuQOiIVM5-container", nodeId: "OuQOiIVM5", rendersWithMotion: true, scopeId: "SwbrOoXuy", children: /* @__PURE__ */ _jsx5(BbFuZPGaK_default, { height: "100%", id: "OuQOiIVM5", layoutId: "Mainreturn__OuQOiIVM5", style: { height: "100%", width: "100%" }, variant: matchVariant("FveAb6f2W"), width: "100%" }) }) }), collection1?.map(({ hWqyOEP_3: hWqyOEP_3xhZ4iZywU, id: idxhZ4iZywU, uQ2JvQyPw: uQ2JvQyPwxhZ4iZywU }, index1) => {
      hWqyOEP_3xhZ4iZywU ?? (hWqyOEP_3xhZ4iZywU = "");
      uQ2JvQyPwxhZ4iZywU ?? (uQ2JvQyPwxhZ4iZywU = "");
      return /* @__PURE__ */ _jsx5(LayoutGroup3, { id: `xhZ4iZywU-${idxhZ4iZywU}`, children: /* @__PURE__ */ _jsx5(PathVariablesContext.Provider, { value: { uQ2JvQyPw: uQ2JvQyPwxhZ4iZywU }, children: /* @__PURE__ */ _jsx5(motion5.div, { className: "framer-owu00r", layoutDependency, layoutId: "Mainreturn__vTee2dTnq", children: /* @__PURE__ */ _jsx5(ResolveLinks, { links: [{ href: { hash: ":uQ2JvQyPw-:ssWhGuYI5", hashVariables: { uQ2JvQyPw: uQ2JvQyPwxhZ4iZywU }, webPageId: "RqQHkoaOu" }, implicitPathVariables: void 0 }, { href: { hash: ":uQ2JvQyPw-:ssWhGuYI5", hashVariables: { uQ2JvQyPw: uQ2JvQyPwxhZ4iZywU }, webPageId: "RqQHkoaOu" }, implicitPathVariables: void 0 }], children: (resolvedLinks) => /* @__PURE__ */ _jsx5(ComponentViewportProvider, { height: 21, width: `calc(min(max((min(${componentViewport?.width || "100vw"}, 1200px) - 100px) / 2, 1px), 300px) - 64px)`, y: (componentViewport?.y || 0) + 0 + (((componentViewport?.height || 200) - 0 - 1294.9) / 2 + 1027.9 + 0) + 28 + 32 + 126 + 0 + 0, children: /* @__PURE__ */ _jsx5(SmartComponentScopedContainer, { className: "framer-138ho2s-container", draggable: "false", layoutDependency, layoutId: "Mainreturn__nDd2wgklj-container", nodeId: "nDd2wgklj", rendersWithMotion: true, scopeId: "SwbrOoXuy", children: /* @__PURE__ */ _jsx5(TableOfContentsItemWithVariantAppearEffect, { __framer__animateOnce: false, __framer__exitTarget: true, __framer__targets: [{ ref: gyQGgfn6b, target: "ZEy_EiJQy" }], __framer__threshold: 0, __framer__variantAppearEffectEnabled: true, height: "100%", id: "nDd2wgklj", layoutId: "Mainreturn__nDd2wgklj", MsA4ziVRH: hWqyOEP_3xhZ4iZywU, S8tU6pV6t: resolvedLinks[0], style: { width: "100%" }, variant: matchVariant("ESexIw2tb"), width: "100%", ...addPropertyOverrides3({ k1o5gWvEF: { S8tU6pV6t: resolvedLinks[1] } }, baseVariant, gestureVariant) }) }) }) }) }) }) }, idxhZ4iZywU);
    })] });
  } }) }) })] })] }) }) }) });
});
var css18 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-wIUqh.framer-gkcpa1, .framer-wIUqh .framer-gkcpa1 { display: block; }", ".framer-wIUqh.framer-110uxok { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }", ".framer-wIUqh .framer-17ckawh { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 120px 0px 64px 0px; position: relative; width: 100%; }", ".framer-wIUqh .framer-1neafch { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 28px 0px 28px; position: relative; width: 100%; }", ".framer-wIUqh .framer-17xtr8m, .framer-wIUqh .framer-td14hh, .framer-wIUqh .framer-1db0nsl { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-wIUqh .framer-oymhg3 { flex: none; height: auto; max-width: 350px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-wIUqh .framer-ohjqpy { -webkit-user-select: none; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; pointer-events: none; position: relative; user-select: none; width: 100%; }", ".framer-wIUqh .framer-54s1dp { align-content: center; align-items: center; display: flex; flex: 1.15 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 220px 0px; position: relative; width: 1px; }", ".framer-wIUqh .framer-yxtd3f, .framer-wIUqh .framer-bamgjw { flex: 1 0 0px; height: auto; overflow: visible; position: relative; width: 1px; }", ".framer-wIUqh .framer-13twvuv { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 100px); left: 50%; position: absolute; top: 50%; width: 100px; z-index: 0; }", ".framer-wIUqh .framer-1wt141f { flex: none; height: 50px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 50px; }", ".framer-wIUqh .framer-1p96xjq { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; overflow: visible; padding: 190px 0px 0px 0px; position: relative; width: 1px; }", ".framer-wIUqh .framer-1svluzk { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 44px; height: min-content; justify-content: center; max-width: 1200px; overflow: var(--overflow-clip-fallback, clip); padding: 28px; position: relative; width: 100%; }", ".framer-wIUqh .framer-1mu5z32 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; max-width: 630px; padding: 0px; position: relative; width: 1px; }", ".framer-wIUqh .framer-1x0f9gx { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; scroll-margin-top: 100px; width: 100%; }", ".framer-wIUqh .framer-ty71ez { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 300px; padding: 32px; position: sticky; top: 44px; width: 1px; z-index: 1; }", ".framer-wIUqh .framer-16p94qg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }", ".framer-wIUqh .framer-1jzhpgk { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 16px); position: relative; width: 16px; }", '.framer-wIUqh .framer-15axmbu { --text-truncation-display-inline-for-safari-16: inline; --text-truncation-display-none-for-safari-16: none; --text-truncation-line-break-for-safari-16: "\\A"; -webkit-box-orient: vertical; -webkit-line-clamp: 1; display: -webkit-box; flex: 1 0 0px; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; white-space: pre-line; width: 1px; word-break: break-word; word-wrap: break-word; }', ".framer-wIUqh .framer-13oi4h3-container { flex: none; height: 1px; position: relative; width: 100%; }", ".framer-wIUqh .framer-owu00r { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }", ".framer-wIUqh .framer-138ho2s-container { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; width: 100%; }", ".framer-wIUqh.framer-v-v9s3cd.framer-110uxok { width: 100%; }", ".framer-wIUqh.framer-v-2fl2v5.framer-110uxok { width: 100%; }", ".framer-wIUqh.framer-v-2fl2v5 .framer-17ckawh { align-content: center; align-items: center; }", ".framer-wIUqh.framer-v-2fl2v5 .framer-54s1dp { flex: 1 0 0px; height: 450px; max-width: 300px; padding: 0px; }", ".framer-wIUqh.framer-v-2fl2v5 .framer-yxtd3f { flex: none; left: -70px; position: absolute; top: 20%; width: 170%; z-index: 1; }", ".framer-wIUqh.framer-v-2fl2v5 .framer-1p96xjq { height: 450px; max-width: 300px; padding: 0px; }", ".framer-wIUqh.framer-v-2fl2v5 .framer-bamgjw { flex: none; position: absolute; right: -39px; top: 76%; width: 120%; z-index: 1; }", ".framer-wIUqh.framer-v-2fl2v5 .framer-1svluzk { max-width: 500px; }", ".framer-wIUqh.framer-v-2fl2v5 .framer-1x0f9gx { order: 0; }", ...css3, ...css, ...css7, ...css13, ...css10, ...css11, ...css6, ...css12, ...css5, ...css9, ...css8, ...css4, ...css2, '.framer-wIUqh[data-border="true"]::after, .framer-wIUqh [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }'];
var FramerSwbrOoXuy = withCSS5(Component5, css18, "framer-wIUqh");
var SwbrOoXuy_default = FramerSwbrOoXuy;
FramerSwbrOoXuy.displayName = "Main return";
FramerSwbrOoXuy.defaultProps = { height: 3169, width: 1200 };
addPropertyControls4(FramerSwbrOoXuy, { variant: { options: ["reXWQeIKk", "k1o5gWvEF", "v8O3rGysA"], optionTitles: ["Desktop", "Tablet", "Phone"], title: "Variant", type: ControlType4.Enum }, sWdKE55LS: { title: "Scroll Section", type: ControlType4.ScrollSectionRef }, zH7tfzMhc: { title: "Scroll Section 2", type: ControlType4.ScrollSectionRef }, gyQGgfn6b: { title: "Scroll Section 3", type: ControlType4.ScrollSectionRef } });
addFonts3(FramerSwbrOoXuy, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...SquareBlackFonts, ...EqualSquareFonts, ...SeparatorFonts, ...TableOfContentsItemFonts, ...getFontsFromSharedStyle2(fonts3), ...getFontsFromSharedStyle2(fonts), ...getFontsFromSharedStyle2(fonts7), ...getFontsFromSharedStyle2(fonts13), ...getFontsFromSharedStyle2(fonts10), ...getFontsFromSharedStyle2(fonts11), ...getFontsFromSharedStyle2(fonts6), ...getFontsFromSharedStyle2(fonts12), ...getFontsFromSharedStyle2(fonts5), ...getFontsFromSharedStyle2(fonts9), ...getFontsFromSharedStyle2(fonts8), ...getFontsFromSharedStyle2(fonts4), ...getFontsFromSharedStyle2(fonts2)], { supportsExplicitInterCodegen: true });
FramerSwbrOoXuy.loader = { load: (props, context) => {
  const locale = context.locale;
  const queryCacheEntry = queryCache.get(query1(), locale);
  const queryCacheEntry1 = queryCache.get(query3(), locale);
  return Promise.allSettled([queryCacheEntry.preload(), queryCacheEntry1.preload(), (async () => {
    const parentData = await queryCacheEntry1.readMaybeAsync() ?? [];
    return Promise.allSettled(parentData.flatMap((item) => [forwardLoader(BbFuZPGaK_default, {}, context), forwardLoader(n9UsXiqAk_default, {}, context)]));
  })()]);
} };
var __FramerMetadata__ = { "exports": { "default": { "type": "reactComponent", "name": "FramerSwbrOoXuy", "slots": [], "annotations": { "framerContractVersion": "1", "framerImmutableVariables": "true", "framerComponentViewportWidth": "true", "framerDisplayContentsDiv": "false", "framerIntrinsicHeight": "3169", "framerIntrinsicWidth": "1200", "framerColorSyntax": "true", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"k1o5gWvEF":{"layout":["fixed","auto"]},"v8O3rGysA":{"layout":["fixed","auto"]}}}', "framerVariables": '{"sWdKE55LS":"scrollSection","zH7tfzMhc":"scrollSection2","gyQGgfn6b":"scrollSection3"}', "framerAutoSizeImages": "true" } }, "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  SwbrOoXuy_default as default
};
