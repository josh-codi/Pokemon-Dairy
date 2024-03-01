

export function paginationSegment(array: any[], least: number) {
    const result = [];
    let startIndex = 0;

    while (startIndex < array?.length) {
        result.push(array?.slice(startIndex, startIndex + least));
        startIndex += least;
    }

    return result;
}
