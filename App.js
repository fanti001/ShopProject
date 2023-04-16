class App extends React.Component {
    state = {
        items: [
            { id: 1, name: "herbata", active: true },
            { id: 2, name: "ziemniaki", active: false },
            { id: 3, name: "kasza", active: false },
            { id: 4, name: "zupa wodna", active: true },
            { id: 5, name: "wrzątek", active: true },
            { id: 6, name: "chleb", active: false },
        ],

    }

    render() {

        return (
            <>
                <Header items={this.state.items} />
                <ListItems items={this.state.items} />
            </>
        );
    }
}
