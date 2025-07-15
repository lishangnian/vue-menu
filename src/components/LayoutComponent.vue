<template>
  <div class="layout-container">
    <Sidebar />
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from './SidebarComponent.vue'

export default {
  components: {
    Sidebar
  }
}
</script>

<style scoped>
.layout-container {
  display: flex;
  height: 100%;
}

.main-content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}
</style>
