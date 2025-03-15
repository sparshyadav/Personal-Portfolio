import React, { useState } from 'react';
import './ContactForm.scss';
import { toast } from 'react-toastify';

const ContactForm: React.FC = () => {
  const [formData, setState] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    profileUrl: '',
    reason: [] as string[],
    meetingDate: '',
    jobLink: '',
    employmentType: [] as string[],
    additionalInfo: [] as string[]
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;

    if (name === "reason") {
      if (checked) {
        setState({
          ...formData,
          reason: [...formData.reason, value]
        });
      } else {
        setState({
          ...formData,
          reason: formData.reason.filter(item => item !== value)
        });
      }
    } else if (name === "employmentType") {
      if (checked) {
        setState({
          ...formData,
          employmentType: [...formData.employmentType, value]
        });
      } else {
        setState({
          ...formData,
          employmentType: formData.employmentType.filter(item => item !== value)
        });
      }
    } else if (name === "additionalInfo") {
      if (checked) {
        setState({
          ...formData,
          additionalInfo: [...formData.additionalInfo, value]
        });
      } else {
        setState({
          ...formData,
          additionalInfo: formData.additionalInfo.filter(item => item !== value)
        });
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const {
      fullName,
      company,
      email,
      phone,
      profileUrl,
      reason,
      meetingDate,
      jobLink,
      employmentType,
      additionalInfo
    } = formData;

    console.log("Full Name:", fullName);
    console.log("Company:", company);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Profile URL:", profileUrl);
    console.log("Contact Reason(s):", reason);

    if (reason.includes("Schedule a time to talk")) {
      console.log("Meeting Date:", meetingDate);
    }

    if (reason.includes("Discuss a job or project")) {
      console.log("Job Link:", jobLink);
      console.log("Employment Type(s):", employmentType);
    }

    if (reason.includes("Request additional information")) {
      console.log("Additional Information Requested:", additionalInfo);
    }

    fetch('https://personal-portfolio-958i.onrender.com/api/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then((response) => {
        console.log("Response Form Email Send: ", response);
        if (response.status === 200) {
          toast.success("Form Submitted Successfully ✅")
        }
      })
      .catch(error => console.error('Error:', error));
  };

  const isReasonSelected = (reason: string) => {
    return formData.reason.includes(reason);
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form-wrapper">
        <h1 className="form-title">Contact form</h1>
        <p className="form-subtitle">Please complete the form below so we can forward your contact request to Sparsh Yadav:</p>

        <div className="form-box">
          <h2 className="recipient-greeting">Hi Sparsh,</h2>

          <form onSubmit={handleSubmit}>
            <div className="name-company-row">
              <div className="form-group">
                <label className="form-label">
                  First and last name <span className="required">*</span>
                </label>
                <div className="input-wrapper">
                  <span className="input-prefix">I am</span>
                  <input
                    name="fullName"
                    type="text"
                    placeholder="Jessica Claire"
                    className="form-input"
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Company name
                </label>
                <div className="input-wrapper">
                  <span className="input-prefix">from</span>
                  <input
                    name="company"
                    type="text"
                    placeholder="Bed Bath & Beyond, Inc"
                    className="form-input"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="reason-label">
                I am contacting you because <span className="required">*</span> :
              </label>
              <p className="reason-helper">Tell them why you're reaching out:</p>

              <div className="checkbox-item">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="reason"
                    value="Schedule a time to talk"
                    className="checkbox-input"
                    onChange={handleCheckboxChange}
                  />
                  Schedule a time to talk
                </label>
              </div>

              {isReasonSelected("Schedule a time to talk") && (
                <div className="conditional-field date-picker-wrapper">
                  <label className="form-label">Select a date for our meeting</label>
                  <input
                    type="datetime-local"
                    name="meetingDate"
                    className="form-input"
                    onChange={handleInputChange}
                  />
                </div>
              )}

              <div className="checkbox-item">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="reason"
                    value="Discuss a job or project"
                    className="checkbox-input"
                    onChange={handleCheckboxChange}
                  />
                  Discuss a job or project
                </label>
              </div>

              {isReasonSelected("Discuss a job or project") && (
                <div className="conditional-field">
                  <div className="form-group">
                    <label className="form-label">LinkedIn or job posting link</label>
                    <input
                      type="url"
                      name="jobLink"
                      placeholder="https://linkedin.com/jobs/..."
                      className="form-input"
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="employment-types">
                    <label className="form-label">Employment type:</label>

                    <div className="checkbox-item">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="employmentType"
                          value="Full-time"
                          className="checkbox-input"
                          onChange={handleCheckboxChange}
                        />
                        Full-time
                      </label>
                    </div>

                    <div className="checkbox-item">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="employmentType"
                          value="Part-time"
                          className="checkbox-input"
                          onChange={handleCheckboxChange}
                        />
                        Part-time
                      </label>
                    </div>

                    <div className="checkbox-item">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="employmentType"
                          value="Contract work"
                          className="checkbox-input"
                          onChange={handleCheckboxChange}
                        />
                        Contract work
                      </label>
                    </div>
                  </div>
                </div>
              )}

              <div className="checkbox-item">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="reason"
                    value="Request additional information"
                    className="checkbox-input"
                    onChange={handleCheckboxChange}
                  />
                  Request additional information
                </label>
              </div>

              {isReasonSelected("Request additional information") && (
                <div className="conditional-field additional-info">
                  <label className="form-label">I'm interested in:</label>

                  <div className="checkbox-item">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="additionalInfo"
                        value="Work portfolio"
                        className="checkbox-input"
                        onChange={handleCheckboxChange}
                      />
                      Work portfolio
                    </label>
                  </div>

                  <div className="checkbox-item">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="additionalInfo"
                        value="Background check"
                        className="checkbox-input"
                        onChange={handleCheckboxChange}
                      />
                      Background check
                    </label>
                  </div>

                  <div className="checkbox-item">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="additionalInfo"
                        value="Resume"
                        className="checkbox-input"
                        onChange={handleCheckboxChange}
                      />
                      Resume
                    </label>
                  </div>

                  <div className="checkbox-item">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="additionalInfo"
                        value="References"
                        className="checkbox-input"
                        onChange={handleCheckboxChange}
                      />
                      References
                    </label>
                  </div>

                  <div className="checkbox-item">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="additionalInfo"
                        value="Others"
                        className="checkbox-input"
                        onChange={handleCheckboxChange}
                      />
                      Others
                    </label>
                  </div>
                </div>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">
                Email address <span className="required">*</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="jessica.claire@example.com"
                className="form-input"
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Phone number
              </label>
              <input
                name="phone"
                type="tel"
                placeholder="550 432-1000"
                className="form-input"
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                LinkedIn Profile:
              </label>
              <div className="input-wrapper">
                <span className="input-prefix"></span>
                <input
                  name="profileUrl"
                  type="text"
                  className="form-input"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-footer">
              <div className="signature">
                <p>Looking forward to hearing from you!</p>
                <p>{formData.fullName}</p>
              </div>

              <button
                type="submit"
                className="submit-button"
              >
                Send
              </button>
            </div>

            <div className="terms-notice">
              <p>
                By clicking "send", you accept our Terms of Service and Privacy Policy. We will forward your contact request, however it is up to the receiver if the request is answered.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;