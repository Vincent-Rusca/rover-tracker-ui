import Alert from 'react-bootstrap/Alert';

const ApiContactErrorMessage = ({apiContactError, setApiContactError, defaultErrorState}) => {
  if(apiContactError.show) {
    return (
      <div className="d-flex justify-content-center">
        <Alert className="col-md-6" variant="danger" onClose={() => setApiContactError(defaultErrorState)}>
          <Alert.Heading>Error in {apiContactError.location}</Alert.Heading>
          <p>
            Status: {apiContactError.status}
          </p>
          {apiContactError.status === 404 ?
            <p>
              There is no data available for the given date. If you are attempting to retrieve today's rover images, they might not be available yet.
            </p> :
            <p>
              Unfortunately, it seems there is an error retrieving your request. Please try again later.
            </p>
          }
        </Alert>
      </div>
    );
  }
  return null;
}

export default ApiContactErrorMessage;