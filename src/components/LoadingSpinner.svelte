<style>
  #loader {
    animation: spin 1.2s ease-in-out infinite;
    border: 1px solid transparent;
    border-top-color: #537d8b;
    border-radius: 100%;
    filter: drop-shadow(0 0 1px blue);
    height: 300px;
    margin: 100px auto;
    position: relative;
    width: 300px;
  }
  #loader > div {
    animation: spin 1s ease-in-out infinite;
    border: 1px solid transparent;
    border-radius: 100%;
    bottom: -1px;
    left: -1px;
    position: absolute;
    right: -1px;
    top: -1px;
  }

  #loader > div:first-child {
    border-top-color: #a74040;
    transform: rotate(120deg);
  }

  #loader > div:last-child {
    animation-duration: 2s;
    border-top-color: #40a744;
    transform: rotate(240deg);
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    50% {
      box-shadow: 0 -2px 4px rgba(#fff, 0.2);
      opacity: 0.7;
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>

<div id="loader">
  <div />
  <div />
</div>
