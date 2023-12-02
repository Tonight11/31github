<template>
  <header class="header backdrop-blur-md">
    <div class="container">
      <div class="header__inner">
        <div class="mr-10">
          <h1 class="header__title"><span>Bayastan</span> Kenenov</h1>
        </div>
        <ul class="flex flex-grow items-center gap-4">
          <li class="header__list">
            <router-link to="/">Works</router-link>
          </li>
          <li class="header__list">
            <router-link to="/">Posts</router-link>
          </li>
          <li class="header__list">
            <router-link to="/">Uses</router-link>
          </li>
          <li class="header__list">
            <router-link to="/">Source</router-link>
          </li>
        </ul>
        <button
          class="ml-5"
          @click="setColorTheme(activeThemeName == 'dark' ? 'light' : 'dark')"
        >
          <transition-group name="fade">
            <svg
              v-if="activeThemeName == 'dark'"
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-gray-50"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clip-rule="evenodd"
              />
            </svg>
          </transition-group>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
  import { useAnu } from "anu-vue";

  const { activeThemeName } = useAnu();
  const setColorTheme = (newTheme) => {
    activeThemeName.value = newTheme;
  };
</script>

<style lang="scss" scoped>
  .header {
    padding: 20px 0;
  }

  .header__inner {
    display: flex;
    align-items: center;

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
