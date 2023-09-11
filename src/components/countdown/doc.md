#  CountDown组件
用于实时展示倒计时数值，支持毫秒精度。



## 基础用法

```tsx
import { CountDown } from 'ashe-design';
<CountDown endTime={Date.now() + 30 * 60 * 60 * 1000} />
```

## 毫秒级渲染

```tsx
import  React, {useRef }from "react";
import { CountDown } from 'ashe-design';

const App = () => {
  const stateRef = useRef({
    endTime: Date.now() + 60 * 1000,
  })
  return (
        <CountDown endTime={stateRef.current.endTime} millisecond format="HH:mm:ss:SS" />
  );
};
export default App;

```

## 自定义格式
```tsx
import  React, {useRef }from "react";
import { CountDown } from 'ashe-design';

const App = () => {
  return  <CountDown
      endTime={Date.now() + 60 * 1000 * 60 * 60}
      format="DD 天 HH 时 mm 分 ss 秒"
  />

}
export  default App;

```

## 自定义样式

```tsx
import  React, {useRef }from "react";
import { CountDown } from 'ashe-design';

const App = () => {
    const [timeData, setResetTime] = useState<any>({
        d: '1',
        h: '00',
        m: '00',
        s: '00',
    })
    const onChange = (v: any) => {
        setResetTime(v)
    }
  return (
      <CountDown
          endTime={Date.now() + 60 * 1000 * 60}
          onChange={onChange}
      >
          <div
              className="countdown-part-box"
              style={{ display: 'flex', alignItems: 'center' }}
          >
              <span className="block">{timeData.hours}</span>
              <span className="colon">:</span>
              <span className="block">{timeData.minutes}</span>
              <span className="colon">:</span>
              <span className="block">{timeData.seconds}</span>
          </div>
      </CountDown>
  );
};
export default App;
```

## API

## Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| name         | 图标名称或图片链接               | String | -                |
| color        | 图标颜色                         | String | -                |
| size         | 图标大小，如 '20px' '2em' '2rem' | String | -                |
| class-prefix | 类名前缀，用于使用自定义图标     | String | 'nutui-iconfont' |
| tag          | HTML 标签                        | String | 'i'              |

## Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| click  | 点击图标时触发 | event: Event |
