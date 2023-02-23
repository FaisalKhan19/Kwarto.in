const RegisterForm = ({ handleSubmit, name, setName, email, setEmail, phone, setPhone, password, setPassword }) => (
    <form onSubmit={handleSubmit} className="mt-3">
        <div className="form-group mb-3">
            <label className="form-label">Your Name</label>
            <input type="text" className="form-control" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
            <label className="form-label">Your EMAIL</label>
            <input type="email" className="form-control" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
            <label className="form-label">Your Phone Number</label>
            <input type="tel" className="form-control" placeholder="Enter Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="form-group">
            <label className="form-label">Your password</label>
            <input type="password" className="form-control" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="btn btn-primary">
            Submit
        </button>
    </form>
)

export default RegisterForm;