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
        type: Boolean,
        default: false,
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

    fullname: {
        type: String,
        default: '',
        required: [true, 'Name is required']
    },

    username: {
        type: String,
        default: '',
        required: [true, 'Username is required']
    },

    socials: {
        type: Object,
        default: { twitter: "", facebook: "", linkedin: "", instagram: "", github: "", coffee: "" },
        required: [true, 'Usernames are required']
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

    workplaces: {
        type: String,
        default: '',
        required: [true, 'Work is required']
    },

    // workplaces: [],
    skills: [],
    projects: [],
}));

module.exports = User