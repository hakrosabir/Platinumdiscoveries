import React from 'react';

function page() {
  return (
    // <div className="container mx-auto">
    //   <div className="w-full md:w-1/2 p-3">
    //     <label className="block">
    //       <input
    //         className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-700 outline-none border border-gray-700 focus:border-gray-400 rounded-lg transition duration-200"
    //         id="contactInput1-1"
    //         type="text"
    //         placeholder="First Name"
    //         name="First&nbsp;Name"
    //         required
    //       />
    //     </label>
    //   </div>
    //   <div className="w-full md:w-1/2 p-3">
    //     <label className="block">
    //       <input
    //         className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-700 outline-none border border-gray-700 focus:border-gray-400 rounded-lg transition duration-200"
    //         id="contactInput1-1"
    //         type="text"
    //         placeholder="Middle Name"
    //         name="First&nbsp;Name"
    //         required
    //       />
    //     </label>
    //   </div>
    //   <div className="w-full md:w-1/2 p-3">
    //     <label className="block">
    //       <input
    //         className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-700 outline-none border border-gray-700 focus:border-gray-400 rounded-lg transition duration-200"
    //         id="contactInput1-1"
    //         type="text"
    //         placeholder="Last Name"
    //         name="First&nbsp;Name"
    //         required
    //       />
    //     </label>
    //   </div>
    //   <div className="w-full md:w-1/2 p-3">
    //     <label className="block">
    //       <input
    //         className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-700 outline-none border border-gray-700 focus:border-gray-400 rounded-lg transition duration-200"
    //         id="contactInput1-1"
    //         type="date"
    //         placeholder="Passport Expiry Date"
    //         name="First&nbsp;Name"
    //         required
    //       />
    //     </label>
    //   </div>

    //   <div className="flex flex-col gap-2">
    //     <label>Gender</label>
    //     <label>
    //       <input type="radio" name="gender" value="male" />
    //       Male
    //     </label>
    //     <label>
    //       <input type="radio" name="gender" value="female" />
    //       Female
    //     </label>
    //   </div>

    //   <div className="w-full md:w-1/2 p-3">
    //     <label className="block">
    //       <input
    //         className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-700 outline-none border border-gray-700 focus:border-gray-400 rounded-lg transition duration-200"
    //         id="contactInput1-1"
    //         type="date"
    //         placeholder="Date of Birth"
    //         name="First&nbsp;Name"
    //         required
    //       />
    //     </label>
    //   </div>

    //   <div className="flex flex-col gap-2">
    //     <label>Marital status</label>
    //     <label>
    //       <input type="radio" name="status" value="Single" />
    //       Single
    //     </label>
    //     <label>
    //       <input type="radio" name="status" value="Married" />
    //       Married
    //     </label>
    //     <label>
    //       <input type="radio" name="status" value="Divorced" />
    //       Divorced
    //     </label>
    //   </div>

    //   <div className="w-full md:w-1/2 p-3">
    //     <label className="block">
    //       <input
    //         className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-700 outline-none border border-gray-700 focus:border-gray-400 rounded-lg transition duration-200"
    //         id="contactInput1-4"
    //         type="text"
    //         placeholder="Phone Number"
    //         name="phone&nbsp;number"
    //       />
    //     </label>
    //   </div>

    //   <div className="w-full md:w-1/2 p-3">
    //     <label className="block">
    //       <input
    //         className="px-4 py-4 w-full text-gray-700 tracking-tight placeholder-gray-700 outline-none border border-gray-700 focus:border-gray-400 rounded-lg transition duration-200"
    //         id="contactInput1-4"
    //         type="text"
    //         placeholder="Country"
    //         name="country"
    //       />
    //     </label>
    //   </div>

    //   <div className="mb-3 w-[30%] items-center justify-center">
    //     <label
    //       htmlFor="formFileMultiple"
    //       className="mb-2 inline-block text-black-700 dark:text-black-200"
    //     >
    //       Upload Your Passport Photograph
    //     </label>
    //     <input
    //       className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
    //       type="file"
    //       id="formFileMultiple"
    //       multiple
    //     />
    //   </div>

    //   <h4>Guardian Information</h4>
    //   <hr />

    // </div>
    <div className="container mx-auto">
      <form
        action="https://formsubmit.co/platinumtravelsandtour@gmail.com"
        method="POST"
        encType="multipart/form-data"
      >
        <input type="text" name="_honey" className="hidden"></input>

        {/* Disable captcha */}
        <input type="hidden" name="_captcha" value="false"></input>

        {/* success page */}
        <input
          type="hidden"
          name="_next"
          value="https://www.platinumdiscoveries.com/success"
        ></input>

        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-black"
              >
                First name
              </label>
              <input
                type="text"
                id="first_name"
                name="first Name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label
                htmlFor="middle_name"
                className="block mb-2 text-sm font-medium"
              >
                Middle name
              </label>
              <input
                type="text"
                id="middle_name"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Mark"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium"
            >
              Last name
            </label>
            <input
              type="text"
              id="last_name"
              name="last name"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Doe"
              required
            />
          </div>
          <div>
            <label
              htmlFor="passport_number"
              className="block mb-2 text-sm font-medium"
            >
              Passport Number
            </label>
            <input
              type="text"
              name="passport_number"
              id="passport_number"
              className=" text-black bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Passport Number"
              required
            />
          </div>
          <div>
            <label
              htmlFor="passport-expiry-date"
              className="block mb-2 text-sm font-medium"
            >
              Passport Expiry Date
            </label>
            <input
              type="date"
              name="passport_expiry_date"
              id="passport-expiry-date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="123-45-678"
              required
            />
          </div>
          <div>
            <label htmlFor="dob" className="block mb-2 text-sm font-medium">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dateOfBirth"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="date of birth"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium">
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              name="phoneNumber"
              className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="123-45-678"
              required
            />
          </div>
          <div>
            <label htmlFor="address" className="block mb-2 text-sm font-medium">
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Cyprus"
              required
            />
          </div>
        </div>

        <div className="mb-6 flex flex-col gap-2">
          <label>Gender</label>
          <label>
            <input type="radio" name="gender" value="male" />
            Male
          </label>
          <label>
            <input type="radio" name="gender" value="female" />
            Female
          </label>
        </div>

        <div className=" mb-6 flex flex-col gap-2">
          <label>Marital status</label>
          <label>
            <input type="radio" name="status" value="Single" />
            Single
          </label>
          <label>
            <input type="radio" name="status" value="Married" />
            Married
          </label>
          <label>
            <input type="radio" name="status" value="Divorced" />
            Divorced
          </label>
          <label>
            <input type="radio" name="status" value="Other" />
            Other
          </label>
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john.doe@company.com"
            required
          />
        </div>

        <div className="mb-3 w-[30%] items-center justify-center">
          <label
            htmlFor="Passport"
            className="mb-2 inline-block text-black-700 dark:text-black-200"
          >
            Upload Your Passport Photograph
          </label>
          <input
            className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600  dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
            type="file"
            name="Passport"
            id="Passport"
            accept="image/png, image/jpeg"
            multiple
          />
        </div>

        <h4 className="mt-5 text-2xl">Guardian Information</h4>
        <hr className="my-5" />
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="father_first_name"
              className="block mb-2 text-sm font-medium text-black"
            >
              Father First name
            </label>
            <input
              type="text"
              name='Father First name'
              id="father_first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label
              htmlFor="father_last_name"
              className="block mb-2 text-sm font-medium"
            >
              Father Last name
            </label>
            <input
              type="text"
              name="Father Last name"
              id="father_last_name"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Mark"
              required
            />
          </div>
          <div>
            <label
              htmlFor="mother_first_name"
              className="block mb-2 text-sm font-medium text-black"
            >
              Mother First name
            </label>
            <input
              type="text"
              name="Mother First name"
              id="mother_first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label
              htmlFor="mother_last_name"
              className="block mb-2 text-sm font-medium"
            >
              Mother Last name
            </label>
            <input
              type="text"
              name='Mother Last name'
              id="mother_last_name"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Mark"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="e-phone" className="block mb-2 text-sm font-medium">
            Emergency Contact Number
          </label>
          <input
            type="tel"
            id="e-phone"
            name='Emergency Contact Number'
            className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="123-45-678"
            required
          />
        </div>

        <h4 className="mt-5 text-2xl">School And Course Choice</h4>
        <hr className="my-5" />

        <div>
          <label htmlFor="course" className="block mb-2 text-sm font-medium">
            Course
          </label>
          <input
            type="text"
            name='Course'
            id="course"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Course"
            required
          />
        </div>

        <div className="my-3">
          <label htmlFor="schoolOfChoice" className="text-xl font-medium my-3">
            School Name:
          </label>
          <select id="schoolOfChoice" name="schoolOfChoice" className="border p-2">
            <option value="New East University">New East University</option>
            <option value="Cyprus International University">Cyprus International University</option>
            <option value="SSBM">SSBM</option>
          </select>
        </div>

        <div className="my-3">
          <label htmlFor="program" className="text-xl font-medium my-3">
            Program:
          </label>
          <select id="program" name="program" className="border p-2">
            <option value="undergraduate">Undergraduate</option>
            <option value="postgraduate">Post Graduate</option>
            <option value="masters">Masters</option>
          </select>
        </div>

        <div className="mb-3 w-[30%] items-center justify-center">
          <label
            htmlFor="docs"
            className="mb-2 inline-block text-black-700 dark:text-black-200"
          >
            Upload All Relevant Documents
          </label>
          <input
            className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
            type="file"
            id="docs"
            name="relevant_docs"
            multiple
          />
        </div>

        <div className="flex items-start my-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value="Agreement"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
              name="agreed"
            />
          </div>
          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Agreement{' '}
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              I accept that the Above information provided is mine.
            </a>
            .
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default page;
