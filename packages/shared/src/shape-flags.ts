export enum ShapeFlags {
  ELEMENT = 1,
  FUNCTIONAL_COMPONENT = 1 << 1, //相当于1*2
  STATEFUL_COMPONENT = 1 << 2, // 相当于1*2*2
  /** | 按位或，代表其中一个或两个操作数对应的二进制为1时，该位的结果值为1 */
  COMPONENT = ShapeFlags.STATEFUL_COMPONENT | ShapeFlags.FUNCTIONAL_COMPONENT
}
