import * as React from 'react'
import React__default, {
  useRef,
  useEffect,
  useState,
  useImperativeHandle,
  useMemo,
  createContext,
  useCallback,
  useLayoutEffect,
  forwardRef,
  useContext,
} from 'react'
import require$$0, { unstable_batchedUpdates } from 'react-dom'

function _extends$1() {
  _extends$1 = Object.assign
    ? Object.assign.bind()
    : function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i]
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key]
            }
          }
        }
        return target
      }
  return _extends$1.apply(this, arguments)
}

function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {}
  var target = {}
  var sourceKeys = Object.keys(source)
  var key, i
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i]
    if (excluded.indexOf(key) >= 0) continue
    target[key] = source[key]
  }
  return target
}

var classnames = { exports: {} }

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

;(function (module) {
  /* global define */

  ;(function () {
    var hasOwn = {}.hasOwnProperty

    function classNames() {
      var classes = []

      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i]
        if (!arg) continue

        var argType = typeof arg

        if (argType === 'string' || argType === 'number') {
          classes.push(arg)
        } else if (Array.isArray(arg)) {
          if (arg.length) {
            var inner = classNames.apply(null, arg)
            if (inner) {
              classes.push(inner)
            }
          }
        } else if (argType === 'object') {
          if (
            arg.toString !== Object.prototype.toString &&
            !arg.toString.toString().includes('[native code]')
          ) {
            classes.push(arg.toString())
            continue
          }

          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes.push(key)
            }
          }
        }
      }

      return classes.join(' ')
    }

    if (module.exports) {
      classNames.default = classNames
      module.exports = classNames
    } else {
      window.classNames = classNames
    }
  })()
})(classnames)

var classNames = classnames.exports

function withNativeProps(props, element) {
  var p = _extends$1({}, element.props)
  if (props.style) {
    p.style = _extends$1({}, p.style, props.style)
  }
  if (props.className) {
    p.className = classNames(element.props.className, props.className)
  }
  return /*#__PURE__*/ React__default.cloneElement(element, p)
}

var _excluded$5 = [
  'children',
  'onClick',
  'disabled',
  'style',
  'color',
  'className',
]
var defaultProps$h = {
  className: '',
  disabled: false,
  children: undefined,
  style: {},
  onClick: function onClick(e) {},
}
var classPrefix$7 = 'ashe-button'
var Button = function Button(props) {
  var _defaultProps$props = _extends$1({}, defaultProps$h, props),
    children = _defaultProps$props.children,
    onClick = _defaultProps$props.onClick,
    disabled = _defaultProps$props.disabled
  _defaultProps$props.style
  var color = _defaultProps$props.color
  _defaultProps$props.className
  var rest = _objectWithoutPropertiesLoose$1(_defaultProps$props, _excluded$5)
  var cls = classNames(classPrefix$7, disabled && classPrefix$7 + '--disabled')
  var btnStyle = {
    color: color,
  }
  var handleClick = function handleClick(e) {
    if (!disabled && onClick) {
      onClick(e)
    }
  }
  return withNativeProps(
    props,
    /*#__PURE__*/ React__default.createElement(
      'div',
      _extends$1(
        {
          className: cls,
          style: btnStyle,
          onClick: function onClick(e) {
            return handleClick(e)
          },
        },
        rest
      ),
      children
    )
  )
}

var defaultMaskProps = {
  opacity: '0.5',
  duration: 0.3,
  visible: false,
  disableBodyScroll: true,
  closeOnOverlayClick: true,
  onClick: function onClick(event) {},
  afterClose: function afterClose() {},
  afterShow: function afterShow() {},
}
var classPrefix$6 = 'ashe-mask'
var Mask = function Mask(props) {
  var _defaultMaskProps$pro = _extends$1({}, defaultMaskProps, props),
    visible = _defaultMaskProps$pro.visible,
    duration = _defaultMaskProps$pro.duration,
    disableBodyScroll = _defaultMaskProps$pro.disableBodyScroll,
    closeOnOverlayClick = _defaultMaskProps$pro.closeOnOverlayClick,
    onClick = _defaultMaskProps$pro.onClick,
    afterShow = _defaultMaskProps$pro.afterShow,
    afterClose = _defaultMaskProps$pro.afterClose,
    children = _defaultMaskProps$pro.children
  var renderRef = useRef(true)
  var intervalCloseRef = useRef(0)
  var intervalShowRef = useRef(0)
  var lock = function lock() {
    if (disableBodyScroll && visible) {
      document.body.classList.add('ashe-overflow-hidden')
    } else {
      document.body.classList.remove('ashe-overflow-hidden')
    }
  }
  useEffect(
    function () {
      if (visible) {
        intervalShowRef.current = window.setTimeout(function () {
          afterShow && afterShow()
        }, duration * 1000 * 0.8)
      }
      lock()
    },
    [visible]
  )
  useEffect(function () {
    return function () {
      clearTimeout(intervalShowRef.current)
      clearTimeout(intervalCloseRef.current)
      document.body.classList.remove('ashe-overflow-hidden')
    }
  }, [])
  var handleClick = function handleClick(e) {
    if (closeOnOverlayClick) {
      onClick && onClick(e)
      renderRef.current = false
      intervalCloseRef.current = window.setTimeout(function () {
        afterClose && afterClose()
      }, duration * 1000 * 0.8)
    }
  }
  var cls = classNames(
    visible && classPrefix$6 + '-fade-enter-active',
    !renderRef.current && !visible && classPrefix$6 + '-fade-leave-active',
    !visible && classPrefix$6 + '--hidden',
    classPrefix$6
  )
  var styles = {
    animationDuration: duration + 's',
  }
  return withNativeProps(
    props,
    /*#__PURE__*/ React__default.createElement(
      'div',
      {
        className: cls,
        style: styles,
        onClick: handleClick,
      },
      children
    )
  )
}

var classname = { exports: {} }

var classname_production_min = {}

var hasRequiredClassname_production_min

function requireClassname_production_min() {
  if (hasRequiredClassname_production_min) return classname_production_min
  hasRequiredClassname_production_min = 1
  function r(r) {
    function e(e, i, a, o) {
      var f = i ? t + e + r.e + i : t + e,
        v = f
      if (a) {
        var u = ' ' + v + r.m
        for (var s in a)
          if (a.hasOwnProperty(s)) {
            var p = a[s]
            !0 === p ? (v += u + s) : p && (v += u + s + n + p)
          }
      }
      if (void 0 !== o)
        for (var c = 0, l = o.length; c < l; c++) {
          var y = o[c]
          if (y && 'string' == typeof y.valueOf())
            for (var g = y.valueOf().split(' '), d = 0; d < g.length; d++) {
              var h = g[d]
              h !== f && (v += ' ' + h)
            }
        }
      return v
    }
    var t = r.n || '',
      n = r.v || r.m
    return function (r, t) {
      return function (n, i, a) {
        return 'string' == typeof n
          ? Array.isArray(i)
            ? e(r, n, void 0, i)
            : e(r, n, i, a)
          : e(r, t, n, i)
      }
    }
  }
  Object.defineProperty(classname_production_min, '__esModule', { value: !0 })
  var e = r({ e: '-', m: '_' })
  ;(classname_production_min.cn = e), (classname_production_min.withNaming = r)
  return classname_production_min
}

var classname_development = {}

var hasRequiredClassname_development

function requireClassname_development() {
  if (hasRequiredClassname_development) return classname_development
  hasRequiredClassname_development = 1

  Object.defineProperty(classname_development, '__esModule', { value: true })

  /**
   * BEM className configure function.
   *
   * @example
   * ``` ts
   *
   * import { withNaming } from '@bem-react/classname';
   *
   * const cn = withNaming({ n: 'ns-', e: '__', m: '_' });
   *
   * cn('block', 'elem'); // 'ns-block__elem'
   * ```
   *
   * @param preset settings for the naming convention
   */
  function withNaming(preset) {
    var nameSpace = preset.n || ''
    var modValueDelimiter = preset.v || preset.m
    function stringify(b, e, m, mix) {
      var entityName = e ? nameSpace + b + preset.e + e : nameSpace + b
      var className = entityName
      if (m) {
        var modPrefix = ' ' + className + preset.m
        for (var k in m) {
          if (m.hasOwnProperty(k)) {
            var modVal = m[k]
            if (modVal === true) {
              className += modPrefix + k
            } else if (modVal) {
              className += modPrefix + k + modValueDelimiter + modVal
            }
          }
        }
      }
      if (mix !== undefined) {
        for (var i = 0, len = mix.length; i < len; i++) {
          var value = mix[i]
          // Skipping non-string values and empty strings
          if (!value || typeof value.valueOf() !== 'string') continue
          var mixes = value.valueOf().split(' ')
          for (var j = 0; j < mixes.length; j++) {
            var val = mixes[j]
            if (val !== entityName) {
              className += ' ' + val
            }
          }
        }
      }
      return className
    }
    return function cnGenerator(b, e) {
      return function (elemOrMods, elemModsOrBlockMix, elemMix) {
        if (typeof elemOrMods === 'string') {
          if (Array.isArray(elemModsOrBlockMix)) {
            return stringify(b, elemOrMods, undefined, elemModsOrBlockMix)
          }
          return stringify(b, elemOrMods, elemModsOrBlockMix, elemMix)
        }
        return stringify(b, e, elemOrMods, elemModsOrBlockMix)
      }
    }
  }
  /**
   * BEM Entity className initializer with React naming preset.
   *
   * @example
   * ``` ts
   *
   * import { cn } from '@bem-react/classname';
   *
   * const cat = cn('Cat');
   *
   * cat(); // Cat
   * cat({ size: 'm' }); // Cat_size_m
   * cat('Tail'); // Cat-Tail
   * cat('Tail', { length: 'small' }); // Cat-Tail_length_small
   *
   * const dogPaw = cn('Dog', 'Paw');
   *
   * dogPaw(); // Dog-Paw
   * dogPaw({ color: 'black', exists: true }); // Dog-Paw_color_black Dog-Paw_exists
   * ```
   *
   * @see https://en.bem.info/methodology/naming-convention/#react-style
   */
  var cn = withNaming({
    e: '-',
    m: '_',
  })

  classname_development.cn = cn
  classname_development.withNaming = withNaming
  return classname_development
}

;(function (module) {
  if (process.env.NODE_ENV === 'production') {
    module.exports = requireClassname_production_min()
  } else {
    module.exports = requireClassname_development()
  }
})(classname)

var cn = classname.exports.withNaming({
  n: 'ashe-',
  e: '__',
  m: '--',
  v: '-',
})

var defaultProps$g = {
  name: '',
  type: 'text',
  placeholder: '',
  defaultValue: '',
  disabled: false,
  border: true,
  center: false,
}
var b$1 = cn('input')
var Input = /*#__PURE__*/ React__default.forwardRef(function (props, ref) {
  var _defaultProps$props = _extends$1({}, defaultProps$g, props),
    defaultValue = _defaultProps$props.defaultValue,
    disabled = _defaultProps$props.disabled,
    border = _defaultProps$props.border,
    center = _defaultProps$props.center,
    placeholder = _defaultProps$props.placeholder
  var inputRef = useRef(null)
  var _useState = useState(defaultValue),
    value = _useState[0],
    setValue = _useState[1]
  var cls = classNames(
    b$1(),
    disabled && b$1() + '-disabled',
    border && b$1() + '-border',
    center && 'center'
  )
  useEffect(
    function () {
      setValue(defaultValue)
    },
    [defaultValue]
  )
  useImperativeHandle(ref, function () {
    return {
      focus: function focus() {
        var _inputRef$current
        ;(_inputRef$current = inputRef.current) == null
          ? void 0
          : _inputRef$current.focus()
      },
      blur: function blur() {
        var _inputRef$current2
        ;(_inputRef$current2 = inputRef.current) == null
          ? void 0
          : _inputRef$current2.blur()
      },
      clear: function clear() {
        setValue('')
      },
    }
  })
  useEffect(function () {}, [props.defaultValue])
  return /*#__PURE__*/ React__default.createElement(
    'div',
    {
      className: cls,
    },
    /*#__PURE__*/ React__default.createElement('input', {
      type: 'text',
      value: value,
      ref: inputRef,
      disabled: disabled,
      placeholder: placeholder,
      onChange: function onChange(e) {
        var value = e.target.value
        setValue(value)
        props.onChange == null ? void 0 : props.onChange(value)
      },
      onBlur: function onBlur(e) {
        props.onBlur == null ? void 0 : props.onBlur(e)
      },
      onFocus: function onFocus(e) {
        props.onFocus == null ? void 0 : props.onFocus(e)
      },
    })
  )
})
Input.defaultProps = defaultProps$g
Input.displayName = 'NutInput'

// 驼峰命名转小写下划线命名
// myVariableName -->my-variable-name
function camelToSnake(camelCase) {
  return camelCase.replace(/[A-Z]/g, function (match) {
    return '-' + match.toLowerCase()
  })
}

var _excluded$4 = ['children']
var defaultProps$f = {}
var ConfigContext = /*#__PURE__*/ createContext(null)
function convertThemeVarsToCSSVars(themeVars) {
  var cssVars = {}
  Object.keys(themeVars).forEach(function (key) {
    cssVars['--' + camelToSnake(key)] = themeVars[key]
  })
  return cssVars
}
var ConfigProvider = function ConfigProvider(props) {
  var _defaultProps$props = _extends$1({}, defaultProps$f, props),
    children = _defaultProps$props.children,
    config = _objectWithoutPropertiesLoose$1(_defaultProps$props, _excluded$4)
  var theme = config.theme || {}
  var style = useMemo(
    function () {
      return convertThemeVarsToCSSVars(theme)
    },
    [theme]
  )
  return /*#__PURE__*/ React__default.createElement(
    ConfigContext.Provider,
    {
      value: _extends$1({}, config),
    },
    /*#__PURE__*/ React__default.createElement(
      'div',
      {
        style: style,
      },
      ' ',
      children
    )
  )
}
ConfigProvider.defaultProps = defaultProps$f
ConfigProvider.displayName = 'AsheConfigProvider'

var defaultProps$e = {}
var Cell = function Cell(props) {
  var _defaultProps$props = _extends$1({}, defaultProps$e, props)
  _defaultProps$props.children
  return /*#__PURE__*/ React__default.createElement(
    'div',
    {
      className: 'ashe-cell',
    },
    'Cell'
  )
}
Cell.defaultProps = defaultProps$e
Cell.displayName = 'AsheCell'

var pxCheck$1 = function pxCheck(value) {
  return Number.isNaN(Number(value)) ? String(value) : value + 'px'
}

var classPrefix$5 = 'ashe-image'
var defaultProps$d = {
  src: '',
  alt: '',
  fit: 'fill',
  width: 'center',
  height: '',
  loading: true,
  error: true,
  lazy: true,
}
var Image = function Image(props) {
  var _defaultProps$props = _extends$1({}, defaultProps$d, props),
    src = _defaultProps$props.src,
    alt = _defaultProps$props.alt,
    fit = _defaultProps$props.fit,
    width = _defaultProps$props.width,
    height = _defaultProps$props.height,
    loading = _defaultProps$props.loading,
    onLoad = _defaultProps$props.onLoad,
    error = _defaultProps$props.error,
    onError = _defaultProps$props.onError,
    lazy = _defaultProps$props.lazy
  _defaultProps$props.children
  var imgRef = useRef(null)
  var _useState = useState(true),
    innerLoading = _useState[0],
    setInnerLoading = _useState[1]
  var _useState2 = useState(false),
    isError = _useState2[0],
    setIsError = _useState2[1]
  var cls = classNames(classPrefix$5)
  var containerStyle = {
    width: width ? pxCheck$1(width) : '',
    height: height ? pxCheck$1(height) : '',
  }
  var imgStyle = {
    objectFit: fit,
  }
  var renderLoading = useCallback(
    function () {
      if (!loading) return null
      if (typeof loading === 'boolean' && loading && innerLoading) {
        return /*#__PURE__*/ React__default.createElement(
          'div',
          {
            className: 'ashe-img-loading',
          },
          'loading...'
        )
      }
      if (
        /*#__PURE__*/ React__default.isValidElement(loading) &&
        innerLoading
      ) {
        return /*#__PURE__*/ React__default.createElement(
          'div',
          {
            className: 'ashe-img-loading',
          },
          loading
        )
      }
      return null
    },
    [loading, innerLoading]
  )
  var renderError = useCallback(
    function () {
      if (!isError) return null
      if (typeof error === 'boolean' && error && !innerLoading) {
        return /*#__PURE__*/ React__default.createElement(
          'div',
          {
            className: 'ashe-img-error',
          },
          '\u52A0\u8F7D\u5931\u8D25'
        )
      }
      if (/*#__PURE__*/ React__default.isValidElement(error) && !innerLoading) {
        return /*#__PURE__*/ React__default.createElement(
          'div',
          {
            className: 'nut-img-error',
          },
          error
        )
      }
      return null
    },
    [isError, innerLoading]
  )
  var handleLoad = function handleLoad() {
    setIsError(false)
    setInnerLoading(false)
    onLoad && onLoad()
  }
  var handleError = function handleError() {
    setIsError(true)
    setInnerLoading(false)
    onError && onError()
  }
  // 图片懒加载
  var observer = useRef(null)
  var initObserver = function initObserver() {
    var options = {
      threshold: [0],
      // 交会处
      rootMargin: '0px', // 对视口进行收缩和扩张
    }
    // 监听dom是否在视口内
    observer.current = new IntersectionObserver(function (entires, self) {
      // entires为监听的节点数组对象
      entires.forEach(function (item) {
        // isIntersecting是当前监听元素交叉区域是否在可视区域指定的阈值内返回的是一个布尔值
        if (item.isIntersecting) {
          setTimeout(function () {
            var img = item.target
            if (img.dataset.src) {
              img.src = img.dataset.src
              img.removeAttribute('data-src')
            }
            // 资源加载后停止监听
            resetObserver()
          }, 300)
        }
      })
    }, options)
    observer.current.observe(imgRef.current)
  }

  // 使用disconnect将取消的Observer实例中的所有监听
  var resetObserver = function resetObserver() {
    observer.current.disconnect && observer.current.disconnect()
  }
  useEffect(
    function () {
      lazy && initObserver()
      return function () {
        lazy && resetObserver()
      }
    },
    [lazy]
  )
  return withNativeProps(
    props,
    /*#__PURE__*/ React__default.createElement(
      'div',
      {
        className: cls,
        style: containerStyle,
      },
      /*#__PURE__*/ React__default.createElement('img', {
        ref: imgRef,
        className: classPrefix$5 + '--img',
        style: imgStyle,
        src: src,
        alt: alt,
        width: width,
        height: height,
        onLoad: handleLoad,
        onError: handleError,
      }),
      renderLoading(),
      renderError()
    )
  )
}
Image.defaultProps = defaultProps$d
Image.displayName = 'AsheImage'

var classPrefix$4 = 'ashe-space'
var defaultProps$c = {
  direction: 'horizontal',
}
var Space = function Space(props) {
  var _defaultProps$props = _extends$1({}, defaultProps$c, props),
    children = _defaultProps$props.children,
    onClick = _defaultProps$props.onClick,
    wrap = _defaultProps$props.wrap,
    align = _defaultProps$props.align,
    direction = _defaultProps$props.direction,
    justify = _defaultProps$props.justify
  var cls = classNames(
    classPrefix$4,
    wrap && classPrefix$4 + '-wrap',
    direction && classPrefix$4 + '-' + direction,
    align && classPrefix$4 + '-align-' + align,
    justify && classPrefix$4 + '-justify-' + justify
  )
  return withNativeProps(
    props,
    /*#__PURE__*/ React__default.createElement(
      'div',
      {
        className: cls,
        onClick: onClick,
      },
      React__default.Children.map(children, function (child) {
        return (
          child !== null &&
          child !== undefined &&
          /*#__PURE__*/ React__default.createElement(
            'div',
            {
              className: classPrefix$4 + '-item',
            },
            child
          )
        )
      })
    )
  )
}
Space.defaultProps = defaultProps$c
Space.displayName = 'AsheSpace'

var classPrefix$3 = 'ashe-grid'
var defaultProps$b = {
  columns: 3,
  gap: 0,
  center: true,
  square: false,
}
var Grid = function Grid(props) {
  var _defaultProps$props = _extends$1({}, defaultProps$b, props),
    columns = _defaultProps$props.columns,
    gap = _defaultProps$props.gap,
    center = _defaultProps$props.center,
    square = _defaultProps$props.square,
    onClick = _defaultProps$props.onClick,
    children = _defaultProps$props.children
  var cls = function cls() {
    var _classNames
    return classNames(
      classPrefix$3,
      ((_classNames = {}),
      (_classNames[classPrefix$3 + '__border'] = !gap),
      _classNames)
    )
  }
  return withNativeProps(
    props,
    /*#__PURE__*/ React__default.createElement(
      'div',
      {
        className: cls(),
        style: {
          paddingLeft: pxCheck$1(gap),
        },
      },
      React__default.Children.toArray(children)
        .filter(Boolean)
        .map(function (child, index) {
          return /*#__PURE__*/ React__default.cloneElement(child, {
            index: index,
            columns: columns,
            gap: gap,
            center: center,
            square: square,
            onClick: onClick,
          })
        })
    )
  )
}
Grid.defaultProps = defaultProps$b
Grid.displayName = 'AsheGrid'

var classPrefix$2 = 'ashe-grid-item'
var defaultProps$a = {
  text: '',
  columns: 3,
  square: false,
  gap: 0,
  index: 0,
  center: true,
}
var GridItem = function GridItem(props) {
  var _defaultProps$props = _extends$1({}, defaultProps$a, props),
    text = _defaultProps$props.text,
    style = _defaultProps$props.style,
    columns = _defaultProps$props.columns,
    square = _defaultProps$props.square,
    gap = _defaultProps$props.gap,
    center = _defaultProps$props.center,
    index = _defaultProps$props.index,
    onClick = _defaultProps$props.onClick,
    children = _defaultProps$props.children
  var cls = classNames(classPrefix$2)
  var contentCls = classNames(
    classPrefix$2 + '__content',
    center && classPrefix$2 + '__content--center',
    square && classPrefix$2 + '__content--square'
  )
  var rootStyle = function rootStyle() {
    var styles = _extends$1(
      {
        flexBasis: 100 / +columns + '%',
      },
      style
    )
    if (square) {
      styles.paddingTop = 100 / +columns + '%'
    }
    if (gap) {
      styles.paddingRight = pxCheck$1(gap)
      if (index >= Number(columns)) {
        styles.marginTop = pxCheck$1(gap)
      }
    }
    return styles
  }
  return withNativeProps(
    props,
    /*#__PURE__*/ React__default.createElement(
      'div',
      {
        className: cls,
        style: rootStyle(),
      },
      /*#__PURE__*/ React__default.createElement(
        'div',
        {
          className: contentCls,
          onClick: onClick,
        },
        children,
        text
          ? /*#__PURE__*/ React__default.createElement(
              'div',
              {
                className: classPrefix$2 + '__text',
              },
              text
            )
          : null
      )
    )
  )
}
GridItem.defaultProps = defaultProps$a
GridItem.displayName = 'AsheGridItem'

var GridNamespace = Object.assign(Grid, {
  Item: GridItem,
})

var __defProp = Object.defineProperty
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true })
}

// src/globals.ts
var globals_exports = {}
__export(globals_exports, {
  assign: () => assign,
  colors: () => colors,
  createStringInterpolator: () => createStringInterpolator,
  skipAnimation: () => skipAnimation,
  to: () => to,
  willAdvance: () => willAdvance,
})

// ../rafz/dist/react-spring_rafz.modern.mjs
var updateQueue = makeQueue()
var raf = (fn) => schedule(fn, updateQueue)
var writeQueue = makeQueue()
raf.write = (fn) => schedule(fn, writeQueue)
var onStartQueue = makeQueue()
raf.onStart = (fn) => schedule(fn, onStartQueue)
var onFrameQueue = makeQueue()
raf.onFrame = (fn) => schedule(fn, onFrameQueue)
var onFinishQueue = makeQueue()
raf.onFinish = (fn) => schedule(fn, onFinishQueue)
var timeouts = []
raf.setTimeout = (handler, ms) => {
  const time = raf.now() + ms
  const cancel = () => {
    const i = timeouts.findIndex((t) => t.cancel == cancel)
    if (~i) timeouts.splice(i, 1)
    pendingCount -= ~i ? 1 : 0
  }
  const timeout = { time, handler, cancel }
  timeouts.splice(findTimeout(time), 0, timeout)
  pendingCount += 1
  start()
  return timeout
}
var findTimeout = (time) =>
  ~(~timeouts.findIndex((t) => t.time > time) || ~timeouts.length)
raf.cancel = (fn) => {
  onStartQueue.delete(fn)
  onFrameQueue.delete(fn)
  onFinishQueue.delete(fn)
  updateQueue.delete(fn)
  writeQueue.delete(fn)
}
raf.sync = (fn) => {
  sync = true
  raf.batchedUpdates(fn)
  sync = false
}
raf.throttle = (fn) => {
  let lastArgs
  function queuedFn() {
    try {
      fn(...lastArgs)
    } finally {
      lastArgs = null
    }
  }
  function throttled(...args) {
    lastArgs = args
    raf.onStart(queuedFn)
  }
  throttled.handler = fn
  throttled.cancel = () => {
    onStartQueue.delete(queuedFn)
    lastArgs = null
  }
  return throttled
}
var nativeRaf =
  typeof window != 'undefined'
    ? window.requestAnimationFrame
    : // eslint-disable-next-line @typescript-eslint/no-empty-function
      () => {}
