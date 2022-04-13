const mongoose = require('mongoose')
const Schema = mongoose.Schema

const uuid = require('uuid')

const User = mongoose.model('User', Schema({
    id: {
        type: String,
        default: uuid.v4,
    },

    isPremiumAccount: {
        type: Boolean,
        default: false,
    },

    cv: {
        type: String,
        default: "",
    },

    profilePhoto: {
        type: String,
        default: '',
    },

    coverPhoto: {
        type: String,
        default: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
    },

    isGradient: {
        type: Boolean,
        default: false,
    },

    gradient: {
        type: Object,
        default: {
            'from': "#07B5D4",
            'from': "#3884F4",
        }
    },

    themeColor: {
        type: String,
        default: "#ffffff",
    },

    theme: {
        type: Number,
        default: 1,
    },

    showGithubStats: {
        type: Boolean,
        default: false,
    },

    fullname: {
        type: String,
        default: '',
    },

    email: {
        type: String,
        default: '',
    },

    username: {
        type: String,
        default: '',
    },

    socials: {
        type: Object,
        default: { twitter: "", dev: "", dailydev: "", hashnode: "", linkedin: "", stackoverflow: "", youtube: "", dribbble: "", twitch: "", discord: "", behance: "", instagram: "", github: "", coffee: "" },
    },

    work: {
        type: String,
        default: '',
    },

    views: {
        type: Number,
        default: 0,
    },

    clicks: {
        type: Number,
        default: 0,
    },

    tagline: {
        type: String,
        default: 'Hello world! 👋',
    },

    about: {
        type: String,
        default: 'Hello 👋 i just created my Folio profile',
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
    },

    skills: {
        type: Array,
        default: [],
    },

    projects: {
        type: Array,
        default: [],
    },
}));

module.exports = User