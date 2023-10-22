import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="h-[calc(100vh-60px)] bg-gray-200 w-full flex flex-col justify-center items-center space-y-9">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Patient Registration</h2>
          <p>Register a new patient.</p>
          <div className="card-actions justify-end">
            <Link
              href="/patients/registration"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >Start Here</Link>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Request Patient Record</h2>
          <p>Request and download medical record.</p>
          <div className="card-actions justify-end">
            <Link
              href="/patients/request-record"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >Start Here</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;