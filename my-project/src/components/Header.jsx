

const Header = (props) => {

    return (
        <div>
            <div>
                <label for="year">Year: </label>
                <select name="year">
                    <option value={2024}>2024</option>
                    <option value={2023}>2023</option>
                    <option value={2022}>2022</option>
                    <option value={2021}>2021</option>
                </select>
            </div>
            <div>
                F1 Dashboard
            </div>
            <div>

            </div>
        </div>
    )
}

export default Header