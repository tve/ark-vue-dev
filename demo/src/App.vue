<script setup lang="ts">
import { Teleport, ref } from "vue";
import { Menu } from "@ark-ui/vue";
const open = ref(false);
</script>

<template>
  <Menu.Root>
    <div style="display: flex;
        flex-direction: column;
        width: 20em; height: 10em;
        background-color: #141010;
        padding: 1em;">
      Background div.
      <Menu.Trigger>
        <div
          style="
            background-color: #220088;
            border-radius: 10px;
            padding: 10px;
            cursor: pointer;
          "
        >
          Open Menu
        </div>
      </Menu.Trigger>
        <Menu.Positioner class="menu-positioner"
            style="display:absolute;
              left: 20px;
              top: 20px;">
          <Menu.Content class="menu-content"
            style="
              background-color: #445;
              padding: 10px;
              border-radius: 10px;
              border: 2px solid red;
            "
          >
            <Menu.Item id="item1">item 1</Menu.Item>
            <Menu.Item id="item2">item 2</Menu.Item>
            <Menu.Item id="item3">item 3</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
    </div>
  </Menu.Root>
</template>
