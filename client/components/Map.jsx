// PARENT OF MARKERS, SEARCH, VIEW PREVIEW
// CHILD OF APP

const Map = () => (
    <React.Fragment>

        {/* When an icon is clicked, it will display a small box with basic information */}
        <ViewPreview />
        {/* This will also redirect to ViewProfile */}

        {/* The map will display markers */}
        <Markers />

        {/* Search bar here as well */}
        <Search />

    </React.Fragment>
)

export default Map