import { Component } from 'substance'
import ImageSuggestionComponent from './ImageSuggestionComponent';

class ImageSuggestionsComponent extends Component {

    render($$){
        return $$('div', { class: 'image-suggestions-wrapper' },
            this.props.imageSuggestions.map(imageSuggestion => $$(ImageSuggestionComponent, { imageSuggestion }))
        )
    }

}

export default ImageSuggestionsComponent