raf.use = (impl) => (nativeRaf = impl)
raf.now = typeof performance != 'undefined' ? () => performance.now() : Date.now
raf.batchedUpdates = (fn) => fn()
raf.catch = console.error
raf.frameLoop = 'always'
raf.advance = () => {
  if (raf.frameLoop !== 'demand') {
    console.warn(
      'Cannot call the manual advancement of rafz whilst frameLoop is not set as demand'
    )
  } else {
    update()
  }
}
var ts = -1
var pendingCount = 0
var sync = false
function schedule(fn, queue) {
  if (sync) {
    queue.delete(fn)
    fn(0)
  } else {
    queue.add(fn)
    start()
  }
}
function start() {
  if (ts < 0) {
    ts = 0
    if (raf.frameLoop !== 'demand') {
      nativeRaf(loop)
    }
  }
}
function stop() {
  ts = -1
}
function loop() {
  if (~ts) {
    nativeRaf(loop)
    raf.batchedUpdates(update)
  }
}
function update() {
  const prevTs = ts
  ts = raf.now()
  const count = findTimeout(ts)
  if (count) {
    eachSafely(timeouts.splice(0, count), (t) => t.handler())
    pendingCount -= count
  }
  if (!pendingCount) {
    stop()
    return
  }
  onStartQueue.flush()
  updateQueue.flush(prevTs ? Math.min(64, ts - prevTs) : 16.667)
  onFrameQueue.flush()
  writeQueue.flush()
  onFinishQueue.flush()
}
function makeQueue() {
  let next = /* @__PURE__ */ new Set()
  let current = next
  return {
    add(fn) {
      pendingCount += current == next && !next.has(fn) ? 1 : 0
      next.add(fn)
    },
    delete(fn) {
      pendingCount -= current == next && next.has(fn) ? 1 : 0
      return next.delete(fn)
    },
    flush(arg) {
      if (current.size) {
        next = /* @__PURE__ */ new Set()
        pendingCount -= current.size
        eachSafely(current, (fn) => fn(arg) && next.add(fn))
        pendingCount += next.size
        current = next
      }
    },
  }
}
function eachSafely(values, each2) {
  values.forEach((value) => {
    try {
      each2(value)
    } catch (e) {
      raf.catch(e)
    }
  })
}

// src/helpers.ts
function noop$1() {}
var defineHidden = (obj, key, value) =>
  Object.defineProperty(obj, key, { value, writable: true, configurable: true })
var is = {
  arr: Array.isArray,
  obj: (a) => !!a && a.constructor.name === 'Object',
  fun: (a) => typeof a === 'function',
  str: (a) => typeof a === 'string',
  num: (a) => typeof a === 'number',
  und: (a) => a === void 0,
}
function isEqual(a, b) {
  if (is.arr(a)) {
    if (!is.arr(b) || a.length !== b.length) return false
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false
    }
    return true
  }
  return a === b
}
var each = (obj, fn) => obj.forEach(fn)
function eachProp(obj, fn, ctx) {
  if (is.arr(obj)) {
    for (let i = 0; i < obj.length; i++) {
      fn.call(ctx, obj[i], `${i}`)
    }
    return
  }
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      fn.call(ctx, obj[key], key)
    }
  }
}
var toArray = (a) => (is.und(a) ? [] : is.arr(a) ? a : [a])
var isSSR = () =>
  typeof window === 'undefined' ||
  !window.navigator ||
  /ServerSideRendering|^Deno\//.test(window.navigator.userAgent)

// src/globals.ts
var createStringInterpolator
var to
var colors = null
var skipAnimation = false
var willAdvance = noop$1
var assign = (globals) => {
  if (globals.to) to = globals.to
  if (globals.now) raf.now = globals.now
  if (globals.colors !== void 0) colors = globals.colors
  if (globals.skipAnimation != null) skipAnimation = globals.skipAnimation
  if (globals.createStringInterpolator)
    createStringInterpolator = globals.createStringInterpolator
  if (globals.requestAnimationFrame) raf.use(globals.requestAnimationFrame)
  if (globals.batchedUpdates) raf.batchedUpdates = globals.batchedUpdates
  if (globals.willAdvance) willAdvance = globals.willAdvance
  if (globals.frameLoop) raf.frameLoop = globals.frameLoop
}

// src/FrameLoop.ts
var startQueue = /* @__PURE__ */ new Set()
var currentFrame = []
var prevFrame = []
var priority = 0
var frameLoop = {
  get idle() {
    return !startQueue.size && !currentFrame.length
  },
  /** Advance the given animation on every frame until idle. */
  start(animation) {
    if (priority > animation.priority) {
      startQueue.add(animation)
      raf.onStart(flushStartQueue)
    } else {
      startSafely(animation)
      raf(advance)
    }
  },
  /** Advance all animations by the given time. */
  advance,
  /** Call this when an animation's priority changes. */
  sort(animation) {
    if (priority) {
      raf.onFrame(() => frameLoop.sort(animation))
    } else {
      const prevIndex = currentFrame.indexOf(animation)
      if (~prevIndex) {
        currentFrame.splice(prevIndex, 1)
        startUnsafely(animation)
      }
    }
  },
  /**
   * Clear all animations. For testing purposes.
   *
   * ☠️ Never call this from within the frameloop.
   */
  clear() {
    currentFrame = []
    startQueue.clear()
  },
}
function flushStartQueue() {
  startQueue.forEach(startSafely)
  startQueue.clear()
  raf(advance)
}
function startSafely(animation) {
  if (!currentFrame.includes(animation)) startUnsafely(animation)
}
function startUnsafely(animation) {
  currentFrame.splice(
    findIndex(currentFrame, (other) => other.priority > animation.priority),
    0,
    animation
  )
}
function advance(dt) {
  const nextFrame = prevFrame
  for (let i = 0; i < currentFrame.length; i++) {
    const animation = currentFrame[i]
    priority = animation.priority
    if (!animation.idle) {
      willAdvance(animation)
      animation.advance(dt)
      if (!animation.idle) {
        nextFrame.push(animation)
      }
    }
  }
  priority = 0
  prevFrame = currentFrame
  prevFrame.length = 0
  currentFrame = nextFrame
  return currentFrame.length > 0
}
function findIndex(arr, test) {
  const index = arr.findIndex(test)
  return index < 0 ? arr.length : index
}

// src/colors.ts
var colors2 = {
  transparent: 0,
  aliceblue: 4042850303,
  antiquewhite: 4209760255,
  aqua: 16777215,
  aquamarine: 2147472639,
  azure: 4043309055,
  beige: 4126530815,
  bisque: 4293182719,
  black: 255,
  blanchedalmond: 4293643775,
  blue: 65535,
  blueviolet: 2318131967,
  brown: 2771004159,
  burlywood: 3736635391,
  burntsienna: 3934150143,
  cadetblue: 1604231423,
  chartreuse: 2147418367,
  chocolate: 3530104575,
  coral: 4286533887,
  cornflowerblue: 1687547391,
  cornsilk: 4294499583,
  crimson: 3692313855,
  cyan: 16777215,
  darkblue: 35839,
  darkcyan: 9145343,
  darkgoldenrod: 3095792639,
  darkgray: 2846468607,
  darkgreen: 6553855,
  darkgrey: 2846468607,
  darkkhaki: 3182914559,
  darkmagenta: 2332068863,
  darkolivegreen: 1433087999,
  darkorange: 4287365375,
  darkorchid: 2570243327,
  darkred: 2332033279,
  darksalmon: 3918953215,
  darkseagreen: 2411499519,
  darkslateblue: 1211993087,
  darkslategray: 793726975,
  darkslategrey: 793726975,
  darkturquoise: 13554175,
  darkviolet: 2483082239,
  deeppink: 4279538687,
  deepskyblue: 12582911,
  dimgray: 1768516095,
  dimgrey: 1768516095,
  dodgerblue: 512819199,
  firebrick: 2988581631,
  floralwhite: 4294635775,
  forestgreen: 579543807,
  fuchsia: 4278255615,
  gainsboro: 3705462015,
  ghostwhite: 4177068031,
  gold: 4292280575,
  goldenrod: 3668254975,
  gray: 2155905279,
  green: 8388863,
  greenyellow: 2919182335,
  grey: 2155905279,
  honeydew: 4043305215,
  hotpink: 4285117695,
  indianred: 3445382399,
  indigo: 1258324735,
  ivory: 4294963455,
  khaki: 4041641215,
  lavender: 3873897215,
  lavenderblush: 4293981695,
  lawngreen: 2096890111,
  lemonchiffon: 4294626815,
  lightblue: 2916673279,
  lightcoral: 4034953471,
  lightcyan: 3774873599,
  lightgoldenrodyellow: 4210742015,
  lightgray: 3553874943,
  lightgreen: 2431553791,
  lightgrey: 3553874943,
  lightpink: 4290167295,
  lightsalmon: 4288707327,
  lightseagreen: 548580095,
  lightskyblue: 2278488831,
  lightslategray: 2005441023,
  lightslategrey: 2005441023,
  lightsteelblue: 2965692159,
  lightyellow: 4294959359,
  lime: 16711935,
  limegreen: 852308735,
  linen: 4210091775,
  magenta: 4278255615,
  maroon: 2147483903,
  mediumaquamarine: 1724754687,
  mediumblue: 52735,
  mediumorchid: 3126187007,
  mediumpurple: 2473647103,
  mediumseagreen: 1018393087,
  mediumslateblue: 2070474495,
  mediumspringgreen: 16423679,
  mediumturquoise: 1221709055,
  mediumvioletred: 3340076543,
  midnightblue: 421097727,
  mintcream: 4127193855,
  mistyrose: 4293190143,
  moccasin: 4293178879,
  navajowhite: 4292783615,
  navy: 33023,
  oldlace: 4260751103,
  olive: 2155872511,
  olivedrab: 1804477439,
  orange: 4289003775,
  orangered: 4282712319,
  orchid: 3664828159,
  palegoldenrod: 4008225535,
  palegreen: 2566625535,
  paleturquoise: 2951671551,
  palevioletred: 3681588223,
  papayawhip: 4293907967,
  peachpuff: 4292524543,
  peru: 3448061951,
  pink: 4290825215,
  plum: 3718307327,
  powderblue: 2967529215,
  purple: 2147516671,
  rebeccapurple: 1714657791,
  red: 4278190335,
  rosybrown: 3163525119,
  royalblue: 1097458175,
  saddlebrown: 2336560127,
  salmon: 4202722047,
  sandybrown: 4104413439,
  seagreen: 780883967,
  seashell: 4294307583,
  sienna: 2689740287,
  silver: 3233857791,
  skyblue: 2278484991,
  slateblue: 1784335871,
  slategray: 1887473919,
  slategrey: 1887473919,
  snow: 4294638335,
  springgreen: 16744447,
  steelblue: 1182971135,
  tan: 3535047935,
  teal: 8421631,
  thistle: 3636451583,
  tomato: 4284696575,
  turquoise: 1088475391,
  violet: 4001558271,
  wheat: 4125012991,
  white: 4294967295,
  whitesmoke: 4126537215,
  yellow: 4294902015,
  yellowgreen: 2597139199,
}

// src/colorMatchers.ts
var NUMBER = '[-+]?\\d*\\.?\\d+'
var PERCENTAGE = NUMBER + '%'
function call$1(...parts) {
  return '\\(\\s*(' + parts.join(')\\s*,\\s*(') + ')\\s*\\)'
}
var rgb = new RegExp('rgb' + call$1(NUMBER, NUMBER, NUMBER))
var rgba = new RegExp('rgba' + call$1(NUMBER, NUMBER, NUMBER, NUMBER))
var hsl = new RegExp('hsl' + call$1(NUMBER, PERCENTAGE, PERCENTAGE))
var hsla = new RegExp('hsla' + call$1(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER))
var hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/
var hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/
var hex6 = /^#([0-9a-fA-F]{6})$/
var hex8 = /^#([0-9a-fA-F]{8})$/

// src/normalizeColor.ts
function normalizeColor(color) {
  let match
  if (typeof color === 'number') {
    return color >>> 0 === color && color >= 0 && color <= 4294967295
      ? color
      : null
  }
  if ((match = hex6.exec(color))) return parseInt(match[1] + 'ff', 16) >>> 0
  if (colors && colors[color] !== void 0) {
    return colors[color]
  }
  if ((match = rgb.exec(color))) {
    return (
      ((parse255(match[1]) << 24) | // r
        (parse255(match[2]) << 16) | // g
        (parse255(match[3]) << 8) | // b
        255) >>> // a
      0
    )
  }
  if ((match = rgba.exec(color))) {
    return (
      ((parse255(match[1]) << 24) | // r
        (parse255(match[2]) << 16) | // g
        (parse255(match[3]) << 8) | // b
        parse1(match[4])) >>> // a
      0
    )
  }
  if ((match = hex3.exec(color))) {
    return (
      parseInt(
        match[1] +
          match[1] + // r
          match[2] +
          match[2] + // g
          match[3] +
          match[3] + // b
          'ff',
        // a
        16
      ) >>> 0
    )
  }
  if ((match = hex8.exec(color))) return parseInt(match[1], 16) >>> 0
  if ((match = hex4.exec(color))) {
    return (
      parseInt(
        match[1] +
          match[1] + // r
          match[2] +
          match[2] + // g
          match[3] +
          match[3] + // b
          match[4] +
          match[4],
        // a
        16
      ) >>> 0
    )
  }
  if ((match = hsl.exec(color))) {
    return (
      (hslToRgb(
        parse360(match[1]),
        // h
        parsePercentage(match[2]),
        // s
        parsePercentage(match[3])
        // l
      ) |
        255) >>> // a
      0
    )
  }
  if ((match = hsla.exec(color))) {
    return (
      (hslToRgb(
        parse360(match[1]),
        // h
        parsePercentage(match[2]),
        // s
        parsePercentage(match[3])
        // l
      ) |
        parse1(match[4])) >>> // a
      0
    )
  }
  return null
}
function hue2rgb(p, q, t) {
  if (t < 0) t += 1
  if (t > 1) t -= 1
  if (t < 1 / 6) return p + (q - p) * 6 * t
  if (t < 1 / 2) return q
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
  return p
}
function hslToRgb(h, s, l) {
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s
  const p = 2 * l - q
  const r = hue2rgb(p, q, h + 1 / 3)
  const g = hue2rgb(p, q, h)
  const b = hue2rgb(p, q, h - 1 / 3)
  return (
    (Math.round(r * 255) << 24) |
    (Math.round(g * 255) << 16) |
    (Math.round(b * 255) << 8)
  )
}
function parse255(str) {
  const int = parseInt(str, 10)
  if (int < 0) return 0
  if (int > 255) return 255
  return int
}
function parse360(str) {
  const int = parseFloat(str)
  return (((int % 360) + 360) % 360) / 360
}
function parse1(str) {
  const num = parseFloat(str)
  if (num < 0) return 0
  if (num > 1) return 255
  return Math.round(num * 255)
}
function parsePercentage(str) {
  const int = parseFloat(str)
  if (int < 0) return 0
  if (int > 100) return 1
  return int / 100
}

