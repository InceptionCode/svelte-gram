<script>
  import { onMount, getContext } from "svelte";
  import LoadingSpinner from "components/LoadingSpinner.svelte";
  import MediaItem from "components/MediaItem.svelte";
  import ProfileIcon from "components/ProfileIcon.svelte";

  export let feedDb = null;

  const grabMediaFeed = async () => {
    let feeds = [];
    if (feedDb) {
      try {
        const snapshot = await feedDb.collection("test_feed").get();
        snapshot.forEach(doc => {
          feeds = doc.data().media_feed || [];
        });
      } catch (err) {
        console.log(err);
      }
    }
    return feeds;
  };
</script>

<style>
  div {
    height: inherit;
    overflow-x: auto;
    margin-top: 40px;
  }

  li {
    list-style-type: none;
  }
</style>

<div>
  {#await grabMediaFeed()}
    <LoadingSpinner />
  {:then feeds}
    <ul>
      {#each feeds as { mediaUrl, mediaType, caption }, i}
        <li>
          <ProfileIcon imageUrl={feeds.profileImageUrl} />
          user_name...
          <MediaItem
            src={mediaUrl}
            alt={caption}
            {caption}
            {mediaType}
            feed={feeds[i]} />
        </li>
      {/each}
    </ul>
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
</div>
