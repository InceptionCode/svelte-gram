<script>
  export let userName = "DW";
  export let imageUrl = null;
</script>

<style>
  .profile-img {
    position: relative;
    display: inline-block;
    overflow: hidden;
    bottom: 5px;
    border-radius: 100%;
    padding: 8px;
    width: 30px;
    max-height: 35px;
  }
  .default-img {
    background-color: darkred;
    color: white;
    text-align: center;
  }
</style>

{#if imageUrl}
  <span class="profile-img">
    <img src={imageUrl} alt="" width="30px" />
  </span>
{:else}
  <!-- <img {src} alt="avatar" /> -->
  <span class="profile-img default-img">{userName}</span>
{/if}
