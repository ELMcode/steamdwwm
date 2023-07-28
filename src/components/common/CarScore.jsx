import {fetchDataFromFirestore} from '../db/action';
import {useEffect} from "react";
import {connect} from 'react-redux';


const CarScore = ({data, loading, error, fetchDataFromFirestore}) => {
    useEffect(() => {
        fetchDataFromFirestore();
    }, [fetchDataFromFirestore]);
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    console.log("Data: " + data)

    return (
        <div>
            {data.map((item) => (<div key={item.id}>{item.name}</div>))}
        </div>);
}

const mapStateToProps = (state) => {
    return {
        data: state.data.data,
        loading: state.data.loading,
        error: state.data.error,
    };
};

export default connect(mapStateToProps, {fetchDataFromFirestore})(CarScore);