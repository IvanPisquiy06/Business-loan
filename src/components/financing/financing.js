import './financing.css'

const Financing = (props) => {

    const handleSelection = (e) => {
        const selectedValue = e.target.value;
        props.setValue(selectedValue)
        props.isFull(true)
    }

    return <div>
        <h2>What are you getting Financing for?</h2>
        <select className='financing' value={props.value} onChange={handleSelection}>
            <option>Expansion</option>
            <option>Expansion Purchase</option>
            <option>Purchase a Vehicle</option>
            <option>Inventory</option>
            <option>Payroll</option>
            <option>Marketing</option>
            <option>Commercial Real State</option>
            <option>Remodel my Location</option>
            <option>Refinance Debt</option>
            <option>Finance Account Recivable</option>
            <option>Buy a Business/Franchise</option>
            <option>Start a Business</option>
            <option>Other</option>
        </select>
    </div>
}

export default Financing