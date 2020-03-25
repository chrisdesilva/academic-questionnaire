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
    state: "",
    address: "",
    additionalAddress1: "",
    additionalAddress2: "",
    additionalAddress3: "",
    additionalAddress4: "",
    additionalAddress5: "",
    additionalAddress6: "",
    additionalAddress7: "",
    additionalAddress8: "",
    additionalAddress9: "",
    additionalAddress10: "",
    existence: "",
    founder: "",
    founder1: "",
    founder2: "",
    founder3: "",
    founder4: "",
    bankruptcies: "",
    financial: "",
    license: "",
    license1: "",
    license2: "",
    license3: "",
    license4: "",
    license5: "",
    license6: "",
    license7: "",
    license8: "",
    license9: "",
    pending: "",
    online: "",
    online1: "",
    online2: "",
    noreg: "",
    website: "",
    linkedin: "",
    facebook: "",
    instagram: "",
    other: "",
    graduates: "",
    employerrelationships: "",
    topemployers: "",
    partnerorgs: "",
    certification: "",
  })

  const [thankYouMessage, setThankYouMessage] = useState(false)
  const [moreAddresses, setMoreAddresses] = useState(false)
  const [founders, setFounders] = useState(false)
  const [license, setLicense] = useState(false)
  const [online, setOnline] = useState(false)

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

  const handleAttachment = e => {
    e.preventDefault()
    setFormState({ ...formState, [e.target.name]: e.target.files[0] })
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
        <SEO title="New School Diligence" />
        <form
          name="new-school-diligence"
          data-netlify="true"
          netlify-honeypot="bot-field"
          encType="multipart/form-data"
          hidden
        >
          <input type="text" name="name" />
          <input type="text" name="state" />
          <textarea name="address" />
          <textarea name="additionalAddress1" />
          <textarea name="additionalAddress2" />
          <textarea name="additionalAddress3" />
          <textarea name="additionalAddress4" />
          <textarea name="additionalAddress5" />
          <textarea name="additionalAddress6" />
          <textarea name="additionalAddress7" />
          <textarea name="additionalAddress8" />
          <textarea name="additionalAddress9" />
          <textarea name="additionalAddress10" />
          <input type="text" name="existence" />
          <textarea name="founder" />
          <textarea name="founder1" />
          <textarea name="founder2" />
          <textarea name="founder3" />
          <textarea name="founder4" />
          <textarea name="bankruptcies" />
          <input type="text" name="financial" />
          <input type="file" id="file" name="license" />
          <input type="file" id="file" name="license1" />
          <input type="file" id="file" name="license2" />
          <input type="file" id="file" name="license3" />
          <input type="file" id="file" name="license4" />
          <input type="file" id="file" name="license5" />
          <input type="file" id="file" name="license6" />
          <input type="file" id="file" name="license7" />
          <input type="file" id="file" name="license8" />
          <input type="file" id="file" name="license9" />
          <input type="file" id="pending" name="pending" />
          <input type="file" name="online" />
          <input type="file" name="online1" />
          <input type="file" name="online2" />
          <textarea name="noreg" />
          <input type="text" name="website" />
          <input type="text" name="linkedin" />
          <input type="text" name="facebook" />
          <input type="text" name="instagram" />
          <input type="text" name="other" />
          <input type="text" name="graduates" />
          <input type="text" name="employerrelationships" />
          <textarea name="topemployers" />
          <textarea name="partnerorgs" />
          <input type="checkbox" name="certification" />
        </form>

        <div className="form-container">
          <h1>New School Diligence Questionnaire</h1>
          <form
            name="new-school-diligence"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <input
              type="hidden"
              name="form-name"
              value="new-school-diligence"
            />
            <p>What is your legal entity name?</p>
            <input
              onChange={handleChange}
              value={formState.name}
              name="name"
              type="text"
              required
              placeholder="Legal entity name"
            />
            <p>What is your legal state of organization?</p>
            <input
              onChange={handleChange}
              value={formState.state}
              name="state"
              type="text"
              required
              placeholder="Legal state of organization"
            />
            <p>What is the address of your headquarters?</p>
            <textarea
              onChange={handleChange}
              value={formState.address}
              name="address"
              required
              placeholder="Street Address, City, State, Zip"
            />
            <p>
              If you have multiple campus locations, please provide the address
              for each campus.
            </p>
            <button onClick={() => setMoreAddresses(!moreAddresses)}>
              {moreAddresses ? "Hide Campus Addresses" : "Add Campus Addresses"}
            </button>

            {moreAddresses && (
              <>
                <textarea
                  onChange={handleChange}
                  value={formState.additionalAddress1}
                  name="additionalAddress1"
                  placeholder="Street Address, City, State, Zip"
                />
                <textarea
                  onChange={handleChange}
                  value={formState.additionalAddress2}
                  name="additionalAddress2"
                  placeholder="Street Address, City, State, Zip"
                />
                <textarea
                  onChange={handleChange}
                  value={formState.additionalAddress3}
                  name="additionalAddress3"
                  placeholder="Street Address, City, State, Zip"
                />
                <textarea
                  onChange={handleChange}
                  value={formState.additionalAddress4}
                  name="additionalAddress4"
                  placeholder="Street Address, City, State, Zip"
                />
                <textarea
                  onChange={handleChange}
                  value={formState.additionalAddress5}
                  name="additionalAddress5"
                  placeholder="Street Address, City, State, Zip"
                />
                <textarea
                  onChange={handleChange}
                  value={formState.additionalAddress6}
                  name="additionalAddress6"
                  placeholder="Street Address, City, State, Zip"
                />
                <textarea
                  onChange={handleChange}
                  value={formState.additionalAddress7}
                  name="additionalAddress7"
                  placeholder="Street Address, City, State, Zip"
                />
                <textarea
                  onChange={handleChange}
                  value={formState.additionalAddress8}
                  name="additionalAddress8"
                  placeholder="Street Address, City, State, Zip"
                />
                <textarea
                  onChange={handleChange}
                  value={formState.additionalAddress9}
                  name="additionalAddress9"
                  placeholder="Street Address, City, State, Zip"
                />
                <textarea
                  onChange={handleChange}
                  value={formState.additionalAddress10}
                  name="additionalAddress10"
                  placeholder="Street Address, City, State, Zip"
                />
              </>
            )}
            <p>How long has your school been in existence (in years)?</p>
            <input
              onChange={handleChange}
              value={formState.existence}
              name="existence"
              type="text"
              required
              placeholder="Length in years"
            />
            <p>
              Please provide the names of each founder and executive along with
              a LinkedIn profile link.
            </p>
            <textarea
              onChange={handleChange}
              value={formState.founder}
              name="founder"
              required
              placeholder="Founder/executive name and LinkedIn profile link"
            />
            <button onClick={() => setFounders(true)}>Add More</button>
            {founders && (
              <>
                <textarea
                  onChange={handleChange}
                  value={formState.founder1}
                  name="founder1"
                  placeholder="Founder/executive name and LinkedIn profile link"
                />
                <textarea
                  onChange={handleChange}
                  value={formState.founder2}
                  name="founder2"
                  placeholder="Founder/executive name and LinkedIn profile link"
                />
                <textarea
                  onChange={handleChange}
                  value={formState.founder3}
                  name="founder3"
                  placeholder="Founder/executive name and LinkedIn profile link"
                />
                <textarea
                  onChange={handleChange}
                  value={formState.founder4}
                  name="founder4"
                  placeholder="Founder/executive name and LinkedIn profile link"
                />
              </>
            )}
            <p>
              Please describe any bankruptcies, regulatory enforcement actions
              and former or pending litigation by or against: (1) the school or
              (2) the leadership team.
            </p>
            <textarea
              onChange={handleChange}
              value={formState.bankruptcies}
              name="bankruptcies"
              required
              placeholder="Describe..."
            />
            <p>
              Based on your working capital needs and operational costs, are you
              able to meet current and future financial obligations (rent,
              salaries, marketing, etc.) for the next 12 months?
            </p>
            <input
              onChange={handleChange}
              value={formState.financial}
              name="financial"
              type="text"
              required
              placeholder="Yes/No"
            />
            <p>
              Please provide a copy of your license or state approval for all
              states in which you operate at which students receiving Skills
              Fund financing may attend.
            </p>
            <input
              onChange={handleAttachment}
              name="license"
              id="license"
              type="file"
            />
            <button onClick={() => setLicense(true)}>Add More</button>
            {license && (
              <>
                <input
                  onChange={handleAttachment}
                  name="license1"
                  id="license1"
                  type="file"
                />
                <input
                  onChange={handleAttachment}
                  name="license2"
                  id="license2"
                  type="file"
                />
                <input
                  onChange={handleAttachment}
                  name="license3"
                  id="license3"
                  type="file"
                />
                <input
                  onChange={handleAttachment}
                  name="license4"
                  id="license4"
                  type="file"
                />
                <input
                  onChange={handleAttachment}
                  name="license5"
                  id="license5"
                  type="file"
                />
                <input
                  onChange={handleAttachment}
                  name="license6"
                  id="license6"
                  type="file"
                />
                <input
                  onChange={handleAttachment}
                  name="license7"
                  id="license7"
                  type="file"
                />
                <input
                  onChange={handleAttachment}
                  name="license8"
                  id="license8"
                  type="file"
                />
                <input
                  onChange={handleAttachment}
                  name="license9"
                  id="license9"
                  type="file"
                />
              </>
            )}
            <p>
              If your application is pending, please provide proof that you are
              authorized to operate, along with the application submission date
              and expected approval date.
            </p>
            <input
              onChange={handleAttachment}
              name="pending"
              id="pending"
              type="file"
            />
            <p>
              If you operate online, please provide relevant approval from
              regulatory agencies.
            </p>
            <input
              onChange={handleAttachment}
              name="online"
              id="online"
              type="file"
            />
            <button onClick={() => setOnline(true)}>Add More</button>
            {online && (
              <>
                <input
                  onChange={handleAttachment}
                  name="online1"
                  id="online1"
                  type="file"
                />
                <input
                  onChange={handleAttachment}
                  name="online2"
                  id="online2"
                  type="file"
                />
              </>
            )}
            <p>
              If you are not required to obtain regulatory approval to operate,
              please explain and provide the basis for your exemption.
            </p>
            <textarea
              onChange={handleChange}
              value={formState.noreg}
              name="noreg"
            />
            <p>
              Please provide links to all websites and social media accounts.
            </p>
            <input
              onChange={handleChange}
              value={formState.website}
              name="website"
              required
              placeholder="Website"
            />
            <input
              onChange={handleChange}
              value={formState.linkedin}
              name="linkedin"
              placeholder="LinkedIn"
            />
            <input
              onChange={handleChange}
              value={formState.facebook}
              name="facebook"
              placeholder="Facebook"
            />
            <input
              onChange={handleChange}
              value={formState.instagram}
              name="instagram"
              placeholder="Instagram"
            />
            <input
              onChange={handleChange}
              value={formState.other}
              name="other"
              placeholder="Other"
            />
            <p>
              Approximately how many different employers have hired your
              graduates?
            </p>
            <input
              onChange={handleChange}
              value={formState.graduates}
              name="graduates"
              type="text"
              required
            />
            <p>
              How many employers have formal relationships with your school?
            </p>
            <input
              onChange={handleChange}
              value={formState.employerrelationships}
              name="employerrelationships"
              type="text"
              required
            />
            <p>Who are the top employers of your graduates?</p>
            <textarea
              onChange={handleChange}
              value={formState.topemployers}
              name="topemployers"
              type="text"
              required
            />
            <p>
              Do you partner with any governmental or community organizations?
              If so, which ones?
            </p>
            <textarea
              onChange={handleChange}
              value={formState.partnerorgs}
              name="partnerorgs"
              required
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
