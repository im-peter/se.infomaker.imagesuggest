import { registerPlugin } from 'writer'
import ImageSuggestPackage from './ImageSuggestPackage'

(() => {
    if (registerPlugin) {
        registerPlugin(ImageSuggestPackage)
    } else {
        console.error("Register method not yet available");
    }
})()