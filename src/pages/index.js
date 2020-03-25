import React, { useState } from "react"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { useStaticQuery } from "gatsby"
import "../components/layout.css"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "skillsFund_logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const [formState, setFormState] = useState({
    name: "",
    title: "",
    email: "",
    phoneNumber: "",
    schoolName: "",
    newProgramName: "",
    newProgramDescription: "",
    newProgramCategory: "",
    newProgramLength: "",
    instructionalFormat: "",
    attendanceFormat: "",
    tuition: "",
    costOfLiving: "",
    firstCohort: "",
    numberOfCohorts: "",
    enrollment: "",
    programOfferedInPast: "",
    skillsTaught: "",
    refundPolicy: "",
    certificateEarned: "",
    completionPercentage: "",
    threeMonthEmployed: "",
    sixMonthEmployed: "",
    sixMonthSeeking: "",
    averageStartingSalary: "",
    careerServices: "",
    certification: "",
  })

  const [thankYouMessage, setThankYouMessage] = useState(false)

  const encode = data => {
    const formData = new FormData()
    Object.keys(data).forEach(k => {
      formData.append(k, data[k])
    })
    return formData
  }

  const handleChange = e => {
    e.preventDefault()
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      // headers: { "Content-Type": "multipart/form-data" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...formState,
      }),
    })
      .then(() => {
        setThankYouMessage(true)
      })
      .catch(error => alert(error))
    setThankYouMessage(true)
  }

  return (
    <div>
      <nav className="nav">
        <a href="https://skills.fund">
          {" "}
          <Img fluid={data.logo.childImageSharp.fluid} alt="Skills Fund logo" />
        </a>
      </nav>

      <div className="container">
        <SEO title="Academic Program Questionnaire" />
        <form
          name="academic-program-questionnaire"
          data-netlify="true"
          netlify-honeypot="bot-field"
          encType="multipart/form-data"
          hidden
        >
          <input type="text" name="name" />
          <input type="text" name="title" />
          <input type="text" name="email" />
          <input type="text" name="phoneNumber" />
          <input type="text" name="schoolName" />
          <input type="text" name="newProgramName" />
          <textarea name="newProgramDescription" />
          <select name="newProgramCategory" />
          <input type="text" name="newProgramLength" />
          <input type="text" name="instructionalFormat" />
          <input type="text" name="attendanceFormat" />
          <input type="text" name="tuition" />
          <input type="text" name="costOfLiving" />
          <input type="text" name="firstCohort" />
          <input type="text" name="numberOfCohorts" />
          <input type="text" name="enrollment" />
          <select name="programOfferedInPast" />
          <input type="text" name="skillsTaught" />
          <input type="text" name="refundPolicy" />
          <input type="text" name="certificateEarned" />
          <input type="text" name="completionPercentage" />
          <input type="text" name="threeMonthEmployed" />
          <input type="text" name="sixMonthEmployed" />
          <input type="text" name="sixMonthSeeking" />
          <input type="text" name="averageStartingSalary" />
          <textarea name="careerServices" />
          <input type="text" name="certification" />
        </form>

        <div className="form-container">
          <h1>Academic Program Questionnaire</h1>
          <form
            name="academic-program-questionnaire"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <input
              type="hidden"
              name="form-name"
              value="academic-program-questionnaire"
            />
            <p>Your first and last name</p>
            <input
              onChange={handleChange}
              value={formState.name}
              name="name"
              type="text"
              required
              placeholder="Enter your name"
            />
            <p>Your title</p>
            <input
              onChange={handleChange}
              value={formState.title}
              name="title"
              type="text"
              required
              placeholder="Enter your title"
            />
            <p>Your email</p>
            <input
              onChange={handleChange}
              value={formState.email}
              name="email"
              type="text"
              required
              placeholder="Enter your email"
            />
            <p>Your phone number</p>
            <input
              onChange={handleChange}
              value={formState.phoneNumber}
              name="phoneNumber"
              type="text"
              required
              placeholder="Enter your phone number"
            />
            <p>Your school name</p>
            <input
              onChange={handleChange}
              value={formState.schoolName}
              name="schoolName"
              type="text"
              required
              placeholder="Enter your school name"
            />
            <p>Exact program name as it will be listed</p>
            <input
              onChange={handleChange}
              value={formState.newProgramName}
              name="newProgramName"
              type="text"
              required
              placeholder="Enter the name of your new program"
            />
            <p>Program description</p>
            <textarea
              onChange={handleChange}
              value={formState.newProgramDescription}
              name="newProgramDescription"
              required
              placeholder="Enter a description of your new program"
            />
            <p>Program category</p>
            <select name="newProgramCategory" onChange={handleChange}>
              <option value="Medical/Clinical Training">
                Medical/Clinical Training
              </option>
              <option value="Data Science or Analytics">
                Data Science or Analytics
              </option>
              <option value="Front-End Design">Front-End Design</option>
              <option value="Full Stack/Software Engineering">
                Full Stack/Software Engineering
              </option>
              <option value="Marketing/Sales">Marketing/Sales</option>
              <option value="Mobile Development">Mobile Development</option>
              <option value="Product Management">Product Management</option>
              <option value="Project Management">Project Management</option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="UX/UI Design">UX/UI Design</option>
              <option value="Other">Other</option>
            </select>
            <p>Length of program in weeks</p>
            <input
              onChange={handleChange}
              value={formState.newProgramLength}
              name="newProgramLength"
              type="text"
              required
              placeholder="Enter the length, in weeks, of your new program"
            />
            <p>Instructional format</p>
            <input
              onChange={handleChange}
              value={formState.instructionalFormat}
              name="instructionalFormat"
              type="text"
              required
              placeholder="Online, in-person, hybrid"
            />
            <p>Attendance format</p>
            <input
              onChange={handleChange}
              value={formState.attendanceFormat}
              name="attendanceFormat"
              type="text"
              required
              placeholder="Full-time, part-time"
            />
            <p>
              Tuition: the full/maximum amount or the estimated monthly tuition
              based on a student’s standard pace
            </p>
            <input
              onChange={handleChange}
              value={formState.tuition}
              name="tuition"
              type="text"
              required
              placeholder="Maximum tuition amount"
            />
            <p>
              Cost of living (offered on full-time programs) amount, if any, you
              would want to offer
            </p>
            <input
              onChange={handleChange}
              value={formState.costOfLiving}
              name="costOfLiving"
              type="text"
              required
              placeholder="Maximum cost of living amount"
            />
            <p>First cohort start date</p>
            <input
              onChange={handleChange}
              value={formState.firstCohort}
              name="firstCohort"
              type="text"
              required
              placeholder="First cohort start date"
            />
            <p>Expected number of cohorts per year</p>
            <input
              onChange={handleChange}
              value={formState.numberOfCohorts}
              name="numberOfCohorts"
              type="text"
              required
              placeholder="Expected number of cohorts"
            />
            <p>Enrollment estimate</p>
            <input
              onChange={handleChange}
              value={formState.enrollment}
              name="enrollment"
              type="text"
              required
              placeholder="Expected enrollment"
            />
            <p>Have you offered this prorgam in the past?</p>
            <select name="programOfferedInPast" onChange={handleChange}>
              <option value="Yes">
                Yes, we have offered this exact program in the past
              </option>
              <option value="Kind of">
                Kind of, we have offered this program in a different format
                (full-time vs part-time, online vs in-person)
              </option>
              <option value="No">
                No we have never offered this program before
              </option>
            </select>
            <p>
              What specific skills does the program teach? If applicable, please
              provide a link outlining the curriculum/syllabus/course outline
            </p>
            <input
              onChange={handleChange}
              value={formState.skillsTaught}
              name="skillsTaught"
              type="text"
              required
              placeholder="Link to course outline"
            />
            <p>What is the program refund policy?</p>
            <input
              onChange={handleChange}
              value={formState.refundPolicy}
              name="refundPolicy"
              type="text"
              required
              placeholder="Program refund policy"
            />
            <p>Please provide us the most updated outcomes information.</p>
            <p>
              What percentage of students complete the program within your
              expected time frame?
            </p>
            <input
              onChange={handleChange}
              value={formState.completionPercentage}
              name="completionPercentage"
              type="text"
              required
              placeholder="Completion percentage"
            />
            <p>
              What percent of students are employed in a full-time, in-field
              position 3 months post-completion?
            </p>
            <input
              onChange={handleChange}
              value={formState.threeMonthEmployed}
              name="threeMonthEmployed"
              type="text"
              required
              placeholder="Percentage employed in-field after 3 months"
            />
            <p>
              What percent of students are employed in a full-time, in-field
              position 6 months post-completion?
            </p>
            <input
              onChange={handleChange}
              value={formState.sixMonthEmployed}
              name="sixMonthEmployed"
              type="text"
              required
              placeholder="Percentage employed in-field after 6 months"
            />
            <p>
              What percentage of students are still job-seeking and/or
              unemployed at 6 months post-completion?
            </p>
            <input
              onChange={handleChange}
              value={formState.sixMonthSeeking}
              name="sixMonthSeeking"
              type="text"
              required
              placeholder="Percentage still job-seeking after 6 months"
            />
            <p>
              What is the average starting salary after completion of the
              program?
            </p>
            <input
              onChange={handleChange}
              value={formState.averageStartingSalary}
              name="averageStartingSalary"
              type="text"
              required
              placeholder="Average starting salary"
            />
            <p>
              What credential or certificate is earned at the end of the
              program, if any?
            </p>
            <input
              onChange={handleChange}
              value={formState.certificateEarned}
              name="certificateEarned"
              type="text"
              required
              placeholder="Credential or certificate earned"
            />
            <p>
              What are some career services you provide for the students who
              complete this program to help them with job placement?
            </p>
            <textarea
              onChange={handleChange}
              value={formState.careerServices}
              name="careerServices"
              required
              placeholder="Career services offered"
            />
            <p>
              By typing my first and last name, I certify that the above
              information is complete and accurate.
            </p>
            <input
              onChange={handleChange}
              value={formState.certification}
              name="certification"
              type="text"
              required
            />
            {thankYouMessage ? (
              <p>Thanks for submitting!</p>
            ) : (
              <button
                disabled={formState.certification ? false : true}
                type="submit"
              >
                Submit
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
