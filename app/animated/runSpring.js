import { State } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { snapPoint, useClock, useValue } from 'react-native-redash/lib/module/v1';

const { set, call, cond, eq, startClock, stopClock, block, spring, add } = Animated;

function runSpring({ value, velocity, state: gestureState, snapPoints, onSnap }) {
  const offset = useValue(0);
  const clock = useClock();

  const state = {
    finished: useValue(0),
    velocity: useValue(0),
    position: useValue(0),
    time: useValue(0),
  };

  const config = {
    toValue: useValue(0),
    damping: 6,
    mass: 1,
    stiffness: 64,
    overshootClamping: useValue(0),
    restSpeedThreshold: useValue(0.01),
    restDisplacementThreshold: useValue(0.01),
  };

  return block([
    // 开始状态
    cond(eq(gestureState, State.BEGAN), [
      set(offset, state.position), // 偏移量设置为当前位置
      stopClock(clock), // 手势完成
      set(state.finished, 0), // 手势完成重置
      set(state.time, 0), // 手势完成重置
    ]),
    // 手势处于活动状态
    cond(eq(gestureState, State.ACTIVE), [
      set(state.position, add(offset, value)), // 当前位置为偏移量 + 值
      set(state.velocity, velocity), // 分配速度
      set(config.toValue, snapPoint(state.position, state.velocity, snapPoints)), // 设置配置的值不是我们捕捉的位置,并决定在哪里
      cond(
        eq(config.toValue, 0),
        [
          set(config.overshootClamping, 0),
          set(config.restSpeedThreshold, 0.01),
          set(config.restDisplacementThreshold, 0.01),
        ],
        [
          set(config.overshootClamping, 1),
          set(config.restSpeedThreshold, 100),
          set(config.restDisplacementThreshold, 100),
        ]
      ),
    ]),

    // 手势结束
    cond(eq(gestureState, State.END), [
      startClock(clock), // 开始计时
      spring(clock, state, config), // 弹跳
      cond(state.finished, [onSnap && call([state.position], onSnap)]), // 状态完成时
    ]),
    state.position,
  ]);
}

export default runSpring;
