const mongoose = require('mongoose')
const Schema = mongoose.Schema

const uuid = require('uuid')

const User = mongoose.model('User', Schema({
    id: {
        type: String,
        default: uuid.v4,
        // required: [true, 'ID is required']
    },

    isPremiumAccount: {
        type: Boolean,
        default: false,
        // required: [true, 'ID is required']
    },

    profilePhoto: {
        type: String,
        default: '',
        // required: [true, 'Profile photo is required']
    },

    coverPhoto: {
        type: String,
        default: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
        // required: [true, 'Cover photo is required']
    },

    themeColor: {
        type: String,
        default: "#ffffff",
        // required: [true, 'Cover photo is required']
    },

    theme: {
        type: Number,
        default: 1,
        // required: [true, 'Cover photo is required']
    },

    showGithubStats: {
        type: Boolean,
        default: false,
        // required: [true, 'ShowGithubStats flag required']
    },

    fullname: {
        type: String,
        default: '',
        // required: [true, 'Name is required']
    },

    email: {
        type: String,
        default: '',
        // required: [true, 'Name is required']
    },

    username: {
        type: String,
        default: '',
        // required: [true, 'Username is required']
    },

    socials: {
        type: Object,
        default: { twitter: "", dev: "", dailydev: "", hashnode: "", linkedin: "", stackoverflow: "", youtube: "", dribbble: "", twitch: "", discord: "", behance: "", instagram: "", github: "", coffee: "" },
        // required: [true, 'Usernames are required']
    },

    work: {
        type: String,
        default: '',
        // required: [true, 'Work is required']
    },

    views: {
        type: Number,
        default: 0,
        // required: [true, 'Work is required']
    },

    clicks: {
        type: Number,
        default: 0,
        // required: [true, 'Work is required']
    },

    tagline: {
        type: String,
        default: 'Hello world! 👋',
        // required: [true, 'Work is required']
    },

    about: {
        type: String,
        default: 'Hello 👋 i just created my Folio profile',
        // required: [true, 'About is required']
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
        type: Array,
        default: [],
        // required: [true, 'Workplaces is required']
    },

    skills: {
        type: Array,
        default: [],
        // required: [true, 'Skills are required']
    },

    projects: {
        type: Array,
        default: [],
        // required: [true, 'Projects are required']
    },
}));

module.exports = User