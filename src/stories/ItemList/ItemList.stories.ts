import type { Meta } from "@storybook/react";

import ItemList from "./ItemList";

const meta = {
  title: "Example/ItemList",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ItemList>;

export default meta;
