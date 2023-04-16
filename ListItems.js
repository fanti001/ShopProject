const ListItems = (props) => {
    const items = props.items.map(item => {
        return (
            <Item
                key={item.id}
                name={item.name}
                active={item.active}
            />
        )
    })
    console.log(items);
    return (
        <>
            <div className="list">
                <ul>
                    {items}
                </ul>
            </div>
        </>
    )
}