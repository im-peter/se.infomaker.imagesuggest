import { Component } from 'substance'
import { api, event } from 'writer'
import ImageSuggestionsComponent from './ImageSuggestionsComponent'

class ImageSuggestSidebarComponent extends Component {

    constructor(...args) {
        super(...args)

        this.host = 'http://localhost:1337'

        this.suggestImages = this.suggestImages.bind(this)

        api.events.on('imagesuggest', event.DOCUMENT_CHANGED, () => {
            this.suggestImages()
        })
    }

    extractText() {
        const nodes = api.document.getDocumentNodes()

        let textContent = "";
        nodes.forEach(function (node) {
            if (node.content) {
                textContent += node.content.trim()
            }
        })

        return textContent
    }

    async suggestImages() {
        const text = this.extractText()
        let imageSuggestions = []

        if (text && text.length > 2) {
            this.extendState({ loading: true, imageSuggestions: [] })
            // const response = await fetch(`${this.host}/classify1?text=${text}`)
            const response = await fetch(`${this.host}/classify2?text=${text}`)
            const suggestions = await response.json()
            suggestions.slice(0, 8).forEach(suggestion => imageSuggestions.push(suggestion.label))
            const imageResponse = await fetch(`${this.host}/suggest2?keywords=${imageSuggestions.join(',')}`)
            const imageSuggestionsWithTags = await imageResponse.json()

            this.extendState({
                loading: false,
                imageSuggestions: Object.keys(imageSuggestionsWithTags),
                imageSuggestionsWithTags
            })
        }

        if (!text.length) {
            this.extendState({
                loading: false,
                imageSuggestions: [],
                imageSuggestionsWithTags: [],
            })
        }
    }

    dispose() {
        api.events.off('imagesuggest', event.DOCUMENT_CHANGED);
    }

    didMount() {
        this.suggestImages()
    }

    getInitialState() {
        const pluginConfig = this.props.pluginConfigObject.pluginConfigObject.data

        return {
            pluginConfig,
            imageSuggestions: []
        }
    }

    render($$){
        return $$('div', { class: 'image-suggest-wrapper' }, [
            $$('h2').append(this.getLabel('Image suggest AI')),
            this.state.loading ? $$('div', { class: 'spinner-wrapper' },
                $$('i', { class: 'fa fa-spin fa-spinner', 'aria-hidden': 'true' })
            ) : '',
            $$(ImageSuggestionsComponent, { ...this.state })
        ])
    }

}

export default ImageSuggestSidebarComponent