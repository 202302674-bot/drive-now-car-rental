import axios from "axios";
import Footer from "../components/Footer";
import useForm from "../hooks/useForm";

function Contact() {
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    phone: "",
    message: "",
  };

  const submitForm = async (values) => {
    await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      values
    );
  };

  const {
    values,
    errors,
    isSubmitting,
    success,
    submitError,
    handleChange,
    handleSubmit,
  } = useForm(initialValues, submitForm);

  return (
    <>
      <main className="contact-page">
        <div className="container py-5">
          <div className="text-center mb-5">
            <p className="section-label">GET IN TOUCH</p>

            <h1>Contact DriveNow</h1>

            <p className="lead">
              Register your information and we will get back
              to you.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <div className="card shadow-sm p-4">

                {success && (
                  <div
                    className="alert alert-success"
                    role="alert"
                  >
                    ✅ Form submitted successfully!
                  </div>
                )}

                {submitError && (
                  <div
                    className="alert alert-danger"
                    role="alert"
                  >
                    ❌ {submitError}
                  </div>
                )}

                <form
                  onSubmit={handleSubmit}
                  noValidate
                >
                  {/* Full Name */}
                  <div className="mb-3">
                    <label
                      htmlFor="fullName"
                      className="form-label"
                    >
                      Full Name
                    </label>

                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      className={`form-control ${
                        errors.fullName ? "is-invalid" : ""
                      }`}
                      placeholder="Enter your full name"
                      value={values.fullName}
                      onChange={handleChange}
                    />

                    {errors.fullName && (
                      <div className="invalid-feedback">
                        {errors.fullName}
                      </div>
                    )}
                  </div>

                  {/* Email */}
                  <div className="mb-3">
                    <label
                      htmlFor="email"
                      className="form-label"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      placeholder="Enter your email"
                      value={values.email}
                      onChange={handleChange}
                    />

                    {errors.email && (
                      <div className="invalid-feedback">
                        {errors.email}
                      </div>
                    )}
                  </div>

                  {/* Password */}
                  <div className="mb-3">
                    <label
                      htmlFor="password"
                      className="form-label"
                    >
                      Password
                    </label>

                    <input
                      id="password"
                      name="password"
                      type="password"
                      className={`form-control ${
                        errors.password ? "is-invalid" : ""
                      }`}
                      placeholder="Enter your password"
                      value={values.password}
                      onChange={handleChange}
                    />

                    {errors.password && (
                      <div className="invalid-feedback">
                        {errors.password}
                      </div>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="mb-3">
                    <label
                      htmlFor="phone"
                      className="form-label"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className={`form-control ${
                        errors.phone ? "is-invalid" : ""
                      }`}
                      placeholder="Enter your phone number"
                      value={values.phone}
                      onChange={handleChange}
                    />

                    {errors.phone && (
                      <div className="invalid-feedback">
                        {errors.phone}
                      </div>
                    )}
                  </div>

                  {/* Message */}
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="form-label"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className={`form-control ${
                        errors.message ? "is-invalid" : ""
                      }`}
                      placeholder="Write your message"
                      value={values.message}
                      onChange={handleChange}
                    />

                    {errors.message && (
                      <div className="invalid-feedback">
                        {errors.message}
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? "Submitting..."
                      : "Submit"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Contact;