<template>
  <section class="project-info">
    <div class="content-wrapper | flow">
      <img
        class="project__image"
        src="/images/logo-mastercraft.svg"
        alt="mastercraft logo"
      />
      <h1 class="project__title">Mastercraft Bamboo Monitor Riser</h1>

      <p class="project__intro">
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div class="project__actions | flex-jc-sb">
        <button class="btn-main" @click="openSelectionModal">
          Back this project
        </button>
        <button class="btn-bookmark">
          <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <circle cx="28" cy="28" r="28" />
              <path d="M23 19v18l5-5.058L33 37V19z" />
            </g>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { usePledgeStore } from '@/stores/pledge';
const pledgeStore = usePledgeStore();

function openSelectionModal() {
  pledgeStore.selectionModalToggle = true;
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
</script>
