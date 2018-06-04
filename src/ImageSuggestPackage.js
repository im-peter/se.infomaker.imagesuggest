import ImageSuggestSidebarComponent from './components/ImageSuggestSidebarComponent'

import './scss/main.scss'

export default {
    name: 'imagesuggest',
    id: 'se.infomaker.imagesuggest',
    version: '{{version}}',
    configure: function (configurator, config) {

        configurator.addLabel('Image suggest AI', {
            en: 'AI-baserad bildassistent\u2122',
            sv: 'AI-baserad bildassistent\u2122'
        })

        configurator.addToSidebar(
            'Hack',
            config,
            ImageSuggestSidebarComponent
        )
    }
}