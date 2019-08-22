<script>
  import {
    HomeIcon,
    SearchIcon,
    PlusSquareIcon,
    HeartIcon
  } from "svelte-feather-icons";
  import ProfileIcon from "./ProfileIcon.svelte";
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
    justify-content: space-evenly;
  }
  span {
    display: flex-inline;
    width: 30px;
  }
</style>

<nav>
  <div class="nav-links">
    <span>
      <HomeIcon />
    </span>
    <span>
      <SearchIcon />
    </span>
    <span>
      <PlusSquareIcon />
    </span>
    <span>
      <HeartIcon />
    </span>
    <span>
      <ProfileIcon />
    </span>
  </div>
</nav>
