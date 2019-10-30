<template>
  <div class="profile-page">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <img :src="profile.avatar" class="user-img" />
          <h4>{{ profile.screenName }}</h4>
          <span>{{ profile.followers }}</span>
          <div>
            <button
              class="btn"
              @click.prevent="handlerFollow()"
            >
              {{followButtonTitle}} {{ profile.username }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { FETCH_PROFILE, FETCH_PROFILE_FOLLOW, FETCH_PROFILE_UNFOLLOW } from '../store/actions.type';

export default {
  name: 'Profile',
  data() {
    return {
      followButtonTitle: 'Follow',
    };
  },
  mounted() {
    this.$store.dispatch(FETCH_PROFILE, { username: 'test username' });
  },
  computed: {
    ...mapGetters(['profile']),
    followTitle: {
      get() { return this.followButtonTitle; },
      set(text) { this.followButtonTitle = text; },
    },
  },
  methods: {
    handlerFollow() {
      if (this.profile.followedByMe) {
        this.$store.dispatch(FETCH_PROFILE_UNFOLLOW, { username: 'test username' });
        this.followButtonTitle = 'Follow';
      } else {
        this.$store.dispatch(FETCH_PROFILE_FOLLOW, { username: 'test username' });
        this.followButtonTitle = 'Unfollow';
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
