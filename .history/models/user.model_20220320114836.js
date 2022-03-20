const mongoose = require('mongoose')
const Schema = mongoose.Schema

const uuid = require('uuid')

const User = mongoose.model('User', Schema({
    id: {
        type: String,
        default: uuid.v4,
        required: [true, 'ID is required']
    },

    isPremium: {
        type: String,
        default: uuid.v4,
        required: [true, 'ID is required']
    },

    profilePhoto: {
        type: String,
        default: '',
        required: [true, 'Profile photo is required']
    },

    coverPhoto: {
        type: String,
        default: '',
        required: [true, 'Cover photo is required']
    },

    name: {
        type: String,
        default: '',
        required: [true, 'Name is required']
    },

    username: {
        type: String,
        default: '',
        required: [true, 'Username is required']
    },

    work: {
        type: String,
        default: '',
        required: [true, 'Work is required']
    },

    about: {
        type: String,
        default: '',
        required: [true, 'About is required']
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    updatedAt: {
        type: Date,
        default: Date.now
    },

    companies: [],
    tools: [],
    works: [],
    socials: [],
}));

module.exports = User