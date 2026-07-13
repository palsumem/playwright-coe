class lifecycleService {

    static createStartMetadata({
        title,
        browser,
        startedAt,
        retry
    }) {
        return {
            title,
            browser,
            startedAt,
            retry
        };
    }

    static createEndMetadata({
        title,
        browser,
        startedAt,
        endedAt,
        status,
        expectedStatus,
        retry,
        error
    }) {

        const duration =
            (endedAt - startedAt) / 1000;

        return {
            title,
            browser,
            startedAt,
            endedAt,
            status,
            expectedStatus,
            durationInSeconds:
                Number(duration.toFixed(3)),
            retry,
            error: error || null
        };
    }

}

module.exports = lifecycleService;