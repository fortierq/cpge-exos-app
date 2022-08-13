class Select extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <select class="chosen-select" tabindex="-1" multiple="" data-placeholder={this.props.name} id={this.props.name}>
                {this.props.options.map(v => <option value={v}>{v}</option>)}
            </select>
        );
    }
}
