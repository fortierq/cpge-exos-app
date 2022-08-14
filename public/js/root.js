class Root extends React.Component {
    state = { selects: [] }
    handleMultiChange = this.handleMultiChange.bind(this)

    async componentDidMount() {
        const ans = await fetch(`${server}/attributes`)
        const selects_dict = await ans.json()
        var selects_array = []
        for (const [k, v] of Object.entries(selects_dict)) {
            let t = []
            for (const { name } of v) {
                t.push({value: name, label: name})
            }
            selects_array.push(
            <Select 
                options={t} placeholder={k} 
                onChange={this.handleMultiChange} 
                isMulti
            />)
        }
        this.setState({ selects: selects_array })   
    }

    handleMultiChange(option) {
        this.setState(state => {
          return {
            multiValue: option
          }
        })
      }    

    render() {
        return (
            <div class='form'>
                <h1>Exercices d'informatique</h1> <hr />
                        {this.state.selects}

                {/* <div class='columns is-centered'>
                    <div class='column'><select class='chosen-select' tabindex='-1' multiple='' data-placeholder='Sujet'
                        id='subject'></select></div>
                    <div class='column'><select class='chosen-select' tabindex='-1' multiple=''
                        data-placeholder='Structure de données' id='ds'></select></div>
                    <div class='column'><select class='chosen-select' tabindex='-1' multiple='' data-placeholder='Algorithme'
                        id='algo'></select></div>
                </div>
                <div class='columns is-centered'>
                    <div class='column'><select class='chosen-select' tabindex='-1' multiple='' data-placeholder='Langage'
                        id='language'></select>
                    </div>
                    <div class='column'>
                        <select class='chosen-select' tabindex='-1' multiple='' data-placeholder='Classe' id='class'></select>
                    </div>
                    <div class='column'>
                        <label class='checkbox'>
                            <input type='checkbox' checked='checked' />
                            <span class='checkmark'></span>Corrigé
                        </label>
                    </div>
                </div> */}
                <Search />
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Root />)
