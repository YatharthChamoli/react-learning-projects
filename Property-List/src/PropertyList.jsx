import Property from './Property'
import './PropertyList.css'

function PropertyList({properties}) {
    return (
        <div className="Property-list">
            {properties.map(p => {
                return <Property {...p} key={p.id}/>;
            })}
        </div>
    );
}

export default PropertyList;