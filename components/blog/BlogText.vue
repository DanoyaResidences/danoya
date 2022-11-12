<template>
  <div class="m-10" v-html="convertMarkdownToHtml(textContent)"></div>
</template>

<script>
import { marked } from "marked";

export default {
  props: ["textContent"],
  setup() {
    // Converts markdown to HTML
    function convertMarkdownToHtml(text) {
      return marked.parse(text);
    }
    return {
      convertMarkdownToHtml,
    };
  },
};
</script>

<style>
h1 {
  font-size: 1.875rem /* 30px */;
  line-height: 2.25rem /* 36px */;
}

h2 {
  font-size: 1.6rem /* 24px */;
  line-height: 2rem /* 32px */;
}

h3 {
  font-size: 1.55rem /* 20px */;
  line-height: 1.75rem /* 28px */;
}

h4 {
  font-size: 1.4rem /* 16px */;
  line-height: 1.5rem; /* 24px */
}

h5 {
  font-size: 1.3rem /* 16px */;
  line-height: 1.5rem; /* 24px */
}
h6 {
  font-size: 1rem /* 16px */;
  line-height: 1.25rem; /* 24px */
  font-weight: 800;
}

p {
  font-size: 1rem /* 14px */;
  line-height: 1.25rem /* 20px */;
  margin-top: 1.2rem;
}
</style>
