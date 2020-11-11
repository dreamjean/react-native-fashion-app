// linear interpolation 线性插值
// 两个向量之间的线形插值。当t为0时返回的是v0  t为1时 返回的是v1  所以第三个参数应该是取一个 0~1的渐变值

export const lerp = (v0, v1, t) => (1 - t) * v0 + t * v1;
