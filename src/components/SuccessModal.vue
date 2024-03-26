<template>
  <Teleport to="body">
    <div class="modal" @click="pledgeStore.toggleSuccessModal">
      <dialog open="true" class="modal-wrapper modal__completed | flow">
        <img
          src="/images/icon-check.svg"
          alt=""
          style="display: inline-block"
        />
        <h3 class="modal__title">Thanks for your support!</h3>
        <p>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <button
          class="btn-main"
          @click="pledgeStore.successModalToggle = false"
        >
          Got it!
        </button>
      </dialog>
    </div>
  </Teleport>
</template>

<script setup>
import { usePledgeStore } from '@/stores/pledge';
const pledgeStore = usePledgeStore();
</script>
