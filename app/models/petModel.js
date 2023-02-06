const { Schema, model } = require('mongoose');

const petsSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set  name your pet'],
    },
    date: {
      type: String,
      required: [true, 'Set birthdate your pet'],
    },
    breed: {
      type: String,
      required: [true, 'Set breed your pet'],
    },
    avatarURL: {
      type: String,
      default: null,
    },
    comments: { type: String, required: [true, 'Set comments for your pet'] },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'users',
    },
  },
  { versionKey: false, timestamps: false }
);

const Pet = model('pets', petsSchema);

module.exports = Pet;
