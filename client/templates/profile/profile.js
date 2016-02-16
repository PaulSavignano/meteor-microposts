Template.profile.events({
  'submit .edit-profile': function(event) {
    event.preventDefault();
    var file = $('#profileImage').get(0).files[0];
    if(file) {
      fsFile = new FS.File(file);
      ProfileImages.insert(fsFile, function(error, result) {
        if(error) {
          throw new Meteor.Error('and error of ', error);
        } else {
          var imageLocation = '/cfs/files/ProfileImages/' + result._id;
          UserImages.insert({
            userId: Meteor.userId(),
            username: Meteor.user().username,
            image: imageLocation
          });
          Router.go('/');
        }
      });
    }
    return false;
  }
});
