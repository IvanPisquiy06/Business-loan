import './industry.css';

const Industry = (props) => {

    const handleSelection = (e) => {
        const selectedValue = e.target.value;
        props.setValue(selectedValue)
        props.isFull(true)
    }

    return <div>
        <h2>What industry are you in?</h2>
        <select className='selector-industry' value={props.value} onChange={handleSelection}>
            <option>Accommodation and Food Services</option>
            <option>Administrative & Support and Waste Management & Remediation Services</option>
            <option>Agriculture, Forestry, Fishing and Hunting</option>
            <option>Arts, Entertainment, and Recreation</option>
            <option>Construction</option>
            <option>Educational Services</option>
            <option>Finance and Insurance</option>
            <option>Health Care and Social Assistance</option>
            <option>Information</option>
            <option>Management and Companies Enterprises</option>
            <option>Manufacturing</option>
            <option>Mining</option>
            <option>Other Services (Except public Administration)</option>
            <option>Professional, Scientific, and Technical Services</option>
            <option>Real Estate Rental and Leasing</option>
            <option>Retail Trade</option>
            <option>Transportation and Warehousing</option>
            <option>Utilities</option>
            <option>Wholesale Trade</option>
        </select>
    </div>
}

export default Industry