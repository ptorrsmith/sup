// PARENT OF MARKERS, SEARCH, VIEW PREVIEW
// CHILD OF APP

import React from 'react'

import ViewPreview from './ViewPreview'
import Markers from './Markers'
import Search from './Search'

const Map = () => (
    <React.Fragment>

        {/* When an icon is clicked, it will display a small box with basic information */}
        <ViewPreview />
        {/* This will also redirect to ViewProfile */}

        {/* The map will display markers */}
        <Markers />

        {/* Search bar here as well */}
        <Search />

        <p>This is the Map component</p>

    </React.Fragment>
)

export default Map