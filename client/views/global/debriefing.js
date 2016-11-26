Template.Debriefing2.onRendered(function() {
  var TargetTaskResults = Session.get("currentTargetTaskResults");

  Helpers.updateResponse({
    TargetTaskResults: TargetTaskResults
  });

  if (!Meteor.user()){
      Meteor.call("createRandomUser", function (err, userId) {
        if (err) {
          console.log(err);
        } else {
          var user = Meteor.users.findOne(userId);
          Meteor.loginWithPassword(user.username, "1234", function (err) {
            if (err) {
              console.log(err)
            } else {
              console.log("logged in as:", Meteor.user().username);

              Helpers.updateResponse({
                userId: Meteor.userId(),
                username: Meteor.user().username
              });
            }
          });
        }
      });
    } else {
      Helpers.updateResponse({
        userId: Meteor.userId(),
        username: Meteor.user().username
      });
    }
});
