import { Component } from 'substance'

class ImageSuggestionComponent extends Component {

    constructor(...args) {
        super(...args)

        this.onDragStart = this.onDragStart.bind(this)
        this.onDragEnd = this.onDragEnd.bind(this)
    }

    getImageUrl(uuid) {
        return `https://baproxy.editorial.gota.infomaker.io:5555/objects/${uuid}/files/thumb`
    }

    onDragStart(e) {
        e.stopPropagation()

        const dropData = {
            uuid: this.props.imageSuggestion,
            url: this.getImageUrl(this.props.imageSuggestion),
            credit: this.getLabel('Image suggest AI'),
            caption: this.getLabel('Image suggest AI')
        }

        e.dataTransfer.setData('text/uri-list', `x-im-archive-url://x-im/image?data=${encodeURIComponent(JSON.stringify(dropData))}`)
    }

    onDragEnd() {

    }

    render($$){
        return $$('div', { class: 'image-suggestion', draggable: "true" },
            $$('img', { class: 'image', src: this.getImageUrl(this.props.imageSuggestion) })
        )
            .on('dragstart', this.onDragStart)
            .on('dragend', this.onDragEnd)
    }

}

export default ImageSuggestionComponent