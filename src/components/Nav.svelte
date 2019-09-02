<script>
  import ProfileIcon from "components/ProfileIcon.svelte";

  import fas from "@fortawesome/fontawesome-free/sprites/solid.svg";
  import far from "@fortawesome/fontawesome-free/sprites/regular.svg";
</script>

<style>
  nav {
    position: absolute;
    bottom: 0;
    border-top: 1px solid #ccc;
    width: 100%;
    padding: 20px 0 10px 0;
    z-index: 1000;
    background-color: #fff;
  }
  .nav-links {
    display: flex;
    justify-content: space-around;
  }
  svg {
    width: 25px;
    height: 25px;
  }
</style>

<nav>
  <div class="nav-links">
    <svg>
      <use xlink:href="{fas}#home" />
    </svg>
    <svg>
      <use xlink:href="{fas}#search" />
    </svg>
    <svg>
      <use xlink:href="{far}#plus-square" />
    </svg>
    <svg>
      <use xlink:href="{far}#heart" />
    </svg>
    <ProfileIcon />
  </div>
</nav>
