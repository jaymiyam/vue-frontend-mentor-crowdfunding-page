<template>
  <ProjectIntro />
  <ProjectData />
  <ProjectDetails />
  <SelectionModal v-if="pledgeStore.selectionModalToggle" />
  <SuccessModal v-if="pledgeStore.successModalToggle" />
</template>

<script setup>
import ProjectIntro from './components/ProjectIntro.vue';
import ProjectData from './components/ProjectData.vue';
import ProjectDetails from './components/ProjectDetails.vue';
import SuccessModal from './components/SuccessModal.vue';
import SelectionModal from './components/SelectionModal.vue';

import { usePledgeStore } from './stores/pledge';
const pledgeStore = usePledgeStore();
</script>
