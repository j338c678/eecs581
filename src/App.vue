<template>
  <div id="app">

    <soul-welcome></soul-welcome>

    <keep-alive>
      <router-view/>
    </keep-alive>

    <soul-add></soul-add>
  </div>
</template>

<script>
import SoulWelcome from './components/common/SoulWelcome'
import SoulNav from './components/common/SoulNav'
import SoulAdd from './components/add/SoulAdd'
//
import SoulLogin from './components/Login/SoulLogin'
//

import { CometChat } from "@cometchat-pro/chat";
import "./App.css";
//
export default {
  name: 'App',
  components: {
    SoulLogin,
    SoulWelcome,
    SoulNav,
    SoulAdd
  },
  created() {
    this.initializeApp();
  },
  methods: {
    // initializeApp() {
    //   var appID = "167877e1af82bd3";
    //   var appRegion = "us";
    //   CometChat.init(appID, new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(appRegion).build());
    // }
    initializeApp() {
      var appId = "167877e1af82bd3";
      let cometChatSettings = new CometChat.AppSettingsBuilder()
        .subscribePresenceForAllUsers()
        .setRegion("us")
        .build();
      CometChat.init(appId, cometChatSettings).then(
        () => {
          console.log("Initialization completed successfully");
    //You can now call login function.
        },
        error => {
          console.log("Initialization failed with error:", error);
    //Check the reason for error and take apppropriate action.
        }
      );
    }
  }
}
</script>

<style>

  @import "./assets/css/reset.css";

  @import "./assets/css/lib/animate.css";

  @import "./assets/css/variables.css";
</style>
