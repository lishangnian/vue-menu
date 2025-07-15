<template>
  <div class="sidebar">
    <div class="logo">LOGO</div>
    <nav>
      <router-link to="/" exact-active-class="active">首页</router-link>
      <router-link to="/about" active-class="active">关于</router-link>
      <router-link to="/contact" active-class="active">联系我们</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'SidebarComponent'
}
</script>

<style scoped>
.sidebar {
  width: 200px;
  height: 100vh;
  background: #304156;
  color: white;
}

.logo {
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

nav {
  padding: 10px 0;
}

nav a {
  display: block;
  padding: 10px 20px;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: all 0.3s;
}

nav a:hover {
  color: white;
  background: rgba(255, 255, 255, 0.1);
}

nav a.active {
  color: white;
  background: rgba(255, 255, 255, 0.1);
  border-left: 3px solid #409EFF;
}
</style>
