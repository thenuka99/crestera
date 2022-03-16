const mongoose = require("mongoose");

const FolderSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
    required: [true, "Please provide a name to the folder"],
  },
  addedOn: {
    type: Date,
  },
  addedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  members: [{
    member: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    canEdit: {
      type: Boolean,
      default: false
    },
  }],
  circles: [{
    circle: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UserCircle'
    },
    canEdit: {
      type: Boolean,
      default: false
    },
  }],
});

module.exports = mongoose.model("Folder", FolderSchema);
