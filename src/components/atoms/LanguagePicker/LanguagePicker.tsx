import { useState } from "react";
import { UnstyledButton, Menu, Group } from "@mantine/core";
import "./LanguagePicker.scss";

const data = [
  { label: "English" },
  { label: "German" },
  { label: "Italian" },
  { label: "French" },
  { label: "Polish" },
];

export function LanguagePicker() {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(data[0]);
  const items = data.map((item) => (
    <Menu.Item onClick={() => setSelected(item)} key={item.label}>
      {item.label}
    </Menu.Item>
  ));

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      width="fit-content"
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton
          className="languagePicker"
          data-expanded={opened || undefined}
        >
          <Group gap="xs">
            <span className="languagePicker__text">{selected.label}</span>
          </Group>
          <img
            src={"src/assets/arrowDown.png"}
            alt={"arrowDown"}
            className={"languagePicker__icon"}
          />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
}