// src/colorToRgba.ts
function colorToRgba(input) {
  let int32Color = normalizeColor(input)
  if (int32Color === null) return input
  int32Color = int32Color || 0
  const r = (int32Color & 4278190080) >>> 24
  const g = (int32Color & 16711680) >>> 16
  const b = (int32Color & 65280) >>> 8
  const a = (int32Color & 255) / 255
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

// src/createInterpolator.ts
var createInterpolator = (range, output, extrapolate) => {
  if (is.fun(range)) {
    return range
  }
  if (is.arr(range)) {
    return createInterpolator({
      range,
      output,
      extrapolate,
    })
  }
  if (is.str(range.output[0])) {
    return createStringInterpolator(range)
  }
  const config = range
  const outputRange = config.output
  const inputRange = config.range || [0, 1]
  const extrapolateLeft =
    config.extrapolateLeft || config.extrapolate || 'extend'
  const extrapolateRight =
    config.extrapolateRight || config.extrapolate || 'extend'
  const easing = config.easing || ((t) => t)
  return (input) => {
    const range2 = findRange(input, inputRange)
    return interpolate(
      input,
      inputRange[range2],
      inputRange[range2 + 1],
      outputRange[range2],
      outputRange[range2 + 1],
      easing,
      extrapolateLeft,
      extrapolateRight,
      config.map
    )
  }
}
function interpolate(
  input,
  inputMin,
  inputMax,
  outputMin,
  outputMax,
  easing,
  extrapolateLeft,
  extrapolateRight,
  map
) {
  let result = map ? map(input) : input
  if (result < inputMin) {
    if (extrapolateLeft === 'identity') return result
    else if (extrapolateLeft === 'clamp') result = inputMin
  }
  if (result > inputMax) {
    if (extrapolateRight === 'identity') return result
    else if (extrapolateRight === 'clamp') result = inputMax
  }
  if (outputMin === outputMax) return outputMin
  if (inputMin === inputMax) return input <= inputMin ? outputMin : outputMax
  if (inputMin === -Infinity) result = -result
  else if (inputMax === Infinity) result = result - inputMin
  else result = (result - inputMin) / (inputMax - inputMin)
  result = easing(result)
  if (outputMin === -Infinity) result = -result
  else if (outputMax === Infinity) result = result + outputMin
  else result = result * (outputMax - outputMin) + outputMin
  return result
}
function findRange(input, inputRange) {
  for (var i = 1; i < inputRange.length - 1; ++i)
    if (inputRange[i] >= input) break
  return i - 1
}

// src/fluids.ts
var $get = Symbol.for('FluidValue.get')
var $observers = Symbol.for('FluidValue.observers')
var hasFluidValue = (arg) => Boolean(arg && arg[$get])
var getFluidValue = (arg) => (arg && arg[$get] ? arg[$get]() : arg)
function callFluidObserver(observer2, event) {
  if (observer2.eventObserved) {
    observer2.eventObserved(event)
  } else {
    observer2(event)
  }
}
function callFluidObservers(target, event) {
  const observers = target[$observers]
  if (observers) {
    observers.forEach((observer2) => {
      callFluidObserver(observer2, event)
    })
  }
}
var FluidValue = class {
  constructor(get) {
    if (!get && !(get = this.get)) {
      throw Error('Unknown getter')
    }
    setFluidGetter(this, get)
  }
}
var setFluidGetter = (target, get) => setHidden(target, $get, get)
function addFluidObserver(target, observer2) {
  if (target[$get]) {
    let observers = target[$observers]
    if (!observers) {
      setHidden(target, $observers, (observers = /* @__PURE__ */ new Set()))
    }
    if (!observers.has(observer2)) {
      observers.add(observer2)
      if (target.observerAdded) {
        target.observerAdded(observers.size, observer2)
      }
    }
  }
  return observer2
}
function removeFluidObserver(target, observer2) {
  const observers = target[$observers]
  if (observers && observers.has(observer2)) {
    const count = observers.size - 1
    if (count) {
      observers.delete(observer2)
    } else {
      target[$observers] = null
    }
    if (target.observerRemoved) {
      target.observerRemoved(count, observer2)
    }
  }
}
var setHidden = (target, key, value) =>
  Object.defineProperty(target, key, {
    value,
    writable: true,
    configurable: true,
  })

// src/regexs.ts
var numberRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g
var colorRegex =
  /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi
var unitRegex = new RegExp(`(${numberRegex.source})(%|[a-z]+)`, 'i')
var rgbaRegex = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi
var cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/

// src/variableToRgba.ts
var variableToRgba = (input) => {
  const [token, fallback] = parseCSSVariable(input)
  if (!token || isSSR()) {
    return input
  }
  const value = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue(token)
  if (value) {
    return value.trim()
  } else if (fallback && fallback.startsWith('--')) {
    const value2 = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue(fallback)
    if (value2) {
      return value2
    } else {
      return input
    }
  } else if (fallback && cssVariableRegex.test(fallback)) {
    return variableToRgba(fallback)
  } else if (fallback) {
    return fallback
  }
  return input
}
var parseCSSVariable = (current) => {
  const match = cssVariableRegex.exec(current)
  if (!match) return [,]
  const [, token, fallback] = match
  return [token, fallback]
}

// src/stringInterpolation.ts
var namedColorRegex
var rgbaRound = (_, p1, p2, p3, p4) =>
  `rgba(${Math.round(p1)}, ${Math.round(p2)}, ${Math.round(p3)}, ${p4})`
var createStringInterpolator2 = (config) => {
  if (!namedColorRegex)
    namedColorRegex = colors
      ? // match color names, ignore partial matches
        new RegExp(`(${Object.keys(colors).join('|')})(?!\\w)`, 'g')
      : // never match
        /^\b$/
  const output = config.output.map((value) => {
    return getFluidValue(value)
      .replace(cssVariableRegex, variableToRgba)
      .replace(colorRegex, colorToRgba)
      .replace(namedColorRegex, colorToRgba)
  })
  const keyframes = output.map((value) => value.match(numberRegex).map(Number))
  const outputRanges = keyframes[0].map((_, i) =>
    keyframes.map((values) => {
      if (!(i in values)) {
        throw Error('The arity of each "output" value must be equal')
      }
      return values[i]
    })
  )
  const interpolators = outputRanges.map((output2) =>
    createInterpolator({ ...config, output: output2 })
  )
  return (input) => {
    const missingUnit =
      !unitRegex.test(output[0]) &&
      output.find((value) => unitRegex.test(value))?.replace(numberRegex, '')
    let i = 0
    return output[0]
      .replace(
        numberRegex,
        () => `${interpolators[i++](input)}${missingUnit || ''}`
      )
      .replace(rgbaRegex, rgbaRound)
  }
}

// src/deprecations.ts
var prefix = 'react-spring: '
var once = (fn) => {
  const func = fn
  let called = false
  if (typeof func != 'function') {
    throw new TypeError(`${prefix}once requires a function parameter`)
  }
  return (...args) => {
    if (!called) {
      func(...args)
      called = true
    }
  }
}
var warnInterpolate = once(console.warn)
function deprecateInterpolate() {
  warnInterpolate(
    `${prefix}The "interpolate" function is deprecated in v9 (use "to" instead)`
  )
}
once(console.warn)

// src/isAnimatedString.ts
function isAnimatedString(value) {
  return (
    is.str(value) &&
    (value[0] == '#' ||
      /\d/.test(value) || // Do not identify a CSS variable as an AnimatedString if its SSR
      (!isSSR() && cssVariableRegex.test(value)) ||
      value in (colors || {}))
  )
}
var useIsomorphicLayoutEffect = isSSR() ? useEffect : useLayoutEffect

// src/hooks/useIsMounted.ts
var useIsMounted = () => {
  const isMounted = useRef(false)
  useIsomorphicLayoutEffect(() => {
    isMounted.current = true
    return () => {
      isMounted.current = false
    }
  }, [])
  return isMounted
}

// src/hooks/useForceUpdate.ts
function useForceUpdate() {
  const update2 = useState()[1]
  const isMounted = useIsMounted()
  return () => {
    if (isMounted.current) {
      update2(Math.random())
    }
  }
}
function useMemoOne(getResult, inputs) {
  const [initial] = useState(() => ({
    inputs,
    result: getResult(),
  }))
  const committed = useRef()
  const prevCache = committed.current
  let cache = prevCache
  if (cache) {
    const useCache = Boolean(
      inputs && cache.inputs && areInputsEqual(inputs, cache.inputs)
    )
    if (!useCache) {
      cache = {
        inputs,
        result: getResult(),
      }
    }
  } else {
    cache = initial
  }
  useEffect(() => {
    committed.current = cache
    if (prevCache == initial) {
      initial.inputs = initial.result = void 0
    }
  }, [cache])
  return cache.result
}
function areInputsEqual(next, prev) {
  if (next.length !== prev.length) {
    return false
  }
  for (let i = 0; i < next.length; i++) {
    if (next[i] !== prev[i]) {
      return false
    }
  }
  return true
}
var useOnce = (effect) => useEffect(effect, emptyDeps)
var emptyDeps = []

// src/Animated.ts
var $node = Symbol.for('Animated:node')
var isAnimated = (value) => !!value && value[$node] === value
var getAnimated = (owner) => owner && owner[$node]
var setAnimated = (owner, node) => defineHidden(owner, $node, node)
var getPayload = (owner) => owner && owner[$node] && owner[$node].getPayload()
var Animated = class {
  constructor() {
    setAnimated(this, this)
  }
  /** Get every `AnimatedValue` used by this node. */
  getPayload() {
    return this.payload || []
  }
}
var AnimatedValue = class extends Animated {
  constructor(_value) {
    super()
    this._value = _value
    this.done = true
    this.durationProgress = 0
    if (is.num(this._value)) {
      this.lastPosition = this._value
    }
  }
  /** @internal */
  static create(value) {
    return new AnimatedValue(value)
  }
  getPayload() {
    return [this]
  }
  getValue() {
    return this._value
  }
  setValue(value, step) {
    if (is.num(value)) {
      this.lastPosition = value
      if (step) {
        value = Math.round(value / step) * step
        if (this.done) {
          this.lastPosition = value
        }
      }
    }
    if (this._value === value) {
      return false
    }
    this._value = value
    return true
  }
  reset() {
    const { done } = this
    this.done = false
    if (is.num(this._value)) {
      this.elapsedTime = 0
      this.durationProgress = 0
      this.lastPosition = this._value
      if (done) this.lastVelocity = null
      this.v0 = null
    }
  }
}
var AnimatedString = class extends AnimatedValue {
  constructor(value) {
    super(0)
    this._string = null
    this._toString = createInterpolator({
      output: [value, value],
    })
  }
  /** @internal */
  static create(value) {
    return new AnimatedString(value)
  }
  getValue() {
    const value = this._string
    return value == null ? (this._string = this._toString(this._value)) : value
  }
  setValue(value) {
    if (is.str(value)) {
      if (value == this._string) {
        return false
      }
      this._string = value
      this._value = 1
    } else if (super.setValue(value)) {
      this._string = null
    } else {
      return false
    }
    return true
  }
  reset(goal) {
    if (goal) {
      this._toString = createInterpolator({
        output: [this.getValue(), goal],
      })
    }
    this._value = 0
    super.reset()
  }
}

// src/context.ts
var TreeContext = { dependencies: null }

// src/AnimatedObject.ts
var AnimatedObject = class extends Animated {
  constructor(source) {
    super()
    this.source = source
    this.setValue(source)
  }
  getValue(animated) {
    const values = {}
    eachProp(this.source, (source, key) => {
      if (isAnimated(source)) {
        values[key] = source.getValue(animated)
      } else if (hasFluidValue(source)) {
        values[key] = getFluidValue(source)
      } else if (!animated) {
        values[key] = source
      }
    })
    return values
  }
  /** Replace the raw object data */
  setValue(source) {
    this.source = source
    this.payload = this._makePayload(source)
  }
  reset() {
    if (this.payload) {
      each(this.payload, (node) => node.reset())
    }
  }
  /** Create a payload set. */
  _makePayload(source) {
    if (source) {
      const payload = /* @__PURE__ */ new Set()
      eachProp(source, this._addToPayload, payload)
      return Array.from(payload)
    }
  }
  /** Add to a payload set. */
  _addToPayload(source) {
    if (TreeContext.dependencies && hasFluidValue(source)) {
      TreeContext.dependencies.add(source)
    }
    const payload = getPayload(source)
    if (payload) {
      each(payload, (node) => this.add(node))
    }
  }
}

// src/AnimatedArray.ts
var AnimatedArray = class extends AnimatedObject {
  constructor(source) {
    super(source)
  }
  /** @internal */
  static create(source) {
    return new AnimatedArray(source)
  }
  getValue() {
    return this.source.map((node) => node.getValue())
  }
  setValue(source) {
    const payload = this.getPayload()
    if (source.length == payload.length) {
      return payload.map((node, i) => node.setValue(source[i])).some(Boolean)
    }
    super.setValue(source.map(makeAnimated))
    return true
  }
}
function makeAnimated(value) {
  const nodeType = isAnimatedString(value) ? AnimatedString : AnimatedValue
  return nodeType.create(value)
}
function getAnimatedType(value) {
  const parentNode = getAnimated(value)
  return parentNode
    ? parentNode.constructor
    : is.arr(value)
    ? AnimatedArray
    : isAnimatedString(value)
    ? AnimatedString
    : AnimatedValue
}
var withAnimated = (Component, host) => {
  const hasInstance =
    // Function components must use "forwardRef" to avoid being
    // re-rendered on every animation frame.
    !is.fun(Component) ||
    (Component.prototype && Component.prototype.isReactComponent)
  return forwardRef((givenProps, givenRef) => {
    const instanceRef = useRef(null)
    const ref =
      hasInstance && // eslint-disable-next-line react-hooks/rules-of-hooks
      useCallback(
        (value) => {
          instanceRef.current = updateRef(givenRef, value)
        },
        [givenRef]
      )
    const [props, deps] = getAnimatedState(givenProps, host)
    const forceUpdate = useForceUpdate()
    const callback = () => {
      const instance = instanceRef.current
      if (hasInstance && !instance) {
        return
      }
      const didUpdate = instance
        ? host.applyAnimatedValues(instance, props.getValue(true))
        : false
      if (didUpdate === false) {
        forceUpdate()
      }
    }
    const observer = new PropsObserver(callback, deps)
    const observerRef = useRef()
    useIsomorphicLayoutEffect(() => {
      observerRef.current = observer
      each(deps, (dep) => addFluidObserver(dep, observer))
      return () => {
        if (observerRef.current) {
          each(observerRef.current.deps, (dep) =>
            removeFluidObserver(dep, observerRef.current)
          )
          raf.cancel(observerRef.current.update)
        }
      }
    })
    useEffect(callback, [])
    useOnce(() => () => {
      const observer2 = observerRef.current
      each(observer2.deps, (dep) => removeFluidObserver(dep, observer2))
    })
    const usedProps = host.getComponentProps(props.getValue())
    return /* @__PURE__ */ React.createElement(Component, { ...usedProps, ref })
  })
}
var PropsObserver = class {
  constructor(update, deps) {
    this.update = update
    this.deps = deps
  }
  eventObserved(event) {
    if (event.type == 'change') {
      raf.write(this.update)
    }
  }
}
function getAnimatedState(props, host) {
  const dependencies = /* @__PURE__ */ new Set()
  TreeContext.dependencies = dependencies
  if (props.style)
    props = {
      ...props,
      style: host.createAnimatedStyle(props.style),
    }
  props = new AnimatedObject(props)
  TreeContext.dependencies = null
  return [props, dependencies]
}
function updateRef(ref, value) {
  if (ref) {
    if (is.fun(ref)) ref(value)
    else ref.current = value
  }
  return value
}

// src/createHost.ts
var cacheKey = Symbol.for('AnimatedComponent')
var createHost = (
  components,
  {
    applyAnimatedValues = () => false,
    createAnimatedStyle = (style) => new AnimatedObject(style),
    getComponentProps = (props) => props,
  } = {}
) => {
  const hostConfig = {
    applyAnimatedValues,
    createAnimatedStyle,
    getComponentProps,
  }
  const animated = (Component) => {
    const displayName = getDisplayName(Component) || 'Anonymous'
    if (is.str(Component)) {
      Component =
        animated[Component] ||
        (animated[Component] = withAnimated(Component, hostConfig))
    } else {
      Component =
        Component[cacheKey] ||
        (Component[cacheKey] = withAnimated(Component, hostConfig))
    }
    Component.displayName = `Animated(${displayName})`
    return Component
  }
  eachProp(components, (Component, key) => {
    if (is.arr(components)) {
      key = getDisplayName(Component)
    }
    animated[key] = animated(Component)
  })
  return {
    animated,
  }
}
var getDisplayName = (arg) =>
  is.str(arg)
    ? arg
    : arg && is.str(arg.displayName)
    ? arg.displayName
    : (is.fun(arg) && arg.name) || null

// src/hooks/useChain.ts
var isFrameValue = (value) => value instanceof FrameValue
var nextId = 1
var FrameValue = class extends FluidValue {
  constructor() {
    super(...arguments)
    this.id = nextId++
    this._priority = 0
  }
  get priority() {
    return this._priority
  }
  set priority(priority) {
    if (this._priority != priority) {
      this._priority = priority
      this._onPriorityChange(priority)
    }
  }
  /** Get the current value */
  get() {
    const node = getAnimated(this)
    return node && node.getValue()
  }
  /** Create a spring that maps our value to another value */
  to(...args) {
    return globals_exports.to(this, args)
  }
  /** @deprecated Use the `to` method instead. */
  interpolate(...args) {
    deprecateInterpolate()
    return globals_exports.to(this, args)
  }
  toJSON() {
    return this.get()
  }
  observerAdded(count) {
    if (count == 1) this._attach()
  }
  observerRemoved(count) {
    if (count == 0) this._detach()
  }
  /** Called when the first child is added. */
  _attach() {}
  /** Called when the last child is removed. */
  _detach() {}
  /** Tell our children about our new value */
  _onChange(value, idle = false) {
    callFluidObservers(this, {
      type: 'change',
      parent: this,
      value,
      idle,
    })
  }
  /** Tell our children about our new priority */
  _onPriorityChange(priority) {
    if (!this.idle) {
      frameLoop.sort(this)
    }
    callFluidObservers(this, {
      type: 'priority',
      parent: this,
      priority,
    })
  }
}
var SpringContext = ({ children, ...props }) => {
  const inherited = useContext(ctx)
  const pause = props.pause || !!inherited.pause,
    immediate = props.immediate || !!inherited.immediate
  props = useMemoOne(() => ({ pause, immediate }), [pause, immediate])
  const { Provider } = ctx
  return /* @__PURE__ */ React.createElement(
    Provider,
    { value: props },
    children
  )
}
var ctx = makeContext(SpringContext, {})
SpringContext.Provider = ctx.Provider
SpringContext.Consumer = ctx.Consumer
function makeContext(target, init) {
  Object.assign(target, React.createContext(init))
  target.Provider._context = target
  target.Consumer._context = target
  return target
}
var Interpolation = class extends FrameValue {
  constructor(source, args) {
    super()
    this.source = source
    /** Equals false when in the frameloop */
    this.idle = true
    /** The inputs which are currently animating */
    this._active = /* @__PURE__ */ new Set()
    this.calc = createInterpolator(...args)
    const value = this._get()
    const nodeType = getAnimatedType(value)
    setAnimated(this, nodeType.create(value))
  }
  advance(_dt) {
    const value = this._get()
    const oldValue = this.get()
    if (!isEqual(value, oldValue)) {
      getAnimated(this).setValue(value)
      this._onChange(value, this.idle)
    }
    if (!this.idle && checkIdle(this._active)) {
      becomeIdle(this)
    }
  }
  _get() {
    const inputs = is.arr(this.source)
      ? this.source.map(getFluidValue)
      : toArray(getFluidValue(this.source))
    return this.calc(...inputs)
  }
  _start() {
    if (this.idle && !checkIdle(this._active)) {
      this.idle = false
      each(getPayload(this), (node) => {
        node.done = false
      })
      if (globals_exports.skipAnimation) {
        raf.batchedUpdates(() => this.advance())
        becomeIdle(this)
      } else {
        frameLoop.start(this)
      }
    }
  }
  // Observe our sources only when we're observed.
  _attach() {
    let priority = 1
    each(toArray(this.source), (source) => {
      if (hasFluidValue(source)) {
        addFluidObserver(source, this)
      }
      if (isFrameValue(source)) {
        if (!source.idle) {
          this._active.add(source)
        }
        priority = Math.max(priority, source.priority + 1)
      }
    })
    this.priority = priority
    this._start()
  }
  // Stop observing our sources once we have no observers.
  _detach() {
    each(toArray(this.source), (source) => {
      if (hasFluidValue(source)) {
        removeFluidObserver(source, this)
      }
    })
    this._active.clear()
    becomeIdle(this)
  }
  /** @internal */
  eventObserved(event) {
    if (event.type == 'change') {
      if (event.idle) {
        this.advance()
      } else {
        this._active.add(event.parent)
        this._start()
      }
    } else if (event.type == 'idle') {
      this._active.delete(event.parent)
    } else if (event.type == 'priority') {
      this.priority = toArray(this.source).reduce(
        (highest, parent) =>
          Math.max(highest, (isFrameValue(parent) ? parent.priority : 0) + 1),
        0
      )
    }
  }
}
function isIdle(source) {
  return source.idle !== false
}
function checkIdle(active) {
  return !active.size || Array.from(active).every(isIdle)
}
function becomeIdle(self) {
  if (!self.idle) {
    self.idle = true
    each(getPayload(self), (node) => {
      node.done = true
    })
    callFluidObservers(self, {
      type: 'idle',
      parent: self,
    })
  }
}
globals_exports.assign({
  createStringInterpolator: createStringInterpolator2,
  to: (source, args) => new Interpolation(source, args),
})

// src/index.ts

// src/applyAnimatedValues.ts
var isCustomPropRE = /^--/
function dangerousStyleValue(name, value) {
  if (value == null || typeof value === 'boolean' || value === '') return ''
  if (
    typeof value === 'number' &&
    value !== 0 &&
    !isCustomPropRE.test(name) &&
    !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])
  )
    return value + 'px'
  return ('' + value).trim()
}
var attributeCache = {}
function applyAnimatedValues(instance, props) {
  if (!instance.nodeType || !instance.setAttribute) {
    return false
  }
  const isFilterElement =
    instance.nodeName === 'filter' ||
    (instance.parentNode && instance.parentNode.nodeName === 'filter')
  const { style, children, scrollTop, scrollLeft, viewBox, ...attributes } =
    props
  const values = Object.values(attributes)
  const names = Object.keys(attributes).map((name) =>
    isFilterElement || instance.hasAttribute(name)
      ? name
      : attributeCache[name] ||
        (attributeCache[name] = name.replace(
          /([A-Z])/g,
          // Attributes are written in dash case
          (n) => '-' + n.toLowerCase()
        ))
  )
  if (children !== void 0) {
    instance.textContent = children
  }
  for (const name in style) {
    if (style.hasOwnProperty(name)) {
      const value = dangerousStyleValue(name, style[name])
      if (isCustomPropRE.test(name)) {
        instance.style.setProperty(name, value)
      } else {
        instance.style[name] = value
      }
    }
  }
  names.forEach((name, i) => {
    instance.setAttribute(name, values[i])
  })
  if (scrollTop !== void 0) {
    instance.scrollTop = scrollTop
  }
  if (scrollLeft !== void 0) {
    instance.scrollLeft = scrollLeft
  }
  if (viewBox !== void 0) {
    instance.setAttribute('viewBox', viewBox)
  }
}
var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true,
}
var prefixKey = (prefix, key) =>
  prefix + key.charAt(0).toUpperCase() + key.substring(1)
var prefixes = ['Webkit', 'Ms', 'Moz', 'O']
isUnitlessNumber = Object.keys(isUnitlessNumber).reduce((acc, prop) => {
  prefixes.forEach((prefix) => (acc[prefixKey(prefix, prop)] = acc[prop]))
  return acc
}, isUnitlessNumber)
var domTransforms = /^(matrix|translate|scale|rotate|skew)/
var pxTransforms = /^(translate)/
var degTransforms = /^(rotate|skew)/
var addUnit = (value, unit) =>
  is.num(value) && value !== 0 ? value + unit : value
var isValueIdentity = (value, id) =>
  is.arr(value)
    ? value.every((v) => isValueIdentity(v, id))
    : is.num(value)
    ? value === id
    : parseFloat(value) === id
var AnimatedStyle = class extends AnimatedObject {
  constructor({ x, y, z, ...style }) {
    const inputs = []
    const transforms = []
    if (x || y || z) {
      inputs.push([x || 0, y || 0, z || 0])
      transforms.push((xyz) => [
        `translate3d(${xyz.map((v) => addUnit(v, 'px')).join(',')})`,
        // prettier-ignore
        isValueIdentity(xyz, 0),
      ])
    }
    eachProp(style, (value, key) => {
      if (key === 'transform') {
        inputs.push([value || ''])
        transforms.push((transform) => [transform, transform === ''])
      } else if (domTransforms.test(key)) {
        delete style[key]
        if (is.und(value)) return
        const unit = pxTransforms.test(key)
          ? 'px'
          : degTransforms.test(key)
          ? 'deg'
          : ''
        inputs.push(toArray(value))
        transforms.push(
          key === 'rotate3d'
            ? ([x2, y2, z2, deg]) => [
                `rotate3d(${x2},${y2},${z2},${addUnit(deg, unit)})`,
                isValueIdentity(deg, 0),
              ]
            : (input) => [
                `${key}(${input.map((v) => addUnit(v, unit)).join(',')})`,
                isValueIdentity(input, key.startsWith('scale') ? 1 : 0),
              ]
        )
      }
    })
    if (inputs.length) {
      style.transform = new FluidTransform(inputs, transforms)
    }
    super(style)
  }
}
var FluidTransform = class extends FluidValue {
  constructor(inputs, transforms) {
    super()
    this.inputs = inputs
    this.transforms = transforms
    this._value = null
  }
  get() {
    return this._value || (this._value = this._get())
  }
  _get() {
    let transform = ''
    let identity = true
    each(this.inputs, (input, i) => {
      const arg1 = getFluidValue(input[0])
      const [t, id] = this.transforms[i](
        is.arr(arg1) ? arg1 : input.map(getFluidValue)
      )
      transform += ' ' + t
      identity = identity && id
    })
    return identity ? 'none' : transform
  }
  // Start observing our inputs once we have an observer.
  observerAdded(count) {
    if (count == 1)
      each(this.inputs, (input) =>
        each(
          input,
          (value) => hasFluidValue(value) && addFluidObserver(value, this)
        )
      )
  }
  // Stop observing our inputs once we have no observers.
  observerRemoved(count) {
    if (count == 0)
      each(this.inputs, (input) =>
        each(
          input,
          (value) => hasFluidValue(value) && removeFluidObserver(value, this)
        )
      )
  }
  eventObserved(event) {
    if (event.type == 'change') {
      this._value = null
    }
    callFluidObservers(this, event)
  }
}

// src/primitives.ts
var primitives = [
  'a',
  'abbr',
  'address',
  'area',
  'article',
  'aside',
  'audio',
  'b',
  'base',
  'bdi',
  'bdo',
  'big',
  'blockquote',
  'body',
  'br',
  'button',
  'canvas',
  'caption',
  'cite',
  'code',
  'col',
  'colgroup',
  'data',
  'datalist',
  'dd',
  'del',
  'details',
  'dfn',
  'dialog',
  'div',
  'dl',
  'dt',
  'em',
  'embed',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hgroup',
  'hr',
  'html',
  'i',
  'iframe',
  'img',
  'input',
  'ins',
  'kbd',
  'keygen',
  'label',
  'legend',
  'li',
  'link',
  'main',
  'map',
  'mark',
  'menu',
  'menuitem',
  'meta',
  'meter',
  'nav',
  'noscript',
  'object',
  'ol',
  'optgroup',
  'option',
  'output',
  'p',
  'param',
  'picture',
  'pre',
  'progress',
  'q',
  'rp',
  'rt',
  'ruby',
  's',
  'samp',
  'script',
  'section',
  'select',
  'small',
  'source',
  'span',
  'strong',
  'style',
  'sub',
  'summary',
  'sup',
  'table',
  'tbody',
  'td',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'time',
  'title',
  'tr',
  'track',
  'u',
  'ul',
  'var',
  'video',
  'wbr',
  // SVG
  'circle',
  'clipPath',
  'defs',
  'ellipse',
  'foreignObject',
  'g',
  'image',
  'line',
  'linearGradient',
  'mask',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'radialGradient',
  'rect',
  'stop',
  'svg',
  'text',
  'tspan',
]
globals_exports.assign({
  batchedUpdates: unstable_batchedUpdates,
  createStringInterpolator: createStringInterpolator2,
  colors: colors2,
})
var host = createHost(primitives, {
  applyAnimatedValues,
  createAnimatedStyle: (style) => new AnimatedStyle(style),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getComponentProps: ({ scrollTop, scrollLeft, ...props }) => props,
})
var animated = host.animated

function clamp(v, min, max) {
  return Math.max(min, Math.min(v, max))
}
const V = {
  toVector(v, fallback) {
    if (v === undefined) v = fallback
    return Array.isArray(v) ? v : [v, v]
  },
  add(v1, v2) {
    return [v1[0] + v2[0], v1[1] + v2[1]]
  },
  sub(v1, v2) {
    return [v1[0] - v2[0], v1[1] - v2[1]]
  },
  addTo(v1, v2) {
    v1[0] += v2[0]
    v1[1] += v2[1]
  },
  subTo(v1, v2) {
    v1[0] -= v2[0]
    v1[1] -= v2[1]
  },
}
function rubberband(distance, dimension, constant) {
  if (dimension === 0 || Math.abs(dimension) === Infinity)
    return Math.pow(distance, constant * 5)
  return (distance * dimension * constant) / (dimension + constant * distance)
}
function rubberbandIfOutOfBounds(position, min, max, constant = 0.15) {
  if (constant === 0) return clamp(position, min, max)
  if (position < min)
    return -rubberband(min - position, max - min, constant) + min
  if (position > max)
    return +rubberband(position - max, max - min, constant) + max
  return position
}
function computeRubberband(bounds, [Vx, Vy], [Rx, Ry]) {
  const [[X0, X1], [Y0, Y1]] = bounds
  return [
    rubberbandIfOutOfBounds(Vx, X0, X1, Rx),
    rubberbandIfOutOfBounds(Vy, Y0, Y1, Ry),
  ]
}

function _toPrimitive(input, hint) {
  if (typeof input !== 'object' || input === null) return input
  var prim = input[Symbol.toPrimitive]
  if (prim !== undefined) {
    var res = prim.call(input, hint || 'default')
    if (typeof res !== 'object') return res
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (hint === 'string' ? String : Number)(input)
}

function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, 'string')
  return typeof key === 'symbol' ? key : String(key)
}

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key)
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    })
  } else {
    obj[key] = value
  }
  return obj
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object)
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object)
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable
      })),
      keys.push.apply(keys, symbols)
  }
  return keys
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {}
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key])
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source)
        )
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key)
          )
        })
  }
  return target
}

const EVENT_TYPE_MAP = {
  pointer: {
    start: 'down',
    change: 'move',
    end: 'up',
  },
  mouse: {
    start: 'down',
    change: 'move',
    end: 'up',
  },
  touch: {
    start: 'start',
    change: 'move',
    end: 'end',
  },
  gesture: {
    start: 'start',
    change: 'change',
    end: 'end',
  },
}
function capitalize(string) {
  if (!string) return ''
  return string[0].toUpperCase() + string.slice(1)
}
const actionsWithoutCaptureSupported = ['enter', 'leave']
function hasCapture(capture = false, actionKey) {
  return capture && !actionsWithoutCaptureSupported.includes(actionKey)
}
function toHandlerProp(device, action = '', capture = false) {
  const deviceProps = EVENT_TYPE_MAP[device]
  const actionKey = deviceProps ? deviceProps[action] || action : action
  return (
    'on' +
    capitalize(device) +
    capitalize(actionKey) +
    (hasCapture(capture, actionKey) ? 'Capture' : '')
  )
}
const pointerCaptureEvents = ['gotpointercapture', 'lostpointercapture']
function parseProp(prop) {
  let eventKey = prop.substring(2).toLowerCase()
  const passive = !!~eventKey.indexOf('passive')
  if (passive) eventKey = eventKey.replace('passive', '')
  const captureKey = pointerCaptureEvents.includes(eventKey)
    ? 'capturecapture'
    : 'capture'
  const capture = !!~eventKey.indexOf(captureKey)
  if (capture) eventKey = eventKey.replace('capture', '')
  return {
    device: eventKey,
    capture,
    passive,
  }
}
function toDomEventType(device, action = '') {
  const deviceProps = EVENT_TYPE_MAP[device]
  const actionKey = deviceProps ? deviceProps[action] || action : action
  return device + actionKey
}
function isTouch(event) {
  return 'touches' in event
}
function getPointerType(event) {
  if (isTouch(event)) return 'touch'
  if ('pointerType' in event) return event.pointerType
  return 'mouse'
}
function getCurrentTargetTouchList(event) {
  return Array.from(event.touches).filter((e) => {
    var _event$currentTarget, _event$currentTarget$
    return (
      e.target === event.currentTarget ||
      ((_event$currentTarget = event.currentTarget) === null ||
      _event$currentTarget === void 0
        ? void 0
        : (_event$currentTarget$ = _event$currentTarget.contains) === null ||
          _event$currentTarget$ === void 0
        ? void 0
        : _event$currentTarget$.call(_event$currentTarget, e.target))
    )
  })
}
function getTouchList(event) {
  return event.type === 'touchend' || event.type === 'touchcancel'
    ? event.changedTouches
    : event.targetTouches
}
function getValueEvent(event) {
  return isTouch(event) ? getTouchList(event)[0] : event
}
function distanceAngle(P1, P2) {
  try {
    const dx = P2.clientX - P1.clientX
    const dy = P2.clientY - P1.clientY
    const cx = (P2.clientX + P1.clientX) / 2
    const cy = (P2.clientY + P1.clientY) / 2
    const distance = Math.hypot(dx, dy)
    const angle = -(Math.atan2(dx, dy) * 180) / Math.PI
    const origin = [cx, cy]
    return {
      angle,
      distance,
      origin,
    }
  } catch (_unused) {}
  return null
}
function touchIds(event) {
  return getCurrentTargetTouchList(event).map((touch) => touch.identifier)
}
function touchDistanceAngle(event, ids) {
  const [P1, P2] = Array.from(event.touches).filter((touch) =>
    ids.includes(touch.identifier)
  )
  return distanceAngle(P1, P2)
}
function pointerId(event) {
  const valueEvent = getValueEvent(event)
  return isTouch(event) ? valueEvent.identifier : valueEvent.pointerId
}
function pointerValues(event) {
  const valueEvent = getValueEvent(event)
  return [valueEvent.clientX, valueEvent.clientY]
}
const LINE_HEIGHT = 40
const PAGE_HEIGHT = 800
function wheelValues(event) {
  let { deltaX, deltaY, deltaMode } = event
  if (deltaMode === 1) {
    deltaX *= LINE_HEIGHT
    deltaY *= LINE_HEIGHT
  } else if (deltaMode === 2) {
    deltaX *= PAGE_HEIGHT
    deltaY *= PAGE_HEIGHT
  }
  return [deltaX, deltaY]
}
function scrollValues(event) {
  var _ref, _ref2
  const { scrollX, scrollY, scrollLeft, scrollTop } = event.currentTarget
  return [
    (_ref = scrollX !== null && scrollX !== void 0 ? scrollX : scrollLeft) !==
      null && _ref !== void 0
      ? _ref
      : 0,
    (_ref2 = scrollY !== null && scrollY !== void 0 ? scrollY : scrollTop) !==
      null && _ref2 !== void 0
      ? _ref2
      : 0,
  ]
}
function getEventDetails(event) {
  const payload = {}
  if ('buttons' in event) payload.buttons = event.buttons
  if ('shiftKey' in event) {
    const { shiftKey, altKey, metaKey, ctrlKey } = event
    Object.assign(payload, {
      shiftKey,
      altKey,
      metaKey,
      ctrlKey,
    })
  }
  return payload
}

function call(v, ...args) {
  if (typeof v === 'function') {
    return v(...args)
  } else {
    return v
  }
}
function noop() {}
function chain(...fns) {
  if (fns.length === 0) return noop
  if (fns.length === 1) return fns[0]
  return function () {
    let result
    for (const fn of fns) {
      result = fn.apply(this, arguments) || result
    }
    return result
  }
}
function assignDefault(value, fallback) {
  return Object.assign({}, fallback, value || {})
}

