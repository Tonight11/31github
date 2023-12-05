<template>
  <header class="header backdrop-blur-md">
    <div class="container">
      <div class="header__inner">
        <div class="mr-10">
          <h1 class="header__title"><span>Bayastan</span> Kenenov</h1>
        </div>
        <ul class="flex items-center gap-4">
          <li class="header__list">
            <router-link to="/">Works</router-link>
          </li>
          <li class="header__list">
            <router-link to="/">About</router-link>
          </li>
          <li class="header__list">
            <router-link to="/">Skills</router-link>
          </li>
          <li class="header__list">
            <router-link to="/">Source</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
  .header {
    padding: 20px 0;
  }

  .header__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & h1 {
      font-size: 24px;
    }
  }

  .header__title {
    font-size: 28px;
    text-transform: uppercase;
    & span {
      color: hsl(var(--a-primary));
    }
  }
  .header__list {
    font-size: 14px;
  }

  .fade-move,
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: translateY(-40px);
  }
  .fade-leave-active {
    position: absolute;
  }
</style>
