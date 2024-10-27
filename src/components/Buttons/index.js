import './index.css'

const Buttons = props => {
    const { onClickButton, onResult, onClearButton } = props
    return (
        <div>
            <div>
                <button type="button" onClick={() => {
                    onClickButton("9")
                }}>9</button>
                <button type="button" onClick={() => {
                    onClickButton("8")
                }}>8</button>
                <button type="button" onClick={() => {
                    onClickButton("7")
                }}>7</button>
                <button type="button" onClick={() => {
                    onClickButton("+")
                }}>+</button>
            </div>
            <div>
                <button type="button" onClick={() => {
                    onClickButton("6")
                }}>6</button>
                <button type="button" onClick={() => {
                    onClickButton("5")
                }}>5</button>
                <button type="button" onClick={() => {
                    onClickButton("4")
                }}>4</button>
                <button type="button" onClick={() => {
                    onClickButton("-")
                }}>-</button>
            </div>
            <div>
                <button type="button" onClick={() => {
                    onClickButton("3")
                }}>3</button>
                <button type="button" onClick={() => {
                    onClickButton("2")
                }}>2</button>
                <button type="button" onClick={() => {
                    onClickButton("1")
                }}>1</button>
                <button type="button" onClick={() => {
                    onClickButton("*")
                }}>*</button>
            </div>
            <div>
                <button type="button" onClick={() => {
                    onClickButton("0")
                }}>0</button>
                <button type="button" onClick={() => {
                    onClearButton()
                }}>C</button>
                <button type="button" onClick={() => {
                    onResult()
                }}>=</button>
                <button type="button" onClick={() => {
                    onClickButton("/")
                }}>/</button>
            </div>
        </div>
    )
}

export default Buttons