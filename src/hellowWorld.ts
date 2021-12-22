interface HelloWordMessage{
    message: string
};

export function HelloWorld(message: HelloWordMessage): string{
    return `Hello ${message}`;
}