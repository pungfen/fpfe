import { pluginPrettier, pluginPrettierRecommended } from "../plugins";

import type { Config } from "../types";

export const prettier = (): Config[] => {
  return [
    {
      name: "fp/prettier",
      plugins: {
        prettier: pluginPrettier,
      },
      rules: {
        ...pluginPrettierRecommended.rules,
      },
    },
  ];
};