const BEFORE_LAST_KINEMATICS_DELAY = 32
class Engine {
  constructor(ctrl, args, key) {
    this.ctrl = ctrl
    this.args = args
    this.key = key
    if (!this.state) {
      this.state = {}
      this.computeValues([0, 0])
      this.computeInitial()
      if (this.init) this.init()
      this.reset()
    }
  }
  get state() {
    return this.ctrl.state[this.key]
  }
  set state(state) {
    this.ctrl.state[this.key] = state
  }
  get shared() {
    return this.ctrl.state.shared
  }
  get eventStore() {
    return this.ctrl.gestureEventStores[this.key]
  }
  get timeoutStore() {
    return this.ctrl.gestureTimeoutStores[this.key]
  }
  get config() {
    return this.ctrl.config[this.key]
  }
  get sharedConfig() {
    return this.ctrl.config.shared
  }
  get handler() {
    return this.ctrl.handlers[this.key]
  }
  reset() {
    const { state, shared, ingKey, args } = this
    shared[ingKey] =
      state._active =
      state.active =
      state._blocked =
      state._force =
        false
    state._step = [false, false]
    state.intentional = false
    state._movement = [0, 0]
    state._distance = [0, 0]
    state._direction = [0, 0]
    state._delta = [0, 0]
    state._bounds = [
      [-Infinity, Infinity],
      [-Infinity, Infinity],
    ]
    state.args = args
    state.axis = undefined
    state.memo = undefined
    state.elapsedTime = state.timeDelta = 0
    state.direction = [0, 0]
    state.distance = [0, 0]
    state.overflow = [0, 0]
    state._movementBound = [false, false]
    state.velocity = [0, 0]
    state.movement = [0, 0]
    state.delta = [0, 0]
    state.timeStamp = 0
  }
  start(event) {
    const state = this.state
    const config = this.config
    if (!state._active) {
      this.reset()
      this.computeInitial()
      state._active = true
      state.target = event.target
      state.currentTarget = event.currentTarget
      state.lastOffset = config.from ? call(config.from, state) : state.offset
      state.offset = state.lastOffset
      state.startTime = state.timeStamp = event.timeStamp
    }
  }
  computeValues(values) {
    const state = this.state
    state._values = values
    state.values = this.config.transform(values)
  }
  computeInitial() {
    const state = this.state
    state._initial = state._values
    state.initial = state.values
  }
  compute(event) {
    const { state, config, shared } = this
    state.args = this.args
    let dt = 0
    if (event) {
      state.event = event
      if (config.preventDefault && event.cancelable)
        state.event.preventDefault()
      state.type = event.type
      shared.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size
      shared.locked = !!document.pointerLockElement
      Object.assign(shared, getEventDetails(event))
      shared.down = shared.pressed =
        shared.buttons % 2 === 1 || shared.touches > 0
      dt = event.timeStamp - state.timeStamp
      state.timeStamp = event.timeStamp
      state.elapsedTime = state.timeStamp - state.startTime
    }
    if (state._active) {
      const _absoluteDelta = state._delta.map(Math.abs)
      V.addTo(state._distance, _absoluteDelta)
    }
    if (this.axisIntent) this.axisIntent(event)
    const [_m0, _m1] = state._movement
    const [t0, t1] = config.threshold
    const { _step, values } = state
    if (config.hasCustomTransform) {
      if (_step[0] === false) _step[0] = Math.abs(_m0) >= t0 && values[0]
      if (_step[1] === false) _step[1] = Math.abs(_m1) >= t1 && values[1]
    } else {
      if (_step[0] === false)
        _step[0] = Math.abs(_m0) >= t0 && Math.sign(_m0) * t0
      if (_step[1] === false)
        _step[1] = Math.abs(_m1) >= t1 && Math.sign(_m1) * t1
    }
    state.intentional = _step[0] !== false || _step[1] !== false
    if (!state.intentional) return
    const movement = [0, 0]
    if (config.hasCustomTransform) {
      const [v0, v1] = values
      movement[0] = _step[0] !== false ? v0 - _step[0] : 0
      movement[1] = _step[1] !== false ? v1 - _step[1] : 0
    } else {
      movement[0] = _step[0] !== false ? _m0 - _step[0] : 0
      movement[1] = _step[1] !== false ? _m1 - _step[1] : 0
    }
    if (this.restrictToAxis && !state._blocked) this.restrictToAxis(movement)
    const previousOffset = state.offset
    const gestureIsActive = (state._active && !state._blocked) || state.active
    if (gestureIsActive) {
      state.first = state._active && !state.active
      state.last = !state._active && state.active
      state.active = shared[this.ingKey] = state._active
      if (event) {
        if (state.first) {
          if ('bounds' in config) state._bounds = call(config.bounds, state)
          if (this.setup) this.setup()
        }
        state.movement = movement
        this.computeOffset()
      }
    }
    const [ox, oy] = state.offset
    const [[x0, x1], [y0, y1]] = state._bounds
    state.overflow = [
      ox < x0 ? -1 : ox > x1 ? 1 : 0,
      oy < y0 ? -1 : oy > y1 ? 1 : 0,
    ]
    state._movementBound[0] = state.overflow[0]
      ? state._movementBound[0] === false
        ? state._movement[0]
        : state._movementBound[0]
      : false
    state._movementBound[1] = state.overflow[1]
      ? state._movementBound[1] === false
        ? state._movement[1]
        : state._movementBound[1]
      : false
    const rubberband = state._active ? config.rubberband || [0, 0] : [0, 0]
    state.offset = computeRubberband(state._bounds, state.offset, rubberband)
    state.delta = V.sub(state.offset, previousOffset)
    this.computeMovement()
    if (gestureIsActive && (!state.last || dt > BEFORE_LAST_KINEMATICS_DELAY)) {
      state.delta = V.sub(state.offset, previousOffset)
      const absoluteDelta = state.delta.map(Math.abs)
      V.addTo(state.distance, absoluteDelta)
      state.direction = state.delta.map(Math.sign)
      state._direction = state._delta.map(Math.sign)
      if (!state.first && dt > 0) {
        state.velocity = [absoluteDelta[0] / dt, absoluteDelta[1] / dt]
        state.timeDelta = dt
      }
    }
  }
  emit() {
    const state = this.state
    const shared = this.shared
    const config = this.config
    if (!state._active) this.clean()
    if (
      (state._blocked || !state.intentional) &&
      !state._force &&
      !config.triggerAllEvents
    )
      return
    const memo = this.handler(
      _objectSpread2(
        _objectSpread2(_objectSpread2({}, shared), state),
        {},
        {
          [this.aliasKey]: state.values,
        }
      )
    )
    if (memo !== undefined) state.memo = memo
  }
  clean() {
    this.eventStore.clean()
    this.timeoutStore.clean()
  }
}

function selectAxis([dx, dy], threshold) {
  const absDx = Math.abs(dx)
  const absDy = Math.abs(dy)
  if (absDx > absDy && absDx > threshold) {
    return 'x'
  }
  if (absDy > absDx && absDy > threshold) {
    return 'y'
  }
  return undefined
}
class CoordinatesEngine extends Engine {
  constructor(...args) {
    super(...args)
    _defineProperty(this, 'aliasKey', 'xy')
  }
  reset() {
    super.reset()
    this.state.axis = undefined
  }
  init() {
    this.state.offset = [0, 0]
    this.state.lastOffset = [0, 0]
  }
  computeOffset() {
    this.state.offset = V.add(this.state.lastOffset, this.state.movement)
  }
  computeMovement() {
    this.state.movement = V.sub(this.state.offset, this.state.lastOffset)
  }
  axisIntent(event) {
    const state = this.state
    const config = this.config
    if (!state.axis && event) {
      const threshold =
        typeof config.axisThreshold === 'object'
          ? config.axisThreshold[getPointerType(event)]
          : config.axisThreshold
      state.axis = selectAxis(state._movement, threshold)
    }
    state._blocked =
      ((config.lockDirection || !!config.axis) && !state.axis) ||
      (!!config.axis && config.axis !== state.axis)
  }
  restrictToAxis(v) {
    if (this.config.axis || this.config.lockDirection) {
      switch (this.state.axis) {
        case 'x':
          v[1] = 0
          break
        case 'y':
          v[0] = 0
          break
      }
    }
  }
}

const identity = (v) => v
const DEFAULT_RUBBERBAND = 0.15
const commonConfigResolver = {
  enabled(value = true) {
    return value
  },
  eventOptions(value, _k, config) {
    return _objectSpread2(_objectSpread2({}, config.shared.eventOptions), value)
  },
  preventDefault(value = false) {
    return value
  },
  triggerAllEvents(value = false) {
    return value
  },
  rubberband(value = 0) {
    switch (value) {
      case true:
        return [DEFAULT_RUBBERBAND, DEFAULT_RUBBERBAND]
      case false:
        return [0, 0]
      default:
        return V.toVector(value)
    }
  },
  from(value) {
    if (typeof value === 'function') return value
    if (value != null) return V.toVector(value)
  },
  transform(value, _k, config) {
    const transform = value || config.shared.transform
    this.hasCustomTransform = !!transform
    if (process.env.NODE_ENV === 'development') {
      const originalTransform = transform || identity
      return (v) => {
        const r = originalTransform(v)
        if (!isFinite(r[0]) || !isFinite(r[1])) {
          console.warn(
            `[@use-gesture]: config.transform() must produce a valid result, but it was: [${
              r[0]
            },${[1]}]`
          )
        }
        return r
      }
    }
    return transform || identity
  },
  threshold(value) {
    return V.toVector(value, 0)
  },
}
if (process.env.NODE_ENV === 'development') {
  Object.assign(commonConfigResolver, {
    domTarget(value) {
      if (value !== undefined) {
        throw Error(
          `[@use-gesture]: \`domTarget\` option has been renamed to \`target\`.`
        )
      }
      return NaN
    },
    lockDirection(value) {
      if (value !== undefined) {
        throw Error(
          `[@use-gesture]: \`lockDirection\` option has been merged with \`axis\`. Use it as in \`{ axis: 'lock' }\``
        )
      }
      return NaN
    },
    initial(value) {
      if (value !== undefined) {
        throw Error(
          `[@use-gesture]: \`initial\` option has been renamed to \`from\`.`
        )
      }
      return NaN
    },
  })
}

const DEFAULT_AXIS_THRESHOLD = 0
const coordinatesConfigResolver = _objectSpread2(
  _objectSpread2({}, commonConfigResolver),
  {},
  {
    axis(_v, _k, { axis }) {
      this.lockDirection = axis === 'lock'
      if (!this.lockDirection) return axis
    },
    axisThreshold(value = DEFAULT_AXIS_THRESHOLD) {
      return value
    },
    bounds(value = {}) {
      if (typeof value === 'function') {
        return (state) => coordinatesConfigResolver.bounds(value(state))
      }
      if ('current' in value) {
        return () => value.current
      }
      if (typeof HTMLElement === 'function' && value instanceof HTMLElement) {
        return value
      }
      const {
        left = -Infinity,
        right = Infinity,
        top = -Infinity,
        bottom = Infinity,
      } = value
      return [
        [left, right],
        [top, bottom],
      ]
    },
  }
)

const KEYS_DELTA_MAP = {
  ArrowRight: (displacement, factor = 1) => [displacement * factor, 0],
  ArrowLeft: (displacement, factor = 1) => [-1 * displacement * factor, 0],
  ArrowUp: (displacement, factor = 1) => [0, -1 * displacement * factor],
  ArrowDown: (displacement, factor = 1) => [0, displacement * factor],
}
class DragEngine extends CoordinatesEngine {
  constructor(...args) {
    super(...args)
    _defineProperty(this, 'ingKey', 'dragging')
  }
  reset() {
    super.reset()
    const state = this.state
    state._pointerId = undefined
    state._pointerActive = false
    state._keyboardActive = false
    state._preventScroll = false
    state._delayed = false
    state.swipe = [0, 0]
    state.tap = false
    state.canceled = false
    state.cancel = this.cancel.bind(this)
  }
  setup() {
    const state = this.state
    if (state._bounds instanceof HTMLElement) {
      const boundRect = state._bounds.getBoundingClientRect()
      const targetRect = state.currentTarget.getBoundingClientRect()
      const _bounds = {
        left: boundRect.left - targetRect.left + state.offset[0],
        right: boundRect.right - targetRect.right + state.offset[0],
        top: boundRect.top - targetRect.top + state.offset[1],
        bottom: boundRect.bottom - targetRect.bottom + state.offset[1],
      }
      state._bounds = coordinatesConfigResolver.bounds(_bounds)
    }
  }
  cancel() {
    const state = this.state
    if (state.canceled) return
    state.canceled = true
    state._active = false
    setTimeout(() => {
      this.compute()
      this.emit()
    }, 0)
  }
  setActive() {
    this.state._active = this.state._pointerActive || this.state._keyboardActive
  }
  clean() {
    this.pointerClean()
    this.state._pointerActive = false
    this.state._keyboardActive = false
    super.clean()
  }
  pointerDown(event) {
    const config = this.config
    const state = this.state
    if (
      event.buttons != null &&
      (Array.isArray(config.pointerButtons)
        ? !config.pointerButtons.includes(event.buttons)
        : config.pointerButtons !== -1 &&
          config.pointerButtons !== event.buttons)
    )
      return
    const ctrlIds = this.ctrl.setEventIds(event)
    if (config.pointerCapture) {
      event.target.setPointerCapture(event.pointerId)
    }
    if (ctrlIds && ctrlIds.size > 1 && state._pointerActive) return
    this.start(event)
    this.setupPointer(event)
    state._pointerId = pointerId(event)
    state._pointerActive = true
    this.computeValues(pointerValues(event))
    this.computeInitial()
    if (config.preventScrollAxis && getPointerType(event) !== 'mouse') {
      state._active = false
      this.setupScrollPrevention(event)
    } else if (config.delay > 0) {
      this.setupDelayTrigger(event)
      if (config.triggerAllEvents) {
        this.compute(event)
        this.emit()
      }
    } else {
      this.startPointerDrag(event)
    }
  }
  startPointerDrag(event) {
    const state = this.state
    state._active = true
    state._preventScroll = true
    state._delayed = false
    this.compute(event)
    this.emit()
  }
  pointerMove(event) {
    const state = this.state
    const config = this.config
    if (!state._pointerActive) return
    const id = pointerId(event)
    if (state._pointerId !== undefined && id !== state._pointerId) return
    const _values = pointerValues(event)
    if (document.pointerLockElement === event.target) {
      state._delta = [event.movementX, event.movementY]
    } else {
      state._delta = V.sub(_values, state._values)
      this.computeValues(_values)
    }
    V.addTo(state._movement, state._delta)
    this.compute(event)
    if (state._delayed && state.intentional) {
      this.timeoutStore.remove('dragDelay')
      state.active = false
      this.startPointerDrag(event)
      return
    }
    if (config.preventScrollAxis && !state._preventScroll) {
      if (state.axis) {
        if (
          state.axis === config.preventScrollAxis ||
          config.preventScrollAxis === 'xy'
        ) {
          state._active = false
          this.clean()
          return
        } else {
          this.timeoutStore.remove('startPointerDrag')
          this.startPointerDrag(event)
          return
        }
      } else {
        return
      }
    }
    this.emit()
  }
  pointerUp(event) {
    this.ctrl.setEventIds(event)
    try {
      if (
        this.config.pointerCapture &&
        event.target.hasPointerCapture(event.pointerId)
      ) {
        event.target.releasePointerCapture(event.pointerId)
      }
    } catch (_unused) {
      if (process.env.NODE_ENV === 'development') {
        console.warn(
          `[@use-gesture]: If you see this message, it's likely that you're using an outdated version of \`@react-three/fiber\`. \n\nPlease upgrade to the latest version.`
        )
      }
    }
    const state = this.state
    const config = this.config
    if (!state._active || !state._pointerActive) return
    const id = pointerId(event)
    if (state._pointerId !== undefined && id !== state._pointerId) return
    this.state._pointerActive = false
    this.setActive()
    this.compute(event)
    const [dx, dy] = state._distance
    state.tap = dx <= config.tapsThreshold && dy <= config.tapsThreshold
    if (state.tap && config.filterTaps) {
      state._force = true
    } else {
      const [_dx, _dy] = state._delta
      const [_mx, _my] = state._movement
      const [svx, svy] = config.swipe.velocity
      const [sx, sy] = config.swipe.distance
      const sdt = config.swipe.duration
      if (state.elapsedTime < sdt) {
        const _vx = Math.abs(_dx / state.timeDelta)
        const _vy = Math.abs(_dy / state.timeDelta)
        if (_vx > svx && Math.abs(_mx) > sx) state.swipe[0] = Math.sign(_dx)
        if (_vy > svy && Math.abs(_my) > sy) state.swipe[1] = Math.sign(_dy)
      }
    }
    this.emit()
  }
  pointerClick(event) {
    if (!this.state.tap && event.detail > 0) {
      event.preventDefault()
      event.stopPropagation()
    }
  }
  setupPointer(event) {
    const config = this.config
    const device = config.device
    if (process.env.NODE_ENV === 'development') {
      try {
        if (device === 'pointer' && config.preventScrollDelay === undefined) {
          const currentTarget =
            'uv' in event
              ? event.sourceEvent.currentTarget
              : event.currentTarget
          const style = window.getComputedStyle(currentTarget)
          if (style.touchAction === 'auto') {
            console.warn(
              `[@use-gesture]: The drag target has its \`touch-action\` style property set to \`auto\`. It is recommended to add \`touch-action: 'none'\` so that the drag gesture behaves correctly on touch-enabled devices. For more information read this: https://use-gesture.netlify.app/docs/extras/#touch-action.\n\nThis message will only show in development mode. It won't appear in production. If this is intended, you can ignore it.`,
              currentTarget
            )
          }
        }
      } catch (_unused2) {}
    }
    if (config.pointerLock) {
      event.currentTarget.requestPointerLock()
    }
    if (!config.pointerCapture) {
      this.eventStore.add(
        this.sharedConfig.window,
        device,
        'change',
        this.pointerMove.bind(this)
      )
      this.eventStore.add(
        this.sharedConfig.window,
        device,
        'end',
        this.pointerUp.bind(this)
      )
      this.eventStore.add(
        this.sharedConfig.window,
        device,
        'cancel',
        this.pointerUp.bind(this)
      )
    }
  }
  pointerClean() {
    if (
      this.config.pointerLock &&
      document.pointerLockElement === this.state.currentTarget
    ) {
      document.exitPointerLock()
    }
  }
  preventScroll(event) {
    if (this.state._preventScroll && event.cancelable) {
      event.preventDefault()
    }
  }
  setupScrollPrevention(event) {
    this.state._preventScroll = false
    persistEvent(event)
    const remove = this.eventStore.add(
      this.sharedConfig.window,
      'touch',
      'change',
      this.preventScroll.bind(this),
      {
        passive: false,
      }
    )
    this.eventStore.add(this.sharedConfig.window, 'touch', 'end', remove)
    this.eventStore.add(this.sharedConfig.window, 'touch', 'cancel', remove)
    this.timeoutStore.add(
      'startPointerDrag',
      this.startPointerDrag.bind(this),
      this.config.preventScrollDelay,
      event
    )
  }
  setupDelayTrigger(event) {
    this.state._delayed = true
    this.timeoutStore.add(
      'dragDelay',
      () => {
        this.state._step = [0, 0]
        this.startPointerDrag(event)
      },
      this.config.delay
    )
  }
  keyDown(event) {
    const deltaFn = KEYS_DELTA_MAP[event.key]
    if (deltaFn) {
      const state = this.state
      const factor = event.shiftKey ? 10 : event.altKey ? 0.1 : 1
      this.start(event)
      state._delta = deltaFn(this.config.keyboardDisplacement, factor)
      state._keyboardActive = true
      V.addTo(state._movement, state._delta)
      this.compute(event)
      this.emit()
    }
  }
  keyUp(event) {
    if (!(event.key in KEYS_DELTA_MAP)) return
    this.state._keyboardActive = false
    this.setActive()
    this.compute(event)
    this.emit()
  }
  bind(bindFunction) {
    const device = this.config.device
    bindFunction(device, 'start', this.pointerDown.bind(this))
    if (this.config.pointerCapture) {
      bindFunction(device, 'change', this.pointerMove.bind(this))
      bindFunction(device, 'end', this.pointerUp.bind(this))
      bindFunction(device, 'cancel', this.pointerUp.bind(this))
      bindFunction('lostPointerCapture', '', this.pointerUp.bind(this))
    }
    if (this.config.keys) {
      bindFunction('key', 'down', this.keyDown.bind(this))
      bindFunction('key', 'up', this.keyUp.bind(this))
    }
    if (this.config.filterTaps) {
      bindFunction('click', '', this.pointerClick.bind(this), {
        capture: true,
        passive: false,
      })
    }
  }
}
function persistEvent(event) {
  'persist' in event && typeof event.persist === 'function' && event.persist()
}

const isBrowser =
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
function supportsTouchEvents() {
  return isBrowser && 'ontouchstart' in window
}
function isTouchScreen() {
  return (
    supportsTouchEvents() || (isBrowser && window.navigator.maxTouchPoints > 1)
  )
}
function supportsPointerEvents() {
  return isBrowser && 'onpointerdown' in window
}
function supportsPointerLock() {
  return isBrowser && 'exitPointerLock' in window.document
}
function supportsGestureEvents() {
  try {
    return 'constructor' in GestureEvent
  } catch (e) {
    return false
  }
}
const SUPPORT = {
  isBrowser,
  gesture: supportsGestureEvents(),
  touch: isTouchScreen(),
  touchscreen: isTouchScreen(),
  pointer: supportsPointerEvents(),
  pointerLock: supportsPointerLock(),
}

const DEFAULT_PREVENT_SCROLL_DELAY = 250
const DEFAULT_DRAG_DELAY = 180
const DEFAULT_SWIPE_VELOCITY = 0.5
const DEFAULT_SWIPE_DISTANCE = 50
const DEFAULT_SWIPE_DURATION = 250
const DEFAULT_KEYBOARD_DISPLACEMENT = 10
const DEFAULT_DRAG_AXIS_THRESHOLD = {
  mouse: 0,
  touch: 0,
  pen: 8,
}
const dragConfigResolver = _objectSpread2(
  _objectSpread2({}, coordinatesConfigResolver),
  {},
  {
    device(
      _v,
      _k,
      { pointer: { touch = false, lock = false, mouse = false } = {} }
    ) {
      this.pointerLock = lock && SUPPORT.pointerLock
      if (SUPPORT.touch && touch) return 'touch'
      if (this.pointerLock) return 'mouse'
      if (SUPPORT.pointer && !mouse) return 'pointer'
      if (SUPPORT.touch) return 'touch'
      return 'mouse'
    },
    preventScrollAxis(value, _k, { preventScroll }) {
      this.preventScrollDelay =
        typeof preventScroll === 'number'
          ? preventScroll
          : preventScroll || (preventScroll === undefined && value)
          ? DEFAULT_PREVENT_SCROLL_DELAY
          : undefined
      if (!SUPPORT.touchscreen || preventScroll === false) return undefined
      return value ? value : preventScroll !== undefined ? 'y' : undefined
    },
    pointerCapture(
      _v,
      _k,
      { pointer: { capture = true, buttons = 1, keys = true } = {} }
    ) {
      this.pointerButtons = buttons
      this.keys = keys
      return !this.pointerLock && this.device === 'pointer' && capture
    },
    threshold(
      value,
      _k,
      { filterTaps = false, tapsThreshold = 3, axis = undefined }
    ) {
      const threshold = V.toVector(
        value,
        filterTaps ? tapsThreshold : axis ? 1 : 0
      )
      this.filterTaps = filterTaps
      this.tapsThreshold = tapsThreshold
      return threshold
    },
    swipe({
      velocity = DEFAULT_SWIPE_VELOCITY,
      distance = DEFAULT_SWIPE_DISTANCE,
      duration = DEFAULT_SWIPE_DURATION,
    } = {}) {
      return {
        velocity: this.transform(V.toVector(velocity)),
        distance: this.transform(V.toVector(distance)),
        duration,
      }
    },
    delay(value = 0) {
      switch (value) {
        case true:
          return DEFAULT_DRAG_DELAY
        case false:
          return 0
        default:
          return value
      }
    },
    axisThreshold(value) {
      if (!value) return DEFAULT_DRAG_AXIS_THRESHOLD
      return _objectSpread2(
        _objectSpread2({}, DEFAULT_DRAG_AXIS_THRESHOLD),
        value
      )
    },
    keyboardDisplacement(value = DEFAULT_KEYBOARD_DISPLACEMENT) {
      return value
    },
  }
)
if (process.env.NODE_ENV === 'development') {
  Object.assign(dragConfigResolver, {
    useTouch(value) {
      if (value !== undefined) {
        throw Error(
          `[@use-gesture]: \`useTouch\` option has been renamed to \`pointer.touch\`. Use it as in \`{ pointer: { touch: true } }\`.`
        )
      }
      return NaN
    },
    experimental_preventWindowScrollY(value) {
      if (value !== undefined) {
        throw Error(
          `[@use-gesture]: \`experimental_preventWindowScrollY\` option has been renamed to \`preventScroll\`.`
        )
      }
      return NaN
    },
    swipeVelocity(value) {
      if (value !== undefined) {
        throw Error(
          `[@use-gesture]: \`swipeVelocity\` option has been renamed to \`swipe.velocity\`. Use it as in \`{ swipe: { velocity: 0.5 } }\`.`
        )
      }
      return NaN
    },
    swipeDistance(value) {
      if (value !== undefined) {
        throw Error(
          `[@use-gesture]: \`swipeDistance\` option has been renamed to \`swipe.distance\`. Use it as in \`{ swipe: { distance: 50 } }\`.`
        )
      }
      return NaN
    },
    swipeDuration(value) {
      if (value !== undefined) {
        throw Error(
          `[@use-gesture]: \`swipeDuration\` option has been renamed to \`swipe.duration\`. Use it as in \`{ swipe: { duration: 250 } }\`.`
        )
      }
      return NaN
    },
  })
}

