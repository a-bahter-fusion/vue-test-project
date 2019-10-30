<template>
  <div class="profile-page">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <img :src="profile.image" class="user-img" />
          <h4>{{ profile.username }}</h4>
          <div>
            <button
              class="btn btn-sm btn-secondary action-btn"
              @click.prevent="follow()"
            >
              {{followButtonTitle}}
              {{ profile.username }}
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
    // eslint-disable-next-line no-console
    this.$store.dispatch(FETCH_PROFILE, { username: 'darcaia' });
  },
  computed: {
    ...mapGetters(['profile']),
    followTitle: {
      get() { return this.followButtonTitle; },
      set(text) { this.followButtonTitle = text; },
    },
  },
  methods: {
    follow() {
      switch (this.followButtonTitle) {
        case 'Unfollow':
          this.$store.dispatch(FETCH_PROFILE_UNFOLLOW, { username: 'darcaia' });
          this.followButtonTitle = 'Follow';
          break;
        case 'Follow':
          this.$store.dispatch(FETCH_PROFILE_FOLLOW, { username: 'darcaia' });
          this.followButtonTitle = 'Unfollow';
          break;
        default:
          break;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
