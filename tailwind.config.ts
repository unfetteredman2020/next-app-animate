import type { Config } from "tailwindcss";

const SIZE = 2000;
const RATIO = 3.75;

const getListObject = (count = 0, flag?: boolean) => {
  const object: Record<string, string> = {};
  for (let i = 0; i < count; i++) {
    object[`pc-${i}`] = `${i}px`;
    object[`phone-${i}`] = flag && i <= 2 ? `${i}px` : `${i / RATIO}rem`;
  }
  return object;
};

const getZIndex = (list: number) => {
  const object: Record<number, number> = {};
  for (let i = 0; i < list; i++) {
    object[i] = i;
  }
  return object;
};

const getScale = () => {
  return Array.from({ length: 9999 }, (_, i) => i / 10).reduce((pre, cur) => {
    pre["pc-" + cur] = cur + "";
    return pre;
  }, {} as Record<string, string>);
};

const config: Config = {
  content: ["./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      spacing: {
        ...getListObject(SIZE),
      },
      fontSize: {
        ...getListObject(SIZE),
      },
      fontFamily: {
        PingFangSC: ["PingFang SC", "PingFang"],
        WixMadeforText: ["WixMadeforText"],
      },
      width: {
        ...getListObject(SIZE),
      },
      maxWidth: {
        ...getListObject(SIZE),
      },
      maxHeight: {
        ...getListObject(SIZE),
      },
      minWidth: {
        ...getListObject(SIZE),
      },
      minHeight: {
        ...getListObject(SIZE),
      },
      height: {
        ...getListObject(SIZE),
      },
      borderWidth: {
        ...getListObject(SIZE),
      },
      padding: {
        ...getListObject(SIZE),
      },
      margin: {
        ...getListObject(SIZE),
      },
      borderRadius: {
        ...getListObject(SIZE, true),
      },
      // 行高
      lineHeight: {
        ...getListObject(SIZE),
      },
      // 间距
      gap: {
        ...getListObject(SIZE),
      },
      // @ts-ignore
      zIndex: {
        ...getZIndex(SIZE),
      },
      inset: {
        ...getListObject(SIZE),
      },
      scale: {
        ...getScale(),
      },
      opacity: {
        ...getListObject(SIZE),
      },
    },
  },
  plugins: [],
};
export default config;