function clampStateInternalMovementToBounds(state) {
  const [ox, oy] = state.overflow
  const [dx, dy] = state._delta
  const [dirx, diry] = state._direction
  if ((ox < 0 && dx > 0 && dirx < 0) || (ox > 0 && dx < 0 && dirx > 0)) {
    state._movement[0] = state._movementBound[0]
  }
  if ((oy < 0 && dy > 0 && diry < 0) || (oy > 0 && dy < 0 && diry > 0)) {
    state._movement[1] = state._movementBound[1]
  }
}

const SCALE_ANGLE_RATIO_INTENT_DEG = 30
const PINCH_WHEEL_RATIO = 100
class PinchEngine extends Engine {
  constructor(...args) {
    super(...args)
    _defineProperty(this, 'ingKey', 'pinching')
    _defineProperty(this, 'aliasKey', 'da')
  }
  init() {
    this.state.offset = [1, 0]
    this.state.lastOffset = [1, 0]
    this.state._pointerEvents = new Map()
  }
  reset() {
    super.reset()
    const state = this.state
    state._touchIds = []
    state.canceled = false
    state.cancel = this.cancel.bind(this)
    state.turns = 0
  }
  computeOffset() {
    const { type, movement, lastOffset } = this.state
    if (type === 'wheel') {
      this.state.offset = V.add(movement, lastOffset)
    } else {
      this.state.offset = [
        (1 + movement[0]) * lastOffset[0],
        movement[1] + lastOffset[1],
      ]
    }
  }
  computeMovement() {
    const { offset, lastOffset } = this.state
    this.state.movement = [offset[0] / lastOffset[0], offset[1] - lastOffset[1]]
  }
  axisIntent() {
    const state = this.state
    const [_m0, _m1] = state._movement
    if (!state.axis) {
      const axisMovementDifference =
        Math.abs(_m0) * SCALE_ANGLE_RATIO_INTENT_DEG - Math.abs(_m1)
      if (axisMovementDifference < 0) state.axis = 'angle'
      else if (axisMovementDifference > 0) state.axis = 'scale'
    }
  }
  restrictToAxis(v) {
    if (this.config.lockDirection) {
      if (this.state.axis === 'scale') v[1] = 0
      else if (this.state.axis === 'angle') v[0] = 0
    }
  }
  cancel() {
    const state = this.state
    if (state.canceled) return
    setTimeout(() => {
      state.canceled = true
      state._active = false
      this.compute()
      this.emit()
    }, 0)
  }
  touchStart(event) {
    this.ctrl.setEventIds(event)
    const state = this.state
    const ctrlTouchIds = this.ctrl.touchIds
    if (state._active) {
      if (state._touchIds.every((id) => ctrlTouchIds.has(id))) return
    }
    if (ctrlTouchIds.size < 2) return
    this.start(event)
    state._touchIds = Array.from(ctrlTouchIds).slice(0, 2)
    const payload = touchDistanceAngle(event, state._touchIds)
    if (!payload) return
    this.pinchStart(event, payload)
  }
  pointerStart(event) {
    if (event.buttons != null && event.buttons % 2 !== 1) return
    this.ctrl.setEventIds(event)
    event.target.setPointerCapture(event.pointerId)
    const state = this.state
    const _pointerEvents = state._pointerEvents
    const ctrlPointerIds = this.ctrl.pointerIds
    if (state._active) {
      if (
        Array.from(_pointerEvents.keys()).every((id) => ctrlPointerIds.has(id))
      )
        return
    }
    if (_pointerEvents.size < 2) {
      _pointerEvents.set(event.pointerId, event)
    }
    if (state._pointerEvents.size < 2) return
    this.start(event)
    const payload = distanceAngle(...Array.from(_pointerEvents.values()))
    if (!payload) return
    this.pinchStart(event, payload)
  }
  pinchStart(event, payload) {
    const state = this.state
    state.origin = payload.origin
    this.computeValues([payload.distance, payload.angle])
    this.computeInitial()
    this.compute(event)
    this.emit()
  }
  touchMove(event) {
    if (!this.state._active) return
    const payload = touchDistanceAngle(event, this.state._touchIds)
    if (!payload) return
    this.pinchMove(event, payload)
  }
  pointerMove(event) {
    const _pointerEvents = this.state._pointerEvents
    if (_pointerEvents.has(event.pointerId)) {
      _pointerEvents.set(event.pointerId, event)
    }
    if (!this.state._active) return
    const payload = distanceAngle(...Array.from(_pointerEvents.values()))
    if (!payload) return
    this.pinchMove(event, payload)
  }
  pinchMove(event, payload) {
    const state = this.state
    const prev_a = state._values[1]
    const delta_a = payload.angle - prev_a
    let delta_turns = 0
    if (Math.abs(delta_a) > 270) delta_turns += Math.sign(delta_a)
    this.computeValues([payload.distance, payload.angle - 360 * delta_turns])
    state.origin = payload.origin
    state.turns = delta_turns
    state._movement = [
      state._values[0] / state._initial[0] - 1,
      state._values[1] - state._initial[1],
    ]
    this.compute(event)
    this.emit()
  }
  touchEnd(event) {
    this.ctrl.setEventIds(event)
    if (!this.state._active) return
    if (this.state._touchIds.some((id) => !this.ctrl.touchIds.has(id))) {
      this.state._active = false
      this.compute(event)
      this.emit()
    }
  }
  pointerEnd(event) {
    const state = this.state
    this.ctrl.setEventIds(event)
    try {
      event.target.releasePointerCapture(event.pointerId)
    } catch (_unused) {}
    if (state._pointerEvents.has(event.pointerId)) {
      state._pointerEvents.delete(event.pointerId)
    }
    if (!state._active) return
    if (state._pointerEvents.size < 2) {
      state._active = false
      this.compute(event)
      this.emit()
    }
  }
  gestureStart(event) {
    if (event.cancelable) event.preventDefault()
    const state = this.state
    if (state._active) return
    this.start(event)
    this.computeValues([event.scale, event.rotation])
    state.origin = [event.clientX, event.clientY]
    this.compute(event)
    this.emit()
  }
  gestureMove(event) {
    if (event.cancelable) event.preventDefault()
    if (!this.state._active) return
    const state = this.state
    this.computeValues([event.scale, event.rotation])
    state.origin = [event.clientX, event.clientY]
    const _previousMovement = state._movement
    state._movement = [event.scale - 1, event.rotation]
    state._delta = V.sub(state._movement, _previousMovement)
    this.compute(event)
    this.emit()
  }
  gestureEnd(event) {
    if (!this.state._active) return
    this.state._active = false
    this.compute(event)
    this.emit()
  }
  wheel(event) {
    const modifierKey = this.config.modifierKey
    if (modifierKey && !event[modifierKey]) return
    if (!this.state._active) this.wheelStart(event)
    else this.wheelChange(event)
    this.timeoutStore.add('wheelEnd', this.wheelEnd.bind(this))
  }
  wheelStart(event) {
    this.start(event)
    this.wheelChange(event)
  }
  wheelChange(event) {
    const isR3f = 'uv' in event
    if (!isR3f) {
      if (event.cancelable) {
        event.preventDefault()
      }
      if (process.env.NODE_ENV === 'development' && !event.defaultPrevented) {
        console.warn(
          `[@use-gesture]: To properly support zoom on trackpads, try using the \`target\` option.\n\nThis message will only appear in development mode.`
        )
      }
    }
    const state = this.state
    state._delta = [
      (-wheelValues(event)[1] / PINCH_WHEEL_RATIO) * state.offset[0],
      0,
    ]
    V.addTo(state._movement, state._delta)
    clampStateInternalMovementToBounds(state)
    this.state.origin = [event.clientX, event.clientY]
    this.compute(event)
    this.emit()
  }
  wheelEnd() {
    if (!this.state._active) return
    this.state._active = false
    this.compute()
    this.emit()
  }
  bind(bindFunction) {
    const device = this.config.device
    if (!!device) {
      bindFunction(device, 'start', this[device + 'Start'].bind(this))
      bindFunction(device, 'change', this[device + 'Move'].bind(this))
      bindFunction(device, 'end', this[device + 'End'].bind(this))
      bindFunction(device, 'cancel', this[device + 'End'].bind(this))
      bindFunction('lostPointerCapture', '', this[device + 'End'].bind(this))
    }
    if (this.config.pinchOnWheel) {
      bindFunction('wheel', '', this.wheel.bind(this), {
        passive: false,
      })
    }
  }
}

const pinchConfigResolver = _objectSpread2(
  _objectSpread2({}, commonConfigResolver),
  {},
  {
    device(_v, _k, { shared, pointer: { touch = false } = {} }) {
      const sharedConfig = shared
      if (sharedConfig.target && !SUPPORT.touch && SUPPORT.gesture)
        return 'gesture'
      if (SUPPORT.touch && touch) return 'touch'
      if (SUPPORT.touchscreen) {
        if (SUPPORT.pointer) return 'pointer'
        if (SUPPORT.touch) return 'touch'
      }
    },
    bounds(_v, _k, { scaleBounds = {}, angleBounds = {} }) {
      const _scaleBounds = (state) => {
        const D = assignDefault(call(scaleBounds, state), {
          min: -Infinity,
          max: Infinity,
        })
        return [D.min, D.max]
      }
      const _angleBounds = (state) => {
        const A = assignDefault(call(angleBounds, state), {
          min: -Infinity,
          max: Infinity,
        })
        return [A.min, A.max]
      }
      if (
        typeof scaleBounds !== 'function' &&
        typeof angleBounds !== 'function'
      )
        return [_scaleBounds(), _angleBounds()]
      return (state) => [_scaleBounds(state), _angleBounds(state)]
    },
    threshold(value, _k, config) {
      this.lockDirection = config.axis === 'lock'
      const threshold = V.toVector(value, this.lockDirection ? [0.1, 3] : 0)
      return threshold
    },
    modifierKey(value) {
      if (value === undefined) return 'ctrlKey'
      return value
    },
    pinchOnWheel(value = true) {
      return value
    },
  }
)

class MoveEngine extends CoordinatesEngine {
  constructor(...args) {
    super(...args)
    _defineProperty(this, 'ingKey', 'moving')
  }
  move(event) {
    if (this.config.mouseOnly && event.pointerType !== 'mouse') return
    if (!this.state._active) this.moveStart(event)
    else this.moveChange(event)
    this.timeoutStore.add('moveEnd', this.moveEnd.bind(this))
  }
  moveStart(event) {
    this.start(event)
    this.computeValues(pointerValues(event))
    this.compute(event)
    this.computeInitial()
    this.emit()
  }
  moveChange(event) {
    if (!this.state._active) return
    const values = pointerValues(event)
    const state = this.state
    state._delta = V.sub(values, state._values)
    V.addTo(state._movement, state._delta)
    this.computeValues(values)
    this.compute(event)
    this.emit()
  }
  moveEnd(event) {
    if (!this.state._active) return
    this.state._active = false
    this.compute(event)
    this.emit()
  }
  bind(bindFunction) {
    bindFunction('pointer', 'change', this.move.bind(this))
    bindFunction('pointer', 'leave', this.moveEnd.bind(this))
  }
}

const moveConfigResolver = _objectSpread2(
  _objectSpread2({}, coordinatesConfigResolver),
  {},
  {
    mouseOnly: (value = true) => value,
  }
)

class ScrollEngine extends CoordinatesEngine {
  constructor(...args) {
    super(...args)
    _defineProperty(this, 'ingKey', 'scrolling')
  }
  scroll(event) {
    if (!this.state._active) this.start(event)
    this.scrollChange(event)
    this.timeoutStore.add('scrollEnd', this.scrollEnd.bind(this))
  }
  scrollChange(event) {
    if (event.cancelable) event.preventDefault()
    const state = this.state
    const values = scrollValues(event)
    state._delta = V.sub(values, state._values)
    V.addTo(state._movement, state._delta)
    this.computeValues(values)
    this.compute(event)
    this.emit()
  }
  scrollEnd() {
    if (!this.state._active) return
    this.state._active = false
    this.compute()
    this.emit()
  }
  bind(bindFunction) {
    bindFunction('scroll', '', this.scroll.bind(this))
  }
}

const scrollConfigResolver = coordinatesConfigResolver

class WheelEngine extends CoordinatesEngine {
  constructor(...args) {
    super(...args)
    _defineProperty(this, 'ingKey', 'wheeling')
  }
  wheel(event) {
    if (!this.state._active) this.start(event)
    this.wheelChange(event)
    this.timeoutStore.add('wheelEnd', this.wheelEnd.bind(this))
  }
  wheelChange(event) {
    const state = this.state
    state._delta = wheelValues(event)
    V.addTo(state._movement, state._delta)
    clampStateInternalMovementToBounds(state)
    this.compute(event)
    this.emit()
  }
  wheelEnd() {
    if (!this.state._active) return
    this.state._active = false
    this.compute()
    this.emit()
  }
  bind(bindFunction) {
    bindFunction('wheel', '', this.wheel.bind(this))
  }
}

const wheelConfigResolver = coordinatesConfigResolver

class HoverEngine extends CoordinatesEngine {
  constructor(...args) {
    super(...args)
    _defineProperty(this, 'ingKey', 'hovering')
  }
  enter(event) {
    if (this.config.mouseOnly && event.pointerType !== 'mouse') return
    this.start(event)
    this.computeValues(pointerValues(event))
    this.compute(event)
    this.emit()
  }
  leave(event) {
    if (this.config.mouseOnly && event.pointerType !== 'mouse') return
    const state = this.state
    if (!state._active) return
    state._active = false
    const values = pointerValues(event)
    state._movement = state._delta = V.sub(values, state._values)
    this.computeValues(values)
    this.compute(event)
    state.delta = state.movement
    this.emit()
  }
  bind(bindFunction) {
    bindFunction('pointer', 'enter', this.enter.bind(this))
    bindFunction('pointer', 'leave', this.leave.bind(this))
  }
}

const hoverConfigResolver = _objectSpread2(
  _objectSpread2({}, coordinatesConfigResolver),
  {},
  {
    mouseOnly: (value = true) => value,
  }
)

const EngineMap = new Map()
const ConfigResolverMap = new Map()
function registerAction(action) {
  EngineMap.set(action.key, action.engine)
  ConfigResolverMap.set(action.key, action.resolver)
}
const dragAction = {
  key: 'drag',
  engine: DragEngine,
  resolver: dragConfigResolver,
}
const hoverAction = {
  key: 'hover',
  engine: HoverEngine,
  resolver: hoverConfigResolver,
}
const moveAction = {
  key: 'move',
  engine: MoveEngine,
  resolver: moveConfigResolver,
}
const pinchAction = {
  key: 'pinch',
  engine: PinchEngine,
  resolver: pinchConfigResolver,
}
const scrollAction = {
  key: 'scroll',
  engine: ScrollEngine,
  resolver: scrollConfigResolver,
}
const wheelAction = {
  key: 'wheel',
  engine: WheelEngine,
  resolver: wheelConfigResolver,
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {}
  var target = {}
  var sourceKeys = Object.keys(source)
  var key, i
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i]
    if (excluded.indexOf(key) >= 0) continue
    target[key] = source[key]
  }
  return target
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {}
  var target = _objectWithoutPropertiesLoose(source, excluded)
  var key, i
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source)
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i]
      if (excluded.indexOf(key) >= 0) continue
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue
      target[key] = source[key]
    }
  }
  return target
}

const sharedConfigResolver = {
  target(value) {
    if (value) {
      return () => ('current' in value ? value.current : value)
    }
    return undefined
  },
  enabled(value = true) {
    return value
  },
  window(value = SUPPORT.isBrowser ? window : undefined) {
    return value
  },
  eventOptions({ passive = true, capture = false } = {}) {
    return {
      passive,
      capture,
    }
  },
  transform(value) {
    return value
  },
}

const _excluded$3 = ['target', 'eventOptions', 'window', 'enabled', 'transform']
function resolveWith(config = {}, resolvers) {
  const result = {}
  for (const [key, resolver] of Object.entries(resolvers)) {
    switch (typeof resolver) {
      case 'function':
        if (process.env.NODE_ENV === 'development') {
          const r = resolver.call(result, config[key], key, config)
          if (!Number.isNaN(r)) result[key] = r
        } else {
          result[key] = resolver.call(result, config[key], key, config)
        }
        break
      case 'object':
        result[key] = resolveWith(config[key], resolver)
        break
      case 'boolean':
        if (resolver) result[key] = config[key]
        break
    }
  }
  return result
}
function parse(newConfig, gestureKey, _config = {}) {
  const _ref = newConfig,
    { target, eventOptions, window, enabled, transform } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded$3)
  _config.shared = resolveWith(
    {
      target,
      eventOptions,
      window,
      enabled,
      transform,
    },
    sharedConfigResolver
  )
  if (gestureKey) {
    const resolver = ConfigResolverMap.get(gestureKey)
    _config[gestureKey] = resolveWith(
      _objectSpread2(
        {
          shared: _config.shared,
        },
        rest
      ),
      resolver
    )
  } else {
    for (const key in rest) {
      const resolver = ConfigResolverMap.get(key)
      if (resolver) {
        _config[key] = resolveWith(
          _objectSpread2(
            {
              shared: _config.shared,
            },
            rest[key]
          ),
          resolver
        )
      } else if (process.env.NODE_ENV === 'development') {
        if (
          !['drag', 'pinch', 'scroll', 'wheel', 'move', 'hover'].includes(key)
        ) {
          if (key === 'domTarget') {
            throw Error(
              `[@use-gesture]: \`domTarget\` option has been renamed to \`target\`.`
            )
          }
          console.warn(
            `[@use-gesture]: Unknown config key \`${key}\` was used. Please read the documentation for further information.`
          )
        }
      }
    }
  }
  return _config
}

class EventStore {
  constructor(ctrl, gestureKey) {
    _defineProperty(this, '_listeners', new Set())
    this._ctrl = ctrl
    this._gestureKey = gestureKey
  }
  add(element, device, action, handler, options) {
    const listeners = this._listeners
    const type = toDomEventType(device, action)
    const _options = this._gestureKey
      ? this._ctrl.config[this._gestureKey].eventOptions
      : {}
    const eventOptions = _objectSpread2(_objectSpread2({}, _options), options)
    element.addEventListener(type, handler, eventOptions)
    const remove = () => {
      element.removeEventListener(type, handler, eventOptions)
      listeners.delete(remove)
    }
    listeners.add(remove)
    return remove
  }
  clean() {
    this._listeners.forEach((remove) => remove())
    this._listeners.clear()
  }
}

class TimeoutStore {
  constructor() {
    _defineProperty(this, '_timeouts', new Map())
  }
  add(key, callback, ms = 140, ...args) {
    this.remove(key)
    this._timeouts.set(key, window.setTimeout(callback, ms, ...args))
  }
  remove(key) {
    const timeout = this._timeouts.get(key)
    if (timeout) window.clearTimeout(timeout)
  }
  clean() {
    this._timeouts.forEach((timeout) => void window.clearTimeout(timeout))
    this._timeouts.clear()
  }
}

class Controller {
  constructor(handlers) {
    _defineProperty(this, 'gestures', new Set())
    _defineProperty(this, '_targetEventStore', new EventStore(this))
    _defineProperty(this, 'gestureEventStores', {})
    _defineProperty(this, 'gestureTimeoutStores', {})
    _defineProperty(this, 'handlers', {})
    _defineProperty(this, 'config', {})
    _defineProperty(this, 'pointerIds', new Set())
    _defineProperty(this, 'touchIds', new Set())
    _defineProperty(this, 'state', {
      shared: {
        shiftKey: false,
        metaKey: false,
        ctrlKey: false,
        altKey: false,
      },
    })
    resolveGestures(this, handlers)
  }
  setEventIds(event) {
    if (isTouch(event)) {
      this.touchIds = new Set(touchIds(event))
      return this.touchIds
    } else if ('pointerId' in event) {
      if (event.type === 'pointerup' || event.type === 'pointercancel')
        this.pointerIds.delete(event.pointerId)
      else if (event.type === 'pointerdown')
        this.pointerIds.add(event.pointerId)
      return this.pointerIds
    }
  }
  applyHandlers(handlers, nativeHandlers) {
    this.handlers = handlers
    this.nativeHandlers = nativeHandlers
  }
  applyConfig(config, gestureKey) {
    this.config = parse(config, gestureKey, this.config)
  }
  clean() {
    this._targetEventStore.clean()
    for (const key of this.gestures) {
      this.gestureEventStores[key].clean()
      this.gestureTimeoutStores[key].clean()
    }
  }
  effect() {
    if (this.config.shared.target) this.bind()
    return () => this._targetEventStore.clean()
  }
  bind(...args) {
    const sharedConfig = this.config.shared
    const props = {}
    let target
    if (sharedConfig.target) {
      target = sharedConfig.target()
      if (!target) return
    }
    if (sharedConfig.enabled) {
      for (const gestureKey of this.gestures) {
        const gestureConfig = this.config[gestureKey]
        const bindFunction = bindToProps(
          props,
          gestureConfig.eventOptions,
          !!target
        )
        if (gestureConfig.enabled) {
          const Engine = EngineMap.get(gestureKey)
          new Engine(this, args, gestureKey).bind(bindFunction)
        }
      }
      const nativeBindFunction = bindToProps(
        props,
        sharedConfig.eventOptions,
        !!target
      )
      for (const eventKey in this.nativeHandlers) {
        nativeBindFunction(
          eventKey,
          '',
          (event) =>
            this.nativeHandlers[eventKey](
              _objectSpread2(
                _objectSpread2({}, this.state.shared),
                {},
                {
                  event,
                  args,
                }
              )
            ),
          undefined,
          true
        )
      }
    }
    for (const handlerProp in props) {
      props[handlerProp] = chain(...props[handlerProp])
    }
    if (!target) return props
    for (const handlerProp in props) {
      const { device, capture, passive } = parseProp(handlerProp)
      this._targetEventStore.add(target, device, '', props[handlerProp], {
        capture,
        passive,
      })
    }
  }
}
function setupGesture(ctrl, gestureKey) {
  ctrl.gestures.add(gestureKey)
  ctrl.gestureEventStores[gestureKey] = new EventStore(ctrl, gestureKey)
  ctrl.gestureTimeoutStores[gestureKey] = new TimeoutStore()
}
function resolveGestures(ctrl, internalHandlers) {
  if (internalHandlers.drag) setupGesture(ctrl, 'drag')
  if (internalHandlers.wheel) setupGesture(ctrl, 'wheel')
  if (internalHandlers.scroll) setupGesture(ctrl, 'scroll')
  if (internalHandlers.move) setupGesture(ctrl, 'move')
  if (internalHandlers.pinch) setupGesture(ctrl, 'pinch')
  if (internalHandlers.hover) setupGesture(ctrl, 'hover')
}
const bindToProps =
  (props, eventOptions, withPassiveOption) =>
  (device, action, handler, options = {}, isNative = false) => {
    var _options$capture, _options$passive
    const capture =
      (_options$capture = options.capture) !== null &&
      _options$capture !== void 0
        ? _options$capture
        : eventOptions.capture
    const passive =
      (_options$passive = options.passive) !== null &&
      _options$passive !== void 0
        ? _options$passive
        : eventOptions.passive
    let handlerProp = isNative ? device : toHandlerProp(device, action, capture)
    if (withPassiveOption && passive) handlerProp += 'Passive'
    props[handlerProp] = props[handlerProp] || []
    props[handlerProp].push(handler)
  }

const RE_NOT_NATIVE = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/
function sortHandlers(_handlers) {
  const native = {}
  const handlers = {}
  const actions = new Set()
  for (let key in _handlers) {
    if (RE_NOT_NATIVE.test(key)) {
      actions.add(RegExp.lastMatch)
      handlers[key] = _handlers[key]
    } else {
      native[key] = _handlers[key]
    }
  }
  return [handlers, native, actions]
}
function registerGesture(
  actions,
  handlers,
  handlerKey,
  key,
  internalHandlers,
  config
) {
  if (!actions.has(handlerKey)) return
  if (!EngineMap.has(key)) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(
        `[@use-gesture]: You've created a custom handler that that uses the \`${key}\` gesture but isn't properly configured.\n\nPlease add \`${key}Action\` when creating your handler.`
      )
    }
    return
  }
  const startKey = handlerKey + 'Start'
  const endKey = handlerKey + 'End'
  const fn = (state) => {
    let memo = undefined
    if (state.first && startKey in handlers) handlers[startKey](state)
    if (handlerKey in handlers) memo = handlers[handlerKey](state)
    if (state.last && endKey in handlers) handlers[endKey](state)
    return memo
  }
  internalHandlers[key] = fn
  config[key] = config[key] || {}
}
function parseMergedHandlers(mergedHandlers, mergedConfig) {
  const [handlers, nativeHandlers, actions] = sortHandlers(mergedHandlers)
  const internalHandlers = {}
  registerGesture(
    actions,
    handlers,
    'onDrag',
    'drag',
    internalHandlers,
    mergedConfig
  )
  registerGesture(
    actions,
    handlers,
    'onWheel',
    'wheel',
    internalHandlers,
    mergedConfig
  )
  registerGesture(
    actions,
    handlers,
    'onScroll',
    'scroll',
    internalHandlers,
    mergedConfig
  )
  registerGesture(
    actions,
    handlers,
    'onPinch',
    'pinch',
    internalHandlers,
    mergedConfig
  )
  registerGesture(
    actions,
    handlers,
    'onMove',
    'move',
    internalHandlers,
    mergedConfig
  )
  registerGesture(
    actions,
    handlers,
    'onHover',
    'hover',
    internalHandlers,
    mergedConfig
  )
  return {
    handlers: internalHandlers,
    config: mergedConfig,
    nativeHandlers,
  }
}

