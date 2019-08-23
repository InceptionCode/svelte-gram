<script>
  import ProfileIcon from "./ProfileIcon.svelte";
  import SvgTag from "./services/SvgTagBuilder.svelte";
  import { icon } from "@fortawesome/fontawesome-svg-core";
  import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
  import { faPlusSquare, faHeart } from "@fortawesome/free-regular-svg-icons";

  const home = icon(faHome).abstract.pop();
  const search = icon(faSearch).abstract.pop();
  const heart = icon(faHeart).abstract.pop();
  const plusSquare = icon(faPlusSquare).abstract.pop();
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
  div > :first-child {
    display: flex-inline;
    width: 30px;
  }
</style>

<nav>
  <div class="nav-links">
    <span>
      <SvgTag icon={home} height="100" width="100" />
    </span>
    <span>
      <SvgTag icon={search} height="100" width="100" />
    </span>
    <span>
      <SvgTag icon={plusSquare} height="100" width="100" />
    </span>
    <span>
      <SvgTag icon={heart} height="100" width="100" />
    </span>
    <span>
      <ProfileIcon />
    </span>
  </div>
</nav>
