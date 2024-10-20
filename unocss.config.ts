import { defineConfig, presetUno, presetIcons, type UserConfig } from "unocss";

const config: UserConfig = defineConfig({
  presets: [presetUno(), presetIcons()],

  content: {
    pipeline: {
      include: ["**/*.ts"],
    },
  },
});

export default config;