function useRecognizers(handlers, config = {}, gestureKey, nativeHandlers) {
  const ctrl = React__default.useMemo(() => new Controller(handlers), [])
  ctrl.applyHandlers(handlers, nativeHandlers)
  ctrl.applyConfig(config, gestureKey)
  React__default.useEffect(ctrl.effect.bind(ctrl))
  React__default.useEffect(() => {
    return ctrl.clean.bind(ctrl)
  }, [])
  if (config.target === undefined) {
    return ctrl.bind.bind(ctrl)
  }
  return undefined
}

function createUseGesture(actions) {
  actions.forEach(registerAction)
  return function useGesture(_handlers, _config) {
    const { handlers, nativeHandlers, config } = parseMergedHandlers(
      _handlers,
      _config || {}
    )
    return useRecognizers(handlers, config, undefined, nativeHandlers)
  }
}

function useGesture(handlers, config) {
  const hook = createUseGesture([
    dragAction,
    pinchAction,
    scrollAction,
    wheelAction,
    moveAction,
    hoverAction,
  ])
  return hook(handlers, config || {})
}

var classPrefix$1 = 'ashe-elevator'
var defaultProps$9 = {
  height: '200px',
  list: [],
  sticky: false,
  showKeys: true,
  floorKey: 'title',
}
var Elevator = function Elevator(props) {
  var _defaultProps$props = _extends$1({}, defaultProps$9, props),
    height = _defaultProps$props.height,
    list = _defaultProps$props.list,
    sticky = _defaultProps$props.sticky,
    floorKey = _defaultProps$props.floorKey,
    showKeys = _defaultProps$props.showKeys,
    onClickIndex = _defaultProps$props.onClickIndex
  var _useState = useState(0),
    scrollY = _useState[0],
    setScrollY = _useState[1]
  var _useState2 = useState('')
  _useState2[0]
  _useState2[1]
  var _useState3 = useState(0),
    currentIndex = _useState3[0],
    setCurrentIndex = _useState3[1]
  var listview = useRef(null)
  var initData = {
    anchorIndex: 0,
    listHeight: [],
    listGroup: [],
    scrollY: 0,
  }
  var state = useRef(initData)
  var calculateHeight = function calculateHeight() {
    var height = 0
    state.current.listHeight.push(height)
    for (var i = 0; i < state.current.listGroup.length; i++) {
      var item = state.current.listGroup[i]
      height += item.clientHeight
      state.current.listHeight.push(height)
    }
  }
  useGesture({
    onDragStart: function onDragStart(_ref) {
      var target = _ref.target
      _ref.offset
      console.log('target=', target)
    },
    onDragEnd: function onDragEnd(_ref2) {
      var offset = _ref2.offset
      console.log('offset=', offset)
    },
  })
  var setListGroup = function setListGroup() {
    if (listview.current) {
      var els = listview.current.querySelectorAll('.ashe-elevator_list_item')
      els.forEach(function (el) {
        if (el != null && !state.current.listGroup.includes(el)) {
          state.current.listGroup.push(el)
        }
      })
    }
  }
  var listViewScroll = function listViewScroll(e) {
    var listHeight = state.current.listHeight
    if (!listHeight.length) {
      // 2.根据元素的clientHeight计算出所有的值
      calculateHeight()
    }
    var target = e.target
    var scrollTop = target.scrollTop
    state.current.scrollY = scrollTop
    setScrollY(scrollTop)
    for (var i = 0; i < listHeight.length - 1; i++) {
      var height1 = listHeight[i]
      var height2 = listHeight[i + 1]
      // 3.通过scrollTop,对比是否在前一个和后一个元素的clientHeight之间
      if (state.current.scrollY >= height1 && state.current.scrollY < height2) {
        setCurrentIndex(i)
        return
      }
    }
    console.log('22222')
    // setCurrentIndex(listHeight.length - 2)
  }

  var handleClickIndex = function handleClickIndex(key, index) {
    setCurrentIndex(index)
    onClickIndex && onClickIndex(key)
  }
  useEffect(
    function () {
      if (listview.current) {
        // 1, 获取到列表所有元素
        setListGroup()
        listview.current.addEventListener('scroll', listViewScroll)
      }
    },
    [listview]
  )
  return withNativeProps(
    props,
    /*#__PURE__*/ React__default.createElement(
      'div',
      {
        className: 'ashe-elevator',
      },
      sticky && scrollY > 0
        ? /*#__PURE__*/ React__default.createElement(
            'div',
            {
              className: classPrefix$1 + '_list_fixed',
            },
            /*#__PURE__*/ React__default.createElement(
              'span',
              {
                className: classPrefix$1 + '_list_fixed_title',
              },
              list[currentIndex][floorKey]
            )
          )
        : null,
      /*#__PURE__*/ React__default.createElement(
        'div',
        {
          className: classPrefix$1 + '_list',
          style: {
            height: Number.isNaN(+height) ? height : height + 'px',
          },
        },
        /*#__PURE__*/ React__default.createElement(
          'div',
          {
            className: classPrefix$1 + '_list_inner',
            ref: listview,
          },
          list.map(function (item, idx) {
            return /*#__PURE__*/ React__default.createElement(
              'div',
              {
                className: classPrefix$1 + '_list_item',
                key: idx,
              },
              /*#__PURE__*/ React__default.createElement(
                'div',
                {
                  className: classPrefix$1 + '_list_item_code',
                },
                item.title
              ),
              /*#__PURE__*/ React__default.createElement(
                React__default.Fragment,
                null,
                item.list.map(function (subitem) {
                  return /*#__PURE__*/ React__default.createElement(
                    'div',
                    {
                      key: subitem.id,
                      onClick: function onClick() {},
                    },
                    subitem.name
                  )
                })
              )
            )
          })
        )
      ),
      showKeys &&
        /*#__PURE__*/ React__default.createElement(
          'div',
          {
            className: classPrefix$1 + '_bars',
          },
          /*#__PURE__*/ React__default.createElement(
            animated.div,
            {
              className: classPrefix$1 + '_bars_inner',
              // {...bind()}
              style: {
                touchAction: 'pan-y',
              },
            },
            list.map(function (item, index) {
              var _classNames
              return /*#__PURE__*/ React__default.createElement(
                'div',
                {
                  className: classNames(
                    ((_classNames = {}),
                    (_classNames[classPrefix$1 + '_bars_inner_item'] = true),
                    (_classNames[classPrefix$1 + '_bars_inner_item--active'] =
                      item[floorKey] === list[currentIndex][floorKey]),
                    _classNames)
                  ),
                  key: index,
                  'data-index': index,
                  onClick: function onClick() {
                    return handleClickIndex(item[floorKey], index)
                  },
                },
                item[floorKey]
              )
            })
          )
        )
    )
  )
}
Elevator.defaultProps = defaultProps$9
Elevator.displayName = 'AsheElevator'

function _extends() {
  _extends = Object.assign
    ? Object.assign.bind()
    : function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i]

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key]
            }
          }
        }

        return target
      }
  return _extends.apply(this, arguments)
}

function _inheritsLoose$1(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype)
  subClass.prototype.constructor = subClass

  _setPrototypeOf$1(subClass, superClass)
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o)
      }
  return _getPrototypeOf(o)
}

function _setPrototypeOf$1(o, p) {
  _setPrototypeOf$1 = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function _setPrototypeOf(o, p) {
        o.__proto__ = p
        return o
      }
  return _setPrototypeOf$1(o, p)
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false
  if (Reflect.construct.sham) return false
  if (typeof Proxy === 'function') return true

  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    )
    return true
  } catch (e) {
    return false
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind()
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null]
      a.push.apply(a, args)
      var Constructor = Function.bind.apply(Parent, a)
      var instance = new Constructor()
      if (Class) _setPrototypeOf$1(instance, Class.prototype)
      return instance
    }
  }

  return _construct.apply(null, arguments)
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf('[native code]') !== -1
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === 'function' ? new Map() : undefined

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class

    if (typeof Class !== 'function') {
      throw new TypeError('Super expression must either be null or a function')
    }

    if (typeof _cache !== 'undefined') {
      if (_cache.has(Class)) return _cache.get(Class)

      _cache.set(Class, Wrapper)
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor)
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    })
    return _setPrototypeOf$1(Wrapper, Class)
  }

  return _wrapNativeSuper(Class)
}

/* eslint no-console:0 */
var formatRegExp = /%[sdj%]/g
var warning = function warning() {} // don't print warning message when in production env or node runtime

if (
  typeof process !== 'undefined' &&
  process.env &&
  process.env.NODE_ENV !== 'production' &&
  typeof window !== 'undefined' &&
  typeof document !== 'undefined'
) {
  warning = function warning(type, errors) {
    if (
      typeof console !== 'undefined' &&
      console.warn &&
      typeof ASYNC_VALIDATOR_NO_WARNING === 'undefined'
    ) {
      if (
        errors.every(function (e) {
          return typeof e === 'string'
        })
      ) {
        console.warn(type, errors)
      }
    }
  }
}

function convertFieldsError(errors) {
  if (!errors || !errors.length) return null
  var fields = {}
  errors.forEach(function (error) {
    var field = error.field
    fields[field] = fields[field] || []
    fields[field].push(error)
  })
  return fields
}
function format(template) {
  for (
    var _len = arguments.length,
      args = new Array(_len > 1 ? _len - 1 : 0),
      _key = 1;
    _key < _len;
    _key++
  ) {
    args[_key - 1] = arguments[_key]
  }

  var i = 0
  var len = args.length

  if (typeof template === 'function') {
    return template.apply(null, args)
  }

  if (typeof template === 'string') {
    var str = template.replace(formatRegExp, function (x) {
      if (x === '%%') {
        return '%'
      }

      if (i >= len) {
        return x
      }

      switch (x) {
        case '%s':
          return String(args[i++])

        case '%d':
          return Number(args[i++])

        case '%j':
          try {
            return JSON.stringify(args[i++])
          } catch (_) {
            return '[Circular]'
          }

          break

        default:
          return x
      }
    })
    return str
  }

  return template
}

function isNativeStringType(type) {
  return (
    type === 'string' ||
    type === 'url' ||
    type === 'hex' ||
    type === 'email' ||
    type === 'date' ||
    type === 'pattern'
  )
}

function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true
  }

  if (type === 'array' && Array.isArray(value) && !value.length) {
    return true
  }

  if (isNativeStringType(type) && typeof value === 'string' && !value) {
    return true
  }

  return false
}

function asyncParallelArray(arr, func, callback) {
  var results = []
  var total = 0
  var arrLength = arr.length

  function count(errors) {
    results.push.apply(results, errors || [])
    total++

    if (total === arrLength) {
      callback(results)
    }
  }

  arr.forEach(function (a) {
    func(a, count)
  })
}

function asyncSerialArray(arr, func, callback) {
  var index = 0
  var arrLength = arr.length

  function next(errors) {
    if (errors && errors.length) {
      callback(errors)
      return
    }

    var original = index
    index = index + 1

    if (original < arrLength) {
      func(arr[original], next)
    } else {
      callback([])
    }
  }

  next([])
}

function flattenObjArr(objArr) {
  var ret = []
  Object.keys(objArr).forEach(function (k) {
    ret.push.apply(ret, objArr[k] || [])
  })
  return ret
}

var AsyncValidationError = /*#__PURE__*/ (function (_Error) {
  _inheritsLoose$1(AsyncValidationError, _Error)

  function AsyncValidationError(errors, fields) {
    var _this

    _this = _Error.call(this, 'Async Validation Error') || this
    _this.errors = errors
    _this.fields = fields
    return _this
  }

  return AsyncValidationError
})(/*#__PURE__*/ _wrapNativeSuper(Error))
function asyncMap(objArr, option, func, callback, source) {
  if (option.first) {
    var _pending = new Promise(function (resolve, reject) {
      var next = function next(errors) {
        callback(errors)
        return errors.length
          ? reject(new AsyncValidationError(errors, convertFieldsError(errors)))
          : resolve(source)
      }

      var flattenArr = flattenObjArr(objArr)
      asyncSerialArray(flattenArr, func, next)
    })

    _pending['catch'](function (e) {
      return e
    })

    return _pending
  }

  var firstFields =
    option.firstFields === true ? Object.keys(objArr) : option.firstFields || []
  var objArrKeys = Object.keys(objArr)
  var objArrLength = objArrKeys.length
  var total = 0
  var results = []
  var pending = new Promise(function (resolve, reject) {
    var next = function next(errors) {
      results.push.apply(results, errors)
      total++

      if (total === objArrLength) {
        callback(results)
        return results.length
          ? reject(
              new AsyncValidationError(results, convertFieldsError(results))
            )
          : resolve(source)
      }
    }

    if (!objArrKeys.length) {
      callback(results)
      resolve(source)
    }

    objArrKeys.forEach(function (key) {
      var arr = objArr[key]

      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next)
      } else {
        asyncParallelArray(arr, func, next)
      }
    })
  })
  pending['catch'](function (e) {
    return e
  })
  return pending
}

function isErrorObj(obj) {
  return !!(obj && obj.message !== undefined)
}

function getValue(value, path) {
  var v = value

  for (var i = 0; i < path.length; i++) {
    if (v == undefined) {
      return v
    }

    v = v[path[i]]
  }

  return v
}

function complementError(rule, source) {
  return function (oe) {
    var fieldValue

    if (rule.fullFields) {
      fieldValue = getValue(source, rule.fullFields)
    } else {
      fieldValue = source[oe.field || rule.fullField]
    }

    if (isErrorObj(oe)) {
      oe.field = oe.field || rule.fullField
      oe.fieldValue = fieldValue
      return oe
    }

    return {
      message: typeof oe === 'function' ? oe() : oe,
      fieldValue: fieldValue,
      field: oe.field || rule.fullField,
    }
  }
}
function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s]

        if (typeof value === 'object' && typeof target[s] === 'object') {
          target[s] = _extends({}, target[s], value)
        } else {
          target[s] = value
        }
      }
    }
  }

  return target
}

var required$1 = function required(rule, value, source, errors, options, type) {
  if (
    rule.required &&
    (!source.hasOwnProperty(rule.field) ||
      isEmptyValue(value, type || rule.type))
  ) {
    errors.push(format(options.messages.required, rule.fullField))
  }
}

/**
 *  Rule for validating whitespace.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

var whitespace = function whitespace(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === '') {
    errors.push(format(options.messages.whitespace, rule.fullField))
  }
}

// https://github.com/kevva/url-regex/blob/master/index.js
var urlReg
var getUrlRegex = function () {
  if (urlReg) {
    return urlReg
  }

  var word = '[a-fA-F\\d:]'

  var b = function b(options) {
    return options && options.includeBoundaries
      ? '(?:(?<=\\s|^)(?=' + word + ')|(?<=' + word + ')(?=\\s|$))'
      : ''
  }

  var v4 =
    '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}'
  var v6seg = '[a-fA-F\\d]{1,4}'
  var v6 = (
    '\n(?:\n(?:' +
    v6seg +
    ':){7}(?:' +
    v6seg +
    '|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:' +
    v6seg +
    ':){6}(?:' +
    v4 +
    '|:' +
    v6seg +
    '|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:' +
    v6seg +
    ':){5}(?::' +
    v4 +
    '|(?::' +
    v6seg +
    '){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:' +
    v6seg +
    ':){4}(?:(?::' +
    v6seg +
    '){0,1}:' +
    v4 +
    '|(?::' +
    v6seg +
    '){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:' +
    v6seg +
    ':){3}(?:(?::' +
    v6seg +
    '){0,2}:' +
    v4 +
    '|(?::' +
    v6seg +
    '){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:' +
    v6seg +
    ':){2}(?:(?::' +
    v6seg +
    '){0,3}:' +
    v4 +
    '|(?::' +
    v6seg +
    '){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:' +
    v6seg +
    ':){1}(?:(?::' +
    v6seg +
    '){0,4}:' +
    v4 +
    '|(?::' +
    v6seg +
    '){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::' +
    v6seg +
    '){0,5}:' +
    v4 +
    '|(?::' +
    v6seg +
    '){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n'
  )
    .replace(/\s*\/\/.*$/gm, '')
    .replace(/\n/g, '')
    .trim() // Pre-compile only the exact regexes because adding a global flag make regexes stateful

  var v46Exact = new RegExp('(?:^' + v4 + '$)|(?:^' + v6 + '$)')
  var v4exact = new RegExp('^' + v4 + '$')
  var v6exact = new RegExp('^' + v6 + '$')

  var ip = function ip(options) {
    return options && options.exact
      ? v46Exact
      : new RegExp(
          '(?:' +
            b(options) +
            v4 +
            b(options) +
            ')|(?:' +
            b(options) +
            v6 +
            b(options) +
            ')',
          'g'
        )
  }

  ip.v4 = function (options) {
    return options && options.exact
      ? v4exact
      : new RegExp('' + b(options) + v4 + b(options), 'g')
  }

  ip.v6 = function (options) {
    return options && options.exact
      ? v6exact
      : new RegExp('' + b(options) + v6 + b(options), 'g')
  }

  var protocol = '(?:(?:[a-z]+:)?//)'
  var auth = '(?:\\S+(?::\\S*)?@)?'
  var ipv4 = ip.v4().source
  var ipv6 = ip.v6().source
  var host = '(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)'
  var domain = '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*'
  var tld = '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))'
  var port = '(?::\\d{2,5})?'
  var path = '(?:[/?#][^\\s"]*)?'
  var regex =
    '(?:' +
    protocol +
    '|www\\.)' +
    auth +
    '(?:localhost|' +
    ipv4 +
    '|' +
    ipv6 +
    '|' +
    host +
    domain +
    tld +
    ')' +
    port +
    path
  urlReg = new RegExp('(?:^' + regex + '$)', 'i')
  return urlReg
}

/* eslint max-len:0 */

var pattern$2 = {
  // http://emailregex.com/
  email:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,
}
var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value
  },
  float: function float(value) {
    return types.number(value) && !types.integer(value)
  },
  array: function array(value) {
    return Array.isArray(value)
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true
    }

    try {
      return !!new RegExp(value)
    } catch (e) {
      return false
    }
  },
  date: function date(value) {
    return (
      typeof value.getTime === 'function' &&
      typeof value.getMonth === 'function' &&
      typeof value.getYear === 'function' &&
      !isNaN(value.getTime())
    )
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false
    }

    return typeof value === 'number'
  },
  object: function object(value) {
    return typeof value === 'object' && !types.array(value)
  },
  method: function method(value) {
    return typeof value === 'function'
  },
  email: function email(value) {
    return (
      typeof value === 'string' &&
      value.length <= 320 &&
      !!value.match(pattern$2.email)
    )
  },
  url: function url(value) {
    return (
      typeof value === 'string' &&
      value.length <= 2048 &&
      !!value.match(getUrlRegex())
    )
  },
  hex: function hex(value) {
    return typeof value === 'string' && !!value.match(pattern$2.hex)
  },
}

var type$1 = function type(rule, value, source, errors, options) {
  if (rule.required && value === undefined) {
    required$1(rule, value, source, errors, options)
    return
  }

  var custom = [
    'integer',
    'float',
    'array',
    'regexp',
    'object',
    'method',
    'email',
    'number',
    'date',
    'url',
    'hex',
  ]
  var ruleType = rule.type

  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(
        format(options.messages.types[ruleType], rule.fullField, rule.type)
      )
    } // straight typeof check
  } else if (ruleType && typeof value !== rule.type) {
    errors.push(
      format(options.messages.types[ruleType], rule.fullField, rule.type)
    )
  }
}

var range = function range(rule, value, source, errors, options) {
  var len = typeof rule.len === 'number'
  var min = typeof rule.min === 'number'
  var max = typeof rule.max === 'number' // 正则匹配码点范围从U+010000一直到U+10FFFF的文字（补充平面Supplementary Plane）

  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g
  var val = value
  var key = null
  var num = typeof value === 'number'
  var str = typeof value === 'string'
  var arr = Array.isArray(value)

  if (num) {
    key = 'number'
  } else if (str) {
    key = 'string'
  } else if (arr) {
    key = 'array'
  } // if the value is not of a supported type for range validation
  // the validation rule rule should use the
  // type property to also test for a particular type

  if (!key) {
    return false
  }

  if (arr) {
    val = value.length
  }

  if (str) {
    // 处理码点大于U+010000的文字length属性不准确的bug，如"𠮷𠮷𠮷".lenght !== 3
    val = value.replace(spRegexp, '_').length
  }

  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len))
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min))
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max))
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(
      format(options.messages[key].range, rule.fullField, rule.min, rule.max)
    )
  }
}

var ENUM$1 = 'enum'

var enumerable$1 = function enumerable(rule, value, source, errors, options) {
  rule[ENUM$1] = Array.isArray(rule[ENUM$1]) ? rule[ENUM$1] : []

  if (rule[ENUM$1].indexOf(value) === -1) {
    errors.push(
      format(options.messages[ENUM$1], rule.fullField, rule[ENUM$1].join(', '))
    )
  }
}

var pattern$1 = function pattern(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      // if a RegExp instance is passed, reset `lastIndex` in case its `global`
      // flag is accidentally set to `true`, which in a validation scenario
      // is not necessary and the result might be misleading
      rule.pattern.lastIndex = 0

      if (!rule.pattern.test(value)) {
        errors.push(
          format(
            options.messages.pattern.mismatch,
            rule.fullField,
            value,
            rule.pattern
          )
        )
      }
    } else if (typeof rule.pattern === 'string') {
      var _pattern = new RegExp(rule.pattern)

      if (!_pattern.test(value)) {
        errors.push(
          format(
            options.messages.pattern.mismatch,
            rule.fullField,
            value,
            rule.pattern
          )
        )
      }
    }
  }
}

var rules = {
  required: required$1,
  whitespace: whitespace,
  type: type$1,
  range: range,
  enum: enumerable$1,
  pattern: pattern$1,
}

var string = function string(rule, value, callback, source, options) {
  var errors = []
  var validate =
    rule.required || (!rule.required && source.hasOwnProperty(rule.field))

  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback()
    }

    rules.required(rule, value, source, errors, options, 'string')

    if (!isEmptyValue(value, 'string')) {
      rules.type(rule, value, source, errors, options)
      rules.range(rule, value, source, errors, options)
      rules.pattern(rule, value, source, errors, options)

      if (rule.whitespace === true) {
        rules.whitespace(rule, value, source, errors, options)
      }
    }
  }

  callback(errors)
}

var method = function method(rule, value, callback, source, options) {
  var errors = []
  var validate =
    rule.required || (!rule.required && source.hasOwnProperty(rule.field))

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback()
    }

    rules.required(rule, value, source, errors, options)

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options)
    }
  }

  callback(errors)
}

var number = function number(rule, value, callback, source, options) {
  var errors = []
  var validate =
    rule.required || (!rule.required && source.hasOwnProperty(rule.field))

  if (validate) {
    if (value === '') {
      value = undefined
    }

    if (isEmptyValue(value) && !rule.required) {
      return callback()
    }

    rules.required(rule, value, source, errors, options)

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options)
      rules.range(rule, value, source, errors, options)
    }
  }

  callback(errors)
}

var _boolean = function _boolean(rule, value, callback, source, options) {
  var errors = []
  var validate =
    rule.required || (!rule.required && source.hasOwnProperty(rule.field))

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback()
    }

    rules.required(rule, value, source, errors, options)

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options)
    }
  }

  callback(errors)
}

var regexp = function regexp(rule, value, callback, source, options) {
  var errors = []
  var validate =
    rule.required || (!rule.required && source.hasOwnProperty(rule.field))

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback()
    }

    rules.required(rule, value, source, errors, options)

    if (!isEmptyValue(value)) {
      rules.type(rule, value, source, errors, options)
    }
  }

  callback(errors)
}

var integer = function integer(rule, value, callback, source, options) {
  var errors = []
  var validate =
    rule.required || (!rule.required && source.hasOwnProperty(rule.field))

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback()
    }

    rules.required(rule, value, source, errors, options)

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options)
      rules.range(rule, value, source, errors, options)
    }
  }

  callback(errors)
}

var floatFn = function floatFn(rule, value, callback, source, options) {
  var errors = []
  var validate =
    rule.required || (!rule.required && source.hasOwnProperty(rule.field))

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback()
    }

    rules.required(rule, value, source, errors, options)

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options)
      rules.range(rule, value, source, errors, options)
    }
  }

  callback(errors)
}

var array = function array(rule, value, callback, source, options) {
  var errors = []
  var validate =
    rule.required || (!rule.required && source.hasOwnProperty(rule.field))

  if (validate) {
    if ((value === undefined || value === null) && !rule.required) {
      return callback()
    }

    rules.required(rule, value, source, errors, options, 'array')

    if (value !== undefined && value !== null) {
      rules.type(rule, value, source, errors, options)
      rules.range(rule, value, source, errors, options)
    }
  }

  callback(errors)
}

var object = function object(rule, value, callback, source, options) {
  var errors = []
  var validate =
    rule.required || (!rule.required && source.hasOwnProperty(rule.field))

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback()
    }

    rules.required(rule, value, source, errors, options)

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options)
    }
  }

  callback(errors)
}

var ENUM = 'enum'

var enumerable = function enumerable(rule, value, callback, source, options) {
  var errors = []
  var validate =
    rule.required || (!rule.required && source.hasOwnProperty(rule.field))

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback()
    }

    rules.required(rule, value, source, errors, options)

    if (value !== undefined) {
      rules[ENUM](rule, value, source, errors, options)
    }
  }

  callback(errors)
}

var pattern = function pattern(rule, value, callback, source, options) {
  var errors = []
  var validate =
    rule.required || (!rule.required && source.hasOwnProperty(rule.field))

  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback()
    }

    rules.required(rule, value, source, errors, options)

    if (!isEmptyValue(value, 'string')) {
      rules.pattern(rule, value, source, errors, options)
    }
  }

  callback(errors)
}

