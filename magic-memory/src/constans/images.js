const cardImages = [
    {
        "src": "/img/helmet-1.png",
        "matched": false
    },
    {
        "src": "/img/potion-1.png",
        "matched": false
    },
    {
        "src": "/img/ring-1.png",
        "matched": false
    },
    {
        "src": "/img/scroll-1.png",
        "matched": false
    },
    {
        "src": "/img/shield-1.png",
        "matched": false
    },
    {
        "src": "/img/sword-1.png",
        "matched": false
    },
]

export const shuffleCards = () => {
    const cardArray = [...cardImages, ...cardImages]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: Math.random() * 10 }))

    return cardArray;
}