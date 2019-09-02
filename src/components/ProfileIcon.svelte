<script>
  export let userName = "DW";
  export let imageUrl = null;
</script>

<style>
  .profile-img {
    position: relative;
    bottom: 5px;
    border-radius: 100%;
    padding: 8px;
    width: 30px;
  }
  .default-img {
    background-color: darkred;
    color: white;
  }
</style>

{#if imageUrl}
  <span class="profile-img">
    <img src={imageUrl} alt="" />
  </span>
{:else}
  <!-- <img {src} alt="avatar" /> -->
  <span class="profile-img default-img">{userName}</span>
{/if}
