<script>
  export let userName = "DW";
</script>

<style>
  .set-width {
    width: 30px;
  }
  .default-img {
    position: relative;
    bottom: 5px;
    background-color: darkred;
    color: white;
    border-radius: 100%;
    padding: 8px;
  }
</style>

<!-- <img {src} alt="avatar" /> -->
<span class="default-img set-width">{userName}</span>