var date = function date(rule, value, callback, source, options) {
  // console.log('integer rule called %j', rule);
  var errors = []
  var validate =
    rule.required || (!rule.required && source.hasOwnProperty(rule.field)) // console.log('validate on %s value', value);

  if (validate) {
    if (isEmptyValue(value, 'date') && !rule.required) {
      return callback()
    }

    rules.required(rule, value, source, errors, options)

    if (!isEmptyValue(value, 'date')) {
      var dateObject

      if (value instanceof Date) {
        dateObject = value
      } else {
        dateObject = new Date(value)
      }

      rules.type(rule, dateObject, source, errors, options)

      if (dateObject) {
        rules.range(rule, dateObject.getTime(), source, errors, options)
      }
    }
  }

  callback(errors)
}

var required = function required(rule, value, callback, source, options) {
  var errors = []
  var type = Array.isArray(value) ? 'array' : typeof value
  rules.required(rule, value, source, errors, options, type)
  callback(errors)
}

var type = function type(rule, value, callback, source, options) {
  var ruleType = rule.type
  var errors = []
  var validate =
    rule.required || (!rule.required && source.hasOwnProperty(rule.field))

  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback()
    }

    rules.required(rule, value, source, errors, options, ruleType)

    if (!isEmptyValue(value, ruleType)) {
      rules.type(rule, value, source, errors, options)
    }
  }

  callback(errors)
}

var any = function any(rule, value, callback, source, options) {
  var errors = []
  var validate =
    rule.required || (!rule.required && source.hasOwnProperty(rule.field))

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback()
    }

    rules.required(rule, value, source, errors, options)
  }

  callback(errors)
}

var validators = {
  string: string,
  method: method,
  number: number,
  boolean: _boolean,
  regexp: regexp,
  integer: integer,
  float: floatFn,
  array: array,
  object: object,
  enum: enumerable,
  pattern: pattern,
  date: date,
  url: type,
  hex: type,
  email: type,
  required: required,
  any: any,
}

function newMessages() {
  return {
    default: 'Validation error on field %s',
    required: '%s is required',
    enum: '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid',
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      boolean: '%s is not a %s',
      integer: '%s is not an %s',
      float: '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s',
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters',
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s',
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length',
    },
    pattern: {
      mismatch: '%s value %s does not match pattern %s',
    },
    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this))
      cloned.clone = this.clone
      return cloned
    },
  }
}
var messages = newMessages()

/**
 *  Encapsulates a validation schema.
 *
 *  @param descriptor An object declaring validation rules
 *  for this schema.
 */

var Schema = /*#__PURE__*/ (function () {
  // ========================= Static =========================
  // ======================== Instance ========================
  function Schema(descriptor) {
    this.rules = null
    this._messages = messages
    this.define(descriptor)
  }

  var _proto = Schema.prototype

  _proto.define = function define(rules) {
    var _this = this

    if (!rules) {
      throw new Error('Cannot configure a schema with no rules')
    }

    if (typeof rules !== 'object' || Array.isArray(rules)) {
      throw new Error('Rules must be an object')
    }

    this.rules = {}
    Object.keys(rules).forEach(function (name) {
      var item = rules[name]
      _this.rules[name] = Array.isArray(item) ? item : [item]
    })
  }

  _proto.messages = function messages(_messages) {
    if (_messages) {
      this._messages = deepMerge(newMessages(), _messages)
    }

    return this._messages
  }

  _proto.validate = function validate(source_, o, oc) {
    var _this2 = this

    if (o === void 0) {
      o = {}
    }

    if (oc === void 0) {
      oc = function oc() {}
    }

    var source = source_
    var options = o
    var callback = oc

    if (typeof options === 'function') {
      callback = options
      options = {}
    }

    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback(null, source)
      }

      return Promise.resolve(source)
    }

    function complete(results) {
      var errors = []
      var fields = {}

      function add(e) {
        if (Array.isArray(e)) {
          var _errors

          errors = (_errors = errors).concat.apply(_errors, e)
        } else {
          errors.push(e)
        }
      }

      for (var i = 0; i < results.length; i++) {
        add(results[i])
      }

      if (!errors.length) {
        callback(null, source)
      } else {
        fields = convertFieldsError(errors)
        callback(errors, fields)
      }
    }

    if (options.messages) {
      var messages$1 = this.messages()

      if (messages$1 === messages) {
        messages$1 = newMessages()
      }

      deepMerge(messages$1, options.messages)
      options.messages = messages$1
    } else {
      options.messages = this.messages()
    }

    var series = {}
    var keys = options.keys || Object.keys(this.rules)
    keys.forEach(function (z) {
      var arr = _this2.rules[z]
      var value = source[z]
      arr.forEach(function (r) {
        var rule = r

        if (typeof rule.transform === 'function') {
          if (source === source_) {
            source = _extends({}, source)
          }

          value = source[z] = rule.transform(value)
        }

        if (typeof rule === 'function') {
          rule = {
            validator: rule,
          }
        } else {
          rule = _extends({}, rule)
        } // Fill validator. Skip if nothing need to validate

        rule.validator = _this2.getValidationMethod(rule)

        if (!rule.validator) {
          return
        }

        rule.field = z
        rule.fullField = rule.fullField || z
        rule.type = _this2.getType(rule)
        series[z] = series[z] || []
        series[z].push({
          rule: rule,
          value: value,
          source: source,
          field: z,
        })
      })
    })
    var errorFields = {}
    return asyncMap(
      series,
      options,
      function (data, doIt) {
        var rule = data.rule
        var deep =
          (rule.type === 'object' || rule.type === 'array') &&
          (typeof rule.fields === 'object' ||
            typeof rule.defaultField === 'object')
        deep = deep && (rule.required || (!rule.required && data.value))
        rule.field = data.field

        function addFullField(key, schema) {
          return _extends({}, schema, {
            fullField: rule.fullField + '.' + key,
            fullFields: rule.fullFields
              ? [].concat(rule.fullFields, [key])
              : [key],
          })
        }

        function cb(e) {
          if (e === void 0) {
            e = []
          }

          var errorList = Array.isArray(e) ? e : [e]

          if (!options.suppressWarning && errorList.length) {
            Schema.warning('async-validator:', errorList)
          }

          if (errorList.length && rule.message !== undefined) {
            errorList = [].concat(rule.message)
          } // Fill error info

          var filledErrors = errorList.map(complementError(rule, source))

          if (options.first && filledErrors.length) {
            errorFields[rule.field] = 1
            return doIt(filledErrors)
          }

          if (!deep) {
            doIt(filledErrors)
          } else {
            // if rule is required but the target object
            // does not exist fail at the rule level and don't
            // go deeper
            if (rule.required && !data.value) {
              if (rule.message !== undefined) {
                filledErrors = []
                  .concat(rule.message)
                  .map(complementError(rule, source))
              } else if (options.error) {
                filledErrors = [
                  options.error(
                    rule,
                    format(options.messages.required, rule.field)
                  ),
                ]
              }

              return doIt(filledErrors)
            }

            var fieldsSchema = {}

            if (rule.defaultField) {
              Object.keys(data.value).map(function (key) {
                fieldsSchema[key] = rule.defaultField
              })
            }

            fieldsSchema = _extends({}, fieldsSchema, data.rule.fields)
            var paredFieldsSchema = {}
            Object.keys(fieldsSchema).forEach(function (field) {
              var fieldSchema = fieldsSchema[field]
              var fieldSchemaList = Array.isArray(fieldSchema)
                ? fieldSchema
                : [fieldSchema]
              paredFieldsSchema[field] = fieldSchemaList.map(
                addFullField.bind(null, field)
              )
            })
            var schema = new Schema(paredFieldsSchema)
            schema.messages(options.messages)

            if (data.rule.options) {
              data.rule.options.messages = options.messages
              data.rule.options.error = options.error
            }

            schema.validate(
              data.value,
              data.rule.options || options,
              function (errs) {
                var finalErrors = []

                if (filledErrors && filledErrors.length) {
                  finalErrors.push.apply(finalErrors, filledErrors)
                }

                if (errs && errs.length) {
                  finalErrors.push.apply(finalErrors, errs)
                }

                doIt(finalErrors.length ? finalErrors : null)
              }
            )
          }
        }

        var res

        if (rule.asyncValidator) {
          res = rule.asyncValidator(rule, data.value, cb, data.source, options)
        } else if (rule.validator) {
          try {
            res = rule.validator(rule, data.value, cb, data.source, options)
          } catch (error) {
            console.error == null ? void 0 : console.error(error) // rethrow to report error

            if (!options.suppressValidatorError) {
              setTimeout(function () {
                throw error
              }, 0)
            }

            cb(error.message)
          }

          if (res === true) {
            cb()
          } else if (res === false) {
            cb(
              typeof rule.message === 'function'
                ? rule.message(rule.fullField || rule.field)
                : rule.message || (rule.fullField || rule.field) + ' fails'
            )
          } else if (res instanceof Array) {
            cb(res)
          } else if (res instanceof Error) {
            cb(res.message)
          }
        }

        if (res && res.then) {
          res.then(
            function () {
              return cb()
            },
            function (e) {
              return cb(e)
            }
          )
        }
      },
      function (results) {
        complete(results)
      },
      source
    )
  }

  _proto.getType = function getType(rule) {
    if (rule.type === undefined && rule.pattern instanceof RegExp) {
      rule.type = 'pattern'
    }

    if (
      typeof rule.validator !== 'function' &&
      rule.type &&
      !validators.hasOwnProperty(rule.type)
    ) {
      throw new Error(format('Unknown rule type %s', rule.type))
    }

    return rule.type || 'string'
  }

  _proto.getValidationMethod = function getValidationMethod(rule) {
    if (typeof rule.validator === 'function') {
      return rule.validator
    }

    var keys = Object.keys(rule)
    var messageIndex = keys.indexOf('message')

    if (messageIndex !== -1) {
      keys.splice(messageIndex, 1)
    }

    if (keys.length === 1 && keys[0] === 'required') {
      return validators.required
    }

    return validators[this.getType(rule)] || undefined
  }

  return Schema
})()

Schema.register = function register(type, validator) {
  if (typeof validator !== 'function') {
    throw new Error(
      'Cannot register a validator by type, validator is not a function'
    )
  }

  validators[type] = validator
}

Schema.warning = warning
Schema.messages = messages
Schema.validators = validators

/**
 * 用于存储表单的数据
 */
var FormStore =
  // 存放表单中所有的数据 eg. {password: "ddd",username: "123"}

  // 所有的组件实例

  // 成功和失败的回调

  function FormStore() {
    var _this = this
    this.store = {}
    this.fieldEntities = []
    this.callbacks = {}
    this.errList = []
    this.registerField = function (field) {
      _this.fieldEntities.push(field)
      return function () {
        _this.fieldEntities = _this.fieldEntities.filter(function (item) {
          return item != field
        })
        delete _this.store[field.props.name]
      }
    }
    this.getFieldValue = function (name) {
      return _this.store[name]
    }
    this.setFieldsValue = function (newStore) {
      _this.store = _extends$1({}, _this.store, newStore)
      _this.fieldEntities.forEach(function (enetity) {
        var name = enetity.props.name
        Object.keys(newStore).forEach(function (key) {
          if (key === name) {
            enetity.onStoreChange.changeValue()
          }
        })
      })
    }
    this.validate = function () {
      var err = []
      _this.errList.length = 0
      _this.fieldEntities.forEach(function (entity) {
        var _validator$validate
        var _entity$props = entity.props,
          name = _entity$props.name,
          _entity$props$rules = _entity$props.rules,
          rules = _entity$props$rules === void 0 ? [] : _entity$props$rules
        var descriptor = {}
        if (rules.length) {
          // 多条校验规则
          if (rules.length > 1) {
            descriptor[name] = []
            rules.map(function (v) {
              descriptor[name].push(v)
            })
          } else {
            descriptor[name] = rules[0]
          }
        }
        var validator = new Schema(descriptor)
        validator.validate(
          ((_validator$validate = {}),
          (_validator$validate[name] = _this.store[name]),
          _validator$validate),
          function (errors) {
            if (errors) {
              var _this$errList
              err.push.apply(err, errors)
              ;(_this$errList = _this.errList).push.apply(_this$errList, errors)
              // 表单项更新
            }

            entity.onStoreChange.changeValue()
          }
        )
      })
      return err
    }
    this.setCallback = function (callback) {
      _this.callbacks = _extends$1({}, _this.callbacks, callback)
    }
    this.submit = function () {
      var err = _this.validate()
      if (err.length === 0) {
        _this.callbacks.onFinish == null
          ? void 0
          : _this.callbacks.onFinish(_this.store)
      } else if (err.length > 0) {
        _this.callbacks.onFinishFailed == null
          ? void 0
          : _this.callbacks.onFinishFailed(err)
      }
    }
    this.resetFields = function () {
      Object.keys(_this.store).forEach(function (key) {
        var _this$setFieldsValue
        _this.setFieldsValue(
          ((_this$setFieldsValue = {}),
          (_this$setFieldsValue[key] = ''),
          _this$setFieldsValue)
        )
      })
    }
    this.innerSetInitialValues = function (values) {
      _this.store = values
    }
    this.getForm = function () {
      return {
        setCallback: _this.setCallback,
        registerField: _this.registerField,
        getFieldValue: _this.getFieldValue,
        setFieldsValue: _this.setFieldsValue,
        resetFields: _this.resetFields,
        submit: _this.submit,
        store: _this.store,
        errList: _this.errList,
        fieldEntities: _this.fieldEntities,
        innerSetInitialValues: _this.innerSetInitialValues,
      }
    }
    this.callbacks = {
      onFinish: function onFinish(value) {},
      onFinishFailed: function onFinishFailed() {},
    }
  }

/**
 * 注册组件实例
 * @param field
 */ var useForm = function useForm(form) {
  var formRef = useRef()
  if (!formRef.current) {
    if (form) {
      formRef.current = form
    } else {
      var formStore = new FormStore()
      formRef.current = formStore.getForm()
    }
  }
  return [formRef.current]
}

var FormItemContext = /*#__PURE__*/ createContext({})

var pxCheck = function pxCheck(value) {
  return Number.isNaN(Number(value)) ? String(value) : value + 'px'
}
var defaultProps$8 = {
  name: '',
  label: '',
  className: '',
  rules: [
    {
      required: false,
      message: '',
    },
  ],
  disabled: false,
  labelWidth: 90,
  errorMessageAlign: 'left',
  showErrorLine: true,
  showErrorMessage: true,
  initialValue: '',
}
var FormItem = function FormItem(props) {
  var _defaultProps$props = _extends$1({}, defaultProps$8, props),
    label = _defaultProps$props.label,
    name = _defaultProps$props.name,
    children = _defaultProps$props.children,
    initialValue = _defaultProps$props.initialValue,
    labelWidth = _defaultProps$props.labelWidth,
    errorMessageAlign = _defaultProps$props.errorMessageAlign,
    _defaultProps$props$r = _defaultProps$props.rules,
    rules =
      _defaultProps$props$r === void 0
        ? [
            {
              required: false,
              message: '',
            },
          ]
        : _defaultProps$props$r,
    _defaultProps$props$c = _defaultProps$props.className,
    className = _defaultProps$props$c === void 0 ? '' : _defaultProps$props$c
  var cancelRegister
  var isInitialValue = false
  var context = useContext(FormItemContext)
  var _useState = useState({}),
    forceUpdate = _useState[1]
  var onStoreChange = useMemo(
    function () {
      /* 管理层改变 => 通知表单项 */
      var onStoreChange = {
        changeValue: function changeValue() {
          forceUpdate({})
        },
      }
      return onStoreChange
    },
    [context]
  )
  var getControlled = function getControlled(children) {
    var _props
    var getFieldValue = context.getFieldValue,
      setFieldsValue = context.setFieldsValue
    var type = children.type
    var defaultvalue =
      initialValue ||
      ((_props = children.props) == null ? void 0 : _props.defaultValue)
    if (defaultvalue && !isInitialValue) {
      var _setFieldsValue
      setFieldsValue(
        ((_setFieldsValue = {}),
        (_setFieldsValue[name] = defaultvalue),
        _setFieldsValue)
      )
      isInitialValue = true
    }
    return {
      defaultValue: getFieldValue(name),
      onChange: function onChange(event) {
        var _setFieldsValue2
        var originOnChange = children.props.onChange
        if (originOnChange) {
          originOnChange(event)
        }
        var newValue = event
        switch (type) {
          case 'checkbox':
            newValue = event.target.value
            break
        }
        setFieldsValue(
          ((_setFieldsValue2 = {}),
          (_setFieldsValue2[name] = newValue),
          _setFieldsValue2)
        )
      },
    }
  }
  var renderLayout = function renderLayout(childNode) {
    var _context$errList
    var item =
      context.errList.length > 0 &&
      ((_context$errList = context.errList) == null
        ? void 0
        : _context$errList.filter(function (item) {
            return item.field === name
          }))
    var starPositon = context.starPositon
    var renderStar =
      rules.length > 0 &&
      rules[0].required &&
      /*#__PURE__*/ React__default.createElement('i', {
        className: 'required',
      })
    var renderLabel =
      starPositon === 'Right'
        ? /*#__PURE__*/ React__default.createElement(
            React__default.Fragment,
            null,
            label,
            renderStar
          )
        : /*#__PURE__*/ React__default.createElement(
            React__default.Fragment,
            null,
            renderStar,
            label
          )
    return /*#__PURE__*/ React__default.createElement(
      'div',
      {
        className: 'ashe-form-item ' + className,
      },
      label
        ? /*#__PURE__*/ React__default.createElement(
            'div',
            {
              className: 'ashe-cell__title ashe-form-item__label',
              style: {
                width: pxCheck(labelWidth),
              },
            },
            renderLabel
          )
        : null,
      /*#__PURE__*/ React__default.createElement(
        'div',
        {
          className: 'ashe-cell__value ashe-form-item__body',
        },
        /*#__PURE__*/ React__default.createElement(
          'div',
          {
            className: 'ashe-form-item__body__slots',
          },
          childNode
        ),
        item.length > 0 &&
          /*#__PURE__*/ React__default.createElement(
            'div',
            {
              className: 'ashe-form-item__body__tips',
              style: {
                textAlign: errorMessageAlign,
              },
            },
            item[0].message
          )
      )
    )
  }
  var c = Array.isArray(children) ? children[0] : children
  var restCNode = c
  if (initialValue) {
    restCNode = /*#__PURE__*/ React__default.cloneElement(c, {
      defaultValue: initialValue,
    })
  }
  var returnChildNode = /*#__PURE__*/ React__default.cloneElement(
    restCNode,
    getControlled(restCNode)
  )
  useEffect(
    function () {
      // 注册组件实例到FormStore
      cancelRegister = context.registerField({
        onStoreChange: onStoreChange,
        props: _extends$1({}, props),
      })
      return function () {
        cancelRegister && cancelRegister()
      }
    },
    [onStoreChange]
  )
  return renderLayout(returnChildNode)
}

var _excluded$2 = [
  'initialValues',
  'children',
  'onFinish',
  'onFinishFailed',
  'labelPosition',
  'starPositon',
  'form',
]
//

var defaultProps$7 = {
  initialValues: {},
  className: '',
  style: undefined,
  form: {},
  labelPosition: 'Right',
  formGroupTitle: '',
  onFinish: function onFinish(obj) {},
  onFinishFailed: function onFinishFailed(value) {},
  onRest: function onRest() {},
  starPositon: 'Left',
}
var PositionInfo = {
  Top: 'form-layout-top',
  Left: 'form-layout-left',
  Right: 'form-layout-right',
}
var Form = function Form(props) {
  var _defaultProps$props = _extends$1({}, defaultProps$7, props),
    initialValues = _defaultProps$props.initialValues,
    children = _defaultProps$props.children,
    onFinish = _defaultProps$props.onFinish,
    onFinishFailed = _defaultProps$props.onFinishFailed,
    labelPosition = _defaultProps$props.labelPosition,
    starPositon = _defaultProps$props.starPositon,
    form = _defaultProps$props.form
  _objectWithoutPropertiesLoose$1(_defaultProps$props, _excluded$2)
  var formInstance = {}
  if (Object.keys(form).length !== 0) {
    formInstance = form
  } else {
    var _useForm = useForm(formInstance)
    formInstance = _useForm[0]
  }
  formInstance.starPositon = starPositon
  var _formInstance = formInstance,
    setCallback = _formInstance.setCallback,
    submit = _formInstance.submit,
    resetFields = _formInstance.resetFields,
    innerSetInitialValues = _formInstance.innerSetInitialValues
  innerSetInitialValues(initialValues)
  setCallback({
    onFinish: onFinish,
    onFinishFailed: onFinishFailed,
  })
  return /*#__PURE__*/ React__default.createElement(
    'form',
    {
      className:
        'ashe-form ' + PositionInfo[labelPosition] + ' ' + props.className,
      style: props.style,
      onSubmit: function onSubmit(e) {
        e.preventDefault()
        submit()
      },
      onReset: function onReset() {
        resetFields()
      },
    },
    /*#__PURE__*/ React__default.createElement(
      FormItemContext.Provider,
      {
        value: formInstance,
      },
      children
    )
  )
}
Form.defaultProps = defaultProps$7
Form.displayName = 'AsheForm'
Form.Item = FormItem
Form.useForm = useForm

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    )
  }
  return self
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function _setPrototypeOf(o, p) {
        o.__proto__ = p
        return o
      }
  return _setPrototypeOf(o, p)
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype)
  subClass.prototype.constructor = subClass
  _setPrototypeOf(subClass, superClass)
}

var createRoot

var m = require$$0
if (process.env.NODE_ENV === 'production') {
  createRoot = m.createRoot
} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  createRoot = function (c, o) {
    i.usingClientEntryPoint = true
    try {
      return m.createRoot(c, o)
    } finally {
      i.usingClientEntryPoint = false
    }
  }
}

function render(node, container) {
  var root = createRoot(container)
  root.render(node)
  return root
}

var defaultProps$6 = {
  show: false,
  type: 'rotate',
  size: 'medium',
  color: '',
  zIndex: 999,
  custom: false,
  fullScreen: false,
  bgColor: '',
  opacity: '1',
  fullScreenBgColor: ' #fff',
}
var Loading = function Loading(props) {
  var _defaultProps$props = _extends$1({}, defaultProps$6, props),
    show = _defaultProps$props.show,
    type = _defaultProps$props.type,
    size = _defaultProps$props.size,
    color = _defaultProps$props.color
  _defaultProps$props.bgColor
  _defaultProps$props.opacity
  _defaultProps$props.zIndex
  var fullScreen = _defaultProps$props.fullScreen,
    fullScreenBgColor = _defaultProps$props.fullScreenBgColor
  _defaultProps$props.custom
  var children = _defaultProps$props.children,
    className = _defaultProps$props.className
  var flashChangeBound1Element = /*#__PURE__*/ React__default.createElement(
    'div',
    {
      style: {
        background: color,
      },
      className: type + '-bounce1 spinner-' + type + '-' + size,
    }
  )
  var flashChangeBound2Element = /*#__PURE__*/ React__default.createElement(
    'div',
    {
      style: {
        background: color,
      },
      className: type + '-bounce2 spinner-' + type + '-' + size,
    }
  )
  var changeBound3Element = /*#__PURE__*/ React__default.createElement('div', {
    style: {
      backgroundColor: color,
    },
    className: type + '-bounce3 spinner-' + type + '-' + size + ' ',
  })
  var circleELement = /*#__PURE__*/ React__default.createElement(
    'div',
    {
      className: 'spinner-circle spinner-circle-' + size,
    },
    /*#__PURE__*/ React__default.createElement(
      'div',
      {
        className: 'spinner-container container1',
      },
      /*#__PURE__*/ React__default.createElement('div', {
        className: 'circle1 container-view ' + type + '-' + size,
        style: {
          background: color,
        },
      }),
      /*#__PURE__*/ React__default.createElement('div', {
        className: 'circle2 container-view ' + type + '-' + size,
        style: {
          background: color,
        },
      }),
      /*#__PURE__*/ React__default.createElement('div', {
        className: 'circle3 container-view ' + type + '-' + size,
        style: {
          background: color,
        },
      }),
      /*#__PURE__*/ React__default.createElement('div', {
        className: 'circle4 container-view ' + type + '-' + size,
        style: {
          background: color,
        },
      })
    ),
    /*#__PURE__*/ React__default.createElement(
      'div',
      {
        className: 'spinner-container container2',
      },
      /*#__PURE__*/ React__default.createElement('div', {
        className: 'circle1 container-view ' + type + '-' + size,
        style: {
          background: color,
        },
      }),
      /*#__PURE__*/ React__default.createElement('div', {
        className: 'circle2 container-view ' + type + '-' + size,
        style: {
          background: color,
        },
      }),
      /*#__PURE__*/ React__default.createElement('div', {
        className: 'circle3 container-view ' + type + '-' + size,
        style: {
          background: color,
        },
      }),
      /*#__PURE__*/ React__default.createElement('div', {
        className: 'circle4 container-view ' + type + '-' + size,
        style: {
          background: color,
        },
      })
    ),
    /*#__PURE__*/ React__default.createElement(
      'div',
      {
        className: 'spinner-container container3',
      },
      /*#__PURE__*/ React__default.createElement('div', {
        className: 'circle1 container-view ' + type + '-' + size,
        style: {
          background: color,
        },
      }),
      /*#__PURE__*/ React__default.createElement('div', {
        className: 'circle2 container-view ' + type + '-' + size,
        style: {
          background: color,
        },
      }),
      /*#__PURE__*/ React__default.createElement('div', {
        className: 'circle3 container-view ' + type + '-' + size,
        style: {
          background: color,
        },
      }),
      /*#__PURE__*/ React__default.createElement('div', {
        className: 'circle4 container-view ' + type + '-' + size,
        style: {
          background: color,
        },
      })
    )
  )
  var rotateElement = /*#__PURE__*/ React__default.createElement('div', {
    className: 'rotate rotate-' + size,
    style: {
      borderColor: color,
    },
  })
  var cn$1 = cn('loading')
  var cls = classNames(
    cn$1(),
    className,
    fullScreen ? 'ashe-loading-fullScreen' : ''
  )
  return /*#__PURE__*/ React__default.createElement(
    'div',
    {
      className: cls,
      style: {
        background: fullScreen ? fullScreenBgColor : '',
      },
    },
    show &&
      /*#__PURE__*/ React__default.createElement(
        'div',
        {
          className:
            type +
            '-spinner ' +
            (type === 'change' ? '' : 'spinner-' + type + '-' + size) +
            ' ',
        },
        (type === 'flash' || type === 'change') && flashChangeBound1Element,
        (type === 'flash' || type === 'change') && flashChangeBound2Element,
        type === 'change' && changeBound3Element,
        type === 'circle' && circleELement,
        type === 'rotate' && rotateElement
      ),
    children
  )
}
Loading.defaultProps = defaultProps$6
Loading.displayName = 'AsheLoading'

