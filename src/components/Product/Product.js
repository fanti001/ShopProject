const Product = () => {
    return (
        <>
            <ImageProduct />
            <h1>To ja Twój Produkt</h1>
            <PriceProduct />
            <h1>No ja też</h1>

            <h1> I ja</h1>
            <h1>...</h1>
        </>
    )
}

const ImageProduct = () => {
    return (
        <>
            <img src="https://unsplash.it/200/300" alt="" />
        </>
    )
}

const PriceProduct = () => {
    return (
        <>
            <h1>453 PLN</h1>
        </>
    )
}
export default Product;