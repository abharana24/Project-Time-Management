const mongoose = require("mongoose");
var ObjectId = mongoose.Schema.Types.ObjectId;

module.exports = {
  projectName: {
    type: String,
    required: true
  },
  projectManager: [{
    type: ObjectId,
    ref: 'projectmanagers',
    required: true
  }],
  clientName: {
    type: String,
    required: true
  },
  startDate: {
    type: String,
    default: Date.now()
  },
  endDate: {
    type: String,
    default: null
  },
  empObjectIdArray: [{ type: ObjectId, ref: "employee" }],
  status: {
    type: String,
    enum: ["Completed", "Discarded", "In Progress"],
    default: 'In Progress'
  }
};

