export type SegmentData = {
    heading?: string,
    information?: string,
}

export const InfoSegment = (data: SegmentData) => {
    return(
        <section>
            <h2>{data.heading}</h2>
            <p>{data.information}</p>
        </section>
    )
}