export default function FormSize({size, onInput}) {
    const handleChange = e => {
        onInput(e)
    }

    return (
        <form>
            <table>
                <tr>
                    <td>Высота:</td>
                    <td>
                        <input
                            name="height"
                            value={size.height}
                            onChange={handleChange}
                        />
                    </td>
                </tr>
                <tr>
                    <td>Ширина:</td>
                    <td>
                        <input
                            name="width"
                            value={size.width}
                            onChange={handleChange}
                        />
                    </td>
                </tr>
            </table>
        </form>
    )
}