<script>
  import fas from "@fortawesome/fontawesome-free/sprites/solid.svg";
  import far from "@fortawesome/fontawesome-free/sprites/regular.svg";
</script>

<style>
  .bar-wrapper {
    position: fixed;
    display: grid;
    grid-template: none / 1fr 10fr 1fr;
    grid-template-areas: "front middle end";
    background-color: white;
    border-bottom: 1px solid #333;
    width: inherit;
    height: 30px;
    box-shadow: 2px 3px rgba(0, 0, 0, 0.3);
  }
  .bar-h {
    position: relative;
    bottom: 5px;
    margin: 0;
    grid-area: middle;
    text-align: center;
  }
  svg {
    width: 20px;
    height: 20px;
  }
  .camera-icon {
    position: relative;
    grid-area: front;
    bottom: 5px;
    left: 15px;
  }
  .send-icon {
    position: relative;
    grid-area: end;
    bottom: 5px;
  }
</style>

<div class="bar-wrapper">
  <h3 class="bar-h">Svelte-Gram</h3>
  <svg class="camera-icon">
    <use xlink:href="{fas}#camera" />
  </svg>
  <svg class="send-icon">
    <use xlink:href="{far}#paper-plane" />
  </svg>
</div>
