import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchDataFromFirestore } from '../db/action';

const YourComponent = ({ data, loading, error, fetchDataFromFirestore }) => {
    useEffect(() => {
        fetchDataFromFirestore();
    }, [fetchDataFromFirestore]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {/* Utilisez les données de votre store Redux ici */}
            {data.map((item) => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        data: state.data.data,
        loading: state.data.loading,
        error: state.data.error,
    };
};

export default connect(mapStateToProps, { fetchDataFromFirestore })(YourComponent);