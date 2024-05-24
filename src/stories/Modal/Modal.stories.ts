import { type Meta } from "@storybook/react";
// import { fn } from "@storybook/test";
import Modal from "./Modal";

const meta = {
  title: "Example/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    // logIn: fn(),
    // joinIn: fn(),
  },
} satisfies Meta<typeof Modal>;

export default meta;
