import { firestore } from './firebase';

export const fetchDataRequest = () => ({
    type: 'FETCH_DATA_REQUEST',
});


export const fetchDataSuccess = (data) => ({
    type: 'FETCH_DATA_SUCCESS',
    payload: data,
});

export const fetchDataError = (error) => ({
    type: 'FETCH_DATA_ERROR',
    payload: error,
});

export const fetchDataFromFirestore = () => {
    return async (dispatch) => {
        dispatch(fetchDataRequest());
        try {
            const dataRef = firestore.collection('test');
            const snapshot = await dataRef.get();
            const data = snapshot.docs.map((doc) => doc.data());
            dispatch(fetchDataSuccess(data));
        } catch (error) {
            dispatch(fetchDataError(error.message));
        }
    };
};
