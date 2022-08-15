export default ({ exos }) => {
    console.log(exos)
    return (
        <div>
            {exos.map(exo =>
                exo.name
            )}
        </div>
    )
}
