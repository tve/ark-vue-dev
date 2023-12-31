<script setup lang="ts">
import { Teleport, ref } from "vue";
import { Dialog } from "@ark-ui/vue";
const open = ref(false);
</script>

<template>
  <Dialog.Root>
    <div style="display: flex; flex-direction: column">
      <Dialog.Trigger>
        <div
          style="
            background-color: #220088;
            border-radius: 10px;
            padding: 10px;
            cursor: pointer;
          "
        >
          Open Dialog
        </div>
      </Dialog.Trigger>
      <Teleport to="body">
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content
            style="
              position: absolute;
              left: 100px;
              width: 200px;
              background-color: #445;
              padding: 10px;
              border-radius: 10px;
            "
          >
            <Dialog.Title>Dialog Title</Dialog.Title>
            <Dialog.Description>Dialog Description</Dialog.Description>
            <Dialog.CloseTrigger>Close</Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Teleport>
    </div>
  </Dialog.Root>
</template>
