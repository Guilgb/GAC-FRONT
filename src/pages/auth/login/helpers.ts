export const handleAlert = (type: string, message: string) => {
    dispatchEvent(
        new CustomEvent("handleAlert", {
            detail: { type: type, message: message },
        })
    )
};