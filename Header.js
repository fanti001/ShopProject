const Header = (props) => {
    const activeItems = props.items.filter(item => item.active)
    const number = activeItems.length
    return (
        <>
            <header>Podsumowanie zamówienia</header>
            <h2>Zamówienie zawiera :  {number} pozycji.</h2>
            <h1>Do zapłaty: {number ? `${number * 10} złotych` : `Jeszcze nic nie zamówiłeś`}</h1>
            <h2>Twoje zamówienie</h2>
        </>
    )
}