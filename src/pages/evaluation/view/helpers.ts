export const handleAlert = (type: string, message: string) => {
    dispatchEvent(
        new CustomEvent("handleAlert", {
            detail: { type: type, message: message },
        })
    )
};

export const refetchItems = (type: string) => {
    dispatchEvent(
        new CustomEvent("refetchItems", {
            detail: { type: type },
        })
    )
}