var Notification = /*#__PURE__*/ (function (_React$PureComponent) {
  _inheritsLoose(Notification, _React$PureComponent)
  function Notification(props) {
    var _this
    _this = _React$PureComponent.call(this, props) || this
    _this.closeTimer = void 0
    _this.close = _this.close.bind(_assertThisInitialized(_this))
    _this.startCloseTimer = _this.startCloseTimer.bind(
      _assertThisInitialized(_this)
    )
    _this.clearCloseTimer = _this.clearCloseTimer.bind(
      _assertThisInitialized(_this)
    )
    _this.close = _this.close.bind(_assertThisInitialized(_this))
    _this.clickCover = _this.clickCover.bind(_assertThisInitialized(_this))
    return _this
  }
  var _proto = Notification.prototype
  _proto.close = function close() {
    this.clearCloseTimer()
    this.props.onClose()
  }
  _proto.startCloseTimer = function startCloseTimer() {
    var _this2 = this
    var duration = this.props.duration
    if (duration) {
      this.closeTimer = window.setTimeout(function () {
        _this2.close()
      }, duration * 1000)
    }
  }
  _proto.clearCloseTimer = function clearCloseTimer() {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer)
      this.closeTimer = -1
    }
  }
  _proto.clickCover = function clickCover() {
    var closeOnClickOverlay = this.props.closeOnClickOverlay
    if (closeOnClickOverlay) {
      this.close()
    }
  }
  _proto.componentDidMount = function componentDidMount() {
    this.startCloseTimer()
  }
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.clearCloseTimer()
  }
  _proto.render = function render() {
    var _this3 = this
    var _this$props = this.props,
      id = _this$props.id,
      style = _this$props.style,
      title = _this$props.title,
      msg = _this$props.msg,
      bottom = _this$props.bottom,
      center = _this$props.center,
      bgColor = _this$props.bgColor,
      coverColor = _this$props.coverColor,
      textAlignCenter = _this$props.textAlignCenter,
      cover = _this$props.cover,
      type = _this$props.type
    _this$props.children
    var toastBem = cn('toast')
    var classes = classNames({
      'ashe-toast-center': center,
      'ashe-toast-cover': cover,
      'ashe-toast-loading': type === 'loading',
    })
    return /*#__PURE__*/ React__default.createElement(
      React__default.Fragment,
      null,
      type === 'loading'
        ? /*#__PURE__*/ React__default.createElement(
            'div',
            {
              className: 'loading',
            },
            /*#__PURE__*/ React__default.createElement(Loading, {
              show: true,
            })
          )
        : /*#__PURE__*/ React__default.createElement(
            'div',
            {
              className: toastBem() + ' ' + classes,
              id: 'toast-' + id,
              style: _extends$1(
                {
                  bottom: center ? 'auto' : '' + bottom,
                  backgroundColor: cover ? coverColor : '',
                },
                style
              ),
              onClick: function onClick() {
                _this3.clickCover()
              },
            },
            /*#__PURE__*/ React__default.createElement(
              'div',
              {
                className: toastBem('inner'),
                style: {
                  textAlign: textAlignCenter ? 'center' : 'left',
                  backgroundColor: bgColor,
                },
              },
              title
                ? /*#__PURE__*/ React__default.createElement(
                    'div',
                    {
                      className: 'ashe-toast-title',
                    },
                    title
                  )
                : null,
              /*#__PURE__*/ React__default.createElement(
                'span',
                {
                  className: toastBem('text'),
                },
                msg
              )
            )
          )
    )
  }
  return Notification
})(React__default.PureComponent)
Notification.newInstance = void 0
var newInstance = function newInstance(properties, callback) {
  var element = document.createElement('div')
  if (properties.id) {
    element.setAttribute('id', '' + properties.id)
  }
  document.body.appendChild(element)
  var called = false
  var root
  function refs(instance) {
    if (called) {
      return
    }
    called = true
    callback({
      component: instance,
      destroy: function destroy() {
        root.unmount()
        element && element.parentNode && element.parentNode.removeChild(element)
      },
    })
  }
  root = render(
    /*#__PURE__*/ React__default.createElement(
      Notification,
      _extends$1({}, properties, {
        ref: refs,
      })
    ),
    element
  )
}

var messageInstance = null
var defaultProps$5 = {
  msg: '',
  title: '',
  style: {},
  duration: 1.5,
  type: 'text',
  center: true,
  bottom: '30px',
  // center为false时生效，距离底部位置
  cover: false,
  // 是否展示透明遮罩层
  coverColor: 'rgba(0, 0, 0, 0)',
  // 遮罩颜色设定
  textAlignCenter: true,
  // 文字是否居中显示,true为居中，false为left
  loadingRotate: true,
  // 未实现
  bgColor: 'rgba(0, 0, 0, .8)',
  onClose: function onClose() {},
  closeOnClickOverlay: false, // 是否点击遮罩可关闭
}

var getInstance = function getInstance(props, callback) {
  if (messageInstance) {
    messageInstance.destroy()
    messageInstance = null
  }
  newInstance(props, function (notification) {
    return callback && callback(notification)
  })
}
var notice = function notice(options) {
  var close = function close() {
    if (messageInstance) {
      messageInstance.destroy()
      messageInstance = null
    }
  }
  var opts = _extends$1({}, defaultProps$5, options, {
    onClose: close,
  })
  getInstance(opts, function (notification) {
    messageInstance = notification
  })
}
var errorMsg = function errorMsg(msg) {
  if (!msg) {
    console.warn('[Ashe Toast]: msg cannot be null')
  }
}
var Toast = {
  text: function text(msg, options) {
    errorMsg(msg)
    return notice(
      _extends$1(
        {
          msg: msg,
          type: 'text',
        },
        options
      )
    )
  },
  loading: function loading(msg, options) {
    errorMsg(msg)
    return notice(
      _extends$1(
        {
          msg: msg,
          icon: 'loading',
          type: 'loading',
        },
        options
      )
    )
  },
  hide: function hide() {
    if (messageInstance) {
      messageInstance.destroy()
      messageInstance = null
    }
  },
}

var _excluded$1 = [
  'children',
  'hasMore',
  'threshold',
  'containerId',
  'useWindow',
  'useCapture',
  'isOpenRefresh',
  'pullIcon',
  'pullTxt',
  'loadIcon',
  'loadTxt',
  'loadMoreTxt',
  'className',
  'onRefresh',
  'onLoadMore',
  'onScrollChange',
]
var defaultProps$4 = {
  hasMore: true,
  threshold: 200,
  containerId: '',
  useWindow: true,
  useCapture: false,
  isOpenRefresh: false,
  pullIcon:
    'https://img10.360buyimg.com/imagetools/jfs/t1/169863/6/4565/6306/60125948E7e92774e/40b3a0cf42852bcb.png',
  pullTxt: '松开刷新',
  loadIcon:
    'https://img10.360buyimg.com/imagetools/jfs/t1/169863/6/4565/6306/60125948E7e92774e/40b3a0cf42852bcb.png',
  loadTxt: '加载中···',
  loadMoreTxt: '哎呀，这里是底部了啦',
}
var Infiniteloading = function Infiniteloading(props) {
  var _defaultProps$props = _extends$1({}, defaultProps$4, props),
    children = _defaultProps$props.children,
    hasMore = _defaultProps$props.hasMore,
    threshold = _defaultProps$props.threshold,
    containerId = _defaultProps$props.containerId,
    useWindow = _defaultProps$props.useWindow,
    useCapture = _defaultProps$props.useCapture,
    isOpenRefresh = _defaultProps$props.isOpenRefresh
  _defaultProps$props.pullIcon
  var pullTxt = _defaultProps$props.pullTxt
  _defaultProps$props.loadIcon
  var loadTxt = _defaultProps$props.loadTxt,
    loadMoreTxt = _defaultProps$props.loadMoreTxt,
    className = _defaultProps$props.className,
    onRefresh = _defaultProps$props.onRefresh,
    onLoadMore = _defaultProps$props.onLoadMore,
    onScrollChange = _defaultProps$props.onScrollChange,
    restProps = _objectWithoutPropertiesLoose$1(
      _defaultProps$props,
      _excluded$1
    )
  var _useState = useState(false),
    isInfiniting = _useState[0],
    setIsInfiniting = _useState[1]
  var scroller = useRef(null)
  var refreshTop = useRef(null)
  var scrollEl = useRef(window)
  var isTouching = useRef(false)
  var beforeScrollTop = useRef(0)
  var refreshMaxH = useRef(0)
  var y = useRef(0)
  var distance = useRef(0)
  var b = cn('infiniteloading')
  var classes = classNames(className, b())
  useEffect(
    function () {
      var parentElement = getParentElement(scroller.current)
      scrollEl.current = useWindow ? window : parentElement
      scrollEl.current.addEventListener('scroll', handleScroll, useCapture)
      return function () {
        scrollEl.current.removeEventListener('scroll', handleScroll, useCapture)
      }
    },
    [hasMore, isInfiniting]
  )
  useEffect(function () {
    var element = scroller.current
    element.addEventListener('touchmove', touchMove, {
      passive: false,
    })
    return function () {
      element.removeEventListener('touchmove', touchMove, {
        passive: false,
      })
    }
  }, [])
  var getStyle = function getStyle() {
    return {
      height: distance.current < 0 ? '0px' : distance.current + 'px',
      transition: isTouching.current
        ? 'height 0s cubic-bezier(0.25,0.1,0.25,1)'
        : 'height 0.2s cubic-bezier(0.25,0.1,0.25,1)',
    }
  }
  var getParentElement = function getParentElement(el) {
    return containerId
      ? document.querySelector('#' + containerId)
      : el && el.parentNode
  }
  var handleScroll = function handleScroll() {
    requestAniFrame()(function () {
      if (!isScrollAtBottom() || !hasMore || isInfiniting) {
        return false
      }
      setIsInfiniting(true)
      onLoadMore && onLoadMore(infiniteDone)
      return true
    })
  }
  var infiniteDone = function infiniteDone() {
    setIsInfiniting(false)
  }
  var refreshDone = function refreshDone() {
    distance.current = 0
    refreshTop.current.style.height = distance.current + 'px'
    isTouching.current = false
  }
  var touchStart = function touchStart(event) {
    if (beforeScrollTop.current === 0 && !isTouching.current && isOpenRefresh) {
      y.current = event.touches[0].pageY
      isTouching.current = true
      var childHeight = refreshTop.current.firstElementChild.offsetHeight
      refreshMaxH.current = Math.floor(childHeight * 1 + 10)
    }
  }
  var touchMove = function touchMove(event) {
    distance.current = event.touches[0].pageY - y.current
    if (distance.current > 0 && isTouching.current) {
      event.preventDefault()
      if (distance.current >= refreshMaxH.current) {
        distance.current = refreshMaxH.current
        refreshTop.current.style.height = distance.current + 'px'
      } else {
        refreshTop.current.style.height = distance.current + 'px'
      }
    } else {
      distance.current = 0
      refreshTop.current.style.height = distance.current + 'px'
      isTouching.current = false
    }
  }
  var touchEnd = function touchEnd() {
    if (distance.current < refreshMaxH.current) {
      distance.current = 0
      refreshTop.current.style.height = distance.current + 'px'
    } else {
      onRefresh && onRefresh(refreshDone)
    }
  }
  var requestAniFrame = function requestAniFrame() {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      function fn(callback) {
        window.setTimeout(callback, 1000 / 60)
      }
    )
  }
  var getWindowScrollTop = function getWindowScrollTop() {
    return window.pageYOffset !== undefined
      ? window.pageYOffset
      : (document.documentElement || document.body.parentNode || document.body)
          .scrollTop
  }
  var calculateTopPosition = function calculateTopPosition(el) {
    return !el ? 0 : el.offsetTop + calculateTopPosition(el.offsetParent)
  }
  var isScrollAtBottom = function isScrollAtBottom() {
    var offsetDistance = 0
    var resScrollTop = 0
    var direction = 'down'
    var windowScrollTop = getWindowScrollTop()
    if (useWindow) {
      if (scroller.current) {
        offsetDistance =
          calculateTopPosition(scroller.current) +
          scroller.current.offsetHeight -
          windowScrollTop -
          window.innerHeight
      }
      resScrollTop = windowScrollTop
    } else {
      var _ref = scrollEl.current,
        scrollHeight = _ref.scrollHeight,
        clientHeight = _ref.clientHeight,
        scrollTop = _ref.scrollTop
      offsetDistance = scrollHeight - clientHeight - scrollTop
      resScrollTop = scrollTop
    }
    if (beforeScrollTop.current > resScrollTop) {
      direction = 'up'
    } else {
      direction = 'down'
    }
    beforeScrollTop.current = resScrollTop
    onScrollChange && onScrollChange(resScrollTop)
    return offsetDistance <= threshold && direction === 'down'
  }
  return /*#__PURE__*/ React__default.createElement(
    'div',
    _extends$1(
      {
        className: classes,
        ref: scroller,
        onTouchStart: touchStart,
        onTouchMove: touchMove,
        onTouchEnd: touchEnd,
      },
      restProps
    ),
    /*#__PURE__*/ React__default.createElement(
      'div',
      {
        className: 'ashe-infiniteloading-top',
        ref: refreshTop,
        style: getStyle(),
      },
      /*#__PURE__*/ React__default.createElement(
        'div',
        {
          className: 'top-box',
        },
        /*#__PURE__*/ React__default.createElement(
          'span',
          {
            className: 'top-text',
          },
          pullTxt
        )
      )
    ),
    /*#__PURE__*/ React__default.createElement(
      'div',
      {
        className: 'ashe-infinite-container',
      },
      children
    ),
    /*#__PURE__*/ React__default.createElement(
      'div',
      {
        className: 'ashe-infiniteloading-bottom',
      },
      isInfiniting
        ? /*#__PURE__*/ React__default.createElement(
            'div',
            {
              className: 'bottom-box',
            },
            /*#__PURE__*/ React__default.createElement(
              'div',
              {
                className: 'bottom-text',
              },
              loadTxt
            )
          )
        : !hasMore &&
            /*#__PURE__*/ React__default.createElement(
              'div',
              {
                className: 'tips',
              },
              loadMoreTxt
            )
    )
  )
}
Infiniteloading.defaultProps = defaultProps$4
Infiniteloading.displayName = 'asheInfiniteloading'

var Dialog = {
  show: function show() {},
  hide: function hide() {},
}

var padZero = function padZero(num, length) {
  if (length === void 0) {
    length = 2
  }
  num += ''
  while (num.length < length) {
    num = '0' + num
  }
  return num.toString()
}
var getTimeStamp = function getTimeStamp(timeStr) {
  if (!timeStr) return Date.now()
  var t = timeStr
  t = t > 0 ? +t : t.toString().replace(/-/g, '/')
  return new Date(t).getTime()
}
function parseTime(time) {
  var SECOND = 1000
  var MINUTE = 60 * SECOND
  var HOUR = 60 * MINUTE
  var DAY = 24 * HOUR
  var days = Math.floor(time / DAY)
  var hours = Math.floor((time % DAY) / HOUR)
  var minutes = Math.floor((time % HOUR) / MINUTE)
  var seconds = Math.floor((time % MINUTE) / SECOND)
  var milliseconds = Math.floor(time % SECOND)
  return {
    total: time,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    milliseconds: milliseconds,
  }
}
function parseFormat(format, currentTime) {
  var days = currentTime.days
  var hours = currentTime.hours,
    minutes = currentTime.minutes,
    seconds = currentTime.seconds,
    milliseconds = currentTime.milliseconds
  if (format.includes('DD')) {
    format = format.replace('DD', padZero(days))
  } else {
    hours += days * 24
  }
  if (format.includes('HH')) {
    format = format.replace('HH', padZero(hours))
  } else {
    minutes += hours * 60
  }
  if (format.includes('mm')) {
    format = format.replace('mm', padZero(minutes))
  } else {
    seconds += minutes * 60
  }
  if (format.includes('ss')) {
    format = format.replace('ss', padZero(seconds))
  } else {
    milliseconds += seconds * 1000
  }
  if (format.includes('S')) {
    var ms = padZero(milliseconds, 3)
    if (format.includes('SSS')) {
      format = format.replace('SSS', ms)
    } else if (format.includes('SS')) {
      format = format.replace('SS', ms.slice(0, 2))
    } else {
      format = format.replace('S', ms.charAt(0))
    }
  }
  return format
}

var _excluded = [
  'paused',
  'startTime',
  'endTime',
  'millisecond',
  'format',
  'autoStart',
  'time',
  'className',
  'style',
  'onFinish',
  'onPaused',
  'onRestart',
  'onChange',
  'children',
]
var defaultProps$3 = {
  paused: false,
  startTime: Date.now(),
  endTime: Date.now(),
  millisecond: false,
  format: 'HH:mm:ss',
  autoStart: true,
  time: 0,
}
var b = cn('countdown')
var InternalCountDown = function InternalCountDown(props, ref) {
  var _defaultProps$props = _extends$1({}, defaultProps$3, props),
    paused = _defaultProps$props.paused,
    startTime = _defaultProps$props.startTime,
    endTime = _defaultProps$props.endTime
  _defaultProps$props.millisecond
  var format = _defaultProps$props.format,
    autoStart = _defaultProps$props.autoStart,
    time = _defaultProps$props.time,
    className = _defaultProps$props.className,
    style = _defaultProps$props.style,
    onFinish = _defaultProps$props.onFinish,
    onPaused = _defaultProps$props.onPaused,
    onRestart = _defaultProps$props.onRestart,
    onChange = _defaultProps$props.onChange,
    children = _defaultProps$props.children,
    rest = _objectWithoutPropertiesLoose$1(_defaultProps$props, _excluded)
  var _useState = useState(0),
    restTimeStamp = _useState[0],
    setRestTime = _useState[1]
  var stateRef = useRef({
    // pauseTime: 0,
    // curr: 0,
    // isPaused: paused,
    isIninted: false,
    timer: 0,
    restTime: 0,
    // 倒计时剩余时间时间
    counting: !paused && autoStart,
    // 是否处于倒计时中
    handleEndTime: Date.now(),
    // 最终截止时间
    diffTime: 0, // 设置了 startTime 时，与 date.now() 的差异
  })

  var initTime = function initTime() {
    stateRef.current.handleEndTime = endTime
    stateRef.current.diffTime = Date.now() - getTimeStamp(startTime)
    if (!stateRef.current.counting) stateRef.current.counting = true
    tick()
  }
  var tick = function tick() {
    stateRef.current.timer = requestAnimationFrame(function () {
      if (stateRef.current.counting) {
        var currentTime = Date.now() - stateRef.current.diffTime
        var remainTime = Math.max(
          stateRef.current.handleEndTime - currentTime,
          0
        )
        stateRef.current.restTime = remainTime
        setRestTime(remainTime)
        // 倒计时结束
        if (!remainTime) {
          stateRef.current.counting = false
          pause()
          onFinish && onFinish()
        }
        if (remainTime > 0) {
          tick()
        }
      }
    })
  }

  // 暂停
  var pause = function pause() {
    cancelAnimationFrame(stateRef.current.timer)
    stateRef.current.counting = false
    onPaused && onPaused(stateRef.current.restTime)
  }
  useImperativeHandle(ref, function () {
    return {
      start: function start() {
        if (!stateRef.current.counting && !autoStart) {
          stateRef.current.counting = true
          stateRef.current.handleEndTime =
            Date.now() + Number(stateRef.current.restTime)
          tick()
          onRestart && onRestart(stateRef.current.restTime)
        }
      },
      pause: function pause() {
        cancelAnimationFrame(stateRef.current.timer)
        stateRef.current.counting = false
        onPaused && onPaused(stateRef.current.restTime)
      },
      reset: function reset() {
        if (!autoStart) {
          pause()
          stateRef.current.restTime = time
          setRestTime(time)
        }
      },
    }
  })

  // 监听值变化
  useEffect(
    function () {
      var time = parseTime(stateRef.current.restTime)
      onChange && onChange(time)
    },
    [restTimeStamp]
  )

  // 监听开始结束时间变更
  useEffect(
    function () {
      if (stateRef.current.isIninted) {
        initTime()
      }
    },
    [endTime, startTime]
  )

  // 初始化
  useEffect(function () {
    if (autoStart) {
      initTime()
    } else {
      stateRef.current.restTime = time
      setRestTime(time)
      if (!stateRef.current.isIninted) {
        stateRef.current.isIninted = true
      }
    }
    return componentWillUnmount
  }, [])
  var componentWillUnmount = function componentWillUnmount() {
    clearInterval(stateRef.current.timer)
  }
  var renderTime = (function () {
    var time = parseTime(stateRef.current.restTime)
    return parseFormat(format, time)
  })()
  return /*#__PURE__*/ React__default.createElement(
    'div',
    _extends$1(
      {
        className: b() + ' ' + (className || ''),
        style: _extends$1({}, style),
      },
      rest
    ),
    children ||
      /*#__PURE__*/ React__default.createElement(
        'div',
        {
          className: b('block'),
        },
        renderTime
      )
  )
}
var CountDown = /*#__PURE__*/ React__default.forwardRef(InternalCountDown)
CountDown.defaultProps = defaultProps$3
CountDown.displayName = 'AsheCountDown'

var defaultProps$2 = {}
var VirtualList = function VirtualList(props) {
  var _defaultProps$props = _extends$1({}, defaultProps$2, props)
  _defaultProps$props.children
  return /*#__PURE__*/ React__default.createElement(
    'div',
    {
      className: 'ashe-virtuallist',
    },
    'VirtualList'
  )
}
VirtualList.defaultProps = defaultProps$2
VirtualList.displayName = 'AsheVirtualList'

var defaultProps$1 = {}
var Collapse = function Collapse(props) {
  var _defaultProps$props = _extends$1({}, defaultProps$1, props)
  _defaultProps$props.children
  return /*#__PURE__*/ React__default.createElement(
    'div',
    {
      className: 'ashe-collapse',
    },
    'Collapse'
  )
}
Collapse.defaultProps = defaultProps$1
Collapse.displayName = 'AsheCollapse'

var classPrefix = 'ashe-ellipsis'
var defaultProps = {
  content: '',
  direction: 'end',
  lineHeight: '20',
  rows: 1,
}
var Ellipsis = function Ellipsis(props) {
  var _defaultProps$props = _extends$1({}, defaultProps, props),
    content = _defaultProps$props.content
  _defaultProps$props.direction
  var lineHeight = _defaultProps$props.lineHeight,
    rows = _defaultProps$props.rows
  var container = null
  var maxHeight = 0 // 当行的最大高度
  var root = useRef(null)
  var _useState = useState(false)
  _useState[0]
  var setExceeded = _useState[1]
  var _useState2 = useState(false)
  _useState2[0]
  _useState2[1]
  useRef()
  useLayoutEffect(
    function () {
      if (content) {
        createContainer()
      }
    },
    [content]
  )
  var createContainer = function createContainer() {
    if (!root.current) return
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    var originStyle = window.getComputedStyle(root.current)
    container = document.createElement('div')
    var styleNames = Array.prototype.slice.apply(originStyle)
    styleNames.forEach(function (name) {
      container.style.setProperty(name, originStyle.getPropertyValue(name))
    })
    container.style.position = 'fixed'
    container.style.left = '999999px'
    container.style.top = '999999px'
    container.style.zIndex = '-1000'
    container.style.height = 'auto'
    container.style.minHeight = 'auto'
    container.style.maxHeight = 'auto'
    container.style.textOverflow = 'clip'
    container.style.whiteSpace = 'normal'
    container.style.webkitLineClamp = 'unset'
    container.style.display = 'block'
    var lineH = pxToNumber(
      originStyle.lineHeight === 'normal' ? lineHeight : originStyle.lineHeight
    )
    maxHeight = Math.floor(
      lineH * (Number(rows) + 0.5) +
        pxToNumber(originStyle.paddingTop) +
        pxToNumber(originStyle.paddingBottom)
    )
    container.innerText = content
    document.body.appendChild(container)
    calcEllipse()
    document.body.removeChild(container)
  }
  var calcEllipse = function calcEllipse() {
    if (container.offsetHeight <= maxHeight) {
      setExceeded(false)
    } else {
      setExceeded(true)
      content.length
    }
  }
  var pxToNumber = function pxToNumber(value) {
    if (!value) return 0
    var match = value.match(/^\d*(\.\d*)?/)
    return match ? Number(match[0]) : 0
  }
  return withNativeProps(
    props,
    /*#__PURE__*/ React__default.createElement(
      'div',
      {
        className: classPrefix,
        ref: root,
      },
      content
    )
  )
}
Ellipsis.defaultProps = defaultProps
Ellipsis.displayName = 'AsheEllipsis'

export {
  Button,
  Cell,
  Collapse,
  ConfigProvider,
  CountDown,
  Dialog,
  Elevator,
  Ellipsis,
  Form,
  GridNamespace as Grid,
  Image,
  Infiniteloading,
  Input,
  Loading,
  Mask,
  Space,
  Toast,
  VirtualList,
}
