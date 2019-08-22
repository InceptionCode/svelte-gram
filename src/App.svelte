<script>
  import Nav from "./components/Nav.svelte";
  import MediaFeed from "./components/MediaFeed.svelte";
  import { Firestore } from "./firebaseStore";
</script>

<style>
  .body {
    background-color: #333;
    display: flex;
    justify-content: center;
  }
  .phone-body {
    position: relative;
    background: whitesmoke;
    width: 600px;
    height: calc(100vh - 70px);
    padding: 20px 0;
    border-radius: 8px;
  }
</style>

<div class="body">
  <div class="phone-body">
    <Nav />
    <MediaFeed feedDb={Firestore.db} />
  </div>
</div>
